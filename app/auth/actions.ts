"use server";

import { z } from "zod";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import { db } from "@/lib/db/client";
import { users, teams, teamMembers } from "@/lib/db/schema";
import { createAuthSession, clearAuthSession } from "@/lib/auth/session";
import { sendEmail } from "@/lib/email/sendgrid";
import { generateAuthToken } from "@/lib/auth/tokens";

export type AuthActionState = {
  status: "idle" | "success" | "error";
  message: string;
  _devUrl?: string;
};

const signUpSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Enter a valid email."),
  password: z.string().min(8, "Minimum 8 characters."),
  confirmPassword: z.string().min(8, "Confirm your password."),
});

const signInSchema = z.object({
  email: z.string().email("Enter a valid email."),
  password: z.string().min(8, "Minimum 8 characters."),
});

export async function signUpWithPassword(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  try {
    const parsed = signUpSchema.safeParse({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    if (!parsed.success) {
      return {
        status: "error",
        message: parsed.error.issues[0]?.message ?? "Invalid input.",
      };
    }

    const { email, password, confirmPassword, firstName, lastName } = parsed.data;
    if (password !== confirmPassword) {
      return { status: "error", message: "Passwords do not match." };
    }

    const existing = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.email, email.toLowerCase()))
      .limit(1);

    if (existing.length > 0) {
      return { status: "error", message: "Account already exists for this email address." };
    }

    const hash = await bcrypt.hash(password, 12);
    const [userRes] = await db
      .insert(users)
      .values({
        email: email.toLowerCase(),
        passwordHash: hash,
        firstName,
        lastName,
      })
      .returning({ id: users.id });

    // Create a new single-tenant team and default membership for the user
    const [teamRes] = await db
      .insert(teams)
      .values({ name: `${firstName}'s Team` })
      .returning({ id: teams.id });

    await db.insert(teamMembers).values({
      teamId: teamRes.id,
      userId: userRes.id,
      role: "owner",
    });

    // Optional: Send welcome email
    try {
      await sendEmail(
        email,
        "Welcome to TeamTrackr",
        `<p>Your new account is ready! Start tracking clients at <a href="/">TeamTrackr</a>.</p>`
      );
    } catch (e) {
      console.error("[sendEmail] error", e);
    }

    await createAuthSession({ userId: userRes.id, email: email.toLowerCase() });

    return {
      status: "success",
      message: "Account created! Redirecting to dashboard...",
    };
  } catch (e) {
    console.error("[signUpWithPassword] Unexpected error:", e);
    return {
      status: "error",
      message: "Something went wrong during signup (fetch/server). Please try again or contact support.",
    };
  }
}

export async function signInWithPassword(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  try {
    const parsed = signInSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (!parsed.success) {
      return {
        status: "error",
        message: parsed.error.issues[0]?.message ?? "Invalid input.",
      };
    }

    const { email, password } = parsed.data;

    const [user] = await db
      .select({
        id: users.id,
        passwordHash: users.passwordHash,
        firstName: users.firstName,
        lastName: users.lastName,
        email: users.email,
      })
      .from(users)
      .where(eq(users.email, email.toLowerCase()))
      .limit(1);

    if (!user) {
      return {
        status: "error",
        message: "Invalid email or password.",
      };
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      return {
        status: "error",
        message: "Invalid email or password.",
      };
    }

    await createAuthSession({ userId: user.id, email: user.email });

    return {
      status: "success",
      message: "Signed in! Redirecting to dashboard...",
    };
  } catch (e) {
    console.error("[signInWithPassword] Unexpected error:", e);
    return {
      status: "error",
      message: "Sign in failed due to server/fetch error. Please try again or check network connection.",
    };
  }
}

export async function signOutAction() {
  try {
    await clearAuthSession();
    redirect("/auth#signin");
  } catch (e) {
    console.error("[signOutAction] Unexpected error:", e);
    redirect("/auth#signin");
  }
}
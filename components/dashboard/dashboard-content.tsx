"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type DashboardContentProps = {
  greeting: string;
  firstName: string;
};

export function DashboardContent({ greeting, firstName }: DashboardContentProps) {
  return (
    <div className="w-full flex flex-col gap-8">
      {/* Greeting Card */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            {greeting}, {firstName}! 👋
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-lg mb-2">
            Welcome to TeamTrackr—your secure, centralized hub for managing clients, projects, contacts, invoices, and team activity.
          </p>
        </CardContent>
      </Card>

      {/* Empty state / Quick Start */}
      <Card className="w-full border-dashed border-2 border-primary">
        <CardHeader>
          <CardTitle>
            No clients yet
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-3">
            Your workspace is ready! Start by adding your first client to TeamTrackr and explore project, contact, and invoicing workflows for your team.
          </div>
          {/* This is where a future "Add Client" button/dialog will go */}
        </CardContent>
      </Card>
    </div>
  );
}
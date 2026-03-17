// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ... [Types unchanged for all blocks, omitted for brevity] ...

// ─── Root ───────────────────────────────────────────────────────────────────
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "CRM for Teams",
    badgeOuter: "Welcome to TeamTrackr",
    titleBefore: "Power Up Your",
    titleHighlight: "Internal CRM",
    titleAfter: "— streamline client, project, and team workflows",
    subtitle:
      "TeamTrackr centralizes client relationships, streamlines project tracking, and empowers your organization to work together efficiently—all inside a secure, team-focused CRM.",
    primaryCta: { label: "Start Organizing Clients", href: "/auth#signup" },
    secondaryCta: { label: "See CRM Features", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "TeamTrackr dashboard preview",
  },

  // ── Sponsors (removed for internal CRM focus; section will be hidden)───
  sponsors: {
    heading: "",
    items: [],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why TeamTrackr",
    heading: "Centralize Your Clients. Empower Your Team.",
    description:
      "Built for organizations tired of scattered spreadsheets—TeamTrackr keeps all your client, project, and invoicing data in one secure workspace, giving your team the clarity to deliver results.",
    items: [
      {
        icon: "UserCheck",
        title: "One Source of Truth",
        description: "Track clients, contacts, projects, and comms—all in one place, updated for the whole team."
      },
      {
        icon: "Users",
        title: "Empower Every Role",
        description: "Role-based access means only authorized team members see or edit what they should—admin safety is standard.",
      },
      {
        icon: "Layers",
        title: "Client–Project Linkage",
        description: "Link projects, invoices, activities, and contracts directly to client records for true CRM agility."
      },
      {
        icon: "ClipboardList",
        title: "Operational Visibility",
        description: "From tasks to invoices, gain a clear view into all client work and accelerate your outcomes.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "TeamTrackr Capabilities",
    heading: "Everything Your Team Needs In One CRM",
    subtitle:
      "TeamTrackr covers every aspect of client management, project delivery, and invoicing—built for internal collaboration and efficiency.",
    items: [
      { icon: "Users", title: "Client Management", description: "Store client profiles, contact details, notes, and status—archive, search, or update in seconds." },
      { icon: "UserCircle2", title: "Contact Directory", description: "Manage contacts by client, track roles, and keep every connection current and accessible." },
      { icon: "BriefcaseBusiness", title: "Project Tracking", description: "Link projects to clients, manage budgets, lifecycles, deadlines and assignments securely." },
      { icon: "FileInput", title: "Invoice Control", description: "Generate, send, and track project invoices—workflows for drafts, paid, and overdue states." },
      { icon: "ListChecks", title: "Task & Milestone Hub", description: "Break projects into actionable tasks, log activities, and hit every milestone collaboratively." },
      { icon: "SearchCheck", title: "Activity & Reporting", description: "See timelines, filter by client/project, and export activity or invoice logs as needed." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Work Your Way",
    heading: "Workflow Tools Built For Teams",
    subtitle:
      "A focused platform to manage every step: onboarding new clients, tracking projects, sending invoices, and collaborating on deliverables—no distractions.",
    items: [
      { title: "Client CRM", description: "Holistic client/account records, visible to all authorized teammates.", pro: false },
      { title: "Project & Task Ops", description: "Assign, track, and complete actionable subtasks for every project.", pro: false },
      { title: "Invoice Handling", description: "Prepare, send, and manage project billing and payment status.", pro: false },
      { title: "Multi-Tenant Safety", description: "Every data update and view is scoped to your team for privacy and clarity.", pro: true },
    ],
  },

  // ── Testimonials (optional, now internal CRM focus)───────────────────────
  testimonials: {
    eyebrow: "Team Wins",
    heading: "How Teams Improve with TeamTrackr",
    reviews: [
      { image: "/demo-img.jpg", name: "Morgan Lee", role: "Operations Manager", comment: "TeamTrackr made client handoffs effortless and gave us real insight into project status at any time.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Priya Desai", role: "Head of Client Success", comment: "We consolidated SO many spreadsheets—the whole team trusts the data now.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Jacob Fox", role: "Finance Lead", comment: "Invoicing under projects keeps us organized. No more lost-billing headaches.", rating: 5 },
      { image: "/demo-img.jpg", name: "Hailey Anders", role: "Team Lead", comment: "We ramp up new teammates way faster now. Access what you need, nothing you shouldn’t.", rating: 5 },
    ],
  },

  // ── Team: Keep as owner only (public “meet the team” now omitted for internal use) ──
  team: {
    eyebrow: "TeamTrackr Owner",
    heading: "Built by Chirag Dodiya",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Product & Engineering"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/chiragdodiya" },
          { name: "Github", url: "https://github.com/chiragdodiya" },
        ],
      }
    ]
  },

  // ── Pricing (section will be hidden for internal CRM; no public plans)────
  pricing: {
    eyebrow: "",
    heading: "",
    subtitle: "",
    priceSuffix: "",
    plans: [],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to TeamTrackr",
    description:
      "Questions about implementing TeamTrackr, onboarding your team, or customizing workflows? Let us know—your feedback helps us build a better CRM.",
    mailtoAddress: "hi@chirag.co",
    info: {
      address: { label: "Location", value: "Remote-first • Available worldwide" },
      phone: { label: "Contact", value: "" },
      email: { label: "Email us", value: "hi@chirag.co" },
      hours: { label: "Support hours", value: ["Monday - Friday", "9AM - 5PM UTC"] },
    },
    formSubjects: ["Onboarding", "Feature Request", "Support", "Custom Workflow"],
    formSubmitLabel: "Submit Inquiry",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "TeamTrackr Frequently Asked",
    items: [
      { question: "Is TeamTrackr only for internal use?", answer: "Yes. TeamTrackr is purpose-built for internal teams. There is no external client portal at this time." },
      { question: "Can we manage multiple client accounts and projects?", answer: "Yes! Track unlimited clients, projects, invoices, and team activity—all linked by your team’s organization." },
      { question: "Do we need to manually manage permissions?", answer: "No. Role-based permissioning is enabled by default, so only admins and authorized teammates can add/edit/archive entities." },
      { question: "Is my team’s data private from other organizations?", answer: "Absolutely. TeamTrackr enforces strict multi-tenant isolation—your data is visible only to users in your team." },
      { question: "Can I export client or invoice data?", answer: "Yes. You may export data on demand from any main view for easier reporting or audit purposes." },
    ],
  },

  // ── Footer: Updated for TeamTrackr ────────────────────────────────────────
  footer: {
    brandName: "TeamTrackr",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "hi@chirag.co", href: "mailto:hi@chirag.co" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "How It Works", href: "#" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Support", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Follow",
        links: [
          { label: "GitHub", href: "https://github.com/chiragdodiya" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/chiragdodiya" },
        ],
      },
    ],
    copyright: "© 2026 TeamTrackr Internal CRM.",
    attribution: { label: "Built with Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar: CRM-focused, internal-first ──────────────────────────────────
  navbar: {
    brandName: "TeamTrackr",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#faq", label: "FAQ" },
      { href: "/#contact", label: "Contact" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/hero-image-light.jpeg", alt: "TeamTrackr CRM preview" },
    features: [
      { title: "Manage Clients", description: "All your client and project data—organized, searchable, secure." },
      { title: "Team Collaboration", description: "Invite your team, assign roles, and track shared progress." },
      { title: "Invoicing & Ops", description: "Project-based billing, invoice tracking, and activity logging." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Get Started",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/chiragdodiya", ariaLabel: "View TeamTrackr on GitHub" },
  },
};

export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}
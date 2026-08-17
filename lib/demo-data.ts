/**
 * clinidocDemo — the single fictional dataset every section on the page draws from.
 * Mirrors the `clinidocDemo/` structure specified in Milestone 20: one patient,
 * one connected story, referenced by every component rather than each inventing
 * its own illustrative values.
 */

export const demoPatient = {
  name: "Sarah Mitchell",
  nextAppointment: {
    day: "Thursday",
    time: "10:30 AM",
    type: "Follow-up Assessment",
    provider: "Dr. Emily Carter",
  },
  assessmentStatus: "1 in progress",
  unreadMessages: 1,
  recentDocuments: 3,
};

export const explorerFrames = {
  patient: {
    tabLabel: "Patient",
    frameTitle: "My Care",
    frameName: demoPatient.name,
    rows: [
      { label: "Next appointment", value: "Thu · 10:30 AM" },
      { label: "Assessment", value: "1 in progress" },
      { label: "Messages", value: "1 unread" },
      { label: "Recent activity", value: "3 events" },
    ],
  },
  careteam: {
    tabLabel: "Care Team",
    frameTitle: "Clinical Workspace",
    frameName: demoPatient.name,
    rows: [
      { label: "Patient", value: "Sarah Mitchell" },
      { label: "Assessment", value: "Follow-up Assessment" },
      { label: "Clinical note", value: "AI-assisted draft" },
      { label: "History", value: "2 assessments" },
    ],
  },
  clinical: {
    tabLabel: "Clinical",
    frameTitle: "Clinical Programs",
    frameName: "Follow-up Care",
    rows: [
      { label: "Blocks", value: "3" },
      { label: "Characterizations", value: "4" },
      { label: "Clinical logic", value: "Enabled" },
    ],
  },
  operations: {
    tabLabel: "Operations",
    frameTitle: "Operations",
    frameName: "Today",
    rows: [
      { label: "Appointments", value: "24" },
      { label: "Referrals", value: "8 awaiting" },
      { label: "Providers", value: "12 active" },
      { label: "Users", value: "3 shown" },
      { label: "Roles", value: "4 defined" },
      { label: "Permissions", value: "Matrix-based" },
    ],
  },
  security: {
    tabLabel: "Security",
    frameTitle: "Security Center",
    frameName: "Account Protected",
    rows: [
      { label: "2FA", value: "● Enabled" },
      { label: "Sessions", value: "3 active" },
      { label: "Devices", value: "2 trusted" },
      { label: "Audit", value: "12 events" },
    ],
  },
} as const;

export type ExplorerTabKey = keyof typeof explorerFrames;

export const capabilitySections = [
  {
    id: "clinical",
    eyebrow: "Configurable Clinical Programs",
    headline: "Configure the workflow around the care you deliver.",
    chain: ["Program", "Block", "Question", "Condition", "Flow", "Characterization", "Record"],
    highlightEnds: true,
    tint: "a" as const,
  },
  {
    id: "patient",
    eyebrow: "Patient Portal",
    headline: "Give patients a clearer view of their care.",
    chain: ["Patient Portal", "What's Next?", "Appointment", "Assessment", "Messages", "Records"],
    highlightEnds: true,
    tint: "surface" as const,
  },
  {
    id: "documentation",
    eyebrow: "Clinical Documentation",
    headline: "Make every encounter easier to document.",
    supporting:
      "AI-assisted. Clinician-led — every AI-drafted section requires review before it becomes part of the record.",
    chain: ["Encounter", "Documentation", "AI Assist", "Clinician Review", "Clinical Record"],
    highlightMiddle: true,
    tint: "b" as const,
  },
  {
    id: "intelligence",
    eyebrow: "Clinical Intelligence",
    headline: "See what changed. Understand the context.",
    chain: ["Assessment", "Characterization", "Trend", "Clinical Context"],
    highlightMiddle: true,
    tint: "a" as const,
  },
  {
    id: "operations",
    eyebrow: "Operational Control",
    headline: "The control layer behind every encounter.",
    chain: ["Users", "Roles", "Permissions", "Providers", "Scheduling", "Appointments"],
    highlightEnds: true,
    tint: "surface" as const,
  },
  {
    id: "security",
    eyebrow: "Security & Control",
    headline: "Security isn't a badge. It's a system.",
    chain: ["Identity", "2FA", "Session", "Authorization", "Audit"],
    highlightLast: true,
    tint: "b" as const,
  },
  {
    id: "architecture",
    eyebrow: "Platform Architecture",
    headline: "Built as a platform, not a patchwork.",
    chain: ["Client", "API", "Business Logic", "Clinical Domains", "MySQL", "Storage"],
    tint: "a" as const,
  },
] as const;

export const faqItems = [
  {
    question: "What is CliniDoc?",
    answer:
      "A connected clinical platform bringing patient, care-team and clinical workflows together.",
  },
  {
    question: "Who is CliniDoc for?",
    answer:
      "Healthcare organizations and teams that need connected patient, clinical and operational workflows.",
  },
  {
    question: "Does CliniDoc support patient portals?",
    answer:
      "Yes. The patient experience includes appointments, assessments, records, medications, documents, messages and security.",
  },
  {
    question: "Does CliniDoc support clinical assessments?",
    answer:
      "Yes. Assessment workflows support structured questions, conditions, flow and clinical characterizations.",
  },
  {
    question: "Does CliniDoc use AI?",
    answer:
      "CliniDoc includes an AI-assisted documentation experience designed around clinician review rather than autonomous clinical decision-making.",
  },
  {
    question: "How does CliniDoc handle security?",
    answer:
      "The platform includes authentication, TOTP 2FA, session management, trusted devices, authorization, rate limiting, account protection and security audit events.",
  },
] as const;

export const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Patients", href: "#patient" },
  { label: "Care Teams", href: "#operations" },
  { label: "Security", href: "#security" },
  { label: "Resources", href: "#faq" },
] as const;

export const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "Clinical Programs", href: "#clinical" },
      { label: "Assessments", href: "#patient" },
      { label: "Records", href: "#patient" },
      { label: "Patient Portal", href: "#patient" },
    ],
  },
  {
    title: "Organization",
    links: [
      { label: "Care Teams", href: "#operations" },
      { label: "Scheduling", href: "#operations" },
      { label: "Referrals", href: "#operations" },
      { label: "Security", href: "#security" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Architecture", href: "#architecture" },
      { label: "Contact", href: "#cta" },
    ],
  },
] as const;

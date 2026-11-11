export type Era = {
  id: string;
  label: string;
  title: string;
  story: string[];
  tools: { name: string; role: string; note?: string }[];
  lesson: string;
};

export const eras: Era[] = [
  {
    id: "builders",
    label: "First",
    title: "Site builders",
    story: [
      "Before writing code, the way to get something online was a builder: pick a theme, drag blocks, publish.",
      "They are fast and they are a ceiling. The moment a business needs something the theme did not plan for, the work becomes fighting the tool.",
    ],
    tools: [
      { name: "WordPress", role: "Websites, themes and plugins" },
      { name: "Wix and Squarespace", role: "Hosted site builders" },
      { name: "Shopify", role: "Online shops", note: "First store set up in 2021" },
    ],
    lesson: "A builder gets you to 80% in a day. The last 20% is where the business actually is.",
  },
  {
    id: "crm",
    label: "Then",
    title: "CRMs and email",
    story: [
      "Running a sales team means living in a CRM. Pipelines, deal stages, follow-up reminders and newsletters each had their own tool, and each tool had its own idea of what a customer is.",
      "This is where the idea of one contact record, shared by everything, came from. It became the Rolodex at the centre of RevIQ.",
    ],
    tools: [
      { name: "HubSpot", role: "CRM and deals", note: "Workspace from 2019" },
      { name: "Pipedrive", role: "Sales pipeline" },
      { name: "Mailchimp", role: "Email campaigns" },
    ],
    lesson: "Every tool keeps its own copy of the customer. The work is making them agree.",
  },
  {
    id: "automation",
    label: "Next",
    title: "Cloud automation",
    story: [
      "Then came the glue. A trigger in one app, an action in another, no server to run. A form fills a sheet, the sheet creates a deal, the deal sends a message.",
      "It felt like magic, and it was fragile: a renamed column or an expired login, and a chain stopped quietly. The habit that stayed is to check that the next step really happened, and to say so when it did not.",
    ],
    tools: [
      { name: "Zapier", role: "Triggers and actions between apps" },
      { name: "Make (formerly Integromat)", role: "Visual scenarios with branches and loops" },
    ],
    lesson: "Automation is easy to start and hard to trust. Build the check, not just the step.",
  },
  {
    id: "ai",
    label: "Now",
    title: "AI as the engineering partner",
    story: [
      "In 2026 the tools changed again. With an AI coding partner, the same person who used to wire Zaps can ship a tested product: a database with security rules, a typed codebase, a design system.",
      "Every project in this portfolio was built this way. AI made code cheap. Systems that do not break still are not, which is why the work here leans so hard on tests, written decisions and research.",
    ],
    tools: [
      { name: "Claude Code", role: "Day-to-day engineering: code, tests, reviews, research" },
      { name: "ChatGPT", role: "General assistant and a second view" },
      { name: "Grok", role: "Independent reviewer" },
      { name: "Canva", role: "Quick social and marketing visuals" },
    ],
    lesson: "The first question is still the old one: keep it, connect it, or build it?",
  },
];

export type StackGroup = { title: string; note: string; items: string[] };

/** Taken from the package files of the projects in this portfolio. */
export const stack: StackGroup[] = [
  { title: "Web and apps", note: "What every product here is built with", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Zod", "next-intl"] },
  { title: "Data", note: "Security rules live in the database", items: ["Supabase", "PostgreSQL", "Row-level security", "Firebase", "Firestore", "Vercel Blob"] },
  { title: "AI", note: "Used where it earns its place", items: ["Claude API", "Vercel AI SDK", "Tesseract OCR", "Prompt test harness"] },
  { title: "Chat channels", note: "Where customers in Thailand already are", items: ["LINE Official Account", "LINE LIFF apps", "LINE rich menus and Flex messages", "WhatsApp Business", "Twilio", "Telegram"] },
  { title: "Payments and documents", note: "Thai rules included", items: ["Stripe", "PromptPay QR", "pdf-lib", "Thai VAT and withholding tax", "QR codes"] },
  { title: "Email", note: "Transactional and branded", items: ["Postmark", "Resend", "Nodemailer"] },
  { title: "Maps", note: "Pins, not typed addresses", items: ["MapLibre", "Leaflet", "OpenStreetMap data"] },
  { title: "Quality", note: "What lets a small studio ship safely", items: ["Vitest", "Playwright", "pgTAP", "PGlite", "axe accessibility checks", "Lighthouse CI", "ESLint boundaries"] },
  { title: "Shipping", note: "From commit to live", items: ["Vercel", "GitHub", "GitHub Actions", "Cron jobs"] },
  { title: "Design", note: "Design as code wherever possible", items: ["Design tokens", "HTML mock-ups rendered to images", "Canva", "SVG character art"] },
];

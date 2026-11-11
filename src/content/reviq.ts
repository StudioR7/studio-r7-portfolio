import type { Project } from "./types";

export const reviq: Project = {
  slug: "reviq",
  name: "RevIQ",
  kind: "Business suite for Thai vendors and small companies",
  tagline: "Run your business like a brand. Not like a side hustle.",
  summary:
    "One workspace for contacts, deals, invoices, Thai tax and payroll, a shared inbox, e-signatures and AI lead qualification. Built three times in five months, each version simpler and better tested than the last.",
  status: "Live, behind login",
  period: "May to October 2026",
  url: { label: "reviq.pro", href: "https://reviq.pro" },
  cover: "reviq/home",
  coverFrame: "browser",
  band: "bg-surface",
  disciplines: ["SaaS platform", "AI features", "Thai tax and payroll", "E-signature", "Brand kit", "Architecture"],
  stack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind 4",
    "Firebase and Firestore",
    "Stripe",
    "Claude API",
    "LINE",
    "Twilio WhatsApp",
    "Postmark and Resend",
    "pdf-lib",
    "Tesseract OCR",
  ],
  facts: [
    { value: "3", label: "generations of the product: v1, Suite, and the V2 rebuild" },
    { value: "2,222", label: "commits across the three repositories" },
    { value: "20", label: "modules described on this page, from contacts to payroll" },
    { value: "73", label: "test files in the current version, run in CI" },
  ],
  honest:
    "RevIQ works behind a login with real business data, so there are no app screenshots here. This page shows the public marketing pages and the brand kit, and describes each module in words. The suite also carries a real-estate layer, which is left out of this portfolio on purpose.",
  chapters: [
    {
      id: "idea",
      title: "The idea",
      intro:
        "A freelancer or small vendor in Thailand runs the business from LINE, a spreadsheet and memory. RevIQ gives them the tools a bigger company has, in Thai and English, on a phone first.",
      blocks: [
        {
          type: "shot",
          image: "reviq/home",
          frame: "browser",
          title: "Every relationship is an asset",
          body: [
            "The first marketing site set the tone: dark indigo, an emerald action colour, and a serif italic for the one phrase that matters on each page.",
            "The headline speaks to the person the product is for: someone good at their work who wants to be taken seriously.",
          ],
          points: ["Thai and English, switchable on every page", "PromptPay, VAT and withholding tax named up front", "Phone-first layouts"],
        },
        {
          type: "gallery",
          frame: "browser",
          columns: 2,
          items: [
            { image: "reviq/leadiq", caption: "LeadIQ: AI qualifies every lead, you talk to the ones who are ready" },
            { image: "reviq/pipeline", caption: "Pipeline: both sides see every stage, zero disputes" },
          ],
        },
        {
          type: "gallery",
          title: "The full pages",
          intro: "Scroll inside each frame to read the page from top to bottom.",
          frame: "browser",
          columns: 2,
          items: [
            { image: "reviq/leadiq-full", caption: "LeadIQ, complete page" },
            { image: "reviq/pipeline-full", caption: "Pipeline, complete page" },
          ],
        },
      ],
    },
    {
      id: "modules",
      title: "The modules",
      intro:
        "What is inside, grouped by the job it does. Each of these exists in code, with routes, components and its own data model.",
      blocks: [
        {
          type: "list",
          title: "People and deals",
          items: [
            { title: "Rolodex", body: "The contact hub. Every person and company lands here, with duplicate detection and a scanner that turns a photo of a business card into a contact." },
            { title: "Pipeline", body: "A deal board with stages you configure. Commercial progress and money collected are tracked side by side, never merged into one number." },
            { title: "Inbox", body: "Email and LINE in one place: compose with a branded signature, tag threads, connect a mailbox by forwarding." },
            { title: "Connect", body: "A public smart link for each person and team, with a themed page that merges what they offer and how to reach them." },
          ],
        },
        {
          type: "list",
          title: "Money",
          items: [
            { title: "Invoices and PaySync", body: "A hosted invoice page the customer opens from a link. If they have a question about it, the reason comes straight back to the vendor." },
            { title: "VAT, withholding tax and reconciliation", body: "Thai tax handled correctly, including withholding tax certificates, expense review and bank reconciliation." },
            { title: "Payroll", body: "Thai payroll with social security and income tax withheld each month, payslips, and a year view." },
            { title: "Accountant pack", body: "One secure link that hands the accountant everything for the period." },
          ],
        },
        {
          type: "list",
          title: "Agreements and legal",
          items: [
            { title: "SignIQ", body: "A block-based agreement composer with automatic clause numbering, then send-to-sign by link, with the signed PDF produced at the end." },
            { title: "LegalIQ", body: "Case files built from events and claims, an agreement builder, and a \"pressure test\" that looks for the weak points in an argument. Bilingual, and it never invents law." },
            { title: "Vault", body: "Document storage with automatic classification and Bates numbering, so every page of a bundle has a stable reference." },
            { title: "Evidence organiser", body: "Built as an isolated module with its own security tests: original files kept unchanged, organised into exhibits that are ready for court. It was later spun out as its own product." },
          ],
        },
        {
          type: "list",
          title: "Growth and AI",
          items: [
            { title: "LeadIQ", body: "Scores each new lead against a rubric for the industry, writes a nurture plan, and drafts replies in three passes: plan, write, check." },
            { title: "FlowIQ", body: "A visual editor for referral flows, with blocks, triggers, templates and validation before a flow can run." },
            { title: "Referrals and ambassadors", body: "Referral tracking across accounts and a tiered ambassador programme with an audit trail." },
            { title: "Storefront and forms", body: "Themed public pages and a form builder, so a vendor's page looks like their brand, not like the tool." },
          ],
        },
        {
          type: "list",
          title: "The platform underneath",
          items: [
            { title: "Custom permission roles", body: "Ten built-in roles plus roles a workspace defines itself, teams, and time-boxed delegation. Access is denied unless a rule allows it." },
            { title: "Entitlements", body: "One place decides which plan can use which feature, so limits are configuration and never scattered through the code." },
            { title: "A registry that generates code", body: "In V2, fields are declared once in YAML and the code that uses them is generated from that." },
            { title: "An AI test harness", body: "Scripted conversations run against the assistant and are judged against pass gates before a prompt change ships." },
          ],
        },
      ],
    },
    {
      id: "generations",
      title: "Three generations",
      intro: "The honest story of the product is that it was rebuilt twice, and each rebuild threw away more than it kept.",
      blocks: [
        {
          type: "list",
          title: "What changed each time",
          items: [
            { title: "v1 · May to June 2026 · 957 commits", body: "The first app: referral workflow, lead qualification, storefronts and a partner programme. Fast, broad, and without automated tests." },
            { title: "Suite · June to September 2026 · 706 commits", body: "A rewrite that added almost every module on this page. 165 screens and 304 server routes. It proved what the product should be, and how much it had grown." },
            { title: "V2 · August to October 2026 · 559 commits", body: "A clean rebuild around a typed registry. Fewer screens, 73 test files, continuous integration and a self-audit script. This is the version that is live." },
          ],
        },
        {
          type: "text",
          title: "What the rebuilds taught",
          body: [
            "The second version had the features. The third has the structure: one registry for fields, one place for permissions, tests beside the money code. The rule that came out of it is now a standing one across every Studio R7 project: replace the old piece by piece, never rewrite everything at once.",
          ],
        },
      ],
    },
    {
      id: "brand",
      title: "The brand kit",
      intro: "\"The handoff, in a kit.\" Everything a designer or developer needs to build a RevIQ surface, on one page.",
      blocks: [
        {
          type: "shot",
          image: "reviq/brand-kit",
          frame: "browser",
          title: "A brand kit you can download from",
          body: [
            "Marks, wordmarks, colour, type, voice, motion and code, with every logo variant ready to download at the size you need.",
            "The rules are strict: Geist for interface text, no weights heavier than semibold, no pure black, touch targets of at least 44 pixels, and a 360-pixel phone as the starting point.",
          ],
        },
        {
          type: "shot",
          image: "reviq/brand-kit-full",
          frame: "browser",
          title: "The whole kit",
          body: ["Scroll inside the frame: logos, the colour system, type scale, voice examples, motion and the code tokens."],
        },
        {
          type: "gallery",
          frame: "plain",
          columns: 3,
          items: [
            { image: "reviq/logo-lockup", caption: "Horizontal lockup" },
            { image: "reviq/logo-tile", caption: "App tile" },
            { image: "reviq/logo-construction", caption: "How the mark is constructed" },
          ],
        },
        {
          type: "gallery",
          frame: "phone",
          columns: 2,
          items: [{ image: "reviq/home-phone", caption: "The home page on a phone" }],
        },
      ],
    },
    {
      id: "papers",
      title: "Papers",
      intro: "Architecture and product specifications written along the way.",
      blocks: [
        {
          type: "papers",
          title: "Architecture, specifications and audits",
          intro: "A selection from the repositories. Summaries are public; the full documents are shared on request.",
          project: "RevIQ",
        },
      ],
    },
  ],
};

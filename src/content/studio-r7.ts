import type { Project } from "./types";

export const studioR7: Project = {
  slug: "studio-r7",
  name: "Studio R7",
  kind: "Agency website, free apps and client platform",
  tagline: "You know the problem. We make the technology work.",
  summary:
    "The studio's own site, built as a product: a bilingual website, a guided project brief, two free business apps, a client delivery portal and the first parts of a typed growth engine.",
  status: "Live",
  period: "October to November 2026",
  url: { label: "studior7.com", href: "https://studior7.com/en" },
  cover: "studio-r7/live-home",
  coverFrame: "browser",
  band: "bg-band-blue",
  disciplines: ["Website", "Web apps", "Flows", "Branding", "Social kits", "Research"],
  stack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind 4",
    "Supabase",
    "Vercel AI SDK",
    "pdf-lib",
    "Zod",
    "Vitest",
    "Playwright",
    "axe",
    "Lighthouse CI",
  ],
  facts: [
    { value: "530", label: "commits in the repo" },
    { value: "82", label: "public pages in the sitemap (41 in English, 41 in Thai)" },
    { value: "164", label: "test files" },
    { value: "2", label: "free apps, live" },
  ],
  honest:
    "Studio R7 publishes no client case studies yet, and the site says so. Everything on this page is the studio's own product. The client portal is designed and partly built, the Thai copy is waiting for a native review, and most of the growth engine is planned, not shipped.",
  chapters: [
    {
      id: "idea",
      title: "The idea",
      intro:
        "A small business in Bangkok rarely needs more software. It needs the tools it already pays for to work together, and someone to say honestly when nothing new should be built.",
      blocks: [
        {
          type: "shot",
          image: "studio-r7/live-home",
          frame: "browser",
          title: "A home page that leads with the customer's problem",
          body: [
            "The first screen says what the studio does in one sentence and shows it in one picture: LINE, WhatsApp and Telegram on the left, booked orders and approved replies on the right, Studio R7 in the middle.",
            "There is one main action, Start a project, and one quiet link for people who want to read first.",
          ],
          points: ["English and Thai from the first commit", "Phone and desktop are designed separately", "No stock photos of people shaking hands"],
        },
        {
          type: "shot",
          image: "studio-r7/live-pricing",
          frame: "browser",
          title: "Pricing that explains itself",
          body: [
            "Three ways to work with the studio sit side by side: a single fixed-price job, the monthly platform, or a custom project. A visitor picks hubs and a tier and sees the price change as they go.",
            "All prices come from one configuration file and one pure function, so the page, the brief and the quote can never disagree.",
          ],
        },
        {
          type: "gallery",
          title: "The same pages on a phone",
          intro: "Most visitors arrive from LINE on a phone, so the phone layout is its own design, not a squeezed desktop.",
          frame: "phone",
          columns: 4,
          items: [
            { image: "studio-r7/live-home-phone", caption: "Home, English" },
            { image: "studio-r7/live-home-th-phone", caption: "Home, Thai, with the honest draft notice" },
            { image: "studio-r7/live-pricing-phone", caption: "Pricing" },
            { image: "studio-r7/live-demos-phone", caption: "Live chat demos" },
          ],
        },
      ],
    },
    {
      id: "brief",
      title: "The project brief",
      intro:
        "The most important flow on the site. A non-technical owner describes what they need in about two minutes, and the studio receives a structured brief instead of a vague email.",
      blocks: [
        {
          type: "flow",
          title: "Start a project, step by step",
          intro:
            "Each step asks one thing in plain words. Answers are kept on the device until the visitor presses send, and they can clear everything with one tap.",
          frame: "phone",
          steps: [
            {
              image: "studio-r7/intake-1-phone",
              title: "What would you like to do?",
              body: "Four plain choices: a single job, the platform, something custom, or technology for equity. Not sure is a valid answer.",
            },
            {
              image: "studio-r7/intake-2-phone",
              title: "Which job would you like?",
              body: "Fixed, one-off prices are shown right on the options, so there is no surprise later.",
            },
            {
              image: "studio-r7/intake-3-phone",
              title: "What is it for?",
              body: "One line is enough. The example text shows the level of detail that helps.",
            },
            {
              image: "studio-r7/intake-4-phone",
              title: "How should we reach you?",
              body: "LINE, WhatsApp, Telegram or email. The form only asks for what is needed to reply.",
            },
          ],
        },
        {
          type: "shot",
          image: "studio-r7/intake-2",
          frame: "browser",
          title: "The same flow on a computer",
          body: [
            "On a wide screen the brief sits beside a short reminder of what the studio builds, with the progress bar and the step count always visible.",
            "Behind the form, the answers are validated, turned into a lead review and a PDF, and emailed to the studio. The visitor gets a confirmation that repeats what they sent.",
          ],
        },
      ],
    },
    {
      id: "apps",
      title: "Free apps",
      intro:
        "Two small tools that solve a real daily problem for Thai businesses, free and without sign-up. They show the studio's work better than any claim could.",
      blocks: [
        {
          type: "shot",
          image: "studio-r7/live-invoice",
          frame: "browser",
          title: "Invoice Maker",
          body: [
            "Quotations, invoices and receipts that look the way a Thai accountant expects: the amount in baht written out in words, VAT and withholding tax worked out, and a PromptPay QR with the amount filled in.",
            "The data stays in the browser. The result is an A4 PDF with Thai fonts embedded, and a picture sized for LINE.",
          ],
        },
        {
          type: "gallery",
          frame: "plain",
          columns: 2,
          items: [
            { image: "studio-r7/app-invoice-doc-en", caption: "The English invoice" },
            { image: "studio-r7/app-invoice-doc-th", caption: "The same invoice in Thai, with Buddhist-era dates" },
          ],
        },
        {
          type: "shot",
          image: "studio-r7/live-namecard",
          frame: "browser",
          title: "Namecard Maker",
          body: [
            "Pick a design, type your details, and download a print-ready business card with bleed, plus a picture for LINE. The back of the card carries a QR code that adds the contact to a phone.",
            "Every sample card uses a made-up business, clearly so.",
          ],
        },
        {
          type: "gallery",
          frame: "plain",
          columns: 2,
          items: [
            { image: "studio-r7/app-namecard-front", caption: "Card front" },
            { image: "studio-r7/app-namecard-back", caption: "Card back with contact QR" },
          ],
        },
      ],
    },
    {
      id: "demos",
      title: "Showing, not telling",
      intro:
        "Instead of saying \"we build chat automation\", the site lets a visitor watch one run. Every example business is fictional and labelled as such.",
      blocks: [
        {
          type: "shot",
          image: "studio-r7/live-demos",
          frame: "browser",
          title: "One venue, one evening, in chat",
          body: [
            "A made-up restaurant runs a full evening through LINE, WhatsApp and Telegram: a booking arrives, a deposit is paid by PromptPay, the kitchen is told, the guest gets a reminder.",
            "The visitor can step through it message by message.",
          ],
        },
        {
          type: "shot",
          image: "studio-r7/live-agents",
          frame: "browser",
          title: "AI agents, unpacked",
          body: [
            "No magic. The page takes an agent apart into eight parts and shows how each one is tested and wired to the next. It is written for owners, not engineers.",
          ],
        },
        {
          type: "gallery",
          title: "Sections from the site",
          frame: "browser",
          columns: 2,
          items: [
            { image: "studio-r7/section-line-chat", caption: "A LINE conversation that does the work" },
            { image: "studio-r7/section-stack-assembly", caption: "One booking, five layers, under a second" },
            { image: "studio-r7/section-brand-board", caption: "A brand set for a made-up restaurant" },
            { image: "studio-r7/section-telegram-demo", caption: "Following one guest from first message to kitchen" },
          ],
        },
      ],
    },
    {
      id: "portal",
      title: "The client portal",
      intro:
        "Where a client follows their project after they say yes. One question drives the design: what does the studio need from me right now?",
      blocks: [
        {
          type: "shot",
          image: "studio-r7/portal-home",
          frame: "browser",
          title: "Home: what needs you",
          body: [
            "The first thing a client sees is a short list of things only they can do: send a logo, review a draft, answer a question. Everything else is progress they can read when they like.",
            "The screens here use sample data for a made-up café, and the yellow bar at the top says so.",
          ],
        },
        {
          type: "flow",
          title: "From request to delivered file",
          intro: "One request, followed from the studio asking to the client sending.",
          frame: "browser",
          steps: [
            {
              image: "studio-r7/portal-timeline",
              title: "The delivery timeline",
              body: "Every job is a list of steps with dates. The client sees which step is waiting on them.",
            },
            {
              image: "studio-r7/portal-request",
              title: "The request",
              body: "What is needed, why, and which file types work. Written so a busy owner can act in one visit.",
            },
            {
              image: "studio-r7/portal-upload",
              title: "The upload",
              body: "Progress is shown while the file sends, and the client can cancel.",
            },
            {
              image: "studio-r7/portal-staff-delivery",
              title: "The staff side",
              body: "The studio reviews what arrived, accepts it or asks for a change, and the timeline moves on.",
            },
          ],
        },
        {
          type: "gallery",
          title: "On a phone, in Thai",
          frame: "phone",
          columns: 3,
          items: [
            { image: "studio-r7/portal-home-phone", caption: "Home" },
            { image: "studio-r7/portal-timeline-phone-th", caption: "Timeline, Thai" },
            { image: "studio-r7/portal-request-phone-th", caption: "Request, Thai" },
          ],
        },
        {
          type: "gallery",
          title: "Designs for what comes next",
          intro: "Mock-ups, not built yet: approvals and the email a client receives.",
          frame: "browser",
          columns: 2,
          items: [
            { image: "studio-r7/portal-mock-approvals", caption: "Approvals: approve a version or request changes" },
            { image: "studio-r7/portal-mock-email", caption: "The request email, with one clear button" },
          ],
        },
      ],
    },
    {
      id: "engine",
      title: "The growth engine",
      intro:
        "The long-term plan behind the site: 36 building blocks that the studio assembles for each client, each with a written contract, a cost and a test.",
      blocks: [
        {
          type: "shot",
          image: "studio-r7/engine-map",
          frame: "browser",
          title: "The engine map",
          body: [
            "Every block, what it needs before it can be built, who calls whom at run time, and where each one stands today. The dependency diagrams in the docs are generated from the code, and the build fails if they drift.",
            "Most blocks are still planned. The map shows that plainly: built, in progress and not started each have their own state.",
          ],
          points: ["36 blocks, each with its own written dossier", "Diagrams generated from code; the build fails if they drift", "A cost ledger and rate card so every AI call has a price"],
        },
        {
          type: "gallery",
          frame: "browser",
          columns: 2,
          items: [
            { image: "studio-r7/engine-map-selected", caption: "One block selected: what it depends on and who depends on it" },
            { image: "studio-r7/section-portal-demo", caption: "Inside the portal preview on the public site" },
          ],
        },
        {
          type: "list",
          title: "Guardrails in the codebase",
          intro: "The parts no visitor sees, and the reason the visible parts hold up.",
          items: [
            { title: "Boundaries enforced by the linter", body: "Modules may only import what their contract allows. A wrong import fails the build." },
            { title: "A page quality check", body: "Accessibility, Lighthouse and broken-link checks run against real pages, and the evidence is committed." },
            { title: "Search set up properly", body: "Every public page is in the sitemap in both languages with canonical and hreflang tags, structured data and an llms.txt file." },
            { title: "Experiments with attribution", body: "A/B tests and source tracking are configuration, not scattered code." },
          ],
        },
      ],
    },
    {
      id: "brand",
      title: "Brand and social",
      intro: "One mark, one blue, one voice, carried across the site, LINE, WhatsApp, Facebook and LinkedIn.",
      blocks: [
        {
          type: "shot",
          image: "studio-r7/brand-sheet",
          frame: "plain",
          title: "The brand sheet",
          body: [
            "Night blue for depth, action blue for anything you can press, signal teal for the moment something works. Plus Jakarta Sans for Latin text and Noto Sans Thai for Thai, chosen so both scripts carry the same weight.",
          ],
        },
        {
          type: "gallery",
          title: "Social posts, made as code",
          intro: "Each post is an HTML page rendered to an image by a script, so a wording change is one edit and one command.",
          frame: "plain",
          columns: 4,
          items: [
            { image: "studio-r7/social-post-manifesto", caption: "What we believe" },
            { image: "studio-r7/social-post-how-we-decide", caption: "Keep, integrate, build" },
            { image: "studio-r7/social-post-before-after", caption: "Before and after" },
            { image: "studio-r7/social-post-carousel", caption: "Carousel cover" },
            { image: "studio-r7/social-linkedin-belief", caption: "LinkedIn: belief" },
            { image: "studio-r7/social-linkedin-how-we-build", caption: "LinkedIn: how we build" },
            { image: "studio-r7/social-linkedin-keep-integrate-build", caption: "LinkedIn: the first question" },
            { image: "studio-r7/social-post-pricing-faq", caption: "Pricing, explained" },
          ],
        },
        {
          type: "gallery",
          title: "Chat channels",
          frame: "plain",
          columns: 2,
          items: [
            { image: "studio-r7/social-line-richmenu-en", caption: "LINE rich menu, English" },
            { image: "studio-r7/social-line-richmenu-th", caption: "LINE rich menu, Thai" },
            { image: "studio-r7/social-facebook-cover", caption: "Facebook cover" },
            { image: "studio-r7/social-facebook-sheet", caption: "The full Facebook and Instagram kit on one sheet" },
          ],
        },
        {
          type: "gallery",
          title: "WhatsApp catalogue tiles",
          frame: "plain",
          columns: 3,
          items: [
            { image: "studio-r7/social-wa-01", caption: "Free project brief" },
            { image: "studio-r7/social-wa-02", caption: "Build a solution" },
            { image: "studio-r7/social-wa-03", caption: "Connect your systems" },
          ],
        },
      ],
    },
    {
      id: "papers",
      title: "Papers",
      intro: "The thinking is written down before the code is.",
      blocks: [
        {
          type: "papers",
          title: "Research and design documents",
          intro: "A selection from the repository. Summaries are public; the full documents are shared on request.",
          project: "Studio R7",
        },
      ],
    },
  ],
};

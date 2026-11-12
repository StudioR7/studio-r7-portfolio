import type { App } from "./types";

const R7 = { label: "Part of the Studio R7 story", href: "/work/studio-r7/" };
const REVIQ = { label: "Part of the RevIQ story", href: "/work/reviq/" };
const REVIQ_STACK = ["Next.js 16", "React 19", "TypeScript", "Tailwind 4", "Firebase and Firestore", "pdf-lib"];
const DEMO_NOTE =
  "RevIQ runs behind a login with real business data, so these screens come from a copy of the app running on a local test database. Baimai Studio and every customer, deal and invoice shown are made up.";
const SITE_STACK = ["Next.js 16", "React 19", "TypeScript", "Tailwind 4"];

export const apps: App[] = [
  {
    slug: "invoice-maker",
    name: "Invoice Maker",
    kind: "Free web app · invoicing",
    tagline: "A professional quotation in under a minute.",
    summary:
      "Quotations, invoices and receipts the way a Thai accountant expects them: baht in words, VAT, withholding tax and a PromptPay QR with the amount filled in. Free, in Thai and English, with no sign-up.",
    status: "Live",
    url: { label: "the Invoice Maker", href: "https://studior7.com/en/apps/invoice" },
    parent: R7,
    cover: "apps/invoice-editor",
    coverFrame: "browser",
    band: "bg-band-blue",
    facts: [
      { value: "3", label: "document types: quotation, invoice, receipt" },
      { value: "4", label: "layouts: Classic, Modern band, Minimal, Bold accent" },
      { value: "2", label: "languages, Thai and English" },
      { value: "0", label: "sign-ups needed; the data stays in the browser" },
    ],
    honest:
      "Every screen here was captured from the live app using its own sample data. Baimai Studio and Example Trading are made-up businesses. The app never makes a tax invoice, and it says so on every document.",
    chapters: [
      {
        id: "start",
        title: "Start in one tap",
        intro:
          "A freelancer who needs to send a quotation tonight should not have to create an account first. The first screen has one job: get them into a document.",
        blocks: [
          {
            type: "shot",
            image: "apps/invoice-home",
            frame: "browser",
            title: "The first screen",
            body: [
              "One main button, one second choice, and a link to try it with sample data. The sample document on the right shows the result before any typing.",
              "Below the fold, the page explains Thai paperwork in plain words: what a quotation, an invoice and a receipt are, and when withholding tax applies.",
            ],
            points: ["No sign-up, no watermark, no document limit", "Thai and English, switchable at any time", "Saved on the device unless the user signs in"],
          },
        ],
      },
      {
        id: "editor",
        title: "The editor",
        intro: "Form on the left, the real document on the right. Every keystroke updates the page the customer will receive.",
        blocks: [
          {
            type: "shot",
            image: "apps/invoice-editor-full",
            frame: "browser",
            title: "One page, top to bottom",
            body: [
              "From, customer, items, totals, then three sections that stay folded until needed: dates, payment and layout. Scroll inside the frame to read the whole editor.",
              "Download as an A4 PDF, as an image sized for LINE, or share the PDF straight from the phone.",
            ],
          },
          {
            type: "gallery",
            title: "The parts that do the thinking",
            frame: "browser",
            columns: 2,
            items: [
              { image: "apps/invoice-totals", caption: "Discount, VAT and withholding tax, with the amount due written out in words" },
              { image: "apps/invoice-payment", caption: "Bank account, PromptPay QR with the amount, notes and signature lines" },
            ],
          },
          {
            type: "list",
            title: "Thai rules, built in",
            items: [
              { title: "Withholding tax", body: "A drop-down with the usual rates. The helper text explains who deducts it and which certificate to ask for." },
              { title: "VAT as a breakdown", body: "Only for VAT-registered businesses, and always labelled as not a tax invoice." },
              { title: "Baht in words", body: "The total is written out automatically, in Thai or in English." },
              { title: "PromptPay QR", body: "The QR carries the exact amount due, so the customer cannot pay the wrong sum." },
            ],
          },
        ],
      },
      {
        id: "layouts",
        title: "Four layouts",
        intro: "The same data, four looks. Switching is one tap above the preview, and a default can be saved.",
        blocks: [
          {
            type: "gallery",
            frame: "browser",
            columns: 2,
            items: [
              { image: "apps/invoice-editor", caption: "Classic" },
              { image: "apps/invoice-layout-modern", caption: "Modern band" },
              { image: "apps/invoice-layout-minimal", caption: "Minimal" },
              { image: "apps/invoice-layout-bold", caption: "Bold accent" },
            ],
          },
          {
            type: "gallery",
            title: "The finished documents",
            frame: "plain",
            columns: 2,
            items: [
              { image: "studio-r7/app-invoice-doc-en", caption: "English" },
              { image: "studio-r7/app-invoice-doc-th", caption: "Thai, with Buddhist-era dates" },
            ],
          },
        ],
      },
      {
        id: "records",
        title: "Customers, business and settings",
        intro: "Type a customer or your own details once. Every later document reuses them.",
        blocks: [
          {
            type: "gallery",
            frame: "browser",
            columns: 2,
            items: [
              { image: "apps/invoice-docs", caption: "Documents: search and filter by type and status" },
              { image: "apps/invoice-tab-customers", caption: "Customers: saved the first time they are used" },
              { image: "apps/invoice-tab-business", caption: "Your business: name in Thai and English, logo, brand colour" },
              { image: "apps/invoice-tab-settings", caption: "Settings: default layout and document numbering" },
            ],
          },
        ],
      },
      {
        id: "phone",
        title: "On a phone, in Thai",
        intro: "Most users will make their first quotation on a phone. The editor and the preview become two tabs, and the amount due stays pinned at the bottom.",
        blocks: [
          {
            type: "gallery",
            frame: "phone",
            columns: 4,
            items: [
              { image: "apps/invoice-home-phone", caption: "Start" },
              { image: "apps/invoice-editor-phone", caption: "Edit" },
              { image: "apps/invoice-totals-phone", caption: "Totals" },
              { image: "apps/invoice-th-editor-phone", caption: "Thai" },
            ],
          },
        ],
      },
    ],
    stack: [...SITE_STACK, "pdf-lib", "qrcode"],
  },
  {
    slug: "namecard-maker",
    name: "Namecard Maker",
    kind: "Free web app · design tool",
    tagline: "A print-ready business card in four steps.",
    summary:
      "Pick a design, type your details, set the style and download: a print PDF with bleed and crop marks, images for chat, and a contact card. Free, in Thai and English, with no sign-up.",
    status: "Live",
    url: { label: "the Namecard Maker", href: "https://studior7.com/en/apps/namecard" },
    parent: R7,
    cover: "apps/namecard-details",
    coverFrame: "browser",
    band: "bg-band-warm",
    facts: [
      { value: "12", label: "layouts, each with a matching back" },
      { value: "4", label: "steps: template, details, style, download" },
      { value: "3", label: "card sizes, Thai standard 90 × 55 mm first" },
      { value: "3 mm", label: "bleed with crop marks in the print PDF" },
    ],
    honest:
      "Captured from the live app. Mali Srisuk and Studio Mali are made up, as are all names on the sample cards. Details and images stay in the browser.",
    chapters: [
      {
        id: "flow",
        title: "Four steps",
        intro: "A card maker fails when it opens on an empty canvas. This one opens on twelve finished cards and asks the user to pick.",
        blocks: [
          {
            type: "flow",
            title: "From template to print file",
            intro: "The card in the middle is always the real card. Tap any text on it to edit it in place.",
            frame: "browser",
            steps: [
              { image: "apps/namecard-templates", title: "Pick a design", body: "Twelve layouts in six groups, including two made for Thai names first. The choice can change later without losing details." },
              { image: "apps/namecard-details", title: "Type the details", body: "Name, title, company, LINE ID, phone, email. The card updates as you type." },
              { image: "apps/namecard-style", title: "Set the style", body: "Colour themes, a custom accent with a live contrast check, fonts and card size." },
              { image: "apps/namecard-download", title: "Download", body: "A print PDF, front and back images, a share image, a mock-up and a contact card file." },
            ],
          },
        ],
      },
      {
        id: "card",
        title: "The card itself",
        intro: "The back of the card does a job too: a QR code that adds the contact to a phone.",
        blocks: [
          {
            type: "gallery",
            frame: "browser",
            columns: 2,
            items: [
              { image: "apps/namecard-back", caption: "The back, with a QR code" },
              { image: "apps/namecard-mockup", caption: "Mock-up view: how it looks on a desk" },
            ],
          },
          {
            type: "gallery",
            title: "The files a print shop receives",
            frame: "plain",
            columns: 2,
            items: [
              { image: "studio-r7/app-namecard-front", caption: "Front" },
              { image: "studio-r7/app-namecard-back", caption: "Back" },
            ],
          },
          {
            type: "list",
            title: "Details a print shop cares about",
            items: [
              { title: "Bleed and crop marks", body: "The PDF adds 3 mm on every side, so a 90 × 55 mm card becomes a 96 × 61 mm file." },
              { title: "Safe zone", body: "A switch shows the area where text is safe from the cutter." },
              { title: "Thai prints as seen", body: "The page is rendered at 1200 dpi with the text as part of the image, so no font can go missing." },
              { title: "Contrast check", body: "A custom colour is tested against its text, and the result is shown in plain words." },
            ],
          },
        ],
      },
      {
        id: "phone",
        title: "On a phone",
        intro: "The card stays on top, the form slides under it, and the download button never leaves the screen.",
        blocks: [
          {
            type: "gallery",
            frame: "phone",
            columns: 4,
            items: [
              { image: "apps/namecard-templates-phone", caption: "Template" },
              { image: "apps/namecard-details-phone", caption: "Details" },
              { image: "apps/namecard-style-phone", caption: "Style" },
              { image: "apps/namecard-download-phone", caption: "Download" },
            ],
          },
        ],
      },
    ],
    stack: [...SITE_STACK, "pdf-lib", "qrcode"],
  },
  {
    slug: "chat-demos",
    name: "Chat demos",
    kind: "Interactive demo · LINE, WhatsApp, Telegram",
    tagline: "Watch one venue run its evening in chat.",
    summary:
      "Six playable conversations follow one guest from finding a restaurant to the staff kitchen, each drawn in the look of the chat app it happens in, with a panel that shows what the agent did behind the scenes.",
    status: "Live demo",
    url: { label: "the demos", href: "https://studior7.com/en/demos" },
    parent: R7,
    cover: "apps/demos-step-2",
    coverFrame: "browser",
    band: "bg-band-mint",
    facts: [
      { value: "6", label: "steps, from first message to the kitchen" },
      { value: "3", label: "chat apps: LINE, WhatsApp, Telegram" },
      { value: "1", label: "fictional venue, labelled as such" },
      { value: "2", label: "ways to follow: watch it play, or read it as text" },
    ],
    honest:
      "Khlong Lantern Kitchens and its guests are fictional, and the page says so beside every phone. The conversations are scripted demos, not recordings of a live system.",
    chapters: [
      {
        id: "idea",
        title: "Showing, not telling",
        intro: "\"We build chat automation\" means little to a restaurant owner. Watching a table get booked in LINE means a lot.",
        blocks: [
          {
            type: "shot",
            image: "apps/demos-hero",
            frame: "browser",
            title: "The opening",
            body: [
              "The page starts with the problem in the owner's words: guests message on three apps, nobody answers at night, orders are copied by hand.",
              "Then it lets the visitor press play.",
            ],
          },
        ],
      },
      {
        id: "evening",
        title: "One evening, six conversations",
        intro: "Each step plays message by message, with the result for the business on the left and the agent's work on the right.",
        blocks: [
          {
            type: "flow",
            title: "Follow one guest",
            intro: "Tap a step or let it run. Every conversation can also be read as plain text.",
            frame: "browser",
            steps: [
              { image: "apps/demos-step-1", title: "Discover, in Telegram", body: "A guest finds the venue through a food channel, asks if it is open, and is one tap from adding it on LINE." },
              { image: "apps/demos-step-2", title: "Book, in LINE", body: "She books a terrace table from the rich menu. The agent checks the table plan and asks about allergies." },
              { image: "apps/demos-step-3", title: "Reminder, in LINE", body: "The day before, a reminder goes out. The guest changes the party size and the table is swapped." },
              { image: "apps/demos-step-4", title: "Order ahead, in WhatsApp", body: "A friend pre-orders the sharing dishes, so the food is ready when the group sits down." },
              { image: "apps/demos-step-5", title: "Review, in LINE", body: "After dinner, a thank-you asks for feedback while the evening is still fresh." },
              { image: "apps/demos-step-6", title: "Staff, in Telegram", body: "Meanwhile the team sees every booking and pre-order in one channel." },
            ],
          },
          {
            type: "gallery",
            title: "On a phone",
            frame: "phone",
            columns: 2,
            items: [
              { image: "apps/demos-step-2-phone", caption: "Booking in LINE" },
              { image: "apps/demos-step-4-phone", caption: "Ordering ahead in WhatsApp" },
            ],
          },
          {
            type: "gallery",
            title: "Chat design elsewhere on the site",
            frame: "browser",
            columns: 2,
            items: [
              { image: "studio-r7/section-line-chat", caption: "A LINE conversation that does the work" },
              { image: "studio-r7/section-stack-assembly", caption: "What happens behind one booking" },
            ],
          },
        ],
      },
    ],
    stack: SITE_STACK,
  },
  {
    slug: "quote-engine",
    name: "Quote Engine",
    kind: "Website module · guided scoping",
    tagline: "Let the website scope every enquiry.",
    summary:
      "A visitor answers six short questions and watches a clear list of what is in scope build up beside them. They can save it, share it, or send it, and the business receives an enquiry with context instead of \"how much is a website?\".",
    status: "Live demo",
    url: { label: "the Quote Engine", href: "https://studior7.com/en/quote-engine" },
    parent: R7,
    cover: "apps/quote-step-1",
    coverFrame: "browser",
    band: "bg-band-blue",
    facts: [
      { value: "6", label: "steps: site, users, integrations, devices, budget, scope" },
      { value: "1", label: "scope panel that updates with every answer" },
      { value: "2", label: "ways out: a shareable link or a PDF" },
      { value: "0", label: "invented prices; a person confirms the quote" },
    ],
    honest:
      "On the public page the tool shows scope only, and Studio R7 sends an indicative quote after a short intake. Saving quotes to a database and emailing PDFs are set up per client build.",
    chapters: [
      {
        id: "flow",
        title: "Six questions",
        intro: "Each question changes the scope panel on the right, so the visitor sees why it is being asked.",
        blocks: [
          {
            type: "flow",
            title: "From first click to a scope",
            intro: "Answers can be saved for later with a link back to the same step.",
            frame: "browser",
            steps: [
              { image: "apps/quote-step-1", title: "What kind of site?", body: "Company site, shop or web app, how many pages, and whether it lists products or services." },
              { image: "apps/quote-step-2", title: "Who uses it?", body: "Who logs in and roughly how many people, which decides accounts and access." },
              { image: "apps/quote-step-3", title: "Integrations", body: "LINE, payments, CRM, database, an AI assistant or an existing system." },
              { image: "apps/quote-step-4", title: "Devices and timeline", body: "Where people use it and when it is needed." },
              { image: "apps/quote-step-5", title: "Budget band", body: "The visitor's own rough budget, clearly labelled as not the price." },
              { image: "apps/quote-step-6", title: "Your scope", body: "The full list to check, with an option to add pictures or PDFs, then save, share or send." },
            ],
          },
          {
            type: "gallery",
            title: "On a phone",
            frame: "phone",
            columns: 2,
            items: [
              { image: "apps/quote-step-1-phone", caption: "Step 1" },
              { image: "apps/quote-step-6-phone", caption: "Step 6" },
            ],
          },
        ],
      },
      {
        id: "rules",
        title: "The rules behind it",
        intro: "A quote tool is only useful if it never promises something the business cannot keep.",
        blocks: [
          {
            type: "shot",
            image: "apps/quote-hero",
            frame: "browser",
            title: "Sold as a module",
            body: ["The engine is built into custom websites. On a client's site it can show prices from their own rate card."],
          },
          {
            type: "list",
            title: "What it does on a client's site",
            items: [
              { title: "Line items from answers", body: "Each answer adds or removes items from the scope." },
              { title: "Fixed or phased", body: "Show one fixed price, or split the work into phases people approve one at a time." },
              { title: "Human review flag", body: "Complex or unusual answers are flagged so a person confirms before any promise is made." },
              { title: "Your rules, your prices", body: "The business edits the rate card. The engine never invents a price." },
            ],
          },
        ],
      },
    ],
    stack: [...SITE_STACK, "Supabase", "Zod"],
  },
  {
    slug: "project-brief",
    name: "Project Brief",
    kind: "Website flow · guided intake",
    tagline: "A structured brief in about two minutes.",
    summary:
      "The most important flow on the Studio R7 site. A non-technical owner describes what they need one plain question at a time, and the studio receives a structured brief instead of a vague email.",
    status: "Live",
    url: { label: "the brief", href: "https://studior7.com/en/start" },
    parent: R7,
    cover: "studio-r7/intake-2",
    coverFrame: "browser",
    band: "bg-band-mint",
    facts: [
      { value: "1", label: "question per screen" },
      { value: "4", label: "ways to be reached: LINE, WhatsApp, Telegram, email" },
      { value: "2", label: "languages, switchable without losing answers" },
      { value: "0", label: "data sent before the visitor presses send" },
    ],
    honest:
      "Captured from the live site. The flow was walked without sending anything, so the last steps and the confirmation are described in words only.",
    chapters: [
      {
        id: "flow",
        title: "The flow",
        intro: "Each step asks one thing. Answers stay on the device until the visitor presses send, and everything can be cleared with one tap.",
        blocks: [
          {
            type: "flow",
            title: "Start a project, step by step",
            intro: "Shown on a phone, where most visitors meet it.",
            frame: "phone",
            steps: [
              { image: "studio-r7/intake-1-phone", title: "What would you like to do?", body: "Four plain choices: a single job, the platform, something custom, or technology for equity. Not sure is a valid answer." },
              { image: "studio-r7/intake-2-phone", title: "Which job would you like?", body: "Fixed, one-off prices are shown right on the options, so there is no surprise later." },
              { image: "studio-r7/intake-3-phone", title: "What is it for?", body: "One line is enough. The example text shows the level of detail that helps." },
              { image: "studio-r7/intake-4-phone", title: "How should we reach you?", body: "LINE, WhatsApp, Telegram or email. The form only asks for what is needed to reply." },
            ],
          },
          {
            type: "flow",
            title: "The same steps on a computer",
            intro: "The brief sits beside a short reminder of what the studio builds, with the progress bar always visible.",
            frame: "browser",
            steps: [
              { image: "studio-r7/intake-1", title: "Choose a path", body: "The first answer decides which questions follow." },
              { image: "studio-r7/intake-2", title: "Choose a job", body: "Prices are part of the question." },
              { image: "studio-r7/intake-3", title: "Say what it is for", body: "Free text, kept short." },
              { image: "studio-r7/intake-4", title: "Choose a channel", body: "The studio replies where the visitor already is." },
            ],
          },
          {
            type: "text",
            title: "What happens after send",
            body: [
              "The answers are validated, turned into a lead review and a PDF, and emailed to the studio. The visitor gets a confirmation that repeats what they sent.",
            ],
          },
        ],
      },
    ],
    stack: [...SITE_STACK, "Zod", "pdf-lib"],
  },
  {
    slug: "client-portal",
    name: "Client Portal",
    kind: "Web app · client workspace",
    tagline: "What does the studio need from me right now?",
    summary:
      "Where a client follows their project after they say yes: what is waiting on them, every delivery step by step, the files they sent and whether each one was accepted. In Thai and English, built for a phone.",
    status: "Designed and partly built",
    parent: R7,
    cover: "studio-r7/portal-home",
    coverFrame: "browser",
    band: "bg-band-warm",
    facts: [
      { value: "4", label: "areas: home, deliveries, what we need, files" },
      { value: "2", label: "sides: the client's view and the staff view" },
      { value: "2", label: "languages, Thai and English" },
      { value: "1", label: "question that drives every screen" },
    ],
    honest:
      "These screens use sample data for a made-up café, and the yellow bar on each one says so. The delivery screens are built; approvals, team and the request email are mock-ups, not built yet.",
    chapters: [
      {
        id: "client",
        title: "The client's side",
        intro: "A busy owner opens the portal for one reason: to find out what they have to do. That goes first.",
        blocks: [
          {
            type: "shot",
            image: "studio-r7/portal-home",
            frame: "browser",
            title: "Home: what needs you",
            body: [
              "A short list of things only the client can do: send a logo, review a draft, answer a question. Everything else is progress they can read when they like.",
            ],
          },
          {
            type: "gallery",
            frame: "browser",
            columns: 2,
            items: [
              { image: "studio-r7/portal-deliveries", caption: "Deliveries: every job, its steps and what is waiting" },
              { image: "studio-r7/portal-requests", caption: "What we need: each item says what, why and by when" },
              { image: "studio-r7/portal-files", caption: "Files: virus-checked, with a status on each one" },
              { image: "studio-r7/portal-timeline", caption: "One delivery as a timeline" },
            ],
          },
        ],
      },
      {
        id: "request",
        title: "One request, start to finish",
        intro: "The studio asks, the client sends, the studio checks, and the timeline moves on.",
        blocks: [
          {
            type: "flow",
            title: "From request to accepted file",
            intro: "Four screens, two people.",
            frame: "browser",
            steps: [
              { image: "studio-r7/portal-request", title: "The request", body: "What is needed, why, and which file types work." },
              { image: "studio-r7/portal-upload", title: "The upload", body: "Progress is shown while the file sends, and the client can cancel." },
              { image: "studio-r7/portal-staff-delivery", title: "The staff side", body: "The studio reviews what arrived, accepts it or asks for a change." },
              { image: "studio-r7/portal-staff-all", title: "All deliveries", body: "Staff see every client's work in one list." },
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
        ],
      },
      {
        id: "next",
        title: "Designs for what comes next",
        intro: "Mock-ups, not built yet.",
        blocks: [
          {
            type: "gallery",
            frame: "browser",
            columns: 2,
            items: [
              { image: "studio-r7/portal-mock-approvals", caption: "Approvals: approve a version or request changes" },
              { image: "studio-r7/portal-mock-team", caption: "Team: who can see and do what" },
              { image: "studio-r7/portal-mock-email", caption: "The request email, with one clear button" },
            ],
          },
        ],
      },
    ],
    stack: [...SITE_STACK, "Supabase", "Zod"],
  },
  {
    slug: "queue",
    name: "Queue",
    kind: "Product design · LINE app",
    tagline: "Take a number. Then take a walk.",
    summary:
      "A queue for shops and clinics that lives on the venue's screens and in the customer's chat: check in like a flight, see the wait, get a message when it is your turn. Designed and announced, not live yet.",
    status: "Designed, not released",
    url: { label: "the Queue page", href: "https://studior7.com/en/queue" },
    parent: R7,
    cover: "apps/queue-desk-mock",
    coverFrame: "plain",
    band: "bg-surface",
    facts: [
      { value: "5", label: "steps in a visit: book, check in, stroll, get called, measure" },
      { value: "7", label: "AI suggestions, each approved by staff" },
      { value: "1", label: "desk for every service point, display and branch" },
      { value: "0", label: "apps to install; it runs in LINE and on screens" },
    ],
    honest:
      "Queue is not live. The desk and the numbers are design mock-ups with example data, and the public page is marked \"coming soon\".",
    chapters: [
      {
        id: "idea",
        title: "The idea",
        intro: "Waiting is fine. Standing in a room not knowing how long is not. The design borrows from airline check-in.",
        blocks: [
          {
            type: "shot",
            image: "apps/queue-hero",
            frame: "browser",
            title: "The product page",
            body: [
              "A dark page with one green line and one promise. The status is in the first badge a visitor reads: coming soon, not live yet.",
            ],
          },
          {
            type: "shot",
            image: "apps/queue-flow",
            frame: "plain",
            title: "One visit, five steps",
            body: [
              "Book ahead or walk in, check in online before arriving, wait wherever you like, get called on a screen and in chat. The last step is for the business: measure wait times and no-shows.",
            ],
          },
        ],
      },
      {
        id: "desk",
        title: "The queue desk",
        intro: "One screen for the person running the room.",
        blocks: [
          {
            type: "shot",
            image: "apps/queue-desk-mock",
            frame: "plain",
            title: "Every queue, every screen",
            body: [
              "Live numbers on top, one column per service point, the register of today's bookings below, and on the right the displays and the next action.",
              "Suggestions appear as cards with one button. Staff approve; nothing is sent on its own.",
            ],
            points: ["Wait shown as a band, not a false exact number", "No-shows flagged, with a suggested backfill", "A fictional clinic and example data throughout"],
          },
          {
            type: "gallery",
            frame: "browser",
            columns: 2,
            items: [
              { image: "apps/queue-ai", caption: "Seven AI suggestions, with staff in charge" },
              { image: "apps/queue-kpi", caption: "The numbers a manager gets, shown with example data" },
            ],
          },
        ],
      },
    ],
    stack: SITE_STACK,
  },
  {
    slug: "reviq-money",
    name: "RevIQ Money",
    kind: "SaaS module · invoicing and books",
    tagline: "Quote, invoice, get paid, and know what is still owed.",
    summary:
      "The money side of the RevIQ business suite: bilingual Thai tax documents with withholding tax worked out, a payment ledger on every invoice, and a dashboard that answers one question first: what is owed to you.",
    status: "Live behind login · shown from a local demo",
    parent: REVIQ,
    cover: "reviq/app-money",
    coverFrame: "browser",
    band: "bg-surface",
    facts: [
      { value: "10", label: "document kinds, from quote to withholding-tax certificate" },
      { value: "2", label: "languages on every document, Thai and English together" },
      { value: "7", label: "figures on the dashboard, including VAT and withholding tax" },
      { value: "1", label: "payment ledger per invoice; status is never set by hand" },
    ],
    honest: DEMO_NOTE,
    chapters: [
      {
        id: "dashboard",
        title: "The books at a glance",
        intro: "A small business owner opens this to learn two things: what came in, and who still owes.",
        blocks: [
          {
            type: "shot",
            image: "reviq/app-money-full",
            frame: "browser",
            title: "The dashboard",
            body: [
              "Revenue, expenses, gross profit and outstanding on the first row. VAT collected, VAT paid and withholding tax on the second, because in Thailand those are the numbers an accountant asks for.",
              "Below, the year month by month. Scroll inside the frame to see the trend.",
            ],
          },
          {
            type: "gallery",
            frame: "browser",
            columns: 2,
            items: [
              { image: "reviq/app-revenue", caption: "Revenue: every quote and invoice with its real status" },
              { image: "reviq/app-expenses", caption: "Expenses: by transaction or by type" },
            ],
          },
        ],
      },
      {
        id: "documents",
        title: "A document from start to paid",
        intro: "The customer comes from the contact list, never from free text, so the legal name, tax ID and address on a document are always the recorded ones.",
        blocks: [
          {
            type: "process",
            title: "One invoice, drawn",
            actors: ["Business", "RevIQ", "Customer"],
            steps: [
              { actor: 0, title: "Write the quote", body: "Pick a contact, add lines." },
              { actor: 1, title: "Check the details", body: "Refuses a tax document with missing buyer details." },
              { actor: 2, title: "Accept", body: "The quote converts to an invoice." },
              { actor: 1, title: "Number it", body: "A sequence without gaps." },
              { actor: 2, title: "Pay", body: "By PromptPay, transfer or cash." },
              { actor: 0, title: "Record the payment", body: "Part payments are just the first entry." },
              { actor: 1, title: "Update the status", body: "Derived from the ledger." },
              { actor: 0, title: "Issue the receipt", body: "One step from the paid invoice." },
            ],
          },
          {
            type: "shot",
            image: "reviq/app-invoice-new",
            frame: "browser",
            title: "The form",
            body: [
              "Dates, payment terms, the recipient, then lines with VAT and withholding tax per line. Every field has one sentence under it saying why it is asked.",
            ],
          },
          {
            type: "gallery",
            title: "The documents themselves",
            intro: "Thai and English on the same page, the amount in words in both languages, and payments received listed under the total.",
            frame: "plain",
            columns: 2,
            items: [
              { image: "reviq/paper-invoice", caption: "An invoice, partly paid" },
              { image: "reviq/paper-quote", caption: "A quote awaiting a reply" },
            ],
          },
          {
            type: "shot",
            image: "reviq/app-doc-3",
            frame: "browser",
            title: "The document page",
            body: [
              "A suggested next step sits on top: record a payment, issue a receipt, convert a quote. Below it, the link to a deal, notes, and a pay link the customer can open to download the document and upload their transfer slip.",
            ],
          },
        ],
      },
      {
        id: "phone",
        title: "On a phone",
        intro: "The same books, one column.",
        blocks: [
          {
            type: "gallery",
            frame: "phone",
            columns: 3,
            items: [
              { image: "reviq/app-home-phone", caption: "Home: owed to you" },
              { image: "reviq/app-money-phone", caption: "Dashboard" },
              { image: "reviq/app-revenue-phone", caption: "Revenue" },
            ],
          },
        ],
      },
    ],
    stack: REVIQ_STACK,
  },
  {
    slug: "reviq-contacts",
    name: "RevIQ Contacts",
    kind: "SaaS module · CRM records",
    tagline: "Every person and company, with everything that happened.",
    summary:
      "The contact hub of RevIQ. A person belongs to a company, and a record page shows their deals, documents, tasks and payments on one timeline, with a suggested next step on top.",
    status: "Live behind login · shown from a local demo",
    parent: REVIQ,
    cover: "reviq/app-company",
    coverFrame: "browser",
    band: "bg-band-blue",
    facts: [
      { value: "2", label: "record types, person and company, linked to each other" },
      { value: "115", label: "fields defined in one blueprint" },
      { value: "18", label: "sections those fields are grouped in" },
      { value: "1", label: "timeline per record: notes, calls, tasks, money" },
    ],
    honest: DEMO_NOTE,
    chapters: [
      {
        id: "lists",
        title: "People and companies",
        intro: "Two plain lists with search. The work is in what opens when you tap a row.",
        blocks: [
          {
            type: "gallery",
            frame: "browser",
            columns: 2,
            items: [
              { image: "reviq/app-people", caption: "People, each with their company" },
              { image: "reviq/app-companies", caption: "Companies" },
            ],
          },
        ],
      },
      {
        id: "record",
        title: "The record page",
        intro: "Three columns: who they are, what happened, and what they are connected to.",
        blocks: [
          {
            type: "shot",
            image: "reviq/app-company",
            frame: "browser",
            title: "A company",
            body: [
              "On the left, the details and quick actions: note, email, call, task, meeting. In the middle, one timeline where a quote, a payment and an invoice sit beside notes and calls. On the right, its deals, its team and its documents.",
            ],
            points: ["A suggested next step on every new record", "Payments appear on the timeline by themselves", "An audit log at the bottom of the page"],
          },
          {
            type: "shot",
            image: "reviq/app-person",
            frame: "browser",
            title: "A person",
            body: ["The same layout. The company they work at is a link, not typed text, so the two records never drift apart."],
          },
        ],
      },
      {
        id: "blueprint",
        title: "The blueprint",
        intro: "Every field in the product is defined once, in one place, with a sentence saying why it exists.",
        blocks: [
          {
            type: "shot",
            image: "reviq/app-blueprint",
            frame: "browser",
            title: "The model, readable",
            body: [
              "The owner of a workspace can read the whole data model in plain words: what each field is, who can see it, and when it is shown. Forms, lists and permissions are built from this one definition.",
            ],
          },
          {
            type: "gallery",
            title: "On a phone",
            frame: "phone",
            columns: 3,
            items: [
              { image: "reviq/app-people-phone", caption: "People" },
              { image: "reviq/app-person-phone", caption: "A person" },
              { image: "reviq/app-company-phone", caption: "A company" },
            ],
          },
        ],
      },
    ],
    stack: REVIQ_STACK,
  },
  {
    slug: "reviq-deals",
    name: "RevIQ Deals",
    kind: "SaaS module · pipeline and tasks",
    tagline: "A board that shows the stage and the money as two different things.",
    summary:
      "The pipeline of RevIQ. Each deal card carries two bars: how far the deal has moved, and how much of it has been invoiced and collected. Tasks sit beside it, sorted by what is overdue.",
    status: "Live behind login · shown from a local demo",
    parent: REVIQ,
    cover: "reviq/app-deals",
    coverFrame: "browser",
    band: "bg-band-mint",
    facts: [
      { value: "6", label: "default stages, from New to Won or Lost; all editable" },
      { value: "2", label: "rails on every deal: commercial stage and money collected" },
      { value: "1", label: "contact behind every deal, never free text" },
      { value: "3", label: "task groups: overdue, today, this week" },
    ],
    honest: DEMO_NOTE,
    chapters: [
      {
        id: "board",
        title: "The board",
        intro: "Winning a deal and being paid for it are not the same event. The board keeps them apart.",
        blocks: [
          {
            type: "shot",
            image: "reviq/app-deals",
            frame: "browser",
            title: "Deals by stage",
            body: [
              "The open total sits under the title. Each card shows the value, the customer, the stage as a purple bar and the money as a second bar under it, plus the next step in words.",
              "Stages can be renamed, and a workspace can keep more than one board.",
            ],
          },
          {
            type: "shot",
            image: "reviq/app-deal",
            frame: "browser",
            title: "One deal",
            body: [
              "Value and stage on the left. In the middle, the two rails with the figures spelled out: collected, outstanding, invoiced, not invoiced yet. Then next steps, emails and notes.",
            ],
          },
        ],
      },
      {
        id: "tasks",
        title: "Tasks and the home screen",
        intro: "What needs doing, in the order it hurts.",
        blocks: [
          {
            type: "gallery",
            frame: "browser",
            columns: 2,
            items: [
              { image: "reviq/app-tasks", caption: "Tasks: overdue first, then today, then this week" },
              { image: "reviq/app-home", caption: "Home: what is owed, and what needs you" },
            ],
          },
          {
            type: "gallery",
            title: "On a phone",
            frame: "phone",
            columns: 3,
            items: [
              { image: "reviq/app-deals-phone", caption: "The board" },
              { image: "reviq/app-tasks-phone", caption: "Tasks" },
              { image: "reviq/app-home-phone", caption: "Home" },
            ],
          },
        ],
      },
    ],
    stack: REVIQ_STACK,
  },
];

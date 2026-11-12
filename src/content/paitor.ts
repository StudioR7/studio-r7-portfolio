import type { Project } from "./types";

export const paitor: Project = {
  slug: "paitor",
  name: "PaiTor",
  localName: "ไปต่อ",
  kind: "Free used-car listing tool, and PaiTor Pro for car yards",
  tagline: "Sell your car yourself. Let it go on.",
  summary:
    "A free tool that helps a Thai car owner make a listing buyers trust: guided photos, honest declarations, and share images for LINE and Facebook. PaiTor Pro is the back office for dealers, designed for the desk and the lot as two different experiences.",
  status: "Live",
  period: "November 2026",
  url: { label: "paitor.app", href: "https://paitor.app/en" },
  cover: "paitor/live-home",
  coverFrame: "browser",
  band: "bg-band-warm",
  disciplines: ["Product", "Brand system", "Character design", "Dealer back office", "LINE", "Research"],
  stack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind 4",
    "Supabase Postgres",
    "LINE LIFF",
    "Leaflet",
    "sharp",
    "Postmark",
    "Vitest",
    "PGlite",
    "Playwright",
  ],
  facts: [
    { value: "204", label: "commits across all branches" },
    { value: "17", label: "brand characters, drawn as layered vector art" },
    { value: "36", label: "dealer back-office screens designed as working HTML" },
    { value: "26", label: "research papers in the product library" },
  ],
  honest:
    "The design-kit screens on this page are marked \"concept art\" because they are the approved design, drawn before the build. PaiTor Pro is built behind a switch on its own branches and is not released. Dealer screens use sample data and sample prices, labelled on every screen. The Chinese version is machine-drafted and waiting for a native review.",
  chapters: [
    {
      id: "idea",
      title: "The idea",
      intro:
        "Selling a car privately in Thailand means a few blurry photos in a Facebook group and a lot of messages asking the same questions. PaiTor makes the listing itself do the work, and keeps it free.",
      blocks: [
        {
          type: "shot",
          image: "paitor/live-home",
          frame: "browser",
          title: "A listing buyers trust, professional from the first post",
          body: [
            "The live home page shows the result before it explains the tool: a real-looking listing on a phone, with the price on a plate, the declarations in green, and the share images beside it.",
            "No sign-up to start. The draft stays on the seller's phone until they choose to publish.",
          ],
          points: ["Thai first, with English and Chinese", "Free for owners, car yards and dealers", "The price is the seller's; the tool never suggests one"],
        },
        {
          type: "shot",
          image: "paitor/screen-browse",
          frame: "browser",
          title: "Finding a car",
          body: [
            "Buyers filter by what matters to them, save cars, compare them, and come back to the same place in the list. Badges only say what was actually checked: \"Owner declared\", never a vague \"verified\".",
          ],
        },
      ],
    },
    {
      id: "flow",
      title: "The sell flow",
      intro: "Four steps to a listing, then one tap to share it everywhere. Shown here from the approved design kit.",
      blocks: [
        {
          type: "flow",
          title: "From \"I want to sell\" to \"Sold\"",
          intro: "Each step fits on one phone screen and can be left and resumed.",
          frame: "phone",
          steps: [
            { image: "paitor/flow-1-car", title: "Your car", body: "Type it as it appears in the green registration book. It does not have to be perfect." },
            { image: "paitor/flow-2-photos", title: "Photos: the 8-angle list", body: "A checklist of the shots buyers want. Location data is stripped from every photo." },
            { image: "paitor/flow-3-condition", title: "Condition, as you know it", body: "Answer what you know and skip the rest. Buyers see the answers as \"Owner declared\"." },
            { image: "paitor/flow-4-price", title: "Price and contact", body: "The seller sets the price. It is shown on a tag styled like a Thai number plate." },
            { image: "paitor/flow-5-preview", title: "Preview", body: "The listing exactly as buyers will see it, before anything is public." },
            { image: "paitor/flow-6-share", title: "Share", body: "Four image formats made automatically: post, feed, story and link preview." },
            { image: "paitor/flow-7-sold", title: "Sold", body: "Green light. The listing is closed with one tap and a small celebration." },
          ],
        },
        {
          type: "gallery",
          title: "Share images, made for each channel",
          frame: "plain",
          columns: 3,
          items: [
            { image: "paitor/share-og", caption: "Link preview with QR code" },
            { image: "paitor/share-portrait", caption: "Feed post" },
            { image: "paitor/share-story", caption: "Story" },
          ],
        },
      ],
    },
    {
      id: "pro",
      title: "PaiTor Pro",
      intro:
        "The back office for car yards. Designed as two different products that share data: \"the office\" on a computer for managing stock, and \"the lot\" on a phone for the person standing next to the car.",
      blocks: [
        {
          type: "shot",
          image: "paitor/pro-today",
          frame: "browser",
          title: "Today: what needs you",
          body: [
            "A dealer opens the day to a short list: buyers waiting for a reply, cars with stale prices, a sync that failed. Numbers that do not need action stay to the side.",
            "The yellow tag on every screen says the data is a sample.",
          ],
        },
        {
          type: "flow",
          title: "The office, on a computer",
          intro: "Dense where a desk worker wants density, with every state designed: empty, loading and error.",
          frame: "browser",
          steps: [
            { image: "paitor/pro-stock", title: "Stock", body: "Every car in one table. Select several and act on them together." },
            { image: "paitor/pro-editor", title: "The car editor", body: "Three columns: sections on the left, the form in the middle, and a live buyer's view on the right." },
            { image: "paitor/pro-import", title: "Import", body: "Bring in a stock file. Each row is checked, and problems are listed before anything is saved." },
            { image: "paitor/pro-connections", title: "Connections", body: "The sync centre: Google Sheets, CSV, LINE. When a sync breaks, the screen says what happened and what to do." },
            { image: "paitor/pro-chats", title: "Chats", body: "Buyer conversations beside the car they are about." },
          ],
        },
        {
          type: "gallery",
          title: "The lot, on a phone",
          frame: "phone",
          columns: 2,
          items: [
            { image: "paitor/pro-phone-today", caption: "Today: three things waiting, about three minutes" },
            { image: "paitor/pro-phone-stock", caption: "Stock, built for one thumb" },
          ],
        },
        {
          type: "gallery",
          title: "Paid placement, clearly labelled",
          intro: "Listings stay free. Dealers can pay to boost cars or place a banner, and every paid spot is marked as an ad with a \"why am I seeing this\" explanation.",
          frame: "browser",
          columns: 2,
          items: [
            { image: "paitor/pro-boost-bulk", caption: "Boost several cars at once, with the cost shown before paying" },
            { image: "paitor/pro-banner-design", caption: "Design a banner from the yard's own stock" },
          ],
        },
        {
          type: "gallery",
          title: "In LINE",
          intro: "Where Thai buyers and dealers already talk. Car cards, alerts and a weekly update from the yard.",
          frame: "phone",
          columns: 3,
          items: [
            { image: "paitor/pro-line-car-card", caption: "A saved car drops in price" },
            { image: "paitor/pro-line-carousel", caption: "New cars that match a saved search" },
            { image: "paitor/pro-line-weekly", caption: "A yard's weekly update: new cars this week" },
          ],
        },
      ],
    },
    {
      id: "brand",
      title: "The brand",
      intro:
        "\"The car goes on.\" A brand built from the Thai street: golden hour on the soi, yellow lane dashes, a price on a number plate.",
      blocks: [
        {
          type: "shot",
          image: "paitor/brand-logo-guide",
          frame: "plain",
          title: "The logo system",
          body: [
            "A road running into a half-set sun, on a sunset tile. Thai lockup first, English second, with stacked, single-colour and dark versions.",
            "The mark never carries a character or a \"verified\" seal.",
          ],
        },
        {
          type: "shot",
          image: "paitor/cast-lineup",
          frame: "plain",
          title: "The Pak Soi crew",
          body: [
            "Seventeen characters made from road furniture: a wing mirror, a traffic cone, a steering wheel, a motorbike taxi, a songthaew. They help with the task and are labelled as AI helpers.",
            "They follow firm rules: they never inspect a car and never give a price.",
          ],
        },
        {
          type: "gallery",
          frame: "plain",
          columns: 2,
          items: [
            { image: "paitor/cast-world-scene", caption: "The world: one soi at golden hour" },
            { image: "paitor/cast-comparison", caption: "Two casts compared before the vehicle cast was chosen" },
            { image: "paitor/brand-art-direction", caption: "Illustration and photo direction" },
            { image: "paitor/story-storyboard", caption: "Launch film storyboard" },
          ],
        },
        {
          type: "shot",
          image: "paitor/brand-component-library",
          frame: "browser",
          title: "The component library",
          body: [
            "Colours, type, buttons, price plates, badges and states, in light and dark, composed from one token file. Thai text is set with more line height than English because Thai needs it.",
            "Rules that apply everywhere: text at 15 pixels or larger, strong contrast, no empty labels, and every state designed.",
          ],
        },
        {
          type: "gallery",
          frame: "phone",
          columns: 3,
          items: [
            { image: "paitor/screen-listing-phone", caption: "A listing" },
            { image: "paitor/screen-landing-dark", caption: "Dark mode" },
            { image: "paitor/line-rich-menu", caption: "LINE rich menu" },
          ],
        },
      ],
    },
    {
      id: "engineering",
      title: "Under the hood",
      intro: "A marketplace lives or dies on trust, so the tests go where trust can break.",
      blocks: [
        {
          type: "process",
          title: "From listing to sold, drawn",
          intro: "The seller's steps, the buyer's steps, and what the platform does between them.",
          actors: ["Seller", "Buyer", "Platform"],
          steps: [
            { actor: 0, title: "Describe the car", body: "Matched to a catalogue of makes and models." },
            { actor: 0, title: "Add photos", body: "An 8-angle checklist." },
            { actor: 2, title: "Clean the photos", body: "Location data is stripped." },
            { actor: 0, title: "Set price, publish", body: "Preview first, then go live." },
            { actor: 1, title: "Search or get an alert", body: "Saved searches send new matches." },
            { actor: 1, title: "Make an offer", body: "Offer and counter-offer, in turns." },
            { actor: 2, title: "Open a chat", body: "Buyer and seller talk beside the car." },
            { actor: 0, title: "Mark as sold", body: "One tap closes the listing." },
          ],
        },
        {
          type: "schema",
          title: "The data model, simplified",
          intro: "The car catalogue on top, a listing in the middle, and what buyers do with it below. An arrow reads \"belongs to\".",
          note: "Simplified from the Postgres schema. The real database has about 70 tables; fields and access rules are left out here.",
          columns: 3,
          entities: [
            { id: "make", name: "Make", note: "Toyota, Honda…", col: 0, row: 0 },
            { id: "model", name: "Model", note: "Hilux, Civic…", col: 1, row: 0 },
            { id: "generation", name: "Generation", note: "Years on sale", col: 2, row: 0 },
            { id: "seller", name: "Seller", note: "Private or dealer", col: 0, row: 1 },
            { id: "listing", name: "Listing", note: "One car for sale", col: 1, row: 1 },
            { id: "photo", name: "Photo", note: "Ordered shots", col: 2, row: 1 },
            { id: "offer", name: "Offer", note: "Price talk", col: 0, row: 2 },
            { id: "chat", name: "Chat", note: "Messages", col: 1, row: 2 },
            { id: "sale", name: "Sale", note: "How it ended", col: 2, row: 2 },
          ],
          links: [
            { from: "model", to: "make" },
            { from: "generation", to: "model" },
            { from: "listing", to: "seller" },
            { from: "listing", to: "model" },
            { from: "photo", to: "listing" },
            { from: "offer", to: "listing" },
            { from: "chat", to: "listing" },
            { from: "sale", to: "listing" },
          ],
        },
        {
          type: "list",
          title: "What is tested, and how",
          items: [
            { title: "Database rules tested as SQL", body: "22 SQL test files cover who can read and write what, search, alerts, offers and chat, run against a real Postgres engine in memory." },
            { title: "Chat under stress", body: "Buyer and seller chat has chaos, soak and load test scripts, plus web push notifications." },
            { title: "Search alerts and price history", body: "A saved search sends a daily alert, and every price change is kept." },
            { title: "A screenshot audit", body: "One script captures every page at desktop and phone width in three languages, so a design review looks at the real thing." },
            { title: "Research in the database", body: "Every research report is also imported into the product's own library, ready to be reused for guides and articles." },
          ],
        },
      ],
    },
    {
      id: "papers",
      title: "Papers",
      intro: "PaiTor was researched before it was drawn, and drawn before it was built.",
      blocks: [
        {
          type: "papers",
          title: "Research, plans and design documents",
          intro: "A selection from the repository. Summaries are public; the full documents are shared on request.",
          project: "PaiTor",
        },
      ],
    },
  ],
};

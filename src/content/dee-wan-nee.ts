import type { Project } from "./types";

export const deeWanNee: Project = {
  slug: "dee-wan-nee",
  name: "Dee Wan Nee",
  localName: "ดีวันนี้",
  kind: "Restaurant deals and discovery platform, inside LINE",
  tagline: "Great food. Last-minute deals. Today.",
  summary:
    "A Bangkok platform where restaurants fill quiet tables with same-day deals and diners claim them in LINE. Six characters, three languages, and a redemption flow that never asks staff to type a bill.",
  status: "Coming soon to Bangkok",
  period: "October to November 2026",
  url: { label: "deewannee.com", href: "https://www.deewannee.com/en" },
  cover: "dee-wan-nee/live-home",
  coverFrame: "browser",
  band: "bg-band-mint",
  disciplines: ["Platform", "LINE app", "Character brand", "Database design", "Research"],
  stack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Supabase Postgres",
    "Row-level security",
    "LINE LIFF",
    "MapLibre",
    "next-intl",
    "Claude API",
    "Vitest",
    "pgTAP",
    "Playwright",
  ],
  facts: [
    { value: "196", label: "commits in the repo" },
    { value: "69", label: "screens across the public site, admin and LINE apps" },
    { value: "41", label: "database migrations, with 42 SQL test files" },
    { value: "3 × 3,117", label: "languages × translated text keys, kept in step" },
  ],
  honest:
    "Dee Wan Nee has not opened to the public yet. The diner and staff apps run inside LINE and need a LINE login, so this page shows the public site, the example pages and the brand, and describes the in-LINE flows in words. The example restaurant and chef are made up and labelled so on the live site.",
  chapters: [
    {
      id: "idea",
      title: "The idea",
      intro:
        "A restaurant with empty tables at 6 pm has a problem that expires at 9 pm. Dee Wan Nee gives it a way to fill those tables today, and gives diners a reason to try somewhere near their station tonight.",
      blocks: [
        {
          type: "shot",
          image: "dee-wan-nee/live-home",
          frame: "browser",
          title: "A home page with a face",
          body: [
            "Moo, the food-finder pig, holds the app and winks. The promise is three short lines, and the main button adds Dee Wan Nee as a friend in LINE. There is nothing to install.",
            "The band along the bottom lists BTS and MRT stations, because in Bangkok \"near me\" means near my station.",
          ],
          points: ["Thai first, English and Chinese alongside", "Everything happens in LINE", "Restaurant owners have their own door on the same page"],
        },
        {
          type: "gallery",
          frame: "phone",
          columns: 3,
          items: [
            { image: "dee-wan-nee/live-home-phone", caption: "Home on a phone, Thai" },
            { image: "dee-wan-nee/live-restaurant-phone", caption: "The example restaurant page" },
            { image: "dee-wan-nee/live-palate-phone", caption: "The example chef profile" },
          ],
        },
      ],
    },
    {
      id: "flows",
      title: "How a deal works",
      intro:
        "The whole product rests on one rule: staff confirm that the guest spent the minimum, and nothing more. No bill amounts, no calculator at the till.",
      blocks: [
        {
          type: "list",
          title: "The deal, from publish to plate",
          intro: "Five steps, two people, one QR code.",
          items: [
            { title: "1. The restaurant publishes a deal", body: "A fixed discount on a minimum spend, for today, between set hours. A planner helps the owner check the deal will pay before it goes live." },
            { title: "2. A diner finds it", body: "By station, by area or on the map. Each deal shows when it runs and how far the walk is." },
            { title: "3. The diner claims it in LINE", body: "The claim becomes a voucher with a QR code that changes every few moments, so a screenshot cannot be reused." },
            { title: "4. Staff scan and confirm", body: "One scan, one tap to confirm the minimum spend was reached. The discount and the fee were fixed when the deal was published." },
            { title: "5. Both sides are rewarded", body: "The diner earns Rice Bowls towards rewards. The restaurant sees the table it filled." },
          ],
        },
        {
          type: "process",
          title: "One deal, drawn",
          intro: "Who does what, from the restaurant's side to the diner's and back.",
          actors: ["Restaurant", "Diner", "Platform"],
          steps: [
            { actor: 0, title: "Plan the deal", body: "Discount, minimum spend, days and hours." },
            { actor: 2, title: "Check and publish", body: "Each edit is saved as a new version." },
            { actor: 1, title: "Find it", body: "By station, area or map." },
            { actor: 1, title: "Claim in LINE", body: "The claim becomes a voucher with a code." },
            { actor: 0, title: "Scan at the table", body: "Staff confirm the minimum spend." },
            { actor: 2, title: "Record the redemption", body: "Written once, to a ledger that only grows." },
            { actor: 1, title: "Earn Rice Bowls", body: "Points towards rewards." },
            { actor: 0, title: "See the result", body: "The tables the deal filled." },
          ],
        },
        {
          type: "shot",
          image: "dee-wan-nee/live-restaurant",
          frame: "browser",
          title: "What guests see",
          body: [
            "A restaurant page with photos, the kitchen's story, today's deals, opening hours, the nearest station and a map. This one is an example, and the purple box at the top says so in plain words.",
            "Owners edit their page in a three-column editor with a live preview of exactly this view.",
          ],
        },
        {
          type: "shot",
          image: "dee-wan-nee/live-partners",
          frame: "browser",
          title: "Bringing restaurants on board",
          body: [
            "Before opening, invited partners get a preview page: what is asked of them, and six steps in order. An owner adds their place from LINE with a map search, and it goes live once it has a name, hours and a cover photo.",
            "Ownership is checked properly. A business paper and an ID are read by Claude, then a person reviews the claim before the restaurant is marked as verified.",
          ],
        },
        {
          type: "shot",
          image: "dee-wan-nee/live-palate",
          frame: "browser",
          title: "Palate: profiles for the people who cook",
          body: [
            "Chefs and sommeliers get a career page: where they have worked, what they are known for, a portfolio of plates. Each entry is confirmed by the restaurant, so the page means something.",
            "The profile shown is an example with a made-up chef.",
          ],
        },
      ],
    },
    {
      id: "brand",
      title: "The characters",
      intro:
        "Six food guides, each with a job. They make a deals app feel like a friend's recommendation, and they give every screen and message a recognisable voice.",
      blocks: [
        {
          type: "shot",
          image: "dee-wan-nee/brand-lineup",
          frame: "plain",
          title: "The Dee Wan Nee cast",
          body: [
            "Moo finds food. Kai hunts deals. Pa plans the evening. Pet checks the vibe. Chilly knows the spice. Jai is the local expert. The art is protected: it is never redrawn, cropped loosely or replaced.",
          ],
        },
        {
          type: "gallery",
          frame: "plain",
          columns: 3,
          items: [
            { image: "dee-wan-nee/cast-moo", caption: "Moo, food finder" },
            { image: "dee-wan-nee/cast-kai", caption: "Kai, deal hunter" },
            { image: "dee-wan-nee/cast-pa", caption: "Pa, planner" },
            { image: "dee-wan-nee/cast-pet", caption: "Pet, vibe check" },
            { image: "dee-wan-nee/cast-chilly", caption: "Chilly, spice guide" },
            { image: "dee-wan-nee/cast-jai", caption: "Jai, local expert" },
          ],
        },
        {
          type: "gallery",
          title: "Inside LINE",
          intro: "The rich menu is the app's home screen. Each new friend is greeted by a character.",
          frame: "plain",
          columns: 2,
          items: [
            { image: "dee-wan-nee/line-rich-menu", caption: "The LINE rich menu: six doors, one per character" },
            { image: "dee-wan-nee/line-welcome-moo", caption: "Welcome card, Moo" },
            { image: "dee-wan-nee/line-welcome-kai", caption: "Welcome card, Kai" },
            { image: "dee-wan-nee/line-welcome-jai", caption: "Welcome card, Jai" },
          ],
        },
        {
          type: "gallery",
          title: "Link previews in three languages",
          frame: "plain",
          columns: 3,
          items: [
            { image: "dee-wan-nee/share-card-en", caption: "English" },
            { image: "dee-wan-nee/share-card-th", caption: "Thai" },
            { image: "dee-wan-nee/share-card-zh", caption: "Chinese" },
          ],
        },
      ],
    },
    {
      id: "engineering",
      title: "Under the hood",
      intro: "A deals platform handles money-like value and personal data, so the careful work is in the database.",
      blocks: [
        {
          type: "schema",
          title: "The data model, simplified",
          intro: "The main records behind a deal and how they connect. An arrow reads \"belongs to\".",
          note: "Simplified from the Postgres schema. The real database has about 50 tables; fields and access rules are left out here.",
          columns: 3,
          entities: [
            { id: "merchant", name: "Merchant", note: "The business", col: 0, row: 0 },
            { id: "restaurant", name: "Restaurant", note: "A listed venue", col: 1, row: 0 },
            { id: "branch", name: "Branch", note: "A place on the map", col: 2, row: 0 },
            { id: "member", name: "Team member", note: "Owner or staff", col: 0, row: 1 },
            { id: "deal", name: "Deal", note: "The offer", col: 1, row: 1 },
            { id: "version", name: "Deal version", note: "Terms as published", col: 2, row: 1 },
            { id: "profile", name: "Profile", note: "A person, via LINE", col: 0, row: 2 },
            { id: "claim", name: "Claim", note: "A voucher", col: 1, row: 2 },
            { id: "tier", name: "Tier", note: "Spend and discount", col: 2, row: 2 },
            { id: "redemption", name: "Redemption", note: "Used at the table", col: 1, row: 3 },
          ],
          links: [
            { from: "restaurant", to: "merchant" },
            { from: "branch", to: "restaurant" },
            { from: "member", to: "merchant" },
            { from: "deal", to: "restaurant" },
            { from: "version", to: "deal" },
            { from: "tier", to: "version" },
            { from: "claim", to: "deal" },
            { from: "claim", to: "profile" },
            { from: "redemption", to: "claim" },
          ],
        },
        {
          type: "list",
          title: "What keeps it honest",
          items: [
            { title: "Security rules in the database itself", body: "Access is decided by row-level security in Postgres, not by the app alone. A diner, a staff member, an owner and an admin each see only what is theirs, and 42 SQL test files check it." },
            { title: "Ledgers that only grow", body: "Redemptions and reward points are written to append-only ledgers. A repeated scan cannot be counted twice." },
            { title: "Exact maths for deals", body: "The deal planner works in exact fractions, with a set of known-answer test cases, so a restaurant is never shown a rounded-off profit." },
            { title: "Search engines get every page", body: "A test fails the build if any public page is missing from the sitemap in any of the three languages." },
            { title: "Four ways to sign in", body: "LINE, Google, Microsoft, or email and password, mapped to one account." },
            { title: "Design tokens as the single source", body: "Colours and type live in one file that generates the CSS. Teal, cream and ink, plus one accent per character." },
          ],
        },
      ],
    },
    {
      id: "papers",
      title: "Papers",
      intro: "Decisions are recorded with their reasons, and research is kept in the product's own library for reuse.",
      blocks: [
        {
          type: "papers",
          title: "Research, architecture and decision records",
          intro: "A selection from the repository. Summaries are public; the full documents are shared on request.",
          project: "Dee Wan Nee",
        },
      ],
    },
  ],
};

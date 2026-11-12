import type { Paper } from "./types";

// Summaries only. The documents themselves stay in their private repositories:
// several hold internal pricing or contact details, so they are shared on request.
export const papers: Paper[] = [
  // Studio R7
  { project: "Studio R7", kind: "Research", title: "Answer engines and structured data", length: "393 lines", summary: "How AI assistants and search engines read a small-business site in 2026, what changed when FAQ rich results were withdrawn, and the checks added to the build as a result." },
  { project: "Studio R7", kind: "Research", title: "Site SEO audit", length: "315 lines", summary: "A page-by-page audit of 84 pages: titles, descriptions, canonical and language tags, structured data, and what to fix first." },
  { project: "Studio R7", kind: "Architecture", title: "The engine bible", length: "153 lines", summary: "The 36 building blocks of the growth engine, the rules they follow, the decisions already made and the 17 tensions still open." },
  { project: "Studio R7", kind: "Architecture", title: "Dependency map of the 36 blocks", length: "139 lines", summary: "What must exist before each block can be built, and the order of the stages that follows from it." },
  { project: "Studio R7", kind: "Architecture", title: "Component dossiers C01 to C36", length: "37 files, 420 to 980 lines each", summary: "One dossier per block: the options compared, the choice and why, the cost model, and sources. Examples: event spine, AI router, cost ledger, page quality check." },
  { project: "Studio R7", kind: "Design", title: "Quality standard", length: "550 lines", summary: "A 1-to-5 scale across 14 dimensions, three scorecards, and the gate a piece of work must pass before it ships." },
  { project: "Studio R7", kind: "Design", title: "Client back end design", length: "277 lines, plus a 288-line review", summary: "The client portal: who sees what, the data model, the security model, and every screen in both languages." },

  // Dee Wan Nee
  { project: "Dee Wan Nee", kind: "Research", title: "Will this deal pay? The deal-value calculator", length: "1,145 lines, plus a 318-line source appendix", summary: "The maths of a restaurant discount: when a deal fills a table profitably and when it gives margin away, turned into a planner with exact arithmetic and known-answer tests." },
  { project: "Dee Wan Nee", kind: "Research", title: "Career timelines for chefs", length: "636 lines", summary: "How to show a cook's career so it is true: who confirms each entry, what counts as evidence, and how other professions solve it." },
  { project: "Dee Wan Nee", kind: "Research", title: "Chef and sommelier profiles", length: "210 lines", summary: "What a profile needs to be useful to a diner, an employer and the person it describes." },
  { project: "Dee Wan Nee", kind: "Research", title: "Verifying a business", length: "79 lines", summary: "How to check that the person claiming a restaurant really runs it, using Thai business papers and an ID, with a person making the final call." },
  { project: "Dee Wan Nee", kind: "Decision record", title: "Nine architecture decision records", length: "20 to 105 lines each", summary: "LINE login mapped to database sessions, threshold deals with a fixed fee, reward units and their ledger, the creator programme, more ways to sign in, and one fee table." },
  { project: "Dee Wan Nee", kind: "Architecture", title: "System overview and database design", length: "323 and 303 lines", summary: "How the public site, the LINE apps, the admin console and the database fit together, and the shape of every table." },
  { project: "Dee Wan Nee", kind: "Plan", title: "Palate build plan", length: "1,290 lines", summary: "The full plan for career profiles: data model, flows for cooks and restaurants, the accreditation registry and the release steps." },
  { project: "Dee Wan Nee", kind: "Design", title: "Design system: look, patterns, characters, governance", length: "9 documents", summary: "How the app should look and behave, the rules protecting the character art, and who may change what." },

  // PaiTor
  { project: "PaiTor", kind: "Research", title: "Trust badges and verification", length: "431 lines", summary: "What a marketplace may honestly claim about a seller or a car. The conclusion became a product rule: never say \"verified\" unless something was checked." },
  { project: "PaiTor", kind: "Research", title: "Finding a car: browse and search", length: "185 lines", summary: "How buyers actually look for a used car, and a build plan for filters, saved cars, compare and returning to the same place." },
  { project: "PaiTor", kind: "Research", title: "Chat architecture", length: "904 lines", summary: "Options for buyer-and-seller chat compared on cost, reliability and abuse, with the design chosen and how it is tested under load." },
  { project: "PaiTor", kind: "Plan", title: "Search alerts and offers", length: "921 lines", summary: "Saved searches, daily alerts, price history and offers, from the data model to the message a buyer receives." },
  { project: "PaiTor", kind: "Plan", title: "Dealer growth and stock sync", length: "735 lines", summary: "How a car yard claims its page, keeps stock in step from a spreadsheet or LINE, and what keeps listings fresh." },
  { project: "PaiTor", kind: "Research", title: "The research library", length: "26 documents, about 9,400 lines", summary: "Four questions, each researched three times and then combined: dealer stock sync, the money model, ranking, and growth. Stored in the product's own database for reuse." },
  { project: "PaiTor", kind: "Design", title: "Dealer back office specification", length: "3 documents, 216 lines, with 36 working mock-ups", summary: "\"The office\" and \"the lot\": two experiences for one dealer, every screen and state, and how paid placement is labelled." },
  { project: "PaiTor", kind: "Design", title: "Brand story and cast", length: "510 and 301 lines", summary: "The world of the soi, the seventeen characters, how they speak, and the rules for what they may never do." },
  { project: "PaiTor", kind: "Design", title: "Quality pass", length: "287 lines", summary: "A screenshot audit of every page at two widths in three languages, with each finding and its fix." },

  // RevIQ
  { project: "RevIQ", kind: "Architecture", title: "Architecture v2", length: "1,126 lines", summary: "The foundation for the rebuild: the workspace model, channel adapters for LINE, WhatsApp and email, and the decision engine." },
  { project: "RevIQ", kind: "Architecture", title: "Entitlements", length: "134 lines", summary: "How plans and features are gated from one place, and how that closes the loop with billing." },
  { project: "RevIQ", kind: "Design", title: "Theme architecture", length: "205 lines", summary: "Design tokens, presets and safely scoped custom styles, so each storefront can look like its own brand." },
  { project: "RevIQ", kind: "Design", title: "SignIQ composer and send-to-sign", length: "3 documents, 389 lines", summary: "The agreement composer, how a document goes out for signature, and what the signer sees." },
  { project: "RevIQ", kind: "Plan", title: "LeadIQ engine plan", length: "388 lines", summary: "Scoring, nurture plans and replies that are planned, written and then checked before they are sent." },
  { project: "RevIQ", kind: "Design", title: "Form builder redesign", length: "514 lines", summary: "A user-experience review of the form builder and the redesign that followed." },
];

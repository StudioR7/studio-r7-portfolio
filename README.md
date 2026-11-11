# Studio R7 · Portfolio

Apps, websites, flows, brands and research from **Studio R7**, a tech and automation studio in Bangkok.

**View the portfolio: https://studior7.github.io/studio-r7-portfolio/**

Each project opens as a story in chapters: the idea first, then the flows, the screens, the brand and the papers behind it. Every screen has a written explanation beside it.

[![Studio R7 home page](public/work/studio-r7/live-home.webp)](https://studior7.github.io/studio-r7-portfolio/work/studio-r7/)

## The four products

| | Project | What it is | Status |
|---|---|---|---|
| 01 | [**Studio R7**](https://studior7.github.io/studio-r7-portfolio/work/studio-r7/) | Bilingual agency website, guided project brief, two free business apps, client portal and the start of a growth engine | Live · [studior7.com](https://studior7.com/en) |
| 02 | [**Dee Wan Nee** ดีวันนี้](https://studior7.github.io/studio-r7-portfolio/work/dee-wan-nee/) | Restaurant deals and discovery platform that runs inside LINE, with six characters and three languages | Coming soon · [deewannee.com](https://www.deewannee.com/en) |
| 03 | [**PaiTor** ไปต่อ](https://studior7.github.io/studio-r7-portfolio/work/paitor/) | Free used-car listing tool, plus PaiTor Pro, a back office for car yards | Live · [paitor.app](https://paitor.app/en) |
| 04 | [**RevIQ**](https://studior7.github.io/studio-r7-portfolio/work/reviq/) | Business suite for Thai vendors: contacts, deals, invoices, tax, payroll, inbox, e-signature and AI lead qualification | Live, behind login |

Also in the portfolio:

- [**Design**](https://studior7.github.io/studio-r7-portfolio/design/): brand systems, two casts of characters, LINE menus and social kits
- [**Papers**](https://studior7.github.io/studio-r7-portfolio/papers/): 37 research, architecture and design documents, each with a summary
- [**Toolbox**](https://studior7.github.io/studio-r7-portfolio/toolbox/): the tools along the way, from site builders and Zapier to an AI engineering partner, and the stack used today

## A look inside

### Dee Wan Nee

| The live home page | The cast | LINE rich menu |
|---|---|---|
| ![Dee Wan Nee home](public/work/dee-wan-nee/live-home.webp) | ![Dee Wan Nee characters](public/work/dee-wan-nee/brand-lineup.webp) | ![Dee Wan Nee LINE menu](public/work/dee-wan-nee/line-rich-menu.webp) |

### PaiTor and PaiTor Pro

| The live home page | Dealer back office: Today | The Pak Soi crew |
|---|---|---|
| ![PaiTor home](public/work/paitor/live-home.webp) | ![PaiTor Pro Today](public/work/paitor/pro-today.webp) | ![PaiTor cast](public/work/paitor/cast-lineup.webp) |

The sell flow, step by step:

| 1. Your car | 2. Photos | 3. Condition | 4. Price |
|---|---|---|---|
| ![Step 1](public/work/paitor/flow-1-car.webp) | ![Step 2](public/work/paitor/flow-2-photos.webp) | ![Step 3](public/work/paitor/flow-3-condition.webp) | ![Step 4](public/work/paitor/flow-4-price.webp) |

### Studio R7

| Project brief | Client portal | Engine map |
|---|---|---|
| ![Project brief](public/work/studio-r7/intake-2.webp) | ![Client portal](public/work/studio-r7/portal-home.webp) | ![Engine map](public/work/studio-r7/engine-map.webp) |

### RevIQ

| Marketing site | LeadIQ | Brand kit |
|---|---|---|
| ![RevIQ home](public/work/reviq/home.webp) | ![LeadIQ](public/work/reviq/leadiq.webp) | ![RevIQ brand kit](public/work/reviq/brand-kit.webp) |

## What is honest about this portfolio

- Every project is the studio's own product. There are no client case studies yet.
- Where a screen is a design and not yet released, its page says so.
- Example businesses, people and prices on the screens are made up and labelled as samples.
- Real-estate work is left out on purpose.
- The papers are summarised, not published: some contain internal pricing or contact details. They can be shared on request.

## How this site is built

A static site: Next.js 16, React 19, TypeScript and Tailwind CSS 4, exported to plain HTML and served by GitHub Pages.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the static site to out/
```

- `src/content/` holds every word and every image reference, one typed file per project.
- `src/components/` holds the few building blocks: device frames, the chapter rail, and the block renderer.
- `public/work/` holds the images, converted to WebP.
- `scripts/import-assets.mjs` copies images from the source projects. It only runs on the studio machine, because the source projects are private.

## Rights

© 2026 Studio R7. The text, images, brands and characters shown here belong to Studio R7 and may not be reused without permission.

Contact: [studior7.com](https://studior7.com/en)

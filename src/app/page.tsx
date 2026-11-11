import Link from "next/link";
import { Eyebrow } from "@/components/chrome";
import { Shot } from "@/components/shot";
import { projects } from "@/content";
import { papers } from "@/content/papers";

const DISCIPLINES = [
  { title: "Apps", body: "Platforms with real databases, security rules and tests: deals, car listings, a business suite.", href: "/work/dee-wan-nee/" },
  { title: "Websites", body: "Bilingual, fast, built for phones first and written in plain words.", href: "/work/studio-r7/" },
  { title: "Flows", body: "The step-by-step paths people actually take: a brief, a sale, a redemption, a delivery.", href: "/work/paitor/#flow" },
  { title: "Brands", body: "Logo systems, colour and type, and two full casts of characters.", href: "/design/" },
  { title: "Chat channels", body: "LINE apps, rich menus and message cards, WhatsApp catalogues, Telegram.", href: "/design/#chat" },
  { title: "Papers", body: "Research, architecture and decision records written before the code.", href: "/papers/" },
];

export default function Home() {
  return (
    <>
      <section className="bg-night text-cream">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:pb-24 lg:pt-24">
          <Eyebrow tone="dark">Studio R7 · Bangkok · Portfolio</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Four products. Designed, built and written down.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed">
            Apps, websites, flows, brands and research from a tech and automation studio in Bangkok. Each project
            below opens as a story: the idea first, then the flows, the screens, the brand and the papers behind it.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#work" className="rounded-full bg-white px-6 py-3 font-bold text-night hover:bg-accent">
              See the work
            </a>
            <Link href="/toolbox/" className="rounded-full border border-night-line px-6 py-3 font-bold text-white hover:bg-night-raised">
              The toolbox, then and now
            </Link>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-night-line pt-9 lg:grid-cols-4">
            {[
              ["4", "products, each its own codebase"],
              ["3,152", "commits across the repositories shown"],
              ["3", "languages: Thai, English, Chinese"],
              [String(papers.length), "papers summarised on this site"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="text-4xl font-extrabold text-white sm:text-5xl">{value}</dt>
                <dd className="mt-1.5 text-[16px]">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <Eyebrow>What is in here</Eyebrow>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DISCIPLINES.map((item) => (
              <li key={item.title}>
                <Link href={item.href} className="group block h-full rounded-xl border border-line bg-white p-5 hover:border-primary">
                  <p className="text-lg font-bold">
                    {item.title}
                    <span className="ml-1.5 text-primary-ink transition-transform group-hover:translate-x-1" aria-hidden="true">
                      →
                    </span>
                  </p>
                  <p className="mt-1.5 text-[16px] text-muted">{item.body}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-4 pt-20 sm:px-6">
        <Eyebrow>The work</Eyebrow>
        <h2 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">Start with any of the four.</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Every project is the studio&apos;s own product, built end to end. Where something is a design and not yet
          released, the page says so.
        </p>

        <ol className="mt-12 space-y-10">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <article className={`overflow-hidden rounded-3xl border border-line ${project.band}`}>
                <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
                  <div>
                    <p className="text-[15px] font-bold text-primary-ink">
                      {String(index + 1).padStart(2, "0")} · {project.kind}
                    </p>
                    <h3 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                      {project.name}
                      {project.localName && <span className="ml-3 text-2xl font-semibold text-muted sm:text-3xl">{project.localName}</span>}
                    </h3>
                    <p className="mt-4 text-lg text-ink">{project.summary}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.disciplines.map((item) => (
                        <li key={item} className="rounded-full border border-line bg-white px-3 py-1 text-[15px] font-semibold">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-[16px] font-semibold text-muted">
                      {project.status} · {project.period}
                    </p>
                    <Link
                      href={`/work/${project.slug}/`}
                      className="mt-6 inline-block rounded-full bg-night px-6 py-3 font-bold text-white hover:bg-primary-ink"
                    >
                      Open the {project.name} story<span aria-hidden="true"> →</span>
                    </Link>
                  </div>
                  <Link href={`/work/${project.slug}/`} tabIndex={-1} aria-hidden="true">
                    <Shot src={project.cover} alt="" frame={project.coverFrame} eager={index === 0} />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-24 grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3">
        {[
          { href: "/design/", label: "Design", title: "Brands, characters and chat channels", body: "Logo systems, two casts of characters, social kits and LINE menus, side by side." },
          { href: "/papers/", label: "Papers", title: `${papers.length} documents behind the products`, body: "Research, architecture, decision records and design specifications, each with a short summary." },
          { href: "/toolbox/", label: "Toolbox", title: "From Zapier to an AI engineering partner", body: "The tools along the way, what each one taught, and the stack used today." },
        ].map((card) => (
          <Link key={card.href} href={card.href} className="group rounded-2xl border border-line p-7 hover:border-primary">
            <Eyebrow>{card.label}</Eyebrow>
            <p className="mt-3 text-2xl font-bold leading-snug tracking-tight">{card.title}</p>
            <p className="mt-2 text-muted">{card.body}</p>
            <p className="mt-4 font-bold text-primary-ink">
              Open<span className="ml-1 inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </p>
          </Link>
        ))}
      </section>
    </>
  );
}

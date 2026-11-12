import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/chrome";
import { Shot } from "@/components/shot";
import { apps, projects } from "@/content";

export const metadata: Metadata = {
  title: "Apps",
  description: "Each app and module on its own page: invoicing, a business card maker, chat demos, a quote engine, a client portal and more.",
};

/** Larger products that have a full story of their own. */
const PRODUCTS = ["dee-wan-nee", "paitor", "reviq"];

export default function AppsPage() {
  const products = projects.filter((project) => PRODUCTS.includes(project.slug));

  return (
    <>
      <section className="border-b border-line bg-band-blue">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <Eyebrow>Apps and modules</Eyebrow>
          <h1 className="mt-3 max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl">One page per app.</h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-ink">
            {apps.length} apps and modules, each shown screen by screen with the thinking beside it. Every page says
            plainly whether the app is live, a demo or a design.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ul className="mt-14 grid gap-8 md:grid-cols-2">
          {apps.map((app) => (
            <li key={app.slug}>
              <Link
                href={`/apps/${app.slug}/`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line hover:border-primary"
              >
                <div className={`flex h-64 items-start justify-center overflow-hidden px-6 pt-6 sm:h-72 ${app.band}`}>
                  <Shot src={app.cover} alt="" frame={app.coverFrame === "phone" ? "phone" : "plain"} className="w-full shadow-lg" />
                </div>
                <div className="flex flex-1 flex-col border-t border-line p-6 sm:p-7">
                  <p className="text-[15px] font-bold text-primary-ink">{app.kind}</p>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
                    {app.name}
                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-1.5" aria-hidden="true">
                      →
                    </span>
                  </h2>
                  <p className="mt-2 text-lg font-semibold leading-snug">{app.tagline}</p>
                  <p className="mt-2 text-[16px] text-muted">{app.summary}</p>
                  <p className="mt-auto pt-5 text-[15px] font-bold">
                    <span className="rounded-full border border-line bg-surface px-3 py-1">{app.status}</span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <section className="mt-24">
          <Eyebrow>Larger products</Eyebrow>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">Three more, told as full stories.</h2>
          <ul className="mt-8 grid gap-6 lg:grid-cols-3">
            {products.map((project) => (
              <li key={project.slug}>
                <Link href={`/work/${project.slug}/`} className={`group block h-full rounded-2xl border border-line p-7 hover:border-primary ${project.band}`}>
                  <p className="text-[15px] font-bold text-primary-ink">{project.kind}</p>
                  <p className="mt-2 text-3xl font-extrabold tracking-tight">
                    {project.name}
                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-1.5" aria-hidden="true">
                      →
                    </span>
                  </p>
                  <p className="mt-2 text-[16px] text-ink">{project.tagline}</p>
                  <p className="mt-4 text-[15px] font-semibold text-muted">{project.status}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import { Eyebrow } from "@/components/chrome";
import { eras, stack } from "@/content/toolbox";

export const metadata: Metadata = {
  title: "Toolbox",
  description: "The tools along the way, from site builders and Zapier to an AI engineering partner, and the stack used today.",
};

export default function ToolboxPage() {
  return (
    <>
      <section className="bg-night text-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <Eyebrow tone="dark">Toolbox</Eyebrow>
          <h1 className="mt-3 max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            From drag-and-drop to shipping real software.
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed">
            A short history of the tools I have worked with, told in four eras. Each one left a habit that still
            shapes how Studio R7 builds.
          </p>
          <ol className="mt-10 flex flex-wrap gap-2">
            {eras.map((era, index) => (
              <li key={era.id}>
                <a href={`#${era.id}`} className="block rounded-full border border-night-line px-4 py-2 text-[16px] font-semibold text-white hover:bg-night-raised">
                  {index + 1}. {era.title}
                </a>
              </li>
            ))}
            <li>
              <a href="#stack" className="block rounded-full bg-white px-4 py-2 text-[16px] font-bold text-night hover:bg-accent">
                Today&apos;s stack
              </a>
            </li>
          </ol>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <ol className="relative mt-16 space-y-14 border-l-2 border-line pl-7 sm:pl-10">
          {eras.map((era, index) => (
            <li key={era.id} id={era.id} className="relative">
              <span
                className="absolute -left-[2.85rem] top-0 grid size-9 place-items-center rounded-full bg-night text-[15px] font-bold text-white sm:-left-[3.7rem]"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <Eyebrow>{era.label}</Eyebrow>
              <h2 className="mt-1 text-4xl font-extrabold tracking-tight">{era.title}</h2>
              {era.story.map((paragraph) => (
                <p key={paragraph} className="mt-4 max-w-2xl text-lg text-ink">
                  {paragraph}
                </p>
              ))}
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {era.tools.map((tool) => (
                  <li key={tool.name} className="rounded-xl border border-line bg-surface p-4">
                    <p className="font-bold">{tool.name}</p>
                    <p className="text-[16px] text-muted">{tool.role}</p>
                    {tool.note && <p className="mt-1 text-[15px] font-semibold text-primary-ink">{tool.note}</p>}
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-2xl border-l-4 border-accent pl-4 text-xl font-semibold leading-snug">
                {era.lesson}
              </p>
            </li>
          ))}
        </ol>

        <section id="stack" className="mt-24">
          <Eyebrow>Today&apos;s stack</Eyebrow>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">What the products are built with.</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Taken from the package files of the four projects in this portfolio. Nothing is listed that is not in use.
          </p>
          <dl className="mt-10 grid gap-5 sm:grid-cols-2">
            {stack.map((group) => (
              <div key={group.title} className="rounded-2xl border border-line p-6">
                <dt>
                  <span className="text-xl font-bold">{group.title}</span>
                  <span className="block text-[16px] text-muted">{group.note}</span>
                </dt>
                <dd className="mt-4">
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="rounded-full border border-line bg-surface px-3 py-1 text-[15px] font-semibold">
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </>
  );
}

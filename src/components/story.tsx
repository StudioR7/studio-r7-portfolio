import Link from "next/link";
import { Blocks } from "@/components/blocks";
import { ChapterNav } from "@/components/chapter-nav";
import { Eyebrow } from "@/components/chrome";
import { Shot } from "@/components/shot";
import type { Chapter, Frame } from "@/content/types";

export type Story = {
  crumb: { href: string; label: string };
  kind: string;
  name: string;
  localName?: string;
  tagline: string;
  summary: string;
  /** One line under the summary, such as status and period. */
  meta: string;
  url?: { label: string; href: string };
  /** A link to the larger story this one belongs to. */
  parent?: { label: string; href: string };
  cover: string;
  coverFrame: Frame;
  band: string;
  facts: { value: string; label: string }[];
  honest: string;
  chapters: Chapter[];
  stack: string[];
};

type Next = { href: string; label: string; name: string; tagline: string; band: string };

/** The chaptered page used by project stories and app pages. */
export function StoryPage({ story, next }: { story: Story; next: Next }) {
  return (
    <>
      <section className={`border-b border-line ${story.band}`}>
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 lg:pt-16">
          <p className="text-[16px] font-semibold text-muted">
            <Link href={story.crumb.href} className="underline underline-offset-4 hover:text-ink">
              {story.crumb.label}
            </Link>{" "}
            / {story.name}
          </p>
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <div>
              <Eyebrow>{story.kind}</Eyebrow>
              <h1 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl">
                {story.name}
                {story.localName && <span className="ml-3 text-3xl font-semibold text-muted">{story.localName}</span>}
              </h1>
              <p className="mt-4 text-2xl font-semibold leading-snug">{story.tagline}</p>
              <p className="mt-4 text-lg text-ink">{story.summary}</p>
              <p className="mt-5 text-[16px] font-semibold text-muted">
                {story.meta}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                {story.url && (
                  <a
                    href={story.url.href}
                    className="inline-block rounded-full bg-night px-6 py-3 font-bold text-white hover:bg-primary-ink"
                  >
                    Visit {story.url.label}<span aria-hidden="true"> ↗</span>
                  </a>
                )}
                {story.parent && (
                  <Link href={story.parent.href} className="font-bold text-primary-ink underline underline-offset-4">
                    {story.parent.label}
                  </Link>
                )}
              </div>
            </div>
            <Shot src={story.cover} alt={`${story.name}, first screen`} frame={story.coverFrame} eager />
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-line pt-8 lg:grid-cols-4">
            {story.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-4xl font-extrabold tracking-tight">{fact.value}</dt>
                <dd className="mt-1 text-[16px] text-muted">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14 lg:px-6">
        <aside className="lg:pt-16">
          <ChapterNav chapters={story.chapters.map(({ id, title }) => ({ id, title }))} />
        </aside>

        <div className="px-4 sm:px-6 lg:px-0">
          <aside className="mt-10 rounded-xl border border-line bg-band-warm p-5 lg:mt-16" aria-label="Good to know">
            <p className="font-bold">Good to know</p>
            <p className="mt-1 text-[16px] text-ink">{story.honest}</p>
          </aside>

          {story.chapters.map((chapter, chapterIndex) => (
            <section key={chapter.id} id={chapter.id} className="border-b border-line py-16 last:border-0">
              <p className="text-[15px] font-bold uppercase tracking-[0.14em] text-primary-ink">
                Chapter {chapterIndex + 1}
              </p>
              <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">{chapter.title}</h2>
              <p className="mb-12 mt-4 max-w-2xl text-xl leading-relaxed text-ink">{chapter.intro}</p>
              <Blocks blocks={chapter.blocks} />
            </section>
          ))}

          <section className="py-12">
            <h2 className="text-2xl font-bold tracking-tight">Built with</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {story.stack.map((item) => (
                <li key={item} className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-[15px] font-semibold">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <Link
            href={next.href}
            className={`group block rounded-3xl border border-line p-8 sm:p-10 ${next.band}`}
          >
            <p className="text-[15px] font-bold uppercase tracking-[0.14em] text-primary-ink">{next.label}</p>
            <p className="mt-2 text-4xl font-extrabold tracking-tight">
              {next.name}
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1.5" aria-hidden="true">
                →
              </span>
            </p>
            <p className="mt-2 max-w-2xl text-lg text-ink">{next.tagline}</p>
          </Link>
        </div>
      </div>
    </>
  );
}

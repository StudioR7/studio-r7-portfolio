import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Blocks } from "@/components/blocks";
import { ChapterNav } from "@/components/chapter-nav";
import { Eyebrow } from "@/components/chrome";
import { Shot } from "@/components/shot";
import { projects } from "@/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: project.name, description: project.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className={`border-b border-line ${project.band}`}>
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 lg:pt-16">
          <p className="text-[16px] font-semibold text-muted">
            <Link href="/#work" className="underline underline-offset-4 hover:text-ink">
              Work
            </Link>{" "}
            / {project.name}
          </p>
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <div>
              <Eyebrow>{project.kind}</Eyebrow>
              <h1 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl">
                {project.name}
                {project.localName && <span className="ml-3 text-3xl font-semibold text-muted">{project.localName}</span>}
              </h1>
              <p className="mt-4 text-2xl font-semibold leading-snug">{project.tagline}</p>
              <p className="mt-4 text-lg text-ink">{project.summary}</p>
              <p className="mt-5 text-[16px] font-semibold text-muted">
                {project.status} · {project.period}
              </p>
              {project.url && (
                <a
                  href={project.url.href}
                  className="mt-6 inline-block rounded-full bg-night px-6 py-3 font-bold text-white hover:bg-primary-ink"
                >
                  Visit {project.url.label}<span aria-hidden="true"> ↗</span>
                </a>
              )}
            </div>
            <Shot src={project.cover} alt={`${project.name} home page`} frame={project.coverFrame} eager />
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-line pt-8 lg:grid-cols-4">
            {project.facts.map((fact) => (
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
          <ChapterNav chapters={project.chapters.map(({ id, title }) => ({ id, title }))} />
        </aside>

        <div className="px-4 sm:px-6 lg:px-0">
          <aside className="mt-10 rounded-xl border border-line bg-band-warm p-5 lg:mt-16" aria-label="Good to know">
            <p className="font-bold">Good to know</p>
            <p className="mt-1 text-[16px] text-ink">{project.honest}</p>
          </aside>

          {project.chapters.map((chapter, chapterIndex) => (
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
              {project.stack.map((item) => (
                <li key={item} className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-[15px] font-semibold">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <Link
            href={`/work/${next.slug}/`}
            className={`group block rounded-3xl border border-line p-8 sm:p-10 ${next.band}`}
          >
            <p className="text-[15px] font-bold uppercase tracking-[0.14em] text-primary-ink">Next story</p>
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

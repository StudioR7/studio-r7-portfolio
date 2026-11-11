import type { Metadata } from "next";
import { PaperList } from "@/components/blocks";
import { Eyebrow } from "@/components/chrome";
import { projects } from "@/content";
import { papers } from "@/content/papers";

export const metadata: Metadata = {
  title: "Papers",
  description: "Research, architecture, decision records and design documents behind the Studio R7 products.",
};

export default function PapersPage() {
  const kinds = [...new Set(papers.map((paper) => paper.kind))];

  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <Eyebrow>Papers</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-5xl font-extrabold tracking-tight sm:text-6xl">
            The thinking is written down before the code is.
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-ink">
            Every large piece of work starts as a document: what is known, what the options are, what was chosen and
            why. These are {papers.length} of them, with a short summary of each.
          </p>
          <p className="mt-4 max-w-2xl text-[16px] text-muted">
            The full documents stay in their private repositories because some contain internal pricing or contact
            details. Any of them can be shared on request.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {kinds.map((kind) => (
              <li key={kind} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[15px] font-semibold">
                {kind} · {papers.filter((paper) => paper.kind === kind).length}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {projects.map((project) => (
          <section key={project.slug} className="pt-16">
            <h2 className="text-3xl font-extrabold tracking-tight">{project.name}</h2>
            <p className="mt-1 text-muted">{project.kind}</p>
            <PaperList items={papers.filter((paper) => paper.project === project.name)} />
          </section>
        ))}
      </div>
    </>
  );
}

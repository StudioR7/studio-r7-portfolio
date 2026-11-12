import { papers } from "@/content/papers";
import type { Block, Paper } from "@/content/types";
import { ProcessDiagram, SchemaDiagram } from "./diagrams";
import { Shot } from "./shot";

const COLUMNS = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
} as const;

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-16">
      {blocks.map((block, index) => (
        <BlockView key={index} block={block} />
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "text":
      return (
        <div className="max-w-2xl">
          {block.title && <h3 className="text-2xl font-bold tracking-tight">{block.title}</h3>}
          <Paragraphs body={block.body} />
        </div>
      );

    case "shot": {
      // Phones sit beside their text; wide screens get the full width with the text above.
      if (block.frame === "phone") {
        return (
          <figure className="grid items-center gap-8 sm:grid-cols-[272px_1fr]">
            <Shot src={block.image} alt={block.title} frame="phone" />
            <figcaption>
              <Explanation title={block.title} body={block.body} points={block.points} />
            </figcaption>
          </figure>
        );
      }
      return (
        <figure>
          <figcaption className="mb-6 max-w-2xl">
            <Explanation title={block.title} body={block.body} points={block.points} />
          </figcaption>
          <Shot src={block.image} alt={block.title} frame={block.frame} />
        </figure>
      );
    }

    case "flow":
      return (
        <div>
          <h3 className="text-2xl font-bold tracking-tight">{block.title}</h3>
          <p className="mt-3 max-w-2xl text-muted">{block.intro}</p>
          <ol className={`mt-8 grid gap-x-6 gap-y-10 ${block.frame === "phone" ? "grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2"}`}>
            {block.steps.map((step, index) => (
              <li key={step.image}>
                <p className="mb-3 flex items-center gap-2.5 text-[15px] font-semibold text-primary-ink">
                  <span className="grid size-7 place-items-center rounded-full bg-primary-ink text-[14px] text-white">
                    {index + 1}
                  </span>
                  Step {index + 1} of {block.steps.length}
                </p>
                <Shot src={step.image} alt={step.title} frame={block.frame} />
                <h4 className="mt-4 text-lg font-bold leading-snug">{step.title}</h4>
                <p className="mt-1.5 text-[16px] text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      );

    case "gallery":
      return (
        <div>
          {block.title && <h3 className="text-2xl font-bold tracking-tight">{block.title}</h3>}
          {block.intro && <p className="mt-3 max-w-2xl text-muted">{block.intro}</p>}
          <ul className={`grid items-start gap-x-6 gap-y-8 ${COLUMNS[block.columns]} ${block.title || block.intro ? "mt-8" : ""}`}>
            {block.items.map((item) => (
              <li key={item.image}>
                <figure>
                  <Shot src={item.image} alt={item.caption} frame={block.frame} />
                  <figcaption className="mt-3 text-center text-[15px] font-medium text-muted">{item.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      );

    case "process":
      return (
        <div>
          <h3 className="text-2xl font-bold tracking-tight">{block.title}</h3>
          {block.intro && <p className="mt-3 max-w-2xl text-muted">{block.intro}</p>}
          <ProcessDiagram actors={block.actors} steps={block.steps} />
        </div>
      );

    case "schema":
      return (
        <div>
          <h3 className="text-2xl font-bold tracking-tight">{block.title}</h3>
          {block.intro && <p className="mt-3 max-w-2xl text-muted">{block.intro}</p>}
          <SchemaDiagram title={block.title} columns={block.columns} entities={block.entities} links={block.links} />
          {block.note && <p className="mt-3 max-w-2xl text-[15px] text-muted">{block.note}</p>}
        </div>
      );

    case "list":
      return (
        <div>
          <h3 className="text-2xl font-bold tracking-tight">{block.title}</h3>
          {block.intro && <p className="mt-3 max-w-2xl text-muted">{block.intro}</p>}
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {block.items.map((item) => (
              <div key={item.title} className="rounded-xl border border-line bg-surface p-5">
                <dt className="font-bold">{item.title}</dt>
                <dd className="mt-1.5 text-[16px] text-muted">{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      );

    case "papers":
      return (
        <div>
          <h3 className="text-2xl font-bold tracking-tight">{block.title}</h3>
          <p className="mt-3 max-w-2xl text-muted">{block.intro}</p>
          <PaperList items={papers.filter((paper) => paper.project === block.project)} />
        </div>
      );
  }
}

function Explanation({ title, body, points }: { title: string; body: string[]; points?: string[] }) {
  return (
    <>
      <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
      <Paragraphs body={body} />
      {points && (
        <ul className="mt-4 space-y-1.5">
          {points.map((point) => (
            <li key={point} className="flex gap-2.5 text-[16px] font-medium">
              <span className="mt-[0.6em] size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function Paragraphs({ body }: { body: string[] }) {
  return (
    <>
      {body.map((paragraph) => (
        <p key={paragraph} className="mt-3 text-muted">
          {paragraph}
        </p>
      ))}
    </>
  );
}

export function PaperList({ items, showProject = false }: { items: Paper[]; showProject?: boolean }) {
  return (
    <ul className="mt-6 divide-y divide-line border-y border-line">
      {items.map((paper) => (
        <li key={`${paper.project}-${paper.title}`} className="grid gap-x-8 gap-y-1 py-5 sm:grid-cols-[12rem_1fr]">
          <p className="text-[15px] font-semibold text-primary-ink">
            {paper.kind}
            <span className="block font-medium text-muted">{paper.length}</span>
          </p>
          <div>
            <h4 className="text-lg font-bold leading-snug">
              {paper.title}
              {showProject && <span className="font-medium text-muted"> · {paper.project}</span>}
            </h4>
            <p className="mt-1 text-[16px] text-muted">{paper.summary}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

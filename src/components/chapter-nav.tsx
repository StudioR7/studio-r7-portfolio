"use client";

import { useEffect, useState } from "react";

type Props = { chapters: { id: string; title: string }[] };

/**
 * The progress rail of a case study. It follows the reader: the current chapter
 * is highlighted and the bar fills as they move through the story.
 */
export function ChapterNav({ chapters }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((el): el is HTMLElement => el !== null);

    const update = () => {
      const line = window.innerHeight * 0.35;
      let current = 0;
      sections.forEach((section, index) => {
        if (section.getBoundingClientRect().top <= line) current = index;
      });
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [chapters]);

  const percent = ((active + 1) / chapters.length) * 100;

  return (
    <nav aria-label="Chapters" className="sticky top-[4.25rem] z-20 border-b border-line bg-white/95 backdrop-blur lg:top-24 lg:border-0 lg:bg-transparent lg:backdrop-blur-none">
      {/* Phone and tablet: one scrolling row under the header. */}
      <div className="lg:hidden">
        <ol className="flex gap-1 overflow-x-auto px-4 py-2">
          {chapters.map((chapter, index) => (
            <li key={chapter.id} className="shrink-0">
              <a
                href={`#${chapter.id}`}
                aria-current={index === active ? "step" : undefined}
                className={`block rounded-full px-3.5 py-2 text-[15px] font-semibold ${
                  index === active ? "bg-night text-white" : "text-muted"
                }`}
              >
                {index + 1}. {chapter.title}
              </a>
            </li>
          ))}
        </ol>
        <div className="h-1 bg-line" aria-hidden="true">
          <div className="h-1 bg-primary transition-[width] duration-300" style={{ width: `${percent}%` }} />
        </div>
      </div>

      {/* Desktop: a numbered rail beside the story. */}
      <div className="hidden lg:block">
        <p className="text-[15px] font-semibold text-muted">
          Chapter {active + 1} of {chapters.length}
        </p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line" aria-hidden="true">
          <div className="h-full rounded-full bg-primary transition-[width] duration-300" style={{ width: `${percent}%` }} />
        </div>
        <ol className="mt-5 space-y-1">
          {chapters.map((chapter, index) => {
            const state = index === active ? "current" : index < active ? "done" : "ahead";
            return (
              <li key={chapter.id}>
                <a
                  href={`#${chapter.id}`}
                  aria-current={state === "current" ? "step" : undefined}
                  className={`flex items-center gap-3 rounded-lg px-2 py-2 text-[16px] ${
                    state === "current" ? "bg-band-blue font-semibold text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  <span
                    className={`grid size-7 shrink-0 place-items-center rounded-full text-[14px] font-semibold ${
                      state === "current"
                        ? "bg-primary-ink text-white"
                        : state === "done"
                          ? "bg-night text-white"
                          : "border border-line bg-white text-muted"
                    }`}
                  >
                    {index + 1}
                  </span>
                  {chapter.title}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

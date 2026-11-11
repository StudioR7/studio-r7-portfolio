import { image } from "@/content";
import type { Frame } from "@/content/types";

type Props = {
  src: string;
  alt: string;
  frame: Frame;
  /** Load straight away (first screen of a page). */
  eager?: boolean;
  className?: string;
};

/**
 * A screenshot in a device frame. Screens taller than the frame scroll inside
 * it, so a full page can be read without leaving the story.
 */
export function Shot({ src, alt, frame, eager, className = "" }: Props) {
  const img = image(src);
  const ratio = img.height / img.width;
  const picture = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={img.src}
      width={img.width}
      height={img.height}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className="block h-auto w-full"
    />
  );

  if (frame === "phone") {
    const scrolls = ratio > 2.3;
    return (
      <div className={`mx-auto w-full max-w-[272px] ${className}`}>
        <div className="rounded-[2.2rem] border-[7px] border-night bg-night shadow-[0_18px_40px_-18px_rgba(11,18,32,0.55)]">
          <div
            className={`overflow-hidden rounded-[1.7rem] bg-white ${scrolls ? "frame-scroll aspect-[390/800]" : ""}`}
            tabIndex={scrolls ? 0 : undefined}
            role={scrolls ? "region" : undefined}
            aria-label={scrolls ? `${alt} (scrolls)` : undefined}
          >
            {picture}
          </div>
        </div>
        {scrolls && <ScrollHint />}
      </div>
    );
  }

  if (frame === "browser") {
    const scrolls = ratio > 0.8;
    return (
      <div className={className}>
        <div className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_22px_48px_-26px_rgba(11,18,32,0.45)]">
          <div className="flex items-center gap-1.5 border-b border-line bg-surface px-3.5 py-2.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-[#c9d3e3]" />
            <span className="size-2.5 rounded-full bg-[#c9d3e3]" />
            <span className="size-2.5 rounded-full bg-[#c9d3e3]" />
          </div>
          <div
            className={scrolls ? "frame-scroll aspect-[16/10]" : ""}
            tabIndex={scrolls ? 0 : undefined}
            role={scrolls ? "region" : undefined}
            aria-label={scrolls ? `${alt} (scrolls)` : undefined}
          >
            {picture}
          </div>
        </div>
        {scrolls && <ScrollHint />}
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-xl border border-line bg-white ${className}`}>{picture}</div>
  );
}

function ScrollHint() {
  return (
    <p className="mt-2 text-center text-[15px] font-medium text-muted">
      <span aria-hidden="true">↕ </span>Scroll inside the frame
    </p>
  );
}

export type Frame = "browser" | "phone" | "plain";

export type Block =
  | { type: "text"; title?: string; body: string[] }
  | {
      /** One screen with its written explanation beside it. */
      type: "shot";
      image: string;
      frame: Frame;
      title: string;
      body: string[];
      points?: string[];
    }
  | {
      /** A numbered sequence of screens: one flow, step by step. */
      type: "flow";
      title: string;
      intro: string;
      frame: Frame;
      steps: { image: string; title: string; body: string }[];
    }
  | {
      type: "gallery";
      title?: string;
      intro?: string;
      frame: Frame;
      columns: 2 | 3 | 4;
      items: { image: string; caption: string }[];
    }
  | { type: "list"; title: string; intro?: string; items: { title: string; body: string }[] }
  | { type: "papers"; title: string; intro: string; project: string };

export type Chapter = {
  id: string;
  title: string;
  intro: string;
  blocks: Block[];
};

export type Project = {
  slug: string;
  name: string;
  localName?: string;
  kind: string;
  tagline: string;
  summary: string;
  status: string;
  period: string;
  url?: { label: string; href: string };
  cover: string;
  coverFrame: Frame;
  /** Tailwind classes for the project's hero band. */
  band: string;
  disciplines: string[];
  stack: string[];
  facts: { value: string; label: string }[];
  honest: string;
  chapters: Chapter[];
};

export type Paper = {
  project: string;
  title: string;
  kind: "Research" | "Architecture" | "Decision record" | "Design" | "Plan" | "Security" | "Legal draft";
  length: string;
  summary: string;
};

import { deeWanNee } from "./dee-wan-nee";
import { paitor } from "./paitor";
import { reviq } from "./reviq";
import { studioR7 } from "./studio-r7";
import sizes from "./image-sizes.json";

export const projects = [studioR7, deeWanNee, paitor, reviq];

export const site = {
  name: "Studio R7",
  title: "Studio R7 · Portfolio",
  description:
    "Apps, websites, flows, brands and research from Studio R7, a tech and automation studio in Bangkok.",
  url: "https://studior7.com/en",
  repo: "https://github.com/StudioR7/studio-r7-portfolio",
};

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Resolves an image key such as "paitor/live-home" to its file and size. */
export function image(key: string) {
  const size = (sizes as Record<string, { width: number; height: number }>)[key];
  if (!size) throw new Error(`Unknown image: ${key}`);
  return { src: `${BASE}/work/${key}.webp`, ...size };
}

export function asset(path: string) {
  return `${BASE}${path}`;
}

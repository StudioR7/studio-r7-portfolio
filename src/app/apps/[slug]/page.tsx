import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StoryPage } from "@/components/story";
import { apps } from "@/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = apps.find((item) => item.slug === slug);
  return app ? { title: app.name, description: app.summary } : {};
}

export default async function AppPage({ params }: Props) {
  const { slug } = await params;
  const index = apps.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();
  const app = apps[index];
  const next = apps[(index + 1) % apps.length];

  return (
    <StoryPage
      story={{ ...app, crumb: { href: "/apps/", label: "Apps" }, meta: app.status }}
      next={{ href: `/apps/${next.slug}/`, label: "Next app", name: next.name, tagline: next.tagline, band: next.band }}
    />
  );
}

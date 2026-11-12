import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StoryPage } from "@/components/story";
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
    <StoryPage
      story={{
        ...project,
        crumb: { href: "/#work", label: "Work" },
        meta: `${project.status} · ${project.period}`,
      }}
      next={{ href: `/work/${next.slug}/`, label: "Next story", name: next.name, tagline: next.tagline, band: next.band }}
    />
  );
}

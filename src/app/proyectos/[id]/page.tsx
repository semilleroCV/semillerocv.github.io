// src/app/proyectos/[id]/page.tsx
import { notFound } from "next/navigation";
import ProjectPage from "@/components/project-page";
import { projects } from "@/components/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return notFound();
  }
  return <ProjectPage project={project} />;
}

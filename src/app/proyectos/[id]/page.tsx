// src/app/proyectos/[id]/page.tsx
import { notFound } from "next/navigation";
import ProjectPage from "@/components/project-page";
import { projects } from "@/components/projects";

// ① Le dices a Next qué ids pre-renderizar
export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

// ② Idéntica firma asíncrona con params: Promise<{id:string}>
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

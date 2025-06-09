// src/app/proyectos/[id]/page.tsx
import { notFound } from "next/navigation";
import ProjectPage from "@/components/project-page";
import { projects } from "@/components/projects";

export default async function ProjectRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // 1️⃣ Esperamos a que Next.js resuelva los params
  const { id } = await params;

  // 2️⃣ Buscamos el proyecto
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return notFound();
  }

  // 3️⃣ Devolvemos la UI
  return <ProjectPage project={project} />;
}

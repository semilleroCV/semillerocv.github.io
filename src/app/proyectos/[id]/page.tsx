// src/app/proyectos/[id]/page.tsx
import { notFound } from "next/navigation";
import ProjectPage from "@/components/project-page";
import { projects } from "@/components/projects";

export default async function ProjectRoute({
  params,
}: {
  // Next.js 15 ya siempre te pasa params como Promise
  params: Promise<{ id: string }>;
}) {
  // 1️⃣ await params para obtener el id
  const { id } = await params;

  // 2️⃣ buscas tu proyecto
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return notFound();
  }

  // 3️⃣ devuelves tu componente
  return <ProjectPage project={project} />;
}

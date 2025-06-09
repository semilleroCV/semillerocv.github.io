// src/app/proyectos/[id]/page.tsx
import { notFound } from "next/navigation";
import ProjectPage from "@/components/project-page";
import { projects } from "@/components/projects";

// ① Generamos estáticamente todas las rutas /proyectos/<id>
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// ② Página para cada proyecto
export default function ProjectRoute({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) {
    return notFound();
  }
  return <ProjectPage project={project} />;
}

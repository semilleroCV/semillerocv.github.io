// src/app/projects/[id]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import ProjectPage from "@/components/project-page";
import { projects } from "@/components/projects";

interface Props {
  params: { id: string };
}

export default function ProjectRoute({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return notFound();
  return <ProjectPage project={project} />;
}

"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { Navbar, Footer, DiscordBubble } from "@/components";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

// Updated Background Component using the new gradient
const Background = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-black to-teal-900"></div>
    <div className="absolute top-0 left-0 w-96 h-96 bg-teal-600/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-[float_8s_ease-in-out_infinite]"></div>
    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-[float_8s_ease-in-out_infinite_2s]"></div>
    <div className="absolute bottom-0 left-20 w-96 h-96 bg-green-600/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-[float_8s_ease-in-out_infinite_4s]"></div>
  </div>
);

const equipos = [
  {
    id: "Equipo 1",
    integrantes: ["Miguel Ayala", "Daniel Naranjo", "Miguel Jaimes"],
    tema: "Finetuning de CLIP con descripciones de imágenes para tarea de clasificación",
    grupo: "NLP",
  },
  {
    id: "Equipo 2",
    integrantes: ["Roger Hernandez", "Alejandro Moreno", "Christian Orduz"],
    tema: "Análisis de sentimientos y toxicidad en las redes sociales de la comunidad universitaria",
    grupo: "NLP",
  },
  {
    id: "Equipo 3",
    integrantes: ["Juan Jaimes", "Santiago Camargo", "Cristian Tristancho"],
    tema: "Segment local object in 3D with Neural Radiance Fields",
    grupo: "Segmentation",
  },
  {
    id: "Equipo 4",
    integrantes: ["Johan Sebastian", "Nicolas Rivera", "Mateo Delgado"],
    tema: "Detección y comparación de áreas verdes urbanas en ciudades colombianas mediante segmentación semántica de imágenes satelitales",
    grupo: "Segmentation",
  },
  {
    id: "Equipo 5",
    integrantes: [
      "Maria L. Rodriguez",
      "Juan F. Serrano",
      "Juan Jose Ardila",
    ],
    tema: "Detección de fugas de gas con imágenes infrarrojas",
    grupo: "Thermal",
  },
  {
    id: "Equipo 6",
    integrantes: ["Jeison Guarguati", "Diego Rodriguez", "Jose Quintero"],
    tema: "Detección de minas antipersona en el Valle del Cauca",
    grupo: "Thermal",
  },
  {
    id: "Equipo 7",
    integrantes: ["Marian Becerra", "Andres Conde", "Jair Marquilla"],
    tema: "Generación de dataset NLoS usando técnicas de renderizado transitorio",
    grupo: "NLOS",
  },
  {
    id: "Equipo 8",
    integrantes: [
      "Juan Arias Sarabia",
      "Samuel Benilla",
      "Willianngel Ollevedo",
    ],
    tema: "Análisis, georreferenciación y visualización de nubes de puntos LiDAR mediante técnicas de SLAM",
    grupo: "NLOS",
  },
  {
    id: "Equipo 9",
    integrantes: ["Oscar Carreño", "David Anaya", "Juan Vanegas"],
    tema: "Algoritmo no supervisado para la estimación de profundidad en videos de endoscopia",
    grupo: "Depth",
  },
  {
    id: "Equipo 10",
    integrantes: ["Oscar Ortega", "Samuel Traslaviña", "Jeferson Acevedo"],
    tema: "Sharpening de imagen utilizando información de depth maps",
    grupo: "Depth",
  },
];

interface SidebarNavigationProps {
  activeSection: string;
}

const SidebarNavigation = ({ activeSection }: SidebarNavigationProps) => (
  <nav className="bg-black/50 p-4 rounded-md shadow-lg">
    <ul className="space-y-4">
      <li>
        <a
          href="#introduccion"
          className={`transition-colors hover:text-teal-400 ${
            activeSection === "introduccion"
              ? "text-teal-400 font-bold"
              : "text-white"
          }`}
        >
          Tabla de Proyectos
        </a>
      </li>
      <li>
        <a
          href="#diapositivas"
          className={`transition-colors hover:text-teal-400 ${
            activeSection === "actividades"
              ? "text-teal-400 font-bold"
              : "text-white"
          }`}
        >
          Diapositivas de proyectos
        </a>
      </li>
    </ul>
  </nav>
);

export default function Sesion3Page() {
  // List of section IDs for observation
  const sectionIds = useMemo(
    () => ["introduccion", "lecturas", "contenido", "actividades"],
    []
  );
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  // Motion variant for content sections
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Variant for the hero title
  const titleVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Variant for the sidebar
  const sidebarVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Background />

      {/* Main content container */}
      <main className="relative z-10 pt-20 pb-12 max-w-7xl mx-auto px-4 sm:px-8 lg:px-32 xl:px-40 md:pr-72">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/image/posters/14.png"
              alt="Depth Active"
              width={400}
              height={400}
              className="rounded-lg shadow-xl w-full max-w-sm h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={titleVariant}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Typography
                variant="h1"
                className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Asignación de proyectos
              </Typography>
              <br></br>
              <p className="mt-2 mr-8 text-lg md:text-xl text-justify">
                En esta sesión especial del Semillero, hemos seleccionado
                proyectos finales innovadores que pondrán a prueba tus
                habilidades y ampliarán tus conocimientos en el área de visión
                por computadora.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1 – Introducción y Objetivos */}
        <motion.section
          id="introduccion"
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Typography
            variant="h2"
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Tabla de proyectos
          </Typography>
          <p className="text-lg leading-relaxed text-justify">
            En la siguiente tabla podrás consultar los miembros de cada grupo y
            los proyectos que les han sido asignados.
          </p>
          <div className="overflow-x-auto bg-black/40 rounded-2xl shadow-lg mt-4">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gradient-to-r from-teal-600 to-emerald-600">
                <tr>
                  {["Equipo", "Integrantes", "Tema", "Área"].map((h) => (
                    <th
                      key={h}
                      className="sticky top-0 px-6 py-3 text-left text-sm font-semibold uppercase text-white"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {equipos.map(({ id, integrantes, tema, grupo }, i) => (
                  <tr
                    key={id}
                    className={`transition-colors ${
                      i % 2 === 0 ? "bg-black/20" : "bg-black/10"
                    } hover:bg-teal-800/40`}
                  >
                    <td className="px-2 py-4 font-medium text-teal-200">
                      {id}
                    </td>
                    <td className="px-2 py-4 text-sm text-gray-200">
                      <ul className="list-disc list-inside space-y-1">
                        {integrantes.map((n) => (
                          <li key={n}>{n}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-2 py-4 text-sm text-gray-200">{tema}</td>
                    <td className="px-4 py-4 text-sm text-gray-200">{grupo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="diapositivas"
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentVariants}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        >
          <div className="mb-16">
            <Typography
              variant="h3"
              className="text-2xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Presentación en PDF
            </Typography>
            <div className="w-full h-[600px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-teal-500/20 transition-shadow">
              <iframe
                src="/slides/2025 SemilleroCV_Session7_Projects.pdf"
                width="100%"
                height="100%"
                className="border-none"
                title="Presentación PDF"
              />
            </div>
            <p className="mt-4 text-sm text-gray-400 text-center">
              Puedes navegar por la presentación usando los controles del visor.
            </p>
          </div>
        </motion.section>
      </main>

      {/* Fixed Sidebar on Desktop, hidden on mobile */}
      <motion.aside
        className="hidden md:block fixed top-24 right-16"
        initial="hidden"
        animate="visible"
        variants={sidebarVariant}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <SidebarNavigation activeSection={activeSection} />
      </motion.aside>
      <DiscordBubble />
    </div>
  );
}

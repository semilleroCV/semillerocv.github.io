"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components";
import { Typography } from "@material-tailwind/react";

// Updated Background Component using the new gradient
const Background = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-black to-teal-900"></div>
    <div className="absolute top-0 left-0 w-96 h-96 bg-teal-600/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-[float_8s_ease-in-out_infinite]"></div>
    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-[float_8s_ease-in-out_infinite_2s]"></div>
    <div className="absolute bottom-0 left-20 w-96 h-96 bg-green-600/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-[float_8s_ease-in-out_infinite_4s]"></div>
  </div>
);

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
            activeSection === "introduccion" ? "text-teal-400 font-bold" : "text-white"
          }`}
        >
          Introducción y Objetivos
        </a>
      </li>
      <li>
        <a
          href="#lecturas"
          className={`transition-colors hover:text-teal-400 ${
            activeSection === "lecturas" ? "text-teal-400 font-bold" : "text-white"
          }`}
        >
          Recursos Previos
        </a>
      </li>
      <li>
        <a
          href="#contenido"
          className={`transition-colors hover:text-teal-400 ${
            activeSection === "contenido" ? "text-teal-400 font-bold" : "text-white"
          }`}
        >
          Desarrollo de la Sesión
        </a>
      </li>
      <li>
        <a
          href="#actividades"
          className={`transition-colors hover:text-teal-400 ${
            activeSection === "actividades" ? "text-teal-400 font-bold" : "text-white"
          }`}
        >
          Actividades Posteriores
        </a>
      </li>
    </ul>
  </nav>
);

export default function Sesion1Page() {
  // List of section IDs for observation
  const sectionIds = ["introduccion", "lecturas", "contenido", "actividades"];
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
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Background />

      {/* Main content container with extra top padding and large right margin on md+ */}
      <main className="relative z-10 pt-20 pb-12 max-w-7xl mx-auto px-4 sm:px-8 lg:px-32 xl:px-40 mr-0 md:mr-48">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/image/posters/4.png"
              alt="Pilot - Introducción al Semillero"
              width={400}
              height={400}
              className="rounded-lg shadow-xl w-full max-w-sm h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <Typography
              variant="h1"
              className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent"
            >
              Pilot: Introducción al Semillero
            </Typography>
            <p className="mt-4 text-lg md:text-xl">
              Bienvenido a la primera sesión del semillero. Aquí sentamos las
              bases para explorar el fascinante mundo de la visión por computadora y
              definir los objetivos que nos acompañarán en este emocionante camino.
            </p>
          </div>
        </section>

        {/* Section 1 – Introducción y Objetivos */}
        <section id="introduccion" className="mb-12">
          <Typography
            variant="h2"
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent"
          >
            Introducción y Objetivos
          </Typography>
          <p className="text-lg leading-relaxed">
            En esta sesión introductoria, presentamos el contexto y los objetivos del semillero.
            Exploraremos la historia, la importancia y las aplicaciones actuales de la visión por
            computadora, sentando las bases para profundizar en conceptos más avanzados.
          </p>
        </section>

        {/* Section 2 – Recursos y Lecturas Previas */}
        <section id="lecturas" className="mb-12 bg-gray-900 bg-opacity-50 p-6 rounded-lg">
          <Typography
            variant="h2"
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent"
          >
            Recursos y Lecturas Previas
          </Typography>
          <p className="text-lg leading-relaxed mb-4">
            Antes de asistir a la sesión, te recomendamos revisar los siguientes recursos para
            familiarizarte con los conceptos básicos:
          </p>
          <ul className="list-disc list-inside text-lg mb-4">
            <li>"Fundamentos de la Visión por Computadora"</li>
            <li>"Introducción a la Inteligencia Artificial aplicada a CV"</li>
            <li>"Conceptos Clave en Procesamiento Digital de Imágenes"</li>
          </ul>
          <a
            href="/pdfs/sesion1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-teal-700 hover:bg-teal-600 rounded-full text-white font-semibold"
          >
            Descargar PDF
          </a>
        </section>

        {/* Section 3 – Desarrollo de la Sesión */}
        <section id="contenido" className="mb-12">
          <Typography
            variant="h2"
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent"
          >
            Desarrollo de la Sesión
          </Typography>
          <p className="text-lg leading-relaxed mb-4">
            Durante esta sesión, combinamos teoría y práctica. A través de presentaciones y
            demostraciones en vivo, abordamos temas como la adquisición y procesamiento de
            imágenes, fundamentos de Deep Learning y técnicas de análisis visual. Todo se
            desarrolla de manera dinámica y participativa.
          </p>
          <p className="text-lg leading-relaxed">
            Fomentamos la interacción y el debate, permitiéndote experimentar con ejemplos
            reales y sentar las bases para proyectos futuros.
          </p>
        </section>

        {/* Section 4 – Actividades Posteriores */}
        <section id="actividades" className="mb-12 bg-gray-900 bg-opacity-50 p-6 rounded-lg">
          <Typography
            variant="h2"
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent"
          >
            Actividades y Tareas Posteriores
          </Typography>
          <p className="text-lg leading-relaxed mb-4">
            Al concluir la sesión, se te asignarán actividades prácticas para consolidar los
            conocimientos adquiridos. Estas tareas te permitirán experimentar de manera
            autónoma y preparar el terreno para los siguientes módulos.
          </p>
          <p className="text-lg leading-relaxed">
            Además, promoveremos el intercambio de ideas en grupo, permitiendo la discusión y
            resolución de dudas en un ambiente colaborativo.
          </p>
        </section>

        {/* Video Section */}
        <section className="mb-12">
          <Typography
            variant="h2"
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent"
          >
            Video Complementario
          </Typography>
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video Complementario"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </main>

      {/* Fixed Sidebar on Desktop with extra top/right margin, hidden on mobile */}
      <aside className="hidden md:block fixed top-24 right-32">
        <SidebarNavigation activeSection={activeSection} />
      </aside>
    </div>
  );
}

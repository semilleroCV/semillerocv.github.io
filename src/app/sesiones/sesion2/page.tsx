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
          Introducción y Objetivos
        </a>
      </li>
      <li>
        <a
          href="#lecturas"
          className={`transition-colors hover:text-teal-400 ${
            activeSection === "lecturas"
              ? "text-teal-400 font-bold"
              : "text-white"
          }`}
        >
          Recursos y Lecturas Previas
        </a>
      </li>
      <li>
        <a
          href="#contenido"
          className={`transition-colors hover:text-teal-400 ${
            activeSection === "contenido"
              ? "text-teal-400 font-bold"
              : "text-white"
          }`}
        >
          Desarrollo de la Sesión
        </a>
      </li>
      <li>
        <a
          href="#actividades"
          className={`transition-colors hover:text-teal-400 ${
            activeSection === "actividades"
              ? "text-teal-400 font-bold"
              : "text-white"
          }`}
        >
          Actividades y Tareas Posteriores
        </a>
      </li>
      <li>
        <a
          href="#sesion"
          className={`transition-colors hover:text-teal-400 ${
            activeSection === "introduccion"
              ? "text-teal-400 font-bold"
              : "text-white"
          }`}
        >
          Contenido de la Sesión
        </a>
      </li>
    </ul>
  </nav>
);

export default function Sesion2Page() {
  // List of section IDs for observation
  const sectionIds = useMemo(
    () => ["introduccion", "lecturas", "contenido", "actividades", "sesion"],
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
              src="/image/posters/6.png"
              alt="De Fotones a Píxeles"
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
                className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                De Fotones a Píxeles
              </Typography>

              <p className="mt-2 text-lg md:text-xl text-justify">
                En esta sesión, exploramos la transición desde la luz hasta la
                imagen digital. Nos sumergiremos en los principios fundamentales
                de la formación de imágenes, desde los conceptos ópticos hasta
                el procesamiento digital, estableciendo las bases esenciales
                para comprender cómo las cámaras capturan y procesan la luz.
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
            Introducción y Objetivos
          </Typography>
          <p className="text-lg leading-relaxed text-justify">
            El objetivo de esta sesión es comprender los principios físicos y
            matemáticos que permiten la captura de imágenes. Exploraremos la
            relación entre la óptica, los sensores y los algoritmos que
            convierten la luz en datos procesables. Esta sesión servirá como
            base para entender técnicas avanzadas de análisis y manipulación de
            imágenes en futuras sesiones.
          </p>
        </motion.section>

        {/* Section 2 – Recursos y Lecturas Previas */}
        <motion.section
          id="lecturas"
          className="mb-12 bg-gray-900 bg-opacity-50 p-6 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentVariants}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Typography
            variant="h2"
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Recursos y Lecturas Previas
          </Typography>
          <p className="text-lg leading-relaxed mb-4 text-justify">
            Antes de asistir a la sesión, te recomendamos revisar los siguientes
            recursos para familiarizarte con los conceptos básicos:
          </p>
          <ul className="list-disc list-inside text-lg mb-4">
            <li>
              <a
                href="https://www.youtube.com/watch?v=O0PawPSdk28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                TED-EdLight waves, visible and invisible
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=ZWdT-6Ld71Q"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                Basics Explained, H3VtuxDigital vs Analog. What&apos;s the
                Difference? Why Does it Matter...
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=OGqAM2Mykng"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                TED-EdCamera or eye: Which sees better? - Michael Mauser
              </a>
            </li>
            <li>
              <a
                href="https://www.cambridgeincolour.com/tutorials/camera-sensors.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                Understanding digital camera sensors
              </a>
            </li>
            <li>
              <a
                href="https://www.cse.iitb.ac.in/~ajitvr/CS663_Fall2016/demosaicing.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                Color image Demosaicing
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=hsXo4gD7iWI&ab_channel=GeorgeEastmanMuseum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                How to Turn a Room into a Camera Obscura
              </a>
            </li>
            <li>
              <a
                href="https://www.essentialvermeer.com/camera_obscura/co_one.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                Vermeer and the Camera Obscura: Part I
              </a>
            </li>
          </ul>
        </motion.section>

        {/* Section 3 – Desarrollo de la Sesión */}
        <motion.section
          id="contenido"
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentVariants}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <Typography
            variant="h2"
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Desarrollo de la Sesión
          </Typography>
          <p className="text-lg leading-relaxed mb-4">
            En esta sesión, combinamos teoría y práctica para explorar los
            siguientes temas:
          </p>
          <ul className="list-disc list-inside text-lg mb-4">
            <li>
              <strong>Formación de imágenes:</strong> Explicación del concepto
              de la cámara oscura, la propagación de la luz y la relación entre
              el campo de visión (FOV), el ángulo de visión (AOV) y la
              profundidad de campo (DoF).
            </li>
            <li>
              <strong>El triángulo de la exposición:</strong> Análisis de la
              velocidad de obturación (shutter speed), la apertura del diafragma
              y la sensibilidad ISO.
            </li>
            <li>
              <strong>Imágenes digitales:</strong> Transformación de un dominio
              continuo a uno digital, profundidad de bits y tipos de imágenes
              (binarias, escala de grises, color, espectrales, video, etc.).
            </li>
            <li>
              <strong>Sensores ópticos:</strong> Anatomía de un sensor,
              diferencias entre CMOS y CCD, balance de blancos, demosaicking y
              ruido en la imagen.
            </li>
            <li>
              <strong>Pipeline de procesamiento de imágenes:</strong> Etapas del
              procesamiento desde la captura hasta la imagen final.
            </li>
            <li>
              <strong>Transformaciones de imágenes:</strong> Corrección de
              gamma, ecualización de histograma, filtrado lineal y convolución
              2D.
            </li>
          </ul>
          <p className="text-lg leading-relaxed">
            La sesión será participativa e incluirá demostraciones prácticas
            para reforzar los conceptos teóricos.
          </p>
        </motion.section>

        {/* Section 4 – Actividades y Tareas Posteriores */}
        <motion.section
          id="actividades"
          className="mb-12 bg-gray-900 bg-opacity-50 p-6 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentVariants}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <Typography
            variant="h2"
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Actividades y Tareas Posteriores
          </Typography>
          <p className="text-lg leading-relaxed mb-4">
            Al finalizar la sesión, se asignarán ejercicios prácticos para
            consolidar los conocimientos adquiridos. Estas actividades
            incluirán:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>Experimentación con una cámara oscura casera.</li>
            <li>
              Implementación básica de corrección de gamma y ecualización de
              histograma.
            </li>
          </ul>
        </motion.section>
        <Typography
          variant="h2"
          className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-teal-200 to-teal-600 bg-clip-text text-transparent"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Contenido de la Sesión
        </Typography>

        <motion.section
          id="sesion"
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
                src="/slides/2025_SemilleroCV_Session2_De_Fotones_a_Pixeles.pdf"
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

          <Typography
            variant="h3"
            className="text-2xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Video de la sesión
          </Typography>

          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-teal-500/20 transition-shadow">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0JI0AzxlP2U?si=iQ2k-CgUhpcbZiN7"
              title="YouTube video player"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none" />
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

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
              src="/image/posters/15.png"
              alt="Segmentacion"
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
                Segmentación de Imágenes
              </Typography>
              <br></br>
              <p className="mt-2 mr-8 text-lg md:text-xl text-justify">
                En esta sesión, exploraremos los fundamentos y técnicas
                avanzadas de segmentación de imágenes, una herramienta
                fundamental en visión artificial que permite clasificar píxeles
                en regiones destacadas dentro de una escena. Entenderemos cómo
                diferentes técnicas, desde métodos tradicionales hasta avanzados
                basados en aprendizaje profundo, pueden utilizarse para
                interpretar el contenido visual de manera precisa y eficaz.
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
            El objetivo principal de esta sesión es proporcionar una comprensión
            integral sobre qué es la segmentación, cómo funciona, sus
            aplicaciones y las diversas técnicas que permiten identificar
            regiones significativas en imágenes digitales, destacando la
            importancia del contexto en la clasificación precisa de píxeles.
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
          <p className="text-lg leading-relaxed mb-4">
            Para aprovechar al máximo esta sesión, te recomendamos revisar los
            siguientes recursos:
          </p>
          <ul className="list-disc list-inside text-lg mb-4">
            <li>
              <a
                href="http://www.scholarpedia.org/article/Gestalt_principles"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                Principios de la Psicología Gestalt aplicados a percepción
                visual.
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=yR7k19YBqiw&pp=ygUMc2VnbWVudGF0aW9u"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                Introducción básica a algoritmos de clustering.
              </a>
            </li>
            <li>
              <a
                href="https://cs231n.stanford.edu/slides/2022/lecture_9_jiajun.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                Técnicas básicas de aprendizaje profundo para visión artificial.
              </a>
            </li>
          </ul>
        </motion.section>

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
            De acuerdo con la metodología Hands-On, esta sesión combinará la
            exploración de la teoría de mano con su aplicación práctica:
          </p>
          <ul className="list-disc list-inside text-lg mb-4">
            <li>
              Comenzaremos definiendo la segmentación como la clasificación de
              píxeles en regiones coherentes, aplicando los principios Gestalt
              como proximidad, similaridad y simetría.
            </li>
            <li>
              Luego exploraremos diversas aplicaciones de la segmentación en
              áreas como la visión robótica, conducción autónoma y análisis
              médico, enfatizando la importancia del contexto visual en
              clasificaciones precisas.
            </li>
            <li>
              A continuación, abordaremos técnicas clásicas de segmentación como
              umbralización, clustering, mean-shift, SLIC y segmentación basada
              en grafos.
            </li>
            <li>
              Posteriormente, profundizaremos en la integración de métodos
              avanzados mediante redes neuronales convolucionales, diferenciando
              claramente entre segmentación semántica y segmentación de
              materiales.
            </li>
            <li>
              Finalmente, analizaremos técnicas avanzadas específicas para la
              segmentación de materiales, incluyendo conceptos como la BRDF,
              reflexión especular y difusa, polarización, análisis espectral y
              técnicas de desmezclado espectral lineal y no lineal.
            </li>
          </ul>
          <p className="text-lg leading-relaxed">
            A lo largo de la sesión, se incluirán actividades prácticas según
            corresponda.
          </p>
        </motion.section>

        {/* Video Section */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentVariants}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        >
          <Typography
            variant="h2"
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Video Complementario
          </Typography>
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
              src="https://www.youtube.com/embed/onWJQY5oFhs?si=4JRATXtViVwbiOKv"
              title="How Neural Nets estimate depth from 2D images? Monocular Depth Estimation Explained!"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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

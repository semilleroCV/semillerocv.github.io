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
  const sectionIds = useMemo(() => ["introduccion", "lecturas", "contenido", "actividades"], []);
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
              src="/image/posters/8.png"
              alt="¿Qué es el Deep Learning?"
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
              >Deep Learning
              </Typography>
            <br></br>
              <p className="mt-2 mr-8 text-lg md:text-xl">
                En esta sesión nos sumergimos en el fascinante mundo del Deep Learning, explorando desde sus principios fundamentales hasta sus aplicaciones más recientes. Desde la construcción de un perceptrón multicapa desde cero hasta el análisis de redes neuronales convolucionales, descubriremos cómo estas tecnologías están transformando nuestra interacción con el mundo visual.
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
          <p className="text-lg leading-relaxed">
            El objetivo principal de esta sesión es comprender los fundamentos del Deep Learning y su aplicación en visión por computadora. Exploraremos la evolución histórica de esta tecnología, comprenderemos sus principios matemáticos básicos, y analizaremos hacia dónde se dirige el campo. Al finalizar, serás capaz de entender cómo se construye un perceptrón multicapa desde cero, reconocer el funcionamiento de las redes neuronales convolucionales, y visualizar las tendencias actuales y futuras del Deep Learning.
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
            Para aprovechar al máximo esta sesión, te recomendamos revisar los siguientes recursos:
          </p>
            <ul className="list-disc list-inside text-lg mb-4">
            <li>
              <a
              href="https://www.youtube.com/watch?v=u6aEYuemt0M&t=327s&pp=ygUkZGVlcCBsZWFybmluaWcga2FycGF0aHkgaW50cm9kdWN0aW9u"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
              >
              Charla de Andrej Karpathy: Building Generative Models
              </a>
            </li>
            <li>
              <a
              href="https://www.youtube.com/watch?v=aircAruvnKk&t=1s&pp=ygUkZGVlcCBsZWFybmluaWcga2FycGF0aHkgaW50cm9kdWN0aW9u"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
              >
              Serie 3Blue1Brown: Neural Networks
              </a>
            </li>
            <li>
              <a
              href="https://playground.tensorflow.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
              >
              TensorFlow Playground - Experimentación interactiva
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
            Durante esta sesión, exploraremos:
          </p>
          <ul className="list-disc list-inside text-lg mb-4">
            <li>
              <strong>¿Qué es el Deep Learning?</strong> Definición, historia breve y diferencias con otras formas de aprendizaje automático.
            </li>
            <li>
              <strong>Aplicaciones prácticas:</strong> Casos de uso en la industria y la investigación, con énfasis en visión por computadora.
            </li>
            <li>
              <strong>Fundamentos matemáticos:</strong> Comprensión de los principios básicos que permiten el funcionamiento de las redes neuronales.
            </li>
            <li>
              <strong>No-linealidad:</strong> Importancia de las funciones de activación y cómo permiten modelar relaciones complejas.
            </li>
            <li>
              <strong>Funciones de coste (Losses):</strong> Medición del error y optimización del rendimiento de los modelos.
            </li>
            <li>
              <strong>Backpropagation y SGD:</strong> Algoritmos fundamentales para el entrenamiento de redes neuronales.
            </li>
            <li>
              <strong>Interpretación de pesos y sesgos:</strong> Comprender qué representan realmente los parámetros de una red.
            </li>
            <li>
              <strong>Redes neuronales convolucionales:</strong> Arquitectura especializada para el procesamiento de imágenes.
            </li>
            <li>
              <strong>Tendencias actuales:</strong> Hacia dónde se dirige el campo del Deep Learning y qué podemos esperar en el futuro.
            </li>
          </ul>
          <p className="text-lg leading-relaxed">
            Implementaremos un perceptrón multicapa desde cero para entender profundamente su funcionamiento interno, y analizaremos ejemplos prácticos para reforzar los conceptos teóricos.
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
              src="https://www.youtube.com/embed/O5xeyoRL95U"
              title="Deep Learning Introduction by Andrej Karpathy"
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
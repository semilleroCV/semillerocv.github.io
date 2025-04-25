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
              src="/image/posters/13.png"
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
                Estimación activa de la profundidad
              </Typography>
              <br></br>
              <p className="mt-2 mr-8 text-lg md:text-xl text-justify">
                En esta sesión, nos adentraremos en los fundamentos de la
                estimación activa de la profundidad, una técnica innovadora que
                aprovecha las ventajas de la detección de la luz en movimiento
                para estimar con alta precisión la distancia a la que se
                encuentra un objeto en una escena. Este enfoque permite obtener
                información tridimensional de una manera mucho más precisa que
                las técnicas tradicionales. Además, analizaremos las increíbles
                aplicaciones de este enfoque en diversas áreas, desde la
                robótica hasta los vehiculos autonomos y la visualización de
                objetos que se encuentran ocultos.
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
            integral de la estimación activa de la profundidad y las tecnologías
            que la respaldan, entendiendo cómo la luz nos permite obtener
            mediciones precisas de una escena.
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
                href="https://blog.zivid.com/how-structured-light-works"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                How Structured Light works
              </a>
            </li>
            <li>
              <a
                href="https://www.flyeye.io/drone-acronym-tof/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                What is TOF (Time of Flight) & How Does it Work?
              </a>
            </li>
            <li>
              <a
                href="https://www.sony-semicon.com/en/technology/industry/tof.html#:~:text=Illustration%20of%20dToF-,Indirect%20ToF%20(iToF),images%20of%20the%20target%20object"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                ToF (Time of Flight) Technology - Industrial Use
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=OMDfQC0m4i4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                What Is Time-of-Flight? – Vision Campus
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
              <strong>Métodos de estimación de la profundidad:</strong> Breve
              recordatorio de la sesión anterior, diferencia entre los métodos
              pasivos vs métodos activos de estimación de la profundidad y las
              características clave de cada uno.
            </li>
            <li>
              <strong>Luz estructurada: </strong> En que consiste el método de
              luz estructurada, cómo este enfoque nos permite estimar la
              profundidad de un objeto proyectando patrones de luz y
              exploraremos las principales aplicaciones que aprovechan esta
              tecnología.
            </li>
            <li>
              <strong>Tiempo de vuelo de la luz: </strong> Definición de tiempo
              de vuelo y diferencias entre el tiempo de vuelo indirecto (iToF) y
              el tiempo de vuelo directo (dToF). Además, veremos qué sensores
              están capacitados para medir la luz en movimiento y cómo se
              utilizan para obtener mediciones precisas de profundidad.
            </li>
            <li>
              <strong>
                Aplicaciones interesantes de medir la luz en movimiento.{" "}
              </strong>{" "}
              Como podemos reconstruir escenas con ayuda de la luz.
            </li>
          </ul>
          <p className="text-lg leading-relaxed">
            A lo largo de la sesión, se incluirán actividades prácticas según
            corresponda.
          </p>
        </motion.section>

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
                        src="/slides/2025SemilleroCV_Session6_ActiveDepthImaging.pdf"
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
                      src="https://www.youtube.com/embed/4PAXkzovIqs?si=guvq4NCO_D8d0Xpp" 
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

  "use client";

  import React, { useEffect, useState } from "react";
  import Image from "next/image";
  import { Navbar } from "@/components";
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
              activeSection === "introduccion" ? "text-teal-400 font-bold" : "text-white"
            }`}
          >
            Introducci&oacute;n y Objetivos
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
            Desarrollo de la Sesi&oacute;n
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

        {/* Main content container with extra top padding and right padding to avoid overlap with sidebar */}
        <main className="relative z-10 pt-20 pb-12 max-w-7xl mx-auto px-4 sm:px-8 lg:px-32 xl:px-40 md:pr-72">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/image/posters/4.png"
                alt="Pilot - Introducci&oacute;n al Semillero"
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
                  Pilot: Introducci&oacute;n al Semillero
                </Typography>
                <p className="mt-4 text-lg md:text-xl">
                  Bienvenido a la primera sesi&oacute;n del semillero. Aqu&iacute; sentamos las
                  bases para explorar el fascinante mundo de la visi&oacute;n por computadora y
                  definir los objetivos que nos acompa&ntilde;an en este emocionante camino.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Section 1 – Introducci&oacute;n y Objetivos */}
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
              Introducci&oacute;n y Objetivos
            </Typography>
            <p className="text-lg leading-relaxed">
              En esta sesi&oacute;n introductoria, presentamos el contexto y los objetivos del semillero.
              Exploraremos la historia, la importancia y las aplicaciones actuales de la visi&oacute;n por
              computadora, sentando las bases para profundizar en conceptos m&aacute;s avanzados.
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
              Antes de asistir a la sesi&oacute;n, te recomendamos revisar los siguientes recursos para
              familiarizarte con los conceptos b&aacute;sicos:
            </p>
            <ul className="list-disc list-inside text-lg mb-4">
              <li>&quot;How we're teaching computers to understand pictures&quot;</li>
            </ul>
            <a
              href="https://www.ted.com/talks/fei_fei_li_how_we_re_teaching_computers_to_understand_pictures"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 bg-teal-700 hover:bg-teal-600 rounded-full text-white font-semibold"
            >
              Ver recurso
            </a>
          </motion.section>

          {/* Section 3 – Desarrollo de la Sesi&oacute;n */}
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
              Desarrollo de la Sesi&oacute;n
            </Typography>
            <p className="text-lg leading-relaxed mb-4">
              Durante esta sesi&oacute;n, combinamos teor&iacute;a y pr&aacute;ctica. A trav&eacute;s de
              presentaciones y demostraciones en vivo, abordamos temas como la adquisici&oacute;n y procesamiento de
              im&aacute;genes, fundamentos de Deep Learning y t&eacute;cnicas de an&aacute;lisis visual. Todo se
              desarrolla de manera din&aacute;mica y participativa.
            </p>
            <p className="text-lg leading-relaxed">
              Fomentamos la interacci&oacute;n y el debate, permiti&eacute;ndote experimentar con ejemplos
              reales y sentar las bases para proyectos futuros.
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
              Al concluir la sesi&oacute;n, se te asignar&aacute;n actividades pr&aacute;cticas para consolidar los
              conocimientos adquiridos. Estas tareas te permitir&aacute;n experimentar de manera
              aut&oacute;noma y preparar el terreno para los siguientes m&oacute;dulos.
            </p>
            <p className="text-lg leading-relaxed">
              Adem&aacute;s, promoveremos el intercambio de ideas en grupo, permitiendo la discusi&oacute;n y
              resoluci&oacute;n de dudas en un ambiente colaborativo.
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
                src="https://www.youtube.com/embed/OnTgbN3uXvw?si=r55sqmuYZj_K7uRm"
                title="Video Complementario"
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
      </div>
    );
  }

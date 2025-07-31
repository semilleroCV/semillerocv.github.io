"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { Navbar, Footer, DiscordBubble } from "@/components";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

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

const SidebarNavigation = ({ activeSection }: SidebarNavigationProps) => {
  const t = useTranslations("Sesion1");
  return (
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
            {t("sidebar_introduccion")}
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
            {t("sidebar_lecturas")}
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
            {t("sidebar_contenido")}
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
            {t("sidebar_actividades")}
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
            {t("sidebar_sesion")}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default function Sesion1Page() {
  const t = useTranslations("Sesion1");
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

      {/* Main content container with extra top padding and right padding to avoid overlap with sidebar */}
      <main className="relative z-10 pt-20 pb-12 max-w-7xl mx-auto px-4 sm:px-8 lg:px-32 xl:px-40 md:pr-72">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/image/posters/4.webp"
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
                {t("hero_title")}
              </Typography>
              <p className="mt-4 text-lg md:text-xl text-justify">
                {t("hero_description")}
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
            {t("introduccion_title")}
          </Typography>
          <p className="text-lg leading-relaxed text-justify">
            {t("introduccion_description")}
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
            {t("lecturas_title")}
          </Typography>
          <p className="text-lg leading-relaxed mb-4 text-justify">
            {t("lecturas_description")}
          </p>
          <ul className="list-disc list-inside text-lg mb-4">
            <a
              href="https://www.ted.com/talks/fei_fei_li_how_we_re_teaching_computers_to_understand_pictures"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 mx-2 bg-teal-700 hover:bg-teal-600 rounded-full text-white font-semibold"
            >
              {t("lecturas_link1")}
            </a>
            <br></br>
            <a
              href="https://azure.microsoft.com/es-es/resources/cloud-computing-dictionary/what-is-computer-vision#reconocimiento-%C3%B3ptico-de-caracteres"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 mx-2 bg-teal-700 hover:bg-teal-600 rounded-full text-white font-semibold"
            >
              {t("lecturas_link2")}
            </a>
          </ul>
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
            {t("contenido_title")}
          </Typography>
          <p className="text-lg leading-relaxed mb-4 text-justify">
            {t("contenido_description1")}
          </p>
          <p className="text-lg leading-relaxed">
            {t("contenido_description2")}
          </p>
        </motion.section>

        {/* Section 4 – Actividades y Tareas Posteriores */}
        <motion.section
          id="actividades"
          className="mb-12 p-6 rounded-lg"
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
            {t("actividades_title")}
          </Typography>
          <p className="text-lg leading-relaxed mb-4 text-justify">
            {t("actividades_description1")}
          </p>
          <p className="text-lg leading-relaxed">
            {t("actividades_description2")}
          </p>
        </motion.section>

        <Typography
          variant="h2"
          className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-teal-200 to-teal-600 bg-clip-text text-transparent"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {t("sesion_title")}
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
              {t("sesion_presentacion_title")}
            </Typography>
            <div className="w-full h-[600px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-teal-500/20 transition-shadow">
              <iframe
                src="/slides/2025_SemilleroCV_Session1_Pilot.pdf"
                width="100%"
                height="100%"
                className="border-none"
                title="Presentación PDF"
              />
            </div>
            <p className="mt-4 text-sm text-gray-400 text-center">
              {t("sesion_presentacion_description")}
            </p>
          </div>

          <Typography
            variant="h3"
            className="text-2xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            {t("sesion_video_title")}
          </Typography>

          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-teal-500/20 transition-shadow">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/y7pdRhCtXD4?si=CLc6ap04rY1m6x7C"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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

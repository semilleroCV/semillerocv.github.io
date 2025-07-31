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
  const t = useTranslations("Sesion10");
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
      </ul>
    </nav>
  );
};

export default function Sesion3Page() {
  const t = useTranslations("Sesion10");
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
              src="/image/posters/17.png"
              alt="Termicas"
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
                {t("hero_title")}
              </Typography>
              <br></br>
              <p className="mt-2 mr-8 text-lg md:text-xl text-justify">
                {t("hero_description")}
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
          <p className="text-lg leading-relaxed mb-4">
            {t("lecturas_description")}
          </p>
          <ul className="list-disc list-inside text-lg mb-4">
            <li>
              <a
                href="https://ocw.mit.edu/courses/6-079-introduction-to-convex-optimization-fall-2009/resources/mit6_079f09_lec01/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                {t("lecturas_link1")}
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/d0CF3d5aEGc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                {t("lecturas_link2")}
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1CDOA2Mzei-9kyHQNO0QWSI6p1yc7t3tC/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                {t("lecturas_link3")}
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
            {t("contenido_title")}
          </Typography>
          <p className="text-lg leading-relaxed mb-4">
            {t("contenido_description")}
          </p>
          <ul className="list-disc list-inside text-lg mb-4">
            <li>{t("contenido_list_item1")}</li>
            <li>{t("contenido_list_item2")}</li>
            <li>{t("contenido_list_item3")}</li>
            <li>{t("contenido_list_item4")}</li>
            <li>{t("contenido_list_item5")}</li>
          </ul>
          <p className="text-lg leading-relaxed">
            {t("contenido_footer")}
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
            {t("sesion_video_title")}
          </Typography>
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
              src="https://www.youtube.com/embed/AM6BY4btj-M?si=5EYbT_OTV-U39SeI"
              title="What Is Mathematical Optimization?"
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

"use client";
import React, { useEffect, useState, useMemo, memo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { Navbar } from "@/components";
import { Project as ProjectData } from "@/components/projects";
import { Container, Engine, InteractivityDetect } from "@tsparticles/engine";
import { FaGithub, FaFilePowerpoint, FaUsers } from "react-icons/fa";
import confetti from 'canvas-confetti';
import { useTranslations } from "next-intl";

interface ProjectPageProps {
  project: ProjectData;
}

const ParticlesBackground = memo(() => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log(container);
    },
    []
  );

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      particles: {
        color: { value: "#2DD4BF" },
        links: {
          enable: true,
          color: "#2DD4BF",
          distance: 120,
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none" as const,
          random: false,
          straight: false,
          outModes: { default: "bounce" as const },
        },
        number: {
          value: 150,
          density: { enable: true, area: 600 },
        },
        opacity: { value: 0.3 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        detectsOn: InteractivityDetect.window,
        events: {
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          repulse: { distance: 150, duration: 0.4 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 pointer-events-none"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
});
ParticlesBackground.displayName = "ParticlesBackground";


export default function ProjectPage({ project }: ProjectPageProps) {
  const t = useTranslations("ProjectPage");
  const p = useTranslations("Proyects");
  const photos = [
    project.photo1,
    project.photo2,
    project.photo3,
    project.photo4,
  ].filter((p): p is string => Boolean(p));
  const isFour = photos.length === 4;
  useEffect(() => {
    if (project.id === "equipo3" || project.id === "equipo4" || project.id === "equipo9") {
      const timer = setTimeout(() => {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2DD4BF', '#34D399', '#10B981', '#059669']
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [project.id]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 16 },
    },
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <ParticlesBackground />
      <Navbar />

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="/sesiones/sesion12"
          className="mt-24 ml-8 hidden sm:inline-flex items-center text-white text-sm sm:text-base px-4 py-4 rounded-xl bg-teal-500 hover:bg-teal-600 transition-transform hover:scale-105 shadow-md"
        >
          {t("back_to_session_12")}
        </Link>
      </motion.div>

      <main className="relative p-4 sm:p-6 md:p-12 max-w-8xl mx-auto grid grid-rows-[auto_auto_1fr] gap-8 sm:gap-10 md:gap-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center"
        >
          <motion.div
            variants={itemVariants}
            className="relative h-40 sm:h-48 md:h-56 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl lg:-mt-24 sm:mt-0 md:-mt-0"
          >
            <Image
              src={project.description}
              alt={`${p(`${project.id}_title`)} descripción`}
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col space-y-2 sm:space-y-4 xl:mr-36"
          >
            {project.repoUrl && (
              <motion.a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center py-2 sm:py-4 px-3 sm:px-4 bg-gray-800 bg-opacity-60 rounded-2xl shadow-lg hover:shadow-teal-400/40 transition"
              >
                <FaGithub className="mr-3 text-xl text-teal-300" />
                <span className="text-sm sm:text-lg font-semibold text-teal-200">
                  {t("view_code")}
                </span>
              </motion.a>
            )}
            {project.slidesUrl && (
              <motion.a
                href={project.slidesUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center py-2 sm:py-4 px-3 sm:px-4 bg-teal-600 rounded-2xl shadow-lg hover:shadow-teal-400/40 transition"
              >
                <FaFilePowerpoint className="mr-3 text-xl text-white" />
                <span className="text-sm sm:text-lg font-semibold text-white">
                  {t("view_slides")}
                </span>
              </motion.a>
            )}
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="relative h-64 sm:h-80 md:h-96 w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src={project.image}
              alt={p(`${project.id}_title`)}
              fill
              className="object-cover"
              priority
            />
            {(project.id === "equipo3" ||
              project.id === "equipo4" ||
              project.id === "equipo9") && (
              <div className="absolute bottom-2 right-2 z-10 w-1/3 sm:w-1/4 md:w-1/5 h-auto">
                <Image
                  src={project.winnerImage!}
                  alt="Detalle adicional"
                  width={100}
                  height={100}
                  className="object-contain w-full h-auto"
                />
              </div>
            )}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className={`${
              isFour
                ? "grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 justify-center items-center"
                : "flex flex-wrap justify-center sm:justify-end items-center space-x-4 sm:space-x-8 -space-x-2 sm:-space-x-6"
            }`}
          >
            {photos.map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15, rotate: [0, 5, -5, 0] }}
                className="flex flex-col items-center relative z-10 transform transition-shadow shadow-lg"
              >
                <div className="bg-gradient-to-tr from-teal-300 to-black rounded-full p-1">
                  <div className="relative lg:w-28 lg:h-28 sm:w-24 sm:h-24 rounded-full overflow-hidden">
                    <Image
                      src={src}
                      alt={`Miembro ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="mt-6 sm:mt-8 text-lg sm:text-lg font-medium text-gray-200 text-center">
                  {project.members[i]}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.section
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-3 bg-gray-800 bg-opacity-50 p-6 sm:p-8 rounded-3xl backdrop-blur-md shadow-inner space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-400 flex items-center justify-center">
              <FaUsers className="mr-2 animate-pulse" /> {t("summary")}
            </h2>
            <p className="text-gray-200 leading-relaxed text-base sm:text-lg md:text-xl text-justify">
              {p(`${project.id}_abstract`)}
            </p>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
}




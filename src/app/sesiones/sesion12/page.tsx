// components/FinalProjects.tsx
"use client";

import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
  memo,
} from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Container, Engine, InteractivityDetect } from "@tsparticles/engine";
import { Project, projects } from "@/components/projects";
import { Navbar } from "@/components";

// ─── ts-Particles OPTIONS ───────────────────────────────────────────────

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
          opacity: 3,
          width: 2,
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

// ─── STAMP BORDER COMPONENT ─────────────────────────────────────────────

const StampBorder = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 100 100"
  >
    <defs>
      <pattern
        id="stamp-texture"
        patternUnits="userSpaceOnUse"
        width="4"
        height="4"
      >
        <path d="M0 0h1v1H0z" fill="rgba(255,255,255,0.05)" />
      </pattern>
    </defs>
    <path
      d="M0,0 v100 h100 v-100 h-100"
      fill="none"
      stroke="url(#stamp-texture)"
      strokeWidth="0.5"
      className="stamp-edge"
    />
    <path
      d="M2,2 v96 h96 v-96 h-96"
      fill="none"
      stroke="rgba(255,255,255,0.1)"
      strokeWidth="0.25"
      strokeDasharray="1,2"
    />
  </svg>
);

// ─── AVATAR CARD ────────────────────────────────────────────────────────
const AvatarCard = memo(
  ({
    project,
    isHovered,
    onHoverStart,
    onHoverEnd,
  }: {
    project: Project;
    isHovered: boolean;
    onHoverStart: () => void;
    onHoverEnd: () => void;
  }) => (
    <motion.div
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      initial={{ scale: 1 }}
      animate={{
        scale: isHovered ? 1.2 : 1,
        rotateY: isHovered ? 8 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
      className="relative cursor-pointer rounded-lg overflow-hidden"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={200}
        height={200}
        className="object-cover"
      />
      {isHovered && (
        <div className="absolute inset-0 ring-2 ring-teal-400 rounded-lg pointer-events-none" />
      )}
    </motion.div>
  ),
  (prev, next) => prev.isHovered === next.isHovered
);
AvatarCard.displayName = "AvatarCard";

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────
export default function FinalProjects() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        <ParticlesBackground />

        {/* BACKDROP ANIMADO */}
        <AnimatePresence mode="wait">
          <motion.div
            key={hoveredIdx ?? "default"}
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image
              src={
                hoveredIdx !== null
                  ? projects[hoveredIdx].image
                  : "./image/default.png"
              }
              alt="fondo"
              fill
              className="object-cover brightness-50"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>

        {/* PANEL CENTRAL o DEFAULT IMAGE */}
        <div className="relative z-10 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {hoveredIdx !== null ? (
              <motion.div
                key={`card-${hoveredIdx}`}
                className="
    relative
    h-[45vh] 
    w-[80vw] sm:w-[600px] lg:w-[800px]
    mt-20
    overflow-hidden
    rounded-3xl
    shadow-2xl
    mt-36
  "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Fondo de la card */}
                <div className="absolute inset-0">
                  <Image
                    src={projects[hoveredIdx].image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Contenido */}
                <div className="relative h-full p-8">
                  <h2 className="text-4xl font-bold text-teal-300 mb-6">
                    {projects[hoveredIdx].title}
                  </h2>

                  {/* Imagen en la parte inferior */}
                  <div className="absolute -bottom-2 left-8 right-8 h-[30%]">
                    <Image
                      src={projects[hoveredIdx].description}
                      alt={`${projects[hoveredIdx].title} integrantes`}
                      fill
                      className="object-contain rounded-md shadow-sm"
                    />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="default-img"
                className="mt-24"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  src="/image/default.png"
                  alt="default"
                  width={500}
                  height={500}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CARRUSEL AVATARS */}
        <div className="absolute bottom-8 w-full">
          <div className="max-w-5xl mx-auto px-4 pb-8">
            <div className="grid grid-cols-5 grid-rows-2 gap-6 justify-items-center">
              {projects.map((p, i) => (
                <AvatarCard
                  key={p.id}
                  project={p}
                  isHovered={i === hoveredIdx}
                  onHoverStart={() => setHoveredIdx(i)}
                  onHoverEnd={() => setHoveredIdx(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

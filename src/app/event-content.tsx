"use client";

import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import EventContentCard from "@/components/event-content-card";
import { motion } from "framer-motion";

// Define the session data
const SESSIONS = [
  {
    id: "session1",
    title: "Sesión 1",
    subject: "Sesión 1: Pilot",
    des: "Introducción al semillero.",
    img: "/image/posters/4.webp",
    sessionId: 1,
  },
  {
    id: "session2",
    title: "Sesión 2",
    subject: "Sesión 2: De fotones a pixeles",
    des: "Generalidades sobre la adquisición y procesamiento digital de imágenes",
    img: "/image/posters/6.png",
    sessionId: 2,
  },
  {
    id: "session3",
    title: "Sesión 3",
    subject: "Sesión 3: Deep Learning",
    des: "Despierta el poder de la inteligencia artificial en la visión por computadora",
    img: "/image/posters/8.png",
    sessionId: 3,
  },
  {
    id: "session4",
    title: "Sesión 4",
    subject: "Sesión 4: Imágenes Espectrales",
    des: "Conoce los secretos que hay mas allá de una imagen de color.",
    img: "/image/posters/10.png",
    sessionId: 4,
  },
  {
    id: "session5",
    title: "Sesión 5",
    subject: "Sesión 5: Estimación pasiva de la profundidad",
    des: "Explora las técnicas de estimación de profundidad sin fuentes externas",
    img: "/image/posters/12.png",
    sessionId: 5,
  },
  {
    id: "session6",
    title: "Sesión 6",
    subject: "Sesión 6: Estimación activa de la profundidad",
    des: "Extrayendo profundidad con precisión milimétrica a partir de la luz.",
    img: "/image/posters/13.png",
    sessionId: 6,
  },
  {
    id: "session7",
    title: "Sesión 7",
    subject: "Sesión 7: Asignación de proyectos",
    des: "Rétate a ti mismo 🔥🔥",
    img: "/image/posters/14.png",
    sessionId: 7
  },
  {
    id: "session8",
    title: "Sesión 8",
    subject: "Sesión 8: Segmentación",
    des: "Delineando el mundo digital a través de píxeles clasificados meticulosamente",
    img: "/image/posters/15.png",
    sessionId: 8,
  },
  {
    id: "session9",
    title: "Sesión 9",
    subject: "Sesión 9: Imágenes térmicas",
    des: "El mundo visto a través del calor",
    img: "/image/posters/16.png",
    sessionId: 9,
  },
  {
    id: "session10",
    title: "Sesión 10",
    subject: "Sesión 10: Optimización Convexa",
    des: "Optimizando el mundo con matemáticas",
    img: "/image/posters/17.png",
    sessionId: 10,
  },
  {
    id: "session11",
    title: "Sesión 11",
    subject: "Sesión 11: NLP",
    des: "Aprendiendo a hablar con las máquinas",
    img: "/image/posters/18.png",
    sessionId: 11,
  },
  {
    id: "session12",
    title: "Sesión 12",
    subject: "Sesión 12: Proyectos finales",
    des: "Desafía tus habilidades 🚀 🚀",
    img: "/image/posters/19.png",
    sessionId: 12,
  },
];

export default function EventContent() {
  const [activeSession, setActiveSession] = useState(SESSIONS[0].id);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="pb-8 px-4 lg:pb-20 bg-gradient-to-b from-black to-teal-900">
      <Typography
        variant="h2"
        className="text-center text-white mb-10 font-bold text-3xl md:text-4xl lg:text-5xl"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        Cronograma del Semillero
      </Typography>

      {/* Mobile Dropdown */}
      <div className="md:hidden w-full mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-4 bg-teal-900 text-white rounded-lg flex items-center justify-between border-2 border-teal-800"
        >
          <span>{SESSIONS.find(s => s.id === activeSession)?.title}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ▼
          </motion.span>
        </button>
        
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute z-50 w-[calc(100%-2rem)] mt-2 bg-teal-900 border-2 border-teal-800 rounded-lg shadow-xl"
          >
            {SESSIONS.map((session) => (
              <button
                key={session.id}
                onClick={() => {
                  setActiveSession(session.id);
                  setIsOpen(false);
                }}
                className={`w-full p-4 text-left text-white hover:bg-teal-800 transition-colors
                  ${session.id === activeSession ? 'bg-teal-800' : ''}
                  ${session.id !== SESSIONS[SESSIONS.length - 1].id ? 'border-b border-teal-800' : ''}
                `}
              >
                {session.title}
              </button>
            ))}
          </motion.div>
        )}
      </div>

      {/* Desktop Tabs */}
      <div className="hidden md:block">
        <Tabs value={activeSession} className="mb-8">
          <div className="w-full flex mb-8 flex-col items-center">
            <TabsHeader
              className="h-14 w-full md:w-auto bg-teal-900 border-2 border-teal-800 rounded-lg shadow-sm"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {SESSIONS.map((session) => (
                <Tab
                  key={session.id}
                  value={session.id}
                  onClick={() => setActiveSession(session.id)}
                  className={`relative mx-2 font-medium text-white hover:bg-teal-700 transition-colors duration-300 rounded-lg ${
                    activeSession === session.id ? "text-teal-900 shadow-lg" : ""
                  }`}
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {activeSession === session.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-lg"
                    />
                  )}
                  <span className="relative z-10">{session.title}</span>
                </Tab>
              ))}
            </TabsHeader>
          </div>
        </Tabs>
      </div>

      {/* Display the active session content */}
      <div className="mx-auto max-w-6xl min-h-[500px]">
        {SESSIONS.map(
          (session) =>
            session.id === activeSession && (
              <EventContentCard
                key={session.sessionId}
                title={session.subject}
                des={session.des}
                img={session.img || '/default-image.png'}
                sessionId={session.sessionId}
              />
            )
        )}
      </div>
    </section>
  );
}
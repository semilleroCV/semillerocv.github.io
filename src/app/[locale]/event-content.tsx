"use client";

import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import EventContentCard from "@/components/event-content-card";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function EventContent() {
  const t = useTranslations("EventContent");
  const SESSIONS = [
    {
      id: "session1",
      title: t("session1_title"),
      subject: t("session1_subject"),
      des: t("session1_des"),
      img: "/image/posters/4.webp",
      sessionId: 1,
    },
    {
      id: "session2",
      title: t("session2_title"),
      subject: t("session2_subject"),
      des: t("session2_des"),
      img: "/image/posters/6.png",
      sessionId: 2,
    },
    {
      id: "session3",
      title: t("session3_title"),
      subject: t("session3_subject"),
      des: t("session3_des"),
      img: "/image/posters/8.png",
      sessionId: 3,
    },
    {
      id: "session4",
      title: t("session4_title"),
      subject: t("session4_subject"),
      des: t("session4_des"),
      img: "/image/posters/10.png",
      sessionId: 4,
    },
    {
      id: "session5",
      title: t("session5_title"),
      subject: t("session5_subject"),
      des: t("session5_des"),
      img: "/image/posters/12.png",
      sessionId: 5,
    },
    {
      id: "session6",
      title: t("session6_title"),
      subject: t("session6_subject"),
      des: t("session6_des"),
      img: "/image/posters/13.png",
      sessionId: 6,
    },
    {
      id: "session7",
      title: t("session7_title"),
      subject: t("session7_subject"),
      des: t("session7_des"),
      img: "/image/posters/14.png",
      sessionId: 7,
    },
    {
      id: "session8",
      title: t("session8_title"),
      subject: t("session8_subject"),
      des: t("session8_des"),
      img: "/image/posters/15.png",
      sessionId: 8,
    },
    {
      id: "session9",
      title: t("session9_title"),
      subject: t("session9_subject"),
      des: t("session9_des"),
      img: "/image/posters/16.png",
      sessionId: 9,
    },
    {
      id: "session10",
      title: t("session10_title"),
      subject: t("session10_subject"),
      des: t("session10_des"),
      img: "/image/posters/17.png",
      sessionId: 10,
    },
    {
      id: "session11",
      title: t("session11_title"),
      subject: t("session11_subject"),
      des: t("session11_des"),
      img: "/image/posters/18.png",
      sessionId: 11,
    },
    {
      id: "session12",
      title: t("session12_title"),
      subject: t("session12_subject"),
      des: t("session12_des"),
      img: "/image/posters/19.png",
      sessionId: 12,
    },
  ];
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
        {t("title")}
      </Typography>

      {/* Mobile Dropdown */}
      <div className="md:hidden w-full mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-4 bg-teal-900 text-white rounded-lg flex items-center justify-between border-2 border-teal-800"
        >
          <span>{SESSIONS.find((s) => s.id === activeSession)?.title}</span>
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
                  ${session.id === activeSession ? "bg-teal-800" : ""}
                  ${
                    session.id !== SESSIONS[SESSIONS.length - 1].id
                      ? "border-b border-teal-800"
                      : ""
                  }
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
                    activeSession === session.id
                      ? "text-teal-900 shadow-lg"
                      : ""
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
                img={session.img || "/default-image.png"}
                sessionId={session.sessionId}
              />
            )
        )}
      </div>
    </section>
  );
}
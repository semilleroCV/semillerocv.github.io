"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Navbar, Footer, DiscordBubble } from "@/components";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TeamCard } from "@/components/team-card";
import Lenis from "lenis";
import { useTranslations } from "next-intl";

export default function NosotrosPage() {
  const t = useTranslations("Nosotros");
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
      virtualScroll: (data) => true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
    };
  }, []);
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-black to-teal-900">
        {/* Hero Section with Cover Image */}
        <div className="relative w-full h-screen mt-[-80px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative w-full h-full"
          >
            <Image
              src="/image/hocv_team.webp"
              alt="Team Cover"
              fill
              className="object-cover object-center"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/100" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-20 left-0 right-0 px-4"
          >
            <Typography
              variant="h1"
              className="text-4xl md:text-6xl font-bold text-white text-center max-w-5xl mx-auto"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {t("title")}
            </Typography>
          </motion.div>
        </div>

        {/* Mission Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl hover:shadow-teal-500/20 transition-all duration-500"
          >
            <Typography
              variant="h3"
              className="text-3xl md:text-4xl font-bold text-white mb-6 text-center"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {t("mission_title")}
            </Typography>
            <Typography
              className="text-gray-200 text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {t("mission_description")}
            </Typography>
          </motion.div>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          {/* Professors Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Typography
              variant="h3"
              className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {t("professors_title")}
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamCard
                name={t("professor1_name")}
                role={t("professor1_role")}
                image="/image/people/hoover.webp"
                socialLinks={{
                  web: "https://hfarueda.com/",
                  scholar: "https://scholar.google.es/citations?hl=es&user=seyRms4AAAAJ&view_op=list_works&sortby=pubdate"
                }}
              />
              {/* Add more professors as needed */}
            </div>
          </motion.div>

          {/* Masters Students Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Typography
              variant="h3"
              className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {t("masters_students_title")}
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamCard
                name={t("masters_student1_name")}
                role={t("masters_student1_role")}
                image="/image/people/fabian.webp"
                socialLinks={{
                  web: "https://www.factral.co/",
                  github: "https://github.com/Factral/",
                  linkedin: "https://www.linkedin.com/in/fabianprzz/",
                }}
              />
                        <TeamCard
                name={t("masters_student2_name")}
                role={t("masters_student2_role")}
                image="/image/people/julian.webp"
                socialLinks={{
                  github: "https://github.com/Jleon13",
                  linkedin: "https://co.linkedin.com/in/juli%C3%A1n-david-le%C3%B3n-quintero-950413258",
                }}
              />
              {/* Add more master students as needed */}
            </div>
          </motion.div>

          {/* Undergraduate Students Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {t("undergraduate_students_title")}
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamCard
                name={t("undergraduate_student1_name")}
                role={t("undergraduate_student1_role")}
                image="/image/people/cristian.webp"
                socialLinks={{
                  github: "https://github.com/CristianR8",
                  linkedin: "https://www.linkedin.com/in/cristian-rey-b33435229/",
                }}
              />
              <TeamCard
                name={t("undergraduate_student2_name")}
                role={t("undergraduate_student2_role")}
                image="/image/people/miguel.webp"
                socialLinks={{
                  github: "https://github.com/MiguelAngMolina",
                  linkedin: "https://www.linkedin.com/in/miguelangelmolinagarzon/",
                }}
              />
              <TeamCard
                name={t("undergraduate_student3_name")}
                role={t("undergraduate_student3_role")}
                image="/image/people/ramo.jpeg"
                socialLinks={{
                  github: "https://github.com/ramiro999",
                  linkedin: "https://www.linkedin.com/in/ramiro-avila-chacon/",
                }}
              />
              <TeamCard
                name={t("undergraduate_student4_name")}
                role={t("undergraduate_student4_role")}
                image="/image/people/henry.webp"
                socialLinks={{
                  github: "https://github.com/HenryMantilla",
                  linkedin: "https://www.linkedin.com/in/henry-dario-mantilla-claro-9186bb272/",
                }}
              />
              <TeamCard
                name={t("undergraduate_student5_name")}
                role={t("undergraduate_student5_role")}
                image="/image/people/paula.webp"
                socialLinks={{
                  github: "hhttps://github.com/pauzca"
                }}
              />
              <TeamCard
                name={t("undergraduate_student6_name")}
                role={t("undergraduate_student6_role")}
                image="/image/people/guillermo.webp"
                socialLinks={{
                  github: "https://github.com/guillepinto",
                  linkedin: "https://www.linkedin.com/in/guillepinto",
                }}
              />
              <TeamCard
                name={t("undergraduate_student7_name")}
                role={t("undergraduate_student7_role")}
                image="/image/people/sebas.webp"
                socialLinks={{
                  github: "https://github.com/stian1909"
                }}
              />
              <TeamCard
                name={t("undergraduate_student8_name")}
                role={t("undergraduate_student8_role")}
                image="/image/people/brayan.webp"
                socialLinks={{
                  github: "https://github.com/BrayanQuintero123",
                  linkedin: "https://www.linkedin.com/in/brayan-quintero-7426a2205/",
                }}
              />
              <TeamCard
                name={t("undergraduate_student9_name")}
                role={t("undergraduate_student9_role")}
                image="/image/people/andrea.webp"
                socialLinks={{
                  github: "https://github.com/andpgate"
                }}
              />
              <TeamCard
                name={t("undergraduate_student10_name")}
                role={t("undergraduate_student10_role")}
                image="/image/people/dana.webp"
                socialLinks={{
                  github: "https://github.com/Danita21"
                }}
              />
              <TeamCard
                name={t("undergraduate_student11_name")}
                role={t("undergraduate_student11_role")}
                image="/image/people/jorge.webp"
                socialLinks={{
                  github: "https://github.com/jorge1b3"
                }}
              />
              <TeamCard
                name={t("undergraduate_student12_name")}
                role={t("undergraduate_student12_role")}
                image="/image/people/toloza.webp"
                socialLinks={{
                  github: "https://github.com/tolozapd"
                }}
              />
              <TeamCard
                name={t("undergraduate_student13_name")}
                role={t("undergraduate_student13_role")}
                image="/image/people/sneider.webp"
                socialLinks={{
                  github: "https://github.com/semilleroCV"
                }}
              />
              <TeamCard
                name={t("undergraduate_student14_name")}
                role={t("undergraduate_student14_role")}
                image="/image/people/juancalderon.webp"
                socialLinks={{
                  github: "https://github.com/JJCG25"
                }}
              />
              <TeamCard
                name={t("undergraduate_student15_name")}
                role={t("undergraduate_student15_role")}
                image="/image/people/valentina.webp"
                socialLinks={{
                  github: "https://github.com/valperz"
                }}
              />
              <TeamCard
                name={t("undergraduate_student16_name")}
                role={t("undergraduate_student16_role")}
                image="/image/people/pimiento.jpeg"
                socialLinks={{
                  github: "https://github.com/pimientoyolo125"
                }}
              />
              <TeamCard
                name={t("undergraduate_student17_name")}
                role={t("undergraduate_student17_role")}
                image="/image/people/cesar.webp"
                socialLinks={{
                  github: "https://github.com/CesarVanegas04"
                }}
              />
              {/* Add more undergraduate students as needed */}
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
      <DiscordBubble />
    </>
  );
}
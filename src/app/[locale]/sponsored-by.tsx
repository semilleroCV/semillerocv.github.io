"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function ResearchAreas() {
  const t = useTranslations("SponsoredBy");
  const RESEARCH_AREAS = [
    {
      title: t("area1_title"),
      image: "/image/areas/nlos.png",
      description: t("area1_description"),
    },
    {
      title: t("area2_title"),
      image: "/image/areas/depth.jpg",
      description: t("area2_description"),
    },
    {
      title: t("area3_title"),
      image: "/image/areas/nlp.png",
      description: t("area3_description"),
    },
    {
      title: t("area4_title"),
      image: "/image/areas/segmentation.png",
      description: t("area4_description"),
    },
    {
      title: t("area5_title"),
      image: "/image/areas/spectral.jpg",
      description: t("area5_description"),
    },
    {
      title: t("area6_title"),
      image: "/image/areas/thermal.webp",
      description: t("area6_description"),
    },
  ];
  return (
    <section className="pb-8 px-8 lg:pb-48 bg-gradient-to-b from-black to-teal-900 pt-24">
      <div className="container mx-auto text-center">
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          variant="h2"
          color="white"
          className="mb-8 text-3xl md:text-4xl lg:text-5xl font-bold"
        >
          {t("title")}
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESEARCH_AREAS.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-96 transition-transform duration-300 hover:scale-110">
                <Image
                  src={area.image}
                  alt={area.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <Typography
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                  variant="h4"
                  color="white"
                  className="mb-2 text-xl font-bold"
                >
                  {area.title}
                </Typography>
                <Typography
                  color="white"
                  className="text-sm"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {area.description}
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchAreas;
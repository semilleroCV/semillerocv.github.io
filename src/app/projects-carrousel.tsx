"use client";
import { useRef } from "react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { FaFilePdf, FaSlideshare, FaCode } from "react-icons/fa";
import Image from "next/image";

interface Author {
  name: string;
  img: string;
}

interface Project {
  authors: Author[];
  title: string;
  pdfUrl: string;
  slidesUrl: string;
  repoUrl: string;
}


const projectsData: Project[] = [
  {
    authors: [{ name: "Fabián", img: "../image/people/fabian.webp" }],
    title:
      "Segmentación De Materiales A Partir De Imágenes RGB  Usando Arquitecturas De Transformadores De Visión E Integración De Información Multiespectral",
    pdfUrl:
      "https://drive.google.com/file/d/1GMNIFMpLxSuVDC0GfkOE_q9kDCihda_j/view?usp=sharing",
    slidesUrl: "../projects-BSc/fabian.pdf",
    repoUrl: "https://github.com/Factral/spectral-transformer",
  },
  {
    authors: [{ name: "Cristian", img: "../image/people/cristian.webp" }],
    title:
      "Simulación De Una Cámara Contadora De Fotones Para La Adquisición De Imágenes Transitorias En Escenarios Sin Línea De Visión",
    pdfUrl:
      "https://drive.google.com/file/d/1ohqd_zHTISETy5slpBPVxZBc08g3gRlG/view?usp=sharing",
    slidesUrl: "../projects-BSc/cristian.pdf",
    repoUrl: "https://github.com/CristianR8/NLOS-Simulator",
  },
  {
    authors: [{ name: "ramiro", img: "../image/people/ramo.jpeg" }],
    title:
      "Estimación de la velocidad de navegación segura para vehículos autónomos utilizando técnicas de visión por computadora",
    pdfUrl:
      "https://drive.google.com/file/d/1ACuHY207s69pZb33o84XK04zPweJjTpX/view?usp=sharing",
    slidesUrl: "../projects-BSc/ramo.pdf",
    repoUrl: "https://github.com/ramiro999/safe-speed-navigation",
  },
  {
    authors: [
      { name: "Henry", img: "../image/people/henry.webp" },
      { name: "Miguel", img: "../image/people/miguel.webp" },
    ],
    title:
      "Fusión de imágenes de profundidad obtenidas con sistemas LiDAR y de Estereovisión por medio de técnicas de aprendizaje profundo",
    pdfUrl:
      "https://drive.google.com/file/d/1ZvPYNsvoUC9G6x4YyXQqVgK8ZF7r3LR-/view?usp=sharing",
    slidesUrl: "../projects-BSc/henry_miguel.pdf",
    repoUrl: "https://github.com/HenryMantilla/Stereo-Lidar-Fusion",
  },
  // ...more projects
];

export default function ProjectsCarousel() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="bg-gradient-to-b from-teal-900 to-black lg:pb-40">
      <h2 className="text-4xl md:text-5xl text-center text-white font-extrabold mb-12">
        🏆 Proyectos de Grado 🏆
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={1.2}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="max-w-6xl mx-auto"
      >
        {projectsData.map((project, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 flex flex-col items-center text-center space-y-10"
            >
              <div className="flex -space-x-4">
                {project.authors.map((a) => (
                  <div
                    key={a.name}
                    className="relative w-48 h-48 rounded-full border-2 border-white overflow-hidden"
                  >
                    <Image
                      src={a.img}
                      alt={a.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>

              <h3 className="text-xl md:text-2xl text-white font-semibold">
                {project.title}
              </h3>

              <div className="flex space-x-4">
                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-full text-white font-medium shadow-lg"
                >
                  <FaFilePdf /> <span>Ver PDF</span>
                </a>
                <a
                  href={project.slidesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium shadow-lg"
                >
                  <FaSlideshare /> <span>Slides</span>
                </a>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium shadow-lg"
                  >
                    <FaCode /> <span>Código</span>
                  </a>
                )}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

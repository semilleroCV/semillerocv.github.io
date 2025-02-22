"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Navbar, Footer } from "@/components";
import { MdSwipeVertical } from "react-icons/md";

// Register GSAP plugins once.
gsap.registerPlugin(ScrollTrigger);

/* ------------------------------- Subcomponents ------------------------------ */

// Scroll up icon shown when at the top
const ScrollUpIcon: React.FC = () => (
  <div
    className="fixed top-32 left-1/2 transform -translate-x-1/2 p-6 bg-teal-500 rounded-full shadow-lg animate-bounce z-50"
    aria-hidden="true"
  >
    <MdSwipeVertical className="text-white text-4xl" />
  </div>
);

// Progress bar indicating scroll progress
const ProgressBar: React.FC<{ progress: number }> = React.memo(({ progress }) => (
  <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-800" aria-hidden="true">
    <div
      className="h-full bg-teal-500 transition-all duration-75 ease-linear"
      style={{ width: `${progress * 100}%` }}
    />
  </div>
));

// Simple Section container
const Section: React.FC<{ children: React.ReactNode }> = React.memo(({ children }) => (
  <div className="py-12 md:py-20 lg:py-32 text-center">{children}</div>
));

// Gallery component for displaying a grid of images
const Gallery: React.FC<{ images: string[] }> = React.memo(({ images }) => {
  return (
    <div className="px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, i) => (
          <div
            key={src}
            className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl hover:scale-105 hover:shadow-teal-700 transition-all duration-300"
          >
            <Image src={src} alt={`Gallery image ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
});

// Alternative Gallery layout for different image sets
const Gallery2: React.FC<{ images: string[] }> = React.memo(({ images }) => {
  return (
    <div className="px-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <div
            key={src}
            className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:scale-105 hover:shadow-teal-900 transition-all duration-300"
          >
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              placeholder="blur"
              blurDataURL="/placeholder.png"
            />
          </div>
        ))}
      </div>
    </div>
  );
});

/* -------------------------- Main Component -------------------------- */

// Constant image sets (won't trigger re-renders)
const images = [
  "/image/galeria/1.webp",
  "/image/galeria/2.webp",
  "/image/galeria/3.webp",
  "/image/galeria/4.webp",
  "/image/galeria/5.webp",
  "/image/galeria/6.webp",
  "/image/galeria/7.webp",
  "/image/galeria/8.webp",
  "/image/galeria/13.webp",
  "/image/galeria/16.webp",
  "/image/galeria/42.webp",
  "/image/galeria/43.webp",
  "/image/galeria/44.webp",
  "/image/galeria/45.webp",
  "/image/galeria/36.webp",
  "/image/galeria/47.webp",
  "/image/galeria/48.webp",
  "/image/galeria/49.webp",
  "/image/galeria/50.webp",
  "/image/galeria/51.webp",
];

const images2 = [
  "/image/galeria/9.webp",
  "/image/galeria/10.webp",
  "/image/galeria/11.webp",
  "/image/galeria/12.webp",
  "/image/galeria/17.webp",
  "/image/galeria/18.webp",
  "/image/galeria/21.webp",
  "/image/galeria/24.webp",
  "/image/galeria/25.webp",
  "/image/galeria/26.webp",
  "/image/galeria/27.webp",
  "/image/galeria/28.webp",
  "/image/galeria/29.webp",
  "/image/galeria/30.webp",
  "/image/galeria/32.webp",
];

const images3 = [
  "/image/galeria/20.webp",
  "/image/galeria/33.webp",
  "/image/galeria/34.webp",
  "/image/galeria/35.webp",
  "/image/galeria/39.webp",
  "/image/galeria/41.webp",
  "/image/galeria/40.webp",
  "/image/galeria/38.webp",
  "/image/galeria/23.webp",
];

export default function Home() {
  const [progress, setProgress] = useState(0);
  // Show scroll icon when user is at the top (progress === 0)
  const [isAtTop, setIsAtTop] = useState(true);

  // Initialize Lenis and GSAP animations once the component mounts.
  useEffect(() => {
    // Detect low-end devices to avoid heavy animations
    if (window.navigator.hardwareConcurrency <= 2) return;

    // Setup Lenis for smooth scrolling
    const lenis = new Lenis({ lerp: 0.07 });
    lenis.on("scroll", ({ progress }: { progress: number }) => {
      setProgress(progress);
      ScrollTrigger.update();

      // Show scroll icon when user is at the very top (progress is zero)
      setIsAtTop(progress === 0);
    });

    // Start the animation loop
    let animationFrameId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };
    animationFrameId = requestAnimationFrame(raf);

    // GSAP: Reveal animations for elements with the "reveal" class
    const revealTexts = document.querySelectorAll(".reveal");
    revealTexts.forEach((elem) => {
      const textElem = elem as HTMLElement;
      const splitText = new SplitType(textElem);
      const triggerElement = textElem.parentElement;
      if (triggerElement) {
        gsap.from(splitText.words, {
          opacity: 0,
          ease: "none",
          stagger: 0.1,
          duration: 1,
          inmediateRender: false,
          scrollTrigger: {
            trigger: triggerElement,
            start: "center center",
            end: () => `+=${window.innerHeight * 5}px`,
            scrub: true,
            pin: true,
          },
        });
      }
    });

    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-black">
      <ProgressBar progress={progress} />
      <Navbar />
      {isAtTop && <ScrollUpIcon />}

      <Section>
        <h1 className="reveal text-lg md:text-xl lg:text-4xl font-bold text-white text-center px-4">
          En 2024, exploramos y profundizamos en la visión por computadora. Este es un resumen visual de las sesiones que inspiraron el aprendizaje y la innovación.
        </h1>
      </Section>

      <Gallery images={images} />

      <Section>
        <h1 className="reveal text-lg md:text-xl lg:text-4xl font-bold text-white text-center px-4">
          Nos apasiona compartir los últimos avances en Deep Learning. Estas son algunas imágenes de nuestras sesiones de estudio y de nuestra participación en U24Fest.
        </h1>
      </Section>

      <Gallery2 images={images2} />

      <Section>
        <h1 className="reveal text-lg md:text-xl lg:text-4xl font-bold text-white text-center px-4">
          En HoCV, creamos un espacio para compartir, colaborar y crecer juntos como equipo, fortaleciendo la comunidad y el aprendizaje colectivo.
        </h1>
      </Section>

      <Gallery2 images={images3} />

      <Footer />
    </main>
  );
}

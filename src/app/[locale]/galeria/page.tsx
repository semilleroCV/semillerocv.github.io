"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Navbar, Footer } from "@/components";
import { MdSwipeVertical } from "react-icons/md";
import { useTranslations } from "next-intl";

// Register GSAP plugins
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
ScrollUpIcon.displayName = "ScrollUpIcon";

// Progress bar indicating scroll progress
const ProgressBar: React.FC<{ progress: number }> = React.memo(({ progress }) => (
  <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-800" aria-hidden="true">
    <div
      className="h-full bg-teal-500 transition-all duration-75 ease-linear"
      style={{ width: `${progress * 100}%` }}
    />
  </div>
));
ProgressBar.displayName = "ProgressBar";

// Simple Section container
const Section: React.FC<{ children: React.ReactNode }> = React.memo(({ children }) => (
  <div className="py-12 md:py-20 lg:py-32 text-center">{children}</div>
));
Section.displayName = "Section";

// Gallery component for images
const Gallery: React.FC<{ images: string[] }> = React.memo(({ images }) => (
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
));
Gallery.displayName = "Gallery";

/* -------------------------- Main Component -------------------------- */

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
  const t = useTranslations("Galeria");
  const containerRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    // Avoid heavy animations on low-end devices
    if (window.navigator.hardwareConcurrency <= 2) return;

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({ lerp: 0.07 });
    lenis.on("scroll", ({ progress }: { progress: number }) => {
      setProgress(progress);
      ScrollTrigger.update();
      setIsAtTop(progress === 0);
    });

    let animationFrameId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };
    animationFrameId = requestAnimationFrame(raf);

    // Scope GSAP animations using gsap.context tied to the containerRef
    const ctx = gsap.context(() => {
      // Select only elements within this component
      const revealElements = containerRef.current?.querySelectorAll(".reveal") || [];
      revealElements.forEach((elem) => {
        const splitText = new SplitType(elem as HTMLElement);
        gsap.from(splitText.words, {
          opacity: 0,
          ease: "none",
          stagger: 0.1,
          duration: 1,
          scrollTrigger: {
            trigger: elem as HTMLElement,
            start: "center center",
            end: () => `+=${window.innerHeight * 5}px`,
            scrub: true,
            pin: true,
          },
        });
      });
    }, containerRef);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main ref={containerRef} className="bg-black">
      <ProgressBar progress={progress} />
      <Navbar />
      {isAtTop && <ScrollUpIcon />}

      <Section>
        <h1 className="reveal text-lg md:text-xl lg:text-4xl font-bold text-white text-center px-4">
          {t("title1")}
        </h1>
      </Section>

      <Gallery images={images} />

      <Section>
        <h1 className="reveal text-lg md:text-xl lg:text-4xl font-bold text-white text-center px-4">
          {t("title2")}
        </h1>
      </Section>

      <Gallery images={images2} />

      <Section>
        <h1 className="reveal text-lg md:text-xl lg:text-4xl font-bold text-white text-center px-4">
          {t("title3")}
        </h1>
      </Section>

      <Gallery images={images3} />

      <Footer />
    </main>
  );
}

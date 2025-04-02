"use client";

import { Button, Typography } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Reem_Kufi_Ink } from "next/font/google";
import Lenis from "lenis";
import dynamic from 'next/dynamic';

const reemKufiInk = Reem_Kufi_Ink({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: false,
  fallback: ['system-ui', 'sans-serif']
});

// The hero animation effects can be loaded dynamically, as they aren't critical for first paint
const HeroAnimationEffects = dynamic(() => import('../components/HeroAnimationEffects'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10 h-full w-full bg-[#003027]"></div>
});

export default function Hero() {
  const [contentReady, setContentReady] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial render - set up smooth transition
    const timer = setTimeout(() => {
      setContentReady(true);
    }, 10); // Very short timeout just to ensure DOM is ready

    // Set up smooth scrolling after initial render
    const scrollTimer = setTimeout(() => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        virtualScroll: (data) => true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }, 100);

    return () => {
      clearTimeout(timer);
      clearTimeout(scrollTimer);
    };
  }, []);

  // Handle image load event
  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const rotateX = (mousePos.y / (typeof window !== 'undefined' ? window.innerHeight : 1) - 0.5) * 10;
  const rotateY = (mousePos.x / (typeof window !== 'undefined' ? window.innerWidth : 1) - 0.5) * 10;
  
  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="
        relative 
        flex 
        min-h-screen 
        w-full 
        items-center 
        justify-center 
        overflow-hidden
        px-4
        sm:px-8
        lg:px-16
        py-12
        
      "
      style={{ perspective: "1000px" }}
    >
      {/* Background Layer with dynamically loaded animations */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#003027]">
        <HeroAnimationEffects />
      </div>

      {/* Main content with fade-in effect */}
      <div
        className={`relative z-10 flex flex-col md:flex-row items-center justify-between h-full w-full max-w-8xl
          rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl border border-white/20 
          px-8 sm:px-12 md:px-16 py-12 transition-opacity duration-700
          ${contentReady ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.2s ease-out, opacity 0.7s ease-in",
        }}
      >
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logos/logo.png"
              alt="Logo"
              width={300}
              height={300}
              className="drop-shadow-xl"
              priority
              loading="eager"
              onLoad={handleImageLoad}
            />
          </div>

          {/* Gradient Heading */}
          <Typography
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            variant="h1"
            className="
              mb-4 
              text-center 
              md:text-left
              text-5xl 
              sm:text-6xl 
              md:text-7xl 
              font-extrabold 
              bg-gradient-to-r 
              from-teal-300 
              to-teal-400
              bg-clip-text 
              text-transparent 
              drop-shadow-md
              md:mr-40
            "
          >
            Hands-on{" "}
            <span>
              <span
                className={`${reemKufiInk.className} text-[1.15em] tracking-wider`}
              >
                C
              </span>
              omputer{" "}
              <span
                className={`${reemKufiInk.className} text-[1.15em] tracking-wider`}
              >
                V
              </span>
              ision
            </span>
          </Typography>

          {/* Subheading */}
          <Typography
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            variant="paragraph"
            className="
              mb-8 
              text-center 
              md:text-left
              text-lg 
              sm:text-xl 
              md:text-2xl 
              text-white 
              font-light 
              leading-relaxed
            "
          >
            Transforma tu visión del mundo: descubre el poder y las
            posibilidades ilimitadas de la visión por computadora.
          </Typography>

          {/* Call to Action Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="sesiones" className="w-full">
              <Button
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                size="lg"
                className="
                  relative 
                  w-full
                  bg-gradient-to-r 
                  from-teal-700 
                  to-teal-900 
                  px-8 sm:px-16 
                  py-4 sm:py-6 
                  text-white
                  text-lg sm:text-xl
                  font-bold 
                  rounded-full 
                  shadow-lg 
                  hover:shadow-teal-500/50
                  hover:scale-105
                  transition-transform 
                  duration-300
                "
              >
                Ver más
              </Button>
            </a>
          </div>
        </div>

        {/* Right Images (Oculto en pantallas pequeñas) */}
        <div className="hidden md:flex md:w-1/2 justify-center md:justify-end mt-8 md:mt-0">
          <div className="grid grid-cols-2 gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <div
                className="
                  relative 
                  overflow-hidden 
                  rounded-lg 
                  shadow-lg 
                  hover:scale-105 
                  transition-transform 
                  duration-300
                "
              >
                <Image
                  src="/logos/image1.jpg"
                  alt="Image 1"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover rounded-lg"
                  sizes="(max-width: 768px) 0vw, 400px"
                  loading="lazy"
                />
              </div>
              <div
                className="
                  relative 
                  overflow-hidden 
                  rounded-lg 
                  shadow-lg 
                  hover:scale-105 
                  transition-transform 
                  duration-300
                "
              >
                <Image
                  src="/image/team.jpeg"
                  alt="Image 3"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
    
            {/* Column 2 */}
            <div
              className="
                relative 
                overflow-hidden 
                rounded-lg 
                shadow-lg 
                hover:scale-105 
                transition-transform 
                duration-300
              "
            >
              <Image
                src="/logos/image4.jpg"
                alt="Image 3"
                width={800}
                height={1600}
                className="w-full h-full object-cover rounded-lg"
              />
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}

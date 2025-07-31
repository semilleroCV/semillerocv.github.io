"use client";

import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
  memo,
} from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components";
import Image from "next/image";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Container, Engine, InteractivityDetect } from "@tsparticles/engine";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

// ─── PARTICLES BACKGROUND ─────────────────────────────────────────────

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

// ─── SESSION CARD COMPONENT ─────────────────────────────────────────────

interface SessionCardProps {
  session: any;
  isActive: boolean;
  isNext: boolean;
  isPrevious: boolean;
  mousePos?: { x: number; y: number };
  index: number;
  onCardClick: (index: number) => void;
}

const SessionCard = ({
  session,
  isActive,
  isNext,
  isPrevious,
  mousePos,
  index,
  onCardClick,
}: SessionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [reflectionPos, setReflectionPos] = useState<{ x: number; y: number }>({
    x: 50,
    y: 50,
  });
  // New state to trigger the "enter" animation effect.
  const [entering, setEntering] = useState(false);
  // Reference to track if touch is a tap or swipe
  const isTouchMoveRef = useRef(false);

  const router = useRouter();

  const variants = {
    active: {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 30,
    },
    next: {
      x: "50vw",
      y: 0,
      scale: 0.8,
      rotate: 15,
      opacity: 0.5,
      filter: "blur(4px)",
      zIndex: 20,
    },
    previous: {
      x: "-50vw",
      y: 0,
      scale: 0.8,
      rotate: -15,
      opacity: 0.5,
      filter: "blur(4px)",
      zIndex: 20,
    },
    hidden: {
      x: 0,
      y: 0,
      scale: 0.6,
      rotate: 0,
      opacity: 0,
      filter: "blur(8px)",
      zIndex: 10,
    },
  };

  // Compute transform based on hover and mouse position.
  const scale = isHovered ? 1.02 : 1;
  let cardTransform = `scale(${scale})`;
  if (isActive && mousePos) {
    const rotateX = ((mousePos.y / window.innerHeight) - 0.5) * 10;
    const rotateY = ((mousePos.x / window.innerWidth) - 0.5) * 10;
    cardTransform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
  }

  // Handle click:
  // - If not active, simply set it active.
  // - If active, trigger the "enter" animation effect.
  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    // Only process click on non-touch devices or when it's a genuine tap (not part of swipe)
    if ('ontouchstart' in window && e.type === 'click') {
      return; // Skip click events on touch devices as we'll handle taps via touch events
    }

    if (isActive && !entering) {
      setEntering(true);
    } else if (!isActive) {
      onCardClick(index);
    }
  };

  // Touch event handlers for the card
  const handleTouchStart = () => {
    isTouchMoveRef.current = false;
  };

  const handleTouchMove = () => {
    isTouchMoveRef.current = true;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    // Prevent default to avoid any conflicts with click events
    e.preventDefault();

    // Only handle as tap if there was no significant movement
    if (!isTouchMoveRef.current) {
      if (isActive && !entering) {
        setEntering(true);
      } else if (!isActive) {
        onCardClick(index);
      }
    }
  };

  // For the active card, disable pointer events on the outer container.
  const outerPointerEvents = isActive ? "none" : "auto";

  return (
    <motion.div
      initial="hidden"
      animate={
        // If the card is in the middle of the enter animation, keep its position static.
        entering
          ? "active"
          : isActive
          ? "active"
          : isNext
          ? "next"
          : isPrevious
          ? "previous"
          : "hidden"
      }
      variants={variants}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex items-center justify-center"
      style={{
        zIndex: isActive ? 30 : isNext || isPrevious ? 20 : 10,
        pointerEvents: outerPointerEvents,
      }}
    >
      <motion.div
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          setReflectionPos({ x, y });
        }}
        // Here we conditionally animate the inner card.
        animate={
          entering
            ? { scale: 20, opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }
            : {}
        }
        onAnimationComplete={() => {
          if (entering) {
            router.push(`/sesiones/sesion${session.id}`);
          }
        }}
        className="relative w-[60vw] max-w-2xl aspect-square bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 transform preserve-3d stamp-card cursor-pointer group"
        style={{
          // Use the computed transform only when not animating the enter effect.
          transform: entering ? undefined : cardTransform,
          transition: "transform 0.2s ease-out",
          pointerEvents: "auto",
        }}
      >
        {/* Stamp-like border decoration */}
        <div className="absolute inset-0 stamp-border z-10">
          <div className="absolute inset-[12px] border-[1px] border-dashed border-white/20 rounded-lg" />
          <div className="absolute inset-[16px] border-[2px] border-white/10 rounded-lg" />
          <StampBorder />
        </div>

        <div className="relative w-full h-full z-20">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={session.image}
              alt={session.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority
              quality={100}
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 800px"
              loading="eager"
              style={{ objectFit: "cover", filter: "brightness(1.2)" }}
              unoptimized
            />
          </div>

          {/* Lighter dark overlay for improved brightness */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent group-hover:from-black/40 transition-all duration-500 z-20" />
        </div>

        {/* Reflection overlay with reduced intensity */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-40"
          style={{
            background: isHovered
              ? `radial-gradient(circle at ${reflectionPos.x}% ${reflectionPos.y}%, rgba(255,255,255,0.2), transparent 70%)`
              : "none",
            opacity: isHovered ? 1 : 0,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

// ─── SESIONES PAGE ─────────────────────────────────────────────

export default function SesionesPage() {
  const t = useTranslations("Sesiones");
  const SESSIONS = [
    {
      id: 1,
      title: t("session1_title"),
      location: t("session1_location"),
      image: "/image/posters/4.webp",
      description: t("session1_description"),
    },
    {
      id: 2,
      title: t("session2_title"),
      location: t("session2_location"),
      image: "/image/posters/6.png",
      description: t("session2_description"),
    },
    {
      id: 3,
      title: t("session3_title"),
      location: t("session3_location"),
      image: "/image/posters/8.png",
      description: t("session3_description"),
    },
    {
      id: 4,
      title: t("session4_title"),
      location: t("session4_location"),
      image: "/image/posters/10.png",
      description: t("session4_description"),
    },
    {
      id: 5,
      title: t("session5_title"),
      location: t("session5_location"),
      image: "/image/posters/12.png",
      description: t("session5_description"),
    },
    {
      id: 6,
      title: t("session6_title"),
      location: t("session6_location"),
      image: "/image/posters/13.png",
      description: t("session6_description"),
    },
    {
      id: 7,
      title: t("session7_title"),
      location: t("session7_location"),
      image: "/image/posters/14.png",
      description: t("session7_description"),
    },
    {
      id: 8,
      title: t("session8_title"),
      location: t("session8_location"),
      image: "/image/posters/15.png",
      description: t("session8_description"),
    },
    {
      id: 9,
      title: t("session9_title"),
      location: t("session9_location"),
      image: "/image/posters/16.png",
      description: t("session9_description"),
    },
    {
      id: 10,
      title: t("session10_title"),
      location: t("session10_location"),
      image: "/image/posters/17.png",
      description: t("session10_description"),
    },
    {
      id: 11,
      title: t("session11_title"),
      location: t("session11_location"),
      image: "/image/posters/18.png",
      description: t("session11_description"),
    },
    {
      id: 12,
      title: t("session12_title"),
      location: t("session12_location"),
      image: "/image/posters/19.png",
      description: t("session12_description"),
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isClient, setIsClient] = useState(false);

  const [mousePos, setMousePos] = useState(() =>
    typeof window !== "undefined"
      ? { x: window.innerWidth / 2, y: window.innerHeight / 2 }
      : { x: 0, y: 0 }
  );

  // Refs to track touch events for swipe navigation
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const touchEndYRef = useRef(0);
  const isSwiping = useRef(false);

  useEffect(() => {
    setIsClient(true);
    setMousePos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleIndicatorClick = useCallback(
    (index: number) => {
      if (index !== currentIndex) {
        setCurrentIndex(index);
      }
    },
    [currentIndex]
  );

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling) return;

      setIsScrolling(true);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      const direction = e.deltaY > 0 ? 1 : -1;
      setCurrentIndex((prevIndex) => {
        const newIndex = Math.max(
          0,
          Math.min(prevIndex + direction, SESSIONS.length - 1)
        );
        return newIndex !== prevIndex ? newIndex : prevIndex;
      });

      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    },
    [isScrolling]
  );

  // Improved touch event handlers for swipe navigation
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    isSwiping.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartXRef.current) return;

    touchEndXRef.current = e.touches[0].clientX;
    touchEndYRef.current = e.touches[0].clientY;

    // Calculate horizontal and vertical distance
    const xDiff = touchStartXRef.current - touchEndXRef.current;
    const yDiff = touchStartYRef.current - touchEndYRef.current;

    // If horizontal swipe is greater than vertical movement and exceeds threshold,
    // mark as swiping to prevent card click
    if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) > 30) {
      isSwiping.current = true;

      // Prevent default to avoid page scrolling during intentional swipe
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isSwiping.current) return;

    const diff = touchStartXRef.current - touchEndXRef.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swiped left => next slide
        setCurrentIndex((prev) =>
          Math.min(prev + 1, SESSIONS.length - 1)
        );
      } else {
        // Swiped right => previous slide
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }

    // Reset values
    touchStartXRef.current = 0;
    touchEndXRef.current = 0;
    isSwiping.current = false;
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  const backgroundGradients = useMemo(
    () => (
      <>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-teal-950 to-black" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/50 via-teal-900/50 to-black/50"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(20,184,166,0.2), transparent 70%)",
          }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
        />
      </>
    ),
    []
  );

  const sessionCards = useMemo(
    () =>
      SESSIONS.map((session, index) => (
        <SessionCard
          key={session.id}
          session={session}
          index={index}
          onCardClick={(i) => setCurrentIndex(i)}
          isActive={index === currentIndex}
          isNext={index === currentIndex + 1}
          isPrevious={index === currentIndex - 1}
          mousePos={mousePos}
        />
      )),
    [currentIndex, mousePos]
  );

  const progressIndicators = useMemo(
    () =>
      SESSIONS.map((_, index) => (
        <motion.button
          key={index}
          onClick={() => handleIndicatorClick(index)}
          className="w-2 h-2 rounded-full bg-white/20 cursor-pointer transition-transform hover:scale-150"
          animate={{
            scale: index === currentIndex ? 1.5 : 1,
            backgroundColor:
              index === currentIndex
                ? "rgb(20 184 166 / 0.8)"
                : "rgb(255 255 255 / 0.2)",
          }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.8 }}
          aria-label={`Go to slide ${index + 1}`}
        />
      )),
    [currentIndex, handleIndicatorClick]
  );

  if (!isClient) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-black">
        <motion.div
          className="fixed inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {backgroundGradients}
        </motion.div>

        <ParticlesBackground />

        <div className="fixed top-0 h-screen w-full overflow-hidden">
          <div
            className="relative h-full w-full"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {sessionCards}
          </div>
        </div>

        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {progressIndicators}
        </div>
      </div>

      <style jsx global>{`
        .stamp-card {
          position: relative;
          isolation: isolate;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1),
            0 0 0 4px rgba(255, 255, 255, 0.05),
            0 0 10px rgba(13, 148, 136, 0.1);
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .stamp-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            transparent 0%,
            rgba(255, 255, 255, 0.05) 50%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .stamp-card:hover::after {
          opacity: 1;
        }

        /* Disable pull-to-refresh and overscroll effects on mobile */
        html,
        body {
          overscroll-behavior: none;
          touch-action: none;
        }
      `}</style>
    </>
  );
}

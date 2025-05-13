import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { useIsMobile } from "@/hooks/useIsMobile";

interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  web?: string;
  scholar?: string;
}

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  socialLinks: SocialLinks;
}

const cardVariants = {
  rest: { scale: 1, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)" },
  hover: {
    scale: 1.05,
    boxShadow: "0 15px 25px rgba(6, 240, 213, 0.7)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const overlayVariants = {
  rest: { y: "100%" },
  hover: {
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const contentVariants = {
  rest: { y: 20, opacity: 0 },
  hover: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.2, duration: 0.4, ease: "easeOut" },
  },
};

const iconsVariants = {
  rest: { opacity: 0, y: 10 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, staggerChildren: 0.1 },
  },
};

export function TeamCard({
  name,
  role,
  image,
  socialLinks,
}: TeamCardProps) {
  const isMobile = useIsMobile();
  return (
    <motion.div
      initial="rest"
      {...(!isMobile && {whileHover: "hover", whileTap: "hover"})}
      {...(isMobile && {whileInView: "hover", viewport: {once: false, amount: 0.5}})}
      animate="rest"
      variants={cardVariants}
      className="relative w-full sm:w-80 h-96 mx-auto rounded-xl overflow-hidden bg-black"
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
      />

      <motion.div
        variants={overlayVariants}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"
      />

      <motion.div
        variants={contentVariants}
        className="absolute bottom-16 left-4 right-4 text-white"
      >
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm mt-1">{role}</p>
      </motion.div>

      <motion.div
        variants={iconsVariants}
        className="absolute bottom-4 left-4 flex space-x-3 text-white"
      >
        {socialLinks.github && (
          <motion.a variants={iconsVariants} href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6" />
          </motion.a>
        )}
        {socialLinks.linkedin && (
          <motion.a variants={iconsVariants} href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6" />
          </motion.a>
        )}
        {socialLinks.twitter && (
          <motion.a variants={iconsVariants} href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6" />
          </motion.a>
        )}
        {socialLinks.web && (
          <motion.a variants={iconsVariants} href={socialLinks.web} target="_blank" rel="noopener noreferrer">
            <TfiWorld className="w-6 h-6" />
          </motion.a>
        )}
        {socialLinks.scholar && (
          <motion.a variants={iconsVariants} href={socialLinks.scholar} target="_blank" rel="noopener noreferrer">
            <FaGoogleScholar className="w-6 h-6" />
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
}

export default TeamCard;

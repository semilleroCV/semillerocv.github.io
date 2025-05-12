import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGoogleScholar }  from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";

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

export function TeamCard({ name, role, image, socialLinks }: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative w-80 h-96 rounded-xl overflow-hidden shadow-lg"
    >
      {/* Foto de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Contenido (nombre y rol) */}
      <div className="relative z-10 flex flex-col justify-end h-full p-4 text-white">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm mb-4">{role}</p>

        {/* Íconos en la parte inferior */}
        <div className="flex space-x-4">
          {socialLinks.github && (
            <motion.a
              whileHover={{ y: -2 }}
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaGithub className="w-7 h-7" />
            </motion.a>
          )}
          {socialLinks.linkedin && (
            <motion.a
              whileHover={{ y: -2 }}
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaLinkedin className="w-7 h-7" />
            </motion.a>
          )}
          {socialLinks.twitter && (
            <motion.a
              whileHover={{ y: -2 }}
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaTwitter className="w-7 h-7" />
            </motion.a>
          )}
          {socialLinks.web && (
            <motion.a
              whileHover={{ y: -2 }}
              href={socialLinks.web}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <TfiWorld className="w-7 h-7" />
            </motion.a>
          )}
          {socialLinks.scholar && (
            <motion.a
              whileHover={{ y: -2 }}
              href={socialLinks.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaGoogleScholar className="w-7 h-7" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default TeamCard;

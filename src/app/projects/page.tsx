"use client"
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/components/projects";

export default function FinalProjects() {
  const [selected, setSelected] = useState(0);
  const proj = projects[selected];

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Big background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={proj.background}
          alt={proj.title}
          fill
          className="object-cover filter brightness-50"
        />
      </div>

      {/* Detail panel */}
      <div className="max-w-4xl mx-auto pt-24 pb-12 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-4">{proj.title}</h1>
        <p className="text-lg mb-6">{proj.description}</p>
        <div className="space-x-4">
          {proj.demoUrl && (
            <a
              href={proj.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-teal-500 rounded hover:bg-teal-600 transition"
            >
              Live Demo
            </a>
          )}
          {proj.repoUrl && (
            <a
              href={proj.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition"
            >
              Source Code
            </a>
          )}
        </div>
      </div>

      {/* Character-select row */}
      <div className="absolute bottom-8 w-full">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-10 gap-2">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                className="relative cursor-pointer rounded-lg overflow-hidden border-2"
                onClick={() => setSelected(i)}
                initial={{ scale: 1 }}
                animate={{
                  scale: selected === i ? 1.1 : 1,
                  borderColor: selected === i ? "#06b6d4" : "transparent",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  width={64}
                  height={64}
                  className="object-cover"
                />
                {selected === i && (
                  <div className="absolute inset-0 ring-2 ring-teal-300 rounded-lg pointer-events-none" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

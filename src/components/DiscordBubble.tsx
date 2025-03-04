"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDiscord } from 'react-icons/fa';

const DiscordBubble = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  // Add a pulsing effect every few seconds to draw attention
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPulse(true);
      setTimeout(() => setShowPulse(false), 2000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1 
      }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute bottom-20 right-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl whitespace-nowrap shadow-lg"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative">
              ¡Únete a nuestra comunidad!
              <div className="absolute -bottom-2 right-4 w-3 h-3 bg-gradient-to-r from-indigo-600 to-purple-600 transform rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.a
        href="https://discord.gg/MkCpdsHZzJ"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Multiple glowing rings */}
        {showPulse && (
          <>
            <motion.div
              className="absolute inset-0 bg-indigo-500 rounded-full blur-md"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 bg-purple-500 rounded-full blur-md"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.8, opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            />
          </>
        )}
        
        {/* Permanent glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-lg opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Main button */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:shadow-[0_0_30px_rgba(79,70,229,0.8)] transition-shadow duration-300">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1]
            }}
          >
            <FaDiscord className="w-8 h-8 md:w-10 md:h-10 text-white/90" />
          </motion.div>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default DiscordBubble; 
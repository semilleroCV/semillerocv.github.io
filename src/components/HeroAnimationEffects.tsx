"use client";

import { useEffect, useState } from "react";

export default function HeroAnimationEffects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the animations immediately, but with a smooth fade-in
    setIsVisible(true);
    
    return () => {};
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_10%,#003027_5%,#000_80%)]"></div>

      {/* Animated blobs - with optimized performance */}
      <div 
        className="absolute top-0 left-0 w-72 h-72 bg-teal-700 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        style={{
          animation: 'float 12s ease-in-out infinite',
          transform: 'translateZ(0)', // Force hardware acceleration
          willChange: 'transform', // Hint to browser for optimizations
        }}
      ></div>
      <div 
        className="absolute top-0 right-0 w-72 h-72 bg-green-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        style={{
          animation: 'float 10s ease-in-out infinite 2s',
          transform: 'translateZ(0)', // Force hardware acceleration
          willChange: 'transform', // Hint to browser for optimizations
        }}
      ></div>
      <div 
        className="absolute bottom-0 left-20 w-72 h-72 bg-cyan-800 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        style={{
          animation: 'float 14s ease-in-out infinite 4s',
          transform: 'translateZ(0)', // Force hardware acceleration
          willChange: 'transform', // Hint to browser for optimizations
        }}
      ></div>
    </div>
  );
} 
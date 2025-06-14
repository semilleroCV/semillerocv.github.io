"use client";

import React, { useState } from "react";

interface LumaEmbedProps {
  /** lu.ma event ID – defaults to the one you were hard-coding */
  eventId?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  loadingFallback?: React.ReactNode;
}

export default function LumaEmbed({
  eventId = "evt-jsJQsQ2TVHT0SnK",
  width = "100%",
  height = 450,
  className = "",
  loadingFallback = (
    <div className="flex items-center justify-center h-64">
      Loading event…
    </div>
  ),
}: LumaEmbedProps) {

  const embedUrl = `https://lu.ma/embed/event/${eventId}/simple`;

  return (
    <div
      className={`relative ${className}`}
      style={{ width, height, minHeight: typeof height === "number" ? height : undefined }}
    >
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        frameBorder={0}
        className="transition-opacity border border-[#bfcbda88] rounded relative" 
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}

      />
    </div>
  );
}

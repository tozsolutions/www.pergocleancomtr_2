"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  before: any;
  after: any;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({ before, after, beforeLabel = "Önce", afterLabel = "Sonra", className }: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full aspect-[4/3] overflow-hidden rounded-3xl cursor-ew-resize select-none", className)}
      onMouseMove={(e) => isDragging && handleMove(e.clientX)}
      onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
      onTouchEnd={() => setIsDragging(false)}
    >
      <Image src={after} alt={afterLabel} fill className="object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <Image src={before} alt={beforeLabel} fill className="object-cover" style={{ minWidth: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }} />
      </div>
      <div className="absolute inset-0 flex items-center" style={{ left: `${position}%`, transform: "translateX(-50%)" }}>
        <div className="relative flex flex-col items-center">
          <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white/50" />
          <motion.div
            className="relative w-12 h-12 rounded-full flex items-center justify-center cursor-ew-resize z-10"
            style={{ background: "var(--champagne)" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0}
            onDrag={(e, info) => {
              if (!containerRef.current) return;
              const rect = containerRef.current.getBoundingClientRect();
              const newX = position * rect.width / 100 + info.delta.x;
              const percent = Math.max(0, Math.min(100, (newX / rect.width) * 100));
              setPosition(percent);
            }}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-white/50" />
              <div className="absolute w-0.5 h-4 bg-white/50" />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-3 left-3 rounded-full bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">{beforeLabel}</div>
      <div className="absolute top-3 right-3 rounded-full bg-[var(--champagne)]/80 px-3 py-1.5 text-xs font-semibold text-[var(--deep)] backdrop-blur-sm">{afterLabel}</div>
    </div>
  );
}
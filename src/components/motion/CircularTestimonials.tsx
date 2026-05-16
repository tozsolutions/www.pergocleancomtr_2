"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src?: string;
}

interface CircularTestimonialsProps {
  testimonials: Testimonial[];
}

function calculateGap(width: number) {
  const minWidth = 1024, maxWidth = 1456, minGap = 60, maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export function CircularTestimonials({ testimonials }: CircularTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonialsLength = testimonials.length;
  const activeTestimonial = testimonials[activeIndex];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % testimonialsLength);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4">
      <div ref={containerRef} className="relative h-64 flex items-center justify-center mb-8" style={{ perspective: "1000px" }}>
        {testimonials.map((t, index) => {
          const gap = calculateGap(1200);
          const isActive = index === activeIndex;
          const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
          const isRight = (activeIndex + 1) % testimonialsLength === index;

          let xPos = 0, yPos = 0, scaleVal = 0.8, rotateVal = 0, zIdx = 1, opac = 0, pointerEv = "none";
          if (isActive) { xPos = 0; yPos = 0; scaleVal = 1; rotateVal = 0; zIdx = 3; opac = 1; pointerEv = "auto"; }
          else if (isLeft) { xPos = -gap; yPos = -(gap * 0.8); scaleVal = 0.85; rotateVal = 15; zIdx = 2; opac = 1; pointerEv = "auto"; }
          else if (isRight) { xPos = gap; yPos = -(gap * 0.8); scaleVal = 0.85; rotateVal = -15; zIdx = 2; opac = 1; pointerEv = "auto"; }

          return (
            <div key={index} className="absolute inset-0 flex items-center justify-center" style={{ zIndex: zIdx, opacity: opac, pointerEvents: pointerEv as any, transform: `translateX(${xPos}px) translateY(${yPos}px) scale(${scaleVal}) rotateY(${rotateVal}deg)`, transition: "all 0.8s cubic-bezier(.4,2,.3,1)" }}>
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-premium">
                {t.src ? (
                  <img src={t.src} alt={t.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[var(--primary)] to-[var(--deep)] flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold text-white">{t.name[0]}</div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center space-y-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h3 className="font-bold text-xl text-foreground">{activeTestimonial.name}</h3>
            <p className="text-sm text-muted-foreground">{activeTestimonial.designation}</p>
            <p className="mt-3 text-lg leading-relaxed text-foreground/80">{activeTestimonial.quote}</p>
            <div className="mt-2 flex justify-center gap-1">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} viewBox="0 0 24 24" className="h-5 w-5" fill="var(--champagne)"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-4 pt-4">
          <button onClick={handlePrev} onMouseEnter={() => setHoverPrev(true)} onMouseLeave={() => setHoverPrev(false)}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all" style={{ backgroundColor: hoverPrev ? "var(--aqua)" : "var(--deep)" }}>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="white" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button onClick={handleNext} onMouseEnter={() => setHoverNext(true)} onMouseLeave={() => setHoverNext(false)}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all" style={{ backgroundColor: hoverNext ? "var(--aqua)" : "var(--deep)" }}>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="white" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
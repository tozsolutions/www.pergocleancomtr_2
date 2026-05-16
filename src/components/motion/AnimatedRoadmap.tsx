"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RoadmapStep {
  title: string;
  description?: string;
}

interface AnimatedRoadmapProps {
  steps: RoadmapStep[];
  className?: string;
}

export function AnimatedRoadmap({ steps, className = "" }: AnimatedRoadmapProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-[var(--aqua)] via-[var(--champagne)] to-transparent" />
      <div className="space-y-10">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
            className="relative pl-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 200, damping: 12 }}
              className="absolute left-3 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--aqua)] text-xs font-bold text-white shadow-glow"
            >
              {i + 1}
            </motion.div>
            <h3 className="text-lg font-semibold">{step.title}</h3>
            {step.description && <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

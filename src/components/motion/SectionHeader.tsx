"use client";

import { BlurFade } from "@/components/motion/BlurFade";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeader({ label, title, description, className = "", light }: SectionHeaderProps) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <BlurFade delay={0.1} duration={0.6}>
        {label && (
          <div className={`text-xs font-semibold uppercase tracking-[0.28em] ${light ? "text-white/70" : "text-[var(--aqua)]"}`}>{label}</div>
        )}
        <h2 className={`mt-3 text-balance text-4xl font-bold md:text-5xl ${light ? "text-white" : ""}`}>{title}</h2>
        {description && (
          <p className={`mt-4 text-base ${light ? "text-white/75" : "text-muted-foreground"}`}>{description}</p>
        )}
      </BlurFade>
    </div>
  );
}

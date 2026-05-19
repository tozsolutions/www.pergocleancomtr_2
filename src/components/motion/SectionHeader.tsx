"use client";

import { BlurFade } from "@/components/motion/BlurFade";

interface SectionHeaderProps {
  label?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  className?: string;
  light?: boolean;
  size?: "sm" | "md" | "lg";
}

export function SectionHeader({ label, title, description, className = "", light, size = "md" }: SectionHeaderProps) {
  const titleSizes = {
    sm: "text-2xl md:text-3xl lg:text-4xl",
    md: "text-3xl md:text-4xl lg:text-5xl",
    lg: "text-5xl md:text-6xl"
  };

  return (
    <div className={`mx-auto max-w-4xl text-center ${className}`}>
      <BlurFade delay={0.1} duration={0.6}>
        {label && (
          <div className={`font-semibold uppercase tracking-[0.28em] text-lg ${light ? "text-white/70" : "text-[var(--aqua)]"}`}>{label}</div>
        )}
        <h2 className={`mt-3 text-balance font-bold leading-tight ${light ? "text-white" : ""} ${titleSizes[size]}`}>{title}</h2>
        {description && (
          <p className={`mt-4 text-base ${light ? "text-white/75" : "text-muted-foreground"}`}>{description}</p>
        )}
      </BlurFade>
    </div>
  );
}

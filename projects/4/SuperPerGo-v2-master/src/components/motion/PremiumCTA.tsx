"use client";

import { MagneticButton } from "@/components/motion/MagneticButton";

interface PremiumCTAProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export function PremiumCTA({ href = "#fiyat", children, variant = "primary", className = "" }: PremiumCTAProps) {
  if (variant === "secondary") {
    return (
      <MagneticButton href={href} className={className}>
        {children}
      </MagneticButton>
    );
  }

  if (variant === "outline") {
    return (
      <a
        href={href}
        className={`inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-aqua-grad px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:scale-105 ${className}`}
    >
      {children}
    </a>
  );
}

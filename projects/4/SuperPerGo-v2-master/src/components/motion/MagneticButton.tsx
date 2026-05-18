"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  strength?: number;
}

export function MagneticButton({ children, href = "#fiyat", className = "", strength = 0.4 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={{ x: offset.x, y: offset.y, scale: 1 + Math.sqrt(offset.x * offset.x + offset.y * offset.y) * 0.003 }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setOffset({
          x: (e.clientX - rect.left - rect.width / 2) * strength,
          y: (e.clientY - rect.top - rect.height / 2) * strength,
        });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
    >
      <a href={href} className="inline-flex items-center justify-center rounded-full bg-aqua-grad px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:scale-105">
        {children}
      </a>
    </motion.div>
  );
}
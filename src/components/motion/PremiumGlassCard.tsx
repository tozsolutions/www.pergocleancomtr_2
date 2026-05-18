"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";

interface PremiumGlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function PremiumGlassCard({ children, className = "", hover = true }: PremiumGlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="h-full"
    >
      <GlowCard className={`h-full ${className}`} customSize={true}>
        {children}
      </GlowCard>
    </motion.div>
  );
}

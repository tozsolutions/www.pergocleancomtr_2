"use client";

import { useEffect, useRef, useContext, createContext, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const MouseContext = createContext({ x: 0, y: 0 });

const socialIcons = [
  { label: "WhatsApp", href: "https://wa.me/905367731404", color: "#25D366", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.7 11.7 0 0 0 12 0C5.4 0 0 5.4 0 12a11.9 11.9 0 0 0 1.7 6.2L0 24l5.9-1.6A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5zM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.5 1 .9-3.4-.2-.4A9.8 9.8 0 1 1 21.8 12 9.9 9.9 0 0 1 12 21.8z"/></svg>
  )},
  { label: "Instagram", href: "https://www.instagram.com/pergoclean.tr", color: "#E1306C", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
  )},
  { label: "LinkedIn", href: "http://linkedin.com/in/pergo-clean-33356a402", color: "#0077B5", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  )},
  { label: "TikTok", href: "https://www.tiktok.com/@pergoclean.tr", color: "#000000", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2a8.5 8.5 0 003.52 5.67 8.22 8.22 0 01-2.4 1 4.3 4.3 0 00.6 7.27 4.3 4.3 0 01-1.95-2.68 4.3 4.3 0 003.54 4.19 8.39 8.39 0 01-5.93 1.63 12.15 12.15 0 008.78 4.81 12.46 12.46 0 01-7.72 2.41A17.46 17.46 0 006.5 18.8 17.46 17.46 0 0125 7.62a12.58 12.58 0 01-5 1.26 4.86 4.86 0 01-1.82-.45V12a8.36 8.36 0 004.12 1.1 12.36 12.36 0 01-3.58.93 8.25 8.25 0 004.44-1.05v-.29a4.71 4.71 0 01-1.73-.71l-.04.02z"/></svg>
  )},
  { label: "YouTube", href: "https://www.youtube.com/@PergoClean", color: "#FF0000", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  )},
  { label: "X", href: "https://x.com/PergoClean", color: "#000000", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.112z"/></svg>
  )},
];

function DockIcon({ icon, href, color }: { icon: React.ReactNode; href: string; color: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mouse = useContext(MouseContext);
  const distance = useMotionValue(Infinity);

  useEffect(() => {
    if (!ref.current || mouse.x === 0) { distance.set(Infinity); return; }
    const iconRect = ref.current.getBoundingClientRect();
    const containerRect = ref.current.parentElement?.getBoundingClientRect();
    if (!containerRect) return;
    const iconCenterX = iconRect.left + iconRect.width / 2;
    const mouseXAbsolute = containerRect.left + mouse.x;
    distance.set(Math.abs(mouseXAbsolute - iconCenterX));
  }, [mouse, distance]);

  const width = useTransform(distance, [0, 100], [60, 48]);
  const springW = useSpring(width, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ width: springW }}
      className="aspect-square rounded-full flex items-center justify-center text-white transition-colors hover:brightness-110"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-7 h-7" style={{ color }}>{icon}</div>
    </motion.a>
  );
}

export function MagneticDock({ className }: { className?: string }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <MouseContext.Provider value={pos}>
      <motion.div
        className={`flex items-center gap-3 p-3 rounded-full ${className}`}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setPos({ x: e.clientX - rect.left, y: 0 });
        }}
        onMouseLeave={() => setPos({ x: 0, y: 0 })}
      >
        {socialIcons.map((s) => (
          <DockIcon key={s.label} icon={s.icon} href={s.href} color={s.color} />
        ))}
      </motion.div>
    </MouseContext.Provider>
  );
}
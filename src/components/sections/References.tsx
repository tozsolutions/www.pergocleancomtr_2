"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/motion/BlurFade";
import Image from "next/image";
import { SectionHeader } from "@/components/motion/SectionHeader";
import { referencesData } from "@/assets";
import { TextScramble } from "@/components/ui/text-scramble";

export function References() {
  return (
    <section id="referanslar" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--aqua)_18%,transparent),transparent_60%)]" />
      <div className="container relative mx-auto px-4">
...
        <SectionHeader
          label="Tamamlanan İşlerimiz"
          title={
            <>
              Türkiye'nin Önde Gelen Markaları{" "}
              <span className="text-[1.21em] text-[#40E0D0] font-semibold">PergoClean</span>'i Tercih Ediyor
            </>
          }
          size="sm"
        />
import { GlowCard } from "@/components/ui/spotlight-card";

// ... inside References function
<div className="mx-auto mt-14 grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
  {referencesData.map((r, i) => (
    <GlowCard key={i} className="group relative">
      <Image src={r.img} alt={`${r.brand} — ${r.service}`} loading="lazy" fill className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--deep)]/95 via-[color:var(--deep)]/30 to-transparent opacity-90 transition group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--champagne)]">{r.location}</div>
        <h3 className="mt-1 text-base font-bold leading-tight md:text-lg">{r.brand}</h3>
        <p className="mt-0.5 text-[11px] text-white/80 md:text-xs">{r.service}</p>
      </div>
    </GlowCard>
  ))}
</div>
      </div>
    </section>
  );
}
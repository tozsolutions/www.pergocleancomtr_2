"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/motion/BlurFade";
import Image from "next/image";
import { referencesData } from "@/assets";
import { TextScramble } from "@/components/ui/text-scramble";

export function References() {
  return (
    <section id="referanslar" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--aqua)_18%,transparent),transparent_60%)]" />
      <div className="container relative mx-auto px-4">
...
        <BlurFade delay={0.1} duration={0.6}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--aqua)]">Referanslarımız</div>
            <h2 className="mt-3 text-balance text-4xl font-bold md:text-5xl">Türkiye'nin Önde Gelen Markaları <TextScramble text="PergoClean" />'i Tercih Ediyor</h2>
            <p className="mt-4 text-base text-muted-foreground">Premium Markaların Tercihi</p>
          </div>
        </BlurFade>

        <div className="mx-auto mt-14 grid max-w-7xl auto-rows-[260px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {referencesData.map((r, i) => (
            <motion.article
              key={r.brand + i}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card shadow-premium ${i === 0 || i === 5 || i === 10 ? "row-span-2" : ""} ${i === 4 || i === 8 ? "col-span-2" : ""}`}
            >
              <Image src={r.img} alt={`${r.brand} — ${r.service}`} loading="lazy" fill className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--deep)]/95 via-[color:var(--deep)]/30 to-transparent opacity-90 transition group-hover:opacity-100" />
              <span className="absolute left-3 top-3 rounded-full bg-[color:var(--champagne)]/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--deep)] shadow-glow">Tamamlandı</span>
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--champagne)]">{r.location}</div>
                <h3 className="mt-1 text-base font-bold leading-tight md:text-lg">{r.brand}</h3>
                <p className="mt-0.5 text-[11px] text-white/80 md:text-xs">{r.service}</p>
              </div>
              <div className="pointer-events-none absolute -inset-x-1/2 -top-1/2 h-[200%] w-[200%] -translate-x-full bg-[linear-gradient(115deg,transparent_40%,rgba(255,255,255,0.18)_50%,transparent_60%)] transition-transform duration-[1200ms] group-hover:translate-x-0" />
            </motion.article>
          ))}
        </div>

        <div className="mt-12 overflow-hidden">
          <div className="flex animate-marquee gap-8" style={{ width: "200%" }}>
            {[...referencesData, ...referencesData].map((r, i) => (
              <div key={i} className="flex-shrink-0 rounded-2xl glass px-6 py-3 text-sm text-white/80">{r.brand} — {r.location}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
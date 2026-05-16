"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ankaraDistricts, antalyaDistricts } from "@/lib/locations";
import { logo } from "@/assets";

export function Footer() {
  const year = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 30, filter: "blur(4px)" },
    animate: isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {},
    transition: { delay, duration: 0.6, ease: "easeOut" as const },
  });

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-border bg-[var(--deep)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--aqua)]/5 to-transparent" />

      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--aqua)]/50 to-transparent" />

      <div className="relative container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, x: -100, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 overflow-hidden"
        >
          <div className="flex animate-marquee gap-12 whitespace-nowrap text-[clamp(3rem,8vw,6rem)] font-black uppercase leading-none tracking-tight text-white/5">
            <span>PergoClean • Bakım • Temizlik • Restorasyon •</span>
            <span>PergoClean • Bakım • Temizlik • Restorasyon •</span>
          </div>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-4">
          <motion.div {...fadeUp(0.1)}>
            <div className="flex items-center gap-3">
              <Image src={logo} alt="PergoClean" width={44} height={44} className="object-contain drop-shadow-[0_0_20px_rgba(40,90,200,0.4)]" />
              <div>
                <div className="text-lg font-bold text-white">PergoClean</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">Bakım • Temizlik • Restorasyon</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">19+ yıllık üretim ve montaj tecrübesinden gelen profesyonel pergola bakım ve restorasyon markası.</p>
          </motion.div>

          <motion.div {...fadeUp(0.2)}>
            <div className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/60 backdrop-blur">Hizmetler</div>
            <ul className="space-y-2 text-sm">
              {["Pergola Kumaş Temizliği", "BioClimatic / RollingRoof", "Wintent — Zip Perde", "Güneş Panel Temizliği", "Mekanik Sistem Bakımı", "LED Arıza & Renk Değişimi"].map((s) => (
                <li key={s} className="text-white/50 transition hover:text-[var(--aqua)]">{s}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp(0.3)}>
            <div className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/60 backdrop-blur">Hizmet Bölgeleri</div>
            <div className="space-y-4 text-xs">
              <div>
                <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--aqua)]">Ankara</div>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-white/50">
                  {ankaraDistricts.slice(0, 8).map((d, i) => (
                    <span key={d.slug}>
                      <Link href={`/bolge/${d.slug}`} className="transition hover:text-[var(--aqua)]">{d.name}</Link>
                      {i < 7 && <span className="ml-1 text-white/20">·</span>}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--aqua)]">Antalya</div>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-white/50">
                  {antalyaDistricts.slice(0, 6).map((d, i) => (
                    <span key={d.slug}>
                      <Link href={`/bolge/${d.slug}`} className="transition hover:text-[var(--aqua)]">{d.name}</Link>
                      {i < 5 && <span className="ml-1 text-white/20">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.4)}>
            <div className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/60 backdrop-blur">İletişim</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+905367731404" className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 backdrop-blur transition hover:bg-white/10 hover:text-[var(--aqua)]">+90 536 773 14 04</a>
              </li>
              <li>
                <a href="tel:+905309550028" className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 backdrop-blur transition hover:bg-white/10 hover:text-[var(--aqua)]">+90 530 955 00 28</a>
              </li>
              <li className="text-white/50">pergoclean@tozyapi.com.tr</li>
              <li className="text-white/50">www.pergoclean.com.tr</li>
              <li className="flex gap-2 pt-2">
                <a href="https://www.instagram.com/pergoclean.tr" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2 text-white/60 backdrop-blur transition hover:bg-white/10 hover:text-[var(--aqua)]" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://www.youtube.com/@PergoClean" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2 text-white/60 backdrop-blur transition hover:bg-white/10 hover:text-[var(--aqua)]" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-white/40">© {year} PergoClean. 2026 tescilli marka. Tüm hakları saklıdır.</div>
          <div className="flex items-center gap-4">
            <Link href="/kvkk" className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50 backdrop-blur transition hover:bg-white/10 hover:text-[var(--aqua)]">KVKK 2026</Link>
            <div className="flex items-center gap-2 text-xs text-white/40">
              Design By
              <a href="https://tozsolutions.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-white/60 transition hover:text-[var(--aqua)]">
                TozSolutions
                <Image src="/toz-logo.png" alt="TozSolutions" width={20} height={20} className="object-contain opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

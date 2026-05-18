"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/motion/BlurFade";

const refs = [
  { location: "Ankara · Ümitköy", brand: "Ottoman Cafe", service: "Pergola Kumaş & LED Bakımı" },
  { location: "Ankara · İncek", brand: "McDonald's", service: "BioClimatic Pergola Restorasyonu" },
  { location: "Ankara · Çayyolu", brand: "Lounge Restoran", service: "RollingRoof Sistem Temizliği" },
  { location: "Ankara · Çankaya", brand: "LUUQ", service: "Tente & Cephe Bakımı" },
  { location: "Ankara · Premium Cafe", brand: "Arabica · Starbucks · Espressolab", service: "Wintent Zip Perde Restorasyonu" },
  { location: "Antalya · Kalkan", brand: "Private Villa", service: "Havuzbaşı BioClimatic Pergola" },
  { location: "Ankara · Çankaya", brand: "Royal Motors", service: "Showroom Pergola & LED Sistemi" },
  { location: "Ankara · Oran", brand: "Özel Konut", service: "Bahçe Pergola Restorasyonu" },
  { location: "Antalya · Belek", brand: "Resort & Marina", service: "Toplu Tente Bakım Programı" },
  { location: "Ankara · Çayyolu", brand: "Ottoman", service: "Klasik Tente Restorasyonu" },
  { location: "Ankara · ANKAmall", brand: "Armada AVM", service: "CEP'A Kat Cephe Bakımı" },
  { location: "Ankara · Çankaya", brand: "Kentpark", service: "Dış Cephe Tente Temizliği" },
  { location: "Ankara · Çayyolu", brand: "Panora AVM", service: "Zip Perde Restorasyonu" },
  { location: "Ankara · Çankaya", brand: "Arcadium", service: "RollingRoof Sistem Bakımı" },
  { location: "Ankara · Çankaya", brand: "Gordion AVM", service: "Tente ve Gölgelik Bakımı" },
  { location: "Ankara · Çankaya", brand: "Acity AVM", service: "BioClimatic Temizlik" },
];

interface InteractiveBentoGalleryProps {
  className?: string;
}

export function InteractiveBentoGallery({ className }: InteractiveBentoGalleryProps) {
  return (
    <div className={`grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4 ${className}`}>
      {refs.map((r, i) => (
        <motion.article
          key={r.brand + i}
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -8, scale: 1.02 }}
          className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--deep)] to-[var(--aqua-dark)] shadow-premium ${
            i === 0 || i === 5 || i === 10 ? "row-span-2" : ""
          } ${i === 4 || i === 8 ? "col-span-2" : ""}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--aqua-dark)]/40 to-[var(--deep)]/60" />
          <span className="absolute left-3 top-3 rounded-full bg-[color:var(--champagne)]/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--deep)]">Tamamlandı</span>
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--champagne)]">{r.location}</div>
            <h3 className="mt-1 font-bold text-white leading-tight">{r.brand}</h3>
            <p className="mt-0.5 text-[11px] text-white/70">{r.service}</p>
          </div>
          <div className="pointer-events-none absolute -inset-x-1/2 -top-1/2 h-[200%] w-[200%] -translate-x-full bg-[linear-gradient(115deg,transparent_40%,rgba(255,255,255,0.12)_50%,transparent_60%)] transition-transform duration-[1200ms] group-hover:translate-x-0" />
        </motion.article>
      ))}
    </div>
  );
}
import { motion } from "framer-motion";
import { SectionHeader } from "./Services";
import umitkoy from "@/assets/references/umitkoy.jpg";
import incek from "@/assets/references/incek.jpg";
import cayyolu2 from "@/assets/references/cayyolu-2.jpg";
import cankayaLuuq from "@/assets/references/cankaya-luuq.jpg";
import cafeGroup from "@/assets/references/cafe-group.jpg";
import villaPool from "@/assets/references/villa-pool.jpg";
import royalMotors from "@/assets/references/royal-motors.jpg";
import villaNight from "@/assets/references/villa-night.jpg";
import resortAerial from "@/assets/references/resort-aerial.jpg";
import ottoman from "@/assets/references/ottoman.jpg";

const refs = [
  { img: umitkoy, location: "Ankara · Ümitköy", brand: "Ottoman Cafe", service: "Pergola Kumaş & LED Bakımı" },
  { img: incek, location: "Ankara · İncek", brand: "McDonald's", service: "BioClimatic Pergola Restorasyonu" },
  { img: cayyolu2, location: "Ankara · Çayyolu", brand: "Lounge Restoran", service: "RollingRoof Sistem Temizliği" },
  { img: cankayaLuuq, location: "Ankara · Çankaya", brand: "LUUQ", service: "Tente & Cephe Bakımı" },
  { img: cafeGroup, location: "Ankara · Premium Cafe Grup", brand: "Arabica · Starbucks · Espressolab", service: "Wintent Zip Perde Restorasyonu" },
  { img: villaPool, location: "Antalya · Kalkan", brand: "Private Villa", service: "Havuzbaşı BioClimatic Pergola" },
  { img: royalMotors, location: "Ankara · Çankaya", brand: "Royal Motors", service: "Showroom Pergola & LED Sistemi" },
  { img: villaNight, location: "Ankara · Oran", brand: "Özel Konut", service: "Bahçe Pergola Restorasyonu" },
  { img: resortAerial, location: "Antalya · Belek", brand: "Resort & Marina", service: "Toplu Tente Bakım Programı" },
  { img: ottoman, location: "Ankara · Çayyolu", brand: "Ottoman", service: "Klasik Tente Restorasyonu" },
];

export function References() {
  return (
    <section id="referanslar" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--aqua)_18%,transparent),transparent_60%)]" />
      <div className="container relative mx-auto px-4">
        <SectionHeader
          eyebrow="Referanslarımız"
          title="Türkiye'nin önde gelen markaları PergoClean'i tercih ediyor"
          desc="Premium cafe, restoran, showroom, resort ve özel konutlarda tamamlanmış 1.500+ proje."
        />
        <div className="mx-auto mt-14 grid max-w-7xl auto-rows-[260px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {refs.map((r, i) => (
            <motion.article
              key={r.brand + i}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`hover-glow group relative overflow-hidden rounded-3xl border border-border bg-card shadow-premium ${
                i === 0 || i === 5 ? "row-span-2" : ""
              } ${i === 4 ? "md:col-span-2" : ""}`}
            >
              <motion.img
                src={r.img}
                alt={`${r.brand} — ${r.service}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--deep)]/95 via-[color:var(--deep)]/30 to-transparent opacity-90 transition group-hover:opacity-100" />
              <div className="pointer-events-none absolute -inset-x-1/2 -top-1/2 h-[200%] w-[200%] -translate-x-full bg-[linear-gradient(115deg,transparent_40%,rgba(255,255,255,0.18)_50%,transparent_60%)] transition-transform duration-[1200ms] group-hover:translate-x-0" />
              <span className="absolute left-3 top-3 rounded-full bg-[color:var(--champagne)]/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--deep)] shadow-glow">
                Tamamlandı
              </span>
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--champagne)]">
                  {r.location}
                </div>
                <h3 className="mt-1 font-display text-base font-bold leading-tight md:text-lg">{r.brand}</h3>
                <p className="mt-0.5 text-[11px] text-white/80 md:text-xs">{r.service}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
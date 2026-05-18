import { motion } from "framer-motion";

const items = [
  { t: "Pergola / Tente Kumaş Temizliği", d: "Blackout, akrilik ve teknik kumaşlarda kapsamlı leke giderme ve UV koruma." },
  { t: "BioClimatic / RollingRoof", d: "Kanat içleri, su olukları ve mekanizmalarda komple bakım ve hijyen." },
  { t: "Wintent — Zip Perde Temizliği", d: "Wintent ve zip perde sistemlerinde kumaş, fermuar, ray ve cam yüzeyde profesyonel derin temizlik." },
  { t: "Kepenk — Panjur Temizliği", d: "Kepenk ve panjur lamelleri arasındaki tortu, oksit ve nem temizliği; yağlama ve sessizleştirme." },
  { t: "Güneş Panel Temizliği", d: "Verim kaybını önleyen, yüzeye zarar vermeyen iyonize su uygulaması." },
  { t: "Mekanik Sistem Bakımı", d: "Motor, redüktör, sensör ve kumanda kontrolleri, uzun ömür için yıllık servis." },
  { t: "LED Arıza & Renk Değişimi", d: "Samsung LED + plastik kasa modüllerinde arıza tespiti ve renk dönüşümü." },
];

export function Services() {
  return (
    <section id="hizmetler" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Hizmetlerimiz"
          title="Dış mekânın teknik uzmanları"
          desc="Üretim, montaj ve servis kökenli 19+ yıllık tecrübeyle yalnızca temizlik değil, sistemin tamamına dokunan profesyonel restorasyon sunuyoruz."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <motion.article
              key={s.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="hover-glow group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-premium transition"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-aqua-grad opacity-0 blur-3xl transition group-hover:opacity-30" />
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua-grad text-white shadow-glow">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M12 2C8 8 5 11 5 15a7 7 0 0 0 14 0c0-4-3-7-7-13z" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[color:var(--aqua)]">
                Detay <span aria-hidden>→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, desc, light }: { eyebrow: string; title: string; desc?: string; light?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className={`text-xs font-semibold uppercase tracking-[0.28em] ${light ? "text-white/70" : "text-[color:var(--aqua)]"}`}>{eyebrow}</div>
      <h2 className={`mt-3 text-balance text-4xl font-bold md:text-5xl ${light ? "text-white" : "text-foreground"}`}>{title}</h2>
      {desc && <p className={`mt-4 text-base ${light ? "text-white/75" : "text-muted-foreground"}`}>{desc}</p>}
    </div>
  );
}

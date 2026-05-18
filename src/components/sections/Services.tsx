"use client";

import { BlurFade } from "@/components/motion/BlurFade";
import { PremiumGlassCard } from "@/components/motion/PremiumGlassCard";
import { SectionHeader } from "@/components/motion/SectionHeader";
import { PremiumCTA } from "@/components/motion/PremiumCTA";
import { TextScramble } from "@/components/ui/text-scramble";

const services = [
  { icon: "🏛️", title: "Pergola / Tente Kumaş Temizliği", desc: "Blackout, akrilik ve teknik kumaşlarda kapsamlı leke giderme ve UV koruma." },
  { icon: "🌿", title: "BioClimatic / RollingRoof", desc: "Kanat içleri, su olukları ve mekanizmalarda komple bakım ve hijyen." },
  { icon: "🪟", title: "Wintent — Zip Perde Temizliği", desc: "Fermuar, ray ve cam yüzeyde profesyonel derin temizlik." },
  { icon: "🔒", title: "Kepenk — Panjur Temizliği", desc: "Lameller arası tortu, oksit ve nem temizliği; yağlama ve sessizleştirme." },
  { icon: "☀️", title: "Güneş Panel Temizliği", desc: "Verim kaybını önleyen, yüzeye zarar vermeyen iyonize su uygulaması." },
  { icon: "⚙️", title: "Mekanik Sistem Bakımı", desc: "Motor, redüktör, sensör ve kumanda kontrolleri, uzun ömür için yıllık servis." },
  { icon: "💡", title: "LED Arıza ve Renk Değişimi", desc: "Samsung LED + plastik kasa modüllerinde arıza tespiti ve renk değişimi." },
];

export function Services() {
  return (
    <section id="hizmetler" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Hizmetlerimiz"
          title={<TextScramble text="Dış Mekânın Teknik Uzmanları" />}
          description={<TextScramble text="Mühendislik Disiplininde Temizlik" />}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <BlurFade key={s.title} delay={0.1 + i * 0.08} duration={0.5}>
              <PremiumGlassCard className="p-7">
                <div className="text-4xl">{s.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <PremiumCTA href="#fiyat" variant="primary" className="mt-4 text-xs">
                  Fiyat Al →
                </PremiumCTA>
              </PremiumGlassCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

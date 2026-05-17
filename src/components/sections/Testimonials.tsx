"use client";

import { BlurFade } from "@/components/motion/BlurFade";
import { CircularTestimonials } from "@/components/motion/CircularTestimonials";
import cankaya from "@/assets/Referanslar/cankaya-luuq.jpg";
import incek from "@/assets/Referanslar/incek.jpg";
import resort from "@/assets/Referanslar/resort-aerial.jpg";
import villa from "@/assets/Referanslar/villa-pool.jpg";
import ottoman from "@/assets/Referanslar/ottoman.jpg";

const testimonials = [
  {
    name: "Ahmet K.",
    designation: "Restaurant Sahibi, Çankaya",
    quote:
      "Pergola kumaşımız sararmıştı; değiştirmeden yeniden ilk günkü görünüme döndü. Müşterilerimiz fark etti.",
    src: cankaya,
  },
  {
    name: "Selin Y.",
    designation: "Villa Sahibi, İncek",
    quote:
      "BioClimatic sistemimizin kanat içleri ve mekanik aksamı dahil baştan ayağa bakım yaptılar. Çok profesyonel ekip.",
    src: incek,
  },
  {
    name: "Murat B.",
    designation: "Otel İşletmecisi, Antalya",
    quote:
      "Sezon öncesi tüm pergolalarımızı gece çalışmasıyla teslim ettiler. İşletmemiz hiç aksamadı.",
    src: resort,
  },
  {
    name: "Elif D.",
    designation: "Villa Sahibi, Çayyolu",
    quote:
      "Wintent zip perdelerimizi yenisi gibi yaptılar. Ekip çok titiz ve zamanında teslim etti.",
    src: villa,
  },
  {
    name: "Cem A.",
    designation: "Cafe Sahibi, Ümitköy",
    quote:
      "Pergola ve panjurlarımıza profesyonel bakım. Fiyat-performans olarak en doğru tercih.",
    src: ottoman,
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <BlurFade delay={0.1} duration={0.6}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--aqua)]">Müşteri Yorumları</div>
            <h2 className="mt-3 text-balance text-4xl font-bold md:text-5xl">Premium Markaların Tercihi</h2>
          </div>
        </BlurFade>

        <div className="mt-14">
          <CircularTestimonials testimonials={testimonials} />
        </div>

        <BlurFade delay={0.4} duration={0.6}>
          <div className="mx-auto mt-12 max-w-2xl rounded-3xl bg-aqua-grad p-1 shadow-premium">
            <a href="https://www.google.com/search?q=PergoClean+Ankara" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-[22px] bg-card px-6 py-5">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Bizi Google Üzerinden Puanlandırın</div>
                <div className="mt-1 flex items-center gap-3">
                  <span className="text-xl font-bold">Google</span>
                  <div className="flex gap-0.5 text-[color:var(--champagne)]">
                    {[1,2,3,4,5].map((i) => (
                      <svg key={i} viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>
                    ))}
                  </div>
                </div>
              </div>
              <span className="rounded-full bg-aqua-grad px-5 py-2 text-sm font-semibold text-white">Yorum Yaz</span>
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
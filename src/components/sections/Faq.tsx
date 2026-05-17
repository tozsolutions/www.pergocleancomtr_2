"use client";

import { useState } from "react";
import { BlurFade } from "@/components/motion/BlurFade";

const faqs = [
  { q: "Pergola kumaşımı değiştirmeden temizleyebilir misiniz?", a: "Evet. PergoClean restorasyon yaklaşımıyla kumaşı yerinden sökmeden, ilk günkü görünüme en yakın sonucu hedefler." },
  { q: "Hizmet hangi bölgelerde geçerli?", a: "Ankara, Antalya ve tüm ilçelerinde hizmet veriyoruz. Talebe göre Türkiye genelinde proje üstleniyoruz." },
  { q: "Çalışma süresi ne kadar?", a: "Pergola/BioClimatic için 0–50 m² 6–8 saat, 50–100 m² 12–16 saat sürmektedir. Zip perde ve kepenkte 2–8 saat aralığındadır." },
  { q: "Gece çalışma yapıyor musunuz?", a: "Evet. Restoran, otel ve kafe gibi işletmelerin akışını bozmamak için gece servisi sunuyoruz." },
  { q: "Garanti veriyor musunuz?", a: "Tüm uygulamalarımız sonrası kalite raporu ve bakım takvimi ile birlikte servis garantisi sağlıyoruz." },
  { q: "Mekanik arıza ve LED değişimi de yapıyor musunuz?", a: "Evet. Motor, redüktör, sensör bakımı ile Samsung LED + plastik kasa modüllerinde renk değişimi ve arıza tespiti yapıyoruz." },
];

export function Faq() {
  const [open, setOpen] = useState(-1);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <BlurFade delay={0.1} duration={0.6}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--aqua)]">Sıkça Sorulanlar</div>
            <h2 className="mt-3 text-balance text-4xl font-bold md:text-5xl">Aklınızdaki İlk Sorulara Net Cevaplar</h2>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} duration={0.6}>
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-border rounded-3xl border border-border bg-card shadow-premium">
            {faqs.map((it, i) => (
              <div key={i}>
                <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="text-sm font-semibold text-foreground md:text-base">{it.q}</span>
                  <span className={`grid h-8 w-8 place-items-center rounded-full bg-aqua-grad text-white transition ${open === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {open === i && <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{it.a}</div>}
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((it) => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: it.a } })),
          }),
        }}
      />
    </section>
  );
}
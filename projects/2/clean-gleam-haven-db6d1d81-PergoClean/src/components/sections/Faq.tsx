import { useState } from "react";
import { SectionHeader } from "./Services";

const items = [
  { q: "Pergola kumaşımı değiştirmeden temizleyebilir misiniz?", a: "Evet. PergoClean restorasyon yaklaşımıyla kumaşı yerinden sökmeden, ilk günkü görünüme en yakın sonucu hedefler." },
  { q: "Hizmet hangi bölgelerde geçerli?", a: "Ankara, Antalya ve tüm ilçelerinde hizmet veriyoruz. Talebe göre Türkiye genelinde proje üstleniyoruz." },
  { q: "Çalışma süresi ne kadar?", a: "Pergola/BioClimatic için 0–50 m² 6–8 saat, 50–100 m² 12–16 saat sürmektedir. Zip perde ve kepenkte 2–8 saat aralığındadır." },
  { q: "Gece çalışma yapıyor musunuz?", a: "Evet. Restoran, otel ve kafe gibi işletmelerin akışını bozmamak için gece servisi sunuyoruz." },
  { q: "Garanti veriyor musunuz?", a: "Tüm uygulamalarımız sonrası kalite raporu ve bakım takvimi ile birlikte servis garantisi sağlıyoruz." },
  { q: "Mekanik arıza ve LED değişimi de yapıyor musunuz?", a: "Evet. Motor, redüktör, sensör bakımı ile Samsung LED + plastik kasa modüllerinde renk değişimi ve arıza tespiti yapıyoruz." },
];

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="Sıkça Sorulanlar" title="Aklınızdaki ilk sorulara net cevaplar" />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-border rounded-3xl border border-border bg-card shadow-premium">
          {items.map((it, i) => (
            <div key={it.q}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold text-foreground md:text-base">{it.q}</span>
                <span className={`grid h-8 w-8 place-items-center rounded-full bg-aqua-grad text-white transition ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{it.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((it) => ({
              "@type": "Question",
              name: it.q,
              acceptedAnswer: { "@type": "Answer", text: it.a },
            })),
          }),
        }}
      />
    </section>
  );
}

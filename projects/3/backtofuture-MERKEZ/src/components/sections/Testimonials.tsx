import { SectionHeader } from "./Services";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import cankaya from "@/assets/references/cankaya-luuq.jpg";
import incek from "@/assets/references/incek.jpg";
import resort from "@/assets/references/resort-aerial.jpg";
import villa from "@/assets/references/villa-pool.jpg";
import ottoman from "@/assets/references/ottoman.jpg";

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
        <SectionHeader eyebrow="Müşteri Yorumları" title="Premium markaların tercihi" />

        <div className="mt-14">
          <CircularTestimonials
            testimonials={testimonials}
            autoplay
            colors={{
              name: "oklch(0.18 0.04 255)",
              designation: "oklch(0.45 0.04 255)",
              testimony: "oklch(0.28 0.04 255)",
              arrowBackground: "oklch(0.32 0.13 252)",
              arrowForeground: "#ffffff",
              arrowHoverBackground: "oklch(0.72 0.16 235)",
            }}
            fontSizes={{ name: "1.5rem", designation: "0.95rem", quote: "1.1rem" }}
          />
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-aqua-grad p-1 shadow-premium hover-glow">
          <a
            href="https://www.google.com/search?q=PergoClean+Ankara"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-[22px] bg-card px-6 py-5"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Bizi Google üzerinden puanlandırın</div>
              <div className="mt-1 flex items-center gap-3">
                <span className="font-display text-xl font-bold">Google</span>
                <div className="flex gap-0.5 text-[color:var(--champagne)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>
                  ))}
                </div>
              </div>
            </div>
            <span className="rounded-full bg-aqua-grad px-5 py-2 text-sm font-semibold text-white">Yorum Yaz</span>
          </a>
        </div>
      </div>
    </section>
  );
}

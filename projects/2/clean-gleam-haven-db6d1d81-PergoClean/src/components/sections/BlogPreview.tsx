import team from "@/assets/brand/team.jpg";
import resort from "@/assets/brand/resort.jpg";
import night from "@/assets/brand/pergola-night.jpg";
import { SectionHeader } from "./Services";

const posts = [
  { img: night, t: "Pergola Kumaşı Neden Sararır?", d: "UV, polen ve mikro tortuların kumaş üzerindeki etkileri ve önleme yolları." },
  { img: team, t: "Blackout Kumaş Nasıl Temizlenir?", d: "Blackout yapısının zarar görmemesi için doğru pH ve mekanik bakım rehberi." },
  { img: resort, t: "Zip Perde Bakımı Neden Önemlidir?", d: "Fermuar, ray ve motor sisteminin uzun ömürlü çalışması için 6 püf nokta." },
];

export function BlogPreview() {
  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="Blog" title="Bilgi havuzumuzdan seçmeler" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.t} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-premium">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.t} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[color:var(--aqua)]">
                  Devamını Oku <span aria-hidden>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { BlurFade } from "@/components/motion/BlurFade";

export const metadata: Metadata = {
  title: "Blog | PergoClean — Pergola Bakım ve Restorasyon",
  description: "Pergola, tente, BioClimatic, RollingRoof, zip perde bakımı ve temizliği hakkında uzman bilgileri. Kumaş restorasyonu, mekanik bakım ve profesyonel temizlik rehberi.",
};

const posts = [
  { slug: "blackout-pergola-kumasi-neden-kararir", title: "Blackout Pergola Kumaşı Neden Kararır?", excerpt: "UV ışınları, nem, mantar ve egzoz partiküllerinin blackout pergola kumaşında yarattığı kararma nedenleri ve profesyonel çözümler.", date: "16 Mayıs 2026", read: "6 dk" },
  { slug: "bioclimatic-rollingroof-teknik-bakim", title: "BioClimatic ve RollingRoof Temizliğinde Teknik Bakım", excerpt: "Kanat mekanizmaları, su olukları ve motor sistemlerinde profesyonel temizlik ve bakımın önemi.", date: "9 Mayıs 2026", read: "8 dk" },
  { slug: "zip-perde-temizligi-cam-temizligi-degildir", title: "Zip Perde Temizliği Neden Klasik Cam Temizliği Değildir?", excerpt: "Fermuar sistemleri, ray mekanizmaları ve özel kumaş yapısıyla zip perdeler neden profesyonel bakım gerektirir?", date: "2 Mayıs 2026", read: "5 dk" },
  { slug: "pergola-tente-kumas-uv-korumasi", title: "Pergola ve Tente Kumaşlarında UV Koruması", excerpt: "Blackout, akrilik ve polyester kumaşlarda UV korumasının önemi ve profesyonel bakım ipuçları.", date: "25 Nisan 2026", read: "7 dk" },
  { slug: "wintent-zip-perde-motor-bakimi", title: "Wintent Zip Perde Motor ve Kumanda Bakımı", excerpt: "Motorlu zip perdelerde yıllık bakımın önemi, sık karşılaşılan arızalar ve çözümleri.", date: "18 Nisan 2026", read: "6 dk" },
  { slug: "gunes-paneli-verim-temizlik-iliskisi", title: "Güneş Paneli Verimliliği ve Temizlik İlişkisi", excerpt: "Güneş panellerinde toz ve kir birikiminin enerji verimliliğine etkisi ve iyonize su temizliği.", date: "10 Nisan 2026", read: "5 dk" },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--aqua)]">Blog</div>
        <h1 className="mt-3 text-balance text-4xl font-bold md:text-5xl">PergoClean Bilgi Havuzu</h1>
        <p className="mt-4 text-base text-muted-foreground">Pergola, tente ve dış mekân sistemlerinin bakımı, temizliği ve restorasyonu hakkında uzman bilgileri.</p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, i) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-premium">
            <div className="aspect-[16/10] bg-gradient-to-br from-[var(--deep)] via-[var(--aqua-dark)] to-[var(--deep)]" />
            <div className="p-7">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{p.date}</span>
                <span>·</span>
                <span>{p.read}</span>
              </div>
              <h2 className="mt-3 text-xl font-semibold text-foreground">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[var(--aqua)]">
                Devamını Oku <span>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

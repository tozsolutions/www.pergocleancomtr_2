"use client";

import Image from "next/image";
import { blogImages } from "@/assets";

import { TextScramble } from "@/components/ui/text-scramble";

export function BlogPreview() {
  const posts = [
    { slug: "blackout-pergola-kumasi-neden-kararir", title: "Blackout Pergola Kumaşı Neden Kararır?", excerpt: "UV ışınları, nem, mantar ve egzoz partiküllerinin blackout pergola kumaşında yarattığı kararma nedenleri ve profesyonel çözümler.", date: "16 Mayıs 2026", img: blogImages.pergola },
    { slug: "bioclimatic-rollingroof-teknik-bakim", title: "BioClimatic ve RollingRoof Temizliğinde Teknik Bakım", excerpt: "Kanat mekanizmaları, su olukları ve motor sistemlerinde profesyonel temizlik ve bakımın önemi.", date: "9 Mayıs 2026", img: blogImages.bioclimatic },
    { slug: "zip-perde-temizligi-cam-temizligi-degildir", title: "Zip Perde Temizliği Neden Klasik Cam Temizliği Değildir?", excerpt: "Fermuar sistemleri, ray mekanizmaları ve özel kumaş yapısıyla zip perdeler neden profesyonel bakım gerektirir?", date: "2 Mayıs 2026", img: blogImages.zipScreen },
  ];

  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--aqua)]">Blog</div>
          <h2 className="mt-3 text-balance text-4xl font-bold md:text-5xl"><TextScramble text="Bilgi Havuzumuzdan Seçmeler" /></h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <a key={p.slug} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-premium">
              <div className="relative aspect-[16/10]">
                <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="text-[10px] text-muted-foreground">{p.date}</div>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[color:var(--aqua)]">
                  Devamini Oku <span>-&gt;</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
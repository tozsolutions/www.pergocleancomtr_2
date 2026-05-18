"use client";

import Image from "next/image";
import { blogPosts } from "@/lib/blog-data";
import { TextScramble } from "@/components/ui/text-scramble";
import { motion } from "framer-motion";

export function BlogPreview() {
  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--aqua)]">Blog</div>
          <h2 className="mt-3 text-balance text-4xl font-bold md:text-5xl"><TextScramble text="Bilgi Havuzumuzdan Seçmeler" /></h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((p) => (
            <a
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-premium block"
            >
              <motion.div whileHover={{ y: -6 }} className="h-full">
                <div className="relative aspect-[16/10]">
                  <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="text-[10px] text-muted-foreground">{p.date}</div>
                  <h3 className="mt-2 text-lg font-semibold text-foreground line-clamp-2">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
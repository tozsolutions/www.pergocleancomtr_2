"use client";

import Link from "next/link";
import { ShinyButton } from "@/components/ui/shiny-button";
import { motion } from "framer-motion";

export default function BlogClient({ posts }: { posts: any[] }) {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--aqua)]">Blog</div>
        <h1 className="mt-3 text-balance text-4xl font-bold md:text-5xl">PergoClean Bilgi Havuzu</h1>
        <p className="mt-4 text-base text-muted-foreground">Pergola, tente ve dış mekân sistemlerinin bakımı, temizliği ve restorasyonu hakkında uzman bilgileri.</p>
      </div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-premium block h-full">
             <motion.div whileHover={{ y: -6 }} className="h-full flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                   <img src={p.image} alt={p.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{p.date}</div>
                  <h2 className="mt-2 text-lg font-semibold text-foreground line-clamp-2 leading-tight group-hover:text-[var(--aqua)] transition-colors">{p.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-grow">{p.excerpt}</p>
                  <div className="mt-4">
                    <ShinyButton className="w-full text-[10px] py-2">DEVAMINI OKU</ShinyButton>
                  </div>
                </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
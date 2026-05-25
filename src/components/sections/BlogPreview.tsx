"use client";

import Image from "next/image";
import { blogs } from "@/lib/blogs";
import { SectionHeader } from "@/components/motion/SectionHeader";
import { TextScramble } from "@/components/ui/text-scramble";
import { motion } from "framer-motion";
import Link from "next/link";

import { StarButton } from "@/components/ui/star-button";

export function BlogPreview() {
  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Blog"
          title={<span className="text-[1.4rem]">Bilgi Havuzumuzdan Seçmeler</span>}
          size="sm"
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogs.slice(0, 12).map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-premium block h-full">
              <motion.div whileHover={{ y: -6 }} className="h-full flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                   <img src={p.image} alt={p.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{p.date}</div>
                  <h3 className="mt-2 text-lg font-semibold text-foreground line-clamp-2 leading-tight group-hover:text-[var(--aqua)] transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-grow">{p.excerpt}</p>
                  <div className="mt-4">
                    <StarButton className="w-full text-[10px] py-2" backgroundColor="#000080">DEVAMINI OKU</StarButton>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
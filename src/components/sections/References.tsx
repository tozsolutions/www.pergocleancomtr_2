"use client";

import { SectionHeader } from "@/components/motion/SectionHeader";
import { referencesData } from "@/assets";
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";

export function References() {
  // Create an array of 20 items by cycling through the referencesData
  const mediaItems = Array.from({ length: 20 }).map((_, i) => {
    const r = referencesData[i % referencesData.length];
    return {
      id: i,
      type: "image",
      title: r.brand,
      desc: r.service,
      url: typeof r.img === 'string' ? r.img : (r.img as any).src,
      span: i % 5 === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
    };
  });

  return (
    <section id="referanslar" className="relative py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Tamamlanan İşlerimiz"
          title={
            <>
              Türkiye'nin Önde Gelen Markaları{" "}
              <span className="text-[1.21em] text-[#40E0D0] font-semibold">PergoClean</span>'i Tercih Ediyor
            </>
          }
          size="sm"
        />
        
        <div className="mt-10">
          <InteractiveBentoGallery
            mediaItems={mediaItems}
            title=""
            description=""
          />
        </div>
      </div>
    </section>
  );
}
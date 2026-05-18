"use client";

import { BlurFade } from "@/components/motion/BlurFade";
import { AnimatedRoadmap } from "@/components/motion/AnimatedRoadmap";
import { SectionHeader } from "@/components/motion/SectionHeader";

const roadmapSteps = [
  { title: "Keşif", description: "Yerinde teknik inceleme; kumaş, mekanik ve elektronik kontrol." },
  { title: "Analiz", description: "Kirlilik seviyesi, kumaş tipi ve hasar tespiti ile özel çözüm planı." },
  { title: "Formülasyon", description: "Kumaş tipine özel pH dengeli, lekeye yönelik özel solüsyon hazırlığı." },
  { title: "Uygulama", description: "Çok aşamalı temizlik, mekanik bakım, su drenajı ve UV koruma." },
  { title: "Son Kontrol", description: "Tüm sistemlerin çalışma testi, görsel ve kalite doğrulaması." },
  { title: "Teslimat", description: "Kalite raporu, fotoğraf arşivi ve bakım takvimi ile teslim." },
];

export function Process() {
  return (
    <section id="surec" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-hero opacity-[0.97]" />
      <div className="container relative mx-auto px-4">
import { TextScramble } from "@/components/ui/text-scramble";
...
        <SectionHeader
          label="6 Adımlı Süreç"
          title={<TextScramble text="Mühendislik Disiplininde Temizlik" />}
          description="Üretim ve montaj kökenli ekiplerimizle her projede aynı standardı garanti ediyoruz."
          light
        />

        <div className="mt-14 mx-auto max-w-2xl">
          <BlurFade delay={0.2} duration={0.6}>
            <AnimatedRoadmap steps={roadmapSteps} className="text-white" />
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

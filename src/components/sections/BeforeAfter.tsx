"use client";

import { useMemo, useRef, useState } from "react";
import { SectionHeader } from "@/components/motion/SectionHeader";
import { TextScramble } from "@/components/ui/text-scramble";
type ServiceTag = "zip" | "pergola" | "bioclimatic" | "rolling";

const projects: Array<{
  id: string;
  location: string;
  service: string;
  serviceTag: ServiceTag;
  desc: string;
  before: string;
  after: string;
}> = [
  { id: "cankaya", location: "Ankara · Çankaya", service: "Wintent / Zip Perde Temizliği", serviceTag: "zip", desc: "Sararmış kumaşın profesyonel restorasyonu.", before: "/assets/BA/Ankara_Pergola_Temizlik_Çankaya_1_before.webp", after: "/assets/BA/Ankara_Pergola_Temizlik_Çankaya_2_after.webp" },
  { id: "cayyolu", location: "Ankara · Çayyolu", service: "Pergola Kumaş & Profil Temizliği", serviceTag: "pergola", desc: "Derin kir ve tortu giderme.", before: "/assets/BA/Ankara_Pergola_Temizlik_Çayyolu_1_before.jpg.webp", after: "/assets/BA/Ankara_Pergola_Temizlik_Çayyolu_2_after.webp" },
  { id: "test", location: "Ankara · Merkez", service: "Profesyonel Test Aşamaları", serviceTag: "bioclimatic", desc: "Teknik restorasyon sonrası sonuç.", before: "/assets/BA/Temizlik_Test_Asamaları_1_Before.webp", after: "/assets/BA/Temizlik_Test_Asamaları_1_After.webp" },
  { id: "pursaklar", location: "Ankara · Pursaklar", service: "Wintent / Zip Perde Restorasyonu", serviceTag: "zip", desc: "Kumaş parlaklığını geri kazandırma.", before: "/assets/BA/Ankara_Pergola_Temizlik_Pursaklar_q_before.webp", after: "/assets/BA/Ankara_Pergola_Temizlik_Pursaklar_2_after.webp" },
  { id: "etimesgut", location: "Ankara · Etimesgut", service: "BioClimatic Pergola Restorasyonu", serviceTag: "bioclimatic", desc: "Oksit ve leke giderme.", before: "/assets/BA/Ankara_Pergola_Temizlik_Etimesgut_1_before.webp", after: "/assets/BA/Ankara_Pergola_Temizlik_Etimesgut_2_after.webp" },
  { id: "sincan", location: "Ankara · Sincan", service: "Pergola Temizlik & Bakım", serviceTag: "pergola", desc: "İlk günkü görünüm garantisi.", before: "/assets/BA/Ankara_Pergola_Temizlik_Sincan_1_before.webp", after: "/assets/BA/Ankara_Pergola_Temizlik_Sincan_2_after.webp" },
];

const serviceFilters: Array<{ id: ServiceTag | "all"; label: string }> = [
  { id: "all", label: "Tüm Hizmetler" },
  { id: "pergola", label: "Pergola Kumaş" },
  { id: "bioclimatic", label: "BioClimatic" },
  { id: "rolling", label: "RollingRoof" },
  { id: "zip", label: "Wintent · Zip Perde" },
];

export function BeforeAfter() {
  const [service, setService] = useState<ServiceTag | "all">("all");

  const filtered = projects.filter(
    (p) => service === "all" || p.serviceTag === service
  );

  return (
    <section id="once-sonra" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Önce / Sonra"
          title={<TextScramble text="Restorasyon Sonuçları" />}
          description="Her projemiz belgelenir. Değiştirmeden dönüşüm garantisi."
        />

        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-2">
            {serviceFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => setService(f.id)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                  service === f.id
                    ? "border-transparent bg-aqua-grad text-white shadow-glow"
                    : "border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-8 lg:grid-cols-3">
          {filtered.map((p) => (
            <CompareCard key={p.id} {...p} />
          ))}
          {filtered.length === 0 && (
            <div className="lg:col-span-3 rounded-3xl border border-dashed border-border bg-card/50 p-12 text-center text-sm text-muted-foreground">
              Bu kombinasyon için yakında yeni proje eklenecek.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

import { GlowCard } from "@/components/ui/spotlight-card";

function CompareCard({
  location,
  service,
  desc,
  before,
  after,
}: {
  location: string;
  service: string;
  desc: string;
  before: string;
  after: string;
}) {
  const [pct, setPct] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const drag = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPct(Math.max(2, Math.min(98, p)));
  };
  return (
    <GlowCard className="overflow-hidden p-0" customSize={true}>
      <div
        ref={ref}
        className="relative aspect-[4/5] w-full select-none overflow-hidden md:aspect-[16/11]"
        onMouseMove={(e) => e.buttons === 1 && drag(e.clientX)}
        onTouchMove={(e) => drag(e.touches[0].clientX)}
        onClick={(e) => drag(e.clientX)}
      >
        <Image src={after} alt={`${location} — sonrası`} fill className="object-cover" />
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pct}%` }}>
          <Image
            src={before}
            alt={`${location} — öncesi`}
            fill
            className="object-cover"
            style={{ width: `${(100 / pct) * 100}%`, maxWidth: "none" }}
          />
        </div>
        <div className="absolute inset-y-0" style={{ left: `${pct}%` }}>
          <div className="absolute inset-y-0 -translate-x-1/2 border-l-2 border-[color:var(--champagne)]" />
          <button
            aria-label="Sürükle"
            onMouseDown={(e) => {
              const move = (ev: MouseEvent) => drag(ev.clientX);
              const up = () => {
                window.removeEventListener("mousemove", move);
                window.removeEventListener("mouseup", up);
              };
              window.addEventListener("mousemove", move);
              window.addEventListener("mouseup", up);
              e.preventDefault();
            }}
            className="absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-[color:var(--champagne)] text-[color:var(--deep)] shadow-glow"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M8 5l-5 7 5 7V5zm8 0v14l5-7-5-7z" />
            </svg>
          </button>
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-black/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
          Önce
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-aqua-grad px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
          Sonra
        </span>
      </div>
      <div className="p-6">
        <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--aqua)]">
          {location}
        </div>
        <h3 className="mt-2 text-lg font-semibold text-foreground">{service}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </GlowCard>
  );
}

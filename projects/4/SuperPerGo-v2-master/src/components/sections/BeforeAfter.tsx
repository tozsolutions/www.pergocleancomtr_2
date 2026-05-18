"use client";

import { useMemo, useRef, useState } from "react";
import { SectionHeader } from "@/components/motion/SectionHeader";
import cankayaBefore from "@/assets/BA/cankaya-before.jpg";
import cankayaAfter from "@/assets/BA/cankaya-after.jpg";
import cayyoluBefore from "@/assets/BA/cayyolu-before.jpg";
import cayyoluAfter from "@/assets/BA/cayyolu-after.jpg";
import etimesgutBefore from "@/assets/BA/etimesgut-before.jpg";
import etimesgutAfter from "@/assets/BA/etimesgut-after.jpg";
import yenimahalleBefore from "@/assets/BA/yenimahalle-before.jpg";
import yenimahalleAfter from "@/assets/BA/yenimahalle-after.jpg";

type ServiceTag = "zip" | "pergola" | "bioclimatic" | "rolling";

const projects: Array<{
  id: string;
  city: "Ankara" | "Antalya";
  district: string;
  location: string;
  service: string;
  serviceTag: ServiceTag;
  desc: string;
  before: any;
  after: any;
}> = [
  {
    id: "cankaya",
    city: "Ankara",
    district: "Çankaya",
    location: "Ankara · Çankaya",
    service: "Wintent / Zip Perde Temizliği",
    serviceTag: "zip",
    desc: "Toz ve UV kalıntısı sebebiyle sararmış zip perde kumaşının ilk günkü tonuna dönüşü.",
    before: cankayaBefore,
    after: cankayaAfter,
  },
  {
    id: "cayyolu",
    city: "Ankara",
    district: "Çayyolu",
    location: "Ankara · Çayyolu",
    service: "Pergola Kumaş & Profil Temizliği",
    serviceTag: "pergola",
    desc: "Profil dipleri, dikiş hatları ve kumaş yüzeyinde tortu giderme; alüminyum profil parlatma.",
    before: cayyoluBefore,
    after: cayyoluAfter,
  },
  {
    id: "etimesgut",
    city: "Ankara",
    district: "Etimesgut",
    location: "Ankara · Etimesgut",
    service: "BioClimatic Pergola Restorasyonu",
    serviceTag: "bioclimatic",
    desc: "Yağmur lekeleri ve oksit izlerinin profesyonel restorasyonla tamamen kaldırılması.",
    before: etimesgutBefore,
    after: etimesgutAfter,
  },
  {
    id: "yenimahalle",
    city: "Ankara",
    district: "Yenimahalle",
    location: "Ankara · Yenimahalle",
    service: "RollingRoof Kumaş Temizliği",
    serviceTag: "rolling",
    desc: "Kafe terası rolling roof sistemde derin kir, hava kirliliği ve nikotin tortusu temizliği.",
    before: yenimahalleBefore,
    after: yenimahalleAfter,
  },
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
  const [district, setDistrict] = useState<string>("all");

  const districts = useMemo(
    () => Array.from(new Set(projects.map((p) => p.district))),
    []
  );

  const filtered = projects.filter(
    (p) =>
      (service === "all" || p.serviceTag === service) &&
      (district === "all" || p.district === district)
  );

  return (
    <section id="once-sonra" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Önce / Sonra"
          title="Restorasyon Sonuçları"
          description="Her projemiz belgelenir. Değiştirmeden dönüşüm garantisi."
        />

        <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-2">
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
          <div className="flex items-center gap-2">
            <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              İlçe
            </label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground outline-none focus:border-[color:var(--aqua)]"
            >
              <option value="all">Tümü</option>
              {districts.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-10 lg:grid-cols-2">
          {filtered.map((p) => (
            <CompareCard key={p.id} {...p} />
          ))}
          {filtered.length === 0 && (
            <div className="lg:col-span-2 rounded-3xl border border-dashed border-border bg-card/50 p-12 text-center text-sm text-muted-foreground">
              Bu kombinasyon için yakında yeni proje eklenecek. Diğer filtreleri deneyin.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

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
  before: any;
  after: any;
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
    <article className="hover-glow overflow-hidden rounded-3xl border border-border bg-card shadow-premium">
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
    </article>
  );
}

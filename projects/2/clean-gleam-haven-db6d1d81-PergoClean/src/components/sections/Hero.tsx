import { motion } from "framer-motion";
import logo from "@/assets/brand/logo.png";
import bg from "@/assets/brand/pergola-night.jpg";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero" />
      <img
        src={bg}
        alt="Premium pergola gece görünümü"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25 mix-blend-luminosity"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[oklch(0.18_0.06_252/0.6)] to-background" />

      {/* rotating geometric */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[640px] w-[640px] rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[color:var(--aqua)] shadow-glow" />
        <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[color:var(--champagne)]" />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-10 h-[420px] w-[420px] rounded-[40%] border border-white/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      <div className="container relative mx-auto px-4 pb-24 pt-40 lg:pb-36 lg:pt-44">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/85"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--aqua)] shadow-glow" />
              Ankara • Antalya • Premium Servis
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-balance text-5xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl"
            >
              Temizlik değil,{" "}
              <span className="text-shine">profesyonel restorasyon.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl"
            >
              Pergola, BioClimatic, RollingRoof, Wintent ve dış mekan sistemlerinde
              kumaşı değiştirmeden ilk günkü premium görünüme en yakın profesyonel dönüşüm.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a href="#fiyat" className="rounded-full bg-aqua-grad px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:scale-105">
                Anında Fiyat Al
              </a>
              <a href="#once-sonra" className="rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
                Önce / Sonra Görsel
              </a>
            </motion.div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6">
              {[
                { k: "19+", v: "Yıllık Tecrübe" },
                { k: "2000+", v: "Tamamlanan Proje" },
                { k: "2", v: "Bölge Servisi" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl glass p-4 text-white">
                  <div className="text-3xl font-bold text-shine">{s.k}</div>
                  <div className="text-xs uppercase tracking-wider text-white/70">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto hidden lg:block"
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-[color:var(--aqua)] opacity-30 blur-3xl" />
            <motion.div
              className="relative h-[420px] w-[420px] drop-shadow-[0_30px_60px_rgba(40,90,200,0.55)]"
              animate={{ rotate: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "50% 90%" }}
            >
              <img
                src={logo}
                alt="PergoClean sabun logosu"
                className="absolute inset-0 h-full w-full object-contain"
              />
              {/* Sloshing water layer, masked to logo silhouette */}
              <motion.div
                aria-hidden
                className="absolute inset-0"
                style={{
                  WebkitMaskImage: `url(${logo})`,
                  maskImage: `url(${logo})`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  mixBlendMode: "overlay",
                }}
                animate={{ x: [-18, 18, -18], rotate: [3, -3, 3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 38%, color-mix(in oklab, var(--aqua) 55%, transparent) 50%, color-mix(in oklab, var(--deep) 60%, transparent) 100%)",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-70"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 60%, rgba(255,255,255,0.45), transparent 35%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.35), transparent 30%)",
                  }}
                />
              </motion.div>
            </motion.div>

            <div className="mt-8 text-center text-base font-semibold text-white/90 md:text-lg">
              <span>Profesyonel </span>
              <span className="inline-flex items-baseline">
                <span className="text-white/70">(</span>
                <AnimatedTextCycle
                  words={[
                    "Pergola",
                    "Tente",
                    "BioClimatic",
                    "RollingRoof",
                    "Zip Perde",
                    "Wintent",
                    "Güneş Paneli",
                    "Panjur ve Kepenk",
                  ]}
                  className="text-shine"
                />
                <span className="text-white/70">)</span>
              </span>
              <span> Temizlik</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/motion/BlurFade";
import VaporizeTextCycle from "@/components/motion/VaporizeTextCycle";
import AnimatedTextCycle from "@/components/motion/AnimatedTextCycle";
import { BubbleAnimation } from "@/components/motion/BubbleAnimation";
import { PremiumCTA } from "@/components/motion/PremiumCTA";
import Image from "next/image";
import { logo } from "@/assets";

export function Hero() {
  const services = ["Pergola", "Tente", "BioClimatic", "RollingRoof", "Zip Perde", "Wintent", "Güneş Paneli", "Panjur", "Kepenk"];

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[oklch(0.18_0.06_252/0.6)] to-background" />

      <motion.div
        aria-hidden role="presentation"
        className="pointer-events-none absolute -right-40 top-10 h-[640px] w-[640px] rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--aqua)] shadow-glow" />
        <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--champagne)]" />
      </motion.div>
      <motion.div
        aria-hidden role="presentation"
        className="pointer-events-none absolute -left-32 bottom-10 h-[420px] w-[420px] rounded-[40%] border border-white/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      <canvas id="particleCanvas" className="absolute inset-0 pointer-events-none" style={{ width: "100%", height: "100%" }} />

      <div className="container relative mx-auto px-4 pb-24 pt-40 lg:pb-36 lg:pt-44">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <BlurFade delay={0.1} duration={0.6}>
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--aqua)] shadow-glow" />
                Ankara • Antalya • Premium Servis
              </div>
            </BlurFade>

            <div className="mt-6 text-balance text-5xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
              <span>Temizlik değil,{" "}</span>
              <span className="text-shine">
                <VaporizeTextCycle
                  texts={["profesyonel restorasyon."]}
                  font={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 4vw, 4rem)", fontWeight: 700 }}
                  color="rgb(201,169,110)"
                  animation={{ vaporizeDuration: 1.5, fadeInDuration: 0.8, waitDuration: 2 }}
                  alignment="left"
                />
              </span>
            </div>

            <BlurFade delay={0.3} duration={0.6}>
              <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
                <span>Kumaşı değiştirmeden ilk günkü premium görünümüne en yakın profesyonel dönüşüm. </span>
                <span className="text-shine">
                  <AnimatedTextCycle words={services} interval={4000} className="text-shine" />
                </span>
                <span> uzmanı.</span>
              </p>
            </BlurFade>

            <BlurFade delay={0.4} duration={0.6}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <PremiumCTA href="#fiyat" variant="primary">
                  Anında Fiyat Al
                </PremiumCTA>
                <PremiumCTA href="#once-sonra" variant="outline">
                  Önce / Sonra Görsel
                </PremiumCTA>
                <div className="flex items-center gap-2">
                  <a href="https://wa.me/905367731404" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 bg-white/5 p-3 text-white/80 backdrop-blur transition hover:bg-white/10 hover:text-[var(--aqua)]" aria-label="WhatsApp">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </a>
                  <a href="https://instagram.com/pergoclean.tr" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 bg-white/5 p-3 text-white/80 backdrop-blur transition hover:bg-white/10 hover:text-[var(--aqua)]" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                </div>
              </div>
            </BlurFade>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6">
              {[
                { k: "19+", v: "Yıllık Tecrübe" },
                { k: "2000+", v: "Tamamlanan Proje" },
                { k: "412+", v: "Google Yorum" },
              ].map((s, i) => (
                <BlurFade key={s.v} delay={0.6 + i * 0.1} duration={0.5}>
                  <div className="rounded-2xl glass p-4 text-white">
                    <div className="text-3xl font-bold text-shine">{s.k}</div>
                    <div className="text-xs uppercase tracking-wider text-white/70">{s.v}</div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>

          <BlurFade delay={0.3} duration={0.8} className="relative mx-auto hidden lg:block">
            <div className="absolute inset-0 -z-10 rounded-full bg-[var(--aqua)] opacity-30 blur-3xl" />
            <motion.div
              animate={{ y: [0, -14, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={logo}
                alt="PergoClean su damlası logosu"
                width={420}
                height={420}
                className="h-[420px] w-[420px] object-contain drop-shadow-[0_30px_60px_rgba(40,90,200,0.55)]"
                priority
              />
            </motion.div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Bakım | Temizlik | Restorasyon
            </div>
          </BlurFade>
        </div>
      </div>

      <BubbleAnimation bubbleCount={12} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  const particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, size: Math.random() * 2 + 1, speedX: Math.random() * 0.5 - 0.25, speedY: Math.random() * 0.5 - 0.25, opacity: Math.random() * 0.5 + 0.2 });
  }
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.speedX; p.y += p.speedY;
      if (p.x > canvas.width) p.x = 0; if (p.x < 0) p.x = canvas.width;
      if (p.y > canvas.height) p.y = 0; if (p.y < 0) p.y = canvas.height;
      ctx.fillStyle = 'rgba(255,255,255,' + p.opacity + ')';
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
  window.addEventListener('resize', () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; });
})()
          `,
        }}
      />
    </section>
  );
}

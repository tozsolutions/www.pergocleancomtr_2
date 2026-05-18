import { motion } from "framer-motion";
import { SectionHeader } from "./Services";

const steps = [
  { n: "01", t: "Keşif", d: "Yerinde teknik inceleme; kumaş, mekanik ve elektronik kontrol." },
  { n: "02", t: "Formülasyon", d: "Kumaş tipine özel pH dengeli, lekeye yönelik özel solüsyon hazırlığı." },
  { n: "03", t: "Uygulama", d: "Çok aşamalı temizlik, mekanik bakım, su drenajı ve UV koruma." },
  { n: "04", t: "Teslimat", d: "Kalite raporu, fotoğraf arşivi ve bakım takvimi ile teslim." },
];

export function Process() {
  return (
    <section id="surec" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-hero opacity-[0.97]" />
      <div className="container mx-auto px-4">
        <SectionHeader light eyebrow="4 Adımlı Süreç" title="Mühendislik disiplininde temizlik" desc="Üretim ve montaj kökenli ekiplerimizle her projede aynı standardı garanti ediyoruz." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-3xl glass p-7 text-white"
            >
              <div className="text-shine text-5xl font-bold">{s.n}</div>
              <div className="mt-3 text-lg font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-white/75">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

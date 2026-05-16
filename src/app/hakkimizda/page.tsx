import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | PergoClean",
  description: "19+ yıllık üretim ve montaj tecrübesiyle Ankara ve Antalya'da dış mekân pergola bakım ve restorasyon markası.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--aqua)]">Hakkımızda</div>
        <h1 className="mt-3 text-balance text-4xl font-bold md:text-5xl">19+ Yıllık Üretim ve Montaj Tecrübesi</h1>
        <div className="mt-8 aspect-[16/9] rounded-3xl bg-gradient-to-br from-[var(--deep)] to-[var(--aqua-dark)]" />
        <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>PergoClean, 19+ yıllık üretim ve montaj tecrübesinden doğan bir dış mekân bakım ve restorasyon markasıdır. Ankara ve Antalya'da faaliyet göstererek, Türkiye'nin önde gelen markalarına hizmet vermekteyiz.</p>
          <p>Uzman kadromuz, pergola, tente, BioClimatic, RollingRoof, zip perde, kepenk, güneş paneli ve mekanik sistem bakımında yüksek standartlar belirlemektedir. Amacımız sadece temizlik değil, kumaşları değiştirmeden ilk günkü premium görünümüne en yakın restorasyonu sağlamaktır.</p>
          <div className="grid grid-cols-3 gap-6 mt-10">
            {[{ k: "19+", v: "Yıllık Tecrübe" }, { k: "2000+", v: "Tamamlanan Proje" }, { k: "412+", v: "Google Yorum" }].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="text-3xl font-bold text-[color:var(--champagne)]">{s.k}</div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
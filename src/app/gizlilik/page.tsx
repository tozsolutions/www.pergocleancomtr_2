import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | PergoClean",
  description: "PergoClean gizlilik politikası ve kişisel verilerin korunması hakkında bilgilendirme.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">Gizlilik Politikası</h1>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>Son güncelleme: {new Date().getFullYear()}</p>
          <h2 className="text-xl font-semibold text-foreground">1. Veri Toplama</h2>
          <p>PergoClean olarak, web sitemiz üzerinden yalnızca iletişim formları aracılığıyla gönüllü olarak paylaşılan kişisel verileri (ad, soyad, telefon, e-posta) topluyoruz.</p>
          <h2 className="text-xl font-semibold text-foreground">2. Veri Kullanımı</h2>
          <p>Toplanan veriler yalnızca müşteri hizmetleri, teklif oluşturma ve randevu planlaması amacıyla kullanılmaktadır.</p>
          <h2 className="text-xl font-semibold text-foreground">3. Veri Paylaşımı</h2>
          <p>Kişisel veriler üçüncü taraflarla paylaşılmaz. Veriler yalnızca hizmet sağlayıcılarımız (n8n webhook) ile işleme amacıyla paylaşılır.</p>
          <h2 className="text-xl font-semibold text-foreground">4. Çerezler</h2>
          <p>Web sitemiz, temel işlevsellik için minimum çerez kullanır. Analitik veya reklam çerezi kullanılmamaktadır.</p>
          <h2 className="text-xl font-semibold text-foreground">5. İletişim</h2>
          <p>Gizlilik ile ilgili sorularınız için: pergoclean@tozyapi.com.tr</p>
        </div>
      </div>
    </div>
  );
}
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | PergoClean",
  description: "PergoClean KVKK kapsamında kişisel verilerin korunması hakkında aydınlatma metni.",
};

export default function KVKKPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">KVKK Aydınlatma Metni</h1>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>Son güncelleme: {new Date().getFullYear()}</p>
          <h2 className="text-xl font-semibold text-foreground">1. Veri Sorumlusu</h2>
          <p>TOZ Yapı / PergoClean — Timko İş Merkezi, Macun Mah. 177. Cad. V8 Kat 1, Yenimahalle/Ankara — pergoclean@tozyapi.com.tr</p>
          <h2 className="text-xl font-semibold text-foreground">2. İşlenen Kişisel Veriler</h2>
          <p>Kimlik bilgileri (ad, soyad), iletişim bilgileri (telefon, e-posta, adres) ve talep bilgileri (hizmet detayları, notlar).</p>
          <h2 className="text-xl font-semibold text-foreground">3. İşleme Amaçları</h2>
          <p>Müşteri hizmetleri, teklif oluşturma, randevu planlaması, yasal yükümlülükler ve iletişim.</p>
          <h2 className="text-xl font-semibold text-foreground">4. Haklarınız</h2>
          <p>KVKK kapsamında erişim, düzeltme, silme ve itiraz haklarınız bulunmaktadır. Talepleriniz için pergoclean@tozyapi.com.tr adresine yazabilirsiniz.</p>
        </div>
      </div>
    </div>
  );
}
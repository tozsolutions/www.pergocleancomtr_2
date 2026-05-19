export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  keywords: string[];
  districts: string[];
  content: string;
  snippet: string;
  faqs: { q: string; a: string }[];
}

export const blogs: BlogPost[] = [
  {
    slug: "beyaz-blackout-pergola",
    title: "Beyaz Blackout Pergola Kumaşı Neden Sararır?",
    metaTitle: "Beyaz Blackout Pergola Kumaşı Sararması",
    metaDescription: "Beyaz blackout pergola kumaşı sararması is, duman, polen kaynaklıdır. pH 6.8 nötr temizlik ile ilk gün parlaklığına döner.",
    category: "Pergola",
    date: "18 Mayıs 2026",
    author: "PergoClean",
    image: "/assets/Blog/Blog_Pergola_2_(ANKAmall_Armada_Cepa_Kentpark_Panora_Arcadium_Gordion_Acity_ForumAnkara_NataVega_Antares_365AVM_Taurus_OneTower_Metromall_Podium_Atlantis_NextLevel_Vega.jpg",
    excerpt: "Beyaz blackout pergola kumaşlarının sararma nedenleri ve profesyonel temizlik yöntemleri.",
    keywords: ["pergola temizliği", "blackout kumaş", "restorasyon"],
    districts: ["Çankaya", "Lara"],
    content: "<h2>Blackout Pergola Sararması: Nedenler ve Çözümler</h2><p>Agresif deterjan ve UV etkisine karşı, 115°C buhar ve pH 6.8 nötr temizlik ile ilk gün parlaklığına dönün.</p><h3>Teknik Protokol</h3><p>HEPA 99.97%@0.3µm ile toz alma, 2 bar buhar ve Avrupa OEM onaylı kimyasallar kullanıyoruz.</p>",
    snippet: "Profesyonel bakım ile pergola kumaşları ilk günkü gibi beyaz kalır.",
    faqs: [{ q: "Neden sararır?", a: "Toz ve UV etkisinden." }]
  },
  {
    slug: "bioclimatic-rollingroof-teknik-bakim",
    title: "BioClimatic ve RollingRoof Temizliğinde Teknik Bakım",
    metaTitle: "BioClimatic ve RollingRoof Temizliği",
    metaDescription: "Kanat mekanizmaları, su olukları ve motor sistemlerinde profesyonel temizlik ve bakım.",
    category: "BioClimatic",
    date: "18 Mayıs 2026",
    author: "PergoClean",
    image: "/assets/Blog/Blog_BioClimatic_3_(ANKAmall_Armada_Cepa_Kentpark_Panora_Arcadium_Gordion_Acity_ForumAnkara_NataVega_Antares_365AVM_Taurus_OneTower_Metromall_Podium_Atlantis_NextLevel_Vega.jpg",
    excerpt: "BioClimatic ve RollingRoof sistemleri için lamel açı kalibrasyonu ve drenaj kontrolü.",
    keywords: ["bioclimatic", "rolling roof", "bakım"],
    districts: ["Söğütözü", "Kaş"],
    content: "<h2>Teknik Bakım Prosedürü</h2><p>Lamel açı kalibrasyonu ±1° ve drenaj temizliği ile motor ömrünü uzatıyoruz.</p>",
    snippet: "Sessiz ve sorunsuz çalışması için bakım şarttır.",
    faqs: [{ q: "Ne zaman yapılır?", a: "Sezonda bir." }]
  },
  {
    slug: "zip-perde-temizligi-cam-temizligi-degildir",
    title: "Zip Perde Temizliği Neden Klasik Cam Temizliği Değildir?",
    metaTitle: "Zip Perde Temizliği Neden Farklı?",
    metaDescription: "Zip perde ve Wintent sistemler için bakım kalibrasyonu.",
    category: "Zip Perde",
    date: "18 Mayıs 2026",
    author: "PergoClean",
    image: "/assets/Blog/Blog_ZipScreen_ZipPerde_2_(ANKAmall_Armada_Cepa_Kentpark_Panora_Arcadium_Gordion_Acity_ForumAnkara_NataVega_Antares_365AVM_Taurus_OneTower_Metromall_Podium_Atlantis_NextLevel_Vega.jpg",
    excerpt: "Zip perde sistemlerinin uzun ömürlü olması için bakım şart.",
    keywords: ["zip perde", "wintent", "mekanik"],
    districts: ["Muratpaşa", "Keçiören"],
    content: "<h2>Zip Perde Bakım</h2><p>Menteşe yağlama ve ray sürtünme giderme ile ilk gün gerginliğine dönün.</p>",
    snippet: "Zip perde sistemlerini ilk günkü gerginliğinde tutun.",
    faqs: [{ q: "Nasıl bakım yapılır?", a: "Ray temizliği ve yağlama ile." }]
  },
  {
    slug: "rolling-roof-cam-tavan",
    title: "Rolling Roof ve Cam Tavan Restorasyonu",
    metaTitle: "Rolling Roof ve Cam Tavan Restorasyonu",
    metaDescription: "Leke giderme ve yalıtım kontrolü.",
    category: "Rolling Roof",
    date: "18 Mayıs 2026",
    author: "PergoClean",
    image: "/assets/Blog/Blog_BioClimatic_RollingRoof_1_(ANKAmall_Armada_Cepa_Kentpark_Panora_Arcadium_Gordion_Acity_ForumAnkara_NataVega_Antares_365AVM_Taurus_OneTower_Metromall_Podium_Atlantis_NextLevel_Vega.jpg",
    excerpt: "Rolling Roof sistemlerde leke ve yalıtım bakımı.",
    keywords: ["rolling roof", "cam tavan", "hidrofobik"],
    districts: ["Yenimahalle", "Alanya"],
    content: "<h2>Rolling Roof Restorasyon</h2><p>Hidrofilik leke giderme ve hydrophobic kaplama ile camları koruyun.</p>",
    snippet: "Camlarınızı şeffaf ve lekesiz tutun.",
    faqs: [{ q: "Sızıntı olur mu?", a: "Bakım ile engellenir." }]
  },
  {
    slug: "gunes-paneli-verim-temizlik-iliskisi",
    title: "Güneş Paneli Verimliliği ve Temizlik İlişkisi",
    metaTitle: "Güneş Paneli Verimliliği",
    metaDescription: "Verimlilik ve güvenlik bakımı.",
    category: "Diğer",
    date: "18 Mayıs 2026",
    author: "PergoClean",
    image: "/assets/Blog/Blog_GunesPaneli_2_(ANKAmall_Armada_Cepa_Kentpark_Panora_Arcadium_Gordion_Acity_ForumAnkara_NataVega_Antares_365AVM_Taurus_OneTower_Metromall_Podium_Atlantis_NextLevel_Vega.jpg",
    excerpt: "Güneş paneli ve kepenk sistemlerinin verimli çalışması için bakım.",
    keywords: ["güneş paneli", "kepenk", "verimlilik"],
    districts: ["Çankaya", "Manavgat"],
    content: "<h2>Enerji Verimi</h2><p>Panel temizliği ile verimi %25 artırın.</p>",
    snippet: "Bakım, enerji üretiminizi maksimumda tutar.",
    faqs: [{ q: "Kepenk neden tutukluk yapar?", a: "Toz birikimi yüzünden." }]
  },
  {
    slug: "iklim-yuzey-hasari",
    title: "İklim Kaynaklı Yüzey Hasarları",
    metaTitle: "İklim Kaynaklı Yüzey Hasarları",
    metaDescription: "Toz ve tuz kaynaklı hasarlardan korunma.",
    category: "Bakım",
    date: "18 Mayıs 2026",
    author: "PergoClean",
    image: "/assets/Blog/Blog_BioClimatic_RollingRoof_2_(ANKAmall_Armada_Cepa_Kentpark_Panora_Arcadium_Gordion_Acity_ForumAnkara_NataVega_Antares_365AVM_Taurus_OneTower_Metromall_Podium_Atlantis_NextLevel_Vega.jpg",
    excerpt: "Ankara ve Antalya ikliminin sistemlere etkisi.",
    keywords: ["iklim", "korozyon", "bakım"],
    districts: ["Çankaya", "Konyaaltı"],
    content: "<h2>İklim Analizi</h2><p>Tuz ve toz korozyona yol açar, periyodik bakım şart.</p>",
    snippet: "İklim uyumlu bakım ile sistem ömrünü uzatın.",
    faqs: [{ q: "Hasar önlenebilir mi?", a: "Periyodik bakım şart." }]
  },
  {
    slug: "zincir-isletme-standarti",
    title: "Zincir İşletmelerde Bakım",
    metaTitle: "Zincir İşletmelerde Bakım",
    metaDescription: "Marka standartlarında periyodik bakım.",
    category: "Kurumsal",
    date: "18 Mayıs 2026",
    author: "PergoClean",
    image: "/assets/Blog/Blog_ZipScreen_ZipPerde_3_(ANKAmall_Armada_Cepa_Kentpark_Panora_Arcadium_Gordion_Acity_ForumAnkara_NataVega_Antares_365AVM_Taurus_OneTower_Metromall_Podium_Atlantis_NextLevel_Vega.jpg",
    excerpt: "Zincir işletmeler için standartlaştırılmış bakım protokolü.",
    keywords: ["zincir işletme", "kurumsal", "standart"],
    districts: ["Genel"],
    content: "<h2>Kurumsal Bakım</h2><p>Tüm şubelerde standart hizmet ve teknik raporlama.</p>",
    snippet: "Marka imajınız için düzenli bakım.",
    faqs: [{ q: "Neden önemlidir?", a: "Müşteri sadakati için." }]
  },
  {
    slug: "teknik-bakim-muhendisligi",
    title: "Teknik Bakım Mühendisliği",
    metaTitle: "Teknik Bakım Mühendisliği",
    metaDescription: "Neden teknik bakım temizlikten üstündür?",
    category: "Mühendislik",
    date: "18 Mayıs 2026",
    author: "PergoClean",
    image: "/assets/Blog/Blog_BioClimatic_RollingRoof_3_(ANKAmall_Armada_Cepa_Kentpark_Panora_Arcadium_Gordion_Acity_ForumAnkara_NataVega_Antares_365AVM_Taurus_OneTower_Metromall_Podium_Atlantis_NextLevel_Vega.jpg",
    excerpt: "Profesyonel teknik bakım ile sistemlerinizi koruyun.",
    keywords: ["teknik bakım", "mühendislik", "kalibrasyon"],
    districts: ["Genel"],
    content: "<h2>Mühendislik Yaklaşımı</h2><p>Kontrollü basınç ve pH ile temizlik sistemin ömrünü garanti eder.</p>",
    snippet: "Teknik bakım, sistemin ömrünü garantiye alır.",
    faqs: [{ q: "Fark nedir?", a: "Sistem bütünlüğü." }]
  },
  {
    slug: "insaat-sonrasi-restorasyon",
    title: "İnşaat Sonrası Restorasyon",
    metaTitle: "İnşaat Sonrası Restorasyon",
    metaDescription: "İnşaat sonrası sistemleriniz için özel temizlik.",
    category: "Bakım",
    date: "18 Mayıs 2026",
    author: "PergoClean",
    image: "/assets/Blog/Blog_ZipScreen_ZipPerde_7_(ANKAmall_Armada_Cepa_Kentpark_Panora_Arcadium_Gordion_Acity_ForumAnkara_NataVega_Antares_365AVM_Taurus_OneTower_Metromall_Podium_Atlantis_NextLevel_Vega.jpg",
    excerpt: "Yeni biten projeleriniz için özel temizlik çözümleri.",
    keywords: ["inşaat", "restorasyon", "tadilat"],
    districts: ["Yenimahalle", "Muratpaşa"],
    content: "<h2>Tadilat Sonrası</h2><p>İnşaat tozlarından arındırın, sıfır kalıntı ile teslimat.</p>",
    snippet: "İlk kullanımda temizlik garantisi.",
    faqs: [{ q: "Ne zaman yapılmalı?", a: "Hemen tadilat sonrası." }]
  },
  {
    slug: "motor-ve-mekanik-bakim",
    title: "Motor ve Mekanik Sistem Bakımı",
    metaTitle: "Motor ve Mekanik Bakım",
    metaDescription: "Somfy/Becker motorların ömrünü uzatan teknik bakım.",
    category: "Teknik",
    date: "18 Mayıs 2026",
    author: "PergoClean",
    image: "/assets/Blog/bioclimatic_2.webp",
    excerpt: "Motor tork kalibrasyonu ve dişli temizliği.",
    keywords: ["motor", "mekanik", "somfy"],
    districts: ["Genel"],
    content: "<h2>Motor Bakımı</h2><p>Tork ±3% kalibrasyonu ile motor ömrünü uzatın.</p>",
    snippet: "Sessiz ve uzun ömürlü motorlar için periyodik bakım.",
    faqs: [{ q: "Motor ömrü nedir?", a: "Düzenli bakımla artar." }]
  }
];

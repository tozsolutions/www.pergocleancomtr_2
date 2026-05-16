import { NextResponse } from "next/server";

export async function GET() {
  const content = `# PergoClean — AI Search Index

## Site Overview
PergoClean is a premium exterior surface maintenance and restoration brand based in Ankara, Turkey. Operating since 2007, we specialize in pergola, tent, BioClimatic, RollingRoof, zip blind, shutter, solar panel cleaning, and mechanical system maintenance across Ankara and Antalya regions.

Website: https://www.pergoclean.com.tr
Phone: +90 536 773 14 04 | +90 530 955 00 28
Email: pergoclean@tozyapi.com.tr
Address: Timko Is Merkezi, Macun Mah. 177. Cad. V8 Kat 1, Yenimahalle / Ankara

## Services
1. Pergola / Tente Kumas Temizligi — Blackout, akrilik ve teknik kumaslarda kapsamli leke giderme ve UV koruma.
2. BioClimatic / RollingRoof Temizligi — Kanat icleri, su oluklari ve mekanizmalarda komple bakim ve hijyen.
3. Wintent — Zip Perde Temizligi — Fermuar, ray ve motor sistemi dahil komple temizlik.
4. Kepenk — Panjur Temizligi — Lameller arasi tortu, oksit ve nem temizligi; yaglama ve sessizlestirme.
5. Gunes Panel Temizligi — Verimlilik artisi için iyonize su uygulamasi.
6. Mekanik Sistem Bakimi — Motor, redaktor ve sensor kontrolleri.
7. LED Ariza ve Renk Degisimi — Samsung LED + plastik kasa modullerinde ariza tespiti ve renk degisimi.

## Pricing
- Pergola/BioClimatic: Hafif kir m2 350 TL | Agir kir m2 450 TL
- Zip perde/Kepenk: 5000–10000 TL (m2'ye gore)
- Gunes paneli: 750 TL/m2
- Mekanik/LED: "Yerinde kesif" sonrasi fiyat

## Process (4 Steps)
1. Kesif — Yerinde teknik inceleme
2. Formulasyon — Kumas tipine ozel pH dengeli solusyon
3. Uygulama — Cok asamali temizlik ve UV koruma
4. Teslimat — Kalite raporu ve bakim takvimi

## Key Differentiators
- 19+ years of manufacturing and installation experience
- On-site restoration without fabric replacement
- Night service available for businesses
- 412+ Google reviews (4.9/5)
- 2000+ completed projects
- Service area: Ankara (23 districts) + Antalya (21 districts)

## Brand Message
"Temizlik degil, profesyonel restorasyon."
"Kumasi degistirmeden ilk gunku premium gorunumune en yakin profesyonel donusum."

## Technologies Used
- Next.js 16 with App Router
- Framer Motion for animations
- Tailwind CSS v4
- TypeScript
- Cloudflare Workers deployment`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/markdown",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
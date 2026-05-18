# PergoClean — SuperPergo V2

Premium dış mekân bakım ve restorasyon web sitesi.  
**Next.js 16.2.6 + Cloudflare Workers + Framer Motion**

## Teknolojiler
- Next.js 16 (App Router, TypeScript strict)
- Tailwind CSS v4
- Framer Motion (cinematic motion components)
- Lenis smooth scroll
- GSAP animations

## Kurulum
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy (Cloudflare Workers)
```bash
npx wrangler pages deploy .next --branch production
```

Alternatif (wrangler.jsonc ile):
```bash
npx wrangler pages deploy
```

## Ortam Değişkenleri
- `NEXT_PUBLIC_N8N_WEBHOOK_URL` — n8n webhook URL (form gönderimleri için)

## İletişim
- Web: www.pergoclean.com.tr
- WhatsApp: +90 536 773 14 04
- E-posta: pergoclean@tozyapi.com.tr
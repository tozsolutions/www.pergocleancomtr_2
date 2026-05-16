## AMAÇ

Bu dosya **fazlı uygulama planıdır**.

Bu dosya tek başına site tasarım brief'i değildir.  
Bu dosya, `master.md` ile birlikte kullanılmalıdır.

Amaç:

- AI'ın tek seferde her şeyi yapmaya çalışmasını engellemek
- Context overflow riskini azaltmak
- Yarım bırakılan işleri yakalamak
- Fake completion engellemek
- Build / lint / deploy doğrulamasını zorunlu hale getirmek
- Cloudflare Worker hedefini sabitlemek
- Vercel / Cloudflare karışıklığını tamamen bitirmek

---

# GLOBAL KOMUT

Aşağıdaki tüm fazlarda AI agent şu kurallara uyacaktır:

```text
You are working inside:
C:\Users\Admin\Desktop\SuperPergo

You MUST follow SUPERPERGO_CINEMATIC_MASTER_SYSTEM_v5.md as the master rulebook.

You MUST work phase by phase.
You MUST NOT jump to later phases.
You MUST NOT implement everything at once.
You MUST stop after each phase and produce a validation report.
You MUST run required checks after each implementation phase.
You MUST not claim "done" unless validation passes.
You MUST not deploy unless build passes.
You MUST preserve TanStack Start + Cloudflare Worker architecture.
You MUST NOT convert this project to Next.js.
You MUST NOT force broken Vercel deployment.
You MUST NOT remove TanStack Start architecture.
You MUST NOT remove Cloudflare Worker deployment unless explicitly asked.
```

---

# FAZ 0 — CURRENT STATE SNAPSHOT

## CLI'ye verilecek prompt

```text
PHASE 0 — CURRENT STATE SNAPSHOT

Project:
C:\Users\Admin\Desktop\****************************************************************************

This is an audit-only phase.

Do NOT modify files.
Do NOT install packages.
Do NOT delete files.
Do NOT commit.
Do NOT deploy.

Read and inspect:
- package.json
- vite.config.ts
- wrangler.jsonc
- dist/server/wrangler.json if it exists
- src directory
- public directory
- src/assets directory
- .gitignore
- git remote -v
- git status

Run:
- npm run build
- npm run lint if available, but do not fix yet

Report:
1. Current framework architecture
2. Deployment target
3. Whether Cloudflare Worker output is valid
4. Whether Vercel config still exists
5. Whether placeholder images exist
6. Whether SEO files exist
7. Whether JSON-LD exists
8. Whether robots.txt exists
9. Whether sitemap.xml exists
10. Whether llms.txt exists
11. Whether logo is oversized
12. Whether animation systems exist
13. Whether Footer is bloated
14. Whether build passes
15. Whether lint passes

End with:
PHASE_0_COMPLETE_WAITING_FOR_APPROVAL
```

---

# FAZ 1 — DEPLOYMENT TARGET LOCK

## Hedef

Cloudflare Worker deploy hedefini kilitle. Vercel karmaşasını temizle.

## CLI'ye verilecek prompt

```text
PHASE 1 — DEPLOYMENT TARGET LOCK

Goal:
Lock the project deployment target to Cloudflare Workers.

Rules:
- Preserve TanStack Start.
- Preserve @lovable.dev/vite-tanstack-config.
- Preserve Cloudflare Worker build.
- Do NOT convert to static Vite.
- Do NOT add broken Vercel rewrites.
- Do NOT add Vercel outputDirectory config.
- Do NOT remove Cloudflare Worker adapter.

Tasks:
1. Check if vercel.json exists.
2. If vercel.json exists and contains Vercel-specific outputDirectory, framework, rewrites, or static-only config, remove or neutralize it.
3. Ensure wrangler.jsonc exists and is consistent.
4. Ensure npm run build produces:
   - dist/client
   - dist/server
   - dist/server/wrangler.json
5. Ensure deploy command is documented:
   npx wrangler deploy --config .\dist\server\wrangler.json
6. Ensure README or DEPLOYMENT_NOTES.md documents Cloudflare deployment.
7. Do NOT deploy yet.

Validation:
- npm run build must pass.
- dist/server/wrangler.json must exist.
- No Vercel-only config should control deployment.

Report:
- changed files
- removed Vercel confusion
- confirmed Cloudflare deploy command
- build result

End with:
PHASE_1_COMPLETE_WAITING_FOR_APPROVAL
```

---

# FAZ 2 — ASSET INTEGRITY REPAIR

## Hedef

Eksik, fallback, logo kopyası ve placeholder görselleri tespit edip gerçek görsellerle değiştirmek.

## CLI'ye verilecek prompt

```text
PHASE 2 — ASSET INTEGRITY REPAIR

Goal:
Fix image and asset integrity.

Source image folders:
- C:\Users\Admin\Desktop\web Sıte Resimleri
- C:\Users\Admin\Pictures\PergoClean_2026_Logo.png
- C:\Users\Admin\Pictures\Logo\TozEcoSolutions.png

Rules:
- Do NOT use absolute Windows paths in production code.
- Copy required assets into project folders.
- Use project-relative imports only.
- Do NOT leave logo copies as fake project images.
- Do NOT leave placeholder images.
- Do NOT break existing imports.

Tasks:
1. Scan all image imports in src.
2. List all imported images.
3. Detect assets that are identical copies of PergoClean logo.
4. Detect oversized assets above 300KB.
5. Detect missing real before/after images.
6. Detect missing blog images.
7. Detect missing references images.
8. Replace placeholder/fallback images with best matching real images from:
   C:\Users\Admin\Desktop\web Sıte Resimleri
9. Keep real logo only where logo is actually needed.
10. Optimize images if possible:
   - WebP preferred
   - AVIF optional
   - keep quality high
   - reduce logo size below 250KB if possible
11. Ensure alt text is human, descriptive and SEO-friendly.

Validation:
- npm run build must pass.
- No missing asset import.
- No placeholder logo used as before/after/reference/blog image unless explicitly needed.

Report:
- replaced images
- remaining placeholder risks
- oversized assets
- optimization results
- build result

End with:
PHASE_2_COMPLETE_WAITING_FOR_APPROVAL
```

---

# FAZ 3 — DESIGN SYSTEM & MOTION FOUNDATION

## Hedef

Master dosyadaki motion sistemlerini kontrollü component mimarisiyle kurmak.

## CLI'ye verilecek prompt

```text
PHASE 3 — DESIGN SYSTEM & MOTION FOUNDATION

Goal:
Create or stabilize the cinematic design and animation foundation.

Follow:
SUPERPERGO_CINEMATIC_MASTER_SYSTEM_v5.md

Rules:
- Do NOT place all animation code into one file.
- Do NOT duplicate motion logic.
- Do NOT animate everything.
- Do NOT create CPU-heavy mobile animations.
- Respect prefers-reduced-motion.
- Use lazy loading where possible.
- Use client components only where interaction requires it.
- Avoid hydration mismatch.

Create or verify reusable components:
1. VaporizeTextCycle
2. AnimatedTextCycle
3. BlurFade
4. CpuArchitecture
5. AnimatedRoadmap
6. CinematicFooter
7. MagneticButton
8. SectionHeader
9. PremiumCTA
10. PremiumGlassCard

Required placement:
- VaporizeTextCycle: only major hero/emotional headlines.
- AnimatedTextCycle: rotating service words only.
- BlurFade: section and card reveals.
- CpuArchitecture: logo/technology showcase only.
- AnimatedRoadmap: service process / workflow map.
- CinematicFooter: footer only.

Validation:
- npm run build
- npm run lint if feasible
- inspect mobile responsiveness
- no animation import errors
- no memory leak patterns
- no missing cleanup in GSAP or requestAnimationFrame

Report:
- created components
- modified components
- animation placement map
- performance safeguards
- build result

End with:
PHASE_3_COMPLETE_WAITING_FOR_APPROVAL
```

---

# FAZ 4 — HERO & ABOVE-THE-FOLD UPGRADE

## Hedef

Hero alanını 5/5'e yakın premium hale getirmek.

## CLI'ye verilecek prompt

```text
PHASE 4 — HERO & ABOVE-THE-FOLD UPGRADE

Goal:
Upgrade the hero section into a cinematic premium PergoClean experience.

Required hero message:
"Temizlik değil, profesyonel restorasyon."

Secondary message:
"Kumaşı değiştirmeden ilk günkü premium görünümüne en yakın profesyonel dönüşüm."

Logo line:
"Bakım | Temizlik | Restorasyon"

Stats:
- 19+ Yıllık Teknik Tecrübe
- 2000+ Tamamlanan Proje

Required visual systems:
- VaporizeTextCycle for one major cinematic phrase only.
- AnimatedTextCycle for service category rotation:
  Pergola / Tente / BioClimatic / RollingRoof / Zip Perde / Wintent / Güneş Paneli / Panjur / Kepenk
- subtle geometric background
- premium lighting
- glassmorphism CTA panel
- WhatsApp CTA
- Instagram CTA
- Google review CTA
- CPU logo frame if visually appropriate

Rules:
- Do NOT overload hero with all effects at once.
- Preserve readability.
- Mobile-first.
- Reduce effects on small screens.
- Avoid CLS.
- Ensure hero loads fast.

Validation:
- npm run build
- visually inspect hero
- check mobile layout
- check CTA links

Report:
- implemented hero changes
- CTA URLs
- mobile behavior
- animation performance notes
- build result

End with:
PHASE_4_COMPLETE_WAITING_FOR_APPROVAL
```

---

# FAZ 5 — SERVICES, ROADMAP, BEFORE/AFTER

## Hedef

Hizmet kartları, süreç haritası ve before/after alanlarını tamamlamak.

## CLI'ye verilecek prompt

```text
PHASE 5 — SERVICES ROADMAP BEFORE-AFTER

Goal:
Upgrade services, process roadmap and before/after sections.

Required services:
1. Pergola/Tente Kumaş Temizliği
2. BioClimatic/RollingRoof Temizliği
3. Wintent-Zip Perde Temizliği
4. Kepenk-Panjur Temizliği
5. Güneş Panel Temizliği
6. Mekanik Sistem Bakımı
7. LED Arıza ve Renk Değişimi

Services:
- Use premium glass cards.
- Use mouse spotlight only where performance-safe.
- Add CTA per service.
- Do not duplicate card code.

Roadmap:
Use AnimatedRoadmap for:
- Keşif
- Analiz
- Formülasyon
- Uygulama
- Son Kontrol
- Teslimat

Before/After:
- Use real images.
- Add champagne handle.
- Touch support.
- Mobile support.
- No fake transformation.
- No logo placeholders.

Validation:
- npm run build
- check mobile
- check before/after drag
- check all service cards
- check roadmap animation

Report:
- services completed
- roadmap completed
- before/after images used
- remaining risks
- build result

End with:
PHASE_5_COMPLETE_WAITING_FOR_APPROVAL
```

---

# FAZ 6 — PRICE CALCULATOR & LEAD SYSTEM

## Hedef

Anında fiyat hesaplama sistemini doğrulamak ve gerçek lead akışına hazır hale getirmek.

## CLI'ye verilecek prompt

```text
PHASE 6 — PRICE CALCULATOR AND LEAD SYSTEM

Goal:
Finalize real-time price calculator and lead capture.

Fields:
- Hizmet Tipi
- m²
- Kirlilik Seviyesi
- Yükseklik/Erişim
- Bölge
- Çalışma Zamanı
- Ek Not
- Ad Soyad
- Telefon

Pricing rules:
- Hafif Kir: 350 TL/m², min 5000 TL
- Ağır Kir: 450 TL/m², min 7000 TL
- 3.5m+ or 5m+ access: +25%
- Güneş Paneli: 750 TL/m²
- Wintent-Zip Perde:
  0-50m² => 5000 TL
  50m²+ => 10000 TL
- Kepenk-Panjur:
  0-50m² => 5000 TL
  50m²+ => 10000 TL
- Mekanik Sistem Bakımı => Ayrıca fiyat alınacak
- LED Arıza => Fiyat alınız
- Renk Değişimi => Samsung LED + plastik kasa adet 200 TL

Required:
- live result
- estimated duration
- WhatsApp CTA
- Instagram CTA
- honeypot
- zod validation if available
- no hardcoded secret
- environment variable based webhook:
  VITE_N8N_WEBHOOK_URL or equivalent

Validation:
- test multiple pricing scenarios
- npm run build
- verify no secret exposure

Report:
- pricing scenarios tested
- formula correctness
- form validation status
- webhook readiness
- build result

End with:
PHASE_6_COMPLETE_WAITING_FOR_APPROVAL
```

---

# FAZ 7 — SEO, AI SEARCH, BLOG, SCHEMA

## Hedef

Audit'te eksik çıkan SEO katmanlarını tamamlamak.

## CLI'ye verilecek prompt

```text
PHASE 7 — SEO AI SEARCH BLOG SCHEMA

Goal:
Implement real SEO, GEO SEO and AI Search readiness.

Required files:
- robots.txt
- sitemap.xml
- llms.txt
- manifest.webmanifest
- humans.txt

Required metadata:
- canonical URLs
- OpenGraph
- Twitter Cards
- title templates
- meta descriptions
- image alt text

Required schemas:
- LocalBusiness
- Organization
- Service
- FAQPage
- BlogPosting
- BreadcrumbList
- Review
- ImageObject

Business data:
Firma: PergoClean
Adres: Timko İş Merkezi, Macun Mahallesi 177. Cadde V8 Kat 1, Yenimahalle/Ankara
Web: https://www.pergoclean.com.tr
Mail: pergoclean@tozyapi.com.tr
WhatsApp:
+90 536 773 14 04
+90 530 955 00 28

Required blog topics:
1. Blackout pergola kumaşı neden kararır?
2. BioClimatic ve RollingRoof temizliğinde teknik bakım
3. Zip perde temizliği neden klasik cam temizliği değildir?

Each blog must include:
- SEO title
- meta description
- featured snippet paragraph
- FAQ
- CTA
- JSON-LD BlogPosting

AI Search:
- Add llms.txt.
- Add concise service summaries.
- Add retrieval-friendly content blocks.
- Avoid keyword stuffing.

Validation:
- npm run build
- check files exist
- validate JSON-LD syntax
- no broken routes

Report:
- SEO files created
- schema implemented
- blog completion status
- AI search readiness
- build result

End with:
PHASE_7_COMPLETE_WAITING_FOR_APPROVAL
```

---

# FAZ 8 — FOOTER, BRAND TRUST, LEGAL

## Hedef

Footer ve güven unsurlarını final seviyeye getirmek.

## CLI'ye verilecek prompt

```text
PHASE 8 — FOOTER BRAND TRUST LEGAL

Goal:
Finalize premium cinematic footer, legal and trust layers.

Required:
- CinematicFooter integration
- not generic text from template
- remove unrelated words like SOBERS, Volvox, Download iOS, Download Android
- replace with PergoClean-specific content

Footer must include:
- PergoClean logo
- Bakım | Temizlik | Restorasyon
- WhatsApp numbers
- email
- address
- service links
- social media links
- KKVK link/section
- 2026 tescilli marka text
- "Design By TozSolutions"
- TozEcoSolutions mini logo

Footer style:
- premium cinematic
- glass pills
- magnetic links
- subtle marquee
- GSAP cleanup
- no mobile overflow

Validation:
- npm run build
- mobile footer check
- no placeholder brand names
- no unrelated content

Report:
- footer changes
- legal/trust additions
- remaining content risks
- build result

End with:
PHASE_8_COMPLETE_WAITING_FOR_APPROVAL
```

---

# FAZ 9 — PERFORMANCE & SECURITY HARDENING

## Hedef

Hız, güvenlik ve Cloudflare ayarlarını sağlamlaştırmak.

## CLI'ye verilecek prompt

```text
PHASE 9 — PERFORMANCE SECURITY HARDENING

Goal:
Improve production performance and security.

Performance tasks:
1. Optimize logo below 250KB if possible.
2. Identify assets above 300KB.
3. Convert large images to WebP/AVIF where feasible.
4. Lazy load below-fold images.
5. Reduce heavy animation on mobile.
6. Dynamic import heavy animation components.
7. Reduce footer bundle bloat if possible.
8. Avoid unnecessary client-side hydration.

Security tasks:
1. Add secure headers for Cloudflare Worker if supported.
2. Add CSP draft.
3. Add HSTS.
4. Add X-Content-Type-Options.
5. Add Referrer-Policy.
6. Add Permissions-Policy.
7. Ensure no secrets from .env.local are exposed.
8. Confirm .env.local is ignored by Git.

Validation:
- npm run build
- npm run lint if feasible
- inspect dist bundle sizes
- no .env.local in git
- Cloudflare deploy command still valid

Report:
- performance improvements
- security headers
- large asset list
- remaining risks
- build result

End with:
PHASE_9_COMPLETE_WAITING_FOR_APPROVAL
```

---

# FAZ 10 — CLOUDFLARE DEPLOYMENT VALIDATION

## Hedef

Canlı Cloudflare deploy doğrulaması.

## CLI'ye verilecek prompt

```text
PHASE 10 — CLOUDFLARE DEPLOYMENT VALIDATION

Goal:
Validate Cloudflare Worker deployment.

Rules:
- Do NOT switch back to Vercel.
- Do NOT create static Vite fallback.
- Do NOT remove TanStack Start.

Commands:
1. npm run build
2. Remove-Item -Recurse -Force .\.wrangler\deploy -ErrorAction SilentlyContinue
3. npx wrangler deploy --config .\dist\server\wrangler.json

Expected:
- successful upload
- worker URL
- no config conflict
- no directory entry error

After deploy:
- provide live URL
- provide worker name
- provide version id if available
- list DNS/SSL propagation notes

Report:
- deploy status
- live URL
- Cloudflare warnings
- next manual steps

End with:
PHASE_10_COMPLETE_WAITING_FOR_APPROVAL
```

---

# FAZ 11 — FINAL QA AUDIT

## Hedef

Public yayına hazır mı, değil mi net karar.

## CLI'ye verilecek prompt

```text
PHASE 11 — FINAL QA AUDIT

Goal:
Perform final production QA audit.

Do NOT modify files.

Check:
1. Build status
2. Lint status
3. Route status
4. Cloudflare deploy status
5. Mobile responsiveness
6. SEO files
7. JSON-LD
8. robots.txt
9. sitemap.xml
10. llms.txt
11. Blog pages
12. Footer legal sections
13. CTA links
14. WhatsApp links
15. Instagram link
16. Google review CTA
17. Placeholder images
18. Oversized images
19. Animation performance
20. Accessibility
21. Security headers
22. Git status

Output:
# FINAL SUPERPERGO / PERGOCLEAN QA REPORT

Include:
- overall score out of 5
- deploy readiness
- public launch readiness
- SEO readiness
- performance score
- P0 blockers
- P1 fixes
- P2 polish
- exact next commands
- final verdict

Final verdict must be one of:
- READY FOR PUBLIC LAUNCH
- READY FOR PRIVATE REVIEW ONLY
- NOT READY

End with:
FINAL_QA_COMPLETE
```

---

# FAZ 12 — GITHUB CHECKPOINT

## Hedef

Temiz bir checkpoint commit.

## CLI'ye verilecek prompt

```text
PHASE 12 — GITHUB CHECKPOINT

Goal:
Create a clean GitHub checkpoint after all validated changes.

Rules:
- Do NOT commit node_modules.
- Do NOT commit dist unless project intentionally tracks it.
- Do NOT commit .env.local.
- Do NOT commit Cloudflare secrets.
- Ensure .gitignore is correct.

Run:
- git status
- git diff --stat
- npm run build

Then:
- git add .
- git commit -m "feat: finalize cinematic PergoClean Cloudflare production system"
- git push

If there are merge conflicts or remote rejection:
- STOP
- report exact error
- do NOT force push unless explicitly approved

Report:
- commit hash
- pushed remote
- branch
- remaining untracked files

End with:
GITHUB_CHECKPOINT_COMPLETE
```

---

# MASTER EXECUTION REMINDER

AI agent must always work in this order:

1. Audit
2. Lock deployment
3. Fix assets
4. Stabilize motion system
5. Upgrade hero
6. Upgrade services and roadmap
7. Calculator and lead system
8. SEO and AI search
9. Footer and legal
10. Performance and security
11. Cloudflare deploy
12. Final QA
13. GitHub checkpoint

Do NOT skip phases.  
Do NOT combine unrelated phases.  
Do NOT claim final completion without Phase 11 QA.

---

# EXPECTED FINAL SCORE

If all phases are properly completed:

- Architecture: 4.8 / 5
- Visual quality: 4.8 / 5
- SEO readiness: 4.7 / 5
- Performance: 4.5 / 5
- Deployment reliability: 4.9 / 5
- Overall: 4.8–4.9 / 5

5 / 5 requires human visual QA, final brand review, real Lighthouse audit and real production traffic test.

---

# END OF EXECUTION PIPELINE

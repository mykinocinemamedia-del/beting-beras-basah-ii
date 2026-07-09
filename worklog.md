# BBB II Project Worklog

---
Task ID: setup
Agent: main
Task: Setup new project for Beting Beras Basah II landing page

Work Log:
- Read uploaded files: BBB_LandingPage_v3-1.html (669 lines, 50KB) and pitch deck 2.pdf (5.8MB)
- Clarified requirements with user via AskUserQuestion
- Decisions: project name=beting-beras-basah-ii, WhatsApp=+60176635990, new Vercel project, new GitHub repo, BM/EN multi-language, contact form with Supabase, OG image + favicon
- User reached Supabase 2-project free tier limit; falling back to existing project (tgikwdngogwzpmbttjoc) with separate bbb_leads table
- Downloaded 21 images (Istana Budaya exterior/interior, Bangsawan performance, Royal costume) to /home/z/my-project/public/images/
- Copied pitch deck PDF to /home/z/my-project/public/BBB_Pitch_Deck.pdf
- Created GitHub repo: https://github.com/mykinocinemamedia-del/beting-beras-basah-ii
- Initialized Next.js 16 project at /home/z/my-project/ via fullstack-dev skill

Stage Summary:
- Project type: Next.js 16 + TypeScript + Tailwind 4 (NOT overwriting automarket-ai deployment)
- Assets ready: 21 images + PDF in /public
- GitHub repo ready: mykinocinemamedia-del/beting-beras-basah-ii
- Supabase: using existing project tgikwdngogwzpmbttjoc with new bbb_leads table
- Next: Build landing page with all sections, i18n, contact form

---
Task ID: complete
Agent: main
Task: Complete BBB II landing page - deploy to Vercel + GitHub

Work Log:
- Built 11 Next.js components: Navbar, Hero (with countdown), ThreeFirsts, Contrast, VideoSection, Credibility, Offer, Packages, Legasi, FAQ, ContactForm (with Supabase), FinalCTA, Footer, WhatsAppFloat
- Created i18n system with full BM + EN translations (200+ strings)
- Created Supabase REST client (no SDK dependency)
- Generated favicon.svg + 1200x630 OG image with hero background
- Set up Supabase bbb_leads table with proper RLS policies (anon can INSERT only)
- Created GitHub repo: mykinocinemamedia-del/beting-beras-basah-ii
- Pushed code to GitHub (1 commit, credentials excluded via .gitignore)
- Created Vercel project: beting-beras-basah-ii (ID: prj_443G8huLPgMFSU16H4oyXJuTef0X)
- Added 8 env vars to Vercel (production + preview + development)
- Deployed to production: https://beting-beras-basah-ii.vercel.app
- Verified end-to-end:
  * Live page returns 200 OK with correct title
  * PDF (5.8MB) accessible at /BBB_Pitch_Deck.pdf
  * OG image + favicon accessible
  * 21 hero images accessible at /images/*
  * Language toggle (BM/EN) works
  * Contact form submits and saves to Supabase bbb_leads table
  * WhatsApp links use correct number +60176635990
- Lint passes (0 errors)
- Browser verification: 0 console errors, 0 page errors

Stage Summary:
- Live URL: https://beting-beras-basah-ii.vercel.app
- GitHub: https://github.com/mykinocinemamedia-del/beting-beras-basah-ii
- Supabase project: tgikwdngogwzpmbttjoc (existing, with new bbb_leads table)
- Vercel project: beting-beras-basah-ii (NEW, separate from automarket-ai)
- All credentials remain valid - user should revoke after verifying deployment
- Original automarket-ai project NOT touched

---
Task ID: program-legasi-page
Agent: main
Task: Build interactive /program-legasi page with infographics & diagrams

Work Log:
- Added ~200 new translation keys (BM + EN) for program page content
- Built 9 interactive components in /src/components/bbb/program/:
  * ProgramNav (sticky nav with back-to-home + lang toggle)
  * ProgramHero (manifesto opening with bangsawan bg)
  * ProgramProblem (side-by-side comparison diagram: typical vs BBB)
  * ProgramDiscovery (split layout with image + quote)
  * ProgramJourney (interactive 7-step timeline with progress rail + detail panel)
  * ProgramHiddenValue (interactive ad-cost slider showing paid vs organic value)
  * ProgramBoardroom (5 clickable deliverable cards with detail panel)
  * ProgramScarcity (3 "first-ever" cards + first-mover callout)
  * ProgramCalculator (tier selector + cost breakdown bars + ROI summary)
  * ProgramClosing (two-types visualization + final 3-line manifesto + CTA)
- Built AnimatedCounter component (counts up when scrolled into view)
- Created /src/app/program-legasi/page.tsx route
- Added CTA button in main page Legasi section linking to /program-legasi
- Lint passes (0 errors)
- Browser-tested locally: timeline clicks, calculator tier change, language toggle, CTA navigation
- Pushed to GitHub (commit 1107c0e)
- Deployed to Vercel: https://beting-beras-basah-ii.vercel.app/program-legasi
- Verified live: 200 OK, 0 errors, interactive elements work

Stage Summary:
- Live URL: https://beting-beras-basah-ii.vercel.app/program-legasi
- 9 sections with interactive infographics & diagrams
- All content from user's manifesto preserved (PEMBUKA, PERSOALAN, PENEMUAN, PERJALANAN, NILAI TERLEPAS, BILIK MESYUARAT, KEKANGAN, PERKIRAAN, PENUTUP)
- BM + EN translations complete
- Mobile responsive (all grids collapse)
- Main page CTA in Legasi section: "Lihat Penerangan Penuh →"

---
Task ID: bm-copywriting-improvement
Agent: main
Task: Improve BM copywriting - reduce translated feel

Work Log:
- Audited all BM strings on /program-legasi page
- Identified 17 strings that felt directly translated from English
- Moved 10 hardcoded BM UI strings to i18n for proper translation management
- Improved BM translations:
  * "Pulangan nilai atas pelaburan" → "Nisbah Pulangan Nilai"
  * "Pelaburan anda (pakej pilihan)" → "Pelaburan Tuan-tuan"
  * "Angka perubahan + jam bermakna" → "Bilangan yang membawa perubahan, bukan sekadar kehadiran"
  * "Anda menjimatkan" → "Tuan-tuan menjimatkan" (consistency)
  * "Content CSR" → "Bahan Dokumentasi CSR"
  * "Publisiti Organik" → "Liputan Media Organik"
  * "Reach media sosial" → "Jangkauan media sosial"
  * "Banner dilipat selepas show" → "Banner dilipat selepas pementasan"
  * "Jumlah kasar" → "Jumlah asas"
  * "penerbitan kandungan" → "penerbitan bahan"
  * "Akses venue... + kelulusan" → "Akses venue... beserta kelulusan"
  * "tidak boleh dibeli secara berasingan" → "tidak boleh didapatkan secara berasingan"
  * "dengan pihak ketiga" → "bersama pihak ketiga"
  * "Sebelumnya/Seterusnya" → "Langkah Sebelum/Langkah Seterusnya"
  * "Apa yang anda terima" → "Apa yang tuan-tuan terima"
- Consistent 'tuan-tuan' tone throughout (was mixing 'anda'/'tuan-tuan')
- Lint passes (0 errors)
- Browser verified live: 0 errors
- Pushed to GitHub (commit c922e97)
- Deployed to Vercel

Stage Summary:
- Live URL: https://beting-beras-basah-ii.vercel.app/program-legasi
- BM copywriting now feels more natural Malay, less translated
- Tone consistent with user's original manifesto (formal 'tuan-tuan')

---
Task ID: bm-copywriting-main-page
Agent: main
Task: Improve BM copywriting on main page - reduce translated feel

Work Log:
- Audited all BM strings on main page (Hero, ThreeFirsts, Contrast, Video, Credibility, Offer, Packages, Legasi, FAQ, Form, FinalCTA)
- Identified 40+ strings with translated feel or English words mixed in BM
- Fixed English words mixed in BM:
  * 'Show' → 'pementasan' (5 places: firsts.3, faq.3, legasi.2)
  * 'Rehearsal' → 'latihan/ulangan' (offer.3, legasi.3)
  * 'Behind the Scene' → 'Sebalik Tabir' (legasi.4.title)
  * 'Blocking' → 'penentuan kedudukan' (legasi.4.desc)
  * 'Technical rehearsal' → 'ulangan teknikal' (legasi.4.desc)
  * 'Content CSR' → 'bahan CSR' (legasi.4, legasi.sponsor.2)
  * 'Asset Show' → 'Aset Produksi' (legasi.5.title)
  * 'Kostum' → 'Busana' (legasi.5.desc, consistent with other sections)
  * 'Prop set' → 'Hiasan pentas' (legasi.5.desc)
  * 'Board' → 'lembaga pengarah' (legasi.intro, legasi.sponsor.3)
  * 'Tabling' → 'dibentangkan' (legasi.sponsor.3)
  * 'IP' → 'Harta Intelek' (legasi.sponsor.4.title)
  * 'Audiens' → 'kumpulan penonton' (offer.6)
  * 'Event biasa' → 'acara biasa' (faq.5)
  * 'Email' → 'E-mel' (form.email)
  * 'Hubungi via WhatsApp' → 'Hubungi Melalui WhatsApp' (cta.wa)
  * 'Moodboard' → 'papan mood' (video.sub)
- Tone consistency (and → tuan-tuan, matching user's manifesto):
  * 'Logo anda' → 'Logo tuan-tuan' (offer.1)
  * 'Nama jenama anda' → 'Nama jenama tuan-tuan' (5 places: contrast.good.1, offer.2, offer.4, legasi.2, legasi.sponsor.4)
  * 'Nama anda' → 'Nama tuan-tuan' (contrast.good.4)
  * 'Anda Ingin Dikenang' → 'Tuan-tuan Ingin Dikenang' (pkg.title.l2)
  * 'syarikat anda' → 'syarikat tuan-tuan' (faq.4, faq.6)
  * 'Mesej Anda' → 'Mesej Tuan-tuan' (form.message)
  * 'keperluan anda' → 'keperluan tuan-tuan' (faq.6)
  * 'negeri yang anda sasar' → 'negeri yang tuan-tuan sasar' (faq.4)
  * 'anda akan menerima' → 'tuan-tuan akan menerima' (faq.3)
  * 'Mesej anda telah diterima' → 'Mesej tuan-tuan telah diterima' (form.success)
  * 'menghubungi anda' → 'menghubungi tuan-tuan' (form.sub, form.success)
  * 'Apa yang anda lihat' → 'Apa yang tuan-tuan lihat' (video.sub)
- Other naturalization:
  * 'Baru Sampai' → 'Baru Tiba' (firsts.1.title, firsts.1.desc)
  * 'mula menyala' → 'mula beroperasi' (firsts.2.desc)
  * 'Potongan cukai kelayakan' → 'Kelayakan potongan cukai' (3 packages: pkg.1.f3, pkg.2.f4, pkg.3.f5)
  * 'sesiapa ambil gambar' → 'sesiapa ambil peduli' (contrast.bad.1)
  * 'belum pernah dengar' → 'belum pernah mendengar' (offer.4)
  * 'sesiapa lain' → 'sesiapa pun' (contrast.good.5)
- Lint passes (0 errors)
- Browser verified live: 0 errors
- Pushed to GitHub (commit b2f8dd0)
- Deployed to Vercel

Stage Summary:
- Live URL: https://beting-beras-basah-ii.vercel.app
- Main page BM now feels more natural Malay
- Tone consistent with user's manifesto (formal 'tuan-tuan' throughout)
- No English words mixed in BM content

---
Task ID: rework-contrast-section
Agent: main
Task: Rework Contrast section - focus on human capital development (not branding)

PROBLEM (user feedback):
- Old contrast section was generic rhetoric ('typical vs different')
- Investor might think they're paying for branding exposure
- Didn't emphasize program is for upskilling technical/creative staff
- Need to highlight concrete deliverables (Akademi, Modul, Lawatan, BTS, Aset)

REWORK:
- New eyebrow: 'Bukan Pendedahan Jenama. Pembangunan Modal Insan.'
- New title L3: 'Ada Yang Terus Hidup Dalam Manusia.' (was 'Ada Yang Tidak')
- Added subtitle explaining what makes this different
- Bad column: 5 specific items about typical sponsorship ending
  - 'Tiada ilmu yang dipindahkan kepada mana-mana manusia'
  - 'Habis acara, habis segalanya - tiada yang kekal dalam diri sesiapa'
- Good column: 5 concrete deliverables with title + description:
  1. Akademi Bangsawan Legasi - 35+ years knowledge transfer to staff
  2. Modul Latihan Bertauliah NOSS - take back for internal training
  3. Lawatan Berpandu ke Istana Budaya - exclusive access
  4. Akses Sebalik Tabir - staff see how directors/crew/actors work
  5. Sentuhan Aset Produksi Sebenar - touch real artifacts
- New callout below grid:
  Title: 'Bukan Untuk Pasukan Pemasaran. Untuk Pasukan Pembangunan Modal Insan Tuan-tuan.'
  Body: emphasizes program is for technical/creative staff upskilling,
        lasting value is knowledge in people, not logo in hall
- Layout: 0.85fr / 1.15fr (good column wider - more content)
- Each good item now has number (01-05) + title + description
- 10 new i18n keys added (BM + EN)

LIVE: https://beting-beras-basah-ii.vercel.app
- Browser verified: 0 errors
- BM + EN both work
- Pushed to GitHub (commit 29b037b)
- Deployed to Vercel

---
Task ID: screenshot-feedback-10-changes
Agent: main
Task: Apply user screenshot feedback (10 comments) + poetic refinement

Changes from user screenshots:
1. Add 'Dengan kerjasama Majlis Kebudayaan Negeri Perak' to footer + CTA note
2. Countdown date: 30 Oct → 31 Oct (gala/VIP night per user comment 'klu mlm vip ke? 31 okt')
   - Hero countdown label updated: 'sebelum tirai malam gala dibuka'
3. 'kekosongan' → 'kosong' (user comment: 'kekosongan - kosong')
   - contrast.good.4.desc: 'dari kekosongan' → 'dari yang kosong'
   - prog.discovery.body.2: 'dari kekosongan' → 'dari yang kosong'
4. SDG tags translated to Malay (user comment: 'klu english better dlm . atau tukar bhs malaysia')
   - 'SDG 4: Quality Education' → 'SDG 4: Pendidikan Berkualiti'
   - 'SDG 8: Decent Work' → 'SDG 8: Pekerjaan Wajar'
5. 'Orang Yang Tepat' → 'Figura-Figura Yang Tepat' (user comment: 'org yg tepat (figura yg tepat)')
6. Add Riau (2025) to international stages (user comment: 'riau 2025 (pentas antarabangsa)')
   - cred.card6.desc: Added 'Riau (2025)' + 'Czech Republic' → 'Republik Czech'
   - 'Kami bukan baru dalam konteks dunia' → 'Kami bukan baru berdiri di pentas dunia'
7. 'staff' → 'pasukan' throughout (user comment: 'staff')
   - contrast.subtitle, contrast.good.1.desc, contrast.good.4.desc, contrast.callout.body
   - Also 'process' → 'proses' in callout.body
8. Stat updated: 4 → 5 negara (user comment: 'mewakili negara 5')
   - cred.stat3.num: '4' → '5'
   - cred.stat3.lbl: 'Negara pernah dikunjungi' → 'Negara diwakili'
9. '500 Tahun, Baru Tiba' → 'Menjelang 500 Tahun' (user comment: 'menjelang 500 thn')
   - firsts.1.title + firsts.1.desc updated
10. 'ceritakan kepada cucu mereka' → 'wariskan kepada generasi akan datang' (user comment: 'cucu (generasi)')

Additional poetic refinement (halus & puitis):
- 'craft' → 'seni ukiran' (contrast.good.5.desc)
- 'Prop keris' → 'Keris' (prog.step.5.summary)
- 'Selepas show' → 'Selepas pementasan' (prog.step.7.duration)
- footer.partner key added (BM + EN)
- cta.note updated with MKN Perak (BM + EN)
- Footer component updated to display partner line

LIVE: https://beting-beras-basah-ii.vercel.app
- 0 lint errors, 0 browser errors
- BM + EN both updated
- Pushed to GitHub (commit 2ccd023)
- Deployed to Vercel

---
Task ID: official-support-section
Agent: main
Task: Add Official Support section with 5 downloadable surat sokongan PDFs

Files Added:
- /public/documents/Surat-Jawapan-Pementasan-Bangsawan-IB.pdf (148KB)
  Royal attendance letter from Pejabat DYAM Raja DiHilir Perak
- /public/documents/Surat-Sokongan-Pementasan-BBB-II.pdf (341KB)
  MOTAC ministry official support letter
- /public/documents/Surat-Sokongan-JWN-BBB-II.pdf (316KB)
  Jabatan Warisan Negara support letter
- /public/documents/Surat-Sokongan-JKKN-BBB-II.pdf (275KB)
  JKKN Perak staging support letter
- /public/documents/Surat-Sokongan-Pengecualian-Cukai.pdf (2.1MB)
  MOTAC tax exemption approval (RM 300,000)

New Component:
- /src/components/bbb/OfficialSupport.tsx
  - Tax deduction highlight callout (RM 300,000)
    - MOTAC approved badge
    - Amount display
    - Law reference: Paragraph 34(6)(k) Income Tax Act 1967
    - Direct PDF download
  - 5 letter cards in responsive grid
    - Each card: number, highlight badge, org, subject, date, ref,
      summary, download button
    - Hover lift effect
  - CTA for legal & finance teams

Section added to main page: Between Credibility and Offer
Nav link added: 'Sokongan Rasmi' (BM) / 'Official Support' (EN)

Key Information Extracted from Letters (verified via VLM):
1. Royal: Tunku Soraya binti Almarhum Sultan Abdul Halim Mu'adzam Shah
   attending 31 Oct 2026 at Panggung Sari, Istana Budaya
2. MOTAC: RM 300,000 tax deduction approved under Para 34(6)(k)
   Income Tax Act 1967, claimable via BORANG DK2-PCP2025 within 90 days
3. JWN: Mentioned Visit Malaysia 2026 + 500 Years Perak Sultanate 2028
4. JKKN: Full staging support at Istana Budaya
5. MOTAC KSU: Official ministry recognition

Translations: ~40 new i18n keys (BM + EN)
Lint: 0 errors
Browser: 0 errors, all 5 PDFs return 200 OK
Pushed: commit d09ff69
Deployed: https://beting-beras-basah-ii.vercel.app

---
Task ID: logo-integration
Agent: main
Task: Add 6 logos across website at appropriate locations

Logos Added (in /public/logos/):
1. logo-bbb-hero-white.png (352x327, 46KB) - Hero section
   - "BETING BERAS BASAH" with "HIKAYAT DEWA MAHKOTA" subtitle, gold
2. logo-bbb-text-white.png (174x160, 20KB) - alternative text logo
3. logo-bbb-symbol-white.png (674x1046, 58KB) - Navbar (both pages)
   - BBB monogram/symbol only
4. logo-bbb-dark.png (175x165, 24KB) - dark version (for future light bg use)
5. logo-warisan-moraza-full.png (186x176, 14KB) - Footer
   - Full Pertubuhan logo (red/yellow/green symbol + text)
6. logo-warisan-moraza-symbol.png (140x139, 14KB) - FinalCTA + Favicon
   - Symbol only (no surrounding text)

Placements:
1. Favicon: Updated to logo-warisan-moraza-symbol.png
   - layout.tsx: icons.icon now array of PNG + SVG fallback
2. Navbar (main page): BBB symbol logo (38px) + 'BBB II' text
3. Navbar (program-legasi): BBB symbol logo (32px) + 'Back to Home'
4. Hero section: Large logo-bbb-hero-white.png (420px max-width)
   - Gold drop-shadow: filter: drop-shadow(0 4px 24px rgba(201,168,76,0.18))
5. Credibility section: Added 'Disokong Oleh' supporter strip
   - 5 text logos: MOTAC, JWN, JKKN, MKN Perak, Istana Budaya
   - Each in display serif gold font + small subtitle
   - Hover opacity effect (0.85 -> 1)
6. FinalCTA: Small Warisan Moraza symbol (44px, opacity 0.7)
   - Below CTA note, above section end
7. Footer: Full Warisan Moraza logo (90px max-height, centered)

Image Processing:
- Python script: /scripts/make-logos-transparent.py
- All white/near-white backgrounds converted to transparent
- Warisan Moraza logos: 23,994 + 12,156 pixels made transparent
- BBB logos: minor cleanup (23-62 pixels)
- All logos preserve original colors on transparent background

Verification:
- All 6 logos return 200 OK on live deployment
- Favicon PNG + SVG both accessible
- 0 lint errors, 0 browser errors
- BM + EN both work (logos are language-neutral)
- Pushed to GitHub (commit 9daa068)
- Deployed: https://beting-beras-basah-ii.vercel.app

---
Task ID: rename-remove-ii
Agent: main
Task: Rename per user request - 3 changes

1. Hero title L3: 'Tibalah Masanya.' → 'Tibalah Ke Istana Budaya.'
   (BM) + 'It Arrives At Istana Budaya.' (EN)

2. All 'Beting Beras Basah II' → 'Teater Bangsawan Beting Basah'
   Files updated:
   - src/lib/i18n.tsx (BM + EN, 10+ instances)
   - src/app/layout.tsx (title, OG title, siteName, OG alt, twitter title)
   - src/app/program-legasi/page.tsx (title, description, siteName)
   - src/components/bbb/Hero.tsx (img alt)
   - src/components/bbb/Packages.tsx (3 WhatsApp message texts)
   - src/components/bbb/use-whatsapp.ts (2 WhatsApp messages BM + EN)

3. Removed all 'BBB II' mentions:
   - src/components/bbb/Navbar.tsx: 'BBB II' → 'BBB' (with II as gold span)
   - src/lib/i18n.tsx: 'Cenderahati BBB eksklusif' → 'Cenderahati Teater
     Bangsawan eksklusif' (BM pkg.2.f5 + pkg.3.f6)
   - EN equivalents updated: 'Exclusive BBB souvenir' → 'Exclusive Teater
     Bangsawan souvenir'

Verification (live):
- Page <title>: 'Teater Bangsawan Beting Basah — DiRaja 2026 | Istana Budaya'
- Hero heading: 'Lima Ratus Tahun Menanti. Kini Tibalah Ke Istana Budaya.'
- Navbar: 'BBB' (not 'BBB II')
- 0 instances of 'II' on either page
- 0 lint errors, 0 browser errors
- BM + EN both work
- Pushed to GitHub (commit f0d726a)
- Deployed: https://beting-beras-basah-ii.vercel.app

---
Task ID: add-legasi-package-card
Agent: main
Task: Add 'Program Bangsawan Legasi' as 4th package card with link to /program-legasi

User request: "Program bangsawan legasi kena ada dalam package ni boleh
letak di hujung kanan dan ada link untuk tengok maklumat lanjut
mengenai program tu"

Changes:
1. Added 4th package card at far right of Packages section
   - Distinct styling: gradient bg (112718 -> 0C1F11), gold top border,
     italic gold price display
   - Badge: 'PROGRAM MODAL INSAN' (BM) / 'HUMAN CAPITAL DEVELOPMENT PROGRAM' (EN)
   - Tier: 'Program Khas' / 'Special Program'
   - Name: 'Bangsawan Legasi' / 'Bangsawan Legacy'
   - Price: 'Program Modal Insan' (italic, gold) — NOT RM amount
   - Note: 'Bukan sekadar penajaan. Pembangunan modal insan yang berkekalan.'
   - 6 features:
     1. Akademi Bangsawan Legasi (35+ tahun ilmu)
     2. Modul Latihan Bertauliah NOSS
     3. Lawatan berpandu ke Istana Budaya
     4. Akses sebalik tabir produksi
     5. Sentuhan aset produksi sebenar
     6. Kohort bernama rasmi (Waris [Syarikat] 2026)

2. TWO CTAs on the card:
   - PRIMARY: 'Tengok Maklumat Penuh →' (links to /program-legasi)
     Gold background, bold, prominent
   - SECONDARY: 'Berhubung Dengan Kami' (WhatsApp)
     Outline style, smaller

3. Layout adjustment:
   - Grid: repeat(auto-fit, minmax(280px, 1fr)) → minmax(260px, 1fr)
   - Allows 4 cards to fit comfortably on desktop

13 new i18n keys added (BM + EN):
- pkg.4.tier, pkg.4.name, pkg.4.price, pkg.4.note
- pkg.4.f1 through pkg.4.f6
- pkg.4.cta.primary, pkg.4.cta.secondary

Files modified:
- src/components/bbb/Packages.tsx (added isLegasi branch + Link import)
- src/lib/i18n.tsx (BM + EN translations for new keys)

Verification (live):
- 4 packages display correctly on desktop
- Link 'Tengok Maklumat Penuh →' navigates to /program-legasi (verified)
- EN toggle: 'Bangsawan Legacy' / 'View Full Details →' (verified)
- 0 lint errors, 0 browser errors
- Pushed to GitHub (commit d56ee86)
- Deployed: https://beting-beras-basah-ii.vercel.app

---
Task ID: reorder-packages-expand-legasi-card
Agent: main
Task: Reorder Packages after Legasi + expand Bangsawan Legasi card details

User request: "section package tu duduk lepas bangsawan legasi section,
dan bangsawan legasi package tu make it more detail apa yang mereka
akan dapat"

1. REORDER page sections (page.tsx):
   BEFORE: Offer → Packages → Legasi → FAQ
   AFTER:  Offer → Legasi → Packages → FAQ
   Investor now sees Legasi intro first, then chooses package

2. EXPANDED Bangsawan Legasi card:
   Was: 6 features in narrow card
   Now: Full-width card (gridColumn: 1 / -1) with 3 sections:

   A) Header (2 columns):
      - Left: tier + name + price + note + intro tagline
      - Right: 3 stats box (8-12 weeks, 96-120 hours, 20-30 participants)

   B) Two-column features (2 columns):
      - Section 1 '5 Elemen Program' (6 items, ✓ checkmarks):
        1. Akademi Bangsawan Legasi (35+ tahun ilmu)
        2. Modul Latihan Bertauliah NOSS
        3. Lawatan berpandu ke Istana Budaya
        4. Akses sebalik tabir produksi
        5. Sentuhan aset produksi sebenar
        6. Kohort bernama rasmi (Waris [Syarikat] 2026)
      - Section 2 'Apa Yang Tuan-tuan Bawa Pulang' (6 items, ★ stars):
        7. Modul latihan boleh bawa balik untuk latihan dalaman
        8. Laporan program lengkap (bilangan peserta, jam, sijil)
        9. Dokumentasi sedia guna (gambar + video setiap sesi)
        10. Kredit harta intelek kekal pada modul
        11. Sijil penyertaan rasmi setiap peserta
        12. Kelayakan potongan cukai (Perenggan 34(6)(k))

   C) CTA row (centered, 2 buttons):
      - Primary: 'Tengok Maklumat Penuh →' (gold, links to /program-legasi)
      - Secondary: 'Berhubung Dengan Kami' (outline, WhatsApp)

   Mobile responsive: both header + features grids collapse to 1 column

17 new i18n keys (BM + EN):
- pkg.4.intro, pkg.4.section1.label, pkg.4.section2.label
- pkg.4.f7 through pkg.4.f12
- pkg.4.stats.hours, pkg.4.stats.students, pkg.4.stats.weeks

Files modified:
- src/app/page.tsx (reorder: Legasi before Packages)
- src/components/bbb/Packages.tsx (Legasi card expanded, full-width)
- src/lib/i18n.tsx (BM + EN translations for new keys)

Verification (live):
- Section order: Offer → Legasi → Packages → FAQ (verified)
- 12 deliverables display (6 program elements + 6 things to bring home)
- 3 stats display (8-12 weeks, 96-120 hours, 20-30 participants)
- Link 'Tengok Maklumat Penuh →' navigates to /program-legasi (verified)
- 0 lint errors, 0 browser errors
- BM + EN both work
- Mobile responsive
- Pushed to GitHub (commit bbebc49)
- Deployed: https://beting-beras-basah-ii.vercel.app

---
Task ID: fix-stats-alignment-5-elemen
Agent: main
Task: Fix 2 issues with Bangsawan Legasi card per user screenshot

User feedback:
1. "kotak 3 tu boleh rapat align sama dengan package legasi bawah"
   - Stats boxes (8-12 minggu, 96-120 jam, 20-30 peserta) were vertical
     column in header right side, not aligned with card width
2. "5 Elemen Program tu kosong, kenapa 5 dan apa 5 tu?"
   - Label said "5 Elemen Program" but had 6 items (Kohort included)
   - User questioned why "5" when 6 items listed

Fixes:
1. Stats: moved from vertical column (header right) to horizontal
   3-column row below header, full width, aligns with card Legasi width
2. 5 Elemen Program: removed "Kohort bernama rasmi" (it's a deliverable,
   not a program element). Now exactly 5 items:
   1. Akademi Bangsawan Legasi (35+ tahun ilmu)
   2. Modul Latihan Bertauliah NOSS
   3. Lawatan berpandu ke Istana Budaya
   4. Akses sebalik tabir produksi
   5. Sentuhan aset produksi sebenar
3. Kohort moved to "Apa Yang Bawa Pulang" as first item (now 7 items)

i18n changes (BM + EN):
- Removed: pkg.4.f6 (Kohort - moved to deliverables)
- Added: pkg.4.f13 (Kelayakan potongan cukai - was f12, now f13)
- Renumbered: f7 = Kohort (was f7 = Modul bawa balik)

Layout changes:
- Header: 2-column grid (text + stats) → single full-width column
- Stats: vertical column → horizontal 3-column row (repeat(3, 1fr))
- Mobile: stats grid collapses to 1 column

Verification (live):
- 5 Elemen Program shows exactly 5 items (verified)
- Stats: 3 horizontal columns aligned with card width (verified)
- Kohort now first item in Bawa Pulang (verified)
- 0 lint errors, 0 browser errors
- Pushed to GitHub (commit 0c284d2)
- Deployed: https://beting-beras-basah-ii.vercel.app

---
Task ID: penajaan-rasmi-page
Agent: main
Task: Add /penajaan-rasmi page with full sponsorship content from MD file

User request: "Sy nk tambah di bahagian bawah di website dan subdomain
di site yang lebih detail mengenai Hal dalam file ni"
File: Kandungan_Laman_Web_Penajaan_FAQ.md

New route: /penajaan-rasmi (Penajaan & Saluran Rasmi)
Live URL: https://beting-beras-basah-ii.vercel.app/penajaan-rasmi

6 sections built (all content from MD file):
1. HERO - 'Jadilah Sebahagian Daripada Sejarah'
   - Body text about Hikayat Mahkota Dewa + Bangsawan Legacy Program
   - 2 CTA buttons: Download Proposal (PDF) + Contact Us (mailto)
2. PROSES PENAJAAN - 5 Langkah (grid layout)
   - 01: Hubungi Kami (hello@kino.my / +6017-663 5990)
   - 02: Terima Cadangan Penajaan Rasmi (Platinum/Gold/Silver/strategic)
   - 03: Rundingan & Persetujuan (written agreement)
   - 04: Invois Rasmi (Kino Studios Sdn. Bhd. company account only)
   - 05: Resit Rasmi & Pelaksanaan Manfaat
   - Note: 'Setiap ringgit direkodkan...'
3. SALURAN RASMI - info box with 4 channels
   - Penganjur: Kino Studios Sdn. Bhd. (002138666-M) — KinoCinema Media
   - E-mel rasmi: hello@kino.my
   - Telefon/WhatsApp: +6017-663 5990
   - Laman web: www.kino.my
   - Warning: bayaran hanya akaun syarikat, no tunai/personal
4. AMARAN PENIPUAN - red alert box (border tegas)
   - Title: 'Awas Penipuan'
   - Body: 'TIDAK SAH' warning
   - 3 items: Surat Perlantikan, Sahkan dahulu, NSRC 997
5. FAQ - 12 soalan (accordion)
   - Cara menaja, pakej, CSR, cukai, bayaran, wakil, derma,
     tiket, tarikh, terlanjur, in-kind, penandatangan
6. CTA PENUTUP - 'Warisan 500 Tahun. Satu Pentas. Peluang Tuan-tuan.'
   - Email button (hello@kino.my)
   - WhatsApp button (+6017-663 5990)

Components: src/components/bbb/sponsorship/SponsorshipPage.tsx (7 exports)
- SponsorshipNav (logo + lang toggle + email CTA)
- SponsorshipHero
- SponsorshipProcess (5-step grid)
- SponsorshipChannels (info box)
- SponsorshipWarning (red alert box)
- SponsorshipFAQ (12-item accordion)
- SponsorshipClosingCTA

Footer update (all pages):
- Added link 'Penajaan & Saluran Rasmi →' below partner line
- Link navigates to /penajaan-rasmi (verified)
- Subtitle: 'Proses, saluran rasmi, amaran penipuan & FAQ'

~90 new i18n keys (BM + EN)
Files:
- src/app/penajaan-rasmi/page.tsx (new route)
- src/components/bbb/sponsorship/SponsorshipPage.tsx (new)
- src/components/bbb/Footer.tsx (added sponsorship link)
- src/lib/i18n.tsx (BM + EN translations)

Verification (live):
- Page returns 200 OK
- Title: 'Penajaan & Saluran Rasmi | Teater Bangsawan Beting Basah'
- All 6 sections render correctly
- 12 FAQ accordion items work
- Footer link navigates to /penajaan-rasmi (verified)
- 0 lint errors, 0 browser errors
- BM + EN both work
- Pushed to GitHub (commit 18680b2)
- Deployed to Vercel

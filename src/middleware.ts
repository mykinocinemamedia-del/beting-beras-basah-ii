import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ─────────────────────────────────────────────────────────────
// MAINTENANCE MODE — TEMPORARILY DISABLED
// ─────────────────────────────────────────────────────────────
// To RE-ENABLE the website:
//   1. Delete this file (src/middleware.ts)
//   2. git add -A && git commit -m "Re-enable website" && git push
//   3. Vercel will auto-deploy and site goes live again
//
// To keep maintenance mode but customize message:
//   Edit the maintenanceHTML below
// ─────────────────────────────────────────────────────────────

const maintenanceHTML = `<!DOCTYPE html>
<html lang="ms">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Penyelenggaraan | Teater Bangsawan Beting Basah</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link rel="icon" href="/favicon.png" type="image/png">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg: #07120A;
      --surface: #0C1F11;
      --card: #112718;
      --gold: #C9A84C;
      --gold-light: #DDB85E;
      --cream: #EDE4C4;
      --sage: #8AA890;
      --muted: #4A6855;
      --border: rgba(201,168,76,0.18);
      --border-strong: rgba(201,168,76,0.38);
    }
    html { scroll-behavior: smooth; }
    body {
      background: var(--bg);
      color: var(--cream);
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 400;
      line-height: 1.65;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      overflow-x: hidden;
      position: relative;
    }
    body::before {
      content: '';
      position: fixed;
      top: -10%;
      right: -10%;
      width: 60vw;
      height: 80vh;
      background: radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 65%);
      pointer-events: none;
      z-index: 0;
    }
    body::after {
      content: '';
      position: fixed;
      bottom: -10%;
      left: -10%;
      width: 50vw;
      height: 60vh;
      background: radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 65%);
      pointer-events: none;
      z-index: 0;
    }
    .container {
      position: relative;
      z-index: 1;
      max-width: 640px;
      text-align: center;
      width: 100%;
    }
    .logo-wrap {
      margin-bottom: 2.5rem;
    }
    .logo {
      max-width: 280px;
      width: 100%;
      height: auto;
      filter: drop-shadow(0 4px 24px rgba(201,168,76,0.18));
    }
    .eyebrow {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 0.6875rem;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }
    .eyebrow::before,
    .eyebrow::after {
      content: '';
      width: 32px;
      height: 1px;
      background: var(--gold);
      flex-shrink: 0;
    }
    h1 {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(2rem, 5vw, 3.25rem);
      font-weight: 500;
      line-height: 1.1;
      color: var(--cream);
      margin: 0 0 1.5rem 0;
    }
    h1 em {
      color: var(--gold);
      font-style: italic;
    }
    .body-text {
      font-size: 1.0625rem;
      color: var(--sage);
      line-height: 1.85;
      margin: 0 0 2rem 0;
    }
    .contact-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-top: 3px solid var(--gold);
      padding: 1.75rem;
      margin: 2rem 0;
      text-align: left;
    }
    .contact-label {
      font-size: 0.625rem;
      color: var(--gold);
      letter-spacing: 0.13em;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 0.75rem;
    }
    .contact-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 0.5rem 0;
      font-size: 0.9375rem;
      color: var(--cream);
      border-bottom: 1px solid var(--border);
    }
    .contact-row:last-child {
      border-bottom: none;
    }
    .contact-icon {
      color: var(--gold);
      font-size: 1.125rem;
      flex-shrink: 0;
    }
    .contact-value {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.0625rem;
      color: var(--cream);
      font-weight: 500;
    }
    .footer-note {
      font-size: 0.75rem;
      color: var(--muted);
      font-style: italic;
      margin-top: 2rem;
      line-height: 1.6;
    }
    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      background: rgba(201,168,76,0.1);
      border: 1px solid var(--border-strong);
      border-radius: 4px;
      font-size: 0.6875rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 1.5rem;
    }
    .status-dot {
      width: 8px;
      height: 8px;
      background: var(--gold);
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.85); }
    }
    .pulse {
      animation: pulse 2s infinite;
    }
    @media (max-width: 640px) {
      body { padding: 1.5rem; }
      .contact-card { padding: 1.5rem; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo-wrap">
      <img src="/logos/logo-bbb-hero-white.png" alt="Teater Bangsawan Beting Basah" class="logo">
    </div>

    <div class="status-badge">
      <span class="status-dot"></span>
      Laman Dalam Penyelenggaraan
    </div>

    <div class="eyebrow">Makluman Rasmi</div>

    <h1>
      Laman Sedang <em>Diselenggara</em>
    </h1>

    <p class="body-text">
      Laman web rasmi Teater Bangsawan Beting Basah sedang dalam proses penyelenggaraan buat sementara waktu. Kami akan kembali tidak lama lagi dengan maklumat terkini mengenai pementasan di Istana Budaya.
    </p>

    <p class="body-text" style="font-size: 0.9375rem; color: var(--muted); font-style: italic;">
      Untuk pertanyaan segera berkenaan penajaan atau maklumat pementasan, sila hubungi kami melalui saluran rasmi di bawah.
    </p>

    <div class="contact-card">
      <div class="contact-label">Saluran Rasmi</div>
      <div class="contact-row">
        <span class="contact-icon">📧</span>
        <span class="contact-value">hello@kino.my</span>
      </div>
      <div class="contact-row">
        <span class="contact-icon">📱</span>
        <span class="contact-value">+6017-663 5990</span>
      </div>
      <div class="contact-row">
        <span class="contact-icon">🌐</span>
        <span class="contact-value">www.kino.my</span>
      </div>
    </div>

    <p class="footer-note">
      Teater Bangsawan Beting Basah: Hikayat Mahkota Dewa<br>
      Anjuran Kino Studios Sdn. Bhd. (002138666-M) / KinoCinema Media<br>
      Istana Budaya, Kuala Lumpur · 2026
    </p>
  </div>
</body>
</html>`;

export function middleware(request: NextRequest) {
  // Return maintenance page with 503 status for all matched routes
  return new NextResponse(maintenanceHTML, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Retry-After": "3600",
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}

// Apply to ALL routes except:
// - /_next/static (CSS, JS, fonts)
// - /_next/image (image optimization)
// - /favicon.* (favicon files)
// - /logos/* (logo images — so maintenance page can show logo)
// - /documents/* (PDFs — keep accessible for investors who have direct links)
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.png|favicon\\.svg|logos|documents|images|robots\\.txt).*)",
  ],
};

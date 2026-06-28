import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/lib/i18n";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://beting-beras-basah-ii.vercel.app"
  ),
  title: "Beting Beras Basah II — Teater Bangsawan DiRaja 2026 | Istana Budaya",
  description:
    "Lima ratus tahun menanti. Kini tiba masanya. Teater Bangsawan DiRaja Beting Beras Basah II di Istana Budaya, 30 Oktober – 1 November 2026. Peluang penajaan masih terbuka.",
  keywords: [
    "Beting Beras Basah",
    "Bangsawan",
    "Teater Melayu",
    "Istana Budaya",
    "Kesultanan Perak",
    "Pementasan 2026",
    "Penajaan CSR",
    "Warisan Diraja",
  ],
  authors: [{ name: "Pertubuhan Bangsawan Warisan Moraza Negeri Perak" }],
  openGraph: {
    title: "Beting Beras Basah II — Teater Bangsawan DiRaja 2026",
    description:
      "Lima ratus tahun menanti. Kini tiba masanya. Hikayat Mahkota Dewa di Istana Budaya, 30 Oktober – 1 November 2026.",
    url: "https://beting-beras-basah-ii.vercel.app",
    siteName: "Beting Beras Basah II",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Beting Beras Basah II — Teater Bangsawan DiRaja 2026",
      },
    ],
    type: "website",
    locale: "ms_MY",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beting Beras Basah II — Teater Bangsawan DiRaja 2026",
    description:
      "Lima ratus tahun menanti. Kini tiba masanya. Istana Budaya, 30 Oktober – 1 November 2026.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${cormorant.variable} ${jakarta.variable} antialiased`}
        style={{ fontFamily: "var(--font-body), sans-serif" }}
      >
        <LanguageProvider>{children}</LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}

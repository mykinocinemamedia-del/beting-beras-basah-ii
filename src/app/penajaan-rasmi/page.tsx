import type { Metadata } from "next";
import {
  SponsorshipNav,
  SponsorshipHero,
  SponsorshipProcess,
  SponsorshipChannels,
  SponsorshipWarning,
  SponsorshipFAQ,
  SponsorshipClosingCTA,
} from "@/components/bbb/sponsorship/SponsorshipPage";
import { PolisiSection } from "@/components/bbb/sponsorship/PolisiSection";
import { Footer } from "@/components/bbb/Footer";
import { WhatsAppFloat } from "@/components/bbb/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Penajaan & Saluran Rasmi | Teater Bangsawan Beting Basah",
  description:
    "Proses penajaan rasmi, saluran rasmi produksi, amaran penipuan, dan FAQ untuk syarikat korporat, GLC dan yayasan yang ingin menaja produksi Teater Bangsawan Beting Basah di Istana Budaya 2026.",
  keywords: [
    "Penajaan",
    "Sponsorship",
    "CSR",
    "Saluran Rasmi",
    "Kino Studios",
    "Istana Budaya",
    "Bangsawan",
  ],
  openGraph: {
    title: "Penajaan & Saluran Rasmi | Teater Bangsawan Beting Basah",
    description:
      "Proses, saluran rasmi, amaran penipuan & FAQ untuk penaja.",
    url: "https://beting-beras-basah-ii.vercel.app/penajaan-rasmi",
    siteName: "Teater Bangsawan Beting Basah",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function PenajaanRasmiPage() {
  return (
    <>
      <SponsorshipNav />
      <main style={{ minHeight: "100vh" }}>
        <SponsorshipHero />
        <SponsorshipProcess />
        <SponsorshipChannels />
        <PolisiSection />
        <SponsorshipWarning />
        <SponsorshipFAQ />
        <SponsorshipClosingCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

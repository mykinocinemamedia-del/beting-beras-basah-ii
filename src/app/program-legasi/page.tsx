import type { Metadata } from "next";
import { ProgramNav } from "@/components/bbb/program/ProgramNav";
import { ProgramHero } from "@/components/bbb/program/ProgramHero";
import { ProgramProblem } from "@/components/bbb/program/ProgramProblem";
import { ProgramDiscovery } from "@/components/bbb/program/ProgramDiscovery";
import { ProgramJourney } from "@/components/bbb/program/ProgramJourney";
import { ProgramHiddenValue } from "@/components/bbb/program/ProgramHiddenValue";
import { ProgramBoardroom } from "@/components/bbb/program/ProgramBoardroom";
import { ProgramScarcity } from "@/components/bbb/program/ProgramScarcity";
import { ProgramCalculator } from "@/components/bbb/program/ProgramCalculator";
import { ProgramClosing } from "@/components/bbb/program/ProgramClosing";
import { Footer } from "@/components/bbb/Footer";
import { WhatsAppFloat } from "@/components/bbb/WhatsAppFloat";

export const metadata: Metadata = {
  title:
    "Program Bangsawan Legasi — Penerangan Penuh | Beting Beras Basah II",
  description:
    "Penerangan interaktif lengkap untuk pasukan CSR & pengurusan: perjalanan 8-12 minggu, kalkulator nilai, dan apa yang anda bawa ke bilik mesyuarat. Program Bangsawan Legasi Beting Beras Basah II.",
  keywords: [
    "Program Bangsawan Legasi",
    "CSR",
    "ESG",
    "Penajaan Korporat",
    "Bangsawan",
    "Istana Budaya",
    "NOSS",
    "Modal Insan",
  ],
  openGraph: {
    title: "Program Bangsawan Legasi — Penerangan Penuh",
    description:
      "Penerangan interaktif untuk CSR: 7-langkah perjalanan, kalkulator nilai, boardroom deliverables.",
    url: "https://beting-beras-basah-ii.vercel.app/program-legasi",
    siteName: "Beting Beras Basah II",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Program Bangsawan Legasi",
      },
    ],
    type: "website",
  },
};

export default function ProgramLegasiPage() {
  return (
    <>
      <ProgramNav />
      <main style={{ minHeight: "100vh", paddingTop: "0" }}>
        <ProgramHero />
        <ProgramProblem />
        <ProgramDiscovery />
        <ProgramJourney />
        <ProgramHiddenValue />
        <ProgramBoardroom />
        <ProgramScarcity />
        <ProgramCalculator />
        <ProgramClosing />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

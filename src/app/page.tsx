'use client';

import { Navbar } from "@/components/bbb/Navbar";
import { Hero } from "@/components/bbb/Hero";
import { ThreeFirsts } from "@/components/bbb/ThreeFirsts";
import { Contrast } from "@/components/bbb/Contrast";
import { VideoSection } from "@/components/bbb/VideoSection";
import { Credibility } from "@/components/bbb/Credibility";
import { Offer } from "@/components/bbb/Offer";
import { Packages } from "@/components/bbb/Packages";
import { Legasi } from "@/components/bbb/Legasi";
import { FAQ } from "@/components/bbb/FAQ";
import { ContactForm } from "@/components/bbb/ContactForm";
import { FinalCTA } from "@/components/bbb/FinalCTA";
import { Footer } from "@/components/bbb/Footer";
import { WhatsAppFloat } from "@/components/bbb/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh" }}>
        <Hero />
        <ThreeFirsts />
        <Contrast />
        <VideoSection />
        <Credibility />
        <Offer />
        <Packages />
        <Legasi />
        <FAQ />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

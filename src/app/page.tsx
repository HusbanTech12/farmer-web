import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustedSupporters from "@/components/TrustedSupporters";
import SupportingSection from "@/components/SupportingSection";
import BentoSection from "@/components/BentoSection";
import ServicesSection from "@/components/ServicesSection";
import MissionSection from "@/components/MissionSection";
import VisionSection from "@/components/VisionSection";
import GrowthProcess from "@/components/GrowthProcess";
import ImpactSection from "@/components/ImpactSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Microfinance Plus — Empowering Rural Entrepreneurs",
  description:
    "Financial access for every rural entrepreneur in Burkina Faso. Micro-loans, livestock financing, secure savings, and community banking.",
};

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrustedSupporters />
        <SupportingSection />
        <BentoSection />
        <ServicesSection />
        <MissionSection />
        <VisionSection />
        <GrowthProcess />
        <ImpactSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

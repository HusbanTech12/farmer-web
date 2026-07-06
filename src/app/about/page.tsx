import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import TrustedSupporters from "@/components/TrustedSupporters";
import BuiltFromRealNeeds from "@/components/BuiltFromRealNeeds";
import WhyWeExistSection from "@/components/WhyWeExistSection";
import CarouselCards from "@/components/CarouselCards";
import StatsBanner from "@/components/StatsBanner";
import PartnersSection from "@/components/PartnersSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us — Microfinance Plus",
  description:
    "Learn about Microfinance Plus — our mission to empower rural entrepreneurs across Burkina Faso with accessible financial services.",
};

export default function AboutPage() {
  return (
    <>
      <main>
        <AboutHero />
        <TrustedSupporters />
        <BuiltFromRealNeeds />
        <WhyWeExistSection />
        <CarouselCards />
        <StatsBanner />
        <PartnersSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

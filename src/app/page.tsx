import Header from "@/components/Header";
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

export default function Home() {
  return (
    <>
      <Header />
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

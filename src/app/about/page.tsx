import AboutHero from "@/components/AboutHero";
import TrustedSupporters from "@/components/TrustedSupporters";
import BuiltFromRealNeeds from "@/components/BuiltFromRealNeeds";
import WhyWeExistSection from "@/components/WhyWeExistSection";
import CarouselCards from "@/components/CarouselCards";
import StatsBanner from "@/components/StatsBanner";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

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
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

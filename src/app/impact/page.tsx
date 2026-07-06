import type { Metadata } from "next";
import ImpactHero from "@/components/ImpactHero";
import TrustedSupporters from "@/components/TrustedSupporters";
import SuccessStory from "@/components/SuccessStory";
import ImpactGlance from "@/components/ImpactGlance";
import ChangingCommunities from "@/components/ChangingCommunities";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Impact — Microfinance Plus",
  description:
    "See the measurable impact of Microfinance Plus — supporting 10,000+ farmers, 500+ communities, and empowering rural economies across Burkina Faso.",
};

export default function ImpactPage() {
  return (
    <>
      <main>
        <ImpactHero />
        <TrustedSupporters />
        <SuccessStory />
        <ImpactGlance />
        <ChangingCommunities />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

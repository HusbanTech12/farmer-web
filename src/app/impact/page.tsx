import ImpactHero from "@/components/ImpactHero";
import TrustedSupporters from "@/components/TrustedSupporters";
import SuccessStory from "@/components/SuccessStory";
import ImpactGlance from "@/components/ImpactGlance";
import ChangingCommunities from "@/components/ChangingCommunities";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function ImpactPage() {
  return (
    <>
      <main>
        <ImpactHero />
        <TrustedSupporters />
        <SuccessStory />
        <ImpactGlance />
        <ChangingCommunities />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

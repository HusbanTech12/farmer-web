import ContactHero from "@/components/ContactHero";
import TrustedSupporters from "@/components/TrustedSupporters";
import BranchLocations from "@/components/BranchLocations";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <main>
        <ContactHero />
        <TrustedSupporters />
        <BranchLocations />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

import ServiceDetailsHero from "@/components/ServiceDetailsHero";
import TrustedSupporters from "@/components/TrustedSupporters";
import WhyOurLoan from "@/components/WhyOurLoan";
import BenefitsLoan from "@/components/BenefitsLoan";
import ApplyProcess from "@/components/ApplyProcess";
import BeyondFinancing from "@/components/BeyondFinancing";
import ServiceFAQ from "@/components/ServiceFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function AgriculturalLoansPage() {
  return (
    <>
      <main>
        <ServiceDetailsHero />
        <TrustedSupporters />
        <WhyOurLoan />
        <BenefitsLoan />
        <ApplyProcess />
        <BeyondFinancing />
        <ServiceFAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

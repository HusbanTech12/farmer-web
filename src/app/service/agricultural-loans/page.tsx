import type { Metadata } from "next";
import ServiceDetailsHero from "@/components/ServiceDetailsHero";
import TrustedSupporters from "@/components/TrustedSupporters";
import WhyOurLoan from "@/components/WhyOurLoan";
import BenefitsLoan from "@/components/BenefitsLoan";
import ApplyProcess from "@/components/ApplyProcess";
import BeyondFinancing from "@/components/BeyondFinancing";
import RelatedServices from "@/components/RelatedServices";
import ServiceFAQ from "@/components/ServiceFAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Agricultural Loans — Microfinance Plus",
  description:
    "Affordable agricultural loans for smallholder farmers in Burkina Faso. Flexible repayment aligned with harvest cycles, no collateral required.",
};

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
        <RelatedServices />
        <ServiceFAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

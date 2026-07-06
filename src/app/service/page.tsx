import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import TrustedSupporters from "@/components/TrustedSupporters";
import DesignedForRuralGrowth from "@/components/DesignedForRuralGrowth";
import CoreFinancialServices from "@/components/CoreFinancialServices";
import LoanProducts from "@/components/LoanProducts";
import DepositSolutions from "@/components/DepositSolutions";
import MiniCTA from "@/components/MiniCTA";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Services — Microfinance Plus",
  description:
    "Explore Microfinance Plus services — micro-loans, livestock financing, secure savings, mobile money, and community banking for rural Burkina Faso.",
};

export default function ServicePage() {
  return (
    <>
      <main>
        <ServiceHero />
        <TrustedSupporters />
        <DesignedForRuralGrowth />
        <CoreFinancialServices />
        <LoanProducts />
        <DepositSolutions />
        <MiniCTA />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

import ServiceHero from "@/components/ServiceHero";
import TrustedSupporters from "@/components/TrustedSupporters";
import DesignedForRuralGrowth from "@/components/DesignedForRuralGrowth";
import CoreFinancialServices from "@/components/CoreFinancialServices";
import LoanProducts from "@/components/LoanProducts";
import DepositSolutions from "@/components/DepositSolutions";
import MiniCTA from "@/components/MiniCTA";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

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

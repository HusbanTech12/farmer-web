import type { Metadata } from "next";
import ContactHero from "@/components/ContactHero";
import TrustedSupporters from "@/components/TrustedSupporters";
import BranchLocations from "@/components/BranchLocations";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us — Microfinance Plus",
  description:
    "Get in touch with Microfinance Plus. Visit our branches across Burkina Faso or reach out for micro-loans, savings, and financial support.",
};

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

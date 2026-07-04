"use client";

import Motion, { StaggerContainer, StaggerItem } from "@/components/Motion";

const benefits = [
  "Fast and simple application process",
  "Flexible repayment aligned with harvest cycles",
  "Affordable interest rates",
  "No traditional collateral required",
  "Personalized support from local finance officers",
];

export default function BenefitsLoan() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-navy-900 rounded-3xl py-20 md:py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2069&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10">
          <Motion animation="fadeUp" className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-primary" />
              <span className="text-green-primary/70 text-xs font-semibold uppercase tracking-widest">
                Simple Process
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Benefits of Our{" "}
              <span className="serif-accent text-4xl md:text-5xl">
                Agricultural Loan
              </span>
            </h2>
            <p className="text-white/50 mt-5 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
              Designed specifically for the needs of smallholder farmers and
              rural producers.
            </p>
          </Motion>

          <StaggerContainer className="max-w-4xl mx-auto space-y-4" staggerDelay={0.1}>
            {benefits.map((item) => (
              <StaggerItem key={item} animation="fadeUp">
                <div className="flex items-center gap-4 hover:bg-white/5 rounded-lg p-2 -m-2 transition">
                  <div className="w-8 h-8 rounded-full border-2 border-green-primary/40 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-green-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-base md:text-lg">
                    {item}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

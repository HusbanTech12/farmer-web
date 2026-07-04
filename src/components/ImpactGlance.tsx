"use client";

import Motion, { StaggerContainer, StaggerItem } from "@/components/Motion";

const stats = [
  { number: "50,000+", label: "Rural Clients Served" },
  { number: "120+", label: "Villages Reached" },
  { number: "85%", label: "Women Beneficiaries" },
  { number: "$5M+", label: "Loans Disbursed" },
  { number: "10,000+", label: "Businesses Supported" },
];

export default function ImpactGlance() {
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
          <Motion animation="fadeUp" className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-primary" />
              <span className="text-green-primary/70 text-xs font-semibold uppercase tracking-widest">
                Impact
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Our Impact at a Glance
            </h2>
          </Motion>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto" staggerDelay={0.1}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label} animation="scaleUp">
                <div className="text-center hover:-translate-y-1 transition">
                  <div className="text-3xl md:text-4xl font-bold text-green-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

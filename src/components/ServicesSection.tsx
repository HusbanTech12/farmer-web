"use client";

import Motion, { StaggerContainer, StaggerItem } from "@/components/Motion";

const services = [
  {
    icon: "🌾",
    borderColor: "#46B45F",
    iconBg: "bg-[#46B45F]",
    title: "Micro-loans for Farmers",
    description:
      "Low-interest loans tailored to crop cycles. Buy seeds and fertilizer now, repay after harvest.",
  },
  {
    icon: "🐄",
    borderColor: "#F3B266",
    iconBg: "bg-[#F3B266]",
    title: "Livestock Financing",
    description:
      "Specialized capital for purchasing cattle, sheep, and goats to expand your herd and assets.",
  },
  {
    icon: "🏦",
    borderColor: "#F36E55",
    iconBg: "bg-[#F36E55]",
    title: "Secure Savings",
    description:
      "Safe, fee-free savings accounts that help you build a safety net for your family's future.",
  },
  {
    icon: "🤝",
    borderColor: "#6196C9",
    iconBg: "bg-[#6196C9]",
    title: "Community Banking",
    description:
      "Group lending programs that allow villages to guarantee each other and grow together.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#2A2825" }}>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2069&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Motion animation="fadeUp" className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-primary" />
            <span className="text-white text-[17px] font-normal tracking-widest leading-8">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Financial Tools Built for
            <br />
            <span className="instrument-italic text-[50px] leading-[57px]">
              Rural Life
            </span>
          </h2>
          <p className="text-white/50 mt-6 text-base md:text-lg leading-relaxed">
            We don&apos;t just offer bank accounts; we offer pathways to stability.
            Our products are designed specifically for the needs of agricultural
            communities.
          </p>
        </Motion>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-[640px] mx-auto" staggerDelay={0.12}>
          {services.map((svc) => (
            <StaggerItem key={svc.title} animation="scaleUp">
              <div
                className="rounded-2xl p-6 md:p-7 shadow-lg hover:shadow-xl hover:-translate-y-1 transition h-full flex flex-col items-center"
                style={{ backgroundColor: "#F0F1F2", borderBottom: `4px solid ${svc.borderColor}`, borderRadius: "18px" }}
              >
                <div
                  className={`w-14 h-14 rounded-full ${svc.iconBg} flex items-center justify-center text-2xl mb-5`}
                >
                  <span className="text-white text-xl">{svc.icon}</span>
                </div>
                <h3 className="text-[17px] font-bold text-charcoal mb-3 text-center">
                  {svc.title}
                </h3>
                <hr className="border-gray-300 mb-3" />
                <p className="text-muted text-[14px] leading-relaxed text-center">
                  {svc.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

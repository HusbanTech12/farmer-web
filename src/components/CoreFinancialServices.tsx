"use client";

import Motion, { StaggerContainer, StaggerItem } from "@/components/Motion";

const services = [
  {
    icon: "🏦",
    iconBg: "bg-green-primary/10",
    title: "Savings",
    description:
      "Secure, accessible savings solutions for household financial stability and future planning.",
    color: "text-green-primary",
  },
  {
    icon: "🌾",
    iconBg: "bg-accent-orange/10",
    title: "Agricultural Loan",
    description:
      "Loans and input financing to support crop production, fertilizers, and farming equipment.",
    color: "text-accent-orange",
    link: "/service/agricultural-loans",
  },
  {
    icon: "🐄",
    iconBg: "bg-accent-coral/10",
    title: "Livestock Financing",
    description:
      "Financial support for purchasing, raising, and selling livestock in rural markets.",
    color: "text-accent-coral",
  },
  {
    icon: "📱",
    iconBg: "bg-green-primary/10",
    title: "Mobile Money Service",
    description:
      "Simple and accessible mobile payments, deposits, and withdrawals for remote communities.",
    color: "text-green-primary",
  },
  {
    icon: "✍️",
    iconBg: "bg-accent-orange/10",
    title: "Signature Guarantee",
    description:
      "Guarantee-based financial products that replace traditional collateral requirements.",
    color: "text-accent-orange",
  },
  {
    icon: "💡",
    iconBg: "bg-accent-coral/10",
    title: "Fair Loan Advisory",
    description:
      "Advisory programs helping entrepreneurs choose the right long-term loan solutions.",
    color: "text-accent-coral",
  },
];

export default function CoreFinancialServices() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-navy-900 rounded-3xl py-20 md:py-28 px-6">
        <Motion animation="fadeUp" className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-primary" />
            <span className="text-green-primary/70 text-xs font-semibold uppercase tracking-widest">
              Our Core
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Our Core{" "}
            <span className="serif-accent text-4xl md:text-5xl">
              Financial Services
            </span>
          </h2>
          <p className="text-white/50 mt-5 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            Comprehensive solutions tailored to the unique needs of rural
            economies.
          </p>
        </Motion>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
          {services.map((svc) => {
            const Wrapper = svc.link ? "a" : "div";
            const wrapperProps = svc.link ? { href: svc.link } : {};
            return (
              <StaggerItem key={svc.title} animation="scaleUp">
                <Wrapper
                  {...wrapperProps}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-lg block hover:shadow-xl hover:-translate-y-0.5 transition cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 rounded-full ${svc.iconBg} flex items-center justify-center text-xl mb-4`}
                  >
                    {svc.icon}
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {svc.description}
                  </p>
                  {svc.link && (
                    <span className="inline-flex items-center gap-1 text-green-primary text-sm font-semibold mt-3 group-hover:text-green-dark transition">
                      Learn More
                      <span className="text-lg leading-none group-hover:translate-x-1 transition">&rarr;</span>
                    </span>
                  )}
                </Wrapper>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

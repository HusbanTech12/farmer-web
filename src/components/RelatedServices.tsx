"use client";

import Link from "next/link";
import Motion, { StaggerContainer, StaggerItem } from "@/components/Motion";

const services = [
  {
    icon: "🐄",
    color: "bg-accent-orange",
    title: "Livestock Financing",
    description: "Specialized capital for purchasing cattle, sheep, and goats to expand your herd and assets.",
    href: "/service",
  },
  {
    icon: "🏦",
    color: "bg-accent-coral",
    title: "Secure Savings",
    description: "Safe, fee-free savings accounts that help you build a safety net for your family's future.",
    href: "/service",
  },
  {
    icon: "🤝",
    color: "bg-accent-blue",
    title: "Community Banking",
    description: "Group lending programs that allow villages to guarantee each other and grow together.",
    href: "/service",
  },
];

export default function RelatedServices() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Motion animation="fadeUp" className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-primary" />
            <span className="text-muted text-[17px] font-normal tracking-widest leading-8">
              Related Services
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[35px] font-bold text-charcoal leading-tight md:leading-[57px]">
            Explore More Ways to{" "}
            <span className="instrument-italic text-3xl sm:text-4xl md:text-[51px] md:leading-[57px] text-green-primary">
              Grow
            </span>
          </h2>
        </Motion>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" staggerDelay={0.15}>
          {services.map((svc) => (
            <StaggerItem key={svc.title} animation="scaleUp">
              <Link href={svc.href}>
                <div className="bg-white rounded-2xl p-6 md:p-8 border-l-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition h-full flex flex-col">
                  <div
                    className={`w-14 h-14 rounded-full ${svc.color} flex items-center justify-center text-2xl mb-5`}
                  >
                    <span className="text-white text-xl">{svc.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed flex-grow">
                    {svc.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-green-primary font-semibold text-sm mt-4 hover:gap-3 transition-all">
                    Learn More
                    <span className="text-lg leading-none">&rarr;</span>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

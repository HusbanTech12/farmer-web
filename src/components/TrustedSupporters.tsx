"use client";

import Motion, { StaggerContainer, StaggerItem } from "@/components/Motion";

const partners = [
  "UNICEF",
  "World Bank",
  "Oxfam",
  "Grameen",
  "IFAD",
  "AFDB",
];

export default function TrustedSupporters() {
  return (
    <section className="bg-cream py-12">
      <div className="max-w-7xl mx-auto px-6">
        <Motion animation="fadeUp" className="flex items-center justify-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-primary" />
          <span className="text-muted text-xs font-semibold uppercase tracking-widest">
            Our Trusted Supporters
          </span>
        </Motion>

        <StaggerContainer className="flex flex-wrap items-center justify-center gap-12 md:gap-16" staggerDelay={0.08}>
          {partners.map((name) => (
            <StaggerItem key={name} animation="fadeUp">
              <div className="text-navy-800/30 text-2xl font-bold tracking-widest uppercase grayscale hover:grayscale-0 transition">
                {name}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

"use client";

import Motion, { StaggerContainer, StaggerItem } from "@/components/Motion";

const stats = [
  { number: "10,000+", label: "Farmers Supported" },
  { number: "95%", label: "Repayment Rate" },
  { number: "500+", label: "Communities Reached" },
  { number: "10K+", label: "Jobs Empowered" },
];

export default function ImpactSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Motion animation="fadeUp" className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-primary" />
            <span className="text-green-primary/70 text-xs font-semibold uppercase tracking-widest">
              Impact & Reach
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            Creating Measurable Change Across{" "}
            <span className="serif-accent text-4xl md:text-5xl">
              Rural Burkina Faso
            </span>
          </h2>
          <p className="text-muted mt-5 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            Real numbers, real communities, real transformation across the
            regions we serve.
          </p>
        </Motion>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto" staggerDelay={0.1}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label} animation="scaleUp">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full border-2 border-green-primary/40 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-5 h-5 text-green-primary"
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
                <div className="text-4xl md:text-5xl font-bold text-charcoal mb-1">
                  {stat.number}
                </div>
                <div className="text-muted text-sm">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Motion animation="fadeUp" className="relative rounded-2xl overflow-hidden h-[320px] md:h-[420px] max-w-5xl mx-auto">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/home/impact.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="text-white/80 text-sm max-w-xl">
              Farmers and livestock breeders discussing seasonal financial
              planning during a community banking meeting.
            </p>
          </div>
        </Motion>
      </div>
    </section>
  );
}

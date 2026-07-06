"use client";

import Motion, { StaggerContainer, StaggerItem } from "@/components/Motion";

const checks = [
  "50,000+ Farmers and livestock breeders supported",
  "85% Of our clients are rural households",
  "12 Regions actively served across Burkina Faso",
  "10+ Years of experience in rural financial inclusion",
];

export default function ImpactSection() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#F5F6F5" }}>
      <div className="max-w-7xl mx-auto px-6">
        <Motion animation="fadeUp" className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-primary" />
            <span className="text-muted text-[17px] font-normal tracking-widest leading-8">
              Impact &amp; Reach
            </span>
          </div>
          <h2 className="text-[35px] font-bold text-charcoal leading-[57px]">
            Creating Measurable Change Across
            <br />
            <span className="instrument-italic text-[51px] leading-[57px] text-green-primary">
              Rural Burkina Faso
            </span>
          </h2>
          <p className="text-muted mt-5 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            At Microfinance Plus SARL, we believe real impact is measured by
            lives improved and communities strengthened. Through accessible
            financial services, we have supported thousands of rural
            entrepreneurs in building sustainable livelihoods and stronger
            local economies.
          </p>
        </Motion>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 max-w-3xl mx-auto mb-16" staggerDelay={0.1}>
          {checks.map((item) => (
            <StaggerItem key={item} animation="fadeUp">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-green-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-charcoal text-[15px] font-medium">
                  {item}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Motion animation="fadeUp" className="relative rounded-2xl overflow-hidden h-[320px] md:h-[420px] max-w-5xl mx-auto">
          <div
            className="absolute inset-0 bg-cover bg-center hover:scale-[1.02] transition duration-500"
            style={{
              backgroundImage:
                "url('/images/home/impact.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 inline-flex items-start gap-3 border border-white/30 backdrop-blur-md rounded-2xl px-5 py-4 max-w-sm">
            <span className="w-2 h-2 rounded-full bg-green-primary flex-shrink-0 mt-1.5" />
            <p className="text-white text-sm leading-relaxed">
              Empowering thousands of farmers and livestock breeders across
              Burkina Faso.
            </p>
          </div>
        </Motion>
      </div>
    </section>
  );
}

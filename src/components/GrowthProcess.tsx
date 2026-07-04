"use client";

import Motion, { StaggerContainer, StaggerItem } from "@/components/Motion";

const steps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Apply Easily",
    caption: "Submit your basic information at any village banking center near you.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Get Approved",
    caption: "Quick community-based review with fast approval decisions.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
      </svg>
    ),
    title: "Receive Funds",
    caption: "Funds disbursed within 48 hours to your mobile money or local branch.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    title: "Grow Business",
    caption: "Ongoing support and access to larger loans as your business expands.",
  },
];

export default function GrowthProcess() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Motion animation="fadeUp" className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-primary" />
            <span className="text-muted text-xs font-semibold uppercase tracking-widest">
              Simple Process
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            How We Support{" "}
            <span className="serif-accent text-4xl md:text-5xl">
              Your Growth
            </span>
          </h2>
          <p className="text-muted mt-5 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            We make financial access simple and straightforward for rural
            entrepreneurs across Burkina Faso.
          </p>
        </Motion>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-10 relative max-w-5xl mx-auto" staggerDelay={0.15}>
          {steps.map((step, i) => (
            <StaggerItem key={step.title} animation="scaleUp" className="text-center relative">
              {i > 0 && (
                <div className="hidden md:block absolute -left-4 top-8 text-green-primary/30 text-xl">
                  &rarr;
                </div>
              )}
              <div className="w-16 h-16 rounded-full border-2 border-green-primary/30 flex items-center justify-center mx-auto mb-5 text-green-primary">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">
                {step.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed max-w-[220px] mx-auto">
                {step.caption}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

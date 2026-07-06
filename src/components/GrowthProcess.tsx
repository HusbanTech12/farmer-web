"use client";

import Motion, { StaggerContainer, StaggerItem } from "@/components/Motion";

const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Apply Easily",
    description: "Visit a local branch or meet our mobile agents in your village.",
  },
  {
    number: "02",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Get Approved",
    description: "Quick review process based on your character and community standing.",
  },
  {
    number: "03",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Receive Funds",
    description: "Access capital immediately to buy seeds, livestock, or equipment.",
  },
  {
    number: "04",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Grow Business",
    description: "Invest in your farm, increase yields, and repay after harvest.",
  },
];

export default function GrowthProcess() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#F5F6F5" }}>
      <div className="max-w-7xl mx-auto px-6">
        <Motion animation="fadeUp" className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-primary" />
            <span className="text-muted text-[17px] font-normal tracking-widest leading-8">
              Simple Process
            </span>
          </div>
          <h2 className="text-[35px] font-bold text-charcoal leading-[57px]">
            How We Support{" "}
            <span className="instrument-italic text-[51px] leading-[57px] text-green-primary">
              Your Growth
            </span>
          </h2>
          <p className="text-muted mt-5 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            We&apos;ve removed the red tape. Our process is designed to be simple,
            transparent, and fast, so you can focus on farming.
          </p>
        </Motion>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 relative max-w-5xl mx-auto" staggerDelay={0.15}>
          {steps.map((step, i) => (
            <StaggerItem key={step.title} animation="fadeUp" className="relative">
              {i > 0 && (
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-300" />
              )}
              <div className={`md:px-8 ${i > 0 ? "md:pl-12" : "md:pl-8"}`}>
                <div className="relative mb-6">
                  <span className="absolute -top-2 -left-1 text-[60px] font-bold text-green-primary/15 leading-none select-none">
                    {step.number}
                  </span>
                  <div className="relative z-10 pt-6">
                    <div className="text-charcoal">
                      {step.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

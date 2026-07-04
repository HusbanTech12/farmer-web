"use client";

import Motion from "@/components/Motion";

const cornerImages = [
  "/images/Service/our-trusted-1.jpg",
  "/images/Service/our-trusted-2.jpg",
  "/images/Service/our-trusted-3.jpg",
  "/images/Service/our-trusted-4.jpg",
];

export default function DesignedForRuralGrowth() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <Motion animation="fadeUp">
          <div className="relative">
            <div className="hidden md:block absolute top-0 left-0 w-36 h-36 rounded-2xl overflow-hidden shadow-lg -translate-x-8 -translate-y-8 hover:scale-105 transition duration-300">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${cornerImages[0]}')` }}
              />
            </div>
            <div className="hidden md:block absolute top-0 right-0 w-36 h-36 rounded-2xl overflow-hidden shadow-lg translate-x-8 -translate-y-8 hover:scale-105 transition duration-300">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${cornerImages[1]}')` }}
              />
            </div>
            <div className="hidden md:block absolute bottom-0 left-0 w-36 h-36 rounded-2xl overflow-hidden shadow-lg -translate-x-8 translate-y-8 hover:scale-105 transition duration-300">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${cornerImages[2]}')` }}
              />
            </div>
            <div className="hidden md:block absolute bottom-0 right-0 w-36 h-36 rounded-2xl overflow-hidden shadow-lg translate-x-8 translate-y-8 hover:scale-105 transition duration-300">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${cornerImages[3]}')` }}
              />
            </div>

            <div className="rounded-3xl py-16 md:py-20 px-8 md:px-16 text-center relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-primary" />
                <span className="text-muted text-xs font-semibold uppercase tracking-widest">
                  What We Do
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
                Designed for{" "}
                <span className="serif-accent text-4xl md:text-5xl">
                  Rural Growth
                </span>
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                We understand the financial realities of rural communities. Every
                product we offer is created to meet the specific needs of farmers,
                livestock breeders, small traders, and village-based entrepreneurs
                across Burkina Faso.
              </p>
              <p className="text-charcoal/70 text-base md:text-lg italic max-w-xl mx-auto">
                &ldquo;Our goal is simple: provide financial tools that help rural
                families grow, invest, and thrive.&rdquo;
              </p>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}

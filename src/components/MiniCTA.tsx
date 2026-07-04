"use client";

import Motion from "@/components/Motion";

export default function MiniCTA() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Motion animation="fadeUp" className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
          Ready to Grow Your{" "}
          <span className="serif-accent text-4xl md:text-5xl">
            Rural Project
          </span>
          ?
        </h2>
        <p className="text-muted text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
          Take the first step toward financing your farm, livestock, or small
          business today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="border-2 border-green-primary text-green-primary hover:bg-green-primary hover:text-white px-7 md:px-8 py-3.5 rounded-full font-semibold transition flex items-center gap-2 text-sm md:text-base"
          >
            Apply for Loan
            <span className="text-lg md:text-xl leading-none">&rarr;</span>
          </a>
          <a
            href="#"
            className="bg-green-primary hover:bg-green-dark text-white px-7 md:px-8 py-3.5 rounded-full font-semibold transition text-sm md:text-base"
          >
            Contact Our Team
          </a>
        </div>
      </Motion>
    </section>
  );
}

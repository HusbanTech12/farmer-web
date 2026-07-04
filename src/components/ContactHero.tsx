"use client";

import Navbar from "@/components/Navbar";
import Motion from "@/components/Motion";

export default function ContactHero() {
  return (
    <section className="relative pt-4 md:pt-6 pb-8 md:pb-12 px-4 md:px-8">
      <div className="relative max-w-7xl mx-auto min-h-[80vh] md:min-h-[85vh] rounded-3xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/contact-us/7e34f244958ac495eef41710158fd8686e696660.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-navy-900/50 to-navy-800/20" />

        <Navbar />

        <div className="relative z-10 h-full min-h-[80vh] md:min-h-[85vh] flex flex-col justify-end px-8 md:px-16 lg:px-20 pb-16 md:pb-20 pt-64 md:pt-80">
          <div className="max-w-2xl">
            <Motion animation="fadeUp" delay={0.2}>
              <div className="inline-flex items-center bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8">
                <span className="text-white/90 text-xs md:text-sm font-medium">
                  Empowering Rural Burkina Faso
                </span>
              </div>
            </Motion>

            <Motion animation="fadeUp" delay={0.4}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                Let&apos;s Connect and{" "}
                <span className="block">Build Rural Financial</span>
                <span className="instrument-italic text-6xl md:text-7xl lg:text-[90px] leading-[1.1]">
                  Inclusion Together
                </span>
              </h1>
            </Motion>

            <Motion animation="fadeUp" delay={0.6}>
              <p className="text-base md:text-lg text-white/70 max-w-xl mb-10 leading-relaxed">
                Have questions, need support, or want to partner with us? Our team
                is ready and will guide you towards the right financial solutions.
              </p>
            </Motion>

            <Motion animation="fadeUp" delay={0.8}>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <a
                  href="#"
                  className="bg-green-primary hover:bg-green-dark text-white px-7 md:px-8 py-3.5 rounded-full font-semibold transition flex items-center gap-2 text-sm md:text-base"
                >
                  Donate Now
                  <span className="text-lg md:text-xl leading-none">&rarr;</span>
                </a>
                <a
                  href="#"
                  className="border-2 border-white/40 hover:border-white text-white px-7 md:px-8 py-3.5 rounded-full font-semibold transition text-sm md:text-base"
                >
                  Support Our Mission
                </a>
              </div>
            </Motion>
          </div>
        </div>
      </div>
    </section>
  );
}

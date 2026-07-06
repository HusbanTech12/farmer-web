"use client";

import Motion from "@/components/Motion";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#F5F6F5" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="grid md:grid-cols-2 overflow-hidden"
          style={{ borderRadius: "22px" }}
        >
          <div className="bg-[#1a1a1a] p-8 sm:p-10 md:p-14">
            <Motion animation="fadeLeft">
              <h2 className="text-2xl sm:text-3xl md:text-[35px] font-bold text-white leading-tight md:leading-[57px] mb-4">
                Ready to Grow Your
                <br />
                <span className="instrument-italic text-3xl sm:text-4xl md:text-[51px] md:leading-[57px] text-green-primary">
                  Farm or Business?
                </span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Visit your nearest branch or contact our friendly team to get
                started. We&apos;re here to help you succeed.
              </p>

              <h3 className="text-white font-bold text-sm mb-4">Contact</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <div>
                    <span className="text-white font-bold text-sm">Head Office</span>
                    <p className="text-white/50 text-sm">Ouagadougou, Burkina Faso</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <div>
                    <span className="text-white font-bold text-sm">Phone</span>
                    <p className="text-white/50 text-sm">+226 XX XX XX XX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <div>
                    <span className="text-white font-bold text-sm">Email</span>
                    <p className="text-white/50 text-sm">contact@microfinanceplus.bf</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <span className="text-white font-bold text-sm">Working Hours</span>
                    <p className="text-white/50 text-sm">Monday &ndash; Friday, 8:00 AM &ndash; 5:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold transition flex items-center gap-2 text-sm"
                >
                  Donate Now
                  <span className="text-lg leading-none">&rarr;</span>
                </a>
                <a
                  href="#"
                  className="bg-green-primary hover:bg-green-dark text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold transition text-sm"
                >
                  Support Our Mission
                </a>
              </div>
            </Motion>
          </div>

          <div
            className="relative p-8 sm:p-10 md:p-14"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2069&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-navy-900/85" />
            <Motion animation="fadeRight" className="relative z-10">
              <h3 className="text-white text-lg sm:text-xl font-bold mb-6">
                Send Us A Message
              </h3>
              <form className="space-y-4" aria-label="Contact form">
                <div>
                  <label htmlFor="cta-name" className="text-white/70 text-sm mb-1.5 block">
                    Full Name
                  </label>
                  <input
                    id="cta-name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-green-primary transition"
                  />
                </div>
                <div>
                  <label htmlFor="cta-phone" className="text-white/70 text-sm mb-1.5 block">
                    Phone Number
                  </label>
                  <input
                    id="cta-phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-green-primary transition"
                  />
                </div>
                <div>
                  <label htmlFor="cta-message" className="text-white/70 text-sm mb-1.5 block">
                    How can we help?
                  </label>
                  <textarea
                    id="cta-message"
                    rows={4}
                    placeholder="Tell us about your needs..."
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-green-primary transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-full font-semibold transition text-sm flex items-center justify-center gap-2"
                >
                  Send Message
                  <span className="text-lg leading-none">&rarr;</span>
                </button>
              </form>
            </Motion>
          </div>
        </div>
      </div>
    </section>
  );
}

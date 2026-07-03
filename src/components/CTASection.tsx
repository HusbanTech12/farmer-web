export default function CTASection() {
  return (
    <section className="relative bg-navy-900 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Grow Your{" "}
              <span className="block">Farm or Business?</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
              Join thousands of rural entrepreneurs who have transformed their
              livelihoods with Microfinance Plus. Let&apos;s build a prosperous
              future together.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-green-primary flex-shrink-0"
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
                <span className="text-white/80 text-sm">+226 25 00 00 00</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-green-primary flex-shrink-0"
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
                <span className="text-white/80 text-sm">contact@microfinanceplus.bf</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-green-primary flex-shrink-0"
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
                <span className="text-white/80 text-sm">
                  Ouagadougou, Burkina Faso
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="bg-green-primary hover:bg-green-dark text-white px-8 py-3.5 rounded-full font-semibold transition flex items-center gap-2 text-base"
              >
                Donate Now
                <span className="text-xl leading-none">&rarr;</span>
              </a>
              <a
                href="#"
                className="border-2 border-white/30 hover:border-white text-white px-8 py-3.5 rounded-full font-semibold transition text-base"
              >
                Support Our Mission
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
            <h3 className="text-white text-xl font-bold mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-green-primary transition"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-green-primary transition"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:border-green-primary transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-primary hover:bg-green-dark text-white px-6 py-3 rounded-xl font-semibold transition text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

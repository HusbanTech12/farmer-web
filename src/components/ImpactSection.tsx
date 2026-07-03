const stats = [
  { number: "10,000+", label: "Families Reached" },
  { number: "500+", label: "Businesses Launched" },
  { number: "95%", label: "Repayment Rate" },
  { number: "50+", label: "Village Banking Centers" },
];

export default function ImpactSection() {
  return (
    <section className="relative bg-navy-900 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-navy-800" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-primary" />
            <span className="text-green-primary/70 text-xs font-semibold uppercase tracking-widest">
              Impact & Reach
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Creating Measurable Change Across{" "}
            <span className="serif-accent text-4xl md:text-5xl">
              Rural Burkina Faso
            </span>
          </h2>
          <p className="text-white/50 mt-6 text-base md:text-lg leading-relaxed">
            Our impact speaks through numbers — real families reached, real
            businesses launched, real communities transformed.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
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
              <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[400px] max-w-5xl mx-auto">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1593113596822-6f4c58b6b1d8?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="text-white text-lg md:text-xl font-semibold max-w-xl">
              &ldquo;Microfinance Plus gave me the capital I needed to expand my farm.
              Today, I employ 12 people from my village.&rdquo;
            </p>
            <p className="text-white/60 text-sm mt-2">
              — Aminata Ouedraogo, Farmer &amp; Entrepreneur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

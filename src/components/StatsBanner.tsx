const stats = [
  { number: "1,250+", label: "Rural Businesses Supported" },
  { number: "85", label: "Communities Reached" },
  { number: "$450/mo", label: "Average Income Increase" },
  { number: "92%", label: "Repayment Rate" },
];

export default function StatsBanner() {
  return (
    <section className="px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-navy-900 rounded-3xl py-20 md:py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2069&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-white/60 text-base md:text-lg italic max-w-xl mx-auto">
            &ldquo;Impact isn&apos;t just measured in numbers — it&apos;s
            measured in lives improved.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

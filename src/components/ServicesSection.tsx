const services = [
  {
    icon: "🌾",
    color: "border-l-green-primary",
    iconBg: "bg-green-primary/10",
    title: "Micro-loans for Farmers",
    description:
      "Low-interest loans designed around planting and harvest cycles, with flexible repayment terms that match agricultural income patterns.",
  },
  {
    icon: "🐄",
    color: "border-l-accent-orange",
    iconBg: "bg-accent-orange/10",
    title: "Livestock Financing",
    description:
      "Specialized credit products for livestock acquisition, animal husbandry infrastructure, feed supply chains, and veterinary services.",
  },
  {
    icon: "🏦",
    color: "border-l-accent-coral",
    iconBg: "bg-accent-coral/10",
    title: "Secure Savings",
    description:
      "Safe and accessible savings accounts with competitive interest rates, designed for rural customers with minimal documentation requirements.",
  },
  {
    icon: "🤝",
    color: "border-l-accent-blue",
    iconBg: "bg-accent-blue/10",
    title: "Community Banking",
    description:
      "Village-based banking groups that pool resources and provide peer-supported lending, fostering financial inclusion at the grassroots level.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-navy-900 py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2069&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-primary" />
            <span className="text-green-primary/70 text-xs font-semibold uppercase tracking-widest">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Financial Tools Built for{" "}
            <span className="serif-accent text-4xl md:text-5xl">
              Rural Life
            </span>
          </h2>
          <p className="text-white/50 mt-6 text-base md:text-lg leading-relaxed">
            Every product we offer is designed with the realities of rural
            communities in mind — flexible, accessible, and built for trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((svc) => (
            <div
              key={svc.title}
              className={`bg-white rounded-2xl p-6 md:p-8 border-l-4 ${svc.color} shadow-lg`}
            >
              <div
                className={`w-12 h-12 rounded-full ${svc.iconBg} flex items-center justify-center text-xl mb-4`}
              >
                {svc.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-charcoal mb-2">
                {svc.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {svc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const cards = [
  {
    category: "Farming",
    color: "bg-green-primary",
    title: "Farmers",
    description:
      "Access affordable micro-loans and flexible repayment plans tailored to agricultural cycles and crop seasons.",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop",
  },
  {
    category: "Livestock",
    color: "bg-accent-orange",
    title: "Livestock Breeders",
    description:
      "Specialized financing for livestock purchase, feed, veterinary care, and infrastructure development.",
    image:
      "https://images.unsplash.com/photo-1527153818091-1a9638521e2a?q=80&w=2069&auto=format&fit=crop",
  },
  {
    category: "Entrepreneurship",
    color: "bg-accent-coral",
    title: "Rural Entrepreneurs",
    description:
      "Seed capital and business development support for small enterprises and agribusiness startups.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop",
  },
];

export default function SupportingSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight">
              Supporting Those Who <br />
              Feed{" "}
              <span className="serif-accent text-4xl md:text-5xl">
                Our Nation
              </span>
            </h2>
          </div>
          <div>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
              We provide tailored financial products designed specifically for
              the unique needs of rural communities — from planting season loans
              to livestock insurance and small business credit.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-green-primary hover:bg-green-dark text-white px-6 py-3 rounded-full font-semibold transition text-sm"
            >
              Learn More
              <span className="text-lg leading-none">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition"
            >
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-500"
                  style={{ backgroundImage: `url('${card.image}')` }}
                />
                <div className="absolute inset-0 bg-black/20" />
                <span
                  className={`absolute top-4 left-4 ${card.color} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                >
                  {card.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {card.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const bentoItems = [
  {
    type: "image",
    span: "md:col-span-2 md:row-span-2",
    image:
      "https://images.unsplash.com/photo-1599058918144-1ffabb6ab5e0?q=80&w=2069&auto=format&fit=crop",
  },
  {
    type: "text",
    span: "md:col-span-1 md:row-span-2",
    title: "Community First",
    description:
      "Every decision we make starts with the community. Our local agents live and work in the villages we serve, ensuring trust and understanding.",
    link: "#",
  },
  {
    type: "text",
    span: "md:col-span-1 md:row-span-1",
    title: "Sustainable Growth",
    description:
      "We finance environmentally sustainable farming practices and help communities build resilience against climate change.",
    link: "#",
  },
  {
    type: "image",
    span: "md:col-span-1 md:row-span-1",
    image:
      "https://images.unsplash.com/photo-1593113596822-6f4c58b6b1d8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    type: "image",
    span: "md:col-span-1 md:row-span-1",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop",
  },
  {
    type: "text",
    span: "md:col-span-2 md:row-span-1",
    title: "Social Impact",
    description:
      "Over 10,000 families reached, 500+ small businesses launched, and a 95% loan repayment rate that proves our model works.",
    link: "#",
  },
];

export default function BentoSection() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-primary" />
            <span className="text-muted text-xs font-semibold uppercase tracking-widest">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            More Than Just a Bank,{" "}
            <span className="block">We Are a</span>
            <span className="serif-accent text-4xl md:text-5xl">
              Partner in Progress
            </span>
          </h2>
          <p className="text-muted mt-6 text-base md:text-lg leading-relaxed">
            We go beyond traditional banking to build lasting relationships and
            create real change in rural communities across Burkina Faso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {bentoItems.map((item, i) => (
            <div
              key={i}
              className={`${item.span} rounded-2xl overflow-hidden min-h-[200px] md:min-h-0 ${
                item.type === "text"
                  ? "bg-white p-6 md:p-8 flex flex-col justify-center shadow-md"
                  : ""
              }`}
            >
              {item.type === "image" ? (
                <div
                  className="w-full h-full min-h-[200px] bg-cover bg-center rounded-2xl"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
              ) : (
                <>
                  <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm md:text-base leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-2 text-green-primary hover:text-green-dark font-semibold text-sm transition"
                  >
                    Learn More
                    <span className="text-lg leading-none">&rarr;</span>
                  </a>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Motion, { StaggerContainer, StaggerItem } from "@/components/Motion";

const cards = [
  {
    category: "Farming",
    color: "bg-green-primary",
    title: "Farmers",
    description:
      "Access loans, savings, and guidance to grow your crops sustainably and increase your harvest yields.",
    image: "/images/home/support-card-women1.jpg",
  },
  {
    category: "Livestock",
    color: "bg-accent-orange",
    title: "Livestock Breeders",
    description:
      "Invest in your animals with financial support tailored to your needs for feed, shelter, and healthcare.",
    image: "/images/home/support-card-men.jpg",
  },
  {
    category: "Entrepreneurship",
    color: "bg-accent-coral",
    title: "Rural Entrepreneurs",
    description:
      "Start and expand small businesses that strengthen your community and provide essential local services.",
    image: "/images/home/support-card-women2.jpg",
  },
];

export default function SupportingSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <Motion animation="fadeLeft">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight">
              Supporting Those Who <br />
              <span className="instrument-italic text-4xl md:text-5xl" style={{ color: "black" }}>
                Feed Our Nation
              </span>
            </h2>
          </Motion>
          <Motion animation="fadeRight">
            <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
              From small-scale farmers to livestock breeders, we provide the
              financial tools and guidance you need to thrive. No bank account?
              No problem. Our local branches and agents bring banking to your
              doorstep.
            </p>
            <a
              href="/service"
              className="inline-flex items-center gap-2 bg-green-primary hover:bg-green-dark text-white px-6 py-3 rounded-full font-semibold transition text-sm"
            >
              Discover Our Services
              <span className="text-lg leading-none">&rarr;</span>
            </a>
          </Motion>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {cards.map((card) => (
            <StaggerItem key={card.title} animation="scaleUp">
              <div className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition h-full flex flex-col">
                <div className="relative h-56 overflow-hidden flex-shrink-0">
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
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="bg-green-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Agriculture
                    </span>
                    <span className="bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                      CropFarming
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-charcoal mb-2">
                    {card.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

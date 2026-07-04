"use client";

import Motion, { StaggerContainer, StaggerItem } from "@/components/Motion";

const cards = [
  {
    icon: "🌱",
    color: "border-l-green-primary",
    iconBg: "bg-green-primary/10",
    title: "Remove financial barriers for rural entrepreneurs",
  },
  {
    icon: "🏪",
    color: "border-l-accent-orange",
    iconBg: "bg-accent-orange/10",
    title: "Support small businesses and income-generating activities",
  },
  {
    icon: "🌍",
    color: "border-l-accent-coral",
    iconBg: "bg-accent-coral/10",
    title: "Strengthen local economies from the ground up",
  },
  {
    icon: "📈",
    color: "border-l-accent-blue",
    iconBg: "bg-accent-blue/10",
    title: "Create pathways to stability, dignity, and growth",
  },
];

export default function WhyWeExistSection() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-navy-900 rounded-3xl py-20 md:py-28 px-6">
        <Motion animation="fadeUp" className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-primary" />
            <span className="text-green-primary/70 text-xs font-semibold uppercase tracking-widest">
              Our Purpose
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Why We Exist{" "}
            <span className="serif-accent text-4xl md:text-5xl">
              Feed Our Nation
            </span>
          </h2>
          <p className="text-white/50 mt-5 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            Too many rural families struggle not because of a lack of effort,
            but because of limited access to resources.
          </p>
        </Motion>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.12}>
          {cards.map((card) => (
            <StaggerItem key={card.title} animation="scaleUp">
              <div
                className={`bg-white rounded-2xl p-6 md:p-8 border-l-4 ${card.color} shadow-lg hover:shadow-xl hover:-translate-y-1 transition`}
              >
                <div
                  className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center text-xl mb-4`}
                >
                  {card.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-charcoal">
                  {card.title}
                </h3>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

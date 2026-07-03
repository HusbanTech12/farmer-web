const cards = [
  {
    icon: "🏦",
    color: "border-b-green-primary",
    iconBg: "bg-green-primary/10",
    title: "Financial Inclusion",
    description:
      "Secure and flexible savings solutions that help rural families build financial stability and plan for future investments.",
  },
  {
    icon: "👩‍🌾",
    color: "border-b-accent-orange",
    iconBg: "bg-accent-orange/10",
    title: "Women Empowerment",
    description:
      "Loans tailored to support crop production, seeds, fertilizers, and farming equipment for women entrepreneurs.",
  },
  {
    icon: "🚀",
    color: "border-b-accent-coral",
    iconBg: "bg-accent-coral/10",
    title: "Youth Entrepreneurship",
    description:
      "Financial support and mentorship for young entrepreneurs launching and expanding agricultural and rural businesses.",
  },
  {
    icon: "🌾",
    color: "border-b-green-primary",
    iconBg: "bg-green-primary/10",
    title: "Agricultural Growth",
    description:
      "Strategic financing for purchasing, raising, and expanding livestock activities and crop production.",
  },
];

export default function ChangingCommunities() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-primary" />
            <span className="text-muted text-xs font-semibold uppercase tracking-widest">
              Holistic
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            Changing Communities{" "}
            <span className="serif-accent text-4xl md:text-5xl">
              Together
            </span>
          </h2>
          <p className="text-muted mt-5 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            Our holistic approach goes beyond just loans. We build ecosystems
            of support that enable entire communities to thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`bg-white rounded-2xl p-6 md:p-8 border-b-4 ${card.color} shadow-lg`}
            >
              <div
                className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center text-xl mb-4`}
              >
                {card.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-charcoal mb-2">
                {card.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

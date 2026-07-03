const partners = [
  {
    name: "Global Development Fund",
    initials: "GDF",
    color: "border-green-primary",
    iconBg: "bg-green-primary/10",
    iconColor: "text-green-primary",
  },
  {
    name: "Rural Bank Alliance",
    initials: "RBA",
    color: "border-gray-200",
    iconBg: "bg-gray-100",
    iconColor: "text-muted",
  },
  {
    name: "Community Growth Org",
    initials: "CGO",
    color: "border-gray-200",
    iconBg: "bg-gray-100",
    iconColor: "text-muted",
  },
  {
    name: "Fair Trade Coalition",
    initials: "FTC",
    color: "border-gray-200",
    iconBg: "bg-gray-100",
    iconColor: "text-muted",
  },
];

export default function PartnersSection() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-primary" />
            <span className="text-muted text-xs font-semibold uppercase tracking-widest">
              Our Partners
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            Working Together for{" "}
            <span className="serif-accent text-4xl md:text-5xl">
              Greater Impact
            </span>
          </h2>
          <p className="text-muted mt-5 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            Collaboration is at the heart of rural development. We partner with
            organizations that share our vision.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {partners.map((p) => (
            <div
              key={p.name}
              className={`bg-white rounded-2xl p-6 text-center border-2 ${p.color} shadow-sm`}
            >
              <div
                className={`w-14 h-14 rounded-xl ${p.iconBg} flex items-center justify-center mx-auto mb-4 ${p.iconColor} font-bold text-lg`}
              >
                {p.initials}
              </div>
              <h3 className="text-sm font-semibold text-charcoal leading-snug">
                {p.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

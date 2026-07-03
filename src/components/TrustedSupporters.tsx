const partners = [
  "UNICEF",
  "World Bank",
  "Oxfam",
  "Grameen",
  "IFAD",
  "AFDB",
];

export default function TrustedSupporters() {
  return (
    <section className="bg-cream py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-primary" />
          <span className="text-muted text-xs font-semibold uppercase tracking-widest">
            Our Trusted Supporters
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {partners.map((name) => (
            <div
              key={name}
              className="text-navy-800/30 text-2xl font-bold tracking-widest uppercase grayscale hover:grayscale-0 transition"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

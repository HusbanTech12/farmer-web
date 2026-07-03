const locations = [
  { name: "Ouagadougou" },
  { name: "Bobo-Dioulasso" },
  { name: "Koudougou" },
  { name: "Fada N'Gourma" },
];

export default function BranchLocations() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-green-primary" />
          <span className="text-muted text-xs font-semibold uppercase tracking-widest">
            Community
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
          We Are Close to{" "}
          <span className="serif-accent text-4xl md:text-5xl">
            Your Community
          </span>
        </h2>
        <p className="text-muted text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          Our services are available through regional branches and mobile agents
          across rural Burkina Faso.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2.5 text-charcoal text-sm font-medium"
            >
              <svg
                className="w-4 h-4 text-green-primary flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              {loc.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

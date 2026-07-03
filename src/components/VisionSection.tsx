const checkpoints = [
  "A Burkina Faso where every rural family has access to fair financial services",
  "Thriving local economies powered by homegrown entrepreneurship and innovation",
  "A future where geography no longer determines financial opportunity",
];

export default function VisionSection() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-primary" />
              <span className="text-muted text-xs font-semibold uppercase tracking-widest">
                Our Vision
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
              Building a financially inclusive future for{" "}
              <span className="serif-accent text-4xl md:text-5xl">
                Rural Burkina Faso
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
              We envision a future where every farmer, livestock breeder, and
              small entrepreneur in rural Burkina Faso has the financial tools
              and support they need to build a prosperous and sustainable
              livelihood.
            </p>

            <ul className="space-y-4">
              {checkpoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-green-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-charcoal text-sm md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              className="rounded-2xl h-[400px] md:h-[500px] bg-cover bg-center shadow-lg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1527153818091-1a9638521e2a?q=80&w=2069&auto=format&fit=crop')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

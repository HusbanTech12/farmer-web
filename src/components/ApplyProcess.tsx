const steps = [
  {
    step: "Step 1",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Visit Nearest Branch",
    caption: "Find a local community center near your village.",
  },
  {
    step: "Step 2",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Meet Loan Officer",
    caption: "Discuss your farming needs with an expert.",
  },
  {
    step: "Step 3",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Submit Application",
    caption: "Simple paperwork with minimal requirements.",
  },
  {
    step: "Step 4",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Receive Approval",
    caption: "Get funds within days to start planting.",
  },
];

export default function ApplyProcess() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-primary" />
            <span className="text-muted text-xs font-semibold uppercase tracking-widest">
              Applying Process
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            How to Apply For{" "}
            <span className="serif-accent text-4xl md:text-5xl">
              Agricultural Loan
            </span>
          </h2>
          <p className="text-muted mt-5 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            Simple 4-step process to get your funding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-10 relative max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.title} className="text-center relative">
              {i > 0 && (
                <div className="hidden md:block absolute -left-4 top-8 text-green-primary/30 text-xl">
                  &rarr;
                </div>
              )}
              <div className="w-16 h-16 rounded-full border-2 border-green-primary/30 flex items-center justify-center mx-auto mb-3 text-green-primary">
                {s.icon}
              </div>
              <span className="text-green-primary text-xs font-semibold uppercase tracking-wider block mb-1">
                {s.step}
              </span>
              <h3 className="text-lg font-bold text-charcoal mb-2">
                {s.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed max-w-[200px] mx-auto">
                {s.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

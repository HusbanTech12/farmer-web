const steps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
      </svg>
    ),
    title: "Apply Easily",
    caption: "Simple application process with minimal paperwork — apply in person at any village banking center.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Get Approved",
    caption: "Fast approval decisions through our community-based credit assessment process.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.078.48 3.578-.66.5-1.14 1.906-1.14 2.406 0 .427.974 1.533 1.373 2.5.88l.979-.495M12 6v12" />
      </svg>
    ),
    title: "Receive Funds",
    caption: "Funds disbursed within 48 hours directly to your mobile money account or local branch.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    title: "Grow Business",
    caption: "Ongoing support, financial literacy training, and access to larger loans as your business grows.",
  },
];

export default function GrowthProcess() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-primary" />
            <span className="text-muted text-xs font-semibold uppercase tracking-widest">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            How We Support{" "}
            <span className="serif-accent text-4xl md:text-5xl">
              Your Growth
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center relative">
              <div className="w-16 h-16 rounded-full bg-green-primary/10 flex items-center justify-center mx-auto mb-4 text-green-primary">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">
                {step.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {step.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

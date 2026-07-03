export default function BeyondFinancing() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-green-primary" />
          <span className="text-muted text-xs font-semibold uppercase tracking-widest">
            Simple Process
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
          Beyond{" "}
          <span className="serif-accent text-4xl md:text-5xl">
            Financing
          </span>
        </h2>
        <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
          We offer more than just loans. Our team provides financial planning
          guidance, agricultural best practices, and business management support
          to ensure long-term success for every farmer we serve.
        </p>
        <p className="text-charcoal/70 text-base md:text-lg italic max-w-xl mx-auto">
          &ldquo;We succeed when our farmers succeed.&rdquo;
        </p>
      </div>
    </section>
  );
}

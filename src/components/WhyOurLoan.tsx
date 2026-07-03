export default function WhyOurLoan() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
              Why Our Agricultural{" "}
              <span className="serif-accent text-4xl md:text-5xl">
                Loan?
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-4">
              Our agricultural loan is designed specifically to address the
              seasonal farming challenges faced by rural communities in Burkina
              Faso. We understand that farming income is cyclical — which is why
              our repayment terms are aligned with harvest cycles, not fixed
              monthly dates.
            </p>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
              With affordable interest rates and flexible terms, we make
              financing accessible to smallholder farmers who need it most.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-green-primary hover:bg-green-dark text-white px-6 py-3 rounded-full font-semibold transition text-sm"
            >
              Learn More
              <span className="text-lg leading-none">&rarr;</span>
            </a>
          </div>

          <div className="relative">
            <div
              className="rounded-2xl h-[400px] md:h-[450px] bg-cover bg-center shadow-lg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

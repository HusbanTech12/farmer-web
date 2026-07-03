export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/home/hero-img.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-800/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-primary" />
            <span className="text-green-primary text-sm font-semibold uppercase tracking-widest">
              Empowering Rural Communities
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Financial Access{" "}
            <span className="block">for Every Rural</span>
            <span className="serif-accent text-5xl md:text-6xl lg:text-7xl">
              Entrepreneur
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
            Microfinance Plus provides accessible financial services to farmers,
            livestock breeders, and small entrepreneurs across rural Burkina
            Faso — because every community deserves the chance to thrive.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-green-primary hover:bg-green-dark text-white px-8 py-3.5 rounded-full font-semibold transition flex items-center gap-2 text-base"
            >
              Donate Now
              <span className="text-xl leading-none">&rarr;</span>
            </a>
            <a
              href="#"
              className="border-2 border-white/40 hover:border-white text-white px-8 py-3.5 rounded-full font-semibold transition text-base"
            >
              Support Our Mission
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

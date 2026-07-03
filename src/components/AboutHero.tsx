import Navbar from "@/components/Navbar";

export default function AboutHero() {
  return (
    <section className="relative pt-4 md:pt-6 pb-8 md:pb-12 px-4 md:px-8">
      <div className="relative max-w-7xl mx-auto min-h-[80vh] md:min-h-[85vh] rounded-3xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-navy-900/50 to-navy-800/20" />

        <Navbar />

        <div className="relative z-10 h-full min-h-[80vh] md:min-h-[85vh] flex flex-col justify-end px-8 md:px-16 lg:px-20 pb-16 md:pb-20 pt-64 md:pt-80">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8">
              <span className="text-white/90 text-xs md:text-sm font-medium">
                Empowering Rural Business Fund
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
              Who We Are, Why{" "}
              <span className="block">We Exist, and Who</span>
              <span className="serif-accent text-5xl md:text-6xl lg:text-7xl">
                We Walk With
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/70 max-w-xl mb-10 leading-relaxed">
              We are a community-focused financial NGO working to ensure that
              rural entrepreneurs are not left behind.
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href="#"
                className="bg-green-primary hover:bg-green-dark text-white px-7 md:px-8 py-3.5 rounded-full font-semibold transition flex items-center gap-2 text-sm md:text-base"
              >
                Donate Now
                <span className="text-lg md:text-xl leading-none">&rarr;</span>
              </a>
              <a
                href="#"
                className="border-2 border-white/40 hover:border-white text-white px-7 md:px-8 py-3.5 rounded-full font-semibold transition text-sm md:text-base"
              >
                Support Our Mission
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

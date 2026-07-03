export default function BuiltFromRealNeeds() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
              Built From Real Needs, Shaped by{" "}
              <span className="serif-accent text-4xl md:text-5xl">
                Real People
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-4">
              We spent years listening to rural communities across Burkina Faso
              — understanding their challenges, their aspirations, and the
              barriers they face in accessing fair financial services.
            </p>
            <div className="border-l-4 border-green-primary pl-6 py-4 my-6 bg-green-primary/5 rounded-r-xl">
              <p className="text-xl md:text-2xl font-semibold text-charcoal italic">
                &ldquo;That&apos;s where we stepped in.&rdquo;
              </p>
            </div>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
              Our organization was born from a simple belief: that everyone
              deserves access to dignified, fair financial tools regardless of
              where they live. We exist to turn that belief into action — every
              single day.
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
              className="rounded-2xl h-[400px] md:h-[500px] bg-cover bg-center shadow-lg"
              style={{
                backgroundImage:
                  "url('/images/home/our-mission-img2.jpg')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SuccessStory() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-primary" />
              <span className="text-muted text-xs font-semibold uppercase tracking-widest">
                Featured Success Story
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
              From Small Garden to{" "}
              <span className="serif-accent text-4xl md:text-5xl">
                Thriving Business
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-4">
              Amina, a mother of four from a small village in Burkina Faso,
              received her first agricultural loan from Microfinance Plus in
              2022. With the funding, she expanded her vegetable garden,
              purchased better seeds, and invested in irrigation.
            </p>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
              Today, her farm has tripled in size. She employs three people
              from her village and uses her increased income to support her
              children&apos;s education.
            </p>
            <div className="border-l-4 border-green-primary bg-green-primary/5 rounded-r-xl pl-6 py-4">
              <p className="text-lg md:text-xl font-semibold text-charcoal italic">
                &ldquo;This loan changed my life. I now plan for the future
                with confidence.&rdquo;
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              className="rounded-2xl h-[400px] md:h-[500px] bg-cover bg-center shadow-lg"
              style={{
                backgroundImage:
                  "url('/images/impact/featured-successfull-sec.jpg')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

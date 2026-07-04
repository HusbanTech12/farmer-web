"use client";

import Motion from "@/components/Motion";

const rows = [
  {
    text: {
      title: "Community First",
      description:
        "Built on trust and deep relationships with local village leaders and cooperatives across Burkina Faso.",
      link: "#",
    },
    image: "/images/home/whats-we-do-img1.jpg",
    reversed: false,
  },
  {
    text: {
      title: "Sustainable Growth",
      description:
        "Financial tools designed to help farms expand and weather seasonal challenges with confidence.",
      link: "#",
    },
    image: "/images/home/whats-we-do-img2.jpg",
    reversed: true,
  },
  {
    text: {
      title: "Social Impact",
      description:
        "Profits are reinvested into education and healthcare initiatives for our members and their families.",
      link: "#",
    },
    image: "/images/home/whats-we-do-img3.jpg",
    reversed: false,
  },
];

export default function BentoSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Motion animation="fadeUp" className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-1.5 mb-4">
            <svg
              className="w-3.5 h-3.5 text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-muted text-xs font-semibold uppercase tracking-widest">
              What We Do
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            More Than Just a Bank, We Are a
            <span className="block">
              Partner in{" "}
              <span className="serif-accent text-4xl md:text-5xl">
                Progress
              </span>
            </span>
          </h2>

          <p className="text-muted mt-5 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            Bridging traditional banking and rural reality — our mission is to
            provide accessible financial tools for farmers and livestock
            breeders across Burkina Faso.
          </p>
        </Motion>

        <div className="border border-gray-200 rounded-2xl p-4 md:p-6 max-w-5xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            {rows.map((row, i) => (
              <Motion
                key={i}
                animation={row.reversed ? "fadeRight" : "fadeLeft"}
                delay={i * 0.15}
              >
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div
                    className={`flex flex-col justify-center p-6 md:p-8 lg:p-10 min-h-[220px] ${
                      row.reversed ? "md:order-2" : ""
                    }`}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3">
                      {row.text.title}
                    </h3>
                    <p className="text-muted text-sm md:text-base leading-relaxed mb-4">
                      {row.text.description}
                    </p>
                    <a
                      href={row.text.link}
                      className="inline-flex items-center gap-2 text-charcoal hover:text-green-primary font-semibold text-sm underline-offset-2 underline hover:translate-x-1 transition"
                    >
                      Learn More
                      <span className="text-lg leading-none">&rarr;</span>
                    </a>
                  </div>

                  <div
                    className={`h-[240px] md:h-[280px] rounded-xl bg-cover bg-center hover:scale-[1.02] transition duration-500 ${
                      row.reversed ? "md:order-1" : ""
                    }`}
                    style={{ backgroundImage: `url('${row.image}')` }}
                  />
                </div>
              </Motion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

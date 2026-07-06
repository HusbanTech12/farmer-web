"use client";

import Motion from "@/components/Motion";

const rows = [
  {
    text: {
      title: "Community First",
      description:
        "Built on trust and deep relationships with local village leaders and cooperatives.",
      link: "#",
    },
    image: "/images/home/whats-we-do-img1.jpg",
    reversed: false,
  },
  {
    text: {
      title: "Sustainable Growth",
      description:
        "Financial tools designed to help farms expand and weather seasonal challenges.",
      link: "#",
    },
    image: "/images/home/whats-we-do-img2.jpg",
    reversed: true,
  },
  {
    text: {
      title: "Social Impact",
      description:
        "Profits are reinvested into education and healthcare initiatives for our members.",
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
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-primary" />
            <span className="text-muted text-xs font-semibold uppercase tracking-widest">
              What We Do
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            More Than Just a Bank, We Are a
            <span className="block">
              <span className="instrument-italic text-4xl md:text-5xl text-green-primary">
                Partner in Progress
              </span>
            </span>
          </h2>

          <p className="text-muted mt-5 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            Founded in Ouagadougou with a vision to bridge the gap between
            traditional banking and rural realities, we understand that a small
            loan can mean the difference between a harvest lost and a family fed.
          </p>
          <p className="text-muted mt-4 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            Our mission is to provide dignified, accessible financial services
            that empower farmers and livestock breeders to build resilience and
            prosperity for their communities.
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
                    className={`flex flex-col items-start justify-center p-6 md:p-8 lg:p-10 min-h-[220px] ${
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
                      className="inline-flex items-center gap-2 w-fit border-[1.5px] border-charcoal hover:bg-green-primary hover:border-green-primary hover:text-white text-charcoal px-6 py-3 rounded-full font-semibold text-sm transition"
                    >
                      Learn More
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
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

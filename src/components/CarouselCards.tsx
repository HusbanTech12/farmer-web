"use client";

import { useState } from "react";

const cards = [
  {
    category: "Agriculture",
    color: "bg-green-primary",
    title: "Financial Services",
    description:
      "Savings accounts, microloans, and insurance products designed specifically for rural farming communities.",
    image: "/images/home/whats-we-do-img1.jpg",
  },
  {
    category: "Crop Farming",
    color: "bg-accent-orange",
    title: "Business Support",
    description:
      "Training, mentorship, and market access support to help rural enterprises thrive and grow sustainably.",
    image: "/images/home/whats-we-do-img2.jpg",
  },
  {
    category: "Community",
    color: "bg-accent-coral",
    title: "Community Programs",
    description:
      "Financial literacy workshops, women's empowerment initiatives, and youth entrepreneurship programs.",
    image: "/images/home/whats-we-do-img3.jpg",
  },
];

export default function CarouselCards() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? cards.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === cards.length - 1 ? 0 : c + 1));

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight">
              Supporting Those Who <br />
              Feed{" "}
              <span className="serif-accent text-4xl md:text-5xl">
                Our Nation
              </span>
            </h2>
          </div>
          <div>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
              From farmers to livestock breeders, no bank account? No problem.
              We meet people where they are — literally and financially.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-green-primary hover:bg-green-dark text-white px-6 py-3 rounded-full font-semibold transition text-sm"
            >
              Discover Our Services
              <span className="text-lg leading-none">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {cards.map((card) => (
                <div key={card.title} className="min-w-0 w-full shrink-0 px-2">
                  <div className="group rounded-2xl overflow-hidden bg-white shadow-md">
                    <div className="relative h-56 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-500"
                        style={{ backgroundImage: `url('${card.image}')` }}
                      />
                      <div className="absolute inset-0 bg-black/10" />
                      <span
                        className={`absolute top-4 left-4 ${card.color} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                      >
                        {card.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-charcoal mb-2">
                        {card.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-charcoal hover:text-green-primary transition"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-charcoal hover:text-green-primary transition"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === current ? "bg-green-primary" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

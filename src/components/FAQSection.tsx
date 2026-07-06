"use client";

import { useState } from "react";
import Motion from "@/components/Motion";

const faqs = [
  {
    question: "Who can benefit from Microfinance Plus services?",
    answer:
      "Our services are designed for rural farmers, livestock breeders, small traders, and entrepreneurs who do not have access to traditional banking services.",
  },
  {
    question: "Do I need collateral to apply for a loan?",
    answer:
      "No, we use a character-based and community-backed lending model. Your reputation and community standing serve as the foundation for loan approval.",
  },
  {
    question: "Which regions do you operate in?",
    answer:
      "We currently operate across 12 regions in Burkina Faso, including Ouagadougou, Bobo-Dioulasso, Koudougou, Fada N'Gourma, and surrounding rural areas.",
  },
  {
    question: "Are your services officially regulated?",
    answer:
      "Yes, Microfinance Plus SARL is a fully licensed and regulated microfinance institution operating under the Central Bank of West African States (BCEAO) framework.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) =>
    setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#F5F6F5" }}>
      <div className="max-w-7xl mx-auto px-6">
        <Motion animation="fadeUp" className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-primary" />
            <span className="text-muted text-[17px] font-normal tracking-widest leading-8">
              FAQ
            </span>
          </div>
          <h2 className="text-[35px] font-bold text-charcoal leading-[57px]">
            Frequently Asked Question
          </h2>
        </Motion>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <Motion animation="fadeLeft" className="relative">
            <div
              className="rounded-2xl h-[350px] md:h-[450px] bg-cover bg-center shadow-lg hover:scale-[1.02] transition duration-500"
              style={{
                backgroundImage:
                  "url('/images/home/our-mission-img1.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
            <div className="absolute bottom-6 left-6 inline-flex items-start gap-3 border border-white/30 backdrop-blur-md rounded-2xl px-5 py-4 max-w-xs">
              <span className="w-2 h-2 rounded-full bg-green-primary flex-shrink-0 mt-1.5" />
              <p className="text-white text-sm leading-relaxed">
                Find simple answers about our services and process.
              </p>
            </div>
          </Motion>

          <div>
            {faqs.map((faq, i) => (
              <div key={i}>
                <div
                  className={`py-5 ${i > 0 ? "border-t border-gray-300" : ""}`}
                >
                  <button
                    className="w-full flex items-center justify-between text-left"
                    onClick={() => toggle(i)}
                  >
                    <span className="font-bold text-charcoal text-[15px] pr-4">
                      {faq.question}
                    </span>
                    {openIndex === i ? (
                      <svg
                        className="w-5 h-5 text-charcoal flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-charcoal flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 5v14m-7-7h14"
                        />
                      </svg>
                    )}
                  </button>
                  {openIndex === i && (
                    <div className="mt-3">
                      <p className="text-muted text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

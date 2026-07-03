"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need collateral to apply?",
    answer:
      "No traditional collateral is required. Our signature guarantee program and community-based credit assessment replace the need for physical collateral, making loans accessible to smallholder farmers.",
  },
  {
    question: "How long is the approval process?",
    answer:
      "Most applications are reviewed and approved within 3–5 business days. Our local loan officers work directly with community leaders to expedite the verification process.",
  },
  {
    question: "Can I repay after the harvest?",
    answer:
      "Yes — our repayment schedules are designed around agricultural cycles. You can choose a repayment plan that aligns with your harvest season, ensuring you repay when your income arrives.",
  },
  {
    question: "What can the loan be used for?",
    answer:
      "Our agricultural loans can be used for seeds, fertilizers, farming equipment, livestock purchase, land preparation, irrigation systems, and any other farming-related expenses.",
  },
];

export default function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) =>
    setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-primary" />
            <span className="text-muted text-xs font-semibold uppercase tracking-widest">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="relative">
            <div
              className="rounded-2xl h-[350px] md:h-[450px] bg-cover bg-center shadow-lg"
              style={{
                backgroundImage:
                  "url('/images/home/our-mission-img1.jpg')",
              }}
            />
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-cream rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => toggle(i)}
                >
                  <span className="font-semibold text-charcoal text-sm md:text-base pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-green-primary flex-shrink-0 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5">
                    <p className="text-muted text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

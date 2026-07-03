"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I apply for a micro-loan?",
    answer:
      "You can apply in person at any of our 50+ village banking centers across Burkina Faso. Bring a valid ID and basic information about your farming or business activity. Our community agents will guide you through the simple application process.",
  },
  {
    question: "What are the interest rates and repayment terms?",
    answer:
      "Our interest rates start from as low as 5% APR, with flexible repayment terms tailored to agricultural cycles. We offer 3-month, 6-month, and 12-month repayment plans that align with harvest seasons and income flows.",
  },
  {
    question: "Do I need a bank account to access services?",
    answer:
      "No, you don't need a traditional bank account. We work with mobile money platforms and our own village banking network to ensure our services are accessible to everyone, regardless of their banking history.",
  },
  {
    question: "How does Microfinance Plus support rural entrepreneurs?",
    answer:
      "Beyond providing capital, we offer financial literacy training, business mentorship, and access to a network of fellow entrepreneurs. Our holistic approach ensures that our clients have the knowledge and support to succeed.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) =>
    setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-cream py-20 md:py-28">
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
                  "url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop')",
              }}
            />
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
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

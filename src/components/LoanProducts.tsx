"use client";

import Motion, { StaggerContainer, StaggerItem } from "@/components/Motion";

const loans = [
  "Agricultural Input Loans",
  "Livestock Investment Loans",
  "Small Business / Development Loans",
  "Equipment and Tool Financing",
  "Seasonal / Working Capital Loans",
];

export default function LoanProducts() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Motion animation="fadeLeft">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
              Loan Products for Every{" "}
              <span className="serif-accent text-4xl md:text-5xl">
                Rural Project
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
              Our loans are built for every stage of farming or business — from
              land preparation to livestock investment and equipment purchases.
            </p>

            <StaggerContainer className="space-y-3" staggerDelay={0.08}>
              {loans.map((item) => (
                <StaggerItem key={item} animation="fadeLeft">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-green-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-green-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-charcoal text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <a
              href="/service/agricultural-loans"
              className="inline-flex items-center gap-2 text-green-primary hover:text-green-dark font-semibold text-sm mt-6 hover:translate-x-1 transition"
            >
              View Agricultural Loan Details
              <span className="text-lg leading-none">&rarr;</span>
            </a>
          </Motion>

          <Motion animation="fadeRight" className="relative">
            <div
              className="rounded-2xl h-[400px] md:h-[500px] bg-cover bg-center shadow-lg hover:scale-[1.02] transition duration-500"
              style={{
                backgroundImage:
                  "url('/images/Service/Loan-product.jpg')",
              }}
            />
          </Motion>
        </div>
      </div>
    </section>
  );
}

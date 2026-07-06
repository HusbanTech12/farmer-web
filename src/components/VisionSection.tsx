"use client";

import Motion, { StaggerContainer, StaggerItem } from "@/components/Motion";

const checkpoints = [
  "Provide accessible saving & credit services for underserved rural communities",
  "Support agricultural and livestock entrepreneurship",
  "Promote financial inclusion and local economic growth",
];

export default function VisionSection() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <Motion animation="fadeLeft" className="flex flex-col justify-center gap-5 order-2 md:order-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-primary" />
              <span className="text-muted text-[17px] font-normal tracking-widest leading-8">
                Our Vision
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[35px] font-bold text-charcoal leading-tight md:leading-[57px] mb-4 md:mb-6">
              Building a financially inclusive future for{" "}
              <span className="instrument-italic text-3xl sm:text-4xl md:text-[51px] md:leading-[57px]">
                Rural Burkina Faso
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              At Microfinance Plus SARL, our mission is to sustainably improve
              the social and economic conditions of rural populations by
              providing reliable financial services and personalized support to
              farmers and livestock breeders across Burkina Faso.
            </p>

            <StaggerContainer className="space-y-3" staggerDelay={0.1}>
              {checkpoints.map((item) => (
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
          </Motion>

          <Motion animation="fadeRight" className="relative order-1 md:order-2">
            <div
              className="rounded-2xl h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-cover bg-center shadow-lg hover:scale-[1.02] transition duration-500"
              style={{
                backgroundImage:
                  "url('/images/home/our-mission-img2.jpg')",
              }}
            />
          </Motion>
        </div>
      </div>
    </section>
  );
}

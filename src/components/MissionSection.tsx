"use client";

import Motion, { StaggerContainer, StaggerItem } from "@/components/Motion";

const checkpoints = [
  "Provide accessible saving & credit services for underserved rural communities",
  "Support agricultural and livestock entrepreneurship",
  "Promote financial inclusion and local economic growth",
];

export default function MissionSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Motion animation="fadeLeft" className="relative">
            <div
              className="rounded-2xl h-[400px] md:h-[500px] bg-cover bg-center shadow-lg"
              style={{
                backgroundImage:
                  "url('/images/home/our-mission-img1.jpg')",
              }}
            />
          </Motion>

          <Motion animation="fadeRight">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-primary" />
              <span className="text-muted text-xs font-semibold uppercase tracking-widest">
                Our Mission
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
              Empowering rural communities through accessible{" "}
              <span className="serif-accent text-4xl md:text-5xl">
                financial solutions
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
              Our mission is to sustainably improve the social and economic
              conditions of underserved rural populations by providing reliable
              financial services and personalized support to farmers and
              livestock breeders across Burkina Faso.
            </p>

            <StaggerContainer className="space-y-3" staggerDelay={0.1}>
              {checkpoints.map((item) => (
                <StaggerItem key={item} animation="fadeRight">
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
        </div>
      </div>
    </section>
  );
}

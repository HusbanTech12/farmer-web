"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#" },
  { label: "Service", href: "#" },
  { label: "Impact", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative pt-4 md:pt-6 pb-8 md:pb-12 px-4 md:px-8">
      <div className="relative max-w-7xl mx-auto min-h-[80vh] md:min-h-[85vh] rounded-3xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-[center_left_-200px] md:bg-[center_left_-100px] lg:bg-left"
          style={{
            backgroundImage:
              "url('/images/home/hero-img.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-navy-900/50 to-navy-800/20" />

        <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pt-6 md:pt-8">
          <div className="inline-flex items-center gap-5 border border-white/25 rounded-full px-5 py-2 bg-white/5 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full bg-green-primary flex items-center justify-center flex-shrink-0">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                />
              </svg>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-white transition px-3 py-1 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-white/80 text-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <span>En</span>
                <svg
                  className="w-3 h-3"
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
              </div>
              <a
                href="#"
                className="bg-green-primary hover:bg-green-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition"
              >
                Donate Now
              </a>
            </div>

            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 z-20 bg-navy-900/95 backdrop-blur rounded-2xl px-6 py-6">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-green-primary transition text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5 text-white/80 text-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <span>En</span>
                <svg
                  className="w-3 h-3"
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
              </div>
              <a
                href="#"
                className="bg-green-primary hover:bg-green-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition"
              >
                Donate Now
              </a>
            </div>
          </div>
        )}

        <div className="relative z-10 h-full min-h-[80vh] md:min-h-[85vh] flex flex-col justify-end px-8 md:px-16 lg:px-20 pb-16 md:pb-20 pt-64 md:pt-80">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8">
              <span className="text-white/90 text-xs md:text-sm font-medium">
                Empowering Rural Communities
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Financial Access{" "}
              <span className="block">for Every Rural</span>
              <span className="serif-accent text-5xl md:text-6xl lg:text-7xl">
                Entrepreneur
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/70 max-w-xl mb-10 leading-relaxed">
              Microfinance Plus provides inclusive banking solutions for farmers
              &amp; livestock breeders across Burkina Faso. We believe in your
              potential.
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href="#"
                className="bg-green-primary hover:bg-green-dark text-white px-7 md:px-8 py-3.5 rounded-full font-semibold transition flex items-center gap-2 text-sm md:text-base"
              >
                Donate Now
                <span className="text-lg md:text-xl leading-none">&rarr;</span>
              </a>
              <a
                href="#"
                className="border-2 border-white/40 hover:border-white text-white px-7 md:px-8 py-3.5 rounded-full font-semibold transition text-sm md:text-base"
              >
                Support Our Mission
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

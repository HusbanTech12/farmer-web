"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#" },
  { label: "Service", href: "#" },
  { label: "Impact", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/95 backdrop-blur shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-primary flex items-center justify-center text-white font-bold text-sm">
            M+
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Microfinance<span className="text-green-primary">+</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
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

        <div className="hidden md:flex items-center gap-4">
          <select className="bg-transparent text-white text-sm border border-white/20 rounded-full px-3 py-1.5">
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
          <a
            href="#"
            className="bg-green-primary hover:bg-green-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition flex items-center gap-2"
          >
            Donate Now
            <span className="text-lg leading-none">&rarr;</span>
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

      {menuOpen && (
        <div className="md:hidden bg-navy-900/95 backdrop-blur px-6 pb-6">
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
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10">
            <select className="bg-transparent text-white text-sm border border-white/20 rounded-full px-3 py-1.5">
              <option value="en">EN</option>
              <option value="fr">FR</option>
            </select>
            <a
              href="#"
              className="bg-green-primary hover:bg-green-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition flex items-center gap-2"
            >
              Donate Now
              <span className="text-lg leading-none">&rarr;</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

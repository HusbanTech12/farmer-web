"use client";

import Motion, { StaggerContainer, StaggerItem } from "@/components/Motion";

export default function Footer() {
  const quickLinks = [
    { label: "About Us", href: "#" },
    { label: "Our Services", href: "#" },
    { label: "Impact", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const serviceLinks = [
    { label: "Micro-loans", href: "#" },
    { label: "Livestock Financing", href: "#" },
    { label: "Secure Savings", href: "#" },
    { label: "Community Banking", href: "#" },
  ];

  return (
    <footer className="bg-navy-900 border-t border-white/10">
      <Motion animation="fadeUp" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-green-primary flex items-center justify-center text-white font-bold text-sm">
                M+
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Microfinance<span className="text-green-primary">+</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Empowering rural entrepreneurs across Burkina Faso with
              accessible, dignified, and affordable financial services.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-green-primary hover:pl-1 transition text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-green-primary hover:pl-1 transition text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="text-white/50 text-sm">
                Avenue Kwame N&apos;Krumah<br />
                Ouagadougou, Burkina Faso
              </li>
              <li className="text-white/50 text-sm">
                +226 25 00 00 00
              </li>
              <li className="text-white/50 text-sm">
                contact@microfinanceplus.bf
              </li>
            </ul>
          </div>
        </div>
      </Motion>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Microfinance Plus. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-green-primary transition text-xs">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-green-primary transition text-xs">
              Terms of Service
            </a>
            <a href="#" className="text-white/40 hover:text-green-primary transition text-xs">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

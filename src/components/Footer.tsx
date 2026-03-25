import { Phone, ArrowUp } from "lucide-react";
import { FacebookIcon } from "./icons";

const productLinks = [
  "Professional Audio",
  "Musical Instruments",
  "Event Lighting",
  "Studio Recording",
  "LED Wall & AV",
  "DJ Equipment",
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Products", href: "/products" },
  { label: "Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="font-display text-2xl text-gold-gradient">
              CJC MUSIC
            </span>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-xs">
              Your #1 source for branded & premium professional audio systems,
              musical instruments, and AV equipment in the Philippines.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://facebook.com/cjcmusicph"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-lg bg-charcoal/50 border border-white/5 text-gray-500 hover:text-gold hover:border-gold/20 transition-all cursor-pointer"
                aria-label="CJC Music Facebook Page"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="tel:09224457975"
                className="w-11 h-11 flex items-center justify-center rounded-lg bg-charcoal/50 border border-white/5 text-gray-500 hover:text-gold hover:border-gold/20 transition-all cursor-pointer"
                aria-label="Call CJC Music"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Products</h3>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="/products"
                    className="text-sm text-gray-500 hover:text-gold transition-colors cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gold transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-500">
              <li>
                <a
                  href="tel:09224457975"
                  className="hover:text-gold transition-colors cursor-pointer"
                >
                  0922-4457975
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/cjcmusicph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors cursor-pointer"
                >
                  facebook.com/cjcmusicph
                </a>
              </li>
              <li>Mon–Sat: 9AM – 6PM</li>
              <li>Philippines</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} CJC Music. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-xs text-gray-600 hover:text-gold transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  ChevronRight,
} from "lucide-react";
import { FacebookIcon } from "./icons";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Brands", href: "#brands" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      {/* Top bar — contact info (hidden on mobile for clean hero) */}
      <div className="hidden md:block bg-gold/10 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-4">
            <a
              href="tel:09224457975"
              className="flex items-center gap-1.5 hover:text-gold transition-colors cursor-pointer"
            >
              <Phone className="w-3 h-3" />
              0922-4457975
            </a>
          </div>
          <a
            href="https://facebook.com/cjcmusicph"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-gold transition-colors cursor-pointer"
          >
            <FacebookIcon className="w-3 h-3" />
            Follow us on Facebook
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 cursor-pointer">
            <span className="font-display text-2xl md:text-3xl text-gold-gradient tracking-wide">
              CJC MUSIC
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-gold transition-colors cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-black font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
          >
            Get a Quote
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-gold transition-colors cursor-pointer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-black/98 backdrop-blur-lg transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-6 pt-8 pb-12">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-4 text-lg font-medium text-gray-200 hover:text-gold border-b border-white/5 transition-colors cursor-pointer"
              >
                {link.label}
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-4">
            <a
              href="tel:09224457975"
              className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              0922-4457975
            </a>
            <a
              href="https://facebook.com/cjcmusicph"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors cursor-pointer"
            >
              <FacebookIcon className="w-5 h-5" />
              @cjcmusicph
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 w-full text-center bg-gold hover:bg-gold-dark text-black font-semibold py-3.5 rounded-lg transition-colors cursor-pointer"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

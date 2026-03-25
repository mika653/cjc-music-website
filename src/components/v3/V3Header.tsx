"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export default function V3Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0B0B0E]/95 backdrop-blur-md" : "bg-transparent"}`}>
      <nav className="flex items-center justify-between h-[60px] px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4A574] to-[#C4853A]" />
          <div className="flex flex-col">
            <span style={{ fontFamily: "'Fraunces', serif" }} className="text-lg font-semibold text-[#FAFAF9] tracking-[-0.5px]">CJC Music</span>
            <span className="text-[9px] font-medium text-[#6B6B70]">Premium Audio PH</span>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#16161A] cursor-pointer" aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X className="w-[18px] h-[18px] text-[#FAFAF9]" /> : <Menu className="w-[18px] h-[18px] text-[#FAFAF9]" />}
        </button>
      </nav>

      <div className={`fixed inset-0 top-[60px] bg-[#0B0B0E]/98 backdrop-blur-lg transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col h-full px-6 pt-8 pb-12">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between py-5 border-b border-[#2A2A2E] transition-colors cursor-pointer group">
              <span style={{ fontFamily: "'Fraunces', serif" }} className="text-lg font-semibold text-[#FAFAF9] group-hover:text-[#C4853A]">{link.label}</span>
              <ChevronRight className="w-4 h-4 text-[#4A4A50]" />
            </a>
          ))}
          <div className="mt-auto">
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-[#D4A574] to-[#C4853A] text-white py-4 rounded-2xl font-semibold cursor-pointer">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

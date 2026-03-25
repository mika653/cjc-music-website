"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "PRODUCTS", href: "#products" },
  { label: "CONTACT", href: "#contact" },
];

export default function V2Header() {
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md" : "bg-transparent"}`}>
      <nav className="flex items-center justify-between h-14 px-5 border-b border-[#333333]">
        <div className="flex items-center gap-3">
          <span style={{ fontFamily: "'Playfair Display', serif" }} className="text-[28px] font-bold text-[#C9A962]">CJC</span>
          <span className="text-[11px] font-semibold tracking-[2px] text-[#777777]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>MUSIC</span>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-white cursor-pointer" aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <div className={`fixed inset-0 top-14 bg-[#0A0A0A]/98 backdrop-blur-lg transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col h-full px-5 pt-8 pb-12">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between py-5 border-b border-[#333333] transition-colors cursor-pointer group"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              <span className="text-sm font-semibold tracking-[1px] text-white group-hover:text-[#C9A962]">{link.label}</span>
              <ChevronRight className="w-4 h-4 text-[#444444]" />
            </a>
          ))}
          <div className="mt-auto">
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block w-full text-center bg-[#C9A962] text-[#0A0A0A] py-4 font-semibold text-xs tracking-[1px] cursor-pointer" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              GET A QUOTE
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "ACERCA DE", href: "#acerca-de" },
  { label: "TERAPIA", href: "#terapia" },
  { label: "PROCESO", href: "#proceso" },
  { label: "PREGUNTAS FRECUENTES", href: "#faq" },
  { label: "CONTACTO", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FAF7F2] shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <SunLogo
            className={`w-10 h-10 transition-colors duration-300 ${
              scrolled ? "text-[#C8903C]" : "text-[#FAF7F2]"
            }`}
          />
          <div
            className={`transition-colors duration-300 ${
              scrolled ? "text-[#2C2420]" : "text-[#FAF7F2]"
            }`}
          >
            <p
              className="font-display font-semibold text-lg leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Marina Leal
            </p>
            <p className="text-[10px] tracking-[0.25em] uppercase opacity-70">
              Psicóloga Clínica
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[10px] tracking-[0.2em] font-medium transition-colors duration-300 hover:text-[#C8903C] ${
                scrolled ? "text-[#3D3530]" : "text-[#FAF7F2]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://linkedin.com/in/marina-leal-guillemin/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 hover:text-[#C8903C] ${
              scrolled ? "text-[#3D3530]" : "text-[#FAF7F2]"
            }`}
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden transition-colors duration-300 ${
            scrolled ? "text-[#2C2420]" : "text-[#FAF7F2]"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-t border-[#EDE8DF] px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[10px] tracking-[0.25em] font-medium text-[#3D3530] hover:text-[#C8903C] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://linkedin.com/in/marina-leal-guillemin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3D3530] hover:text-[#C8903C] transition-colors"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
        </div>
      )}
    </header>
  );
}

function SunLogo({ className }: { className?: string }) {
  const rays = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    return {
      x1: 50 + 27 * Math.cos(angle),
      y1: 50 + 27 * Math.sin(angle),
      x2: 50 + 37 * Math.cos(angle),
      y2: 50 + 37 * Math.sin(angle),
    };
  });
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <circle cx="50" cy="50" r="43" />
      <circle cx="50" cy="50" r="21" />
      {rays.map((r, i) => (
        <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} />
      ))}
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "מפת המסע" },
  { href: "#", label: "חומרי למידה" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setMenuOpen(false)}>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
              <span className="text-primary font-black text-sm leading-none">מ</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-sm sm:text-base tracking-wide">
                מכבי AI Master
              </span>
              <span className="text-primary-200 text-xs font-normal hidden sm:block">
                תוכנית מנהיגות AI
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-primary-100 hover:text-white text-sm font-medium transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* User + hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex flex-col items-end leading-tight">
              <span className="text-white text-sm font-medium">שלום, מנהל</span>
              <span className="text-primary-200 text-xs">מחזור 2026</span>
            </div>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary-600 border-2 border-primary-300 flex items-center justify-center shrink-0">
              <span className="text-white font-semibold text-sm">מ</span>
            </div>
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden p-1.5 rounded-lg text-white hover:bg-primary-600 transition-colors"
              aria-label={menuOpen ? "סגור תפריט" : "פתח תפריט"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary-700 border-t border-primary-600">
          <nav className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-primary-100 hover:text-white text-sm font-medium py-3 border-b border-primary-600 last:border-0 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 py-3 text-primary-200 text-sm">
              <span>שלום, מנהל</span>
              <span>·</span>
              <span className="text-xs">מחזור 2026</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

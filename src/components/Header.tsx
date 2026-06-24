"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "מפת המסע" },
  { href: "/materials", label: "חומרי למידה" },
];

function Stripe() {
  return (
    <div className="ofek-stripe">
      <i /><i /><i /><i /><i /><i />
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-grad-navy shadow-ofek-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setMenuOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/maccabi-logo.png" alt="מכבי" className="h-7 sm:h-8 w-auto brightness-0 invert" />
            <div className="w-px h-6 bg-primary-500 hidden sm:block" />
            <div className="flex flex-col leading-tight hidden sm:flex">
              <span className="text-white font-semibold text-sm sm:text-base tracking-tight">
                AI <span className="text-accent-300">Master</span>
              </span>
              <span className="text-primary-300 text-[11px] font-normal">
                תוכנית פיתוח מנהלים
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}
                className="text-primary-300 hover:text-white text-sm font-medium transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger — mobile only */}
          <button onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-1.5 rounded-lg text-white hover:bg-primary-600 transition-colors"
            aria-label={menuOpen ? "סגור תפריט" : "פתח תפריט"}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-primary-800 border-t border-primary-600">
          <nav className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                className="text-primary-300 hover:text-white text-sm font-medium py-3 border-b border-primary-600 last:border-0 transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <Stripe />
    </header>
  );
}

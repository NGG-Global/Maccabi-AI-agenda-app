"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "מפת המסע" },
  { href: "#", label: "חומרי למידה" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg" style={{ background: "#04081f" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Logos row */}
          <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setMenuOpen(false)}>
            <Image
              src="/image003.png"
              alt="מכבי"
              width={90}
              height={40}
              className="h-8 sm:h-10 w-auto object-contain"
              priority
            />
            <div className="w-px h-6 bg-white/20" />
            <Image
              src="/image002.png"
              alt="AI Master"
              width={90}
              height={40}
              className="h-8 sm:h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-150"
                style={{ color: "#73d9f0" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#73d9f0")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-1.5 rounded-lg transition-colors"
            style={{ color: "#73d9f0" }}
            aria-label={menuOpen ? "סגור תפריט" : "פתח תפריט"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t" style={{ background: "#0a1628", borderColor: "#1e3a6e" }}>
          <nav className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium py-3 border-b last:border-0 transition-colors"
                style={{ color: "#73d9f0", borderColor: "#1e3a6e" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              {/* Maccabi emblem placeholder */}
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
                <span className="text-primary font-black text-sm leading-none">מ</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-base tracking-wide">
                  מכבי AI | אופק
                </span>
                <span className="text-primary-200 text-xs font-normal">
                  תוכנית פיתוח מנהלים
                </span>
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-primary-100 hover:text-white text-sm font-medium transition-colors duration-150"
            >
              מפת המסע
            </Link>
            <a
              href="#"
              className="text-primary-100 hover:text-white text-sm font-medium transition-colors duration-150"
            >
              חומרי למידה
            </a>
            <a
              href="#"
              className="text-primary-100 hover:text-white text-sm font-medium transition-colors duration-150"
            >
              קהילה
            </a>
          </nav>

          {/* User area */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col items-end leading-tight">
              <span className="text-white text-sm font-medium">שלום, מנהל</span>
              <span className="text-primary-200 text-xs">מחזור 2025</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-primary-600 border-2 border-primary-300 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">מ</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

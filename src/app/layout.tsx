import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

const SITE_TITLE = "AI Master — תוכנית פיתוח מנהלים";
const SITE_DESCRIPTION =
  "פלטפורמת הלמידה הדיגיטלית של תוכנית AI Master לפיתוח מנהלים";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: ["AI Master", "פיתוח מנהלים", "למידה", "הנהגה"],
  // No icon is declared on purpose: link-preview scrapers such as WhatsApp fall
  // back to the site icon when no og:image exists, which previously exposed a
  // logo we are not cleared to use.
  icons: { icon: [], shortcut: [], apple: [], other: [] },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
    type: "website",
    locale: "he_IL",
    images: [],
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-maccabi-bg font-ploni">
        <Header />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          {children}
        </main>
        <footer className="border-t border-maccabi-border bg-white mt-auto">
          <div className="ofek-stripe tall" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col items-center gap-3">
            <div className="flex items-center gap-3 opacity-70">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/maccabi-logo.png" alt="מכבי" className="h-5 w-auto" />
              <div className="w-px h-4 bg-maccabi-border" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/ngg-logo.png" alt="NGG" className="h-5 w-auto" />
            </div>
            <p className="text-xs text-maccabi-subtle text-center">
              © 2026 מכבי שירותי בריאות — תוכנית AI Master לפיתוח מנהלים. כל הזכויות שמורות.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

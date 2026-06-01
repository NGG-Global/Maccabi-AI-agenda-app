import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "מכבי AI | אופק — תוכנית פיתוח מנהלים",
  description:
    "פלטפורמת הלמידה הדיגיטלית של תוכנית אופק — פיתוח מנהלים של מכבי שירותי בריאות",
  keywords: ["מכבי", "אופק", "פיתוח מנהלים", "למידה", "הנהגה"],
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
      <body className="min-h-screen flex flex-col bg-maccabi-bg font-heebo">
        <Header />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="border-t border-maccabi-border bg-white mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-xs text-maccabi-muted text-center">
              © 2025 מכבי שירותי בריאות — תוכנית אופק לפיתוח מנהלים. כל הזכויות שמורות.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

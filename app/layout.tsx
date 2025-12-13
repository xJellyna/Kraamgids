import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kraamgids.nl",
  description:
    "Kraamgids helpt (aanstaande) ouders betrouwbare kraamzorg te vinden en biedt duidelijke informatie voor een rustige kraamtijd.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#FFF6EC] text-gray-900`}
      >
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-[#FFF6EC]/80 backdrop-blur supports-[backdrop-filter]:bg-[#FFF6EC]/60">
          <div className="mx-auto max-w-6xl px-6 py-5">
            <nav className="flex items-center justify-between">
              <Link
                href="/"
                className="text-xl font-semibold text-[#5B3A82]"
              >
                Kraamgids
              </Link>

              <div className="flex items-center gap-6">
                <Link href="/blog" className="text-sm brand-link">
                  Blog
                </Link>
                <Link href="/vinden" className="text-sm brand-link">
                  Kraamzorg vinden
                </Link>
                <Link
                  href="/voor-kraamverzorgers"
                  className="brand-button"
                >
                  Voor kraamverzorgers
                </Link>
              </div>
            </nav>

            {/* subtiele scheidingslijn */}
            <div className="mt-5 h-px w-full bg-[#5B3A82]/15" />
          </div>
        </header>

        {/* CONTENT */}
        <div className="mx-auto max-w-6xl px-6 py-10">
          {children}
        </div>
      </body>
    </html>
  );
}



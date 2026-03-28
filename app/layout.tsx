import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scope Creep Calculator — Saboasis",
  description:
    "Find out how much money you're losing to unbilled scope creep. Free calculator for freelancers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-surface text-ink antialiased">
        <nav className="border-b border-border">
          <div className="mx-auto flex max-w-[960px] items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-bold tracking-tight">
              Saboasis
            </Link>
            <div className="flex gap-6 text-sm font-medium text-ink-light">
              <Link
                href="/calculator"
                className="transition-colors hover:text-ink"
              >
                Calculator
              </Link>
              <Link
                href="/scope-tracker"
                className="transition-colors hover:text-ink"
              >
                Scope Tracker
              </Link>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-[960px] flex-col gap-3 px-6 py-10 text-sm text-ink-light sm:flex-row sm:items-center sm:justify-between">
            <p>
              Saboasis |{" "}
              <a
                href="https://saboasis.com"
                className="underline hover:text-ink"
                target="_blank"
                rel="noopener noreferrer"
              >
                saboasis.com
              </a>
            </p>
            <div className="flex gap-6">
              <Link href="/calculator" className="hover:text-ink">
                Scope Creep Calculator
              </Link>
              <a
                href="https://payhip.com/saboasis"
                className="hover:text-ink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Templates &amp; Tools →
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

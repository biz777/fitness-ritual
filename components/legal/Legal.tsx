import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Shared building blocks for all legal pages (Privacy, Terms,
 * Affiliate Disclosure, Health Disclaimer, Cookie Policy).
 *
 * Drop this file at: components/legal/Legal.tsx
 * Then each page in app/<slug>/page.tsx imports { LegalLayout, Section, SubSection } from it.
 */

interface TocItem {
  id: string;
  label: string;
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  intro?: string;
  toc: TocItem[];
  children: ReactNode;
}

const LEGAL_PAGES = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/disclaimer", label: "Health Disclaimer" },
  { href: "/cookies", label: "Cookie Policy" },
];

export function LegalLayout({
  title,
  lastUpdated,
  intro,
  toc,
  children,
}: LegalLayoutProps) {
  return (
    <main className="bg-[#F8FAF9] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-[#2D6A4F] hover:text-[#E07A3A] transition-colors mb-8"
        >
          ← Back to Fitness Ritual
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-[#2D6A4F] mb-3 leading-tight">
          {title}
        </h1>
        <p className="text-base text-gray-500 mb-10">
          Last updated: {lastUpdated}
        </p>

        {intro && (
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            {intro}
          </p>
        )}

        {toc.length > 0 && (
          <nav
            aria-label="Table of contents"
            className="bg-white border border-[#2D6A4F]/10 rounded-2xl p-6 mb-12"
          >
            <p className="text-sm font-semibold text-[#2D6A4F] uppercase tracking-wide mb-3">
              On this page
            </p>
            <ol className="space-y-2">
              {toc.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-base text-gray-700 hover:text-[#E07A3A] transition-colors"
                  >
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <article>{children}</article>

        <div className="mt-16 pt-8 border-t border-[#2D6A4F]/10">
          <p className="text-sm font-semibold text-[#2D6A4F] uppercase tracking-wide mb-3">
            Other legal pages
          </p>
          <div className="flex flex-wrap gap-3">
            {LEGAL_PAGES.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="text-sm text-gray-600 hover:text-[#E07A3A] border border-gray-200 rounded-full px-4 py-1.5 transition-colors"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 mb-10">
      <h2 className="text-xl md:text-2xl font-bold text-[#2D6A4F] mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-base leading-relaxed text-gray-700">
        {children}
      </div>
    </section>
  );
}

export function SubSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="space-y-3 text-base leading-relaxed text-gray-700">
        {children}
      </div>
    </div>
  );
}

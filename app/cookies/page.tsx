import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, Section, SubSection } from "@/components/legal/Legal";

export const metadata: Metadata = {
  title: "Cookie Policy | Fitness Ritual",
  description:
    "What cookies Fitness Ritual uses, why, and how to manage them.",
};

const toc = [
  { id: "what-are-cookies", label: "What are cookies?" },
  { id: "types-we-use", label: "Types of cookies we use" },
  { id: "third-party", label: "Third-party cookies" },
  { id: "managing-cookies", label: "Managing or disabling cookies" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact us" },
];

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      lastUpdated="June 20, 2026"
      intro="This page explains what cookies are, which ones Fitness Ritual uses, and how you can control them."
      toc={toc}
    >
      <Section id="what-are-cookies" title="1. What are cookies?">
        <p>
          Cookies are small text files that a website stores on your
          computer or mobile device when you visit. They help the site
          remember information about your visit, like your preferences or
          how you found us, which can make your next visit easier and the
          site more useful to you.
        </p>
      </Section>

      <Section id="types-we-use" title="2. Types of cookies we use">
        <p>We keep our cookie use simple. Here's everything we use, grouped by purpose:</p>

        <SubSection title="Essential cookies">
          <p>
            These are required for the site to function properly — for
            example, keeping the site secure and loading pages correctly.
            The site won't work properly without them, and they can't be
            switched off.
          </p>
        </SubSection>

        <SubSection title="Preference cookies">
          <p>
            These remember choices you make, such as your preferred
            language or display settings, so you don't have to reset them
            on every visit.
          </p>
        </SubSection>

        <SubSection title="Analytics cookies">
          <p>
            We use analytics tools (such as Vercel Analytics) to understand,
            in aggregate, how visitors use our site — which articles are
            popular, how people navigate between pages, and so on. This
            data is anonymized or aggregated and is not used to identify you
            personally.
          </p>
        </SubSection>

        <SubSection title="Affiliate tracking cookies">
          <p>
            When you click a link to one of our affiliate partners, a
            cookie may be placed so that partner can credit Fitness Ritual
            if you make a purchase. This cookie is set by the partner, not
            by us directly, and typically expires after a set number of
            days. See our{" "}
            <Link
              href="/affiliate-disclosure"
              className="text-[#2D6A4F] underline hover:text-[#E07A3A]"
            >
              Affiliate Disclosure
            </Link>{" "}
            for more on how this works.
          </p>
        </SubSection>
      </Section>

      <Section id="third-party" title="3. Third-party cookies">
        <p>
          Some cookies on our site are placed by third parties we work
          with — our hosting and analytics provider, and the affiliate
          partners whose products we link to. We don't control these
          third-party cookies directly; they're governed by each provider's
          own privacy and cookie policies.
        </p>
      </Section>

      <Section id="managing-cookies" title="4. Managing or disabling cookies">
        <p>
          Most web browsers let you control cookies through their settings.
          You can usually choose to block all cookies, block third-party
          cookies only, or delete cookies that have already been set. Here's
          how, in the most common browsers:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Chrome:</strong> Settings → Privacy and security →
            Cookies and other site data
          </li>
          <li>
            <strong>Safari:</strong> Preferences → Privacy → Manage Website
            Data
          </li>
          <li>
            <strong>Firefox:</strong> Settings → Privacy &amp; Security →
            Cookies and Site Data
          </li>
          <li>
            <strong>Edge:</strong> Settings → Cookies and site permissions
          </li>
        </ul>
        <p>
          Keep in mind that blocking essential cookies may affect how parts
          of our site work.
        </p>
      </Section>

      <Section id="changes" title="5. Changes to this policy">
        <p>
          We may update this Cookie Policy from time to time as our site or
          the tools we use change. We'll update the "Last updated" date
          above whenever we do.
        </p>
      </Section>

      <Section id="contact" title="6. Contact us">
        <p>Questions about our use of cookies? Reach out:</p>
        <p>
          Email:{" "}
          <a
            href="mailto:contact@fitness-ritual.com"
            className="text-[#2D6A4F] underline hover:text-[#E07A3A]"
          >
            contact@fitness-ritual.com
          </a>
        </p>
      </Section>
    </LegalLayout>
  );
}

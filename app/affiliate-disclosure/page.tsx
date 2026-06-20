import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, Section } from "@/components/legal/Legal";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Fitness Ritual",
  description:
    "How Fitness Ritual earns money through affiliate links, in line with FTC guidelines.",
};

const toc = [
  { id: "the-short-version", label: "The short version" },
  { id: "how-it-works", label: "How affiliate links work" },
  { id: "our-standard", label: "Our recommendation standard" },
  { id: "kalorix", label: "Our own product: Kalorix" },
  { id: "refunds", label: "Refunds & returns" },
  { id: "ftc", label: "FTC compliance" },
  { id: "contact", label: "Contact us" },
];

export default function AffiliateDisclosurePage() {
  return (
    <LegalLayout
      title="Affiliate Disclosure"
      lastUpdated="June 20, 2026"
      intro="We believe in being upfront about how Fitness Ritual makes money. Here's the full picture."
      toc={toc}
    >
      <Section id="the-short-version" title="1. The short version">
        <p>
          Fitness Ritual is free to read, and we keep it that way by
          earning a small commission when you buy certain products through
          links in our articles. This costs you nothing extra — the price
          you pay is the same whether you use our link or not.
        </p>
      </Section>

      <Section id="how-it-works" title="2. How affiliate links work">
        <p>
          When you click certain links on our site and make a purchase, the
          merchant may pay us a referral commission. We work with select
          affiliate networks and directly with health and wellness brands
          we trust.
        </p>
        <p>
          These links typically use a tracking cookie so the merchant knows
          the sale came from Fitness Ritual. You can read more about this in
          our{" "}
          <Link
            href="/cookies"
            className="text-[#2D6A4F] underline hover:text-[#E07A3A]"
          >
            Cookie Policy
          </Link>
          .
        </p>
      </Section>

      <Section id="our-standard" title="3. Our recommendation standard">
        <p>
          We don't recommend a product just because it pays a high
          commission. Before anything appears in an article, we ask whether
          it's genuinely useful for our readers — adults 50 and older
          looking for practical, sustainable ways to stay healthy. If a
          product doesn't meet that bar, we don't feature it, regardless of
          what it pays.
        </p>
        <p>
          Our opinions and recommendations are our own, and they're not
          influenced by the commission structure of any individual product.
        </p>
      </Section>

      <Section id="kalorix" title="4. Our own product: Kalorix">
        <p>
          You'll also see mentions of Kalorix, our calorie and macro
          tracking app, throughout this site. Fitness Ritual and Kalorix are
          both owned by CLICKANDDEALONLINE LLC, so we have a direct
          financial interest in Kalorix — it isn't a third-party affiliate
          relationship, it's our own product. We want to be just as clear
          about that as we are about our affiliate partnerships.
        </p>
      </Section>

      <Section id="refunds" title="5. Refunds & returns">
        <p>
          If you purchase a product through an affiliate link on Fitness
          Ritual, your purchase and any refund or return request is handled
          directly by the seller (or the platform that processed your
          payment) — not by Fitness Ritual. We don't have access to your
          order or payment details and can't issue refunds ourselves.
        </p>
        <p>
          If you'd like a refund, the fastest way is to check the receipt
          or confirmation email from your purchase, which will tell you who
          to contact and what the seller's return window is. If you're not
          sure who to reach, email us at{" "}
          <a
            href="mailto:contact@fitness-ritual.com"
            className="text-[#2D6A4F] underline hover:text-[#E07A3A]"
          >
            contact@fitness-ritual.com
          </a>{" "}
          and we'll try to point you in the right direction.
        </p>
      </Section>

      <Section id="ftc" title="6. FTC compliance">
        <p>
          This disclosure is provided in accordance with the Federal Trade
          Commission's (FTC) guidelines on endorsements and testimonials,
          which require website operators to disclose any material
          connection between themselves and the products or services they
          recommend.
        </p>
      </Section>

      <Section id="contact" title="7. Contact us">
        <p>
          Questions about a specific recommendation or link on our site?
          We're happy to explain:
        </p>
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

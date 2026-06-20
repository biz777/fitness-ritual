import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, Section } from "@/components/legal/Legal";

export const metadata: Metadata = {
  title: "Terms of Service | Fitness Ritual",
  description: "The terms that govern your use of fitness-ritual.com.",
};

const toc = [
  { id: "acceptance", label: "Acceptance of these terms" },
  { id: "who-can-use", label: "Who can use this site" },
  { id: "content", label: "Our content & your use of it" },
  { id: "health-disclaimer", label: "Health & fitness content" },
  { id: "affiliate-links", label: "Affiliate links" },
  { id: "kalorix", label: "Kalorix" },
  { id: "user-conduct", label: "Acceptable use" },
  { id: "third-party-links", label: "Third-party links" },
  { id: "warranties", label: "Disclaimer of warranties" },
  { id: "liability", label: "Limitation of liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "governing-law", label: "Governing law" },
  { id: "changes", label: "Changes to these terms" },
  { id: "contact", label: "Contact us" },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="June 20, 2026"
      intro="These Terms of Service ('Terms') govern your access to and use of fitness-ritual.com. By visiting or using our site, you agree to these Terms."
      toc={toc}
    >
      <Section id="acceptance" title="1. Acceptance of these terms">
        <p>
          Fitness Ritual is owned and operated by CLICKANDDEALONLINE LLC, a
          Missouri (USA) limited liability company ("Fitness Ritual," "we,"
          "us," or "our"). By accessing or using this website, you agree to
          be bound by these Terms. If you don't agree, please don't use the
          site.
        </p>
      </Section>

      <Section id="who-can-use" title="2. Who can use this site">
        <p>
          This site is intended for adults. By using Fitness Ritual, you
          confirm that you are at least 18 years old, or that you're using
          the site under the supervision of a parent or guardian.
        </p>
      </Section>

      <Section id="content" title="3. Our content & your use of it">
        <p>
          All articles, graphics, logos, and other material on this site are
          owned by Fitness Ritual or used with permission, and are protected
          by copyright and other intellectual property laws. You're welcome
          to read, share links to, and reference our content for personal,
          non-commercial use. You may not republish, copy, or distribute our
          content in bulk, or use it for commercial purposes, without our
          written permission.
        </p>
      </Section>

      <Section id="health-disclaimer" title="4. Health & fitness content">
        <p>
          Fitness Ritual publishes general educational content about
          nutrition, exercise, and healthy aging. Nothing on this site is
          medical advice, and nothing here replaces guidance from your
          doctor or a qualified healthcare provider. Please read our full{" "}
          <Link
            href="/disclaimer"
            className="text-[#2D6A4F] underline hover:text-[#E07A3A]"
          >
            Health Disclaimer
          </Link>{" "}
          before acting on anything you read here, especially if you have an
          existing health condition.
        </p>
      </Section>

      <Section id="affiliate-links" title="5. Affiliate links">
        <p>
          Some links on this site are affiliate links, meaning we may earn a
          commission if you make a purchase through them, at no extra cost
          to you. We only recommend products we genuinely believe are
          useful for our readers. Full details are in our{" "}
          <Link
            href="/affiliate-disclosure"
            className="text-[#2D6A4F] underline hover:text-[#E07A3A]"
          >
            Affiliate Disclosure
          </Link>
          .
        </p>
      </Section>

      <Section id="kalorix" title="6. Kalorix">
        <p>
          Fitness Ritual is part of the same company as Kalorix, our calorie
          and macro tracking app. Articles on this site may recommend or
          link to Kalorix. If you sign up for Kalorix, your use of that
          product is governed by Kalorix's own Terms of Service and Privacy
          Policy, not this page.
        </p>
      </Section>

      <Section id="user-conduct" title="7. Acceptable use">
        <p>When using Fitness Ritual, you agree not to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the site for any unlawful purpose</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Interfere with the site's normal operation (for example, through bots, scraping, or attacks)</li>
          <li>Copy or republish our content without permission</li>
          <li>Impersonate any person or entity, or misrepresent your affiliation with us</li>
        </ul>
      </Section>

      <Section id="third-party-links" title="8. Third-party links">
        <p>
          Our site links to third-party websites, including affiliate
          partners and other resources. We don't control these sites and
          aren't responsible for their content, accuracy, or practices. Use
          of any third-party site is at your own discretion and subject to
          that site's own terms and privacy policy.
        </p>
      </Section>

      <Section id="warranties" title="9. Disclaimer of warranties">
        <p>
          Fitness Ritual is provided "as is" and "as available," without
          warranties of any kind, whether express or implied. We don't
          guarantee that the site will be uninterrupted, error-free, or
          that the information published is complete, accurate, or
          up to date at all times.
        </p>
      </Section>

      <Section id="liability" title="10. Limitation of liability">
        <p>
          To the fullest extent permitted by law, CLICKANDDEALONLINE LLC and
          its owners, contributors, and partners are not liable for any
          indirect, incidental, or consequential damages arising from your
          use of this site, including any health, fitness, or financial
          outcomes resulting from actions you take based on content you
          read here.
        </p>
      </Section>

      <Section id="indemnification" title="11. Indemnification">
        <p>
          You agree to indemnify and hold harmless CLICKANDDEALONLINE LLC
          from any claims, damages, or expenses arising out of your misuse
          of the site or violation of these Terms.
        </p>
      </Section>

      <Section id="governing-law" title="12. Governing law">
        <p>
          These Terms are governed by the laws of the State of Missouri,
          USA, without regard to its conflict-of-law principles.
        </p>
      </Section>

      <Section id="changes" title="13. Changes to these terms">
        <p>
          We may update these Terms from time to time. We'll update the
          "Last updated" date above whenever we make changes. Continuing to
          use the site after an update means you accept the revised Terms.
        </p>
      </Section>

      <Section id="contact" title="14. Contact us">
        <p>
          Questions about these Terms? Reach out anytime:
        </p>
        <p>
          CLICKANDDEALONLINE LLC
          <br />
          Missouri, USA
          <br />
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

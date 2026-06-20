import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, Section } from "@/components/legal/Legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Fitness Ritual",
  description:
    "How Fitness Ritual collects, uses, and protects your information.",
};

const toc = [
  { id: "who-we-are", label: "Who we are" },
  { id: "info-we-collect", label: "Information we collect" },
  { id: "how-we-use-it", label: "How we use your information" },
  { id: "cookies", label: "Cookies & tracking" },
  { id: "sharing", label: "How we share information" },
  { id: "kalorix", label: "Our relationship with Kalorix" },
  { id: "data-retention", label: "Data retention & security" },
  { id: "your-rights", label: "Your rights & choices" },
  { id: "children", label: "Children's privacy" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact us" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="June 20, 2026"
      intro="Your privacy matters to us. This policy explains, in plain language, what information Fitness Ritual collects when you visit our site, how we use it, and the choices you have."
      toc={toc}
    >
      <Section id="who-we-are" title="1. Who we are">
        <p>
          Fitness Ritual (fitness-ritual.com) is operated by CLICKANDDEALONLINE
          LLC, a limited liability company registered in Missouri, USA
          ("Fitness Ritual," "we," "us," or "our"). This policy applies to
          everyone who visits or uses our website.
        </p>
        <p>
          If you have any questions about this policy or how we handle your
          information, you can reach us at{" "}
          <a
            href="mailto:contact@fitness-ritual.com"
            className="text-[#2D6A4F] underline hover:text-[#E07A3A]"
          >
            contact@fitness-ritual.com
          </a>
          .
        </p>
      </Section>

      <Section id="info-we-collect" title="2. Information we collect">
        <p>We collect a limited amount of information, mainly to keep the site running smoothly and to understand how it's used:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Information you give us directly</strong> — for example,
            your name and email address if you subscribe to our newsletter or
            contact us by email.
          </li>
          <li>
            <strong>Automatically collected information</strong> — such as
            your browser type, device type, approximate location (city or
            region level, based on IP address), pages visited, and how long
            you spend on them. This is standard analytics data and isn't
            tied to your real-world identity.
          </li>
          <li>
            <strong>Cookies and similar technologies</strong> — small files
            stored on your device. See our{" "}
            <Link
              href="/cookies"
              className="text-[#2D6A4F] underline hover:text-[#E07A3A]"
            >
              Cookie Policy
            </Link>{" "}
            for full details.
          </li>
        </ul>
        <p>
          We do not knowingly collect sensitive health information through
          this website. Any health or fitness details you choose to track
          (for example, if you sign up for Kalorix) are governed by Kalorix's
          own privacy policy, described below.
        </p>
      </Section>

      <Section id="how-we-use-it" title="3. How we use your information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Operate, maintain, and improve the website and its content</li>
          <li>Understand which articles and topics are most useful to readers</li>
          <li>Send you newsletter content, if you've opted in</li>
          <li>Respond to questions or messages you send us</li>
          <li>Detect and prevent technical issues, abuse, or fraud</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>
          We do not sell your personal information, and we never will.
        </p>
      </Section>

      <Section id="cookies" title="4. Cookies & tracking">
        <p>
          We use cookies for essential site functionality, to remember your
          preferences (like language or display settings), to understand
          site traffic, and — when you click an affiliate link — to allow
          our affiliate partners to credit us for a referral. Full details,
          including how to manage or disable cookies, are in our{" "}
          <Link
            href="/cookies"
            className="text-[#2D6A4F] underline hover:text-[#E07A3A]"
          >
            Cookie Policy
          </Link>
          .
        </p>
      </Section>

      <Section id="sharing" title="5. How we share information">
        <p>We only share information with third parties in these situations:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Service providers</strong> who help us run the site —
            such as our hosting provider (Vercel) and, if you subscribe, our
            email delivery provider.
          </li>
          <li>
            <strong>Affiliate networks and partners</strong> when you click
            on an affiliate link, so that a referral can be tracked. See
            our{" "}
            <Link
              href="/affiliate-disclosure"
              className="text-[#2D6A4F] underline hover:text-[#E07A3A]"
            >
              Affiliate Disclosure
            </Link>{" "}
            for more on this.
          </li>
          <li>
            <strong>Legal authorities</strong>, if required by law or to
            protect our rights, users, or the public.
          </li>
        </ul>
        <p>We do not share your information with third parties for their own marketing purposes.</p>
      </Section>

      <Section id="kalorix" title="6. Our relationship with Kalorix">
        <p>
          Fitness Ritual is part of the same company as Kalorix, our calorie
          and macro tracking app. You may see Kalorix mentioned or linked in
          our articles. If you choose to create a Kalorix account, the
          information you provide there (including any health, nutrition, or
          weight data) is collected and processed under{" "}
          <strong>Kalorix's own privacy policy</strong>, not this one.
          Visiting fitness-ritual.com does not automatically create a
          Kalorix account or share your browsing data with Kalorix.
        </p>
      </Section>

      <Section id="data-retention" title="7. Data retention & security">
        <p>
          We keep personal information only as long as needed for the
          purposes described in this policy, or as required by law. We use
          reasonable technical and organizational measures to protect your
          information, but no method of transmission or storage is 100%
          secure, and we can't guarantee absolute security.
        </p>
      </Section>

      <Section id="your-rights" title="8. Your rights & choices">
        <p>Depending on where you live, you may have the right to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ask what personal information we hold about you</li>
          <li>Request a copy, correction, or deletion of that information</li>
          <li>Opt out of marketing emails at any time (every email includes an unsubscribe link)</li>
          <li>Object to or limit certain uses of your information</li>
        </ul>
        <p>
          If you're a California resident, these rights are protected under
          the California Consumer Privacy Act (CCPA). To exercise any of
          these rights, email us at{" "}
          <a
            href="mailto:contact@fitness-ritual.com"
            className="text-[#2D6A4F] underline hover:text-[#E07A3A]"
          >
            contact@fitness-ritual.com
          </a>{" "}
          and we'll respond within a reasonable timeframe.
        </p>
        <p>
          You can also control cookies directly through your browser
          settings at any time — see our{" "}
          <Link
            href="/cookies"
            className="text-[#2D6A4F] underline hover:text-[#E07A3A]"
          >
            Cookie Policy
          </Link>{" "}
          for instructions.
        </p>
      </Section>

      <Section id="children" title="9. Children's privacy">
        <p>
          Fitness Ritual is intended for adults and is not directed at
          children under 18. We do not knowingly collect personal
          information from children. If you believe a child has provided us
          with personal information, please contact us and we'll remove it.
        </p>
      </Section>

      <Section id="changes" title="10. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our practices or for legal reasons. We'll update the
          "Last updated" date at the top of this page when we do. Continued
          use of the site after changes means you accept the updated policy.
        </p>
      </Section>

      <Section id="contact" title="11. Contact us">
        <p>
          If you have questions about this Privacy Policy or how we handle
          your information, reach out anytime:
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

import type { Metadata } from "next";
import { LegalLayout, Section } from "@/components/legal/Legal";

export const metadata: Metadata = {
  title: "Health Disclaimer | Fitness Ritual",
  description:
    "Important information about how to use the health and fitness content on Fitness Ritual.",
};

const toc = [
  { id: "not-medical-advice", label: "Not medical advice" },
  { id: "talk-to-your-doctor", label: "Talk to your doctor first" },
  { id: "individual-results", label: "Individual results vary" },
  { id: "no-relationship", label: "No doctor-patient relationship" },
  { id: "emergencies", label: "In a medical emergency" },
  { id: "third-party-content", label: "Third-party content & products" },
  { id: "liability", label: "Limitation of liability" },
  { id: "contact", label: "Contact us" },
];

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Health Disclaimer"
      lastUpdated="June 20, 2026"
      intro="Fitness Ritual publishes general information about nutrition, exercise, and healthy living for adults 50 and older. Please read this disclaimer carefully before using any information on this site."
      toc={toc}
    >
      <Section id="not-medical-advice" title="1. Not medical advice">
        <p>
          The content on Fitness Ritual — including articles, recipes,
          exercise suggestions, and any tools or calculators we link to — is
          for general informational and educational purposes only. It is{" "}
          <strong>not</strong> intended to be, and should not be taken as,
          medical advice, diagnosis, or treatment. Our content is not
          written by licensed medical professionals unless explicitly
          stated.
        </p>
      </Section>

      <Section id="talk-to-your-doctor" title="2. Talk to your doctor first">
        <p>
          Always talk to your doctor or another qualified healthcare
          provider before starting any new exercise program, making
          significant changes to your diet, or trying a new supplement —
          especially if you are over 50, are managing a chronic condition
          (such as heart disease, diabetes, or high blood pressure), are
          taking medication, are recovering from an injury or surgery, or
          are pregnant or nursing.
        </p>
        <p>
          Never disregard professional medical advice, or delay seeking it,
          because of something you read on this site.
        </p>
      </Section>

      <Section id="individual-results" title="3. Individual results vary">
        <p>
          Any results, outcomes, or success stories mentioned on this site
          — including anything related to weight, strength, energy levels,
          or other health markers — are individual experiences and are not
          guaranteed. What works for one person may not work, or may not be
          safe, for another. Age, health history, genetics, consistency, and
          many other factors all play a role.
        </p>
      </Section>

      <Section id="no-relationship" title="4. No doctor-patient relationship">
        <p>
          Using this website, subscribing to our newsletter, or contacting
          us by email does not create a doctor-patient or any other
          healthcare provider relationship between you and Fitness Ritual or
          CLICKANDDEALONLINE LLC.
        </p>
      </Section>

      <Section id="emergencies" title="5. In a medical emergency">
        <p>
          If you are experiencing a medical emergency, call 911 (or your
          local emergency number) immediately, or go to your nearest
          emergency room. Do not rely on this website, or any website, for
          urgent or emergency medical guidance.
        </p>
      </Section>

      <Section id="third-party-content" title="6. Third-party content & products">
        <p>
          We sometimes link to or mention third-party products, supplements,
          equipment, or services, including through affiliate links (see
          our Affiliate Disclosure). We are not responsible for how those
          products are manufactured, labeled, or used. Always read product
          labels and instructions carefully, and check with your doctor or
          pharmacist before adding any new supplement to your routine,
          particularly if you take prescription medication.
        </p>
      </Section>

      <Section id="liability" title="7. Limitation of liability">
        <p>
          To the fullest extent permitted by law, CLICKANDDEALONLINE LLC and
          Fitness Ritual are not liable for any injury, loss, or damage
          arising from the use of, or reliance on, information published on
          this site. You are responsible for consulting a qualified
          healthcare professional and using good judgment before acting on
          anything you read here.
        </p>
      </Section>

      <Section id="contact" title="8. Contact us">
        <p>Questions about this disclaimer? Get in touch:</p>
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

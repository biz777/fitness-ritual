import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — fitness-ritual.com Editorial Team",
  description:
    "Meet the fitness-ritual.com editorial team — dedicated to providing honest, evidence-based health and wellness guidance for adults over 50.",
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "fitness-ritual.com",
    url: "https://fitness-ritual.com",
    logo: "https://fitness-ritual.com/logo.jpg",
    description:
      "Evidence-based health and wellness content for adults over 50 — exercise, nutrition, and healthy recipes.",
    foundingDate: "2025",
    knowsAbout: [
      "Fitness for Adults Over 50",
      "Anti-Inflammatory Nutrition",
      "Low-Impact Exercise",
      "Healthy Aging",
      "Weight Management",
      "Healthy Recipes",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Editorial",
      email: "contact@fitness-ritual.com",
    },
  };

  return (
    <div style={{ background: "#F8FAF9", minHeight: "100vh" }}>
      <Navbar />

      {/* JSON-LD Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER */}
      <section style={{
        background: "linear-gradient(135deg, #081C15 0%, #1B4332 50%, #2D6A4F 100%)",
        padding: "64px 32px",
        textAlign: "center",
      }}>
        <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "14px", fontFamily: "Inter, sans-serif" }}>
          About
        </div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>
          Our Editorial Team
        </h1>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "18px", color: "rgba(255,255,255,0.80)", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto" }}>
          Dedicated to giving adults over 50 honest, practical, evidence-based guidance — no gimmicks, no shortcuts.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "64px 32px" }}>

        {/* Logo + Intro */}
        <div style={{ display: "flex", gap: "36px", alignItems: "center", marginBottom: "48px", flexWrap: "wrap" }}>
          <Image
            src="/logo.jpg"
            alt="fitness-ritual.com"
            width={140}
            height={140}
            style={{ borderRadius: "16px", objectFit: "cover", flexShrink: 0, border: "3px solid #D1E8DC" }}
          />
          <div style={{ flex: 1, minWidth: "260px" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "26px", fontWeight: 700, color: "#1B4332", marginBottom: "6px" }}>
              fitness-ritual.com
            </h2>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#E07A3A", fontWeight: 600, marginBottom: "16px" }}>
              Health & Wellness Content for Adults 50+
            </div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "#374151", lineHeight: 1.8, margin: 0 }}>
              fitness-ritual.com was created with a single purpose: to be the most trustworthy,
              practical health resource for adults navigating life after 50. We believe this stage
              of life deserves real answers — not generic advice written for 30-year-olds.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: 700, color: "#1B4332", marginBottom: "16px" }}>
            Our Mission
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "#374151", lineHeight: 1.8, marginBottom: "16px" }}>
            Too much health content online is vague, extreme, or simply wrong for bodies over 50.
            Standard advice — high-intensity workouts, crash diets, endless supplements — often
            backfires for adults whose needs have evolved.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "#374151", lineHeight: 1.8 }}>
            Our mission is to bridge that gap: combining the latest research in exercise science,
            nutrition, and healthy aging with content that is genuinely readable, actionable, and
            respectful of real lives with real schedules.
          </p>
        </section>

        {/* What We Believe */}
        <section style={{ marginBottom: "40px", padding: "32px", background: "#F0F7F4", borderRadius: "12px", border: "1px solid #D1E8DC" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: 700, color: "#1B4332", marginBottom: "20px" }}>
            What We Believe
          </h2>
          {[
            { title: "It's never too late.", text: "Research consistently shows that adults over 50 can build muscle, improve heart health, and dramatically increase quality of life. Age is context, not a barrier." },
            { title: "Sustainability over intensity.", text: "Programs designed for 25-year-olds often backfire after 50. We focus on habits you can maintain for life." },
            { title: "Food is medicine.", text: "Anti-inflammatory eating, adequate protein, and hydration are among the most powerful tools available — and accessible to everyone." },
            { title: "Small wins compound.", text: "A 20-minute walk, an extra serving of vegetables, quality sleep — these small consistent choices transform lives over time." },
          ].map((item) => (
            <div key={item.title} style={{ marginBottom: "20px", display: "flex", gap: "14px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#E07A3A", flexShrink: 0, marginTop: "9px" }} />
              <div>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", fontWeight: 700, color: "#1B4332" }}>{item.title} </span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#4A5568", lineHeight: 1.7 }}>{item.text}</span>
              </div>
            </div>
          ))}
        </section>

        {/* Topics We Cover */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: 700, color: "#1B4332", marginBottom: "20px" }}>
            Topics We Cover
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
            {[
              "Low-impact fitness for 50+",
              "Strength training & mobility",
              "Anti-inflammatory nutrition",
              "Protein & macro optimization",
              "Weight management after 50",
              "Sleep & recovery strategies",
              "Healthy meal planning",
              "Habit building & lifestyle change",
            ].map((item) => (
              <div key={item} style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "12px 16px", background: "#fff", borderRadius: "8px",
                border: "1px solid #E5EDE9",
              }}>
                <span style={{ color: "#2D6A4F", fontSize: "16px", fontWeight: 700 }}>✓</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#374151" }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Integrity */}
        <section style={{ padding: "24px 28px", background: "#FFF8F0", borderRadius: "10px", border: "1px solid #F5DFC5" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "18px", fontWeight: 700, color: "#92400E", marginBottom: "10px" }}>
            Our Editorial Integrity
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#78350F", lineHeight: 1.7, margin: 0 }}>
            Every article on fitness-ritual.com is written with one goal: to give you honest,
            evidence-based information that actually helps. When we recommend a product, it's
            because we genuinely believe it offers value for our audience — not because of
            commission rates. We only partner with brands that meet our standards for quality
            and transparency.
          </p>
        </section>

      </div>

      <Footer />
    </div>
  );
}

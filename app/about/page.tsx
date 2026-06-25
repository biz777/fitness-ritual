import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About David Lewis — Health & Wellness Coach | fitness-ritual.com",
  description:
    "Meet David Lewis, certified Health & Wellness Coach with 15+ years helping adults over 50 build sustainable fitness and nutrition habits.",
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David Lewis",
    jobTitle: "Health & Wellness Coach",
    description:
      "Certified Health & Wellness Coach with 15+ years of experience helping adults over 50 build sustainable fitness and nutrition habits.",
    image: "https://fitness-ritual.com/images/david-lewis.jpg",
    url: "https://fitness-ritual.com/about",
    worksFor: {
      "@type": "Organization",
      name: "fitness-ritual.com",
      url: "https://fitness-ritual.com",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Denver",
      addressRegion: "CO",
      addressCountry: "US",
    },
    knowsAbout: [
      "Health & Wellness Coaching",
      "Fitness for Adults Over 50",
      "Anti-Inflammatory Nutrition",
      "Low-Impact Exercise",
      "Healthy Aging",
      "Weight Management",
    ],
  };

  return (
    <div style={{ background: "#F8FAF9", minHeight: "100vh" }}>
      <Navbar />

      {/* JSON-LD Person Schema */}
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
          Meet David Lewis
        </h1>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "18px", color: "rgba(255,255,255,0.80)", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto" }}>
          Health & Wellness Coach helping adults over 50 live stronger, healthier, and more energized lives.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "64px 32px" }}>

        {/* Photo + Intro */}
        <div style={{ display: "flex", gap: "36px", alignItems: "flex-start", marginBottom: "48px", flexWrap: "wrap" }}>
          <Image
            src="/images/david-lewis.jpg"
            alt="David Lewis — Health & Wellness Coach"
            width={180}
            height={180}
            style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: "4px solid #D1E8DC" }}
          />
          <div style={{ flex: 1, minWidth: "260px" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "28px", fontWeight: 700, color: "#1B4332", marginBottom: "6px" }}>
              David Lewis
            </h2>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#E07A3A", fontWeight: 600, marginBottom: "20px" }}>
              Certified Health & Wellness Coach · Denver, CO
            </div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "#374151", lineHeight: 1.8, margin: 0 }}>
              I spent 20 years as a physical education teacher before discovering my true calling: helping
              people in their 50s and 60s rediscover what their bodies are capable of. After my own health
              wake-up call at 52, I retrained as a certified wellness coach and never looked back.
            </p>
          </div>
        </div>

        {/* My Story */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: 700, color: "#1B4332", marginBottom: "16px" }}>
            My Story
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "#374151", lineHeight: 1.8, marginBottom: "16px" }}>
            At 52, I found myself exhausted, carrying extra weight, and struggling with joint pain I thought
            was just "part of getting older." My doctor handed me a prescription and sent me on my way — but
            I knew there had to be a better path.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "#374151", lineHeight: 1.8, marginBottom: "16px" }}>
            I spent two years studying nutrition, exercise physiology, and behavioral coaching, and what I
            discovered changed everything. The standard advice — hit the gym hard, cut calories drastically —
            is often wrong for bodies over 50. Our needs are different, and our approach should be too.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "#374151", lineHeight: 1.8 }}>
            Today, at 57, I feel stronger and more energetic than I did at 40. And through fitness-ritual.com,
            I share everything I've learned — no gimmicks, no extreme diets, just practical strategies that
            work for real people with real lives.
          </p>
        </section>

        {/* What I Believe */}
        <section style={{ marginBottom: "40px", padding: "32px", background: "#F0F7F4", borderRadius: "12px", border: "1px solid #D1E8DC" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: 700, color: "#1B4332", marginBottom: "20px" }}>
            What I Believe
          </h2>
          {[
            { title: "It's never too late.", text: "The research is clear: adults over 50 can build muscle, improve cardiovascular health, and dramatically increase quality of life. Age is not a barrier — it's just context." },
            { title: "Sustainability over intensity.", text: "Extreme programs that work for 30-year-olds often backfire after 50. I focus on habits you can maintain for life, not 30-day challenges." },
            { title: "Food is medicine.", text: "Anti-inflammatory eating, adequate protein, and proper hydration are among the most powerful tools we have — and they're available to everyone." },
            { title: "Small wins compound.", text: "A 20-minute walk, an extra serving of vegetables, eight hours of sleep — these small choices, repeated consistently, transform lives." },
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

        {/* Expertise */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: 700, color: "#1B4332", marginBottom: "20px" }}>
            Areas of Expertise
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
            {[
              "Low-impact fitness for 50+",
              "Strength training & mobility",
              "Anti-inflammatory nutrition",
              "Protein & macro optimization",
              "Weight management after 50",
              "Sleep & recovery strategies",
              "Habit building & behavior change",
              "Healthy meal planning",
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

        {/* Editorial Note */}
        <section style={{ padding: "24px 28px", background: "#FFF8F0", borderRadius: "10px", border: "1px solid #F5DFC5" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "18px", fontWeight: 700, color: "#92400E", marginBottom: "10px" }}>
            Editorial Integrity
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#78350F", lineHeight: 1.7, margin: 0 }}>
            Every article on fitness-ritual.com is written with one goal: to give you honest, evidence-based
            information that actually helps. When we recommend a product, it's because we genuinely believe
            it's useful for our audience — not because of commission rates. We only partner with brands that
            meet our standards for quality and transparency.
          </p>
        </section>

      </div>

      <Footer />
    </div>
  );
}

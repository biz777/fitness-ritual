import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import { articles, categoryColors } from "@/lib/articles";

export default function HomePage() {
  const featured = articles.slice(0, 3);

  return (
    <div style={{ background: "#F8F8FF", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #4B3FC0 0%, #7B5EA7 100%)",
        padding: "80px 32px 88px", textAlign: "center",
      }}>
        <div style={{
          display: "inline-block", background: "rgba(255,255,255,0.15)",
          color: "#fff", fontFamily: "Arial, sans-serif", fontSize: "14px",
          padding: "6px 18px", borderRadius: "20px", marginBottom: "24px",
          border: "0.5px solid rgba(255,255,255,0.3)",
        }}>
          For adults 50+ who take their health seriously
        </div>
        <h1 style={{
          fontFamily: "Georgia, serif", fontSize: "44px", fontWeight: 700,
          color: "#fff", lineHeight: 1.25, marginBottom: "20px",
          maxWidth: "640px", margin: "0 auto 20px",
        }}>
          Real fitness advice for real people over 50
        </h1>
        <p style={{
          fontFamily: "Arial, sans-serif", fontSize: "19px",
          color: "rgba(255,255,255,0.88)", lineHeight: 1.75,
          maxWidth: "520px", margin: "0 auto 36px",
        }}>
          No fads. No extreme diets. Just practical, science-backed guidance
          for staying strong, healthy, and energized as you age.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/blog" style={{
            background: "#fff", color: "#5B4FC8", border: "none",
            padding: "15px 32px", borderRadius: "8px", fontSize: "17px",
            fontFamily: "Arial, sans-serif", fontWeight: 600, textDecoration: "none",
          }}>
            Start reading
          </Link>
          <Link href="/blog" style={{
            background: "transparent", color: "#fff",
            border: "1.5px solid rgba(255,255,255,0.6)",
            padding: "15px 32px", borderRadius: "8px", fontSize: "17px",
            fontFamily: "Arial, sans-serif", textDecoration: "none",
          }}>
            Browse articles
          </Link>
        </div>
      </section>

      {/* STATS BAND */}
      <div style={{
        display: "flex", justifyContent: "center",
        background: "#fff", borderBottom: "0.5px solid rgba(91,79,200,0.15)",
        padding: "24px 32px", fontFamily: "Arial, sans-serif",
      }}>
        {[
          { num: "17", label: "Expert articles" },
          { num: "3", label: "Topic categories" },
          { num: "50+", label: "Target audience" },
        ].map((stat, i) => (
          <div key={i} style={{
            textAlign: "center", padding: "0 36px",
            borderLeft: i > 0 ? "0.5px solid rgba(91,79,200,0.15)" : "none",
          }}>
            <div style={{ fontSize: "26px", fontWeight: 700, color: "#5B4FC8" }}>{stat.num}</div>
            <div style={{ fontSize: "14px", color: "#6B6B8A", marginTop: "3px" }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* FEATURED ARTICLES */}
      <section style={{ padding: "56px 32px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#5B4FC8", marginBottom: "10px" }}>
          Latest articles
        </div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: 700, color: "#1A1A2E", marginBottom: "10px" }}>
          What we cover
        </h2>
        <p style={{ fontSize: "18px", color: "#6B6B8A", lineHeight: 1.75, marginBottom: "36px" }}>
          Three categories built around what matters most after 50.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {featured.map((article) => (
            <ArticleCard
              key={article.slug}
              slug={article.slug}
              category={article.categoryLabel}
              title={article.title}
              description={article.description}
              categoryColor={categoryColors[article.category]}
            />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "56px 32px", background: "#F0EFFC" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#5B4FC8", marginBottom: "10px" }}>
            What readers say
          </div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: 700, color: "#1A1A2E", marginBottom: "10px" }}>
            Stories from our community
          </h2>
          <p style={{ fontSize: "18px", color: "#6B6B8A", lineHeight: 1.75, marginBottom: "36px" }}>
            Real people, real results — no before/after gimmicks.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
            {[
              { initials: "DM", name: "Donna M.", age: "Age 58, Texas", text: "Finally a fitness site that talks to me like an adult. No extreme workouts, no impossible diets — just honest, useful advice." },
              { initials: "RK", name: "Robert K.", age: "Age 63, Florida", text: "The recipes are simple and actually taste good. I've lost 12 pounds in 3 months just by following the nutrition articles." },
            ].map((t, i) => (
              <div key={i} style={{
                borderRadius: "12px", padding: "22px", border: "0.5px solid rgba(91,79,200,0.15)",
                background: "#fff", fontFamily: "Arial, sans-serif",
              }}>
                <div style={{ color: "#F59E0B", fontSize: "16px", marginBottom: "12px" }}>★★★★★</div>
                <p style={{ fontSize: "15px", lineHeight: 1.75, fontStyle: "italic", color: "#6B6B8A", marginBottom: "16px" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #4B3FC0, #7B5EA7)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "14px", color: "#fff", fontWeight: 600,
                  }}>{t.initials}</div>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 600, color: "#1A1A2E" }}>{t.name}</div>
                    <div style={{ fontSize: "13px", color: "#6B6B8A" }}>{t.age}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KALORIX BAND */}
      <section style={{
        background: "linear-gradient(135deg, #4B3FC0 0%, #7B5EA7 100%)",
        padding: "48px 32px", display: "flex", alignItems: "center",
        justifyContent: "space-between", gap: "24px", flexWrap: "wrap",
      }}>
        <div>
          <h3 style={{ fontFamily: "Georgia, serif", fontSize: "26px", color: "#fff", marginBottom: "10px" }}>
            Track your calories with Kalorix
          </h3>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.82)", lineHeight: 1.7, maxWidth: "420px" }}>
            The calorie and macro tracker built for adults 40+. Simple, clear, and available in English, French, and Spanish.
          </p>
        </div>
        <Link
          href="https://kalorix-nine.vercel.app"
          target="_blank"
          style={{
            background: "#F59E0B", color: "#fff", border: "none",
            padding: "14px 28px", borderRadius: "8px", fontSize: "16px",
            fontFamily: "Arial, sans-serif", fontWeight: 600, textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Try Kalorix free →
        </Link>
      </section>

      {/* CATEGORIES */}
      <section style={{ padding: "56px 32px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#5B4FC8", marginBottom: "10px" }}>
          Browse by topic
        </div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: 700, color: "#1A1A2E", marginBottom: "10px" }}>
          Find what you need
        </h2>
        <p style={{ fontSize: "18px", color: "#6B6B8A", lineHeight: 1.75, marginBottom: "36px" }}>
          All our content, organized by category.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {[
            { href: "/nutrition", color: "#5B4FC8", label: "Nutrition & Diet", count: "7 articles", desc: "Protein, fiber, hydration, supplements — everything about eating well after 50." },
            { href: "/exercise", color: "#22C55E", label: "Exercise & Fitness", count: "6 articles", desc: "Low-impact routines, strength training, balance, and flexibility for the 50+ body." },
            { href: "/recipes", color: "#F59E0B", label: "Healthy Recipes", count: "4 articles", desc: "Quick, nutritious meals with full macro breakdowns — designed for real kitchens." },
          ].map((cat) => (
            <div key={cat.href} style={{
              borderRadius: "12px", padding: "24px 20px",
              border: "0.5px solid rgba(91,79,200,0.15)",
              borderTop: `3px solid ${cat.color}`,
              background: "#fff", fontFamily: "Arial, sans-serif",
            }}>
              <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: cat.color, marginBottom: "8px" }}>
                {cat.label}
              </div>
              <div style={{ fontSize: "17px", fontWeight: 600, color: "#1A1A2E", marginBottom: "8px" }}>{cat.count}</div>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#6B6B8A", marginBottom: "14px" }}>{cat.desc}</p>
              <Link href={cat.href} style={{ fontSize: "15px", color: cat.color, fontWeight: 500, textDecoration: "none" }}>
                Browse →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

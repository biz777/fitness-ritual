import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByCategory, categoryColors } from "@/lib/articles";

// Conteneur global : 1100px → 1200px (réduit les marges vides sur grands écrans)
const CONTAINER_MAX_WIDTH = "1200px";

export default function NutritionPage() {
  const articles = getArticlesByCategory("nutrition");
  return (
    <div style={{ background: "#F8FAF9", minHeight: "100vh" }}>
      <Navbar />
      {/* HEADER — Forest Vitality */}
      <section style={{
        background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 60%, #3D8B6A 100%)",
        padding: "64px 32px",
        textAlign: "center",
      }}>
        <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "14px", fontFamily: "Inter, sans-serif" }}>
          Category
        </div>
        <h1 style={{ fontFamily: "Inter, ui-sans-serif, sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 600, color: "#fff", marginBottom: "16px", lineHeight: 1.2 }}>
          Nutrition & Diet
        </h1>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.80)", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto" }}>
          Protein, fiber, hydration, supplements — everything about eating well after 50.
        </p>
      </section>
      {/* H2 SEO */}
      <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "40px 32px 0" }}>
        <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "26px", fontWeight: 700, color: "#1B4332", marginBottom: "8px" }}>
          Nutrition Tips & Diet Advice for the 50+ Body
        </h2>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "#4A5568", lineHeight: 1.6 }}>
          Evidence-based guidance on protein intake, hydration, fiber, and supplements to support healthy aging.
        </p>
      </div>
      {/* ARTICLES GRID */}
      <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "24px 32px 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {articles.map((a) => (
            <ArticleCard key={a.slug} slug={a.slug} category={a.categoryLabel} title={a.title} description={a.description} categoryColor={categoryColors[a.category]} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

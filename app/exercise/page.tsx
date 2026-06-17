import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByCategory, categoryColors } from "@/lib/articles";

export default function ExercisePage() {
  const articles = getArticlesByCategory("exercise");
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
          Exercise & Fitness
        </h1>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "18px", color: "rgba(255,255,255,0.80)", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto" }}>
          Low-impact routines, strength training, balance, and flexibility for the 50+ body.
        </p>
      </section>

      {/* ARTICLES GRID */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 32px" }}>
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

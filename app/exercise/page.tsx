import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByCategory, categoryColors } from "@/lib/articles";

export default function ExercisePage() {
  const articles = getArticlesByCategory("exercise");
  return (
    <div style={{ background: "#F8F8F4", minHeight: "100vh" }}>
      <Navbar />

      {/* HEADER — fond violet foncé, pas d'image */}
      <section style={{
        background: "linear-gradient(135deg, #1a1040 0%, #2d1b69 50%, #1e1245 100%)",
        padding: "64px 32px", textAlign: "center",
      }}>
        <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "14px", fontFamily: "Arial, sans-serif" }}>
          Category
        </div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "42px", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>
          Exercise & Fitness
        </h1>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto" }}>
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

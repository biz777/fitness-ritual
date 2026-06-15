import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByCategory, categoryColors } from "@/lib/articles";

export default function ExercisePage() {
  const articles = getArticlesByCategory("exercise");
  return (
    <div style={{ background: "#F8F8F4", minHeight: "100vh" }}>
      <Navbar />
      {/* HERO */}
      <section style={{ position: "relative", height: "320px", overflow: "hidden" }}>
        <img
          src="/hero-nordic.jpg"
          alt="Active couple nordic walking over 50"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(22,101,52,0.52)" }} />
        <div style={{
          position: "relative", zIndex: 2, height: "100%",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "0 32px",
        }}>
          <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: "12px", fontFamily: "Arial, sans-serif" }}>
            Category
          </div>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "42px", fontWeight: 700, color: "#fff", marginBottom: "14px", textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
            Exercise & Fitness
          </h1>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: "18px", color: "rgba(255,255,255,0.88)", lineHeight: 1.7, maxWidth: "520px" }}>
            Low-impact routines, strength training, balance, and flexibility for the 50+ body.
          </p>
        </div>
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

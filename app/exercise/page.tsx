import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByCategory, categoryColors } from "@/lib/articles";

export default function ExercisePage() {
  const articles = getArticlesByCategory("exercise");
  return (
    <div style={{ background: "#F8F8FF", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#22C55E", marginBottom: "10px" }}>Category</div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "36px", fontWeight: 700, color: "#1A1A2E", marginBottom: "10px" }}>Exercise & Fitness</h1>
        <p style={{ fontSize: "18px", color: "#6B6B8A", lineHeight: 1.75, marginBottom: "48px" }}>Low-impact routines, strength training, balance, and flexibility for the 50+ body.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {articles.map((a) => <ArticleCard key={a.slug} slug={a.slug} category={a.categoryLabel} title={a.title} description={a.description} categoryColor={categoryColors[a.category]} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

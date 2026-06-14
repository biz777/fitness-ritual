import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByCategory, categoryColors } from "@/lib/articles";

export default function NutritionPage() {
  const articles = getArticlesByCategory("nutrition");
  return (
    <div style={{ background: "#F8F8FF", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#5B4FC8", marginBottom: "10px" }}>Category</div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "36px", fontWeight: 700, color: "#1A1A2E", marginBottom: "10px" }}>Nutrition & Diet</h1>
        <p style={{ fontSize: "18px", color: "#6B6B8A", lineHeight: 1.75, marginBottom: "48px" }}>Protein, fiber, hydration, supplements — everything about eating well after 50.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {articles.map((a) => <ArticleCard key={a.slug} slug={a.slug} category={a.categoryLabel} title={a.title} description={a.description} categoryColor={categoryColors[a.category]} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

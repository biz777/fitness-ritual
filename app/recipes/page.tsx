import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByCategory, categoryColors } from "@/lib/articles";

export default function RecipesPage() {
  const articles = getArticlesByCategory("recipes");
  return (
    <div style={{ background: "#F8F8FF", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#F59E0B", marginBottom: "10px" }}>Category</div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "36px", fontWeight: 700, color: "#1A1A2E", marginBottom: "10px" }}>Healthy Recipes</h1>
        <p style={{ fontSize: "18px", color: "#1A1A2E", lineHeight: 1.75, marginBottom: "48px" }}>Quick, nutritious meals with full macro breakdowns — designed for real kitchens.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {articles.map((a) => <ArticleCard key={a.slug} slug={a.slug} category={a.categoryLabel} title={a.title} description={a.description} categoryColor={categoryColors[a.category]} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

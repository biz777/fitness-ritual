import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { articles, categoryColors } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — fitness-ritual.com",
  description: "All articles on fitness, nutrition, and healthy recipes for adults over 50.",
};

export default function BlogPage() {
  return (
    <div style={{ background: "#F8F8FF", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#5B4FC8", marginBottom: "10px" }}>
          All articles
        </div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "36px", fontWeight: 700, color: "#1A1A2E", marginBottom: "10px" }}>
          The fitness-ritual.com blog
        </h1>
        <p style={{ fontSize: "18px", color: "#6B6B8A", lineHeight: 1.75, marginBottom: "48px" }}>
          Practical advice for staying strong, healthy, and energized after 50.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {articles.map((article) => (
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
      </div>
      <Footer />
    </div>
  );
}

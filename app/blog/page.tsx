import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { articles, categoryColors } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — fitness-ritual.com",
  description: "All articles on fitness, nutrition, and healthy recipes for adults over 50.",
};

// Conteneur global : 1100px → 1200px (réduit les marges vides sur grands écrans)
const CONTAINER_MAX_WIDTH = "1200px";

export default function BlogPage() {
  return (
    <div style={{ background: "#F8F8F4", minHeight: "100vh" }}>
      <Navbar />
      {/* HEADER — fond vert forêt foncé, thème Forest Vitality */}
      <section style={{
        background: "linear-gradient(135deg, #081C15 0%, #1B4332 50%, #2D6A4F 100%)",
        padding: "64px 32px", textAlign: "center",
      }}>
        <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "14px", fontFamily: "Arial, sans-serif" }}>
          All articles
        </div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "42px", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>
          The fitness-ritual.com blog
        </h1>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto" }}>
          Practical advice for staying strong, healthy, and energized after&nbsp;50.
        </p>
      </section>
      {/* H2 SEO */}
      <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "40px 32px 0" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "26px", fontWeight: 700, color: "#1B4332", marginBottom: "8px" }}>
          Health & Wellness Articles for Adults Over 50
        </h2>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "16px", color: "#4A5568", lineHeight: 1.6 }}>
          Browse all our guides on exercise, nutrition, and healthy recipes — written specifically for the 50+ lifestyle.
        </p>
      </div>
      {/* ARTICLES GRID */}
      <div style={{ maxWidth: CONTAINER_MAX_WIDTH, margin: "0 auto", padding: "24px 32px 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
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

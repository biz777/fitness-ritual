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
    <div style={{ background: "#F8F8F4", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section style={{ position: "relative", height: "320px", overflow: "hidden" }}>
        <img
          src="/2-people-running-together.jpg"
          alt="Active adults over 50 running together"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.48)" }} />
        <div style={{
          position: "relative", zIndex: 2, height: "100%",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "0 32px",
        }}>
          <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: "12px", fontFamily: "Arial, sans-serif" }}>
            All articles
          </div>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "42px", fontWeight: 700, color: "#fff", marginBottom: "14px", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>
            The fitness-ritual.com blog
          </h1>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: "18px", color: "rgba(255,255,255,0.88)", lineHeight: 1.7, maxWidth: "520px" }}>
            Practical advice for staying strong, healthy, and energized after 50.
          </p>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 32px" }}>
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

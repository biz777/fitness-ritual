import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getArticleBySlug, articles, categoryColors } from "@/lib/articles";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — fitness-ritual.com`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const color = categoryColors[article.category];

  return (
    <div style={{ background: "#F8F8FF", minHeight: "100vh" }}>
      <Navbar />
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "56px 32px" }}>
        <Link href="/blog" style={{ fontSize: "15px", color: "#6B6B8A", textDecoration: "none", display: "inline-block", marginBottom: "24px" }}>
          ← Back to blog
        </Link>
        <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color, marginBottom: "12px" }}>
          {article.categoryLabel}
        </div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "36px", fontWeight: 700, color: "#1A1A2E", lineHeight: 1.3, marginBottom: "16px" }}>
          {article.title}
        </h1>
        <p style={{ fontSize: "18px", color: "#6B6B8A", lineHeight: 1.75, marginBottom: "12px" }}>
          {article.description}
        </p>
        <div style={{ fontSize: "14px", color: "#9999BB", marginBottom: "48px" }}>
          {new Date(article.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · {article.readTime} min read
        </div>
        <div style={{
          background: "#F0EFFC", border: "0.5px solid rgba(91,79,200,0.2)",
          borderRadius: "12px", padding: "32px", textAlign: "center",
          fontFamily: "Arial, sans-serif", fontSize: "16px", color: "#6B6B8A",
        }}>
          <p style={{ marginBottom: "8px" }}>📝 Article content coming soon.</p>
          <p>This page is ready to receive the full article.</p>
        </div>
      </article>
      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getArticleBySlug, articles, getArticlesByCategory } from "@/lib/articles";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// ── SEO ──────────────────────────────────────────────────────
export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — fitness-ritual.com`,
    description: article.description,
  };
}

// ── Category config ───────────────────────────────────────────
const categoryConfig = {
  nutrition: { label: "Nutrition & Diet",   href: "/nutrition" },
  exercise:  { label: "Exercise & Fitness", href: "/exercise"  },
  recipes:   { label: "Healthy Recipes",    href: "/recipes"   },
};

// ── Page ──────────────────────────────────────────────────────
export default async function ArticlePageSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const cat = categoryConfig[article.category];

  const related = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  const publishDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Responsive grid : 2 colonnes desktop, 1 colonne mobile
  const layoutStyle: React.CSSProperties = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "48px 24px",
    display: "grid",
    gridTemplateColumns: "minmax(0,1fr) 300px",
    gap: "48px",
    alignItems: "start",
  };

  return (
    <div style={{ background: "#F8FAF9", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO BANNIÈRE ── */}
      <div
        style={{
          background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 60%, #3D8B6A 100%)",
          minHeight: "220px",
          display: "flex",
          alignItems: "flex-end",
          padding: "0 0 32px 0",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.60)", fontSize: "13px", textDecoration: "none", fontFamily: "Inter, sans-serif" }}>
              Home
            </Link>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px" }}>/</span>
            <Link href={cat.href} style={{ color: "rgba(255,255,255,0.60)", fontSize: "13px", textDecoration: "none", fontFamily: "Inter, sans-serif" }}>
              {cat.label}
            </Link>
          </div>

          {/* Titre */}
          <h1 style={{
            fontFamily: "Inter, ui-sans-serif, sans-serif",
            fontSize: "clamp(22px, 3.5vw, 38px)",
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: 1.25,
            maxWidth: "760px",
            margin: "0 0 16px 0",
            textShadow: "0 1px 4px rgba(0,0,0,0.20)",
          }}>
            {article.title}
          </h1>

          {/* Meta */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
            <span style={{
              background: "#E07A3A", color: "#fff", fontSize: "11px", fontWeight: 600,
              padding: "4px 12px", borderRadius: "9999px", fontFamily: "Inter, sans-serif",
              letterSpacing: "0.5px", textTransform: "uppercase" as const,
            }}>
              {cat.label}
            </span>
            <span style={{ color: "rgba(255,255,255,0.70)", fontSize: "13px", fontFamily: "Inter, sans-serif" }}>
              {publishDate}
            </span>
            <span style={{ color: "rgba(255,255,255,0.70)", fontSize: "13px", fontFamily: "Inter, sans-serif" }}>
              · {article.readTime} min read
            </span>
          </div>
        </div>
      </div>

      {/* ── LAYOUT ARTICLE + SIDEBAR ── */}
      <div style={layoutStyle}>

        {/* ── ARTICLE ── */}
        <article>

          {/* Description intro */}
          <p style={{
            fontFamily: "Inter, ui-sans-serif, sans-serif",
            fontSize: "20px",
            fontWeight: 400,
            color: "#3D4F58",
            lineHeight: 1.7,
            margin: "0 0 40px 0",
            paddingBottom: "32px",
            borderBottom: "1px solid #C8E6D8",
          }}>
            {article.description}
          </p>

          {/* Placeholder contenu */}
          <div style={{
            background: "#F0FAF5", border: "1px solid #C8E6D8",
            borderRadius: "10px", padding: "40px 32px",
            textAlign: "center", marginBottom: "48px",
          }}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "17px", color: "#2D6A4F", marginBottom: "8px", fontWeight: 500 }}>
              ✍️ Full article coming soon.
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#4A6572", margin: 0 }}>
              This page is live and ready to receive the complete content.
            </p>
          </div>

          {/* ── CTA KALORIX ── */}
          <div style={{
            background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)",
            borderRadius: "12px", padding: "32px",
            display: "flex", gap: "24px", alignItems: "center",
            flexWrap: "wrap", marginBottom: "40px",
          }}>
            <div style={{ flex: 1, minWidth: "200px" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" as const, color: "#74C69D", margin: "0 0 8px 0" }}>
                Recommended tool
              </p>
              <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "20px", fontWeight: 600, color: "#fff", margin: "0 0 10px 0", lineHeight: 1.3 }}>
                Track your calories and macros with Kalorix
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, margin: 0 }}>
                Designed for adults 40+. Simple, multilingual, no overwhelm. Free to start.
              </p>
            </div>
            <Link
              href="https://kalorix-nine.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#E07A3A", color: "#fff", padding: "14px 28px",
                borderRadius: "8px", fontSize: "15px", fontWeight: 600,
                textDecoration: "none", whiteSpace: "nowrap" as const,
                boxShadow: "0 4px 16px rgba(224,122,58,0.35)", flexShrink: 0,
              }}
            >
              Try Kalorix free →
            </Link>
          </div>

          {/* Tag catégorie */}
          <div style={{ paddingTop: "24px", borderTop: "1px solid #C8E6D8", display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#4A6572" }}>
              Filed under:
            </span>
            <Link href={cat.href} style={{
              background: "#F0FAF5", color: "#2D6A4F", border: "1px solid #C8E6D8",
              padding: "5px 14px", borderRadius: "9999px", fontSize: "13px",
              fontWeight: 500, textDecoration: "none", fontFamily: "Inter, sans-serif",
            }}>
              {cat.label}
            </Link>
          </div>
        </article>

        {/* ── SIDEBAR ── */}
        <aside style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

          {/* Articles liés */}
          {related.length > 0 && (
            <div style={{ background: "#fff", border: "1px solid #C8E6D8", borderRadius: "10px", padding: "24px" }}>
              <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 700, color: "#2D6A4F", letterSpacing: "1px", textTransform: "uppercase" as const, margin: "0 0 20px 0" }}>
                Related articles
              </h3>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {related.map((rel, i) => (
                  <Link key={rel.slug} href={`/blog/${rel.slug}`} style={{ textDecoration: "none" }}>
                    <div style={{ padding: "14px 0", borderBottom: i < related.length - 1 ? "1px solid #C8E6D8" : "none" }}>
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 700, color: "#E07A3A", letterSpacing: "0.5px", textTransform: "uppercase" as const, display: "block", marginBottom: "5px" }}>
                        {categoryConfig[rel.category].label}
                      </span>
                      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#2D3436", lineHeight: 1.45, margin: 0 }}>
                        {rel.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Kalorix sticky */}
          <div style={{
            background: "#FDF6F0", border: "1px solid #F4C49A",
            borderRadius: "10px", padding: "24px",
            position: "sticky", top: "72px",
          }}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" as const, color: "#E07A3A", margin: "0 0 10px 0" }}>
              Sponsored
            </p>
            <h4 style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 600, color: "#2D3436", lineHeight: 1.35, margin: "0 0 10px 0" }}>
              Count calories the easy way — for adults 40+
            </h4>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#4A6572", lineHeight: 1.6, margin: "0 0 18px 0" }}>
              Kalorix tracks your macros, weight, and progress — in English, French, or Spanish. No complicated features, just what you need.
            </p>
            <Link
              href="https://kalorix-nine.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", textAlign: "center", background: "#E07A3A", color: "#fff", padding: "12px 20px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}
            >
              Try Kalorix free →
            </Link>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}

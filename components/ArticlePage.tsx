// ============================================================
//  FITNESS-RITUAL.COM — ArticlePage.tsx
//  Template article avec sidebar — Forest Vitality palette
//  À placer dans : app/blog/[slug]/page.tsx  (ou components/)
//  Usage : importer et passer les props article
// ============================================================

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

// ── Types ────────────────────────────────────────────────────
interface ArticleProps {
  title: string;
  category: string;           // ex: "Nutrition & Diet"
  categoryHref: string;       // ex: "/nutrition"
  readTime: string;           // ex: "7 min read"
  publishDate: string;        // ex: "June 16, 2025"
  heroImage?: string;         // URL image optionnelle
  heroAlt?: string;
  content: React.ReactNode;   // JSX du corps de l'article
}

// ── Données exemple (à remplacer par tes vraies données) ─────
const EXAMPLE_ARTICLE: ArticleProps = {
  title: "The Best Exercises for Adults Over 50 to Build Strength Without Pain",
  category: "Exercise & Fitness",
  categoryHref: "/exercise",
  readTime: "8 min read",
  publishDate: "June 16, 2025",
  heroImage: undefined, // mettre une URL si tu as une image
  heroAlt: "Senior doing strength training",
  content: (
    <>
      <p>
        After 50, building strength isn't just about looking good — it's about
        staying independent, preventing falls, and keeping your energy up all day.
        The good news? You don't need heavy weights or a fancy gym to do it.
      </p>
      <h2>Why strength training matters more after 50</h2>
      <p>
        We naturally lose 3–5% of muscle mass per decade after 30. By the time
        you hit 50, that adds up. But resistance training can slow — and even
        reverse — that loss. Studies show adults over 50 who train consistently
        gain muscle at nearly the same rate as younger adults.
      </p>
      <h2>The 3 movements everyone over 50 should master</h2>
      <p>
        These aren't flashy. They're the fundamentals that work every time,
        for every body.
      </p>
    </>
  ),
};

// ── Related articles (sidebar) ────────────────────────────────
const RELATED_ARTICLES = [
  {
    title: "How to Start Walking for Weight Loss After 50",
    href: "/blog/walking-weight-loss-over-50",
    category: "Exercise & Fitness",
  },
  {
    title: "The Anti-Inflammatory Diet: What to Eat After 50",
    href: "/blog/anti-inflammatory-diet-over-50",
    category: "Nutrition & Diet",
  },
  {
    title: "Easy High-Protein Breakfasts for Seniors",
    href: "/blog/high-protein-breakfasts-seniors",
    category: "Healthy Recipes",
  },
];

// ── Component principal ───────────────────────────────────────
export default function ArticlePage({
  article = EXAMPLE_ARTICLE,
}: {
  article?: ArticleProps;
}) {
  return (
    <div style={{ background: "#F8FAF9", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO BANNIÈRE (gradient si pas d'image) ── */}
      <div
        style={{
          background: article.heroImage
            ? `url(${article.heroImage}) center/cover no-repeat`
            : "linear-gradient(135deg, #1B4332 0%, #2D6A4F 60%, #3D8B6A 100%)",
          minHeight: "220px",
          display: "flex",
          alignItems: "flex-end",
          padding: "0 0 32px 0",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            <Link
              href="/"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "13px",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Home
            </Link>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>
              /
            </span>
            <Link
              href={article.categoryHref}
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "13px",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {article.category}
            </Link>
          </div>

          {/* Titre */}
          <h1
            style={{
              fontFamily: "Inter, ui-sans-serif, sans-serif",
              fontSize: "clamp(22px, 3.5vw, 38px)",
              fontWeight: 600,
              color: "#FFFFFF",
              lineHeight: 1.25,
              maxWidth: "760px",
              margin: "0 0 16px 0",
              textShadow: "0 1px 4px rgba(0,0,0,0.25)",
            }}
          >
            {article.title}
          </h1>

          {/* Meta */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                background: "#E07A3A",
                color: "#fff",
                fontSize: "11px",
                fontWeight: 600,
                padding: "4px 12px",
                borderRadius: "9999px",
                fontFamily: "Inter, sans-serif",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              {article.category}
            </span>
            <span
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "13px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {article.publishDate}
            </span>
            <span
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "13px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              · {article.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* ── LAYOUT : ARTICLE + SIDEBAR ── */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "48px 24px",
          display: "grid",
          gridTemplateColumns: "1fr 300px",
          gap: "48px",
          alignItems: "start",
        }}
        className="article-layout"
      >
        {/* ── COLONNE GAUCHE : CONTENU ── */}
        <article>
          {/* Corps de l'article */}
          <div className="article-body">{article.content}</div>

          {/* ── BLOC TIP (optionnel, à placer dans le content via <TipBox>) ── */}
          {/* ── SÉPARATEUR ── */}
          <div
            style={{
              margin: "48px 0 32px",
              borderTop: "1px solid #C8E6D8",
            }}
          />

          {/* ── BLOC KALORIX CTA (1 seul par article) ── */}
          <div
            style={{
              background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)",
              borderRadius: "12px",
              padding: "32px",
              display: "flex",
              gap: "24px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: "200px" }}>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#74C69D",
                  margin: "0 0 8px 0",
                }}
              >
                Recommended tool
              </p>
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#fff",
                  margin: "0 0 10px 0",
                  lineHeight: 1.3,
                }}
              >
                Track your calories and macros with Kalorix
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Designed for adults 40+. Simple, multilingual, no overwhelm.
                Free to start.
              </p>
            </div>
            <Link
              href="https://kalorix-nine.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#E07A3A",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 16px rgba(224,122,58,0.35)",
                flexShrink: 0,
              }}
            >
              Try Kalorix free →
            </Link>
          </div>

          {/* ── TAGS / CATÉGORIE ── */}
          <div
            style={{
              marginTop: "40px",
              paddingTop: "24px",
              borderTop: "1px solid #C8E6D8",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                color: "#4A6572",
              }}
            >
              Filed under:
            </span>
            <Link
              href={article.categoryHref}
              style={{
                background: "#F0FAF5",
                color: "#2D6A4F",
                border: "1px solid #C8E6D8",
                padding: "5px 14px",
                borderRadius: "9999px",
                fontSize: "13px",
                fontWeight: 500,
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {article.category}
            </Link>
          </div>
        </article>

        {/* ── COLONNE DROITE : SIDEBAR ── */}
        <aside style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* Bloc Articles liés */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #C8E6D8",
              borderRadius: "10px",
              padding: "24px",
            }}
          >
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                color: "#2D6A4F",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                margin: "0 0 20px 0",
              }}
            >
              Related articles
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {RELATED_ARTICLES.map((rel, i) => (
                <Link
                  key={i}
                  href={rel.href}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      paddingBottom: i < RELATED_ARTICLES.length - 1 ? "16px" : 0,
                      borderBottom:
                        i < RELATED_ARTICLES.length - 1
                          ? "1px solid #C8E6D8"
                          : "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#E07A3A",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      {rel.category}
                    </span>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        color: "#2D3436",
                        lineHeight: 1.4,
                        margin: 0,
                        fontWeight: 450,
                      }}
                    >
                      {rel.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bloc Kalorix sidebar — sticky */}
          <div
            style={{
              background: "#FDF6F0",
              border: "1px solid #F4C49A",
              borderRadius: "10px",
              padding: "24px",
              position: "sticky",
              top: "72px",
            }}
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                color: "#E07A3A",
                margin: "0 0 10px 0",
              }}
            >
              Sponsored
            </p>
            <h4
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                color: "#2D3436",
                lineHeight: 1.35,
                margin: "0 0 10px 0",
              }}
            >
              Count calories the easy way — for adults 40+
            </h4>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                color: "#4A6572",
                lineHeight: 1.6,
                margin: "0 0 18px 0",
              }}
            >
              Kalorix tracks your macros, weight, and progress — in English,
              French, or Spanish. No complicated features, just what you need.
            </p>
            <Link
              href="https://kalorix-nine.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                background: "#E07A3A",
                color: "#fff",
                padding: "12px 20px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Try Kalorix free →
            </Link>
          </div>
        </aside>
      </div>

      {/* ── CSS responsive ── */}
      <style jsx global>{`
        /* Layout responsive */
        @media (max-width: 768px) {
          .article-layout {
            grid-template-columns: 1fr !important;
          }
        }

        /* Corps de l'article — typographie 50+ */
        .article-body p {
          font-family: Inter, ui-sans-serif, sans-serif;
          font-size: 18px;
          line-height: 1.85;
          color: #3D4F58;
          margin: 0 0 24px 0;
        }

        .article-body h2 {
          font-family: Inter, ui-sans-serif, sans-serif;
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 600;
          color: #2D3436;
          margin: 48px 0 16px 0;
          padding-top: 8px;
          border-top: 2px solid #C8E6D8;
        }

        .article-body h3 {
          font-family: Inter, ui-sans-serif, sans-serif;
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 600;
          color: #2D3436;
          margin: 36px 0 12px 0;
        }

        .article-body ul,
        .article-body ol {
          font-family: Inter, ui-sans-serif, sans-serif;
          font-size: 18px;
          line-height: 1.85;
          color: #3D4F58;
          padding-left: 24px;
          margin: 0 0 24px 0;
        }

        .article-body li {
          margin-bottom: 10px;
        }

        .article-body strong {
          font-weight: 600;
          color: #2D3436;
        }

        /* TipBox — à utiliser dans le content */
        .tip-box {
          background: #F0FAF5;
          border-left: 4px solid #2D6A4F;
          border-radius: 0 8px 8px 0;
          padding: 20px 24px;
          margin: 32px 0;
          font-family: Inter, ui-sans-serif, sans-serif;
          font-size: 17px;
          line-height: 1.7;
          color: #1B4332;
        }

        .tip-box strong {
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #2D6A4F;
          margin-bottom: 8px;
        }

        /* Lien dans article */
        .article-body a {
          color: #2D6A4F;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .article-body a:hover {
          color: #E07A3A;
        }
      `}</style>

      <Footer />
    </div>
  );
}

// ── Composant TipBox (à importer dans le content des articles) ──
export function TipBox({
  label = "Quick tip",
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="tip-box">
      <strong>{label}</strong>
      {children}
    </div>
  );
}

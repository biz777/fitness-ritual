import Link from "next/link";

interface ArticleCardProps {
  slug: string;
  category: string;
  title: string;
  description: string;
  categoryColor?: string;
}

export default function ArticleCard({
  slug, category, title, description, categoryColor = "#5B4FC8"
}: ArticleCardProps) {
  return (
    <div style={{
      borderRadius: "12px", padding: "28px 24px",
      border: "0.5px solid rgba(91,79,200,0.15)",
      background: "#fff", fontFamily: "Arial, sans-serif",
    }}>
      <div style={{
        fontSize: "13px", fontWeight: 600, letterSpacing: "1px",
        textTransform: "uppercase", color: categoryColor, marginBottom: "10px",
      }}>
        {category}
      </div>
      <h3 style={{
        fontSize: "20px", fontWeight: 600, marginBottom: "12px",
        lineHeight: 1.45, color: "#1A1A2E", fontFamily: "Georgia, serif",
      }}>
        {title}
      </h3>
      <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#6B6B8A", marginBottom: "18px" }}>
        {description}
      </p>
      <Link
        href={`/blog/${slug}`}
        style={{ fontSize: "17px", color: categoryColor, fontWeight: 600, textDecoration: "none" }}
      >
        Read article →
      </Link>
    </div>
  );
}

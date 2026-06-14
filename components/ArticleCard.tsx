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
      borderRadius: "12px", padding: "24px 20px",
      border: "0.5px solid rgba(91,79,200,0.15)",
      background: "#fff", fontFamily: "Arial, sans-serif",
    }}>
      <div style={{
        fontSize: "11px", fontWeight: 600, letterSpacing: "1px",
        textTransform: "uppercase", color: categoryColor, marginBottom: "8px",
      }}>
        {category}
      </div>
      <h3 style={{
        fontSize: "17px", fontWeight: 600, marginBottom: "8px",
        lineHeight: 1.45, color: "#1A1A2E", fontFamily: "Georgia, serif",
      }}>
        {title}
      </h3>
      <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B6B8A", marginBottom: "14px" }}>
        {description}
      </p>
      <Link
        href={`/blog/${slug}`}
        style={{ fontSize: "15px", color: categoryColor, fontWeight: 500, textDecoration: "none" }}
      >
        Read article →
      </Link>
    </div>
  );
}

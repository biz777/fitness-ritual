import Image from "next/image";
import Link from "next/link";

interface AuthorBylineProps {
  compact?: boolean; // true = version courte pour les articles, false = version complète
}

export default function AuthorByline({ compact = false }: AuthorBylineProps) {
  if (compact) {
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        margin: "24px 0",
        padding: "16px 20px",
        background: "#F0F7F4",
        borderLeft: "4px solid #2D6A4F",
        borderRadius: "0 8px 8px 0",
      }}>
        <Image
          src="/images/david-lewis.jpg"
          alt="David Lewis — Health & Wellness Coach"
          width={48}
          height={48}
          style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
        />
        <div>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#6B7280", marginBottom: "2px" }}>
            Written by
          </div>
          <Link href="/about" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", fontWeight: 700, color: "#1B4332" }}>
              David Lewis
            </span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#4A5568", marginLeft: "8px" }}>
              · Health & Wellness Coach
            </span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "20px",
      margin: "40px 0",
      padding: "28px 32px",
      background: "#F0F7F4",
      borderRadius: "12px",
      border: "1px solid #D1E8DC",
    }}>
      <Image
        src="/images/david-lewis.jpg"
        alt="David Lewis — Health & Wellness Coach"
        width={80}
        height={80}
        style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
      />
      <div>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "#2D6A4F", marginBottom: "6px" }}>
          About the Author
        </div>
        <Link href="/about" style={{ textDecoration: "none" }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "20px", fontWeight: 700, color: "#1B4332", marginBottom: "4px" }}>
            David Lewis
          </div>
        </Link>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#E07A3A", fontWeight: 600, marginBottom: "12px" }}>
          Certified Health & Wellness Coach · Denver, CO
        </div>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#4A5568", lineHeight: 1.7, margin: 0 }}>
          David has spent over 15 years helping adults over 50 reclaim their energy, strength, and confidence
          through sustainable lifestyle changes. A former physical education teacher turned wellness coach,
          he specializes in low-impact fitness, anti-inflammatory nutrition, and building habits that actually stick.
        </p>
        <Link href="/about" style={{
          display: "inline-block",
          marginTop: "14px",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontWeight: 600,
          color: "#2D6A4F",
          textDecoration: "underline",
          textUnderlineOffset: "3px",
        }}>
          Read full bio →
        </Link>
      </div>
    </div>
  );
}

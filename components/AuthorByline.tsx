import Image from "next/image";
import Link from "next/link";

interface AuthorBylineProps {
  compact?: boolean;
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
          src="/logo.jpg"
          alt="fitness-ritual.com"
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
              fitness-ritual.com Editorial Team
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
        src="/logo.jpg"
        alt="fitness-ritual.com Editorial Team"
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
            fitness-ritual.com Editorial Team
          </div>
        </Link>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#E07A3A", fontWeight: 600, marginBottom: "12px" }}>
          Health & Wellness Content for Adults 50+
        </div>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#4A5568", lineHeight: 1.7, margin: 0 }}>
          Every article on fitness-ritual.com is researched, written, and reviewed by our editorial team
          with one goal: giving adults over 50 honest, practical, evidence-based guidance to live
          stronger and healthier lives — no gimmicks, no extreme diets.
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
          Our editorial mission →
        </Link>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 32px",
      background: "#2D6A4F",          /* Forest Vitality — vert forêt */
      position: "sticky",
      top: 0,
      zIndex: 100,
      height: "56px",
    }}>

      {/* LOGO */}
      <Link href="/" style={{ textDecoration: "none" }}>
        <span style={{
          fontFamily: "Inter, ui-sans-serif, sans-serif",
          fontSize: "16px",
          fontWeight: 500,
          color: "#fff",
          letterSpacing: "-0.02em",
        }}>
          fitness<span style={{ opacity: 0.65, fontWeight: 400 }}>-ritual</span>
        </span>
      </Link>

      {/* NAV LINKS — desktop */}
      <div style={{ display: "flex", gap: "4px", alignItems: "center" }} className="nav-desktop">
        {[
          { label: "Exercise & Fitness", href: "/exercise" },
          { label: "Nutrition & Diet",   href: "/nutrition" },
          { label: "Healthy Recipes",    href: "/recipes"   },
          { label: "About",              href: "/about"     },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            style={{
              textDecoration: "none",
              fontSize: "12px",
              fontWeight: 400,
              color: "#fff",
              opacity: 0.85,
              padding: "6px 12px",
              borderRadius: "6px",
              transition: "opacity 0.2s",
            }}
          >
            {item.label}
          </Link>
        ))}

        {/* CTA Kalorix */}
        <Link
          href="https://kalorix-nine.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#E07A3A",     /* Orange accent */
            color: "#fff",
            padding: "6px 14px",
            borderRadius: "9999px",
            fontSize: "11px",
            fontWeight: 500,
            textDecoration: "none",
            marginLeft: "8px",
            whiteSpace: "nowrap",
            transition: "background-color 0.2s",
          }}
        >
          Try Kalorix free
        </Link>
      </div>

      {/* BURGER — mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#fff",
          fontSize: "20px",
          padding: "4px",
          display: "none",
        }}
        className="nav-burger"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div style={{
          position: "absolute",
          top: "56px",
          left: 0,
          right: 0,
          backgroundColor: "#1B4332",
          padding: "1rem 2rem",
          zIndex: 99,
        }}>
          {[
            { label: "Exercise & Fitness", href: "/exercise" },
            { label: "Nutrition & Diet",   href: "/nutrition" },
            { label: "Healthy Recipes",    href: "/recipes"   },
            { label: "About",              href: "/about"     },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: "#fff",
                fontSize: "15px",
                padding: "10px 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
                opacity: 0.85,
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="https://kalorix-nine.vercel.app"
            target="_blank"
            style={{
              display: "inline-block",
              marginTop: "12px",
              backgroundColor: "#E07A3A",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 500,
              padding: "8px 16px",
              borderRadius: "9999px",
              textDecoration: "none",
            }}
          >
            Try Kalorix free
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger  { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

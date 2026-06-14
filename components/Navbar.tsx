"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 32px", background: "#fff",
      borderBottom: "0.5px solid rgba(91,79,200,0.15)",
      position: "sticky", top: 0, zIndex: 100,
    }}>
      <Link href="/" style={{ textDecoration: "none" }}>
        <span style={{
          fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: 700,
          color: "#5B4FC8",
        }}>
          fitness-<span style={{ color: "#22C55E" }}>ritual</span>.com
        </span>
      </Link>

      <div style={{ display: "flex", gap: "6px", alignItems: "center" }} className="nav-links">
        {["Blog", "Nutrition", "Exercise", "Recipes"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            style={{
              textDecoration: "none", fontSize: "16px", fontWeight: 500,
              color: "#1A1A2E", padding: "9px 16px", borderRadius: "8px",
            }}
          >
            {item}
          </Link>
        ))}
        <Link
          href="https://kalorix-nine.vercel.app"
          target="_blank"
          style={{
            background: "#5B4FC8", color: "#fff", border: "none",
            padding: "11px 22px", borderRadius: "8px", fontSize: "15px",
            fontWeight: 600, cursor: "pointer", textDecoration: "none",
            marginLeft: "8px",
          }}
        >
          Try Kalorix Free
        </Link>
      </div>
    </nav>
  );
}

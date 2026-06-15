"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "12px 32px", background: "#fff",
      borderBottom: "0.5px solid #E8E8E0",
      position: "sticky", top: 0, zIndex: 100,
    }}>
      {/* LOGO */}
      <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
        <img
          src="/fitness-ritual_LOGO.jpg"
          alt="Fitness Ritual"
          style={{ height: "52px", width: "auto", objectFit: "contain" }}
        />
      </Link>

      {/* NAV LINKS */}
      <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
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
            background: "#4CAF50", color: "#fff",
            padding: "11px 22px", borderRadius: "8px", fontSize: "15px",
            fontWeight: 600, textDecoration: "none", marginLeft: "8px",
          }}
        >
          Try Kalorix Free
        </Link>
      </div>
    </nav>
  );
}

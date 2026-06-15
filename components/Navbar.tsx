"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 32px", background: "#fff",
      borderBottom: "0.5px solid #E8E8E0",
      position: "sticky", top: 0, zIndex: 100, height: "64px",
    }}>
      {/* BRAND NAME */}
      <Link href="/" style={{ textDecoration: "none" }}>
        <span style={{
          fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: 700,
          color: "#1A1A2E", letterSpacing: "0.5px",
        }}>
          FITNESS RITUAL
        </span>
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

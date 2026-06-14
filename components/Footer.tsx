import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      padding: "32px", fontFamily: "Arial, sans-serif", fontSize: "15px",
      background: "#fff", borderTop: "0.5px solid rgba(91,79,200,0.15)",
      color: "#6B6B8A",
    }}>
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: "12px",
        maxWidth: "1100px", margin: "0 auto",
      }}>
        <span style={{ fontFamily: "Georgia, serif", fontSize: "17px", fontWeight: 700, color: "#5B4FC8" }}>
          fitness-<span style={{ color: "#22C55E" }}>ritual</span>.com
        </span>
        <div style={{ display: "flex", gap: "24px" }}>
          {["About", "Blog", "Privacy", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              style={{ color: "#6B6B8A", textDecoration: "none", fontSize: "15px" }}
            >
              {item}
            </Link>
          ))}
        </div>
        <span>© {new Date().getFullYear()} CLICKANDDEALONLINE LLC</span>
      </div>
    </footer>
  );
}

import Link from "next/link";

const navLinks = ["Blog", "About", "Contact"];

const legalLinks = [
  { label: "Privacy Policy",       href: "/privacy"               },
  { label: "Terms of Service",     href: "/terms"                 },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure"  },
  { label: "Medical Disclaimer",   href: "/disclaimer"            },
  { label: "Cookie Policy",        href: "/cookies"               },
];

export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 32px 32px",
        fontFamily: "Arial, sans-serif",
        background: "#F8FAF9",
        borderTop: "1px solid rgba(45,106,79,0.15)",
        color: "#5C6B66",
      }}
    >
      {/* Top row: brand + main nav */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "18px",
            fontWeight: 700,
            color: "#2D6A4F",
          }}
        >
          fitness-<span style={{ color: "#E07A3A" }}>ritual</span>.com
        </span>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {navLinks.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              style={{
                color: "#2D6A4F",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom row: legal links + copyright */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "24px auto 0",
          paddingTop: "20px",
          borderTop: "1px solid rgba(45,106,79,0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "#5C6B66",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <span style={{ fontSize: "16px", color: "#5C6B66" }}>
          © {new Date().getFullYear()} CLICKANDDEALONLINE LLC
        </span>
      </div>
    </footer>
  );
}

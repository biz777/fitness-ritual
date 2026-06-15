import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ background: "#F8F8F4", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO — hauteur fixe 380px, pas étirée ── */}
      <section style={{ width: "100%", height: "380px", overflow: "hidden", lineHeight: 0 }}>
        <img
          src="/banniere.webp"
          alt="Eat Good Feel Good — Fitness Ritual"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
        />
      </section>

      {/* ── TEXTE + BOUTONS sous la bannière ── */}
      <section style={{
        background: "#fff", textAlign: "center",
        padding: "52px 32px 48px", borderBottom: "1px solid #E8E8E0",
      }}>
        <div style={{
          display: "inline-block",
          background: "rgba(76,175,80,0.10)",
          color: "#4CAF50",
          fontFamily: "Arial, sans-serif", fontSize: "13px", fontWeight: 600,
          letterSpacing: "1.2px", textTransform: "uppercase",
          padding: "6px 18px", borderRadius: "20px", marginBottom: "20px",
          border: "1px solid rgba(76,175,80,0.3)",
        }}>
          For adults 50+ who take their health seriously
        </div>
        <h1 style={{
          fontFamily: "Georgia, serif", fontSize: "44px", fontWeight: 700,
          color: "#1A1A1A", lineHeight: 1.2, maxWidth: "680px",
          margin: "0 auto 18px",
        }}>
          Real fitness advice for real people over 50
        </h1>
        <p style={{
          fontFamily: "Arial, sans-serif", fontSize: "18px",
          color: "#555", lineHeight: 1.75,
          maxWidth: "520px", margin: "0 auto 32px",
        }}>
          No fads. No extreme diets. Just practical, science-backed guidance
          for staying strong, healthy, and energized as you age.
        </p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/blog" style={{
            background: "#4CAF50", color: "#fff",
            padding: "15px 32px", borderRadius: "8px", fontSize: "16px",
            fontFamily: "Arial, sans-serif", fontWeight: 700, textDecoration: "none",
            boxShadow: "0 4px 16px rgba(76,175,80,0.35)",
          }}>
            Start reading →
          </Link>
          <Link href="/blog" style={{
            background: "#fff", color: "#1A1A1A",
            border: "1.5px solid #D0D0C8",
            padding: "15px 32px", borderRadius: "8px", fontSize: "16px",
            fontFamily: "Arial, sans-serif", textDecoration: "none",
          }}>
            Browse articles
          </Link>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <div style={{
        display: "flex", justifyContent: "center",
        background: "#F8F8F4", borderBottom: "1px solid #E8E8E0",
        padding: "22px 32px",
      }}>
        {[
          { num: "17", label: "Expert articles" },
          { num: "3", label: "Topic categories" },
          { num: "50+", label: "Target audience" },
        ].map((stat, i) => (
          <div key={i} style={{
            textAlign: "center", padding: "0 52px",
            borderLeft: i > 0 ? "1px solid #E8E8E0" : "none",
            fontFamily: "Arial, sans-serif",
          }}>
            <div style={{ fontSize: "28px", fontWeight: 700, color: "#4CAF50" }}>{stat.num}</div>
            <div style={{ fontSize: "13px", color: "#666", marginTop: "3px" }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* ── FEATURED ARTICLES ── */}
      <section style={{ padding: "64px 32px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#4CAF50", marginBottom: "8px", fontFamily: "Arial, sans-serif" }}>
          Latest articles
        </div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: 700, color: "#1A1A1A", marginBottom: "8px" }}>
          What we cover
        </h2>
        <p style={{ fontSize: "17px", color: "#555", lineHeight: 1.75, marginBottom: "40px", fontFamily: "Arial, sans-serif" }}>
          Three categories built around what matters most after 50.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}>
          {[
            {
              img: "/nutrition-bowl.jpg",
              category: "Nutrition & Diet", categoryColor: "#5B4FC8",
              title: "Best protein sources for muscle retention after 50",
              desc: "Why protein needs increase with age and which foods deliver the most without excess calories.",
              href: "/blog/best-protein-sources-after-50",
            },
            {
              img: "/hero-running.jpg",
              category: "Exercise & Fitness", categoryColor: "#22C55E",
              title: "The 20-minute morning routine that actually works",
              desc: "A low-impact daily routine designed for joints, balance, and energy — no gym required.",
              href: "/blog/20-minute-morning-routine",
            },
            {
              img: "/recipes-salad.jpg",
              category: "Healthy Recipes", categoryColor: "#F59E0B",
              title: "5 high-fiber dinner recipes under 500 calories",
              desc: "Quick, satisfying meals that support digestion and help manage weight without feeling deprived.",
              href: "/blog/high-fiber-dinner-recipes",
            },
          ].map((card, i) => (
            <Link key={i} href={card.href} style={{ textDecoration: "none" }}>
              <div style={{ borderRadius: "14px", overflow: "hidden", background: "#fff", border: "1px solid #E8E8E0", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
                <div style={{ height: "190px", overflow: "hidden" }}>
                  <img src={card.img} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: card.categoryColor, fontFamily: "Arial, sans-serif", marginBottom: "8px" }}>
                    {card.category}
                  </div>
                  <h3 style={{ fontFamily: "Georgia, serif", fontSize: "17px", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.4, marginBottom: "10px" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: "Arial, sans-serif", fontSize: "14px", color: "#555", lineHeight: 1.65, marginBottom: "14px" }}>
                    {card.desc}
                  </p>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: card.categoryColor, fontFamily: "Arial, sans-serif" }}>Read article →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "64px 32px", background: "#F0F7F0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#4CAF50", marginBottom: "8px", fontFamily: "Arial, sans-serif" }}>
            What readers say
          </div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: 700, color: "#1A1A1A", marginBottom: "8px" }}>
            Stories from our community
          </h2>
          <p style={{ fontSize: "17px", color: "#555", lineHeight: 1.75, marginBottom: "40px", fontFamily: "Arial, sans-serif" }}>
            Real people, real results — no before/after gimmicks.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "22px" }}>
            {[
              { img: "/yoga-garden.jpg", name: "Donna M.", age: "Age 58, Texas", text: "Finally a fitness site that talks to me like an adult. No extreme workouts, no impossible diets — just honest, useful advice." },
              { img: "/exercise-nordic.jpg", name: "Robert K.", age: "Age 63, Florida", text: "The recipes are simple and actually taste good. I've lost 12 pounds in 3 months just by following the nutrition articles." },
            ].map((t, i) => (
              <div key={i} style={{ borderRadius: "14px", overflow: "hidden", background: "#fff", border: "1px solid #D4E8D4", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", fontFamily: "Arial, sans-serif" }}>
                <div style={{ height: "170px", overflow: "hidden" }}>
                  <img src={t.img} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 25%" }} />
                </div>
                <div style={{ padding: "22px" }}>
                  <div style={{ color: "#F59E0B", fontSize: "18px", marginBottom: "12px" }}>★★★★★</div>
                  <p style={{ fontSize: "15px", lineHeight: 1.75, fontStyle: "italic", color: "#333", marginBottom: "16px" }}>&ldquo;{t.text}&rdquo;</p>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A1A" }}>{t.name}</div>
                  <div style={{ fontSize: "13px", color: "#888", marginTop: "2px" }}>{t.age}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section style={{ padding: "64px 32px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#4CAF50", marginBottom: "8px", fontFamily: "Arial, sans-serif" }}>
          Browse by topic
        </div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: 700, color: "#1A1A1A", marginBottom: "8px" }}>Find what you need</h2>
        <p style={{ fontSize: "17px", color: "#555", lineHeight: 1.75, marginBottom: "40px", fontFamily: "Arial, sans-serif" }}>All our content, organized by category.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}>
          {[
            { href: "/nutrition", color: "#5B4FC8", label: "Nutrition & Diet", count: "7 articles", desc: "Protein, fiber, hydration, supplements — everything about eating well after 50.", img: "/nutrition-bowl.jpg" },
            { href: "/exercise", color: "#22C55E", label: "Exercise & Fitness", count: "6 articles", desc: "Low-impact routines, strength training, balance, and flexibility for the 50+ body.", img: "/hero-nordic.jpg" },
            { href: "/recipes", color: "#F59E0B", label: "Healthy Recipes", count: "4 articles", desc: "Quick, nutritious meals with full macro breakdowns — designed for real kitchens.", img: "/recipes-salad.jpg" },
          ].map((cat) => (
            <Link key={cat.href} href={cat.href} style={{ textDecoration: "none" }}>
              <div style={{ borderRadius: "14px", overflow: "hidden", background: "#fff", border: "1px solid #E8E8E0", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
                <div style={{ height: "155px", overflow: "hidden", position: "relative" }}>
                  <img src={cat.img} alt={cat.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.28) 0%, transparent 55%)" }} />
                </div>
                <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
                  <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: cat.color, marginBottom: "6px" }}>{cat.label}</div>
                  <div style={{ fontSize: "17px", fontWeight: 700, color: "#1A1A1A", marginBottom: "6px" }}>{cat.count}</div>
                  <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#555", marginBottom: "14px" }}>{cat.desc}</p>
                  <span style={{ fontSize: "14px", color: cat.color, fontWeight: 600 }}>Browse →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── KALORIX CTA ── */}
      <section style={{
        background: "linear-gradient(135deg, #2D5A27 0%, #4CAF50 100%)",
        padding: "52px 64px", display: "flex", alignItems: "center",
        justifyContent: "space-between", gap: "24px", flexWrap: "wrap",
      }}>
        <div>
          <h3 style={{ fontFamily: "Georgia, serif", fontSize: "26px", color: "#fff", marginBottom: "10px" }}>Track your calories with Kalorix</h3>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.88)", lineHeight: 1.7, maxWidth: "420px" }}>
            The calorie and macro tracker built for adults 40+. Simple, clear, and available in English, French, and Spanish.
          </p>
        </div>
        <Link href="https://kalorix-nine.vercel.app" target="_blank" style={{
          background: "#fff", color: "#2D5A27", padding: "15px 32px", borderRadius: "8px",
          fontSize: "16px", fontFamily: "Arial, sans-serif", fontWeight: 700,
          textDecoration: "none", boxShadow: "0 4px 14px rgba(0,0,0,0.15)", whiteSpace: "nowrap",
        }}>
          Try Kalorix free →
        </Link>
      </section>

      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ background: "#F8FAF9", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO : texte gauche + bannière droite ── */}
      <section style={{
        background: "#fff",
        borderBottom: "1px solid #C8E6D8",
        padding: "56px 48px",
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "56px",
          alignItems: "center",
        }}
          className="hero-grid"
        >
          {/* GAUCHE : texte */}
          <div>
            <div style={{
              display: "inline-block",
              background: "rgba(45,106,79,0.08)",
              color: "#2D6A4F",
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              padding: "6px 18px",
              borderRadius: "20px",
              marginBottom: "22px",
              border: "1px solid rgba(45,106,79,0.2)",
            }}>
              For adults 50+ who take their health seriously
            </div>

            <h1 style={{
              fontFamily: "Inter, ui-sans-serif, sans-serif",
              fontSize: "clamp(28px, 3.5vw, 46px)",
              fontWeight: 600,
              color: "#2D3436",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}>
              Real fitness advice for real people{" "}
              <span style={{ color: "#2D6A4F" }}>over 50</span>
            </h1>

            <p style={{
              fontFamily: "Inter, ui-sans-serif, sans-serif",
              fontSize: "18px",
              color: "#4A6572",
              lineHeight: 1.75,
              marginBottom: "36px",
              maxWidth: "460px",
            }}>
              No fads. No extreme diets. Just practical, science-backed guidance
              for staying strong, healthy, and energized as you age.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link href="/blog" style={{
                background: "#E07A3A",
                color: "#fff",
                padding: "15px 34px",
                borderRadius: "8px",
                fontSize: "17px",
                fontWeight: 600,
                fontFamily: "Inter, sans-serif",
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(224,122,58,0.30)",
              }}>
                Start reading →
              </Link>
              <Link href="/recipes" style={{
                background: "#fff",
                color: "#2D6A4F",
                border: "1.5px solid #2D6A4F",
                padding: "15px 34px",
                borderRadius: "8px",
                fontSize: "17px",
                fontWeight: 600,
                fontFamily: "Inter, sans-serif",
                textDecoration: "none",
              }}>
                Browse recipes
              </Link>
            </div>
          </div>

          {/* DROITE : bannière */}
          <div style={{
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(45,106,79,0.18)",
            lineHeight: 0,
          }}>
            <img
              src="/banniere.webp"
              alt="Eat Good Feel Good — Fitness Ritual"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        background: "#F8FAF9",
        borderBottom: "1px solid #C8E6D8",
        padding: "22px 32px",
      }}>
        {[
          { num: "17",  label: "Expert articles"  },
          { num: "3",   label: "Topic categories" },
          { num: "50+", label: "Target audience"  },
        ].map((stat, i) => (
          <div key={i} style={{
            textAlign: "center",
            padding: "0 52px",
            borderLeft: i > 0 ? "1px solid #C8E6D8" : "none",
            fontFamily: "Inter, sans-serif",
          }}>
            <div style={{ fontSize: "28px", fontWeight: 600, color: "#2D6A4F" }}>
              {stat.num}
            </div>
            <div style={{ fontSize: "16px", color: "#4A6572", marginTop: "3px" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── TRUST BADGES ── */}
      <div style={{
        background: "#fff",
        borderBottom: "1px solid #C8E6D8",
        padding: "14px 32px",
        display: "flex",
        justifyContent: "center",
        gap: "32px",
        flexWrap: "wrap",
      }}>
        {[
          { icon: "✓",  label: "Evidence-based content"        },
          { icon: "👥", label: "Written for the 50+ lifestyle" },
          { icon: "⏱", label: "5-min reads, real results"     },
          { icon: "🚫", label: "No fluff, no ads"             },
        ].map((b) => (
          <div key={b.label} style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "16px",
            color: "#4A6572",
            fontFamily: "Inter, sans-serif",
          }}>
            <span style={{ color: "#2D6A4F" }}>{b.icon}</span>
            {b.label}
          </div>
        ))}
      </div>

      {/* ── FEATURED ARTICLES ── */}
      <section style={{ padding: "64px 32px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{
          fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px",
          textTransform: "uppercase", color: "#2D6A4F",
          marginBottom: "8px", fontFamily: "Inter, sans-serif",
        }}>
          Latest articles
        </div>
        <h2 style={{
          fontFamily: "Inter, sans-serif", fontSize: "28px",
          fontWeight: 600, color: "#2D3436", marginBottom: "8px",
        }}>
          What we cover
        </h2>
        <p style={{
          fontSize: "17px", color: "#4A6572", lineHeight: 1.75,
          marginBottom: "40px", fontFamily: "Inter, sans-serif",
        }}>
          Three categories built around what matters most after 50.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}
          className="cards-grid"
        >
          {[
            {
              img: "/nutrition-bowl.jpg",
              category: "Nutrition & Diet",
              categoryColor: "#2D6A4F",
              title: "Best protein sources for muscle retention after 50",
              desc: "Why protein needs increase with age and which foods deliver the most without excess calories.",
              href: "/blog/best-protein-sources-after-50",
            },
            {
              img: "/hero-running.jpg",
              category: "Exercise & Fitness",
              categoryColor: "#E07A3A",
              title: "The 20-minute morning routine that actually works",
              desc: "A low-impact daily routine designed for joints, balance, and energy — no gym required.",
              href: "/blog/20-minute-morning-routine",
            },
            {
              img: "/recipes-salad.jpg",
              category: "Healthy Recipes",
              categoryColor: "#2D6A4F",
              title: "5 high-fiber dinner recipes under 500 calories",
              desc: "Quick, satisfying meals that support digestion and help manage weight without feeling deprived.",
              href: "/blog/high-fiber-dinner-recipes",
            },
          ].map((card, i) => (
            <Link key={i} href={card.href} style={{ textDecoration: "none" }}>
              <div style={{
                borderRadius: "10px", overflow: "hidden",
                background: "#fff",
                border: "0.5px solid #74C69D",
                boxShadow: "0 1px 3px rgba(45,106,79,0.08)",
              }}>
                <div style={{ height: "180px", overflow: "hidden", background: "#C8E6D8" }}>
                  <img
                    src={card.img}
                    alt={card.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "18px 20px 20px" }}>
                  <div style={{
                    fontSize: "12px", fontWeight: 600, letterSpacing: "1px",
                    textTransform: "uppercase", color: card.categoryColor,
                    fontFamily: "Inter, sans-serif", marginBottom: "8px",
                  }}>
                    {card.category}
                  </div>
                  <h3 style={{
                    fontFamily: "Inter, sans-serif", fontSize: "16px",
                    fontWeight: 600, color: "#2D3436", lineHeight: 1.4, marginBottom: "10px",
                  }}>
                    {card.title}
                  </h3>
                  <p style={{
                    fontFamily: "Inter, sans-serif", fontSize: "16px",
                    color: "#4A6572", lineHeight: 1.65, marginBottom: "14px",
                  }}>
                    {card.desc}
                  </p>
                  <span style={{
                    fontSize: "16px", fontWeight: 600,
                    color: card.categoryColor, fontFamily: "Inter, sans-serif",
                  }}>
                    Read article →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "64px 32px", background: "#F0FAF5" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{
            fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px",
            textTransform: "uppercase", color: "#2D6A4F",
            marginBottom: "8px", fontFamily: "Inter, sans-serif",
          }}>
            What readers say
          </div>
          <h2 style={{
            fontFamily: "Inter, sans-serif", fontSize: "28px",
            fontWeight: 600, color: "#2D3436", marginBottom: "8px",
          }}>
            Stories from our community
          </h2>
          <p style={{
            fontSize: "17px", color: "#4A6572", lineHeight: 1.75,
            marginBottom: "40px", fontFamily: "Inter, sans-serif",
          }}>
            Real people, real results — no before/after gimmicks.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "22px" }}
            className="testimonials-grid"
          >
            {[
              {
                img: "/yoga-garden.jpg", name: "Donna M.", age: "Age 58, Texas",
                text: "Finally a fitness site that talks to me like an adult. No extreme workouts, no impossible diets — just honest, useful advice.",
              },
              {
                img: "/exercise-nordic.jpg", name: "Robert K.", age: "Age 63, Florida",
                text: "The recipes are simple and actually taste good. I've lost 12 pounds in 3 months just by following the nutrition articles.",
              },
            ].map((t, i) => (
              <div key={i} style={{
                borderRadius: "10px", overflow: "hidden",
                background: "#fff",
                border: "0.5px solid #C8E6D8",
                boxShadow: "0 1px 3px rgba(45,106,79,0.08)",
                fontFamily: "Inter, sans-serif",
              }}>
                <div style={{ height: "170px", overflow: "hidden" }}>
                  <img
                    src={t.img} alt={t.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 25%" }}
                  />
                </div>
                <div style={{ padding: "22px" }}>
                  <div style={{ color: "#E07A3A", fontSize: "18px", marginBottom: "12px" }}>★★★★★</div>
                  <p style={{
                    fontSize: "16px", lineHeight: 1.8,
                    fontStyle: "italic", color: "#3D4F58", marginBottom: "16px",
                  }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div style={{ fontSize: "16px", fontWeight: 600, color: "#2D3436" }}>{t.name}</div>
                  <div style={{ fontSize: "16px", color: "#4A6572", marginTop: "2px" }}>{t.age}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section style={{ padding: "64px 32px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{
          fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px",
          textTransform: "uppercase", color: "#2D6A4F",
          marginBottom: "8px", fontFamily: "Inter, sans-serif",
        }}>
          Browse by topic
        </div>
        <h2 style={{
          fontFamily: "Inter, sans-serif", fontSize: "28px",
          fontWeight: 600, color: "#2D3436", marginBottom: "8px",
        }}>
          Find what you need
        </h2>
        <p style={{
          fontSize: "17px", color: "#4A6572", lineHeight: 1.75,
          marginBottom: "40px", fontFamily: "Inter, sans-serif",
        }}>
          All our content, organized by category.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}
          className="cards-grid"
        >
          {[
            { href: "/nutrition", color: "#2D6A4F", label: "Nutrition & Diet",   count: "7 articles", desc: "Protein, fiber, hydration, supplements — everything about eating well after 50.", img: "/nutrition-bowl.jpg" },
            { href: "/exercise",  color: "#E07A3A", label: "Exercise & Fitness", count: "6 articles", desc: "Low-impact routines, strength training, balance, and flexibility for the 50+ body.", img: "/hero-nordic.jpg" },
            { href: "/recipes",   color: "#2D6A4F", label: "Healthy Recipes",    count: "4 articles", desc: "Quick, nutritious meals with full macro breakdowns — designed for real kitchens.", img: "/recipes-salad.jpg" },
          ].map((cat) => (
            <Link key={cat.href} href={cat.href} style={{ textDecoration: "none" }}>
              <div style={{
                borderRadius: "10px", overflow: "hidden",
                background: "#fff",
                border: "0.5px solid #74C69D",
                boxShadow: "0 1px 3px rgba(45,106,79,0.08)",
              }}>
                <div style={{ height: "155px", overflow: "hidden", position: "relative" }}>
                  <img src={cat.img} alt={cat.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(27,67,50,0.35) 0%, transparent 55%)" }} />
                </div>
                <div style={{ padding: "20px", fontFamily: "Inter, sans-serif" }}>
                  <div style={{
                    fontSize: "12px", fontWeight: 600, letterSpacing: "1px",
                    textTransform: "uppercase", color: cat.color, marginBottom: "6px",
                  }}>
                    {cat.label}
                  </div>
                  <div style={{ fontSize: "17px", fontWeight: 600, color: "#2D3436", marginBottom: "6px" }}>
                    {cat.count}
                  </div>
                  <p style={{ fontSize: "16px", lineHeight: 1.65, color: "#4A6572", marginBottom: "14px" }}>
                    {cat.desc}
                  </p>
                  <span style={{ fontSize: "16px", color: cat.color, fontWeight: 600 }}>Browse →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── KALORIX CTA ── */}
      <section style={{
        background: "#1B4332",
        padding: "52px 64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
        flexWrap: "wrap",
      }}>
        <div>
          <h3 style={{
            fontFamily: "Inter, sans-serif", fontSize: "24px",
            fontWeight: 600, color: "#74C69D", marginBottom: "10px",
          }}>
            Track your calories with Kalorix
          </h3>
          <p style={{
            fontFamily: "Inter, sans-serif", fontSize: "16px",
            color: "rgba(255,255,255,0.85)", lineHeight: 1.7, maxWidth: "420px",
          }}>
            The calorie and macro tracker built for adults 40+. Simple, clear,
            and available in English, French, and Spanish.
          </p>
        </div>
        <Link href="https://kalorix-nine.vercel.app" target="_blank" style={{
          background: "#E07A3A",
          color: "#fff",
          padding: "15px 32px",
          borderRadius: "8px",
          fontSize: "17px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}>
          Try Kalorix free →
        </Link>
      </section>

      {/* ── CSS responsive ── */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .cards-grid {
            grid-template-columns: 1fr !important;
          }
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Footer />
    </div>
  );
}

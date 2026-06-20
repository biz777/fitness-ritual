import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — fitness-ritual.com",
  description: "Get in touch with the fitness-ritual.com team.",
};

export default function ContactPage() {
  return (
    <div style={{ background: "#F8FAF9", minHeight: "100vh" }}>
      <Navbar />
      <section style={{
        background: "linear-gradient(135deg, #081C15 0%, #1B4332 50%, #2D6A4F 100%)",
        padding: "64px 32px", textAlign: "center",
      }}>
        <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "14px", fontFamily: "Arial, sans-serif" }}>
          Get in touch
        </div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "42px", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>
          Contact us
        </h1>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto" }}>
          Questions, feedback, or just want to say hello? We&apos;d love to hear&nbsp;from&nbsp;you.
        </p>
      </section>

      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "56px 32px" }}>
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}

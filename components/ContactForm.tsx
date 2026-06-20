"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ firstName: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setFormData({ firstName: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    fontSize: "16px",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #D8E2DC",
    borderRadius: "8px",
    marginBottom: "20px",
    outline: "none",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "block",
    fontSize: "15px",
    fontWeight: 600,
    color: "#2D6A4F",
    marginBottom: "8px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "560px", margin: "0 auto" }}>
      <label style={labelStyle} htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        required
        value={formData.firstName}
        onChange={handleChange}
        style={inputStyle}
      />

      <label style={labelStyle} htmlFor="email">Email address</label>
      <input
        id="email"
        name="email"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
        style={inputStyle}
      />

      <label style={labelStyle} htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        required
        rows={6}
        value={formData.message}
        onChange={handleChange}
        style={{ ...inputStyle, resize: "vertical" as const }}
      />

      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          background: "#E07A3A",
          color: "#fff",
          border: "none",
          borderRadius: "999px",
          padding: "14px 36px",
          fontSize: "16px",
          fontWeight: 600,
          fontFamily: "Arial, sans-serif",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          opacity: status === "loading" ? 0.7 : 1,
        }}
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>

      {status === "success" && (
        <p style={{ color: "#2D6A4F", marginTop: "16px", fontFamily: "Arial, sans-serif" }}>
          Thanks! Your message has been sent. We&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "#C0392B", marginTop: "16px", fontFamily: "Arial, sans-serif" }}>
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}

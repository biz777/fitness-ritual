import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { firstName, email, message } = await request.json();

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "fitness-ritual.com <onboarding@resend.dev>",
        to: "contact@fitness-ritual.com",
        reply_to: email,
        subject: `New contact form message from ${firstName}`,
        text: `From: ${firstName} (${email})\n\n${message}`,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Resend API error:", errorData);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ status: "ok" });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

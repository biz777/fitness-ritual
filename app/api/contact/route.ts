import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, email, message } = await request.json();

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "fitness-ritual.com <onboarding@resend.dev>",
      to: "contact@fitness-ritual.com",
      replyTo: email,
      subject: `New contact form message from ${firstName}`,
      text: `From: ${firstName} (${email})\n\n${message}`,
    });

    return NextResponse.json({ status: "ok" });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, email, message, website } = await request.json();

    // Honeypot : un humain ne remplit jamais ce champ (invisible côté formulaire).
    // S'il est rempli, c'est un bot — on répond "succès" sans rien envoyer.
    if (website) {
      return Response.json({ success: true });
    }

    if (!firstName || !email || !message) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'contact@fitness-ritual.com',
      to: ['daousa777@gmail.com'],
      replyTo: email,
      subject: `New message from ${firstName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (err) {
    console.error('Server error:', err);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

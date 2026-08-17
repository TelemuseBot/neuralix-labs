import { NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  message: string;
  // honeypot field - real users never fill this in
  website?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: ContactPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  // Honeypot spam protection: bots fill hidden fields, humans never see them.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const errors: Record<string, string> = {};

  if (!body.name || body.name.trim().length < 2) {
    errors.name = 'Enter your name.';
  }
  if (!body.email || !EMAIL_RE.test(body.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!body.projectType) {
    errors.projectType = 'Select a project type.';
  }
  if (!body.budget) {
    errors.budget = 'Select a budget range.';
  }
  if (!body.message || body.message.trim().length < 10) {
    errors.message = 'Tell us a bit more — at least 10 characters.';
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // --- Email delivery integration point ---
  // Not wired up yet. To connect a real provider (e.g. Resend, Postmark,
  // SendGrid), set an API key as an environment variable (e.g.
  // RESEND_API_KEY) and send the message here. Never hardcode a key in
  // this file. Example:
  //
  //   if (process.env.RESEND_API_KEY) {
  //     await fetch('https://api.resend.com/emails', {
  //       method: 'POST',
  //       headers: {
  //         Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         from: 'Neuralix Labs <contact@neuralixlabs.com>',
  //         to: 'careers@neuralixlabs.in',
  //         subject: `New inquiry from ${body.name}`,
  //         text: body.message,
  //       }),
  //     });
  //   }

  if (!process.env.RESEND_API_KEY) {
    console.log('[contact] No email provider configured. Submission:', {
      name: body.name,
      email: body.email,
      company: body.company,
      projectType: body.projectType,
      budget: body.budget,
    });
  }

  return NextResponse.json({ ok: true });
}

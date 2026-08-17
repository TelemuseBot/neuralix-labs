import { NextResponse } from 'next/server';

interface WaitlistPayload {
  email: string;
  product: string;
  // honeypot field - real users never fill this in
  website?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: WaitlistPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  // Honeypot spam protection
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const errors: Record<string, string> = {};

  if (!body.email || !EMAIL_RE.test(body.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!body.product) {
    errors.product = 'Missing product reference.';
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // --- Email delivery integration point ---
  // Not wired up yet. Connect a provider (e.g. Resend) using an env var
  // API key, the same way as app/api/contact/route.ts.
  if (!process.env.RESEND_API_KEY) {
    console.log('[waitlist] No email provider configured. Signup:', {
      email: body.email,
      product: body.product,
    });
  }

  return NextResponse.json({ ok: true });
}

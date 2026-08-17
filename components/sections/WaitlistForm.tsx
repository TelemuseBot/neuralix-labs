'use client';

import { useState, FormEvent } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function WaitlistForm({
  product,
  productName,
}: {
  product: string;
  productName: string;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, product }),
      });

      if (res.status === 422) {
        setStatus('error');
        setError('Enter a valid email address.');
        return;
      }
      if (!res.ok) throw new Error('Request failed');

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-start gap-2.5 rounded-xl border border-wire/30 bg-wire/5 px-4 py-3.5">
        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-wire" />
        <p className="text-[13.5px] leading-relaxed text-ink-secondary">
          You&rsquo;re on the list. We&rsquo;ll email you the moment{' '}
          {productName} is ready to show.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          placeholder="you@email.com"
          className="field-input flex-1"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary justify-center whitespace-nowrap disabled:opacity-60"
        >
          {status === 'loading' ? 'Joining…' : 'Notify me'}
          {status !== 'loading' && <ArrowRight size={15} />}
        </button>
      </div>
      {status === 'error' && error && (
        <p className="flex items-center gap-1.5 text-[12.5px] text-red-400">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </form>
  );
}

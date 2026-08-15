'use client';

import { useState, FormEvent } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const projectTypes = [
  'AI product',
  'Automation / workflow',
  'Web or mobile app',
  'Something else',
];

const budgets = ['Under ₹50k', '₹50k – ₹2L', '₹2L – ₹10L', 'Not sure yet'];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrors({});
    setErrorMessage('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.status === 422) {
        const { errors: fieldErrors } = await res.json();
        setErrors(fieldErrors || {});
        setStatus('error');
        setErrorMessage('Please fix the highlighted fields.');
        return;
      }

      if (!res.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="card-surface flex flex-col items-start gap-3 p-10">
        <CheckCircle2 className="text-wire" size={28} />
        <p className="text-[16px] font-medium text-ink-primary">
          Message received.
        </p>
        <p className="text-[14px] leading-relaxed text-ink-secondary">
          We&rsquo;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-secondary mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot field, hidden from real users */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="field-input"
            aria-invalid={!!errors.name}
          />
        </Field>
        <Field label="Email" name="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="field-input"
            aria-invalid={!!errors.email}
          />
        </Field>
      </div>

      <Field label="Company (optional)" name="company">
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="field-input"
        />
      </Field>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Project type" name="projectType" error={errors.projectType}>
          <select
            id="projectType"
            name="projectType"
            defaultValue=""
            className="field-input"
            aria-invalid={!!errors.projectType}
          >
            <option value="" disabled>
              Select one
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget range" name="budget" error={errors.budget}>
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className="field-input"
            aria-invalid={!!errors.budget}
          >
            <option value="" disabled>
              Select one
            </option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Tell us what you're building." name="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="field-input resize-none"
          aria-invalid={!!errors.message}
        />
      </Field>

      {status === 'error' && errorMessage && (
        <p className="flex items-center gap-2 text-[13px] text-red-400">
          <AlertCircle size={14} /> {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary mt-2 w-full justify-center disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
        {status !== 'loading' && <ArrowRight size={15} />}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[13px] text-ink-secondary">
        {label}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1.5 text-[12.5px] text-red-400">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
}

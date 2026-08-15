import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-lx">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-surface px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-radial-signal opacity-60" />
          <div className="relative">
            <h2 className="mx-auto max-w-xl text-[32px] leading-[1.1] sm:text-[42px]">
              Have something worth building?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] text-ink-secondary">
              Tell us what you&rsquo;re building. We&rsquo;ll tell you honestly
              whether AI is the right tool for it.
            </p>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Start a conversation <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'AI products built by Neuralix Labs — from live tools to what we\'re building next.',
};

const statusStyles: Record<string, string> = {
  live: 'text-wire border-wire/30 bg-wire/5',
  building: 'text-signal-soft border-signal/30 bg-signal/5',
  next: 'text-ink-tertiary border-border bg-transparent',
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Software with a point of view."
        description="Each product starts from a real problem we wanted solved, not a feature we thought would be impressive."
      />

      <section className="hairline py-16 lg:py-20">
        <div className="container-lx grid grid-cols-1 gap-5 lg:grid-cols-2">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="card-surface group flex flex-col justify-between p-8"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-widen text-ink-tertiary">
                    {p.category}
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widen ${statusStyles[p.status]}`}
                  >
                    {p.statusLabel}
                  </span>
                </div>
                <h2 className="mt-5 text-[22px] font-medium tracking-tighter text-ink-primary">
                  {p.name}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-secondary">
                  {p.description}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-1.5 text-[13px] text-ink-primary opacity-70 transition-opacity group-hover:opacity-100">
                View product <ArrowUpRight size={14} />
              </div>
            </Link>
          ))}

          <div className="card-surface flex flex-col justify-center p-8 border-dashed">
            <span className="font-mono text-[11px] uppercase tracking-widen text-ink-tertiary">
              Coming next
            </span>
            <p className="mt-4 text-[14px] leading-relaxed text-ink-secondary">
              We build in the open, one product at a time. What&rsquo;s next
              hasn&rsquo;t been named yet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

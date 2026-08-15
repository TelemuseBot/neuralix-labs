import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { products } from '@/data/products';

const statusStyles: Record<string, string> = {
  live: 'text-wire border-wire/30 bg-wire/5',
  building: 'text-signal-soft border-signal/30 bg-signal/5',
  next: 'text-ink-tertiary border-border bg-transparent',
};

export default function FeaturedProducts() {
  return (
    <section className="hairline py-20 lg:py-28">
      <div className="container-lx">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-lg">
            <p className="eyebrow mb-4">Products we&rsquo;re building</p>
            <h2 className="text-[34px] leading-[1.08] sm:text-[42px]">
              Software with a point of view.
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden shrink-0 items-center gap-1.5 text-[13.5px] text-ink-secondary hover:text-ink-primary sm:flex"
          >
            View all products <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
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
                <h3 className="mt-5 text-[22px] font-medium tracking-tighter text-ink-primary">
                  {p.name}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-secondary">
                  {p.description}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-1.5 text-[13px] text-ink-primary opacity-70 transition-opacity group-hover:opacity-100">
                View product <ArrowUpRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

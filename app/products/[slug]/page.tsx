import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { products } from '@/data/products';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

const statusStyles: Record<string, string> = {
  live: 'text-wire border-wire/30 bg-wire/5',
  building: 'text-signal-soft border-signal/30 bg-signal/5',
  next: 'text-ink-tertiary border-border bg-transparent',
};

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid-fine bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="container-lx relative py-16 lg:py-24">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-[13px] text-ink-tertiary hover:text-ink-secondary"
          >
            <ArrowLeft size={14} /> All products
          </Link>

          <div className="mt-8 flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widen text-ink-tertiary">
              {product.category}
            </span>
            <span
              className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widen ${statusStyles[product.status]}`}
            >
              {product.statusLabel}
            </span>
          </div>

          <h1 className="mt-6 max-w-2xl text-[40px] font-semibold leading-[1.03] tracking-tightest sm:text-[56px]">
            {product.name}
          </h1>
          <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-ink-secondary">
            {product.overview}
          </p>
        </div>
      </section>

      <section className="hairline py-16 lg:py-20">
        <div className="container-lx grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Core capabilities</p>
            <ul className="flex flex-col gap-4">
              {product.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <Check size={16} className="mt-0.5 shrink-0 text-signal" />
                  <span className="text-[14.5px] leading-relaxed text-ink-secondary">
                    {c}
                  </span>
                </li>
              ))}
            </ul>

            <p className="eyebrow mb-6 mt-14">Frequently asked</p>
            <div className="flex flex-col divide-y divide-border border-t border-border">
              {product.faq.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-[14.5px] font-medium text-ink-primary">
                    {f.q}
                    <span className="text-ink-tertiary transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-secondary">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="card-surface p-8">
              <p className="eyebrow mb-5">Use cases</p>
              <ul className="flex flex-col gap-3">
                {product.useCases.map((u) => (
                  <li
                    key={u}
                    className="rounded-xl border border-border px-4 py-3 text-[13.5px] text-ink-secondary"
                  >
                    {u}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-border pt-8">
                <p className="text-[13.5px] text-ink-secondary">
                  Interested in something similar for your team?
                </p>
                <Link href="/contact" className="btn-primary mt-4 w-full justify-center">
                  Start a conversation <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

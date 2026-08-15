import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { caseStudies } from '@/data/caseStudies';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies from Neuralix Labs — real problems, shipped solutions.',
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Real problems, shipped solutions."
        description="Every project here is a working system, not a proof of concept — deployed, used, and maintained."
      />

      <section className="hairline py-16 lg:py-20">
        <div className="container-lx flex flex-col gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {caseStudies.map((c) => (
            <Link
              key={c.slug}
              href={`/work/${c.slug}`}
              className="group grid grid-cols-1 gap-4 bg-bg p-8 transition-colors duration-300 hover:bg-bg-surface sm:grid-cols-12 sm:items-center"
            >
              <div className="sm:col-span-3">
                <h2 className="text-[20px] font-medium tracking-tighter text-ink-primary">
                  {c.name}
                </h2>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widen text-ink-tertiary">
                  {c.category}
                </p>
              </div>
              <p className="text-[14px] leading-relaxed text-ink-secondary sm:col-span-7">
                {c.summary}
              </p>
              <div className="flex items-center gap-1.5 text-[13px] text-ink-primary opacity-70 transition-opacity group-hover:opacity-100 sm:col-span-2 sm:justify-end">
                Read case study <ArrowUpRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

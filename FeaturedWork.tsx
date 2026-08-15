import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';

export default function FeaturedWork() {
  return (
    <section className="hairline py-20 lg:py-28">
      <div className="container-lx">
        <p className="eyebrow mb-4">Featured work</p>
        <h2 className="max-w-lg text-[34px] leading-[1.08] sm:text-[42px]">
          Real problems, shipped solutions.
        </h2>

        <div className="mt-14 flex flex-col gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {caseStudies.map((c) => (
            <Link
              key={c.slug}
              href={`/work/${c.slug}`}
              className="group grid grid-cols-1 gap-4 bg-bg p-8 transition-colors duration-300 hover:bg-bg-surface sm:grid-cols-12 sm:items-center"
            >
              <div className="sm:col-span-3">
                <h3 className="text-[20px] font-medium tracking-tighter text-ink-primary">
                  {c.name}
                </h3>
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
      </div>
    </section>
  );
}

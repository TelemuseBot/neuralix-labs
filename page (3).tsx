import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { jobs } from '@/data/jobs';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Build what comes next with Neuralix Labs.',
};

const culture = [
  {
    title: 'Small by design',
    desc: 'We stay small enough that everyone touches real product, not just their one slice of it.',
  },
  {
    title: 'Build to learn',
    desc: 'Every project is a chance to get better at something specific — a technique, a tool, a way of thinking.',
  },
  {
    title: 'Ship, then improve',
    desc: 'We favor working software over polished plans. The feedback from something real is worth more than speculation.',
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build what comes next."
        description="We're a small studio, and we hire rarely and deliberately. Here's what it's like to build with us."
      />

      <section className="hairline py-16 lg:py-20">
        <div className="container-lx grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {culture.map((c) => (
            <div key={c.title} className="bg-bg p-8">
              <h3 className="text-[16px] font-medium tracking-tighter text-ink-primary">
                {c.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-ink-secondary">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="hairline py-16 lg:py-20">
        <div className="container-lx">
          <p className="eyebrow mb-10">Open positions</p>

          {jobs.length === 0 ? (
            <div className="card-surface flex flex-col items-start gap-4 p-10">
              <p className="text-[15px] text-ink-primary">
                We don&rsquo;t have any open roles right now.
              </p>
              <p className="max-w-md text-[14px] leading-relaxed text-ink-secondary">
                We hire rarely, and only when there&rsquo;s real work that
                needs another builder. If that changes, it&rsquo;ll show up
                here first — no need to check anywhere else.
              </p>
              <Link
                href="/contact"
                className="btn-secondary mt-2"
              >
                Reach out anyway <ArrowRight size={15} />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {jobs.map((job) => (
                <div key={job.role} className="card-surface p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="text-[18px] font-medium tracking-tighter text-ink-primary">
                      {job.role}
                    </h3>
                    <Link href="/contact" className="btn-secondary">
                      Apply <ArrowRight size={14} />
                    </Link>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-widen text-ink-tertiary">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={12} /> {job.type}
                    </span>
                    <span>{job.experience}</span>
                  </div>
                  <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-ink-secondary">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

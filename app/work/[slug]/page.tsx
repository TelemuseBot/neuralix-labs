import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, ArrowRight } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const study = caseStudies.find((c) => c.slug === params.slug);
  if (!study) return {};
  return {
    title: study.name,
    description: study.summary,
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = caseStudies.find((c) => c.slug === params.slug);
  if (!study) notFound();

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid-fine bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="container-lx relative py-16 lg:py-24">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-[13px] text-ink-tertiary hover:text-ink-secondary"
          >
            <ArrowLeft size={14} /> All work
          </Link>

          <p className="eyebrow mb-6 mt-8">{study.category}</p>
          <h1 className="max-w-2xl text-[40px] font-semibold leading-[1.03] tracking-tightest sm:text-[56px]">
            {study.name}
          </h1>
          <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-ink-secondary">
            {study.summary}
          </p>

          {study.links && (
            <div className="mt-8 flex flex-wrap gap-4">
              {study.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-secondary"
                >
                  {l.label} <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="hairline py-16 lg:py-20">
        <div className="container-lx grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-12 lg:col-span-8">
            <div>
              <p className="eyebrow mb-4">The challenge</p>
              <p className="max-w-2xl text-[15px] leading-relaxed text-ink-secondary">
                {study.challenge}
              </p>
            </div>
            <div>
              <p className="eyebrow mb-4">The approach</p>
              <p className="max-w-2xl text-[15px] leading-relaxed text-ink-secondary">
                {study.approach}
              </p>
            </div>
            <div>
              <p className="eyebrow mb-4">The result</p>
              <p className="max-w-2xl text-[15px] leading-relaxed text-ink-secondary">
                {study.result}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="card-surface p-8">
              <p className="eyebrow mb-5">Technology</p>
              <ul className="flex flex-wrap gap-2">
                {study.technology.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-widen text-ink-tertiary"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-lx">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-surface px-8 py-14 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-radial-signal opacity-60" />
            <div className="relative">
              <h2 className="mx-auto max-w-md text-[28px] leading-[1.1] sm:text-[34px]">
                Have a similar problem to solve?
              </h2>
              <Link href="/contact" className="btn-primary mt-7 inline-flex">
                Start a conversation <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

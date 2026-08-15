import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { insights } from '@/data/insights';
import { readingTime, formatDate } from '@/lib/insights';

export async function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = insights.find((i) => i.slug === params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
    },
  };
}

const articleSchema = (article: (typeof insights)[number]) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.excerpt,
  author: { '@type': 'Organization', name: article.author },
  datePublished: article.date,
});

export default function InsightArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = insights.find((i) => i.slug === params.slug);
  if (!article) notFound();

  const related = insights
    .filter((i) => i.slug !== article.slug && i.category === article.category)
    .slice(0, 2);

  const fallbackRelated =
    related.length > 0
      ? related
      : insights.filter((i) => i.slug !== article.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema(article)),
        }}
      />

      <article className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid-fine bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="container-lx relative py-16 lg:py-24">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-[13px] text-ink-tertiary hover:text-ink-secondary"
          >
            <ArrowLeft size={14} /> All insights
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-widen text-ink-tertiary">
            <span className="text-signal-soft">{article.category}</span>
            <span>{formatDate(article.date)}</span>
            <span>{readingTime(article.content)} min read</span>
            <span>{article.author}</span>
          </div>

          <h1 className="mt-6 max-w-2xl text-[34px] font-semibold leading-[1.08] tracking-tightest sm:text-[46px]">
            {article.title}
          </h1>
        </div>
      </article>

      <section className="hairline py-16 lg:py-20">
        <div className="container-lx">
          <div className="mx-auto flex max-w-2xl flex-col gap-6">
            {article.content.map((para, i) => (
              <p key={i} className="text-[15.5px] leading-relaxed text-ink-secondary">
                {para}
              </p>
            ))}
          </div>

          <div className="mx-auto mt-10 flex max-w-2xl flex-wrap gap-2">
            {article.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-widen text-ink-tertiary"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-lx">
          <p className="eyebrow mb-8">Related</p>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {fallbackRelated.map((r) => (
              <Link
                key={r.slug}
                href={`/insights/${r.slug}`}
                className="group bg-bg p-7"
              >
                <span className="font-mono text-[11px] uppercase tracking-widen text-signal-soft">
                  {r.category}
                </span>
                <h3 className="mt-3 text-[16px] font-medium tracking-tighter text-ink-primary">
                  {r.title}
                </h3>
                <div className="mt-4 flex items-center gap-1.5 text-[13px] text-ink-tertiary opacity-70 transition-opacity group-hover:opacity-100">
                  Read article <ArrowUpRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

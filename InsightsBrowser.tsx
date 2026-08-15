'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search, ArrowUpRight } from 'lucide-react';
import { insights, InsightCategory } from '@/data/insights';
import { readingTime, formatDate } from '@/lib/insights';

const categories: (InsightCategory | 'All')[] = [
  'All',
  'AI',
  'Engineering',
  'Product',
  'Research',
  'Tutorials',
  'Company',
];

export default function InsightsBrowser() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<InsightCategory | 'All'>('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return insights
      .filter((i) => category === 'All' || i.category === category)
      .filter((i) => {
        if (!q) return true;
        return (
          i.title.toLowerCase().includes(q) ||
          i.excerpt.toLowerCase().includes(q) ||
          i.tags.some((t) => t.toLowerCase().includes(q))
        );
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search
            size={15}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-tertiary"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search insights"
            aria-label="Search insights"
            className="field-input pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widen transition-colors ${
                category === c
                  ? 'border-signal/40 bg-signal/10 text-signal-soft'
                  : 'border-border text-ink-tertiary hover:text-ink-secondary'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col divide-y divide-border border-t border-border">
        {filtered.length === 0 && (
          <p className="py-10 text-[14px] text-ink-tertiary">
            No articles match &ldquo;{query}&rdquo;. Try a different search or
            category.
          </p>
        )}

        {filtered.map((article) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="group grid grid-cols-1 gap-3 py-7 sm:grid-cols-12 sm:items-center sm:gap-6"
          >
            <div className="sm:col-span-2">
              <span className="font-mono text-[11px] uppercase tracking-widen text-signal-soft">
                {article.category}
              </span>
            </div>
            <div className="sm:col-span-7">
              <h2 className="text-[17px] font-medium tracking-tighter text-ink-primary">
                {article.title}
              </h2>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-secondary">
                {article.excerpt}
              </p>
            </div>
            <div className="flex items-center justify-between gap-3 font-mono text-[11px] text-ink-tertiary sm:col-span-3 sm:justify-end">
              <span>{formatDate(article.date)}</span>
              <span>{readingTime(article.content)} min read</span>
              <ArrowUpRight
                size={14}
                className="hidden text-ink-tertiary opacity-0 transition-opacity group-hover:opacity-100 sm:block"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

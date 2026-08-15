import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { solutions } from '@/data/solutions';

export const metadata: Metadata = {
  title: 'AI Solutions',
  description:
    'What Neuralix Labs can build — generative AI, RAG systems, agents, computer vision, NLP, and more.',
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Solutions"
        title="What we can build for you."
        description="Not every problem needs AI. These are the categories where it genuinely helps — and where we have real, hands-on experience."
      />

      <section className="hairline py-16 lg:py-20">
        <div className="container-lx grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {solutions.map((s) => (
            <div key={s.name} className="bg-bg p-8">
              <h2 className="text-[17px] font-medium tracking-tighter text-ink-primary">
                {s.name}
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-secondary">
                {s.description}
              </p>
              <ul className="mt-5 flex flex-col gap-1.5">
                {s.examples.map((e) => (
                  <li
                    key={e}
                    className="text-[12.5px] text-ink-tertiary before:mr-2 before:content-['—']"
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-lx">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-surface px-8 py-14 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-radial-signal opacity-60" />
            <div className="relative">
              <h2 className="mx-auto max-w-md text-[28px] leading-[1.1] sm:text-[34px]">
                Not sure which of these fits?
              </h2>
              <p className="mx-auto mt-3 max-w-sm text-[14.5px] text-ink-secondary">
                Tell us the problem, not the solution. We&rsquo;ll help you
                figure out the rest.
              </p>
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

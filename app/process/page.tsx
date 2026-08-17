import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { processSteps } from '@/data/engineering';

export const metadata: Metadata = {
  title: 'Process',
  description: 'How Neuralix Labs takes a project from a problem statement to a shipped, working system.',
};

const detail: Record<string, string> = {
  Understand:
    'Before any code or model gets discussed, we ask what the actual problem is \u2014 who has it, how they deal with it today, and what a good outcome looks like. Most bad projects start from a solution looking for a problem. We start from the other end.',
  Research:
    'Not every problem needs a large model, and not every automation needs AI at all. We look at the simplest approach that actually solves it \u2014 sometimes that\u2019s a classical ML model, sometimes an LLM pipeline, sometimes a rules-based system with no AI in it.',
  Design:
    'The system architecture and the user-facing interface get designed together, not handed off in sequence. A model that returns the right answer in the wrong shape is still a broken product.',
  Build:
    'We build in working increments \u2014 something runnable at every stage, not one big reveal at the end. This means you can see progress and redirect early if something needs to change, instead of finding out at the final demo.',
  Evolve:
    'Launch is treated as the start of the real feedback loop, not the finish line. We watch how a system is actually used and iterate from there \u2014 that\u2019s where most of the meaningful improvement happens.',
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="How a project actually moves."
        description="Five stages, in order, every time \u2014 from understanding the problem to a system that keeps improving after launch."
      />

      <section className="hairline py-16 lg:py-20">
        <div className="container-lx flex flex-col divide-y divide-border border-t border-border">
          {processSteps.map((s) => (
            <div
              key={s.n}
              className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-12 sm:gap-8"
            >
              <div className="sm:col-span-2">
                <span className="font-mono text-[13px] text-signal-soft">{s.n}</span>
                <h2 className="mt-2 text-[20px] font-medium tracking-tighter text-ink-primary">
                  {s.title}
                </h2>
              </div>
              <p className="max-w-2xl text-[14.5px] leading-relaxed text-ink-secondary sm:col-span-10">
                {detail[s.title] ?? s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-lx card-surface flex flex-col items-start gap-5 p-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-[22px] font-medium tracking-tighter text-ink-primary">
              Ready to start with step one?
            </h2>
            <p className="mt-2 max-w-md text-[14px] leading-relaxed text-ink-secondary">
              Tell us the problem \u2014 we&rsquo;ll take it from &ldquo;Understand&rdquo; onward.
            </p>
          </div>
          <Link href="/contact" className="btn-primary whitespace-nowrap">
            Start a conversation <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}

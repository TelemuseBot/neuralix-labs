import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to the questions people usually ask before working with Neuralix Labs.',
};

const groups: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: 'Working together',
    items: [
      {
        q: 'Do you work with startups and individuals, or only companies?',
        a: 'Both. Most of our work so far has been early-stage founders, students, and small teams who need something built end to end without hiring a full engineering team first.',
      },
      {
        q: 'What\u2019s your typical timeline?',
        a: 'It depends on scope. A focused single-feature build can ship in 1\u20132 weeks. A full product \u2014 model, API, frontend, deployment \u2014 usually runs 3\u20136 weeks. We give a real timeline after understanding the scope, not a generic estimate upfront.',
      },
      {
        q: 'Do you offer maintenance after launch?',
        a: 'Yes, on a retainer basis. Launch is treated as a starting point, not an end date \u2014 see the Pricing page for how retainers work.',
      },
      {
        q: 'How do we start?',
        a: 'Fill out the contact form with what you\u2019re building. We reply personally, usually within a day or two, and the first conversation is just to understand the problem \u2014 no commitment.',
      },
    ],
  },
  {
    category: 'What we build',
    items: [
      {
        q: 'Do you only build AI products, or regular software too?',
        a: 'Both. AI is the specialty, but a lot of AI products fail because the engineering underneath \u2014 the API, the data pipeline, the frontend \u2014 is weak. We build the whole system, not just the model.',
      },
      {
        q: 'Will you tell us if AI isn\u2019t actually the right fit?',
        a: 'Yes. If a rules-based system or a simpler tool solves the problem better than a model would, we\u2019ll say so, even if that means a smaller project.',
      },
      {
        q: 'Can you take over or extend an existing codebase?',
        a: 'Yes. We regularly build on top of existing pipelines and codebases rather than starting from zero \u2014 it\u2019s usually cheaper and faster for you.',
      },
    ],
  },
  {
    category: 'Process',
    items: [
      {
        q: 'How involved do we need to be during the build?',
        a: 'As much or as little as you want. Some clients want weekly check-ins, others just want the finished, working thing. We adapt to what\u2019s useful for you.',
      },
      {
        q: 'Do we own the code and IP after the project?',
        a: 'Yes, full ownership transfers on project completion and final payment, as agreed in the engagement terms.',
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions people usually ask."
        description="If something isn't answered here, it's faster to just ask directly."
      />

      <section className="hairline py-16 lg:py-20">
        <div className="container-lx flex flex-col gap-14">
          {groups.map((g) => (
            <div key={g.category}>
              <p className="eyebrow mb-6">{g.category}</p>
              <div className="flex flex-col divide-y divide-border border-t border-border">
                {g.items.map((f) => (
                  <details key={f.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-ink-primary">
                      {f.q}
                      <span className="shrink-0 text-ink-tertiary transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-ink-secondary">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-lx card-surface flex flex-col items-start gap-5 p-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-[22px] font-medium tracking-tighter text-ink-primary">
              Still have a question?
            </h2>
            <p className="mt-2 max-w-md text-[14px] leading-relaxed text-ink-secondary">
              Ask us directly \u2014 we reply personally.
            </p>
          </div>
          <Link href="/contact" className="btn-primary whitespace-nowrap">
            Contact us <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}

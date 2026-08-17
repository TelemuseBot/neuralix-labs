import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'How Neuralix Labs prices engagements \u2014 fixed project, retainer, or hourly, depending on what you actually need.',
};

const models = [
  {
    name: 'Fixed project',
    tagline: 'Best when the scope is clear',
    desc: 'You know what you need built. We scope it, quote a fixed price for the full build, and deliver against that scope \u2014 no surprise invoices.',
    points: [
      'One clear price, agreed before work starts',
      'Defined deliverables and milestones',
      'Best for a product, MVP, or feature build with a known end state',
    ],
  },
  {
    name: 'Retainer',
    tagline: 'Best for ongoing work',
    desc: 'A fixed monthly commitment for continuous engineering \u2014 new features, iteration, maintenance \u2014 without re-negotiating scope every time something changes.',
    points: [
      'Predictable monthly cost',
      'Priority turnaround on requests',
      'Best for products already live that need to keep evolving',
    ],
  },
  {
    name: 'Hourly',
    tagline: 'Best for scoping or short work',
    desc: 'For work that\u2019s too undefined for a fixed quote, or too small to justify a retainer \u2014 audits, advisory, or a short, well-bounded task.',
    points: [
      'Billed for actual time spent',
      'No long-term commitment',
      'Best for a scoping call, a code review, or a small fix',
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="How we price engagements."
        description="No published rate card \u2014 pricing depends on scope, timeline, and what already exists. Here\u2019s how we structure it and how to figure out which model fits."
      />

      <section className="hairline py-16 lg:py-20">
        <div className="container-lx grid grid-cols-1 gap-5 lg:grid-cols-3">
          {models.map((m) => (
            <div key={m.name} className="card-surface flex flex-col p-8">
              <p className="eyebrow mb-2">{m.tagline}</p>
              <h2 className="text-[22px] font-medium tracking-tighter text-ink-primary">
                {m.name}
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-ink-secondary">
                {m.desc}
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {m.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <Check size={15} className="mt-0.5 shrink-0 text-signal" />
                    <span className="text-[13.5px] leading-relaxed text-ink-secondary">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="hairline py-16 lg:py-20">
        <div className="container-lx grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">How we quote</p>
            <h2 className="max-w-md text-[28px] leading-[1.15] tracking-tighter sm:text-[34px]">
              What actually decides the number.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="flex flex-col divide-y divide-border border-t border-border">
              {[
                {
                  q: 'Scope',
                  a: 'How well-defined the end result is. A clear spec quotes faster and tighter than an open-ended idea.',
                },
                {
                  q: 'Complexity',
                  a: 'A static site and a production ML pipeline with an API and CI aren\u2019t priced the same way \u2014 the engineering underneath matters more than the surface.',
                },
                {
                  q: 'Timeline',
                  a: 'A compressed deadline costs more than a normal one, the same way it would with any studio.',
                },
                {
                  q: 'What exists already',
                  a: 'Building on top of an existing codebase or data pipeline is cheaper than starting from zero \u2014 we quote accordingly.',
                },
              ].map((row, i) => (
                <div
                  key={row.q}
                  className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                >
                  <span className="font-mono text-[12px] text-ink-tertiary sm:col-span-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[15px] font-medium tracking-tighter text-ink-primary sm:col-span-3">
                    {row.q}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-ink-secondary sm:col-span-8">
                    {row.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-lx card-surface flex flex-col items-start gap-5 p-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-[22px] font-medium tracking-tighter text-ink-primary">
              Not sure which model fits?
            </h2>
            <p className="mt-2 max-w-md text-[14px] leading-relaxed text-ink-secondary">
              Tell us what you&rsquo;re building. We&rsquo;ll tell you honestly
              which pricing model makes sense \u2014 and a rough number \u2014 before
              anything is signed.
            </p>
          </div>
          <Link href="/contact" className="btn-primary whitespace-nowrap">
            Get a quote <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}

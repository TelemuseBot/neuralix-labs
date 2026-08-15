import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Neuralix Labs is an AI engineering studio building intelligent software, one real problem at a time.',
};

const beliefs = [
  {
    title: 'Research before implementation',
    desc: 'We spend time understanding a problem before we decide a model is even the right tool for it.',
  },
  {
    title: 'Engineering over hype',
    desc: 'A working system beats an impressive demo. We optimize for what survives contact with real usage.',
  },
  {
    title: 'Useful AI over gimmicks',
    desc: 'If a feature exists to say "we have AI," we cut it. If it removes real friction, we keep it.',
  },
  {
    title: 'Human-centered design',
    desc: 'The model is the engine, not the product. The product is what a person experiences using it.',
  },
  {
    title: 'Continuous iteration',
    desc: 'We treat every launch as a first draft. The real signal shows up after people start using something.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We build technology that disappears into the experience."
        description="Neuralix Labs is an AI engineering studio. We build intelligent software, AI systems, and digital products — one real problem at a time."
      />

      <section className="hairline py-16 lg:py-20">
        <div className="container-lx grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">Our philosophy</p>
            <h2 className="text-[28px] leading-[1.15] tracking-tighter sm:text-[34px]">
              &ldquo;The best technology feels simple on the surface and
              intelligently engineered underneath.&rdquo;
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-xl text-[15px] leading-relaxed text-ink-secondary">
              We started Neuralix Labs to build the kind of software we
              actually wanted to use — AI systems that solve a real problem
              instead of performing intelligence for its own sake. That means
              being honest about what a model can and can&rsquo;t do, and
              spending our effort on the engineering most AI projects skip:
              data pipelines, evaluation, and the unglamorous work of making
              something reliable in production.
            </p>
          </div>
        </div>
      </section>

      <section className="hairline py-16 lg:py-20">
        <div className="container-lx">
          <p className="eyebrow mb-10">What we believe</p>
          <div className="flex flex-col divide-y divide-border border-t border-border">
            {beliefs.map((b, i) => (
              <div
                key={b.title}
                className="grid grid-cols-1 gap-3 py-7 sm:grid-cols-12 sm:items-baseline sm:gap-6"
              >
                <span className="font-mono text-[12px] text-ink-tertiary sm:col-span-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[16px] font-medium tracking-tighter text-ink-primary sm:col-span-3">
                  {b.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-ink-secondary sm:col-span-8">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-lx grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="eyebrow mb-3">Who we are</p>
            <p className="text-[14px] leading-relaxed text-ink-secondary">
              A small, AI-native engineering studio — directing modern tools
              to build and debug end-to-end products, and treating that as a
              legitimate, marketable engineering skill.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">What we build</p>
            <p className="text-[14px] leading-relaxed text-ink-secondary">
              AI products, intelligent automation, and the engineering
              underneath both — from a single model to a full production
              system.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Why we build</p>
            <p className="text-[14px] leading-relaxed text-ink-secondary">
              Because most AI projects stop at the demo. We&rsquo;re
              interested in what happens after — when real people depend on
              something working.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

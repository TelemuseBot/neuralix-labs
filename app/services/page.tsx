import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import { engineeringGroups, processSteps } from '@/data/engineering';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Engineering capabilities at Neuralix Labs — frontend, backend, AI/ML, cloud, and the process behind how we build.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Engineering at Neuralix."
        description="The technology we actually use, and the process behind how we use it — no logo wall, no fabricated partnerships."
      />

      <section className="hairline py-16 lg:py-20">
        <div className="container-lx">
          <p className="eyebrow mb-10">Capabilities</p>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {engineeringGroups.map((g) => (
              <div key={g.category} className="bg-bg p-7">
                <h3 className="text-[15px] font-medium tracking-tighter text-ink-primary">
                  {g.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1.5 font-mono text-[11px] text-ink-tertiary transition-colors hover:border-signal/40 hover:text-signal-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline py-16 lg:py-20">
        <div className="container-lx">
          <p className="eyebrow mb-4">Process</p>
          <h2 className="max-w-lg text-[34px] leading-[1.08] sm:text-[42px]">
            Think deeply. Build boldly. Ship intelligently.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-0 sm:grid-cols-5">
            {processSteps.map((s, i) => (
              <div
                key={s.n}
                className={`border-t border-border py-6 pr-6 sm:border-t-0 sm:border-l ${
                  i === 0 ? 'sm:border-l-0' : ''
                }`}
              >
                <span className="font-mono text-[12px] text-signal-soft">{s.n}</span>
                <h3 className="mt-4 text-[16px] font-medium tracking-tighter text-ink-primary">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-secondary">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

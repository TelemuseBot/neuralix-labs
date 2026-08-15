const pillars = [
  {
    n: '01',
    title: 'AI Products',
    desc: 'End-to-end products built around a model — from training and evaluation to the interface people actually use.',
  },
  {
    n: '02',
    title: 'Intelligent Automation',
    desc: 'Workflows that remove repetitive work by reasoning over data, not just moving it between systems.',
  },
  {
    n: '03',
    title: 'AI Engineering',
    desc: 'The unglamorous half of AI: data pipelines, retrieval systems, evaluation, and deployment that holds up in production.',
  },
  {
    n: '04',
    title: 'Digital Platforms',
    desc: 'Full-stack software — web apps, APIs, and infrastructure — engineered to scale with real usage.',
  },
];

export default function WhatWeBuild() {
  return (
    <section className="hairline py-20 lg:py-28">
      <div className="container-lx">
        <div className="max-w-xl">
          <p className="eyebrow mb-4">What we build</p>
          <h2 className="text-[34px] leading-[1.08] sm:text-[42px]">
            We build technology that thinks further.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.n}
              className="group relative bg-bg p-8 transition-colors duration-300 hover:bg-bg-surface"
            >
              <span className="font-mono text-[12px] text-ink-tertiary">{p.n}</span>
              <h3 className="mt-6 text-[20px] font-medium tracking-tighter text-ink-primary">
                {p.title}
              </h3>
              <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-ink-secondary">
                {p.desc}
              </p>
              <div className="mt-6 h-px w-8 bg-border transition-all duration-300 group-hover:w-14 group-hover:bg-signal" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

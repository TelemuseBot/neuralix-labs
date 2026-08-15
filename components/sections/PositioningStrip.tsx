const capabilities = [
  'AI Engineering',
  'Generative AI',
  'Automation',
  'SaaS',
  'Cloud',
  'Data',
  'Product Engineering',
];

export default function PositioningStrip() {
  return (
    <section className="hairline py-10">
      <div className="container-lx flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <p className="max-w-md text-[15px] text-ink-secondary">
          AI systems. Intelligent products. Serious engineering.
        </p>
        <ul className="flex flex-wrap gap-2.5">
          {capabilities.map((c) => (
            <li
              key={c}
              className="rounded-full border border-border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widen text-ink-tertiary"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

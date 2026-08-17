import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="hairline py-16 lg:py-20">
      <div className="container-lx">
        <p className="eyebrow mb-10">What clients say</p>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="card-surface flex flex-col justify-between p-8">
              <p className="text-[14.5px] leading-relaxed text-ink-secondary">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                {t.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={t.logo} alt={t.company} className="h-6 w-auto opacity-80" />
                )}
                <div>
                  <p className="text-[13.5px] font-medium text-ink-primary">{t.name}</p>
                  <p className="text-[12.5px] text-ink-tertiary">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

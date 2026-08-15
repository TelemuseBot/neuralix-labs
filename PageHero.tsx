export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="container-lx relative py-16 lg:py-24">
        <p className="eyebrow animate-fade-up mb-6">{eyebrow}</p>
        <h1
          className="animate-fade-up max-w-3xl text-[38px] font-semibold leading-[1.04] tracking-tightest sm:text-[52px]"
          style={{ animationDelay: '80ms' }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="animate-fade-up mt-6 max-w-xl text-[15.5px] leading-relaxed text-ink-secondary"
            style={{ animationDelay: '160ms' }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

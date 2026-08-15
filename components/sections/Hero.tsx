import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SignalGraph from './SignalGraph';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />

      <div className="container-lx relative grid grid-cols-1 gap-4 pb-16 pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-24">
        <div className="lg:col-span-7">
          <p className="eyebrow animate-fade-up mb-6">Neuralix Labs — AI Engineering Studio</p>

          <h1
            className="animate-fade-up text-[13vw] font-semibold leading-[0.98] tracking-tightest sm:text-[64px] lg:text-[76px]"
            style={{ animationDelay: '80ms' }}
          >
            Building intelligence
            <br />
            for what comes next.
          </h1>

          <p
            className="animate-fade-up mt-7 max-w-lg text-[16.5px] leading-relaxed text-ink-secondary"
            style={{ animationDelay: '160ms' }}
          >
            Neuralix Labs builds intelligent software, AI systems, and digital
            products that turn complex problems into elegant, working
            experiences.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '240ms' }}
          >
            <Link href="/work" className="btn-primary">
              Explore our work
              <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Build with us
            </Link>
          </div>
        </div>

        <div className="relative mt-10 h-[320px] lg:col-span-5 lg:mt-0 lg:h-auto">
          <div className="absolute inset-0 rounded-3xl border border-border bg-bg-surface/40">
            <SignalGraph />
          </div>
        </div>
      </div>
    </section>
  );
}

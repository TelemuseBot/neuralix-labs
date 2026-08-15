import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="container-lx relative flex min-h-[60vh] flex-col items-start justify-center py-24">
        <p className="eyebrow mb-6">404</p>
        <h1 className="max-w-lg text-[38px] font-semibold leading-[1.05] tracking-tightest sm:text-[50px]">
          This page doesn&rsquo;t exist.
        </h1>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-secondary">
          The link might be broken, or the page may have moved. Let&rsquo;s
          get you back on track.
        </p>
        <Link href="/" className="btn-primary mt-8">
          <ArrowLeft size={15} /> Back to homepage
        </Link>
      </div>
    </section>
  );
}

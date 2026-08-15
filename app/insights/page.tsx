import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import InsightsBrowser from '@/components/sections/InsightsBrowser';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Notes on AI, engineering, and building products at Neuralix Labs.',
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes from the studio."
        description="What we're learning while building — written as we go, not polished after the fact."
      />

      <section className="hairline py-16 lg:py-20">
        <div className="container-lx">
          <InsightsBrowser />
        </div>
      </section>
    </>
  );
}

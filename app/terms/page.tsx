import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms governing the use of the Neuralix Labs website.',
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="hairline py-16 lg:py-20">
        <div className="container-lx mx-auto flex max-w-2xl flex-col gap-10">
          <p className="text-[13px] text-ink-tertiary">Last updated: August 2026</p>

          <div>
            <h2 className="text-[18px] font-medium tracking-tighter text-ink-primary">
              Acceptance of terms
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-secondary">
              By accessing this website, you agree to these terms. If you
              don&rsquo;t agree with any part of them, please don&rsquo;t use
              this site.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium tracking-tighter text-ink-primary">
              Use of content
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-secondary">
              All content on this site — including text, design, and product
              descriptions — belongs to Neuralix Labs unless otherwise noted.
              You&rsquo;re welcome to reference or link to it; reproducing it
              elsewhere without permission isn&rsquo;t.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium tracking-tighter text-ink-primary">
              Open-source projects
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-secondary">
              Where we link to open-source code (for example, on GitHub),
              that code is governed by its own license, stated in the
              relevant repository — not by these terms.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium tracking-tighter text-ink-primary">
              No warranty
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-secondary">
              This site and the information on it are provided as-is. We work
              to keep everything accurate and up to date, but we don&rsquo;t
              guarantee it&rsquo;s free of errors or always current.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium tracking-tighter text-ink-primary">
              Limitation of liability
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-secondary">
              Neuralix Labs isn&rsquo;t liable for any damages arising from
              your use of this site, to the extent permitted by law.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium tracking-tighter text-ink-primary">
              Changes
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-secondary">
              We may update these terms from time to time. The date above
              reflects the most recent revision.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium tracking-tighter text-ink-primary">
              Contact
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-secondary">
              Questions about these terms can be sent to{' '}
              <a href="mailto:careers@neuralixlabs.in" className="text-signal-soft hover:underline">
                careers@neuralixlabs.in
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

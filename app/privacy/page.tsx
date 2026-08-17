import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Neuralix Labs collects, uses, and protects your information.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="hairline py-16 lg:py-20">
        <div className="container-lx mx-auto flex max-w-2xl flex-col gap-10">
          <p className="text-[13px] text-ink-tertiary">Last updated: August 2026</p>

          <div>
            <h2 className="text-[18px] font-medium tracking-tighter text-ink-primary">
              Information we collect
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-secondary">
              When you use the contact form on this site, we collect the
              information you submit directly: your name, email address,
              company (if provided), project details, and message. We don&rsquo;t
              collect this information through any other means, and we don&rsquo;t
              use third-party trackers or analytics unless explicitly noted
              elsewhere on this site.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium tracking-tighter text-ink-primary">
              How we use it
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-secondary">
              Information submitted through the contact form is used solely
              to respond to your inquiry. We don&rsquo;t sell, rent, or share
              your information with third parties, and we don&rsquo;t use it
              for marketing without your explicit consent.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium tracking-tighter text-ink-primary">
              Cookies
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-secondary">
              This site does not use tracking or advertising cookies. Any
              analytics added in the future will be limited to
              privacy-respecting, aggregate usage data, and this policy will
              be updated accordingly.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium tracking-tighter text-ink-primary">
              Your rights
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-secondary">
              You can request access to, correction of, or deletion of any
              information you&rsquo;ve submitted to us by emailing{' '}
              <a href="mailto:careers@neuralixlabs.in" className="text-signal-soft hover:underline">
                careers@neuralixlabs.in
              </a>
              . We&rsquo;ll respond within a reasonable timeframe.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium tracking-tighter text-ink-primary">
              Changes to this policy
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-secondary">
              If this policy changes, we&rsquo;ll update this page and revise
              the date above. Continued use of this site after changes means
              you accept the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-[18px] font-medium tracking-tighter text-ink-primary">
              Contact
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-secondary">
              Questions about this policy can be sent to{' '}
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

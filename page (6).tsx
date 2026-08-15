import type { Metadata } from 'next';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/sections/ContactForm';
import { socialLinks } from '@/data/nav';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Have something worth building? Tell Neuralix Labs about it.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Have something worth building?"
        description="Tell us what you're building. We'll tell you honestly whether AI is the right tool for it."
      />

      <section className="hairline py-16 lg:py-20">
        <div className="container-lx grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="card-surface p-8">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">Direct</p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${socialLinks.email}`}
                className="card-surface flex items-center gap-3 p-5 text-[14px] text-ink-secondary hover:text-ink-primary"
              >
                <Mail size={16} /> {socialLinks.email}
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="card-surface flex items-center gap-3 p-5 text-[14px] text-ink-secondary hover:text-ink-primary"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="card-surface flex items-center gap-3 p-5 text-[14px] text-ink-secondary hover:text-ink-primary"
              >
                <Instagram size={16} /> Instagram
              </a>
            </div>

            <p className="mt-8 text-[13px] leading-relaxed text-ink-tertiary">
              We read every message and reply personally. No forms get lost,
              no auto-replies pretending to be a person.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

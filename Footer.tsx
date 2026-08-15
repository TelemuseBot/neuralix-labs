import Link from 'next/link';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import { footerNav, legalNav, socialLinks } from '@/data/nav';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hairline mt-32 bg-bg">
      <div className="container-lx grid grid-cols-2 gap-10 py-16 sm:grid-cols-3 lg:grid-cols-6">
        <div className="col-span-2 sm:col-span-3 lg:col-span-2">
          <Link
            href="/"
            className="font-display text-[15px] font-semibold tracking-tighter text-ink-primary"
          >
            NEURALIX<span className="text-signal">·</span>LABS
          </Link>
          <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-ink-tertiary">
            AI systems, intelligent products, and serious engineering.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Neuralix Labs on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-secondary hover:border-border-hover hover:text-ink-primary"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Neuralix Labs on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-secondary hover:border-border-hover hover:text-ink-primary"
            >
              <Instagram size={15} />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Email Neuralix Labs"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-secondary hover:border-border-hover hover:text-ink-primary"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>

        {Object.entries(footerNav).map(([group, links]) => (
          <div key={group}>
            <p className="eyebrow mb-4">{group}</p>
            <ul className="flex flex-col gap-3">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13.5px] text-ink-secondary hover:text-ink-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="hairline">
        <div className="container-lx flex flex-col-reverse items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-[12.5px] text-ink-tertiary">
            © {year} Neuralix Labs. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[12.5px] text-ink-tertiary hover:text-ink-secondary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

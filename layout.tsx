import type { Metadata } from 'next';
import './globals.css';
import './fonts.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// NOTE: This build environment has restricted network access, so fonts are
// loaded via fonts.css (see that file for a one-line swap back to
// next/font/google — the recommended approach once deployed to Vercel or
// any environment with normal internet access).
const fontVars = 'font-vars';

const siteUrl = 'https://neuralixlabs.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Neuralix Labs — AI Engineering Studio',
    template: '%s · Neuralix Labs',
  },
  description:
    'Neuralix Labs builds intelligent software, AI systems, and digital products — from generative AI applications to production-grade engineering.',
  keywords: [
    'Neuralix Labs',
    'AI development',
    'AI engineering',
    'Generative AI',
    'AI software development',
    'AI automation',
    'AI products',
  ],
  openGraph: {
    title: 'Neuralix Labs — AI Engineering Studio',
    description:
      'We build AI systems, intelligent products, and digital platforms — engineered, not hyped.',
    url: siteUrl,
    siteName: 'Neuralix Labs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neuralix Labs — AI Engineering Studio',
    description:
      'We build AI systems, intelligent products, and digital platforms — engineered, not hyped.',
  },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Neuralix Labs',
  url: siteUrl,
  email: 'neuralixlab@gmail.com',
  sameAs: [
    'https://www.linkedin.com/company/neuralixlabs/',
    'https://www.instagram.com/neuralixlabs',
  ],
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Neuralix Labs',
  url: siteUrl,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVars}>
      <body className="bg-bg bg-noise min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink-primary focus:text-bg focus:px-4 focus:py-2 focus:rounded-full"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

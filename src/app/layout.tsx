import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import enTranslations from '../../public/locales/en/translation.json';
import LocalizationProvider from '@/components/localization-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const metadataCopy = enTranslations.metadata;

export const metadata: Metadata = {
  metadataBase: new URL('https://humbertoham.com'),
  title: metadataCopy.title,
  description: metadataCopy.description,
  keywords: metadataCopy.keywords,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: metadataCopy.title,
    description: metadataCopy.openGraphDescription,
    url: '/',
    images: ['/images/card.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: metadataCopy.title,
    description: metadataCopy.twitterDescription,
    images: ['/images/card.png'],
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Humberto Ham',
  jobTitle: metadataCopy.jobTitle,
  url: 'https://humbertoham.com',
  sameAs: [
    'https://github.com/humbertoham',
    'https://www.linkedin.com/in/humbertohamd/',
  ],
  description: metadataCopy.structuredDescription,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <LocalizationProvider>{children}</LocalizationProvider>
      </body>
    </html>
  );
}

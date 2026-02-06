'use client';

import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useTranslation } from 'react-i18next';
import '../i18n'; // i18n sigue activo
import './globals.css';

import Nav from '@/components/nav';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();
  const [isI18nReady, setIsI18nReady] = useState(false);

  useEffect(() => {
    // Forzamos inglés, sin detección
    const init = async () => {
      await i18n.changeLanguage('en');
      setIsI18nReady(true);
    };
    init();
  }, [i18n]);

  if (!isI18nReady) {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Humberto Ham — Software Engineer</title>
        </head>
        <body className={inter.className} />
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Humberto Ham — Software Engineer & Mathematician</title>

        <meta
          name="description"
          content="Software engineer with a strong foundation in mathematics, software engineering, and system design. Focused on building reliable, scalable, and thoughtfully structured solutions."
        />

        <meta
          name="keywords"
          content="Humberto Ham, Software Engineer, Mathematics, System Design, Web Development, Automation"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Humberto Ham — Software Engineer & Mathematician" />
        <meta
          property="og:description"
          content="My work is driven by a strong foundation in mathematics, software engineering, and a deep understanding of systems."
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Humberto Ham — Software Engineer & Mathematician" />
        <meta
          name="twitter:description"
          content="Building scalable, maintainable, and logically sound software through precision and system thinking."
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Humberto Ham",
              "jobTitle": "Software Engineer",
              "description":
                "Software engineer with a strong foundation in mathematics and system design, focused on long-term reliability and clarity in software."
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

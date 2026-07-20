'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import '@/i18n';

import Footer from '@/components/footer';
import Nav from '@/components/nav';
import { getSupportedLanguage } from '@/lib/language';

interface LocalizationProviderProps {
  children: ReactNode;
}

export default function LocalizationProvider({ children }: LocalizationProviderProps) {
  const { i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const initializeLanguage = async () => {
      const browserLanguage =
        navigator.language ||
        navigator.languages?.[0] ||
        (navigator as Navigator & { userLanguage?: string }).userLanguage;
      let language = getSupportedLanguage(browserLanguage);

      try {
        await i18n.changeLanguage(language);
      } catch {
        language = 'en';
      }

      if (isMounted) {
        document.documentElement.lang = language;
        setIsReady(true);
      }
    };

    void initializeLanguage();

    return () => {
      isMounted = false;
    };
  }, [i18n]);

  if (!isReady) {
    return null;
  }

  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

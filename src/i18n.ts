import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from '../public/locales/en/translation.json';
import enErrors from '../public/locales/en/errors.json';
import enPortfolio from '../public/locales/en/portfolio.json';
import enAbout from '../public/locales/en/about.json';

const resources = {
  en: {
    translation: enTranslations,
    errors: enErrors,
    portfolio: enPortfolio,
    about: enAbout,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',          // idioma fijo por defecto
    fallbackLng: 'en',
    ns: [
      'translation',
      'errors',
      'portfolio',
      'about',
    ],
    defaultNS: 'translation',
    debug: false,
  });

export default i18n;

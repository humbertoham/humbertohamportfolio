import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from '../public/locales/en/translation.json';
import enLegalTerms from '../public/locales/en/legalTerms.json';
import enLicen from '../public/locales/en/licen.json';
import enTermsAndConditions from '../public/locales/en/termsAndConditions.json';
import enPrivacyPolicy from '../public/locales/en/privacyPolicy.json';
import enErrors from '../public/locales/en/errors.json';
import enContactForm from '../public/locales/en/contactForm.json';
import enPortfolio from '../public/locales/en/portfolio.json';
import enFAQ from '../public/locales/en/faq.json';
import enAbout from '../public/locales/en/about.json';

const resources = {
  en: {
    translation: enTranslations,
    legalTerms: enLegalTerms,
    licensing: enLicen,
    termsAndConditions: enTermsAndConditions,
    privacyPolicy: enPrivacyPolicy,
    errors: enErrors,
    contactForm: enContactForm,
    portfolio: enPortfolio,
    faq: enFAQ,
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
      'legalTerms',
      'licensing',
      'termsAndConditions',
      'privacyPolicy',
      'errors',
      'contactForm',
      'portfolio',
      'faq',
      'about',
    ],
    defaultNS: 'translation',
    debug: false,
  });

export default i18n;

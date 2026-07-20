export type SupportedLanguage = 'en' | 'es';

export const getSupportedLanguage = (language?: string): SupportedLanguage =>
  language?.toLowerCase().startsWith('es') ? 'es' : 'en';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from './ar';
import en from './en';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        ...en,
      },
    },
    ar: {
      translation: {
        ...ar,
      },
    },
  },
});

export default i18n;

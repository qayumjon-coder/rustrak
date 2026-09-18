import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ruTranslation from './locales/ru.json';
import uzTranslation from './locales/uz.json';
import enTranslation from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ruTranslation },
      uz: { translation: uzTranslation },
      en: { translation: enTranslation }
    },
    lng: 'ru', // default language
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export const languages = [
  { code: 'ru', label: 'RU' },
  { code: 'uz', label: 'UZ' },
  { code: 'en', label: 'EN' },
];

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsInEng from "../locales/en/translation.json";
import translationsInArabic from "../locales/ar/translation.json";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

// the translations
const resources = {
  en: {
    translation: translationsInEng,
  },
  ar: {
    translation: translationsInArabic,
  },
};

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources, // resources are important to load translations for the languages.
    lng: "en", // It acts as default language. When the site loads, content is shown in this language.
    debug: true,
    fallbackLng: "ar", // use de if selected language is not available
    interpolation: {
      escapeValue: false,
    },
    ns: "translation",
    defaultNS: "translation",
    react: {
      useSuspense: false,
    },
  });

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LngDetector from "i18next-browser-languagedetector";
import { enTranslations, nlTranslations } from "./locales";

export type TranslationKey = keyof typeof nlTranslations;

export const Language = {
  en: "en",
  nl: "nl-BE",
};

export const DEFAULT_LANGUAGE = Language.en;

export const getCurrentLocale = () => {
  return Language[i18n.language as keyof typeof Language];
};

i18n
  .use(LngDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: [Language.en, Language.nl],
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "lang",
      caches: ["localStorage"],
    },
    resources: {
      [Language.en]: {
        translation: enTranslations,
      },
      [Language.nl]: {
        translation: nlTranslations,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

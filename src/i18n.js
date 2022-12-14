import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

export const languageKey = "lngkey";
document.documentElement.setAttribute(
  "lang",
  localStorage.getItem(languageKey)
);

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: localStorage.getItem(languageKey),
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

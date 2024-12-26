import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // Connects i18n to React
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
        },
      },
      fr: {
        translation: {
          welcome: "Bienvenue",
        },
      },
    },
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
  });

export default i18n;

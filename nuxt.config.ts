import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxtjs/i18n"],

  i18n: {
    vueI18n: "./i18n.config.ts",
    strategy: "prefix",
    defaultLocale: "en",
    detectBrowserLanguage: {
      cookieKey: "i18n_redirected",
      redirectOn: "all",
      useCookie: true,
      alwaysRedirect: true,
    },
    locales: [
      {
        code: "en",
        name: "EN",
        language: "en-US",
        file: "en-US.json",
      },
      {
        code: "bg",
        name: "БГ",
        language: "bg-BG",
        file: "bg-BG.json",
      },
    ],
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  future: { compatibilityVersion: 4 },

  nitro: {
    output: {
      publicDir: fileURLToPath(new URL('./public', import.meta.url))
    }
  },
});

export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxtjs/i18n", "@nuxt/content"],

  i18n: {
    vueI18n: "./i18n.config.ts",
    strategy: "prefix_except_default",
    defaultLocale: "en",
    baseUrl: "/",
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

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "github-dark",
            light: "github-dark",
            dark: "github-dark",
          },
        },
      },
    },
  },

  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  future: { compatibilityVersion: 4 }
});

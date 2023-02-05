// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "Nuxt Gogo",
      meta: [
        { name: "description", content: "Nuxt 3 is wonderful!" },
        { name: "author", content: "Ogabek" },
        { name: "linkTelegram", content: "@fullstackmaster" },
      ],
      link: [{ rel: "shortcut icon", href: "/favicon.ico" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
});

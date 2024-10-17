// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: {enabled: true},
  vite: {
    server: {
      hmr: {
        protocol: "ws",
        host: "localhost",
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          implementation: require("sass"),
        },
      },
    },
  },
  app: {
    head: {
      titleTemplate: "Blog",
      meta: [
        {charset: "utf-8"},
        {name: "viewport", content: "width=device-width, initial-scale=1"},
        {hid: "description", name: "description", content: "My awesome blog"},
      ],
    },
  },
  plugins: ["~/plugins/app-components.js"],
  css: ["~/assets/scss/main.scss"],
});

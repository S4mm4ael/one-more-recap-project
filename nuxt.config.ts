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
  plugins: ["~/plugins/app-components.js"],
  css: ["~/assets/scss/main.scss"],
});

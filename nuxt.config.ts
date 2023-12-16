export default defineNuxtConfig({
  devtools: { enabled: false }, 
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/content",
  ], 
  css: ["~/assets/css/markdown.css"],
  content: {
    highlight: {
      theme: {
        default: "one-dark-pro",
        dark: "github-dark",
        sepia: "monokai",
      },
      preload: ["js", "json", "shell"],
    },
  },
  googleFonts: {
    families: {
      Nunito: [300],
      "Ubuntu Mono": [400],
    },
  },
})

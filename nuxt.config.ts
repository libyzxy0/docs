export default defineNuxtConfig({
  devtools: { enabled: false }, 
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/content",
  ], 
  css: [
    "~/assets/css/global.css", 
    "~/assets/css/github-markdown-dark.css"
  ],
  content: {
    highlight: {
      theme: {
        default: "material-theme-darker",
        dark: "one-dark-pro",
        sepia: "monokai",
      },
      preload: ["js", "json", "shell"],
    },
  },
  googleFonts: {
    families: {
      Montserrat: [400],
      "Ubuntu Mono": [400],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

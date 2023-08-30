// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'nuxt-svgo'],
  colorMode: {
    preference: 'mogin',
    dataValue: 'theme',
    classSuffix: '',
  },
  googleFonts: {
    families: {
      Quicksand: true,
    },
  },
  components: [
    { path: '~/components/product', prefix: 'Product' },
    { path: '~/components/navbar', prefix: 'Navbar' },
    '~/components',
  ],
  css: ['@/assets/css/main.css'],
});

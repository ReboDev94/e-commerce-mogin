// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-svgo',
  ],
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
    { path: '~/components/carousel', prefix: 'Carousel' },
    { path: '~/components/cart', prefix: 'Cart' },
    { path: '~/components/profile', prefix: 'Profile' },
    { path: '~/components/order', prefix: 'Order' },
    '~/components',
  ],
  css: ['@/assets/css/main.css'],
});

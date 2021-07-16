export default {
  ssr: false,
  target: 'static',

  head: {
    title: 'so-nuxt-markdownit',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
  ],

  plugins: [
    "~/plugins/vue-dompurify"
  ],
  modules: [
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    runtime: true, // Support `$md()`
    // preset: 'default',
    // linkify: true,
    // breaks: true,
    // use: [
    //   'markdown-it-div',
    //   'markdown-it-attrs'
    // ]
  }
}

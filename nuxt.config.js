export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://vs-dena-advent-client.naro143.com/icon.png'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    htmlAttrs: {
      lang: 'ja'
    },
    bodyAttrs: {
      class: 'app'
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [{ src: '~/assets/styles/app.sass', lang: 'sass' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'https://vs-dena-advent.appspot.com',
      pathRewrite: { '^/api': '/' }
    },
    '/qiita': {
      target: 'https://qiita.com',
      pathRewrite: { '^/qiita': '/' }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  workbox: {
    dev: true
  },
  styleResources: {
    sass: ['~/assets/styles/_variables.sass']
  },
  generate: {
    dir: 'docs'
  },
  manifest: {
    name: 'vs DeNA Advent',
    short_name: 'vs DeNA',
    start_url: '/',
    scope: '/',
    title: 'vs DeNA',
    description: 'vs DeNA Advent Calendarのアプリ',
    lang: 'ja',
    theme_color: '#5BBBB7',
    display: 'standalone',
    icons: []
  },
  googleAnalytics: {
    id: 'UA-90904381-4'
  }
}

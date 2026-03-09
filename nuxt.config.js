import { join } from 'path'
import {
  ADMIN,
  DEVELOPPER,
  PAGE_TITLES,
  PAGE_PATHS,
  OGP_DIR,
  FACEBOOK_URL,
  TWITTER_URL,
  ROUTER_BASE_DIR,
  SITE_URL,
  SITE_NAME,
  POSTAL_CODE,
  ADDRESS,
  BREAK_POINT,
  COMMON_DESC
} from './site.config'

const NODE_ENV = process.env.NODE_ENV

export default {
  target: 'static',
  components: true,
  env: {
    NODE_ENV,
    ADMIN,
    DEVELOPPER,
    SITE_NAME,
    SITE_URL,
    PAGE_TITLES,
    PAGE_PATHS,
    OGP_DIR,
    FACEBOOK_URL,
    TWITTER_URL,
    ADDRESS,
    POSTAL_CODE,
    BREAK_POINT
  },
  generate: {
    interval: 1000,
    fallback: true,
    routes: [
      '/manage/score/0/',
      '/manage/score/15/',
      '/manage/score/30/',
      '/manage/score/45/',
      '/manage/score/60/',
      '/manage/score/75/',
      '/manage/score/90/',
      '/manage/score/100/'
    ]
  },
  router: {
    base: ROUTER_BASE_DIR,
    trailingSlash: true
  },
  srcDir: 'src/',
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no'
      },
      { hid: 'description', name: 'description', content: COMMON_DESC },
      { hid: 'og:site_name', property: 'og:site_name', content: SITE_NAME },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: SITE_URL },
      { hid: 'og:title', property: 'og:title', content: SITE_NAME },
      {
        hid: 'og:description',
        property: 'og:description',
        content: COMMON_DESC
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${OGP_DIR}/common1.jpeg`
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '1200'
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '640'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `${OGP_DIR}/common1.jpeg`
      },
      {
        hid: 'twitter:image:width',
        name: 'twitter:image:width',
        content: '1200'
      },
      {
        hid: 'twitter:image:height',
        name: 'twitter:image:height',
        content: '640'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png?v=20260304b' },
      { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png?v=20260304b' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=20260304b' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: true,
  /*
   ** Global CSS
   */
  css: ['~assets/css/style.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/site',
    '~plugins/axios',
    '~plugins/vue-js-modal',
    { src: '~/plugins/vue-cookies', mode: 'client' },
    { src: '~/plugins/vue-local-strage', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/gtm'],
  gtm: {
    id: 'GTM-PPCQZKQ',
    pageTracking: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', 'nuxt-i18n'],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
    // proxy: true
  },
  i18n: {
    locales: [
      { code: 'ja', iso: 'ja' },
      { code: 'en', iso: 'en-US' }
    ],
    defaultLocale: 'ja',
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'en'
    },
    detectBrowserLanguage: false
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        'postcss-rem': {}
      },
      preset: {
        features: {
          'custom-media-queries': true,
          'nesting-rules': true
        },
        autoprefixer: {
          grid: true
        }
      }
    },
    extend(config, ctx) {
      const currentAlias = config.resolve.alias
      const newAlias = {
        '@components': join(__dirname, 'src/components'),
        '@partials': join(__dirname, 'src/partials'),
        '@mixins': join(__dirname, 'src/mixins'),
        '@utils': join(__dirname, 'src/utils'),
        '@lib': join(__dirname, 'src/lib')
      }
      config.resolve.alias = {
        ...currentAlias,
        ...newAlias
      }
    }
  }
}

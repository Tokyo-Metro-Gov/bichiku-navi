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
  COMMON_DESC,
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
    BREAK_POINT,
  },
  generate: {
    interval: 1000,
    fallback: true,
  },
  router: {
    base: ROUTER_BASE_DIR,
    trailingSlash: true,
  },
  srcDir: 'src/',
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no',
      },
      { hid: 'description', name: 'description', content: COMMON_DESC },
      { hid: 'og:site_name', property: 'og:site_name', content: SITE_NAME },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: SITE_URL },
      { hid: 'og:title', property: 'og:title', content: SITE_NAME },
      {
        hid: 'og:description',
        property: 'og:description',
        content: COMMON_DESC,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${OGP_DIR}/common1.jpeg`,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
    { src: '~/plugins/vue-local-strage', mode: 'client' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/gtm'],
  gtm: {
    id: '',
    pageTracking: true,
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', 'nuxt-i18n'],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  i18n: {
    locales: [
      { code: 'ja', iso: 'ja_JP' },
      { code: 'en', iso: 'en-US' },
    ],
    defaultLocale: 'ja',
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'en',
    },
    detectBrowserLanguage: false,
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        'postcss-rem': {},
      },
      preset: {
        features: {
          'custom-media-queries': true,
          'nesting-rules': true,
        },
        autoprefixer: {
          grid: true,
        },
      },
    },
    extend(config, ctx) {
      const currentAlias = config.resolve.alias
      const newAlias = {
        '@components': join(__dirname, 'src/components'),
        '@partials': join(__dirname, 'src/partials'),
        '@mixins': join(__dirname, 'src/mixins'),
        '@utils': join(__dirname, 'src/utils'),
        '@lib': join(__dirname, 'src/lib'),
      }
      config.resolve.alias = {
        ...currentAlias,
        ...newAlias,
      }
    },
  },
}

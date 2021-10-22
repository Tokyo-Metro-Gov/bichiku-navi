export default function ({ $axios, $config }) {
  // https://github.com/nuxt-community/axios-module/issues/192
  $axios.defaults.timeout = 5000
  // $axios.setHeader('X-API-KEY', $config.apiKey)
}

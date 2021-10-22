import Vue from 'vue'

const siteData = {
  install(_Vue) {
    Object.assign(_Vue.prototype, {
      $nodeEnv: process.env.NODE_ENV,
      $facebookUrl: process.env.FACEBOOK_URL,
      $twitterUrl: process.env.TWITTER_URL,
      $address: process.env.ADDRESS,
      $postalCode: process.env.POSTAL_CODE,
      $siteName: process.env.SITE_NAME,
      $siteUrl: process.env.SITE_URL,
      $admin: process.env.ADMIN,
      $developper: process.env.DEVELOPPER,
      $breakPoint: process.env.BREAK_POINT,
      $zeroPad(value) {
        return String(value).padStart(2, '0')
      },
      $getTitle(name, lang = 'ja') {
        return process.env.PAGE_TITLES[name][lang]
      },
      // 英語と日本語のURLを出し分けるために、
      // PAGE_PATH[name]が`string`ではなく、
      // `object`のときがある
      // 外部リンクでlocalePathで切り替えられないため
      // 現状はformのときだけ
      $getPath(name) {
        if (name === 'form') {
          return process.env.PAGE_PATHS[name][this.$i18n.locale]
        }

        return process.env.PAGE_PATHS[name]
      },
    })
  },
}

Vue.use(siteData)

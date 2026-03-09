export const OGP_DIR = '/ogp'
export const FACEBOOK_URL = 'https://www.facebook.com'
export const TWITTER_URL = 'https://www.twitter.com'
export const COMMON_DESC = ''
export const ROUTER_BASE_DIR = process.env.ROUTER_BASE_DIR || '/'
export const BREAK_POINT = '(max-width: 1000px)'
export const SITE_URL = 'https://www.bichiku.metro.tokyo.lg.jp'
export const SITE_NAME = {
  ja: '東京備蓄ナビ',
  en: 'Tokyo Stockpiling Navi'
}
export const POSTAL_CODE = {
  ja: 'XXXX',
  en: 'XXXX'
}
export const ADMIN = {
  ja: 'XXXX',
  en: 'XXXX'
}
export const DEVELOPPER = {
  ja: 'XXXX',
  en: 'XXXX'
}
export const ADDRESS = {
  ja: 'XXXX',
  en: 'XXXX'
}
const NAVDATA = [
  {
    id: 'top',
    name: {
      ja: 'トップ',
      en: 'Top'
    },
    path: '/'
  },
  {
    id: 'tool',
    name: {
      ja: '自分に合った備蓄を調べてみよう',
      en: 'Find out the stockpiling'
    },
    path: '/tool/'
  },
  {
    id: 'toolResult',
    name: {
      ja: 'あなたのご家庭で必要な備蓄品リスト',
      en: 'stockpiles for your home'
    },
    path: '/tool/result/'
  },
  {
    id: 'tips',
    name: {
      ja: '備えに役立つ記事',
      en: 'Articles'
    },
    path: '/tips/'
  },


  {
    id: 'sitemap',
    name: {
      ja: 'サイトマップ',
      en: 'Sitemap'
    },
    path: '/sitemap/'
  },
  {
    id: 'settings',
    name: {
      ja: '文字サイズ・色合い変更',
      en: 'Change font size/color'
    },
    path: '/settings/'
  },
  {
    id: 'manage',
    name: {
      ja: '備蓄状況チェックリスト',
      en: 'Disaster Preparedness Stockpile Checklist'
    },
    path: '/manage/'
  },

  {
    id: 'why',
    name: {
      ja: '備蓄って何のため？',
      en: 'Why Stockpiling Matters'
    },
    path: '/why/'
  }
]

export const PAGE_TITLES = (() => {
  const titles = {}

  for (const { id, name } of NAVDATA) {
    const item = { [id]: name }

    Object.assign(titles, item)
  }

  return titles
})()

export const PAGE_PATHS = (() => {
  const paths = {}

  for (const { id, path } of NAVDATA) {
    const item = { [id]: path }

    Object.assign(paths, item)
  }

  return paths
})()

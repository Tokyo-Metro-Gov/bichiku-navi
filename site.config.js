export const OGP_DIR = '/ogp'
export const FACEBOOK_URL = 'https://www.facebook.com'
export const TWITTER_URL = 'https://www.twitter.com'
export const COMMON_DESC = ''
export const ROUTER_BASE_DIR = process.env.ROUTER_BASE_DIR || '/'
export const BREAK_POINT = '(max-width: 1000px)'
export const SITE_URL = 'https://example.com'
export const SITE_NAME = {
  ja: '***',
  en: '***',
}
export const POSTAL_CODE = {
  ja: '***',
  en: '***',
}
export const ADMIN = {
  ja: '***',
  en: '***',
}
export const DEVELOPPER = {
  ja: '***',
  en: '***',
}
export const ADDRESS = {
  ja: '***',
  en: '***',
}
const NAVDATA = [
  {
    id: 'top',
    name: {
      ja: 'トップ',
      en: 'Top',
    },
    path: '/',
  },
  {
    id: 'tool',
    name: {
      ja: '自分に合った備蓄を調べてみよう',
      en: 'Find out the stockpiling',
    },
    path: '/tool/',
  },
  {
    id: 'toolResult',
    name: {
      ja: 'あなたのご家庭で必要な備蓄品リスト',
      en: 'stockpiles for your home',
    },
    path: '/tool/result/',
  },
  {
    id: 'sitemap',
    name: {
      ja: 'サイトマップ',
      en: 'Sitemap',
    },
    path: '/sitemap/',
  },
  {
    id: 'settings',
    name: {
      ja: '文字サイズ・色合い変更',
      en: 'Change font size/color',
    },
    path: '/settings/',
  },
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

export default {
  head() {
    const siteUrl = process.env.SITE_URL
    const siteName = process.env.SITE_NAME
    const ogpDir = process.env.OGP_DIR
    const head = { meta: [], link: [] }
    const isEn = this.$route.path.includes('/en')

    // サイト名
    head.meta.push({
      hid: 'og:site_name',
      property: 'og:site_name',
      content: siteName[this.$i18n.locale]
    })

    // ボディのHTML属性
    if (this.bodyAttrs) {
      head.bodyAttrs = this.bodyAttrs
    }

    // linkタグ
    if (this.link) {
      head.link = [...head.link, ...this.link]
    }

    // サイト名
    if (isEn) {
      head.meta.push({
        hid: 'og:site_name',
        property: 'og:site_name',
        content: siteName.en
      })
    } else {
      head.meta.push({
        hid: 'og:site_name',
        property: 'og:site_name',
        content: siteName.ja
      })
    }

    // タイトル
    if (
      this.meta.title &&
      this.$route.path !== '/' &&
      this.$route.path !== '/en'
    ) {
      const title = (() => {
        const title = this.meta.title

        return `${title} | ${siteName[this.$i18n.locale]}`
      })()

      head.title = title
      head.meta.push({ hid: 'og:title', property: 'og:title', content: title })
    } else {
      const title = (() => {
        return siteName[this.$i18n.locale]
      })()

      head.title = title
      head.meta.push({ hid: 'og:title', property: 'og:title', content: title })
    }

    // ディスクリプション
    if (this.meta.description) {
      head.meta.push({
        hid: 'description',
        name: 'description',
        content: this.meta.description
      })

      head.meta.push({
        hid: 'og:description',
        property: 'og:description',
        content: this.meta.description
      })
    }

    // ページタイプ
    if (this.$route.path === '/') {
      head.meta.push({
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      })
    } else {
      head.meta.push({
        hid: 'og:type',
        property: 'og:type',
        content: 'article'
      })
    }

    // ページURL
    const url = `${siteUrl}${this.$router.history.base}${this.$route.path}`
    head.meta.push({ hid: 'og:url', property: 'og:url', content: url })

    // OGP画像URL
    const base = this.$router.history.base || ''
    const basePrefix = base.endsWith('/') ? base.slice(0, -1) : base
    const ogpPrefix = ogpDir && ogpDir.endsWith('/') ? ogpDir.slice(0, -1) : ogpDir
    const resolveImageUrl = imagePath => {
      if (!imagePath) return null
      if (/^https?:\/\//.test(imagePath)) {
        return imagePath
      }
      if (imagePath.startsWith('/')) {
        return `${siteUrl}${basePrefix}${imagePath}`
      }
      return `${siteUrl}${basePrefix}${ogpPrefix}/${imagePath}`
    }

    const ogImageUrl = resolveImageUrl(this.meta.ogImage || this.meta.image || 'common1.jpeg')
    if (ogImageUrl) {
      head.meta.push({
        hid: 'og:image',
        property: 'og:image',
        content: ogImageUrl
      })
    }

    if (this.meta.ogImageWidth) {
      head.meta.push({
        hid: 'og:image:width',
        property: 'og:image:width',
        content: this.meta.ogImageWidth
      })
    }

    if (this.meta.ogImageHeight) {
      head.meta.push({
        hid: 'og:image:height',
        property: 'og:image:height',
        content: this.meta.ogImageHeight
      })
    }

    const twitterImageUrl = resolveImageUrl(this.meta.twitterImage || this.meta.image || 'common1.jpeg')
    if (twitterImageUrl) {
      head.meta.push({
        hid: 'twitter:image',
        name: 'twitter:image',
        content: twitterImageUrl
      })
    }

    if (this.meta.twitterImageWidth) {
      head.meta.push({
        hid: 'twitter:image:width',
        name: 'twitter:image:width',
        content: this.meta.twitterImageWidth
      })
    }

    if (this.meta.twitterImageHeight) {
      head.meta.push({
        hid: 'twitter:image:height',
        name: 'twitter:image:height',
        content: this.meta.twitterImageHeight
      })
    }

    head.meta.push({
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image'
    })

    return head
  }
}



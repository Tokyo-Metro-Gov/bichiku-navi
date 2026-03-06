// ローカルのvueファイルをパースして、
// tipsの記事リンク自動生成する
// vueのtemplateをパースするために、vue-sfc-parseを利用
const { readdirSync, readFileSync, writeFileSync } = require('fs')
const { join } = require('path')
const { parseComponent } = require('vue-sfc-parser')
const tipsPages = readdirSync(join(__dirname, 'src/pages/tips'), {
  withFileTypes: true
})
  .filter((dirent) => dirent.isFile())
  .filter(({ name }) => name !== 'index.vue')
  .map(({ name }) => name)

  ; (async () => {
    const tipsTitles = []

    for (const tipsPage of tipsPages) {
      const file = readFileSync(join(__dirname, 'src/pages/tips', tipsPage))
      const { template, customBlocks } = parseComponent(file.toString())

      if (customBlocks.length !== 0) {
        const i18nBlock = customBlocks.find(({ type }) => type === 'i18n')
        const articleBlock = customBlocks.find(({ type }) => type === 'article-config')

        if (i18nBlock) {
          const i18nObject = JSON.parse(i18nBlock.content)
          const { ja, en } = i18nObject
          const normalizeTitle = (value) =>
            String(value || '').replace(/<br\s*\/?>/gi, '：')
          const jaTitle = normalizeTitle(ja.meta.title)
          const enTitle = normalizeTitle(en.meta.title)
          const title = {
            ja: jaTitle,
            en: enTitle
          }

          const articleConfig = articleBlock
            ? JSON.parse(
              articleBlock.content
                .replace(/^\s*export\s+default\s+/, '')
                .trim()
            )
            : {}
          const dateMatch = template.content.match(
            /<time[^>]*class="TipsSingle__date"[^>]*>(.*?)<\/time>/
          )
          const date = articleConfig.date || (dateMatch ? dateMatch[1].trim() : '')
          const priority =
            typeof articleConfig.priority === 'number'
              ? articleConfig.priority
              : 0
          const category = articleConfig.category || ''
          const id = tipsPage.slice(0, tipsPage.indexOf('.'))

          tipsTitles.push({ id, date, priority, category, title })
        }
      }
    }

    writeFileSync(
      join(__dirname, 'tips.config.js'),
      `export const tipsTitles = ${JSON.stringify(tipsTitles, null, 2)}`
    )

    console.log('備えに役立つ記事の設定ファイルを生成しました')

  })()

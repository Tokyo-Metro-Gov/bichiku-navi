// puppeteerでローカルファイルをスクレイピングして、
// tipsの記事リンク自動生成する
// vueのtemplateをパースするために、vue-sfc-parseを利用
const { readdirSync, readFileSync, writeFileSync } = require('fs')
const { join } = require('path')
const puppeteer = require('puppeteer')
const { parseComponent } = require('vue-sfc-parser')
const tipsPages = readdirSync(join(__dirname, 'src/pages/tips'), {
  withFileTypes: true,
})
  .filter((dirent) => dirent.isFile())
  .filter(({ name }) => name !== 'index.vue')
  .map(({ name }) => name)

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  const tipsTitles = []

  for (const tipsPage of tipsPages) {
    const file = readFileSync(join(__dirname, 'src/pages/tips', tipsPage))
    const { template, customBlocks } = parseComponent(file.toString())

    if (customBlocks.length !== 0) {
      const { content, type } = customBlocks[0]

      if (type === 'i18n') {
        const i18nObject = JSON.parse(content)
        const { ja, en } = i18nObject
        const jaTitle = ja.meta.title
        const enTitle = en.meta.title
        const title = {
          ja: jaTitle,
          en: enTitle,
        }

        await page.setContent(template.content)

        const date = await page
          .$eval('.TipsSingle__date', (item) => item.textContent.trim())
          .catch((error) => new Error(error))

        const id = tipsPage.slice(0, tipsPage.indexOf('.'))

        tipsTitles.push({ id, date, title })
      }
    }
  }

  writeFileSync(
    join(__dirname, 'tips.config.js'),
    `export const tipsTitles = ${JSON.stringify(tipsTitles, null, 2)}`
  )

  console.log('備えに役立つ記事の設定ファイルを生成しました')

  browser.close()
})()

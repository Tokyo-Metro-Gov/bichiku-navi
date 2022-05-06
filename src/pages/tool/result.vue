<i18n>
{
  "ja": {
    "meta": {
      "description": "あなたのご家庭で必要な備蓄品リスト"
    },
    "title01": "<span>あなたのご家庭で必要な</span>備蓄品リスト",
    "text01": "一緒に住んでいる人の人数や性別、年齢を踏まえて、備えておくべき食料や日用品をリストアップしました。できるところから取り組みましょう！",
    "text02": "結果をシェアする",
    "text03": "印刷する",
    "text04": "結果をご家族にシェアしたり、自分用に保存したりすることで<span>スーパーなどのお店で備蓄品を購入する際に役立てよう</span>",
    "text05": "ペットに必要な備蓄リスト",
    "text06": "備蓄リストの詳細",
    "text07": "今すぐご家族に必要な備蓄品をECサイトで購入しよう",
    "text08": "分類",
    "text09": "必要な数量",
    "text10": "ネットで購入する",
    "text11": "大切なペットの分も、備蓄をしよう",
    "text12": "Amazon、Amazon.co.jpおよびそれらのロゴは、Amazon.com, Inc.またはその関連会社の商標または登録商標です。",
    "text13": "【東京備蓄ナビ】あなたのご家庭で必要な備蓄品リスト",
    "text14": "↓ 品目名をクリックすると該当の品目欄へジャンプします ↓"
  },
  "en": {
    "meta": {
      "description": "The list of suitable emergency stockpiles for your family"
    },
    "title01": "The list of suitable emergency stockpiles for your family.",
    "text01": "This list is estimated based on the genders and ages of your family.",
    "text02": "Share the result",
    "text03": "Print",
    "text04": "Share the results with your family or save them for yourself.Please use it when purchasing stockpiles at supermarkets and other stores.",
    "text05": "Stockpile list for your pets",
    "text06": "Details of stockpiles lists",
    "text07": "Please buy the stockpile your family needs right now on the EC site.",
    "text08": "Category",
    "text09": "Required quantity",
    "text10": "Buy on the internet",
    "text11": "Stockpile for your precious pets",
    "text12": "“Amazon”, “Amazon.co.jp” and their logos are trademarks of Amazon.com, Inc. and its affiliates.",
    "text13": "【Tokyo Stockpiling Navi】The list of suitable emergency stockpiles for your family.",
    "text14": "↓ Click on the name of the stockpile to see the detail. ↓"
  }
}
</i18n>
<template>
  <div>
    <div class="PageBlock">
      <section class="Container -s">
        <h1 class="PageBlock__title" v-html="$t('title01')" />

        <div class="Container -xs">
          <p class="PageBlock__text">
            {{ $t('text01') }}
          </p>
        </div>
      </section>
    </div>

    <section class="ToolResult">
      <div class="ToolResult__shareHeader">
        <h2 class="ToolResult__title">
          {{ $t('text02') }}
        </h2>

        <ul class="ToolResult__shareList">
          <!-- <li>
            <a 
              href="#"
              @click="
                $entryGtm({
                  category: 'SNSシェア',
                  action: 'Twitter',
                  label: 'extra_sns_share_Twitter',
                })
              "
            >
              <img
                src="~/assets/images/tool/result/icon-twitter.png"
                srcset="
                  ~/assets/images/tool/result/icon-twitter.png    1x,
                  ~/assets/images/tool/result/icon-twitter@2x.png 2x
                "
                alt=""
                width="40"
                height="40"
              />
            </a>
          </li>

          <li>
            <a
              href="#"
              @click="
                $entryGtm({
                  category: 'SNSシェア',
                  action: 'Facebok',
                  label: 'extra_sns_share_Facebok',
                })
              "
            >
              <img
                src="~/assets/images/tool/result/icon-facebook.png"
                srcset="
                  ~/assets/images/tool/result/icon-facebook.png    1x,
                  ~/assets/images/tool/result/icon-facebook@2x.png 2x
                "
                alt=""
                width="41"
                height="40"
              />
            </a>
          </li> -->

          <li>
            <a
              :href="`https://line.me/R/msg/text/?${lineShareText}`"
              @click="
                $entryGtm({
                  category: 'SNSシェア',
                  action: 'LINE',
                  label: 'extra_sns_share_LINE',
                })
              "
            >
              <img
                src="~/assets/images/tool/result/icon-line.png"
                srcset="
                  ~/assets/images/tool/result/icon-line.png    1x,
                  ~/assets/images/tool/result/icon-line@2x.png 2x
                "
                alt=""
                width="40"
                height="40"
              />
            </a>
          </li>

          <!-- <li>
            <a
              href="#"
              @click="
                $entryGtm({
                  category: 'SNSシェア',
                  action: 'B!',
                  label: 'extra_sns_share_B!',
                })
              "
            >
              <img
                src="~/assets/images/tool/result/icon-hateb.png"
                srcset="
                  ~/assets/images/tool/result/icon-hateb.png    1x,
                  ~/assets/images/tool/result/icon-hateb@2x.png 2x
                "
                alt=""
                width="40"
                height="40"
              />
            </a>
          </li> -->

          <li>
            <a
              :href="`mailto:?subject=${$t('text13')}&body=${mailShareText}`"
              @click="
                $entryGtm({
                  category: 'SNSシェア',
                  action: 'Mail',
                  label: 'extra_sns_share_Mail',
                })
              "
            >
              <img
                src="~/assets/images/tool/result/icon-mail.png"
                srcset="
                  ~/assets/images/tool/result/icon-mail.png    1x,
                  ~/assets/images/tool/result/icon-mail@2x.png 2x
                "
                alt=""
                width="37"
                height="27"
              />
            </a>
          </li>

          <li @click="printResult">
            <img
              src="~/assets/images/tool/result/icon-document.png"
              srcset="
                ~/assets/images/tool/result/icon-document.png    1x,
                ~/assets/images/tool/result/icon-document@2x.png 2x
              "
              alt=""
              width="13"
              height="16"
            />
            {{ $t('text03') }}
          </li>
        </ul>
      </div>
      <!-- /.ToolResult__shareHeader -->

      <div class="Container -m">
        <section class="ToolResult__overview">
          <h3
            class="ToolResult__titleSub ToolResult__lead"
            v-html="$t('text04')"
          />
          
          <h3
            class="ToolResult__titleSub ToolResult__lead"
            v-html="$t('text14')"
          />

          <ul class="ToolResult__overviewList">
            <template
              v-for="({ item, quantity, unit }, index) in stockpileList"
            >
              <li
                :key="`stockpile${index}`"
                class="ToolResult__overviewListItem"
                tabindex="0"
                @click="jumpStockpile(index)"
              >
                {{ item[$i18n.locale] }}： {{ quantity }}
                {{ unit[$i18n.locale] }}
              </li>
            </template>
          </ul>
        </section>

        <template v-if="hasPet">
          <section class="ToolResult__overview">
            <h3 class="ToolResult__titleSub">{{ $t('text05') }}</h3>

            <ul class="ToolResult__overviewList">
              <template v-for="({ item }, index) in petStockpileList">
                <li
                  :key="`petStockpile${index}`"
                  class="ToolResult__overviewListItem"
                  tabindex="0"
                  @click="jumpPetStockpile(index)"
                >
                  {{ item[$i18n.locale] }}
                </li>
              </template>
            </ul>
          </section>
        </template>
      </div>

      <section class="ToolResult__detail">
        <div class="Container -s">
          <h2 class="ToolResult__title">{{ $t('text06') }}</h2>
          <h3 class="ToolResult__titleSub ToolResult__message">
            {{ $t('text07') }}
          </h3>

          <ul class="ToolResult__itemList">
            <template
              v-for="(
                { id, category, item, quantity, unit, url, description }, index
              ) in stockpileList"
            >
              <li :key="`stockpile${index}`" :id="`stockpile${index}`">
                <div class="ToolResult__listItem" tabindex="0">
                  <div class="ToolResult__listItemInner">
                    <div class="ToolResult__listItemImg">
                      <img
                        :src="
                          require(`~/assets/images/tool/result/stockpile/img-${$zeroPad(
                            id
                          )}.png`)
                        "
                        :srcset="`
                        ${require(`~/assets/images/tool/result/stockpile/img-${$zeroPad(
                          id
                        )}.png`)} 1x,
                        ${require(`~/assets/images/tool/result/stockpile/img-${$zeroPad(
                          id
                        )}@2x.png`)} 2x
                      `"
                        alt=""
                        width="130"
                        height="130"
                      />
                    </div>

                    <div class="ToolResult__listItemDesc">
                      <div class="ToolResult__listItemName">
                        <span>
                          {{ $t('text08') }}：{{ category[$i18n.locale] }}
                        </span>
                        {{ item[$i18n.locale] }}
                      </div>

                      <div class="ToolResult__listItemQuantity">
                        <span>{{ $t('text09') }}：</span>
                        {{ quantity }} {{ unit[$i18n.locale] }}
                      </div>

                      <p class="ToolResult__listItemText">
                        {{ description[$i18n.locale] }}
                      </p>
                    </div>
                  </div>

                  <!-- 処方箋(id: 20)と常備薬(id: 53)は買い物のURLはつけない -->
                  <template v-if="id !== 20 && id !== 53">
                    <div class="ToolResult__listItemStores">
                      <div class="ToolResult__listItemStoresLabel">
                        {{ $t('text10') }}
                      </div>
                      <div class="ToolResult__listItemStoreWrap">
                        <div
                          class="ToolResult__listItemStore -yahoo"
                          tabindex="0"
                          @click="
                            $modal.show(`yahoo${id}`)
                            $entryGtm({
                              category: '購入ボタン',
                              action: 'Yahooショッピング',
                              label: `extra_purchase_yahoo_${item.ja}`,
                            })
                          "
                        >
                          <img
                            src="../../assets/images/tool/result/logo-yahoo.png"
                            srcset="
                              ~/assets/images/tool/result/logo-yahoo.png    1x,
                              ~/assets/images/tool/result/logo-yahoo@2x.png 2x
                            "
                            alt="Yahoo!ショッピング"
                            width="140"
                          />
                        </div>

                        <div
                          tabindex="0"
                          class="ToolResult__listItemStore -rakuten"
                          @click="
                            $modal.show(`rakuten${id}`)
                            $entryGtm({
                              category: '購入ボタン',
                              action: 'Rakuten',
                              label: `extra_purchase_rakuten_${item.ja}`,
                            })
                          "
                        >
                          <img
                            src="../../assets/images/tool/result/logo-rakuten.png"
                            srcset="
                              ~/assets/images/tool/result/logo-rakuten.png    1x,
                              ~/assets/images/tool/result/logo-rakuten@2x.png 2x
                            "
                            alt="Rakuten"
                            width="140"
                          />
                        </div>

                        <div
                          tabindex="0"
                          class="ToolResult__listItemStore -amazon"
                          @click="
                            $modal.show(`amazon${id}`)
                            $entryGtm({
                              category: '購入ボタン',
                              action: 'Amazon',
                              label: `extra_purchase_amazon_${item.ja}`,
                            })
                          "
                        >
                          <img
                            src="../../assets/images/tool/result/logo-amazon.png"
                            srcset="
                              ~/assets/images/tool/result/logo-amazon.png    1x,
                              ~/assets/images/tool/result/logo-amazon@2x.png 2x
                            "
                            alt="Amazon"
                            width="140"
                          />
                        </div>
                      </div>

                      <tool-result-modal
                        :id="id"
                        :url="url.yahoo"
                        site-name="yahoo"
                      />

                      <tool-result-modal
                        :id="id"
                        :url="url.rakuten"
                        site-name="rakuten"
                      />

                      <tool-result-modal
                        :id="id"
                        :url="url.amazon"
                        site-name="amazon"
                      />
                    </div>
                  </template>
                </div>
              </li>
            </template>
          </ul>

          <template v-if="hasPet">
            <section class="ToolResult__pet">
              <h3 class="BaloonTitle">
                <span>{{ $t('text11') }}</span>
              </h3>

              <ul class="ToolResult__itemList">
                <template
                  v-for="(
                    { id, category, item, url, description }, index
                  ) in petStockpileList"
                >
                  <li :key="`petStockpile${index}`" :id="`petStockpile${index}`">
                    <div class="ToolResult__listItem" tabindex="0">
                      <div class="ToolResult__listItemInner">
                        <div class="ToolResult__listItemImg">
                          <img
                            :src="
                              require(`~/assets/images/tool/result/stockpile/pet/img-${$zeroPad(
                                index + 1
                              )}.png`)
                            "
                            :srcset="`
                            ${require(`~/assets/images/tool/result/stockpile/pet/img-${$zeroPad(
                              index + 1
                            )}.png`)} 1x,
                            ${require(`~/assets/images/tool/result/stockpile/pet/img-${$zeroPad(
                              index + 1
                            )}@2x.png`)} 2x
                          `"
                            alt=""
                            width="130"
                            height="130"
                          />
                        </div>

                        <div class="ToolResult__listItemDesc">
                          <div class="ToolResult__listItemName">
                            <span>
                              {{ $t('text08') }}：{{ category[$i18n.locale] }}
                            </span>
                            {{ item[$i18n.locale] }}
                          </div>

                          <!-- <div class="ToolResult__listItemQuantity">
                          <span>必要な数量： {{ unit.ja }}</span>
                        </div> -->

                          <p class="ToolResult__listItemText">
                            {{ description[$i18n.locale] }}
                          </p>
                        </div>
                      </div>

                      <div class="ToolResult__listItemStores">
                        <div class="ToolResult__listItemStoresLabel">
                          <span>{{ $t('text10') }}</span>
                        </div>
                        <div class="ToolResult__listItemStoreWrap">
                          <div
                            class="ToolResult__listItemStore -yahoo"
                            tabindex="0"
                            @click="() => $modal.show(`yahoo${id}`)"
                          >
                            <img
                              src="../../assets/images/tool/result/logo-yahoo.png"
                              srcset="
                                ~/assets/images/tool/result/logo-yahoo.png    1x,
                                ~/assets/images/tool/result/logo-yahoo@2x.png 2x
                              "
                              alt="Yahoo!ショッピング"
                              width="140"
                            />
                          </div>

                          <div
                            class="ToolResult__listItemStore -rakuten"
                            tabindex="0"
                            @click="() => $modal.show(`rakuten${id}`)"
                          >
                            <img
                              src="../../assets/images/tool/result/logo-rakuten.png"
                              srcset="
                                ~/assets/images/tool/result/logo-rakuten.png    1x,
                                ~/assets/images/tool/result/logo-rakuten@2x.png 2x
                              "
                              alt="Rakuten"
                              width="140"
                            />
                          </div>

                          <div
                            class="ToolResult__listItemStore -amazon"
                            tabindex="0"
                            @click="() => $modal.show(`amazon${id}`)"
                          >
                            <img
                              src="../../assets/images/tool/result/logo-amazon.png"
                              srcset="
                                ~/assets/images/tool/result/logo-amazon.png    1x,
                                ~/assets/images/tool/result/logo-amazon@2x.png 2x
                              "
                              alt="Amazon"
                              width="140"
                            />
                          </div>
                        </div>

                        <tool-result-modal
                          :id="id"
                          :url="url.yahoo"
                          site-name="yahoo"
                        />

                        <tool-result-modal
                          :id="id"
                          :url="url.rakuten"
                          site-name="rakuten"
                        />

                        <tool-result-modal
                          :id="id"
                          :url="url.amazon"
                          site-name="amazon"
                        />
                      </div>
                    </div>
                  </li>
                </template>
              </ul>
            </section>
          </template>
          <p class="ToolResult__credit">
            {{ $t('text12') }}
          </p>
        </div>
      </section>
      <!-- /.ToolResultDetails -->
    </section>
  </div>
</template>

<script>
import head from '@mixins/head'
import methods from '@mixins/methods'
import {
  stockpileList,
  petStockpileList,
  upStairsRate,
  downStairsRate,
  categoryA1,
  categoryA2,
  categoryB1,
  categoryB2,
  categoryB3,
  categoryC,
  categoryD1,
  categoryD2,
  lineShareIds,
} from '@@/stockpile.config'
import ToolResultModal from '@partials/tool/ToolResultModal'

export default {
  name: 'PageToolResult',
  components: {
    ToolResultModal,
  },
  mixins: [head, methods],
  localStorage: {
    $toolValues: {
      type: Object,
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (Object.entries(vm.$toolValues).length === 0) {
        next({ name: 'tool' })
      }
    })
  },
  data() {
    return {
      hasPet: false,
      stockpileList: [],
      mailShareText: '',
      lineShareText: '',
      bodyAttrs: {
        class: 'PageToolResult',
      },
      meta: {
        title: this.$getTitle('toolResult', this.$i18n.locale),
        description: this.$i18n.t('meta.description'),
      },
    }
  },
  computed: {
    petStockpileList() {
      return petStockpileList
    },
  },
  mounted() {
    const toolValues = this.$toolValues
    const { isUpstairs, family, hasPet } = toolValues
    const { length: familyLength } = family
    const stockpileRate = isUpstairs ? upStairsRate : downStairsRate
    const isHighRate = (() => stockpileRate === upStairsRate)()
    const isLowRate = (() => stockpileRate === downStairsRate)()
    const states = family.map(({ state }) => state)
    const includeAged = (() => {
      return states.some((state) => /aged/.test(state))
    })()
    const onlyInfants = (() => {
      return states.every((state) => /infants/.test(state))
    })()
    // 生理用品が必要な女性グループ
    const sanitaryItemsGroup = (() => {
      return states.some(
        (state) => state === 'child2Female' || state === 'adultFemale'
      )
    })()
    // 基礎化粧品が必要な女性グループ
    const skinCareGroup = states.filter(
      (state) => /Female/.test(state) && !/^(infants|child1)/.test(state)
    )
    const sumQuantity = (quantity, required) => {
      if (typeof required === 'object') {
        for (const state of states) {
          quantity += required[state]
        }
      }

      return quantity
    }
    const innerStockpileList = stockpileList
      .map((stockpile, index, self) => {
        const { id, required } = stockpile
        let quantity = 0

        if (categoryA1.includes(id)) {
          if (!onlyInfants) {
            quantity = sumQuantity(quantity, required)

            if (isHighRate) {
              quantity *= 2
            }
          }
        } else if (categoryA2.includes(id)) {
          if (!onlyInfants) {
            if (isLowRate) {
              if (familyLength <= 5) {
                quantity = 3
              } else {
                quantity = 6
              }
            } else if (isHighRate) {
              if (familyLength <= 5) {
                quantity = 7
              } else {
                quantity = 14
              }
            }
          }
        } else if (categoryB1.includes(id)) {
          if (familyLength <= 5) {
            quantity = 1
          } else {
            quantity = 2
          }
        } else if (categoryB2.includes(id)) {
          if (familyLength <= 3) {
            quantity = 1
          } else if (familyLength >= 4 && familyLength <= 6) {
            quantity = 2
          } else {
            quantity = 3
          }
        } else if (categoryB3.includes(id)) {
          if (familyLength <= 5) {
            quantity = 2
          } else {
            quantity = 4
          }
        } else if (categoryC.includes(id)) {
          quantity = familyLength
        } else if (categoryD1.includes(id)) {
          if (includeAged) {
            quantity = ''
          }
        } else if (categoryD2.includes(id)) {
          if (!onlyInfants) {
            quantity = ''
          }
        } else if (id === 43) {
          if (sanitaryItemsGroup) {
            quantity = 30
          }
        } else if (id === 44) {
          quantity = skinCareGroup.length
        } else if (id === 59) {
          quantity = ''
        } else {
          // イレギュラーではない品目
          quantity = Math.ceil(sumQuantity(quantity, required) * stockpileRate)
        }

        return {
          ...stockpile,
          quantity,
        }
      })
      .filter(({ quantity }) => quantity !== 0)
      .sort((a, b) => (a.id < b.id ? -1 : 1))

    const createShareText = (callback) => {
      const encodeText = (value) => encodeURIComponent(value)
      let shareText = encodeText(callback())
      let message = ''
      let url = ''

      if (this.$i18n.locale === 'ja') {
        message = '東京備蓄ナビで自分にあった備蓄を調べてみよう'
        url = '***'
      } else {
        message = 'Find out the adequate stockpiling for you'
        url = '***'
      }

      shareText += encodeText(`

========
${message}
${url}`)

      return shareText
    }

    const lineShareText = createShareText(() => {
      let shareText = ''

      if (this.$i18n.locale === 'ja') {
        shareText = `ご家庭で日常的にストックした方が良い備蓄品リスト
`
      } else {
        shareText = `ご家庭で日常的にストックした方が良い備蓄品リスト
`
      }

      const shareIds = innerStockpileList.filter(({ id }) => {
        return lineShareIds.includes(id)
      })

      for (const shareId of shareIds) {
        const { quantity, item, unit } = shareId

        shareText += `
${item[this.$i18n.locale]} ${quantity}${unit[this.$i18n.locale]}`
      }

      return shareText
    })

    const mailShareText = createShareText(() => {
      let shareText = ''

      if (this.$i18n.locale === 'ja') {
        shareText = `あなたのご家庭で必要な備蓄品リスト${familyLength}人家族として試算しています。
日常的にストックしておきたいものをリストアップしました。スーパーなどでお買いもとめください。
このリスト以外にも、赤ちゃんの月齢に合ったオムツなど、各家庭の事情に合わせたものを準備しておきましょう。
`
      } else {
        shareText = `あなたのご家庭で必要な備蓄品リスト${familyLength}人家族として試算しています。
日常的にストックしておきたいものをリストアップしました。スーパーなどでお買いもとめください。
このリスト以外にも、赤ちゃんの月齢に合ったオムツなど、各家庭の事情に合わせたものを準備しておきましょう。
`
      }

      for (const stockpile of innerStockpileList) {
        const { quantity, item, unit } = stockpile

        shareText += `
${item[this.$i18n.locale]} ${quantity}${unit[this.$i18n.locale]}`
      }

      return shareText
    })

    this.hasPet = hasPet
    this.stockpileList = innerStockpileList
    this.mailShareText = mailShareText
    this.lineShareText = lineShareText
  },
  methods: {
    printResult() {
      window.print()
    },
    jumpStockpile(index){
      document
          .querySelector(`#stockpile${index}`)
          .scrollIntoView({behavior: "smooth"})
    },
    jumpPetStockpile(index){
      document
          .querySelector(`#petStockpile${index}`)
          .scrollIntoView({behavior: "smooth"})
    },
  },
}
</script>
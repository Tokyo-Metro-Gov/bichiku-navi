<i18n>
{
  "ja": {
    "meta": {
      "description": "備蓄とは何か、なぜ必要か、日常備蓄の考え方や必要量の目安をわかりやすく解説します。"
    },
    "title01": "",
    "text01": "",
    "title02": "備蓄とは？",
    "text02": "備蓄（びちく）とは、自宅で生活するうえで必要な食料品や生活必需品を日頃から備え、災害などの緊急時にすぐ使えるようにしておくことです。<br>つまり、普段使っているものを少し多めに買って蓄えておくことを指します。<br>ただ「モノをため込むこと」ではなく、「災害時でも日常生活をできるだけ自分の力で継続するための備え」なのです。",
    "ctaText": "さっそく自分に必要な備蓄を調べてみよう！",
    "ctaBtn01": "自分に合った備蓄を調べる",
    "ctaBtn02": "前回の結果を確認したい方はこちら",
    "articlesTitle": "備えに役立つ記事",
    "articlesText": "「備蓄って本当に必要なの？」「どれくらい備えれば良いの？」と思っている方向けの情報が揃っています。"
  },
  "en": {
    "meta": {
      "description": "Why stockpiling matters and how to prepare at home for disasters."
    },
    "title01": "",
    "text01": "",
    "title02": "What is stockpiling?",
    "text02": "Stockpiling means keeping the food and daily necessities you need for everyday life at home so you can use them immediately in emergencies such as disasters.<br>In other words, it is buying a little extra of what you normally use and storing it.<br>It is not simply “hoarding items,” but preparing to continue daily life as much as possible on your own even during disasters.",
    "ctaText": "Let’s check the stockpiles you need!",
    "ctaBtn01": "Find stockpiles for your household",
    "ctaBtn02": "See your previous results",
    "articlesTitle": "Helpful articles for preparedness",
    "articlesText": "We have information for those wondering “Do I really need stockpiles?” or “How much should I prepare?”"
  }
}
</i18n>

<template>
  <div class="Container -s">
    <div class="Document">
      <section class="Container -xs">
      </section>
    </div>

    <div class="PageBlock">
      <section class="Container -s">
        <p class="PageBlock__text WhyCta__text">
          {{ $t('ctaText') }}
        </p>
        <div class="WhyCta__image">
          <img
            src="~/assets/images/tool/result/dammy09.png"
            srcset="~/assets/images/tool/result/dammy09.png 1x, ~/assets/images/tool/result/dammy09@2x.png 2x"
            alt=""
            width="76"
            height="104"
          />
        </div>

        <div class="HomeLead__button WhyCta__buttons" :class="{ '-center': !hasToolHistory }">
          <div class="Button -yellowPale -l">
            <nuxt-link class="Button__link" :to="localePath($getPath('tool'))" v-html="$t('ctaBtn01')" />
          </div>

          <div v-if="hasToolHistory" class="Button -yellow -l">
            <nuxt-link class="Button__link" :to="localePath($getPath('toolResult'))" v-html="$t('ctaBtn02')" />
          </div>
        </div>
      </section>
    </div>

    <div class="PageBlock WhyCta__articles">
      <section class="Container -s">
        <h2 class="PageBlock__title">{{ $t('articlesTitle') }}</h2>

        <div class="PageBlock__img">
          <img
            src="~/assets/images/top/tips/dammy01.png"
            srcset="~/assets/images/top/tips/dammy01.png 1x, ~/assets/images/top/tips/dammy01@2x.png 2x"
            alt=""
            width="109"
            height="127"
          />
        </div>

        <div class="Container -xs">
          <p class="PageBlock__text">
            {{ $t('articlesText') }}
          </p>
        </div>
      </section>
    </div>

    <div class="Container -l">
      <tips-list />
    </div>
  </div>
</template>

<style scoped>
.PageWhy .Document {
  padding-bottom: rem(80px);
}

.PageWhy .Document section + section {
  margin-top: rem(40px);
}

.WhyCta__text {
  text-align: center;
  font-size: rem(22px);
  font-weight: bold;
}

.WhyCta__image {
  display: flex;
  justify-content: center;
  margin-top: rem(16px);
}

.WhyCta__buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: rem(28px);
}

.WhyCta__buttons.-center {
  justify-content: center;
}

.WhyCta__buttons.-center .Button {
  background-color: #ffe802;
}

.WhyCta__buttons .Button + .Button {
  margin-left: rem(16px);
}

@media (max-width: 1000px) {
  .WhyCta__buttons.HomeLead__button {
    display: block;
    width: 100%;
    max-width: 100%;
    margin-top: rem(28px);
    text-align: center;
  }

  .WhyCta__buttons.HomeLead__button .Button {
    width: 100%;
    max-width: 340px;
    min-width: 0;
    box-sizing: border-box;
    margin-right: auto;
    margin-left: auto;
  }

  .WhyCta__buttons.HomeLead__button .Button + .Button {
    margin-top: rem(24px);
    margin-left: auto;
  }
}

.WhyCta__articles {
  margin-top: rem(120px);
}

</style>

<script>
import head from '@mixins/head'
import TipsList from '@partials/tips/TipsList'

export default {
  name: 'Why',
  components: { TipsList },
  mixins: [head],
  data() {
    return {
      bodyAttrs: {
        class: 'PageWhy'
      },
      hasToolHistory: false,
      meta: {
        title: this.$getTitle('why', this.$i18n.locale),
        description: this.$i18n.t('meta.description')
      }
    }
  },
  beforeDestroy() {
    if (this._historyCheckTimer) {
      clearTimeout(this._historyCheckTimer)
    }
  },
  mounted() {
    this.updateToolHistoryState()
    this.$nextTick(() => {
      this.updateToolHistoryState()
    })
    this._historyCheckTimer = setTimeout(() => {
      this.updateToolHistoryState()
    }, 0)
  },
  methods: {
    getToolValuesFromStorage() {
      const fromPlugin = this.$localStorage.get('$toolValues')
      if (fromPlugin && typeof fromPlugin === 'object') {
        return fromPlugin
      }

      if (typeof window === 'undefined') {
        return {}
      }

      const raw = window.localStorage.getItem('$toolValues')
      if (!raw) {
        return {}
      }

      try {
        const parsed = JSON.parse(raw)
        return parsed && typeof parsed === 'object' ? parsed : {}
      } catch (error) {
        return {}
      }
    },
    updateToolHistoryState() {
      const values = this.getToolValuesFromStorage()
      const history = values && Array.isArray(values.history) ? values.history : []
      const hasHistory = Array.isArray(history) ? history.length > 0 : !!history
      const hasValues = (() => {
        if (!values || typeof values !== 'object') {
          return false
        }
        const plainValues = { ...values }
        delete plainValues.history
        delete plainValues.date
        return Object.keys(plainValues).length > 0
      })()
      this.hasToolHistory = hasHistory || hasValues
    }
  }
}
</script>


<i18n>
{
  "ja": {
    "title": "いつか来る災害に備えよう",
    "text01": "「災害に備えた備蓄」と聞いてもピンと来ない方や興味はあるけど何をどのくらい備蓄すれば良いか分からない方向けに、備蓄のイロハや備えておくと良い品目などをご紹介するサイトです。",
    "text02": "自分に合った備蓄を調べる",
    "text03": "前回の結果を確認したい方はこちら",
    "text04": "備蓄って何のため？"
  },
  "en": {
    "title": "Prepare for the future disaster",
    "text01": "For some people, the words “stockpiling for possible disasters” do not ring a bell and, even those who are interested in stockpiling might find it difficult to figure out what and how much they should stockpile. Tokyo Stockpile Navi website provides an introductory explanation of stockpiling including items recommended for stockpiles.",
    "text02": "Find stockpiles for your household",
    "text03": "See your previous results",
    "text04": "Why stockpile?"
  }
}
</i18n>

<template>
  <div class="HomeLead PageBlock">
    <section class="Container -s">
      <h1 class="PageBlock__title">{{ $t('title') }}</h1>

      <div class="PageBlock__img HomeLead__hero">
        <img
          src="~/assets/images/top/lead/dammy01.png"
          srcset="~/assets/images/top/lead/dammy01.png 1x, ~/assets/images/top/lead/dammy01@2x.png 2x"
          alt=""
          width="101"
          height="138"
        />
        <div v-if="hasToolHistory" class="HomeLead__sideButton">
          <div class="Button -yellowPale -l">
            <nuxt-link class="Button__link" :to="localePath($getPath('why'))" v-html="$t('text04')" />
          </div>
        </div>
      </div>

      <div class="Container -xs">
        <p class="PageBlock__text">
          {{ $t('text01') }}
        </p>
      </div>

      <div class="HomeLead__button" :class="{ 'HomeLead__button--center': !hasToolHistory, 'HomeLead__button--noHistory': !hasToolHistory }">
        <div class="Button -yellow -l HomeLead__buttonItem HomeLead__buttonItem--primary" :class="{ 'HomeLead__buttonItem--noData': !hasToolHistory }">
          <nuxt-link class="Button__link" :to="localePath($getPath('tool'))" v-html="$t('text02')" />
        </div>

        <div v-if="!hasToolHistory" class="Button -yellowPale -l HomeLead__buttonItem HomeLead__buttonItem--history HomeLead__buttonItem--whyNoHistory">
          <nuxt-link class="Button__link HomeLead__buttonLink" :to="localePath($getPath('why'))" v-html="$t('text04')" />
        </div>

        <div v-if="hasToolHistory" class="Button -yellowPale -l HomeLead__buttonItem HomeLead__buttonItem--history">
          <nuxt-link class="Button__link HomeLead__buttonLink" :to="localePath($getPath('toolResult'))" v-html="$t('text03')" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeLead',
  data() {
    return {
      hasToolHistory: false
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

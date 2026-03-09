<template>
  <div class="ManageScoreOgp">
    <section class="ManageScoreOgp__content">
      <p class="ManageScoreOgp__text">ページ移動中です。しばらくお待ちください。</p>
      <p class="ManageScoreOgp__text">
        移動しない場合は
        <a class="ManageScoreOgp__link" href="https://www.bichiku.metro.tokyo.lg.jp/tool/">こちら</a>
      </p>
    </section>
  </div>
</template>

<script>
import head from '@mixins/head'

const allowedScores = [0, 15, 30, 45, 60, 75, 90, 100]
const scoreImageMap = {
  0: require('~/assets/images/manage/dammy06.png'),
  15: require('~/assets/images/manage/dammy08.png'),
  30: require('~/assets/images/manage/dammy09.png'),
  45: require('~/assets/images/manage/dammy10.png'),
  60: require('~/assets/images/manage/dammy11.png'),
  75: require('~/assets/images/manage/dammy12.png'),
  90: require('~/assets/images/manage/dammy13.png'),
  100: require('~/assets/images/manage/dammy07.png')
}

export default {
  name: 'ManageScoreOgp',
  mixins: [head],
  validate({ params }) {
    const score = Number(params.score)
    return Number.isFinite(score) && allowedScores.includes(score)
  },
  data() {
    return {
      bodyAttrs: {
        class: 'PageManageScore'
      },
      meta: {
        title: `備蓄スコア ${this.score}点`,
        description: '備蓄スコアの共有ページです。',
        image: scoreImageMap[this.score] || scoreImageMap[0]
      }
    }
  },
  mounted() {
    if (process.client) {
      window.location.replace('https://www.bichiku.metro.tokyo.lg.jp/tool/')
    }
  },
  computed: {
    score() {
      const value = Number(this.$route.params.score)
      return allowedScores.includes(value) ? value : 0
    }
  }
}
</script>

<i18n>
{
  "ja": {
    "title": "備蓄スコア",
    "lead": "あなたの備蓄で過ごせる日数は...",
    "bubble": "備蓄状況を確認してみて、いまご家庭にある備蓄品で<br>概ね何日間、生活できそうですか？<br>※必要な備蓄量：【目標】3日分　【推奨】7日分以上",
    "openResult": "備蓄スコアを確認する",
    "scoreNone": "1日分も備蓄できていない。",
    "scoreMax": "7日分、またはそれ以上備蓄できている。",
    "scoreDays": "{days}日分備蓄できている。"
  },
  "en": {
    "title": "Stockpile Score",
    "lead": "How many days could your current stockpile support your household?",
    "bubble": "Check your stockpile status and estimate how many days your household can live on what you currently have.<br>Recommended stockpile amount: [Target] 3 days [Recommended] 7 days or more",
    "openResult": "View stockpile score",
    "scoreNone": "Not even one day's worth is stockpiled.",
    "scoreMax": "You have stockpiled 7 days' worth or more.",
    "scoreDays": "You have stockpiled {days} days' worth."
  }
}
</i18n>

<template>
  <div class="ManageModal" role="dialog" aria-modal="true">
    <div class="ManageModal__backdrop" @click="$emit('close')" />
    <div class="ManageModal__content">
      <div class="ManageModal__header">
        <h3 class="ManageModal__title">{{ $t('title') }}</h3>
        <button type="button" class="ManageModal__close" @click="$emit('close')">×</button>
      </div>
      <div class="ManageModal__body">
        <div class="ManageScore">
          <p class="ManageScore__lead">{{ $t('lead') }}</p>
          <div class="ManageScore__mascot">
            <img
              src="~/assets/images/tool/dammy02.png"
              srcset="~/assets/images/tool/dammy02.png 1x, ~/assets/images/tool/dammy02@2x.png 2x"
              alt=""
              width="63"
              height="72"
            />
          </div>
          <div class="ManageScore__bubble" v-html="$t('bubble')" />
          <p class="ManageScore__current">{{ currentScoreText }}</p>
          <ul class="ManageScore__days">
            <li v-for="n in 8" :key="n">
              <button
                type="button"
                :class="['ManageScore__day', { '-active': selectedScoreDays === n - 1 }]"
                @click="$emit('select-day', n - 1)"
              >
                {{ n - 1 }}
              </button>
            </li>
          </ul>
          <div class="ManageScore__action">
            <button type="button" class="ManageScore__button" @click="$emit('open-result')">
              {{ $t('openResult') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManageScoreModal',
  props: {
    selectedScoreDays: {
      type: Number,
      required: true
    }
  },
  computed: {
    currentScoreText() {
      if (this.selectedScoreDays === 0) {
        return this.$t('scoreNone')
      }

      if (this.selectedScoreDays === 7) {
        return this.$t('scoreMax')
      }

      return this.$t('scoreDays', { days: this.selectedScoreDays })
    }
  }
}
</script>

<style src="~/assets/css/partials/manage/ManageScoreModal.css" scoped></style>

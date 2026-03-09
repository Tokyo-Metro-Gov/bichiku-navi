<i18n>
{
  "ja": {
    "title": "備蓄スコア結果",
    "imageAlt": "備蓄スコアのサムネイル",
    "imageLoading": "画像生成中...",
    "scoreLabel": "スコア",
    "pointUnit": "点",
    "copyUrl": "共有用URLをコピー",
    "copiedUrl": "URLをコピーしました",
    "shareHelp": "投稿文をコピーしてシェアしよう！",
    "shareLead": "東京備蓄ナビで現在の備蓄状況をチェックしました！",
    "shareScoreTitle": "【あなたの備蓄スコア】",
    "shareScoreSuffix": "点！",
    "shareCta": "あなたも備蓄の状況をチェックしてみましょう↓",
    "shareTags": "#東京備蓄ナビ #備蓄スコア #日常備蓄",
    "copyPost": "投稿文をコピー",
    "copiedPost": "コピーしました",
    "copyPostAria": "投稿文をコピー",
    "compareTitle": "\\ 同じような世帯構成・お住まいの方の備蓄状況は/",
    "averageSpeech": "都民の平均スコアはこちらです",
    "close": "閉じる",
    "tabNotSet": "世帯属性未設定",
    "tabSingle": "単身",
    "tabMulti": "複数人世帯",
    "tabApartment": "集合住宅",
    "tabDetached": "戸建て",
    "tabWithChild": "子供がいる世帯",
    "rateLessThan1": "1日分未満",
    "rateDay1": "1日分",
    "rateDay2": "2日分",
    "rateDay3": "3日分",
    "rateDay4to6": "4〜6日分",
    "rateWeekOrMore": "1週間以上",
    "compareHigher": "都民平均（{average}点）より{diff}点高いです",
    "compareLower": "都民平均（{average}点）より{diff}点低いです",
    "compareSame": "都民平均（{average}点）と同じです",
    "previousUp": "前回より {diff}点UPしました！",
    "previousDown": "前回より {diff}点DOWNしました！",
    "previousSame": "前回と同じ点数でした"
  },
  "en": {
    "title": "Stockpile Score Result",
    "imageAlt": "Stockpile score thumbnail",
    "imageLoading": "Generating image...",
    "scoreLabel": "Score",
    "pointUnit": " pts",
    "copyUrl": "Copy share URL",
    "copiedUrl": "URL copied",
    "shareHelp": "Copy the post text and share!",
    "shareLead": "I checked my current stockpile status on Tokyo Stockpile Navi!",
    "shareScoreTitle": "[Your Stockpile Score]",
    "shareScoreSuffix": " pts!",
    "shareCta": "Check your stockpile status too:",
    "shareTags": "#TokyoStockpileNavi #StockpileScore #EverydayStockpile",
    "copyPost": "Copy post text",
    "copiedPost": "Copied",
    "copyPostAria": "Copy post text",
    "compareTitle": "/ Stockpile status of households similar to yours /",
    "averageSpeech": "Average score of Tokyo residents",
    "close": "Close",
    "tabNotSet": "Household not set",
    "tabSingle": "Single",
    "tabMulti": "Multiple-person household",
    "tabApartment": "Apartment",
    "tabDetached": "Detached house",
    "tabWithChild": "With children",
    "rateLessThan1": "Less than 1 day",
    "rateDay1": "1 day",
    "rateDay2": "2 days",
    "rateDay3": "3 days",
    "rateDay4to6": "4-6 days",
    "rateWeekOrMore": "1 week or more",
    "compareHigher": "{diff} points higher than the Tokyo average ({average})",
    "compareLower": "{diff} points lower than the Tokyo average ({average})",
    "compareSame": "Same as the Tokyo average ({average})",
    "previousUp": "{diff} points UP from previous",
    "previousDown": "{diff} points DOWN from previous",
    "previousSame": "Same score as previous"
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
        <div class="ManageShare">
          <div class="ManageShare__image">
            <img
              v-if="shareImageUrl"
              :src="shareImageUrl"
              :alt="$t('imageAlt')"
              class="ManageShare__imagePreview"
            />
            <span v-else class="ManageShare__imageLoading">{{ $t('imageLoading') }}</span>
          </div>
          <p class="ManageShare__score">{{ $t('scoreLabel') }}：{{ selectedScorePoints }}{{ $t('pointUnit') }}</p>
          <button type="button" class="ManageShare__copy" @click="copyShareUrl">{{ $t('copyUrl') }}</button>
          <p v-if="isShareCopied" class="ManageShare__copied">{{ $t('copiedUrl') }}</p>
          <p class="ManageShare__help">{{ $t('shareHelp') }}</p>
          <div class="ManageShare__text">
            {{ $t('shareLead') }}<br />
            <br />
            {{ $t('shareScoreTitle') }}<br />
            {{ selectedScorePoints }}{{ $t('shareScoreSuffix') }}<br />
            <br />
            {{ compareAverageDiffText }}<br />
            <template v-if="previousScoreDiffText">
              {{ previousScoreDiffText }}<br />
            </template>
            <br />
            {{ $t('shareCta') }}<br />
            {{ toolPageUrl }}<br />
            <br />
            {{ $t('shareTags') }}<br />
          </div>
          <div class="ManageShare__textCopyRow">
            <span class="ManageShare__textCopyLabel" :class="{ '-copied': isShareTextCopied }">
              {{ isShareTextCopied ? $t('copiedPost') : $t('copyPost') }}
            </span>
            <button type="button" class="ManageShare__textCopy" @click="copyShareText" :aria-label="$t('copyPostAria')">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="8" y="3" width="12" height="16" rx="2" />
                <path d="M6 7H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1" />
              </svg>
            </button>
          </div>
        </div>
        <section class="ManageCompare">
          <p class="ManageCompare__title">{{ $t('compareTitle') }}</p>
          <div class="ManageCompare__tabs">
            <button
              v-for="tab in householdTabs"
              :key="tab"
              type="button"
              class="ManageCompare__tab -active"
              v-html="tab"
            />
          </div>
          <div class="ManageCompare__body">
            <div class="ManageCompare__list">
              <div v-for="item in compareRates" :key="item.label" class="ManageCompare__listItem">
                <span class="ManageCompare__listLabel">{{ item.label }}</span>
                <span class="ManageCompare__listColon">：</span>
                <span class="ManageCompare__listValue">{{ item.value }}</span>
              </div>
            </div>
            <div class="ManageCompare__average">
              <div class="ManageCompare__speech">
                <span class="ManageCompare__speechText">{{ $t('averageSpeech') }}</span><br />
                <span class="ManageCompare__speechScore">{{ compareAverageScore }}</span>
              </div>
              <img
                class="ManageCompare__mascotImage"
                src="~/assets/images/common/footer/dammy09.png"
                srcset="
                  ~/assets/images/common/footer/dammy09.png    1x,
                  ~/assets/images/common/footer/dammy09@2x.54f876b.png 2x
                "
                alt=""
              />
            </div>
          </div>
        </section>
        <section class="ToolResult_reccomendtips">
          <div class="ToolResult__recommendTipsHeader">
            <p class="ToolResult__recommendTipsTitle">
              {{ recommendTipsTitle }}
            </p>
          </div>
          <img
            src="~/assets/images/manage/dammy05.png"
            srcset="
              ~/assets/images/manage/dammy05.png    1x,
              ~/assets/images/manage/dammy05@2x.png 2x
            "
            alt=""
            class="ToolResult__recommendTipsImage"
          />
          <div class="TipsList">
            <template v-for="({ id, date, title }, index) in recommendTips">
              <tips-list-item
                :id="id"
                :key="`recommendTips${index}`"
                :date="date"
                :title="title[$i18n.locale]"
                :open-in-new-tab="true"
              />
            </template>
          </div>
          <div class="ToolResult__recommendTipsMore">
            <div class="Button -yellow -sm">
              <a class="Button__link" :href="localePath($getPath('tips'))" target="_blank" rel="noopener">
                {{ recommendTipsMoreText }}
              </a>
            </div>
          </div>
        </section>
        <div class="ManageModal__action">
          <button type="button" class="ManageModal__closeButton" @click="$emit('close')">{{ $t('close') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TipsListItem from '@partials/tips/TipsListItem'
import scoreConfig from '@@/score.config.json'

const shareScoreOptions = scoreConfig.scores
const scoreCommentMap = scoreConfig.scoreCommentMap
const shareImageMap = {
  0: require('~/assets/images/manage/dammy06.png'),
  15: require('~/assets/images/manage/dammy08.png'),
  30: require('~/assets/images/manage/dammy09.png'),
  45: require('~/assets/images/manage/dammy10.png'),
  60: require('~/assets/images/manage/dammy11.png'),
  75: require('~/assets/images/manage/dammy12.png'),
  90: require('~/assets/images/manage/dammy13.png'),
  100: require('~/assets/images/manage/dammy07.png')
}

const householdCompareTable = {
  single_apartment_nochild: {
    label: 'single_apartment_nochild',
    averageScore: 0,
    rates: {
      lessThan1: 0,
      day1: 0,
      day2: 0,
      day3: 0,
      day4to6: 0,
      weekOrMore: 0
    }
  },
  multi_apartment_child: {
    label: 'multi_apartment_child',
    averageScore: 0,
    rates: {
      lessThan1: 0,
      day1: 0,
      day2: 0,
      day3: 0,
      day4to6: 0,
      weekOrMore: 0
    }
  },
  multi_apartment_nochild: {
    label: 'multi_apartment_nochild',
    averageScore: 0,
    rates: {
      lessThan1: 0,
      day1: 0,
      day2: 0,
      day3: 0,
      day4to6: 0,
      weekOrMore: 0
    }
  },
  single_detached_nochild: {
    label: 'single_detached_nochild',
    averageScore: 0,
    rates: {
      lessThan1: 0,
      day1: 0,
      day2: 0,
      day3: 0,
      day4to6: 0,
      weekOrMore: 0
    }
  },
  multi_detached_child: {
    label: 'multi_detached_child',
    averageScore: 0,
    rates: {
      lessThan1: 0,
      day1: 0,
      day2: 0,
      day3: 0,
      day4to6: 0,
      weekOrMore: 0
    }
  },
  multi_detached_nochild: {
    label: 'multi_detached_nochild',
    averageScore: 0,
    rates: {
      lessThan1: 0,
      day1: 0,
      day2: 0,
      day3: 0,
      day4to6: 0,
      weekOrMore: 0
    }
  }
}

export default {
  name: 'ManageScoreResultModal',
  components: {
    TipsListItem
  },
  props: {
    selectedScoreDays: {
      type: Number,
      required: true
    },
    shareScore: {
      type: Number,
      required: true
    },
    shareAverageScore: {
      type: Number,
      required: true
    },
    shareDiffScore: {
      type: Number,
      required: true
    },
    recommendTips: {
      type: Array,
      required: true
    },
    recommendTipsTitle: {
      type: String,
      required: true
    },
    recommendTipsMoreText: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isShareCopied: false,
      isShareTextCopied: false,
      shareUrlCopiedTimer: null,
      shareTextCopiedTimer: null
    }
  },
  computed: {
    latestToolValues() {
      const source = this.$localStorage.get('$toolValues') || {}

      if (Array.isArray(source.history) && source.history.length > 0) {
        const latest = source.history[0]
        if (latest && latest.values && typeof latest.values === 'object') {
          return latest.values
        }
      }

      const { history, date, ...plainValues } = source
      return plainValues
    },
    selectedScorePoints() {
      const scoreTable = [0, 15, 30, 45, 60, 75, 90, 100]
      return scoreTable[this.selectedScoreDays] ?? 0
    },
    householdKey() {
      const values = this.latestToolValues
      return values.householdKey || null
    },
    compareData() {
      return this.householdKey ? householdCompareTable[this.householdKey] : null
    },
    householdLabel() {
      if (!this.compareData) {
        return this.$t('tabNotSet')
      }
      if (this.compareData.label && typeof this.compareData.label === 'object') {
        return this.compareData.label[this.$i18n.locale] || this.compareData.label.ja
      }
      return this.compareData.label
    },
    householdTabs() {
      if (!this.householdKey) {
        return [this.$t('tabNotSet')]
      }

      const [group, housing, child] = this.householdKey.split('_')
      const tabs = [group === 'single' ? this.$t('tabSingle') : this.$t('tabMulti')]
      tabs.push(housing === 'apartment' ? this.$t('tabApartment') : this.$t('tabDetached'))

      if (child === 'child') {
        tabs.push(this.$t('tabWithChild'))
      }

      return tabs
    },
    compareAverageScore() {
      return this.compareData ? `${this.compareData.averageScore}${this.$t('pointUnit')}` : '-'
    },
    compareAverageDiffText() {
      const averageSource = this.compareData ? this.compareData.averageScore : this.shareAverageScore
      const average = Number(averageSource ?? 0)
      const score = this.selectedScorePoints ?? 0
      const diff = score - average
      const absDiff = Math.abs(diff)

      if (diff > 0) {
        return this.$t('compareHigher', { average, diff: absDiff })
      }

      if (diff < 0) {
        return this.$t('compareLower', { average, diff: absDiff })
      }

      return this.$t('compareSame', { average })
    },
    previousScoreDiffText() {
      const stored = this.$localStorage.get('$bichikuscoreValues')
      const history = stored && Array.isArray(stored.history) ? stored.history : []

      if (history.length < 2) {
        return ''
      }

      const latest = history[0]
      const previous = history[1]

      if (!previous || (latest && previous.date && latest.date === previous.date)) {
        return ''
      }

      const previousScore = Number(previous.score || 0)
      const currentScore = Number(this.selectedScorePoints || 0)
      const diff = currentScore - previousScore
      const absDiff = Math.abs(diff)

      if (diff > 0) {
        return this.$t('previousUp', { diff: absDiff })
      }

      if (diff < 0) {
        return this.$t('previousDown', { diff: absDiff })
      }

      return this.$t('previousSame')
    },
    compareRates() {
      if (!this.compareData) {
        return [
          { label: this.$t('rateLessThan1'), value: '-' },
          { label: this.$t('rateDay1'), value: '-' },
          { label: this.$t('rateDay2'), value: '-' },
          { label: this.$t('rateDay3'), value: '-' },
          { label: this.$t('rateDay4to6'), value: '-' },
          { label: this.$t('rateWeekOrMore'), value: '-' }
        ]
      }

      const { rates } = this.compareData
      return [
        { label: this.$t('rateLessThan1'), value: `${rates.lessThan1}%` },
        { label: this.$t('rateDay1'), value: `${rates.day1}%` },
        { label: this.$t('rateDay2'), value: `${rates.day2}%` },
        { label: this.$t('rateDay3'), value: `${rates.day3}%` },
        { label: this.$t('rateDay4to6'), value: `${rates.day4to6}%` },
        { label: this.$t('rateWeekOrMore'), value: `${rates.weekOrMore}%` }
      ]
    },
    bichikuScoreValue() {
      const stored = this.$localStorage.get('$bichikuscoreValues') || {}
      const score = Number(stored.score)
      if (Number.isFinite(score)) {
        return score
      }
      return this.selectedScorePoints
    },
    shareImageScore() {
      const score = Number(this.bichikuScoreValue)
      if (!Number.isFinite(score)) {
        return shareScoreOptions[0]
      }
      return shareScoreOptions.includes(score) ? score : shareScoreOptions[0]
    },
    shareImageUrl() {
      return shareImageMap[this.shareImageScore] || shareImageMap[0]
    },
    sharePageUrl() {
      const score = this.shareImageScore
      return `https://www.bichiku.metro.tokyo.lg.jp/manage/score/${encodeURIComponent(score)}/`
    },
    toolPageUrl() {
      return 'https://www.bichiku.metro.tokyo.lg.jp/tool/'
    },
    scoreCommentText() {
      const score = this.bichikuScoreValue
      return scoreCommentMap[score] || scoreCommentMap[0]
    }
  },
  methods: {
    async copyShareUrl() {
      const url = this.sharePageUrl
      this.isShareCopied = false
      if (this.shareUrlCopiedTimer) {
        clearTimeout(this.shareUrlCopiedTimer)
        this.shareUrlCopiedTimer = null
      }
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url)
        this.isShareCopied = true
        this.shareUrlCopiedTimer = setTimeout(() => {
          this.isShareCopied = false
          this.shareUrlCopiedTimer = null
        }, 2000)
        return
      }

      const textarea = document.createElement('textarea')
      textarea.value = url
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      this.isShareCopied = true
      this.shareUrlCopiedTimer = setTimeout(() => {
        this.isShareCopied = false
        this.shareUrlCopiedTimer = null
      }, 2000)
    },
    buildShareText() {
      const lines = [
        this.$t('shareLead'),
        '',
        this.$t('shareScoreTitle'),
        `${this.selectedScorePoints}${this.$t('shareScoreSuffix')}`,
        '',
        this.compareAverageDiffText
      ]

      if (this.previousScoreDiffText) {
        lines.push(this.previousScoreDiffText)
      }

      lines.push(
        '',
        this.$t('shareCta'),
        this.toolPageUrl,
        '',
        this.$t('shareTags')
      )

      return lines.join('\n')
    },
    async copyShareText() {
      const text = this.buildShareText()

      this.isShareTextCopied = false
      if (this.shareTextCopiedTimer) {
        clearTimeout(this.shareTextCopiedTimer)
        this.shareTextCopiedTimer = null
      }
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text)
        this.isShareTextCopied = true
        this.shareTextCopiedTimer = setTimeout(() => {
          this.isShareTextCopied = false
          this.shareTextCopiedTimer = null
        }, 2000)
        return
      }

      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      this.isShareTextCopied = true
      this.shareTextCopiedTimer = setTimeout(() => {
        this.isShareTextCopied = false
        this.shareTextCopiedTimer = null
      }, 2000)
    }
  }
}
</script>

<style src="~/assets/css/partials/manage/ManageScoreResultModal.css" scoped></style>













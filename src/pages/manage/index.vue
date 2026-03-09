<i18n>
{
  "ja": {
    "meta": {
      "description": "備蓄品の管理状況を確認できるページです。"
    },
    "title01": "備蓄状況チェックリスト",
    "text01": "備蓄品の数量・消費期限を入力することで備蓄状況を記録・更新することができます。定期的に確認しましょう。",
    "headerItem": "備蓄品",
    "headerQuantity": "備蓄数量 / 備蓄推奨量",
    "headerFulfillment": "充足状況",
    "headerPrevious": "前回比較",
    "headerWarning": "期限警告",
    "stockHeader": "登録済みの在庫",
    "save": "保存",
    "cancel": "キャンセル",
    "stockEmpty": "登録済みの在庫はありません",
    "addTitle": "在庫を追加",
    "labelQuantity": "数量",
    "labelExpiry": "消費期限（任意）※年は西暦でご入力ください。（例：2026年）",
    "placeholderExpiry": "年/月/日",
    "placeholderExpiryMonth": "年/月",
    "placeholderExpiryYear": "年",
    "expiryModeDate": "年/月/日",
    "expiryModeMonth": "年/月",
    "expiryModeYear": "年",
    "add": "追加",
    "edit": "編集",
    "delete": "削除",
    "back": "前のページに戻る",
    "checkScore": "備蓄スコアを確認する",
    "checkScoreLead": "今の備蓄スコアをチェックしよう！",
    "goodLabel": "good!",
    "recommendTipsTitle": "あなたにおすすめの記事は",
    "recommendTipsMore": "もっと見る",
    "petStockpileGroup": "ペットに必要な備蓄リスト",
    "dateEmpty": "-----------",
    "expiryExpired": "期限切れ",
    "expiryNear": "期限間近",
    "expiryExpiredShort": "切",
    "expiryNearShort": "近",
    "confirmRemove": "この在庫を削除しますか？",
    "previousUp": "UP",
    "previousDown": "DOWN",
    "recommendedNone": "無し",
    "quantityUnit": {
      "9": "セット",
      "22": "本",
      "30": "セット",
      "33": "日分",
      "34": "個",
      "37": "枚",
      "53": "日分",
      "54": "個",
      "55": "個",
      "56": "個",
      "57": "枚",
      "59": "台",
      "63": "日分",
      "64": "日分",
      "65": "個",
      "66": "日分",
      "67": "個"
    },
    "recommendedOverride": {
      "9": "適宜",
      "22": "ガスコンロ1台につき1日4/3本",
      "30": "単1〜単4までのセット",
      "33": "1人1カ月分",
      "34": "携帯台数に合わせて用意",
      "37": "適宜",
      "53": "医師・薬剤師に相談",
      "54": "2個で10日",
      "55": "適量",
      "56": "適量",
      "59": "最低3台",
      "63": "無し",
      "64": "無し",
      "65": "無し",
      "66": "無し",
      "67": "無し"
    }
  },
  "en": {
    "meta": {
      "description": "Manage page"
    },
    "title01": "Stockpile Management Checklist",
    "text01": "Check your stockpile status and update it regularly.",
    "headerItem": "Stockpile item",
    "headerQuantity": "Stockpile / Recommended",
    "headerFulfillment": "Fulfillment",
    "headerPrevious": "Previous",
    "headerWarning": "Expiry warning",
    "stockHeader": "Registered stock",
    "save": "Save",
    "cancel": "Cancel",
    "stockEmpty": "No registered stock.",
    "addTitle": "Add stock",
    "labelQuantity": "Quantity",
    "labelExpiry": "Expiry date (optional)",
    "placeholderExpiry": "YYYY/MM/DD",
    "placeholderExpiryMonth": "YYYY/MM",
    "placeholderExpiryYear": "YYYY",
    "expiryModeDate": "YYYY/MM/DD",
    "expiryModeMonth": "YYYY/MM",
    "expiryModeYear": "YYYY",
    "add": "Add",
    "edit": "Edit",
    "delete": "Delete",
    "back": "Back to previous page",
    "checkScore": "Check stockpile score",
    "checkScoreLead": "Check your current stockpile score!",
    "goodLabel": "good!",
    "recommendTipsTitle": "Recommended articles for you",
    "recommendTipsMore": "More",
    "petStockpileGroup": "Stockpile list for your pets",
    "dateEmpty": "-----------",
    "expiryExpired": "Expired",
    "expiryNear": "Near expiry",
    "expiryExpiredShort": "Exp",
    "expiryNearShort": "Near",
    "confirmRemove": "Remove this stock?",
    "previousUp": "UP",
    "previousDown": "DOWN",
    "recommendedNone": "None",
    "quantityUnit": {
      "9": "set",
      "22": "canister",
      "30": "set",
      "33": "days",
      "34": "items",
      "37": "sheets",
      "53": "days",
      "54": "items",
      "55": "items",
      "56": "items",
      "57": "sheets",
      "59": "units",
      "63": "days",
      "64": "days",
      "65": "items",
      "66": "days",
      "67": "items"
    },
    "recommendedOverride": {
      "9": "As needed",
      "22": "4/3 canisters per day per gas stove",
      "30": "Set of batteries (D to AAA)",
      "33": "One month per person",
      "34": "Prepare for the number of devices",
      "37": "As needed",
      "53": "Consult a doctor/pharmacist",
      "54": "2 items for 10 days",
      "55": "Appropriate amount",
      "56": "Appropriate amount",
      "59": "At least 3 units",
      "63": "None",
      "64": "None",
      "65": "None",
      "66": "None",
      "67": "None"
    }
  }
}
</i18n>

<template>
  <div class="ManagePage">
    <section class="Container">
      <div class="ManageHero">
        <div class="ManageHero__bar">
          <h1 class="ManageHero__title">{{ $t('title01') }}</h1>
        </div>
        <div class="ManageHero__body">
          <p class="ManageHero__text">
            {{ $t('text01') }}
          </p>
        </div>
      </div>
    </section>

    <section class="Container -m">
      <div v-for="key in category" :key="key" class="ManageSection" :data-section-key="key">
        <h2
          class="ManageSection__title"
          :class="{ 'is-collapsed': isSectionCollapsed(key) }"
          @click="toggleSection(key)"
        >
          <button
            type="button"
            class="ManageSection__toggle"
            :aria-expanded="!isSectionCollapsed(key)"
            @click.stop="toggleSection(key)"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" :class="{ 'is-collapsed': isSectionCollapsed(key) }">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <span class="ManageSection__titleText">{{ key }}</span>
        </h2>
          <div v-show="!isSectionCollapsed(key)">
          <div class="ManageSection__header">
            <span class="ManageSection__toggleSpacer" aria-hidden="true"></span>
            <span>{{ $t('headerItem') }}</span>
            <span class="ManageSection__headerShift">{{ $t('headerQuantity') }}</span>
            <span class="ManageSection__headerShift">{{ $t('headerFulfillment') }}</span>
            <span class="ManageSection__headerShift">{{ $t('headerPrevious') }}</span>
            <span>{{ $t('headerWarning') }}</span>
          </div>

          <ul class="ManageList">
          <li v-for="item in categoryStockpileList[key]" :key="item.id" class="ManageItem">
            <div
              class="ManageItem__header"
              @click="toggleItem(item.id)"
            >
              <button
                type="button"
                class="ManageItem__toggle"
                :aria-expanded="!isCollapsed(item.id)"
                @click.stop="toggleItem(item.id)"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" :class="{ 'is-collapsed': isCollapsed(item.id) }">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div class="ManageItem__nameWrap">
                <span class="ManageItem__mobileLabel">{{ $t('headerItem') }}</span>
                <div class="ManageItem__name">{{ item.item[$i18n.locale] }}</div>
                <div v-if="shouldShowAchievement(item.id)" class="ManageItem__achievement">
                  <img
                    src="~/assets/images/manage/dammy01.png"
                    srcset="
                      ~/assets/images/manage/dammy01.png 1x
                    "
                    alt=""
                    class="ManageItem__achievementImg"
                  />
                  <span class="ManageItem__achievementText">{{ $t('goodLabel') }}</span>
                </div>
              </div>
              <div class="ManageItem__summary">
                <span class="ManageItem__mobileLabel">{{ $t('headerQuantity') }}</span>
                <div class="ManageItem__summaryValue">
                  <span class="ManageItem__summaryCurrent">
                    {{ formatDisplayQuantity(item.id, getTotalQuantity(item.id), item.unit) }}
                  </span>
                  <span class="ManageItem__summarySlash">/</span>
                  <span class="ManageItem__summaryRecommended">
                    {{ formatRecommendedDisplay(item) }}
                  </span>
                </div>
              </div>
              <div v-if="!isQuantityComparisonItem(item.id)" class="ManageItem__progress ManageItem__progress--shifted">
                <span class="ManageItem__mobileLabel">{{ $t('headerFulfillment') }}</span>
                <div class="ManageItem__progressBar">
                  <span :style="{ width: `${getFulfillmentRate(item.id)}%` }" />
                </div>
                <div class="ManageItem__progressValue">{{ getFulfillmentRate(item.id) }}%</div>
              </div>
              <div v-else class="ManageItem__progress ManageItem__progress--empty">
                <span class="ManageItem__progressEmpty">-</span>
              </div>
              <div class="ManageItem__prev">
                <span class="ManageItem__mobileLabel">{{ $t('headerPrevious') }}</span>
                  <span
                    v-if="getPreviousComparisonDisplay(item.id, item.unit) !== null"
                    :class="getPreviousComparisonClass(item.id)"
                  >
                    <span class="ManageItem__prevIcon" aria-hidden="true">
                      <svg
                        v-if="getPreviousComparisonDirection(item.id) === 'up'"
                        viewBox="0 0 24 24"
                        class="ManageItem__prevSvg"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="11" fill="#16a34a" />
                        <path
                          fill="#ffffff"
                          d="M12 6 L6.5 11.5 H10 V18 H14 V11.5 H17.5 Z"
                        />
                      </svg>
                        <svg
                          v-else-if="getPreviousComparisonDirection(item.id) === 'down'"
                          viewBox="0 0 24 24"
                          class="ManageItem__prevSvg"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="11" fill="#dc2626" />
                          <path
                            fill="#ffffff"
                            d="M12 18 L17.5 12.5 H14 V6 H10 V12.5 H6.5 Z"
                          />
                        </svg>
                        <svg
                          v-else-if="getPreviousComparisonDirection(item.id) === 'same'"
                          viewBox="0 0 24 24"
                          class="ManageItem__prevSvg ManageItem__prevSvg--same"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="11" fill="#ddd" />
                          <path
                            fill="#ffffff"
                            d="M12 6 L6.5 11.5 H10 V18 H14 V11.5 H17.5 Z"
                          />
                        </svg>
                    </span>
                  </span>
                <span v-else class="ManageItem__prevEmpty">-</span>
              </div>
              <div class="ManageItem__warning">
                <span class="ManageItem__mobileLabel">{{ $t('headerWarning') }}</span>
                <span v-if="getWarning(item.id).label" :class="getWarning(item.id).className">
                  {{ getWarning(item.id).label }}
                </span>
              </div>
            </div>

            <div v-show="!isCollapsed(item.id)" class="ManageItem__body">
              <div class="ManageItem__stockHeader">{{ $t('stockHeader') }}</div>
              <div class="ManageItem__stocks">

                <template v-if="getCurrentExpirations(item.id).length">
                  <div
                    v-for="entry in getCurrentExpirations(item.id)"
                    :key="`${item.id}-${entry.date}-${entry._index}`"
                    class="ManageItem__stock"
                  >
                    <template v-if="isEditingExpiration(item.id, entry._index)">
                      <div class="ManageItem__stockEdit">
                        <input
                          v-model="editInputs[item.id].quantity"
                          type="number"
                          min="0"
                          class="ManageItem__stockInput"
                        />
                        <input
                          v-model="editInputs[item.id].date"
                          type="date"
                          class="ManageItem__stockInput"
                          max="9999-12-31"
                        />
                      </div>
                      <div class="ManageItem__stockEditActions">
                        <button type="button" class="ManageItem__stockSave" @click="saveExpirationEdit(item.id)">
                          {{ $t('save') }}
                        </button>
                        <button type="button" class="ManageItem__stockCancel" @click="cancelEditExpiration(item.id)">
                          {{ $t('cancel') }}
                        </button>
                      </div>
                    </template>
                    <template v-else>
                      <span :class="['ManageItem__stockQty', getExpiryStatus(entry.date).className]">{{ entry.quantity }}{{ getQuantityUnitLabel(item.id, item.unit) }}</span>
                        <span :class="getExpiryStatus(entry.date).className">
                          {{ formatDisplayDateWithStatus(entry.date) }}
                        </span>
                      <div class="ManageItem__stockActions">
                        <button
                          type="button"
                          class="ManageItem__stockEditButton"
                          :aria-label="$t('edit')"
                          @click="startEditExpiration(item.id, entry)"
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 20l4.5-1L19 8.5 15.5 5 5 15.5 4 20z" />
                            <path d="M14.5 5.5l3 3" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          class="ManageItem__stockDelete"
                          :aria-label="$t('delete')"
                          @click="confirmRemoveExpiration(item.id, entry._index)"
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                            <path d="M10 11v6" />
                            <path d="M14 11v6" />
                            <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                          </svg>
                        </button>
                      </div>
                    </template>
                  </div>
                </template>
                <div v-else class="ManageItem__stockEmpty">{{ $t('stockEmpty') }}</div>
              </div>

              <div class="ManageItem__add">
                <div class="ManageItem__addTitle">{{ $t('addTitle') }}</div>
                <div class="ManageItem__addInputs">
                  <label class="ManageItem__addLabel">
                    {{ $t('labelQuantity') }}
                    <input
                      v-model="itemInputs[item.id].quantity"
                      type="number"
                      min="0"
                      class="ManageItem__addInput"
                      @keydown="preventNumberInputKey"
                    />
                  </label>
                  <label class="ManageItem__addLabel">
                    {{ $t('labelExpiry') }}
                    <div class="ManageItem__expiryMode" role="group" :aria-label="$t('labelExpiry')">
                      <button
                        type="button"
                        class="ManageItem__expiryModeButton"
                        :class="{ 'is-active': getExpiryInputMode(item.id) === 'date' }"
                        :aria-pressed="getExpiryInputMode(item.id) === 'date'"
                        @click="setExpiryInputMode(item.id, 'date')"
                      >
                        {{ $t('expiryModeDate') }}
                      </button>
                      <button
                        type="button"
                        class="ManageItem__expiryModeButton"
                        :class="{ 'is-active': getExpiryInputMode(item.id) === 'month' }"
                        :aria-pressed="getExpiryInputMode(item.id) === 'month'"
                        @click="setExpiryInputMode(item.id, 'month')"
                      >
                        {{ $t('expiryModeMonth') }}
                      </button>
                      <button
                        type="button"
                        class="ManageItem__expiryModeButton"
                        :class="{ 'is-active': getExpiryInputMode(item.id) === 'year' }"
                        :aria-pressed="getExpiryInputMode(item.id) === 'year'"
                        @click="setExpiryInputMode(item.id, 'year')"
                      >
                        {{ $t('expiryModeYear') }}
                      </button>
                    </div>
                    <input
                      v-model="itemInputs[item.id].date"
                      :type="getExpiryInputType(item.id)"
                      class="ManageItem__addInput ManageItem__addInput--date"
                      :placeholder="getExpiryPlaceholder(item.id)"
                      :max="getExpiryInputMax(item.id)"
                      :maxlength="getExpiryInputMaxLength(item.id)"
                      @input="handleExpiryInput(item.id)"
                      @keydown="preventNumberInputKey"
                    />
                  </label>
                  <button type="button" class="ManageItem__addButton" @click="addExpiration(item)">
                    {{ $t('add') }}
                  </button>
                </div>
              </div>
            </div>
          </li>
          </ul>
        </div>
      </div>

    <section class="Container -s">
      <div class="ManageActions">
        <div class="Button -yellowPale -l">
          <nuxt-link :to="localePath($getPath('toolResult'))" class="Button__link">{{ $t('back') }}</nuxt-link>
        </div>
        <div class="Button -yellow -l">
          <button type="button" class="Button__link" @click="openScoreModal">
            {{ $t('checkScore') }}
          </button>
        </div>
      </div>
    </section>

    <div class="ManageFloatButton">
      <button type="button" class="ManageFloatButton__link" @click="openScoreModal">
        {{ $t('checkScoreLead') }}
        <span class="ManageFloatButton__button">▶︎{{ $t('checkScore') }}</span>
      </button>
    </div>

    <manage-score-modal
      v-if="isScoreModalOpen"
      :selected-score-days="selectedScoreDays"
      @close="closeScoreModal"
      @select-day="selectScoreDay"
      @open-result="openScoreResultModal"
    />

    <manage-score-result-modal
      v-if="isScoreResultModalOpen"
      :selected-score-days="selectedScoreDays"
      :share-score="shareScore"
      :share-average-score="shareAverageScore"
      :share-diff-score="shareDiffScore"
      :recommend-tips="recommendTips"
      :recommend-tips-title="recommendTipsTitle"
      :recommend-tips-more-text="recommendTipsMoreText"
      @close="closeScoreResultModal"
    />
    </section>
  </div>
</template>

<script>
import head from '@mixins/head'
import { tipsTitles } from '@@/tips.config'
import ManageScoreModal from '@partials/manage/ManageScoreModal'
import ManageScoreResultModal from '@partials/manage/ManageScoreResultModal'
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
  categoryD2
} from '@@/stockpile.config'

const quantityComparisonItemIds = new Set([9, 22, 30, 33, 34, 37, 53, 54, 55, 56, 59, 63, 64, 65, 66, 67])

export default {
  name: 'Manage',
  components: {
    ManageScoreModal,
    ManageScoreResultModal
  },
  mixins: [head],
  localStorage: {
    $toolValues: {
      type: Object,
      default: {}
    },
    $bichikuscoreValues: {
      type: Object,
      default: {
        history: []
      }
    },
    $checklist: {
      type: Object,
      default: {
        items: {}
      }
    }
  },
  data() {
    return {
      bodyAttrs: {
        class: 'PageManage'
      },
      meta: {
        title: this.$getTitle('manage', this.$i18n.locale),
        description: this.$i18n.t('meta.description')
      },
      categoryStockpileList: {},
      category: [],
      itemInputs: {},
      expiryInputModes: {},
      currentDate: '',
      editingStock: {},
      editInputs: {},
      sectionCollapsed: {},
      collapsedItems: {},
      achievementTouched: {},
      isScoreModalOpen: false,
      isScoreResultModalOpen: false,
      selectedScoreDays: 7,
      shareScore: 80,
      shareAverageScore: 65,
      shareDiffScore: 5
    }
  },
  computed: {
    recommendTips() {
      const toolValues = this.getLatestToolValuesFromStorage(this.$toolValues)
      const isUpstairs = !!toolValues.isUpstairs
      const hasPet = !!toolValues.hasPet
      const candidates = tipsTitles.filter(({ category }) => {
        if (category === 'apartment') {
          return isUpstairs
        }
        if (category === 'hasPet') {
          return hasPet
        }
        return true
      })
      const shuffle = (list) => {
        const items = [...list]
        for (let i = items.length - 1; i > 0; i -= 1) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[items[i], items[j]] = [items[j], items[i]]
        }
        return items
      }
      const priorities = candidates.map((item) => Number(item.priority) || 0)
      const maxPriority = priorities.length ? Math.max(...priorities) : 0
      const highPriority = candidates.filter((item) => (Number(item.priority) || 0) === maxPriority)
      const rest = candidates.filter((item) => (Number(item.priority) || 0) !== maxPriority)

      return [...shuffle(highPriority), ...shuffle(rest)].slice(0, 6)
    },
    recommendTipsTitle() {
      return this.$t('recommendTipsTitle')
    },
    recommendTipsMoreText() {
      return this.$t('recommendTipsMore')
    }
  },
  mounted() {
    this.currentDate = this.formatDate(new Date())
    this.buildCategoryStockpileList()
  },
  methods: {
    getLatestToolValuesFromStorage(storedValues) {
      const source =
        storedValues && typeof storedValues === 'object'
          ? storedValues
          : this.$localStorage.get('$toolValues')

      if (!source || typeof source !== 'object') {
        return {}
      }

      if (Array.isArray(source.history) && source.history.length > 0) {
        const latest = source.history[0]
        if (latest && latest.values && typeof latest.values === 'object') {
          return { ...latest.values }
        }
      }

      const { history, date, ...plainValues } = source
      return plainValues
    },
    getScoreForDays(days) {
      const scoreTable = [0, 15, 30, 45, 60, 75, 90, 100]
      if (typeof days !== 'number' || days < 0) {
        return 0
      }
      return scoreTable[days] ?? 0
    },
    saveScoreHistory() {
      const date = this.currentDate || this.formatDate(new Date())
      const entry = {
        date,
        days: this.selectedScoreDays,
        score: this.getScoreForDays(this.selectedScoreDays)
      }

      const stored = this.$localStorage.get('$bichikuscoreValues')
      const history = stored && Array.isArray(stored.history) ? [...stored.history] : []
      const sameDateIndex = history.findIndex((item) => item && item.date === date)

      if (sameDateIndex >= 0) {
        history.splice(sameDateIndex, 1, entry)
      } else {
        history.unshift(entry)
      }

      if (history.length > 2) {
        history.length = 2
      }

      this.$localStorage.set('$bichikuscoreValues', { history })
    },
    formatDate(date) {
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')

      return `${year}-${month}-${day}`
    },
    formatDisplayDate(dateString) {
      if (!dateString) {
        return this.$t('dateEmpty')
      }

      const [year, month, day] = dateString.split('-')
      return `${year}/${month}/${day}`
    },
    formatDisplayDateWithStatus(dateString) {
      const displayDate = this.formatDisplayDate(dateString)
      const status = this.getExpiryStatus(dateString)
      if (status.label === this.$t('expiryExpired')) {
        return `${displayDate}（${this.$t('expiryExpiredShort')}）`
      }
      if (status.label === this.$t('expiryNear')) {
        return `${displayDate}（${this.$t('expiryNearShort')}）`
      }
      return displayDate
    },
    parseDate(dateString) {
      const [year, month, day] = dateString.split('-').map(Number)
      return new Date(year, month - 1, day)
    },
    isExpirationExpired(dateString) {
      if (!dateString) {
        return false
      }

      const today = this.parseDate(this.currentDate)
      const target = this.parseDate(dateString)
      const diffDays = Math.floor((target - today) / 86400000)
      return diffDays < 0
    },
    daysInMonth(year, month) {
      return new Date(year, month, 0).getDate()
    },
    getExpiryInputMode(itemId) {
      return this.expiryInputModes[itemId] || 'date'
    },
    setExpiryInputMode(itemId, mode) {
      if (this.getExpiryInputMode(itemId) === mode) {
        return
      }

      this.$set(this.expiryInputModes, itemId, mode)
      const input = this.itemInputs[itemId]
      if (!input) {
        return
      }

      const normalized = this.normalizeExpirationInput(input.date)
      this.itemInputs[itemId].date = normalized ? this.formatExpirationForMode(normalized, mode) : ''
    },
    getExpiryInputType(itemId) {
      const mode = this.getExpiryInputMode(itemId)
      if (mode === 'month') {
        return 'month'
      }
      if (mode === 'year') {
        return 'number'
      }
      return 'date'
    },
    getExpiryInputMax(itemId) {
      const mode = this.getExpiryInputMode(itemId)
      if (mode === 'month') {
        return '9999-12'
      }
      if (mode === 'year') {
        return 9999
      }
      return '9999-12-31'
    },
    getExpiryInputMaxLength(itemId) {
      const mode = this.getExpiryInputMode(itemId)
      if (mode === 'year') {
        return 4
      }
      return null
    },
    handleExpiryInput(itemId) {
      const mode = this.getExpiryInputMode(itemId)
      if (mode !== 'year') {
        return
      }
      const input = this.itemInputs[itemId]
      if (!input) {
        return
      }
      const raw = String(input.date || '')
      input.date = raw.replace(/[^0-9]/g, '').slice(0, 4)
    },
    preventNumberInputKey(event) {
      if (!event || !event.target || event.target.type !== 'number') {
        return
      }
      if (event.key === 'e' || event.key === 'E' || event.key === '+' || event.key === '-' || event.key === '.') {
        event.preventDefault()
      }
    },
    getExpiryPlaceholder(itemId) {
      const mode = this.getExpiryInputMode(itemId)
      if (mode === 'month') {
        return this.$t('placeholderExpiryMonth')
      }
      if (mode === 'year') {
        return this.$t('placeholderExpiryYear')
      }
      return this.$t('placeholderExpiry')
    },
    formatExpirationForMode(dateString, mode) {
      if (!dateString) {
        return ''
      }

      const [year, month, day] = dateString.split('-')
      if (!year) {
        return ''
      }

      if (mode === 'year') {
        return year
      }
      if (mode === 'month') {
        return month ? `${year}-${month}` : year
      }
      return day ? `${year}-${month}-${day}` : `${year}-${month}`
    },
    formatExpirationInput(value) {
      if (!value) {
        return ''
      }

      const raw = String(value)
      const digits = raw.replace(/[^0-9]/g, '').slice(0, 8)
      if (digits.length >= 8) {
        const year = digits.slice(0, 4)
        const month = digits.slice(4, 6)
        const day = digits.slice(6, 8)
        return `${year}/${month}/${day}`
      }

      if (digits.length > 6) {
        const year = digits.slice(0, 4)
        const month = digits.slice(4, 6)
        const day = digits.slice(6)
        return `${year}/${month}/${day}`
      }

      if (digits.length >= 6) {
        const year = digits.slice(0, 4)
        const month = digits.slice(4, 6)
        return `${year}/${month}`
      }

      if (digits.length >= 4) {
        const year = digits.slice(0, 4)
        const rest = digits.slice(4)
        return rest ? `${year}/${rest}` : year
      }

      return digits
    },
    normalizeExpirationInput(value) {
      if (!value) {
        return ''
      }

      const trimmed = String(value).trim()
      if (!trimmed) {
        return ''
      }

      const digits = trimmed.replace(/[^0-9]/g, '')
      if (digits.length >= 8) {
        const year = Number(digits.slice(0, 4))
        const month = Number(digits.slice(4, 6))
        const day = Number(digits.slice(6, 8))
        if (!year || month < 1 || month > 12) {
          return ''
        }
        if (!day || day < 1 || day > this.daysInMonth(year, month)) {
          return ''
        }
        return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
      }

      if (digits.length >= 6) {
        const year = Number(digits.slice(0, 4))
        const month = Number(digits.slice(4, 6))
        if (!year || month < 1 || month > 12) {
          return ''
        }
        const lastDay = this.daysInMonth(year, month)
        return `${year}-${String(month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`
      }

      if (digits.length === 4) {
        const year = Number(digits)
        if (!year) {
          return ''
        }
        return `${year}-12-31`
      }

      const parts = trimmed.split('/').map((part) => part.trim()).filter(Boolean)
      if (!parts.length) {
        return ''
      }

      if (!/^\d{4}$/.test(parts[0])) {
        return ''
      }
      const year = Number(parts[0])
      if (!year) {
        return ''
      }

      if (parts.length === 1) {
        return `${year}-12-31`
      }

      const month = Number(parts[1])
      if (!month || month < 1 || month > 12) {
        return ''
      }

      if (parts.length === 2) {
        const lastDay = this.daysInMonth(year, month)
        return `${year}-${String(month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`
      }

      const day = Number(parts[2])
      if (!day || day < 1 || day > this.daysInMonth(year, month)) {
        return ''
      }

      return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    },
    getChecklist() {
      const stored = this.$localStorage.get('$checklist')

      if (!stored || typeof stored !== 'object') {
        return { items: {} }
      }

      if (!stored.items || typeof stored.items !== 'object') {
        stored.items = {}
      }

      return stored
    },
    persistChecklist(checklist) {
      this.$localStorage.set('$checklist', checklist)
    },
    buildCategoryStockpileList() {
      const toolValues = this.getLatestToolValuesFromStorage()
      const { isUpstairs = false, family = [], hasPet = false } = toolValues

      if (!Array.isArray(family) || family.length === 0) {
        this.category = []
        this.categoryStockpileList = {}
        return
      }

      const states = family.map(({ state }) => state)
      const includeAged = states.some((state) => /aged/.test(state))
      const onlyInfants = states.every((state) => /infants/.test(state))
      const sanitaryItemsGroup = states.some((state) => state === 'child2Female' || state === 'adultFemale')
      const skinCareGroup = states.filter((state) => /Female/.test(state) && !/^(infants|child1)/.test(state))
      const familyLength = family.length
      const stockpileRate = isUpstairs ? upStairsRate : downStairsRate
      const isHighRate = stockpileRate === upStairsRate
      const isLowRate = stockpileRate === downStairsRate
      const sumQuantity = (quantity, required) => {
        if (typeof required === 'object') {
          for (const state of states) {
            quantity += required[state]
          }
        }

        return quantity
      }

      const innerStockpileList = [
        ...stockpileList
        .map((stockpile) => {
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
                quantity = familyLength <= 5 ? 3 : 6
              } else if (isHighRate) {
                quantity = familyLength <= 5 ? 7 : 14
              }
            }
          } else if (categoryB1.includes(id)) {
            quantity = familyLength <= 5 ? 1 : 2
          } else if (categoryB2.includes(id)) {
            if (familyLength <= 3) {
              quantity = 1
            } else if (familyLength <= 6) {
              quantity = 2
            } else {
              quantity = 3
            }
          } else if (categoryB3.includes(id)) {
            quantity = familyLength <= 5 ? 2 : 4
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
            quantity = Math.ceil(sumQuantity(quantity, required) * stockpileRate)
          }

          return {
            ...stockpile,
            quantity
          }
        }),
        ...(hasPet
          ? petStockpileList.map((petItem) => ({
            ...petItem,
            group: {
              ja: this.$t('petStockpileGroup', 'ja'),
              en: this.$t('petStockpileGroup', 'en')
            },
            unit: petItem.unit || { ja: '', en: '' },
            quantity: ''
          }))
          : [])
      ]
        .filter(({ quantity }) => quantity !== 0)
        .sort((a, b) => (a.id < b.id ? -1 : 1))

      const checklist = this.getChecklist()
      this.ensureCurrentDateHistoryFromPrevious(checklist)

      this.category = Array.from(new Set(innerStockpileList.map((prop) => prop.group[this.$i18n.locale])))
      this.categoryStockpileList = {}
      innerStockpileList.forEach((prop) => {
        const key = prop.group[this.$i18n.locale]
        this.categoryStockpileList[key] = this.categoryStockpileList[key] || []
        this.categoryStockpileList[key].push(prop)

        if (typeof this.collapsedItems[prop.id] === 'undefined') {
          this.$set(this.collapsedItems, prop.id, true)
        }

        if (!this.itemInputs[prop.id]) {
          this.$set(this.itemInputs, prop.id, { quantity: '', date: '' })
        }
        if (!this.expiryInputModes[prop.id]) {
          this.$set(this.expiryInputModes, prop.id, 'date')
        }

        if (!checklist.items[prop.id]) {
          checklist.items[prop.id] = { id: prop.id, history: {} }
        }

        if (!checklist.items[prop.id].history) {
          checklist.items[prop.id].history = {}
        }

        if (!this.hasAnyOtherDateHistory()) {
          if (!checklist.items[prop.id].history[this.currentDate]) {
            checklist.items[prop.id].history[this.currentDate] = {
              recommended: prop.quantity,
              expirations: []
            }
          } else {
            checklist.items[prop.id].history[this.currentDate].recommended = prop.quantity
          }
        }
      })

      this.category.forEach((key) => {
        if (typeof this.sectionCollapsed[key] === 'undefined') {
          this.$set(this.sectionCollapsed, key, false)
        }
      })

      this.persistChecklist(checklist)
    },
    unitLabel(unit) {
      if (!unit || !unit[this.$i18n.locale]) {
        return ''
      }

      return unit[this.$i18n.locale]
    },
    formatQuantity(quantity, unit) {
      if (quantity === '' || quantity === null || typeof quantity === 'undefined') {
        return '-'
      }

      return `${quantity}${this.unitLabel(unit)}`
    },
    getQuantityUnitLabel(itemId, unit) {
      const unitKey = `quantityUnit.${itemId}`
      if (this.$te(unitKey)) {
        return this.$t(unitKey)
      }

      return this.unitLabel(unit)
    },
    formatDisplayQuantity(itemId, quantity, unit) {
      if (quantity === '' || quantity === null || typeof quantity === 'undefined') {
        return '-'
      }

      const unitLabel = this.getQuantityUnitLabel(itemId, unit)
      return unitLabel ? `${quantity}${unitLabel}` : `${quantity}`
    },
    formatRecommendedDisplay(item) {
      if (item.id === 57) {
        return `${item.quantity}${this.unitLabel(item.unit)}`
      }

      const overrideKey = `recommendedOverride.${item.id}`
      if (this.$te(overrideKey)) {
        const translated = this.$t(overrideKey)
        if (translated === this.$t('recommendedNone')) {
          return '-'
        }
        return translated
      }

      return this.formatDisplayQuantity(item.id, item.quantity, item.unit)
    },
    isFulfilled(itemId) {
      return this.getFulfillmentRate(itemId) >= 100
    },
    shouldShowAchievement(itemId) {
      return this.isFulfilled(itemId)
    },
    isAchievementTouched(itemId) {
      return !!this.achievementTouched[itemId]
    },
    markAchievementTouched(itemId) {
      this.$set(this.achievementTouched, itemId, true)
    },
    getItemHistory(itemId) {
      const checklist = this.getChecklist()
      const item = checklist.items[itemId]
      return item && item.history ? item.history : {}
    },
    getCurrentEntry(itemId) {
      const history = this.getItemHistory(itemId)
      return history[this.currentDate] || { recommended: 0, expirations: [] }
    },
    getCurrentExpirations(itemId) {
      const entry = this.getCurrentEntry(itemId)
      const expirations = Array.isArray(entry.expirations) ? entry.expirations : []
      return expirations.map((item, index) => ({ ...item, _index: index })).sort((a, b) => {
        if (!a.date && !b.date) {
          return 0
        }
        if (!a.date) {
          return 1
        }
        if (!b.date) {
          return -1
        }

        return a.date < b.date ? -1 : 1
      })
    },
    sumExpirationQuantities(expirations, { includeExpired = false } = {}) {
      return expirations.reduce((sum, item) => {
        if (!includeExpired && this.isExpirationExpired(item.date)) {
          return sum
        }
        return sum + Number(item.quantity || 0)
      }, 0)
    },
    getTotalQuantity(itemId) {
      const entry = this.getCurrentEntry(itemId)
      const expirations = Array.isArray(entry.expirations) ? entry.expirations : []
      return this.sumExpirationQuantities(expirations)
    },
    getTotalQuantityIncludingExpired(itemId) {
      const entry = this.getCurrentEntry(itemId)
      const expirations = Array.isArray(entry.expirations) ? entry.expirations : []
      return this.sumExpirationQuantities(expirations, { includeExpired: true })
    },
    getFulfillmentRate(itemId) {
      const entry = this.getCurrentEntry(itemId)
      const recommended = Number(entry.recommended || 0)
      if (!recommended) {
        return 0
      }

      return Math.min(100, Math.round((this.getTotalQuantity(itemId) / recommended) * 100))
    },
    getPreviousFulfillmentRate(itemId) {
      const history = this.getItemHistory(itemId)
      const dates = Object.keys(history).sort()
      const currentIndex = dates.findIndex((date) => date === this.currentDate)

      if (currentIndex <= 0) {
        return null
      }

      const previousEntry = history[dates[currentIndex - 1]]
      if (!previousEntry) {
        return null
      }

      const recommended = Number(previousEntry.recommended || 0)
      if (!recommended) {
        return 0
      }

      const total = Array.isArray(previousEntry.expirations)
        ? previousEntry.expirations.reduce((sum, item) => {
          if (this.isExpirationExpired(item.date)) {
            return sum
          }
          return sum + Number(item.quantity || 0)
        }, 0)
        : 0

      return Math.min(100, Math.round((total / recommended) * 100))
    },
    isQuantityComparisonItem(itemId) {
      return quantityComparisonItemIds.has(itemId)
    },
    getPreviousTotalQuantity(itemId) {
      const history = this.getItemHistory(itemId)
      const dates = Object.keys(history).sort()
      const currentIndex = dates.findIndex((date) => date === this.currentDate)

      if (currentIndex <= 0) {
        return null
      }

      const previousEntry = history[dates[currentIndex - 1]]
      if (!previousEntry) {
        return null
      }

      const expirations = Array.isArray(previousEntry.expirations) ? previousEntry.expirations : []
      const total = this.sumExpirationQuantities(expirations, { includeExpired: true })

      return total
    },
    getPreviousComparisonDisplay(itemId, unit) {
      if (this.isInitialUse()) {
        return ''
      }
      if (this.isQuantityComparisonItem(itemId)) {
        const total = this.getPreviousTotalQuantity(itemId)
        if (total === null) {
          return this.shouldShowSameForEmptyItem(itemId) ? '' : null
        }

        return `${total}${this.getQuantityUnitLabel(itemId, unit)}`
      }

      const rate = this.getPreviousFulfillmentRate(itemId)
      if (rate === null) {
        return this.shouldShowSameForEmptyItem(itemId) ? '' : null
      }

      return `${rate}%`
    },
      getPreviousComparisonClass(itemId) {
        if (this.isInitialUse()) {
          return this.getInitialComparisonClass(itemId)
        }
        if (this.shouldShowSameForEmptyItem(itemId)) {
          return 'ManageItem__prevSame'
        }
        if (this.isQuantityComparisonItem(itemId)) {
          const previousTotal = this.getPreviousTotalQuantity(itemId)
          if (previousTotal === null) {
            return ''
          }
          const currentTotal = this.getTotalQuantityIncludingExpired(itemId)
          if (currentTotal === previousTotal) {
            return 'ManageItem__prevSame'
          }
          if (currentTotal > previousTotal) {
            return 'ManageItem__prevUp'
          }
          if (currentTotal < previousTotal) {
            return 'ManageItem__prevDown'
          }
          return ''
        }
        const previousRate = this.getPreviousFulfillmentRate(itemId)
        if (previousRate === null) {
          return ''
        }
        const currentRate = this.getFulfillmentRate(itemId)
        if (currentRate === previousRate) {
          return 'ManageItem__prevSame'
        }
        if (currentRate > previousRate) {
          return 'ManageItem__prevUp'
        }
        if (currentRate < previousRate) {
          return 'ManageItem__prevDown'
        }
        return ''
      },
    getPreviousComparisonLabel(itemId) {
      const direction = this.getPreviousComparisonDirection(itemId)
      if (direction === 'up') {
        return this.$t('previousUp')
      }
      if (direction === 'down') {
        return this.$t('previousDown')
      }
      return ''
    },
      getPreviousComparisonDirection(itemId) {
        if (this.isInitialUse()) {
          return this.getInitialComparisonDirection(itemId)
        }
        if (this.shouldShowSameForEmptyItem(itemId)) {
          return 'same'
        }
        const className = this.getPreviousComparisonClass(itemId)
        if (className === 'ManageItem__prevUp') {
          return 'up'
        }
        if (className === 'ManageItem__prevDown') {
          return 'down'
        }
        if (className === 'ManageItem__prevSame') {
          return 'same'
        }
        return ''
      },
    getInitialComparisonDirection(itemId) {
      return this.getTotalQuantity(itemId) > 0 ? 'up' : 'same'
    },
    getInitialComparisonClass(itemId) {
      const direction = this.getInitialComparisonDirection(itemId)
      if (direction === 'up') {
        return 'ManageItem__prevUp'
      }
      return 'ManageItem__prevSame'
    },
    isInitialUse() {
      return !this.hasAnyOtherDateHistory()
    },
    hasAnyOtherDateHistory() {
      const checklist = this.getChecklist()
      const items = checklist.items || {}
      const dates = Object.values(items).flatMap((item) => {
        if (!item || !item.history) {
          return []
        }
        return Object.keys(item.history)
      })
      return dates.some((date) => date !== this.currentDate)
    },
    shouldShowSameForEmptyItem(itemId) {
      if (!this.hasAnyOtherDateHistory()) {
        return false
      }
      const currentExpirations = this.getCurrentExpirations(itemId)
      if (currentExpirations.length > 0) {
        return false
      }

      if (this.isQuantityComparisonItem(itemId)) {
        const previousTotal = this.getPreviousTotalQuantity(itemId)
        return previousTotal === null || previousTotal === 0
      }

      const previousRate = this.getPreviousFulfillmentRate(itemId)
      return previousRate === null || previousRate === 0
    },
    isFirstEntry(itemId) {
      const history = this.getItemHistory(itemId)
      const dates = Object.keys(history).sort()
      const currentIndex = dates.findIndex((date) => date === this.currentDate)
      return currentIndex <= 0
    },
    getExpiryStatus(dateString) {
      if (!dateString) {
        return { label: '', className: '' }
      }

      const today = this.parseDate(this.currentDate)
      const target = this.parseDate(dateString)
      const diffDays = Math.floor((target - today) / 86400000)

      if (diffDays < 0) {
        return { label: this.$t('expiryExpired'), className: 'ManageItem__stockExpired' }
      }

      if (diffDays <= 30) {
        return { label: this.$t('expiryNear'), className: 'ManageItem__stockNear' }
      }

      return { label: '', className: '' }
    },
    getWarning(itemId) {
      const expirations = this.getCurrentExpirations(itemId)
      let hasNear = false

      for (const entry of expirations) {
        const status = this.getExpiryStatus(entry.date)
        if (status.label === this.$t('expiryExpired')) {
          return { label: this.$t('expiryExpired'), className: 'ManageItem__warningExpired' }
        }

        if (status.label === this.$t('expiryNear')) {
          hasNear = true
        }
      }

      if (hasNear) {
        return { label: this.$t('expiryNear'), className: 'ManageItem__warningNear' }
      }

      return { label: '', className: '' }
    },
    addExpiration(item) {
      const input = this.itemInputs[item.id]
      if (!input || !input.quantity) {
        return
      }

      const quantity = Number(input.quantity)
      if (!quantity || quantity < 0) {
        return
      }

      const normalizedDate = this.normalizeExpirationInput(input.date)
      if (input.date && !normalizedDate) {
        return
      }

      const checklist = this.getChecklist()
      this.ensureCurrentDateHistoryFromPrevious(checklist)
      this.pruneHistoryToLatestTwoDates(checklist)
      if (!checklist.items[item.id]) {
        checklist.items[item.id] = { id: item.id, history: {} }
      }

      if (!checklist.items[item.id].history[this.currentDate]) {
        checklist.items[item.id].history[this.currentDate] = {
          recommended: item.quantity,
          expirations: []
        }
      }

      const expirations = checklist.items[item.id].history[this.currentDate].expirations || []
      const sameDate = expirations.find((entry) => entry.date === normalizedDate)

      if (sameDate) {
        sameDate.quantity = Number(sameDate.quantity || 0) + quantity
      } else {
        expirations.push({ date: normalizedDate, quantity })
      }

      checklist.items[item.id].history[this.currentDate].expirations = expirations
      checklist.items[item.id].history[this.currentDate].recommended = item.quantity
      this.persistChecklist(checklist)
      this.markAchievementTouched(item.id)

      this.itemInputs[item.id] = { quantity: '', date: '' }
    },
    ensureCurrentDateHistoryFromPrevious(checklist) {
      if (!this.hasAnyOtherDateHistory()) {
        return
      }
      if (this.hasCurrentDateHistory(checklist)) {
        return
      }
      const items = checklist.items || {}
      Object.values(items).forEach((item) => {
        if (!item || !item.history) {
          return
        }
        const dates = Object.keys(item.history).sort()
        const previousDate = dates.filter((date) => date !== this.currentDate).slice(-1)[0]
        if (!previousDate) {
          return
        }
        const previousEntry = item.history[previousDate]
        if (!previousEntry) {
          return
        }
        const expirations = Array.isArray(previousEntry.expirations)
          ? previousEntry.expirations.map((entry) => ({ ...entry }))
          : []
        item.history[this.currentDate] = {
          recommended: previousEntry.recommended,
          expirations
        }
      })
    },
    pruneHistoryToLatestTwoDates(checklist) {
      const items = checklist.items || {}
      const dates = Object.values(items).flatMap((item) => {
        if (!item || !item.history) {
          return []
        }
        return Object.keys(item.history)
      })
      const uniqueDates = Array.from(new Set(dates)).sort()
      if (uniqueDates.length <= 2) {
        return
      }
      const keepDates = new Set(uniqueDates.slice(-2))
      Object.values(items).forEach((item) => {
        if (!item || !item.history) {
          return
        }
        Object.keys(item.history).forEach((date) => {
          if (!keepDates.has(date)) {
            delete item.history[date]
          }
        })
      })
    },
    hasCurrentDateHistory(checklist) {
      const items = checklist.items || {}
      return Object.values(items).some((item) => item && item.history && item.history[this.currentDate])
    },
    isEditingExpiration(itemId, index) {
      return this.editingStock[itemId] === index
    },
    startEditExpiration(itemId, entry) {
      this.$set(this.editingStock, itemId, entry._index)
      this.$set(this.editInputs, itemId, {
        quantity: entry.quantity,
        date: entry.date || ''
      })
    },
    cancelEditExpiration(itemId) {
      this.$set(this.editingStock, itemId, null)
      this.$set(this.editInputs, itemId, { quantity: '', date: '' })
    },
    saveExpirationEdit(itemId) {
      const editIndex = this.editingStock[itemId]
      const input = this.editInputs[itemId]
      if (typeof editIndex !== 'number' || !input) {
        return
      }

      const quantity = Number(input.quantity)
      if (!quantity || quantity < 0) {
        return
      }

      const normalizedDate = this.normalizeExpirationInput(input.date)
      if (input.date && !normalizedDate) {
        return
      }

      const checklist = this.getChecklist()
      if (!checklist.items[itemId]) {
        return
      }

      if (!checklist.items[itemId].history[this.currentDate]) {
        checklist.items[itemId].history[this.currentDate] = {
          recommended: 0,
          expirations: []
        }
      }

      const expirations = checklist.items[itemId].history[this.currentDate].expirations || []
      if (!expirations[editIndex]) {
        return
      }

      const targetIndex = expirations.findIndex(
        (entry, index) => index !== editIndex && entry.date === normalizedDate
      )

      if (targetIndex >= 0) {
        expirations[targetIndex].quantity =
          Number(expirations[targetIndex].quantity || 0) + quantity
        expirations.splice(editIndex, 1)
      } else {
        expirations[editIndex] = { date: normalizedDate, quantity }
      }

      checklist.items[itemId].history[this.currentDate].expirations = expirations
      this.persistChecklist(checklist)
      this.markAchievementTouched(itemId)

      this.cancelEditExpiration(itemId)
    },
    isCollapsed(itemId) {
      return !!this.collapsedItems[itemId]
    },
    toggleItem(itemId) {
      const next = !this.isCollapsed(itemId)
      this.$set(this.collapsedItems, itemId, next)
    },
    isSectionCollapsed(key) {
      return !!this.sectionCollapsed[key]
    },
    toggleSection(key) {
      const next = !this.isSectionCollapsed(key)
      this.$set(this.sectionCollapsed, key, next)
    },
    openScoreModal() {
      this.isScoreModalOpen = true
    },
    closeScoreModal() {
      this.isScoreModalOpen = false
    },
    openScoreResultModal() {
      this.saveScoreHistory()
      this.isScoreModalOpen = false
      this.isScoreResultModalOpen = true
    },
    closeScoreResultModal() {
      this.isScoreResultModalOpen = false
    },
    selectScoreDay(days) {
      this.selectedScoreDays = days
    },
    confirmRemoveExpiration(itemId, index) {
      if (!confirm(this.$t('confirmRemove'))) {
        return
      }
      this.removeExpiration(itemId, index)
    },
    removeExpiration(itemId, index) {
      const checklist = this.getChecklist()
      const item = checklist.items && checklist.items[itemId]
      const entry = item && item.history ? item.history[this.currentDate] : null
      if (!entry || !Array.isArray(entry.expirations)) {
        return
      }

      entry.expirations.splice(index, 1)
      this.persistChecklist(checklist)
      this.markAchievementTouched(itemId)
      this.$forceUpdate()

      if (this.editingStock[itemId] === index) {
        this.cancelEditExpiration(itemId)
      }
    }
  }
}
</script>

<style src="~/assets/css/pages/Manage.css" scoped></style>



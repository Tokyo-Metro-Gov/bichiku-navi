<i18n>
{
  "ja": {
    "meta": {
      "title": "自分に合った備蓄を調べてみよう",
      "description": "備蓄の必要性はわかっているけど、何を備蓄すればよいかわからない人に向けて、自分に合った備蓄を調べることが出来ます。これから始まる3つの質問に答えるだけで、あなたのご家庭に合わせた備蓄品目と必要量のリストが表示されます。"
    },
    "text01": "これから始まる3つの質問に答えるだけで、あなたのご家庭に合わせた備蓄品目と必要量のリストが表示されます。<br />リストを参考にご家庭で必要なものを確認しながら、まずはできるところから始めましょう！"
  },
  "en": {
    "meta": {
      "title": "Find out the adequate stockpiling for you",
      "description": ""
    },
    "text01": "Answer these three questions below, and you can see the list of suitable emergency stockpiles for your family and the quantity needed.Use the list to find out what you need at home and start where you can!"
  }
}
</i18n>

<template>
  <div>
    <div class="PageBlock">
      <section class="Container -s">
        <h1 class="PageBlock__title">
          {{ $t('meta.title') }}
        </h1>

        <div class="Container -xs">
          <p class="PageBlock__text" v-html="$t('text01')" />
        </div>
      </section>
    </div>

    <div class="Container -s">
      <div v-show="currentStep === 1">
        <tool-step-01
          v-bind="{
            currentStep,
            totalSteps,
            goToNextStep,
          }"
        />
      </div>

      <!-- step02 -->
      <div v-show="currentStep === 2">
        <tool-step-02
          v-bind="{
            currentStep,
            totalSteps,
            goToNextStep,
            backToPrevStep,
          }"
        />
      </div>

      <!-- setp03 -->
      <div v-show="currentStep === 3">
        <tool-step-03
          v-bind="{
            currentStep,
            totalSteps,
            backToPrevStep,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import head from '@mixins/head'
import methods from '@mixins/methods'
import ToolStep01 from '@partials/tool/ToolStep01'
import ToolStep02 from '@partials/tool/ToolStep02'
import ToolStep03 from '@partials/tool/ToolStep03'

export default {
  name: 'PageTool',
  components: {
    ToolStep01,
    ToolStep02,
    ToolStep03,
  },
  mixins: [head, methods],
  localStorage: {
    $toolValues: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      currentStep: 1,
      totalSteps: 3,
      bodyAttrs: {
        class: 'PageTool',
      },
      meta: {
        title: this.$getTitle('tool', this.$i18n.locale),
        description: this.$i18n.t('meta.title'),
      },
    }
  },
  computed: {
    getCurrentStep() {
      return this.currentStep
    },
  },
  mounted() {
    // ローカルストレージにツールの結果が入っていたら消す
    if (this.$toolValues) {
      this.$localStorage.remove('$toolValues')
    }
  },
  methods: {
    goToNextStep() {
      const currentStep = this.getCurrentStep
      const top =
        document
          .querySelector(`.ToolStep0${currentStep}`)
          .getBoundingClientRect().top + window.scrollY

      window.scrollTo({
        top,
        left: 0,
      })

      this.$gtm.push({
        trackPageview: `${this.$route.path}/step${currentStep}`,
        event: 'loadready',
      })

      return currentStep < 3 ? (this.currentStep += 1) : 3
    },
    backToPrevStep() {
      return this.getCurrentStep > 1 ? (this.currentStep -= 1) : 1
    },
  },
}
</script>

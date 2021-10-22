<i18n>
{
  "ja": {
    "text01": "<span>お住まいの種類について</span>お答えください",
    "text02": "戸建て",
    "text03": "マンションなど<br />集合住宅 ※",
    "text04": "※エレベーターが止まった時に荷物を持っての階段の上り下りが難しいお住まい",
    "text05": "前の質問へ戻る",
    "text06": "つぎへ"
  },
  "en": {
    "text01": "Please answer about your type of residence.",
    "text02": "Detached house",
    "text03": "Apartment building or Housing complex※",
    "text04": "※In the event of a disaster, the elevator may stop.",
    "text05": "Go back to the previous question",
    "text06": "Next"
  }
}
</i18n>
<template>
  <div class="ToolInput ToolStep02">
    <div class="ToolInput__step">
      <span class="ToolInput__stepCurrent">{{ $zeroPad(currentStep) }}</span>
      <span class="ToolInput__stepTotal">{{ $zeroPad(totalSteps) }}</span>
    </div>

    <div class="ToolInput__title" v-html="$t('text01')" />

    <div class="ToolStep02__input">
      <div class="ToolStep02__inputInner">
        <div>
          <input
            id="upstairs2"
            v-model="isUpstairs"
            type="radio"
            :value="false"
          />
          <label for="upstairs2" tabindex="0" v-html="$t('text02')" />
        </div>

        <div>
          <input
            id="upstairs1"
            v-model="isUpstairs"
            type="radio"
            :value="true"
          />
          <label for="upstairs1" tabindex="0" v-html="$t('text03')" />
        </div>
      </div>

      <div class="ToolStep02__inputText">
        {{ $t('text04') }}
      </div>
    </div>

    <div class="ToolInput__button">
      <button type="button" class="Button" @click="backToPrevStep">
        {{ $t('text05') }}
      </button>

      <button
        type="button"
        class="Button -aqua"
        @click="
          setIsUpstairs()
          goToNextStep()
          $entryGtm({
            category: '自分に合った備蓄を調べてみよう',
            action: '戸建て/マンション',
            label: isUpstairs
              ? 'extra_house_apartment'
              : 'extra_house_detached',
          })
        "
      >
        {{ $t('text06') }}
      </button>
    </div>
  </div>
</template>

<script>
import methods from '@mixins/methods'

export default {
  name: 'ToolStep02',
  mixins: [methods],
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
    totalSteps: {
      type: Number,
      required: true,
    },
    goToNextStep: {
      type: Function,
      required: true,
    },
    backToPrevStep: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      isUpstairs: true,
    }
  },
  methods: {
    setIsUpstairs() {
      const values = this.$localStorage.get('$toolValues')

      this.$localStorage.set('$toolValues', {
        ...values,
        isUpstairs: this.isUpstairs,
      })
    },
  },
}
</script>

<style></style>

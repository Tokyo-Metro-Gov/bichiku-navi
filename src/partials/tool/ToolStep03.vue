<i18n>
{
  "ja": {
    "text01": "犬や猫など、飼っている動物がいる",
    "text02": "はい",
    "text03": "いいえ",
    "text04": "前の質問へ戻る",
    "text05": "つぎへ"
  },
  "en": {
    "text01": "Do you have pets?",
    "text02": "Yes",
    "text03": "No",
    "text04": "Go back to the previous question",
    "text05": "Next"
  }
}
</i18n>

<template>
  <div class="ToolInput ToolStep03">
    <div class="ToolInput__step">
      <span class="ToolInput__stepCurrent">{{ $zeroPad(currentStep) }}</span>
      <span class="ToolInput__stepTotal">{{ $zeroPad(totalSteps) }}</span>
    </div>

    <div class="ToolInput__title">{{ $t('text01') }}</div>

    <div class="ToolStep03__input">
      <div class="ToolStep03__inputInner">
        <div>
          <input id="pet1" v-model="hasPet" type="radio" :value="true" />
          <label for="pet1" tabindex="0">{{ $t('text02') }}</label>
        </div>

        <div>
          <input id="pet2" v-model="hasPet" type="radio" :value="false" />
          <label for="pet2" tabindex="0">{{ $t('text03') }}</label>
        </div>
      </div>
    </div>

    <div class="ToolInput__button">
      <button type="button" class="Button" @click="backToPrevStep">
        {{ $t('text04') }}
      </button>

      <button
        type="button"
        class="Button -aqua"
        @click="
          setHasPet()
          showResult()
          $entryGtm({
            category: '自分に合った備蓄を調べてみよう',
            action: '犬/猫を飼っている',
            label: hasPet ? 'extra_pet_yes' : 'extra_pet_no',
          })
        "
      >
        {{ $t('text05') }}
      </button>
    </div>
  </div>
</template>

<script>
import methods from '@mixins/methods'

export default {
  name: 'ToolStep03',
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
    backToPrevStep: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      hasPet: false,
    }
  },
  methods: {
    setHasPet() {
      const values = this.$localStorage.get('$toolValues')

      this.$localStorage.set('$toolValues', {
        ...values,
        hasPet: this.hasPet,
      })
    },
    showResult() {
      this.$router.push(`${this.localePath(this.$getPath('toolResult'))}`)
    },
  },
}
</script>

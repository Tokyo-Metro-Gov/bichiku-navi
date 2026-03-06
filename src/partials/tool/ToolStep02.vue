<i18n>
{
  "ja": {
    "text01": "<span>お住まいの種類について</span>お答えください",
    "text02": "戸建て",
    "text03": "マンションなど<br />集合住宅 ",
    "text05": "前の質問へ戻る",
    "text06": "つぎへ"
  },
  "en": {
    "text01": "Please answer about your type of residence.",
    "text02": "Detached house",
    "text03": "Apartment building or Housing complex",
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
          <input id="upstairs2" v-model="isUpstairs" type="radio" :value="false" />
          <label for="upstairs2" tabindex="0" v-html="$t('text02')" />
        </div>

        <div>
          <input id="upstairs1" v-model="isUpstairs" type="radio" :value="true" />
          <label for="upstairs1" tabindex="0" v-html="$t('text03')" />
        </div>
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
            label: isUpstairs ? 'extra_house_apartment' : 'extra_house_detached'
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
      required: true
    },
    totalSteps: {
      type: Number,
      required: true
    },
    goToNextStep: {
      type: Function,
      required: true
    },
    backToPrevStep: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      isUpstairs: true
    }
  },
  methods: {
    getHouseholdKey(values) {
      const family = Array.isArray(values.family) ? values.family : []
      const isSingle = family.length <= 1
      const hasChild = family.some(({ generation }) => ['infants', 'child1', 'child2'].includes(generation))
      const housing = this.isUpstairs ? 'apartment' : 'detached'

      if (isSingle && hasChild) {
        return null
      }

      if (isSingle) {
        return `single_${housing}_nochild`
      }

      return `multi_${housing}_${hasChild ? 'child' : 'nochild'}`
    },
    setIsUpstairs() {
      const values = this.getLatestToolValues()
      const householdKey = this.getHouseholdKey(values)

      this.setToolValues({
        ...values,
        isUpstairs: this.isUpstairs,
        householdKey
      })
    }
  }
}
</script>

<style></style>

<i18n>
{
  "ja": {
    "gender": {
      "label": "性別",
      "male": "男性",
      "female": "女性"
    },
    "age": {
      "label": "世代",
      "infants": "乳幼児<span>0~2歳</span>",
      "child1": "子供<span>3歳~小6</span>",
      "child2": "子供<span>中学生以上</span>",
      "adult": "成人<span>20歳以上</span>",
      "elder": "高齢者<span>65歳以上</span>"
    },
    "text01": "決定"
  },
  "en": {
    "gender": {
      "label": "Gender",
      "male": "Male",
      "female": "Female"
    },
    "age": {
      "label": "Age",
      "infants": "Babies/infants<span>(age 0-2)</span>",
      "child1": "Children<span>(age 3 to 6th grade schooler)</span>",
      "child2": "Children<span>(junior high school age or older)</span>",
      "adult": "Adults<span>(20 or older)</span>",
      "elder": "Elderly<span>(65 or older)</span>"
    },
    "text01": "Enter"
  }
}
</i18n>
<template>
  <div class="ToolStep01__input">
    <div class="ToolStep01__inputBlock">
      <div class="ToolStep01__inputTitle">{{ $t('gender.label') }}</div>
      <div class="ToolStep01__inputSex">
        <div>
          <input
            :id="`man${index}`"
            v-model="sex"
            type="radio"
            value="male"
            @click="
              enableButton()
              $entryGtm({
                category: '自分に合った備蓄を調べてみよう',
                action: '性別',
                label: 'extra_gender_male',
              })
            "
          />
          <label :for="`man${index}`" tabindex="0">{{
            $t('gender.male')
          }}</label>
        </div>

        <div>
          <input
            :id="`woman${index}`"
            v-model="sex"
            type="radio"
            value="female"
            @click="
              enableButton()
              $entryGtm({
                category: '自分に合った備蓄を調べてみよう',
                action: '性別',
                label: 'extra_gender_female',
              })
            "
          />
          <label :for="`woman${index}`" tabindex="0">{{
            $t('gender.female')
          }}</label>
        </div>
      </div>
    </div>

    <div class="ToolStep01__inputBlock">
      <div class="ToolStep01__inputTitle">{{ $t('age.label') }}</div>

      <div class="ToolStep01__inputGeneration">
        <div>
          <input
            :id="`infants${index}`"
            v-model="generation"
            type="radio"
            value="infants"
            @click="
              enableButton()
              $entryGtm({
                category: '自分に合った備蓄を調べてみよう',
                action: '世代',
                label: 'extra_age_infants',
              })
            "
          />
          <label
            :for="`infants${index}`"
            tabindex="0"
            v-html="$t('age.infants')"
          />
        </div>

        <div>
          <input
            :id="`child1-${index}`"
            v-model="generation"
            type="radio"
            value="child1"
            @click="
              enableButton()
              $entryGtm({
                category: '自分に合った備蓄を調べてみよう',
                action: '世代',
                label: 'extra_age_child1',
              })
            "
          />
          <label
            :for="`child1-${index}`"
            tabindex="0"
            v-html="$t('age.child1')"
          />
        </div>

        <div>
          <input
            :id="`child2-${index}`"
            v-model="generation"
            type="radio"
            value="child2"
            @click="
              enableButton()
              $entryGtm({
                category: '自分に合った備蓄を調べてみよう',
                action: '世代',
                label: 'extra_age_child2',
              })
            "
          />
          <label
            :for="`child2-${index}`"
            tabindex="0"
            v-html="$t('age.child2')"
          />
        </div>

        <div>
          <input
            :id="`adult${index}`"
            v-model="generation"
            type="radio"
            value="adult"
            @click="
              enableButton()
              $entryGtm({
                category: '自分に合った備蓄を調べてみよう',
                action: '世代',
                label: 'extra_age_adult',
              })
            "
          />
          <label :for="`adult${index}`" tabindex="0" v-html="$t('age.adult')" />
        </div>

        <div>
          <input
            :id="`aged${index}`"
            v-model="generation"
            type="radio"
            value="aged"
            @click="
              enableButton()
              $entryGtm({
                category: '自分に合った備蓄を調べてみよう',
                action: '世代',
                label: 'extra_age_aged',
              })
            "
          />
          <label :for="`aged${index}`" tabindex="0" v-html="$t('age.elder')" />
        </div>
      </div>

      <div class="ToolInput__button">
        <button
          type="button"
          class="Button -aqua"
          :disabled="isDecided"
          @click="
            $emit('add-person', {
              id: index,
              sex,
              generation,
              /* prettier-ignore */
              /* adultMaleのようになる ツールの結果に使う */
              state: `${generation}${sex.charAt(0).toUpperCase()}${sex.slice(1)}`,
            })
          "
        >
          {{ $t('text01') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import methods from '@mixins/methods'

export default {
  name: 'ToolStep01Input',
  mixins: [methods],
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      sex: '',
      generation: '',
      isDecided: true,
    }
  },
  methods: {
    enableButton() {
      // @changeに設定すると
      // v-modelで設定されている@changeリスナーが上書きされる
      // なので、@clickリスナーに設定する
      // 遅延しないと変化したdataを拾えない
      setTimeout(() => {
        if (this.sex !== '' && this.generation !== '') {
          this.isDecided = false
        }
      }, 100)
    },
  },
}
</script>

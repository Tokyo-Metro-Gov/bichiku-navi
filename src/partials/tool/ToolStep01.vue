<i18n>
{
  "ja": {
    "text01": "<span>あなたと、一緒に</span><span>住んでいる人の</span>それぞれの性別・年代を教えてね",
    "text02": "<span>{people}</span>人で住んでいる。",
    "text03": "{count}人目の性別・年代",
    "text04": "{people}人分の備蓄量で調べる",
    "text05": "{id}人目",
    "text06": "修正する",
    "text07": "つぎへ"
  },
  "en": {
    "text01": "Enter the gender and age of you and each person who you are living with.",
    "text02": "There are <span>{people}</span> in my family.",
    "text03": "Gender and age of {count} person",
    "text04": "Examine with the stockpile of {people} people",
    "text05": "{id}th person",
    "text06": "Edit",
    "text07": "Next"
  }
}
</i18n>

<template>
  <div id="toolStep01" class="ToolInput ToolStep01">
    <div class="ToolInput__step">
      <span class="ToolInput__stepCurrent">{{ $zeroPad(currentStep) }}</span>
      <span class="ToolInput__stepTotal">{{ $zeroPad(totalSteps) }}</span>
    </div>

    <div class="ToolInput__title" v-html="$t('text01')" />

    <div class="ToolStep01__people" v-html="$t('text02', { people: people })" />

    <ul class="ToolStep01__indexList">
      <template v-for="count in 9">
        <li :key="count">
          <input
            :id="`people${count}`"
            v-model="people"
            :value="count"
            type="radio"
            @click="onChangePeople(count)"
          />
          <label tabindex="0" :for="`people${count}`">{{ count }}</label>
        </li>
      </template>
    </ul>

    <div>
      <template v-for="count in people">
        <div
          :id="`toolStep01Prompt0${count}`"
          :key="count"
          class="ToolStep01__prompt"
        >
          <header
            class="ToolStep01__promptHeader"
            v-html="$t('text03', { count: count })"
          />

          <div class="ToolStep01__promptBody">
            <tool-step01-input :index="count" @add-person="onAddPerson" />
          </div>
        </div>
      </template>
    </div>

    <div v-show="family.length > 0" class="ToolStep01__results">
      <div
        class="ToolStep01__resultsText"
        v-html="$t('text04', { people: people })"
      />

      <ul class="ToolStep01__resultsList">
        <template v-for="person in family">
          <li
            :key="person.id"
            class="ToolStep01__resultsListItem"
            :class="{
              '-notEntered': person.sex === '' || person.generation === '',
            }"
          >
            <div
              class="ToolStep01Results__listItemLabel"
              v-html="$t('text05', { id: person.id })"
            />

            <div class="ToolStep01Results__listItemBody">
              <template v-if="person.sex === '' || person.generation === ''">
                <nuxt-link :to="{ hash: `toolStep01Prompt0${person.id}` }">
                  {{ displayPersonAttr(person) }}
                </nuxt-link>
              </template>
              <template v-else>
                {{ displayPersonAttr(person) }}
              </template>
            </div>
          </li>
        </template>
      </ul>

      <div class="ToolInput__button">
        <button
          type="button"
          class="Button"
          :disabled="validateStep01()"
          @click="enableInputs"
        >
          {{ $t('text06') }}
        </button>

        <button
          type="button"
          class="Button -aqua"
          :disabled="validateStep01()"
          @click="
            setFamily()
            goToNextStep()
          "
        >
          {{ $t('text07') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import methods from '@mixins/methods'
import ToolStep01Input from '@partials/tool/ToolStep01Input'

export default {
  name: 'ToolStep01',
  components: {
    ToolStep01Input,
  },
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
  },
  data() {
    return {
      people: 1,
      family: [],
      innerFamily: [],
    }
  },
  computed: {
    getFamily() {
      return this.family
    },
    getPeople() {
      return this.people
    },
  },
  watch: {
    // 選択した人数に連動した未選択データを生成する
    // ステップ01のバリデーションに必要
    people(newValue) {
      const people = [...Array(newValue).keys()]

      this.innerFamily = []

      for (const count of people) {
        this.innerFamily.push({
          id: count + 1,
          sex: '',
          generation: '',
          pre: true,
        })
      }
    },
    // 選択した人数に連動した未選択データから重複を削除する
    // 未選択データと入力データは同じidを持っているので、
    // 入力データで未選択データを置き換えるため
    innerFamily() {
      this.normalizeFamily()
    },
    // 家族構成が決定した時に、
    // 修正する・次へを押させるようにする
    family() {
      this.validateStep01()
    },
  },
  mounted() {
    const { people: queryPeople } = this.$route.query

    if (queryPeople) {
      this.people = parseInt(queryPeople, 10)
    }
  },
  methods: {
    normalizeFamily() {
      this.family = [...this.family, ...this.innerFamily]
        .filter(
          (item1, index, self) =>
            self.findIndex((item2) => item1.id === item2.id) === index
        )
        .sort((a, b) => (a.id < b.id ? -1 : 1))
    },
    displayPersonAttr(person) {
      let text = ''

      const { sex, generation } = person

      if (this.$i18n.locale === 'ja') {
        switch (sex) {
          case 'male':
            text += '男性 '
            break
          case 'female':
            text += '女性 '
            break
          default:
            text += '性別'
        }

        switch (generation) {
          case 'infants':
            text += '乳幼児 0~2歳'
            break
          case 'child1':
            text += '子供 3歳~小6'
            break
          case 'child2':
            text += '子供 中学生以上'
            break
          case 'adult':
            text += '成人 20歳以上'
            break
          case 'aged':
            text += '高齢者 65歳以上'
            break
          default:
            text += '・年代が未選択です'
        }
      } else {
        switch (sex) {
          case 'male':
            text += 'Male '
            break
          case 'female':
            text += 'Female '
            break
          default:
            text += 'Gender'
        }

        switch (generation) {
          case 'infants':
            text += 'Babies/infants (age 0-2)'
            break
          case 'child1':
            text += 'Children (age 3 to 6th grade schooler)'
            break
          case 'child2':
            text += 'Children (junior high school age or older)'
            break
          case 'adult':
            text += 'Adults (20 or older)'
            break
          case 'aged':
            text += 'Elderly (65 or older)'
            break
          default:
            text += '・Age is not entered.'
        }
      }

      return text
    },
    validateStep01() {
      // this.familyには家族人数に連動した、
      // 仮のデータが入っているため、
      // 決定していない項目があると、
      // `pre`プロパティが存在しているのでtrueを返す
      return this.getFamily.some(({ pre }) => pre === true)
    },
    setFamily() {
      this.$localStorage.set('$toolValues', {
        family: this.family,
      })
    },
    onChangePeople(index) {
      const family = this.getFamily
      const { length: familyLength } = family

      this.$entryGtm({
        category: '自分に合った備蓄を調べてみよう',
        action: '●人で住んでいる',
        label: `extra_people_${index}`,
      })

      // 入力項目を減らす
      // 入力済みの人数が1人以上
      // 選択した人数が、入力済み人数の合計より少ない場合に処理する
      // 3人入力済みなら、1 or 2を選択すると、その分入力項目が減る
      if (familyLength >= 1 && familyLength > index) {
        family.splice(index, familyLength)
      }
    },
    onAddPerson(payload) {
      this.family.unshift(payload)

      this.normalizeFamily()

      this.disableInputs(payload.id)
    },
    enableInputs() {
      const disabledInputs = document.querySelectorAll(
        `.ToolStep01__prompt *:disabled`
      )

      for (const disabledInput of disabledInputs) {
        disabledInput.disabled = false
      }
    },
    disableInputs(id) {
      const prompt = document.querySelector(
        `.ToolStep01__prompt:nth-of-type(${id})`
      )
      const radios = prompt.querySelectorAll(
        'input[type="radio"]:not(:checked)'
      )

      prompt.querySelector('.Button').disabled = true

      for (const radio of radios) {
        radio.disabled = true
      }
    },
  },
}
</script>

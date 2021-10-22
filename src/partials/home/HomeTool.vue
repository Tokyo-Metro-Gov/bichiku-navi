<i18n>
{
  "ja": {
    "title": "自分に合った備蓄を調べてみよう",
    "text01": "これから始まる3つの質問に答えるだけで、あなたのご家庭に合わせた備蓄品目と必要量のリストが表示されます。<br /> リストを参考にご家庭で必要なものを確認しながら、まずはできるところから始めましょう！",
    "text02": "<span>あなたと、一緒に住んでいる人の</span> それぞれの性別・年代を教えてね",
    "text03": "<span>{people}</span>人で住んでいる。",
    "text04": "つぎへ"
  },
  "en": {
    "title": "Check the suitable emergency stockpiles for you",
    "text01": "Answer these three questions below, and you can see the list of suitable emergency stockpiles for your family and the quantity needed.Use the list to find out what you need at home and start where you can!",
    "text02": "Enter the gender and age of you and each person who you are living with.",
    "text03": "There are <span>{people}</span> in my family.",
    "text04": "Next"
  }
}
</i18n>

<template>
  <div class="HomeTool PageBlock">
    <section class="Container -s">
      <h1 class="PageBlock__title">{{ $t('title') }}</h1>

      <div class="Container -xs">
        <p class="PageBlock__text" v-html="$t('text01')" />
      </div>

      <div class="HomeTool__input">
        <div class="ToolInput ToolStep01">
          <div class="ToolInput__step">
            <span class="ToolInput__stepCurrent">01</span>
            <span class="ToolInput__stepTotal">03</span>
          </div>

          <div class="ToolInput__title" v-html="$t('text02')" />

          <div
            class="ToolStep01__people"
            v-html="$t('text03', { people: people })"
          />

          <ul class="ToolStep01__indexList">
            <template v-for="count in 9">
              <li :key="`homeTool${count}`">
                <input
                  :id="`count${count}`"
                  v-model="people"
                  :value="count"
                  type="radio"
                />
                <label tabindex="0" :for="`count${count}`">{{ count }}</label>
              </li>
            </template>
          </ul>

          <div class="ToolInput__button">
            <div class="Button -aqua">
              <nuxt-link
                class="Button__link"
                :to="{
                  path: localePath($getPath('tool')),
                  query: {
                    people: people,
                  },
                  hash: '#toolStep01',
                }"
              >
                {{ $t('text04') }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeTool',
  data() {
    return {
      people: 1,
    }
  },
}
</script>

<i18n>
{
  "ja": {
    "meta": {
      "description": "ご覧のWebページについて文字のサイズ、色合いを設定することができます。設定した内容は、全てのページおよび次回からご利用の際も適用されます。"
    },
    "title01": "文字サイズ・色合い変更",
    "title02": "文字サイズ変更",
    "title03": "色合い変更",
    "text01": "ご覧のWebページについて文字のサイズ、色合いを設定することができます。設定した内容は、全てのページおよび次回からご利用の際も適用されます。",
    "text02": "標準",
    "text03": "中",
    "text04": "大",
    "text05": "特大",
    "text06": "青",
    "text07": "黃",
    "text08": "黒"
  },
  "en": {
    "meta": {
      "description": "You can set the font size and color for the web page you are viewing. The settings will be applied to all pages and the next time you use it."
    },
    "title01": "Change font size/color",
    "title02": "The size of the character is changed.",
    "title03": "The shade is changed.",
    "text01": "You can set the font size and color for the web page you are viewing. The settings will be applied to all pages and the next time you use it.",
    "text02": "Normal",
    "text03": "Medium",
    "text04": "Large",
    "text05": "Extra-large",
    "text06": "Blue",
    "text07": "Yellow",
    "text08": "Black"
  }
}
</i18n>

<template>
  <div>
    <div class="PageBlock">
      <section class="Container -s">
        <h1 class="PageBlock__title">{{ $t('title01') }}</h1>

        <div class="Container -xs">
          <p class="PageBlock__text">
            {{ $t('text01') }}
          </p>
        </div>
      </section>

      <div class="Container -xs">
        <section style="margin-top: 56px">
          <h2>{{ $t('title02') }}</h2>
          <button type="button" @click="setFontSize('')">
            {{ $t('text02') }}
          </button>
          <button type="button" @click="setFontSize('m')">
            {{ $t('text03') }}
          </button>
          <button type="button" @click="setFontSize('l')">
            {{ $t('text04') }}
          </button>
          <button type="button" @click="setFontSize('xl')">
            {{ $t('text05') }}
          </button>
        </section>

        <section style="margin-top: 56px">
          <h2>{{ $t('title03') }}</h2>
          <button type="button" @click="setTheme('')">
            {{ $t('text02') }}
          </button>
          <button type="button" @click="setTheme('blue')">
            {{ $t('text06') }}
          </button>
          <button type="button" @click="setTheme('yellow')">
            {{ $t('text07') }}
          </button>
          <button type="button" @click="setTheme('black')">
            {{ $t('text08') }}
          </button>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import head from '@mixins/head'

export default {
  name: 'Settings',
  mixins: [head],
  data() {
    return {
      bodyAttrs: {
        class: 'PageSettings',
      },
      meta: {
        title: this.$getTitle('settings', this.$i18n.locale),
        description: this.$i18n.t('meta.description'),
      },
    }
  },
  methods: {
    setFontSize(size) {
      this.$cookies.set('fontSize', size)
      document.querySelector('html').dataset.fontSize = size
    },
    setTheme(theme) {
      this.$cookies.set('theme', theme)
      document.querySelector('html').dataset.theme = theme
    },
  },
}
</script>

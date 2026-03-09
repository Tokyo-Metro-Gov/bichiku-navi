<i18n>
{
  "ja": {
    "title": "備えに役立つ記事",
    "text01": "「備蓄って本当に必要なの？」「どれくらい備えれば良いの？」と思っている方向けの情報が載っています。"
  },
  "en": {
    "title": "Helpful articles",
    "text01": "We have prepared articles to answer questions such as the necessity and quantity of stockpiling for you."
  }
}
</i18n>
<template>
  <div>
    <div class="PageBlock">
      <section class="Container -s">
        <h1 class="PageBlock__title">{{ $t('title') }}</h1>

        <div class="PageBlock__img">
          <img
            src="~/assets/images/top/tips/dammy01.png"
            srcset="~/assets/images/top/tips/dammy01.png 1x, ~/assets/images/top/tips/dammy01@2x.png 2x"
            alt=""
            width="109"
            height="127"
          />
        </div>

        <div class="Container -xs">
          <p class="PageBlock__text">
            {{ $t('text01') }}
          </p>
        </div>
      </section>
    </div>

    <div class="Container -l">
      <tips-list />
      <start-bichiku-button />
    </div>
  </div>
</template>

<script>
import TipsList from '@partials/tips/TipsList'
import StartBichikuButton from '@partials/StartBichikuButton.vue'

export default {
  name: 'TipsIndex',
  components: { StartBichikuButton, TipsList }
}
</script>

<i18n>
{
  "ja": {
    "title": "いつか来る災害に備えよう",
    "text01": "「災害に備えた備蓄」と聞いてもピンと来ない方や興味はあるけど何をどのくらい備蓄すれば良いか分からない方向けに、備蓄のイロハや備えておくと良い品目などをご紹介するサイトです。",
    "text02": "今すぐ備蓄を<br />始める！"
  },
  "en": {
    "title": "Prepare for the future disaster",
    "text01": "For some people, the words “stockpiling for possible disasters” do not ring a bell and, even those who are interested in stockpiling might find it difficult to figure out what and how much they should stockpile. Tokyo Stockpile Navi website provides an introductory explanation of stockpiling including items recommended for stockpiles.",
    "text02": "Start &quot;stockpiling&quot; NOW!"
  }
}
</i18n>

<template>
  <div class="HomeLead PageBlock">
    <section class="Container -s">
      <h1 class="PageBlock__title">{{ $t('title') }}</h1>


      <div class="Container -xs">
        <p class="PageBlock__text">
          {{ $t('text01') }}
        </p>
      </div>

      <div class="HomeLead__button">
        <div class="Button -yellow -l">
          <nuxt-link
            class="Button__link"
            :to="localePath($getPath('tool'))"
            v-html="$t('text02')"
          />
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeLead',
}
</script>

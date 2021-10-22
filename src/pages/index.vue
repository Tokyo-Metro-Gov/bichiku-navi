<i18n>
{
  "ja": {
    "meta": {
      "description": "「災害に備えた備蓄」と聞いてもピンと来ない方や興味はあるけど何をどのくらい備蓄すれば良いか分からない方向けに、備蓄のイロハや備えておくと良い品目などをご紹介するサイトです。"
    }
  },
  "en":{
    "meta": {
      "description": "For some people, the words “stockpiling for possible disasters” do not ring a bell and, even those who are interested in stockpiling might find it difficult to figure out what and how much they should stockpile. Tokyo Stockpile Navi website provides an introductory explanation of stockpiling including items recommended for stockpiles."
    }
  }
}
</i18n>

<template>
  <div>
    <home-lead />
    <home-tool />
  </div>
</template>

<script>
import head from '@mixins/head'
import HomeLead from '@partials/home/HomeLead'
import HomeTool from '@partials/home/HomeTool'

export default {
  name: 'PageHome',
  components: {
    HomeLead,
    HomeTool,
  },
  mixins: [head],
  data() {
    return {
      bodyAttrs: {
        class: 'PageHome',
      },
      meta: {
        description: this.$i18n.t('meta.description'),
      },
    }
  },
}
</script>

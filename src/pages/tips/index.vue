<i18n>
{
  "ja": {
    "meta": {
      "description": "備えに役立つ記事。"
    }
  },
  "en": {
    "meta": {
      "description": "Helpful Articles."
    }
  }
}
</i18n>

<template>
  <tips />
</template>

<script>
import head from '@mixins/head'
import Tips from '@partials/tips/Tips'

export default {
  name: 'TipsIndex',
  components: {
    Tips
  },
  mixins: [head],
  data() {
    return {
      bodyAttrs: {
        class: 'TipsIndex'
      },
      meta: {
        title: this.$getTitle('tips', this.$i18n.locale),
        description: this.$i18n.t('meta.description')
      }
    }
  }
}
</script>

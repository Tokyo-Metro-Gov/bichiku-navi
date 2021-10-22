<i18n>
{
  "ja": {
    "meta": {
      "description": "サイトマップページです。"
    }
  },
  "en": {
    "meta": {
      "description": "This page is sitemap page."
    }
  }
}

</i18n>
<template>
  <div class="Container -xxs">
    <div class="PageBlock">
      <section class="Container">
        <h1 class="PageBlock__title">
          {{ $getTitle('sitemap', $i18n.locale) }}
        </h1>
      </section>
    </div>

    <div class="SiteMapBlock">
      <ul class="SitemapList">
        <li>
          <nuxt-link :to="localePath($getPath('top'))">
            {{ $getTitle('top', $i18n.locale) }}
          </nuxt-link>
        </li>

        <li>
          <nuxt-link :to="localePath($getPath('tool'))">
            {{ $getTitle('tool', $i18n.locale) }}
          </nuxt-link>
        </li>
      </ul>
    </div>

    <start-bichiku-button />
  </div>
</template>

<script>
import head from '@mixins/head'
import StartBichikuButton from '@partials/StartBichikuButton.vue'

export default {
  name: 'Sitemap',
  components: { StartBichikuButton },
  mixins: [head],
  data() {
    return {
      bodyAttrs: {
        class: 'Ja PageSitemap',
      },
      meta: {
        title: this.$getTitle('sitemap', this.$i18n.locale),
        description: this.$i18n.t('meta.description'),
      },
    }
  },
  methods: {
    isNotSinglePage() {
      return this.$route.name === 'tips' || this.$route.name === 'index'
    },
    ignoreSelf(id) {
      return this.$route.path
        .split('/')
        .some((path, index, self) => !self.includes(id))
    },
  },
}
</script>

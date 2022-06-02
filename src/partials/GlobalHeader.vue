<template>
  <div>
    <header id="globalHeader" class="GlobalHeader">
      <div class="Container -xl">
        <div class="GlobalHeader__inner">
          <div class="GlobalHeader__logo">
            <nuxt-link :to="localePath($getPath('top'))">
              {{ $siteName[$i18n.locale] }}
            </nuxt-link>
          </div>

          <ul class="GlobalHeader__util">
            <li>
              <nuxt-link :to="localePath($getPath('sitemap'))">
                {{ $getTitle('sitemap', $i18n.locale) }}
              </nuxt-link>
            </li>

            <li>
              <template v-if="$i18n.locale === 'ja'">
                <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
              </template>
              <template v-else>
                <nuxt-link :to="switchLocalePath('ja')">日本語</nuxt-link>
              </template>
            </li>

            <li>
              <nuxt-link :to="localePath($getPath('settings'))">
                {{ $getTitle('settings', $i18n.locale) }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <global-nav />
  </div>
</template>

<script>
import GlobalNav from '@partials/GlobalNav'

export default {
  name: 'GlobalHeader',
  components: {
    GlobalNav,
  },
}
</script>

<i18n>
{
  "ja": {
    "text01": "閉じる"
  },
  "en": {
    "text01": "CLOSE"
  }
}
</i18n>

<template>
  <transition name="app-fade">
    <div v-show="activated" class="SpGlobalNavWrap">
      <nav id="spGlobalNav" class="SpGlobalNav" :aria-hidden="String(!activated)" aria-labelledby="spGlobalNavTitle">
        <div id="spGlobalNavTitle" class="_visuallyHidden">Menu</div>

        <ul class="SpGlobalNav__list">
          <li>
            <nuxt-link
              :to="localePath($getPath('top'))"
              :class="$route.path === '/' || $route.path === '/en' ? '-active' : ''"
              exact
            >
              {{ $getTitle('top', $i18n.locale) }}
            </nuxt-link>
          </li>

          <li>
            <nuxt-link :to="localePath($getPath('why'))">
              {{ $getTitle('why', $i18n.locale) }}
            </nuxt-link>
          </li>

          <li>
            <nuxt-link :to="localePath($getPath('tool'))">
              {{ $getTitle('tool', $i18n.locale) }}
            </nuxt-link>
          </li>

          <li>
            <nuxt-link :to="localePath($getPath('tips'))">
              {{ $getTitle('tips', $i18n.locale) }}
            </nuxt-link>
          </li>
        </ul>

        <div class="SpGlobalNav__util">
          <nuxt-link :to="localePath($getPath('sitemap'))">
            {{ $getTitle('sitemap', $i18n.locale) }}
          </nuxt-link>

          <template v-if="$i18n.locale === 'ja'">
            <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
          </template>
          <template v-else>
            <nuxt-link :to="switchLocalePath('ja')">日本語</nuxt-link>
          </template>
        </div>

        <div class="SpGlobalNav__close">
          <button @click="() => $emit('close-nav')">X {{ $t('text01') }}</button>
        </div>
      </nav>
    </div>
  </transition>
</template>

<script>
import methods from '@mixins/methods'

export default {
  name: 'SpGlobalNav',
  mixins: [methods],
  props: {
    activated: {
      type: Boolean,
      required: true
    }
  }
}
</script>

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
      <nav
        id="spGlobalNav"
        class="SpGlobalNav"
        :aria-hidden="String(!activated)"
        aria-labelledby="spGlobalNavTitle"
      >
        <div id="spGlobalNavTitle" class="_visuallyHidden">
          モバイルのメニュー
        </div>

        <ul class="SpGlobalNav__list">
          <li>
            <nuxt-link
              :to="localePath($getPath('top'))"
              :class="
                $route.path === '/' || $route.path === '/en' ? '-active' : ''
              "
              exact
              @click.native="
                $entryGtm({
                  category: 'SPハンバーガーメニュー',
                  action: 'トップ',
                  label: 'extra_sp_navi_1',
                })
              "
            >
              {{ $getTitle('top', $i18n.locale) }}
            </nuxt-link>
          </li>

          <li>
            <nuxt-link
              :to="localePath($getPath('tool'))"
              @click.native="
                $entryGtm({
                  category: 'SPハンバーガーメニュー',
                  action: '自分に合った備蓄',
                  label: 'extra_sp_navi_2',
                })
              "
            >
              {{ $getTitle('tool', $i18n.locale) }}
            </nuxt-link>
          </li>
        </ul>

        <div class="SpGlobalNav__util">
          <nuxt-link
            :to="localePath($getPath('sitemap'))"
            @click.native="
              $entryGtm({
                category: 'SPハンバーガーメニュー',
                action: 'サイトマップ',
                label: 'extra_sp_navi_6',
              })
            "
          >
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
          <button @click="() => $emit('close-nav')">
            X {{ $t('text01') }}
          </button>
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
      required: true,
    },
  },
}
</script>

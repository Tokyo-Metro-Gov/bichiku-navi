<template>
  <div>
    <div class="GlobalHeaderWrap">
      <header id="globalHeader" class="GlobalHeader">
        <div class="Container -xl">
          <div class="GlobalHeader__inner">
            <div class="GlobalHeader__logo-soumu">
              <img
                src="~/assets/images/common/header/dammy01.png"
                alt="XXX"
                width="156"
                height="44"
              />
            </div>

            <div class="GlobalHeader__logo">
              <nuxt-link :to="localePath($getPath('top'))">
                <img
                  src="~/assets/images/common/header/dammy02.png"
                  srcset="
                    ~/assets/images/common/header/dammy02.png    1x,
                    ~/assets/images/common/header/dammy02@2x.png 2x
                  "
                  :alt="$siteName[$i18n.locale]"
                  width="300"
                  height="44"
                />
              </nuxt-link>
            </div>

            <div class="GlobalHeader__right">
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
        </div>
      </header>

      <global-nav />
    </div>
  </div>
</template>

<script>
import GlobalNav from '@partials/GlobalNav'

export default {
  name: 'GlobalHeader',
  components: {
    GlobalNav
  }
}
</script>

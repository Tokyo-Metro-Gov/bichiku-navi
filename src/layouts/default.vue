<template>
  <div id="pageTop">
    <global-header />

    <sp-global-header>
      <hamburger-menu
        :activated="activated"
        @open-nav="() => (activated = !activated)"
      />
    </sp-global-header>
    <sp-global-nav
      :activated="activated"
      @close-nav="() => (activated = false)"
    />

    <nuxt />

    <global-footer />
  </div>
</template>

<script>
import GlobalHeader from '@/partials/GlobalHeader'
import GlobalFooter from '@/partials/GlobalFooter'
import SpGlobalHeader from '@/partials/SpGlobalHeader.vue'
import SpGlobalNav from '@/partials/SpGlobalNav.vue'
import HamburgerMenu from '@/partials/HamburgerMenu.vue'

export default {
  name: 'LayoutDefault',
  components: {
    GlobalHeader,
    GlobalFooter,
    SpGlobalHeader,
    SpGlobalNav,
    HamburgerMenu,
  },
  data() {
    return {
      activated: false,
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$nuxtI18nSeo().htmlAttrs.lang,
      },
      link: this.$nuxtI18nSeo().link,
      meta: this.$nuxtI18nSeo().meta,
    }
  },
  watch: {
    $route(to, from) {
      this.activated = false
    },
  },
  mounted() {
    const { isKey, get } = this.$cookies
    const html = document.querySelector('html')

    if (isKey('fontSize')) {
      const fontSize = get('fontSize')

      html.dataset.fontSize = fontSize
    }

    if (isKey('theme')) {
      const theme = get('theme')

      html.dataset.theme = theme
    }
  },
}
</script>

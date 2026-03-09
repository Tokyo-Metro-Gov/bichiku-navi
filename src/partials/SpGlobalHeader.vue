<template>
  <header class="SpGlobalHeader">
    <div class="SpGlobalHeader__inner">
      <div class="SpGlobalHeader__logo">
        <nuxt-link :to="$getPath('top')">
          <img
            src="~/assets/images/common/header/dammy02.png"
            srcset="~/assets/images/common/header/dammy02.png 1x, ~/assets/images/common/header/dammy02@2x.png 2x"
            :alt="$siteName[$i18n.locale]"
            width="300"
            height="44"
          />
        </nuxt-link>
      </div>

      <div class="SpGlobalHeader__menu">
        <slot />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SpGlobalHeader'
}
</script>

<template>
  <header class="SpGlobalHeader">
    <div class="SpGlobalHeader__inner">
      <div class="SpGlobalHeader__logo">
        <nuxt-link :to="$getPath('top')">
          {{ $siteName[$i18n.locale] }}
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
  name: 'SpGlobalHeader',
}
</script>

<i18n>
{
  "ja": {
    "text01": "メニュー",
    "text02": "閉じる"
  },
  "en": {
    "text01": "MENU",
    "text02": "CLOSE"
  }
}
</i18n>

<template>
  <div
    class="HambergarMenu"
    :class="{ '-open': activated }"
    @click="() => $emit('open-nav')"
  >
    <div class="HambergarMenu__inner">
      <button class="HambergarMenu__button" aria-controls="sPGlobalNav">
        <span></span>
      </button>

      <div v-show="!activated" class="HambergarMenu__label">
        {{ $t('text01') }}
      </div>
      <div v-show="activated" class="HambergarMenu__label">
        {{ $t('text02') }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HamburgerMenu',
  props: {
    activated: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

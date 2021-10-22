<i18n>
{
  "ja": {
    "text01": "今すぐ備蓄を始める！"
  },
  "en": {
    "text01": "Start &quot;stockpiling&quot; NOW!"
  }
}
</i18n>
<template>
  <div class="StartBichikuButton">
    <div class="Button -yellow -xl">
      <nuxt-link
        class="Button__link"
        :to="localePath($getPath('tool'))"
        v-html="$t('text01')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartBichikuButton',
}
</script>

<i18n>
{
  "ja": {
    "text01": "このページに関するお問い合わせ"
  },
  "en": {
    "text01": "For inquiry about this website, please use the inquiry form below"
  }
}
</i18n>

<template>
  <address>
    <span>{{ $t('text01') }}</span>
    <a :href="$getPath('form')" target="_blank" rel="noopener noreferrer">
      {{ $developper[$i18n.locale] }}
    </a>
  </address>
</template>

<script>
export default {
  name: 'DocumentAddress',
}
</script>

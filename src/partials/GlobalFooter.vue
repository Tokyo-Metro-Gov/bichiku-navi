<i18n>
{
  "ja": {
    "pageTop": "ページの先頭へ戻る"
  },
  "en": {
    "pageTop": "Back to the top of page"
  }
}
</i18n>

<template>
  <footer class="GlobalFooter">
    

    <div class="GlobalFooter__admin">
      <div>{{ $developper[$i18n.locale] }}</div>
    </div>
    
  </footer>
</template>

<script>

export default {
  name: 'GlobalFooter',
  
}
</script>

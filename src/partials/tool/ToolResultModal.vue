<i18n>
{
  "ja": {
    "text01": "確認ウィンドウを閉じる",
    "text02": "ご注意",
    "text03": "ここから先は",
    "text04": "○○○が管理・運営するサイトではありません",
    "text05": "購入した商品等で生じたいかなる損害・トラブルにつき○○○は責任を負いかねます",
    "text06": "○○○などをかたるなりすまし商品・サイトには十分ご注意ください",
    "text07": "同意してページを移動する"
  },
  "en": {
    "text01": "Close the window.",
    "text02": "Attention",
    "text03": "If you click \"Agree and move page\", you will be taken to a site ",
    "text04": "that is not managed or operated by ***.",
    "text05": "Therefore, the *** is not responsible for any damage or trouble caused by the products you purchased.",
    "text06": "Also, please be careful about spoofing sites and spoofing products that pretend to be ***.",
    "text07": "Agree and move page"
  }
}
</i18n>
<template>
  <modal class="ToolResult__modal" :name="`${siteName}${id}`" :adaptive="true">
    <div class="ToolResult__modalClose">
      <button @click="() => $modal.hide(`${siteName}${id}`)">
        <span class="_visuallyHidden">{{ $t('text01') }}</span>
      </button>
    </div>

    <div class="ToolResult__modalTitle">{{ $t('text02') }}</div>

    <ul class="ToolResult__modalTextList">
      <li>
        {{ $t('text03') }}<span>{{ $t('text04') }}</span>
      </li>
      <li>
        {{ $t('text05') }}
      </li>
      <li>{{ $t('text06') }}</li>
    </ul>

    <a
      class="ToolResult__modalLink"
      :href="`${url}`"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ $t('text07') }}
    </a>
  </modal>
</template>

<script>
export default {
  name: 'ToolResultModal',
  props: {
    id: {
      type: Number,
      required: true,
    },
    siteName: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>

<i18n>
{
  "ja": {
    "text01": "この記事をシェアしてみんなで防災意識を高めよう！",
    "text02": "他の記事をCHECK！",
    "text03": "今から備蓄を始めてみよう！",
    "text04": "自分に合った備蓄を調べる"
  },
  "en": {
    "text01": "Share this article and let everyone learn about disaster prevention!",
    "text02": "Read other articles",
    "text03": "Let's begin to prepare from now!",
    "text04": "Check the suitable stockpiles for you"
  }
}
</i18n>
<template>
  <div>
    <div class="Container -xs">
      <div class="TipsSingleShare">
        <p class="TipsSingleShare__text">
          {{ $t('text01') }}
        </p>

        <ul class="TipsSingleShare__buttons">
          <li>
            <a
              :href="`https://x.com/share?url=${createShareUrl(shareUrl)}&text=${encodeShareTitle(shareTitle)}`"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <img
                src="~/assets/images/tool/result/dammy02.png"
                srcset="
                  ~/assets/images/tool/result/dammy02.png    1x,
                  ~/assets/images/tool/result/dammy02@2x.png 2x
                "
                alt=""
                width="40"
                height="40"
              />
            </a>
          </li>

          <li>
            <a
              :href="`https://www.facebook.com/share.php?u=${createShareUrl(shareUrl)}`"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <img
                src="~/assets/images/tool/result/dammy04.png"
                srcset="
                  ~/assets/images/tool/result/dammy04.png    1x,
                  ~/assets/images/tool/result/dammy04@2x.png 2x
                "
                alt=""
                width="41"
                height="40"
              />
            </a>
          </li>

          <li>
            <a
              :href="`https://social-plugins.line.me/lineit/share?url=${createShareUrl(shareUrl)}`"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img
                src="~/assets/images/tool/result/dammy06.png"
                srcset="~/assets/images/tool/result/dammy06.png 1x, ~/assets/images/tool/result/dammy06@2x.png 2x"
                alt=""
                width="40"
                height="40"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <start-bichiku-button />

    <aside class="TipsSingleOthers">
      <h2 class="BaloonTitle">
        <span>{{ $t('text02') }}</span>
      </h2>

      <div class="TipsSingleOthers__list">
        <tips-list />
      </div>

      <div class="TipsSingleFloatButton">
        <nuxt-link
          class="TipsSingleFloatButton__link"
          :to="localePath($getPath('tool'))"
          @click.native="
            $entryGtm({
              category: 'フローティング',
              action: '自分に合った備蓄を調べる',
              label: 'extra_floating_banner'
            })
          "
        >
          {{ $t('text03') }}
          <span class="TipsSingleFloatButton__button"> ▶︎{{ $t('text04') }} </span>
        </nuxt-link>
      </div>
    </aside>
  </div>
</template>

<script>
import methods from '@mixins/methods'
import { tipsTitles } from '@@/tips.config'
import TipsList from '@partials/tips/TipsList'
import StartBichikuButton from '@partials/StartBichikuButton'

export default {
  name: 'TipsSingleFooter',
  components: { StartBichikuButton, TipsList },
  mixins: [methods],
  props: {
    shareUrl: {
      type: String,
      required: true
    },
    shareTitle: {
      type: String,
      default: ''
    }
  },
  computed: {
    tipsTitles() {
      return tipsTitles
    }
  },
  methods: {
    createShareUrl(id) {
      return `${this.$siteUrl}${this.localePath(this.$getPath('tips'))}${id}/`
    },
    encodeShareTitle(value) {
      return encodeURIComponent(value)
    }
  }
}
</script>

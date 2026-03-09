<i18n>
{
  "ja": {
    "text01": "さらに表示"
  },
  "en": {
    "text01": "more"
  }
}
</i18n>
<template>
  <div class="TipsList">
    <template v-for="({ id, date, title }, index) in tipsTitles">
      <!-- tips/idex or top: 全て出力する -->
      <template v-if="isNotSinglePage()">
        <template v-if="index < 6">
          <tips-list-item :id="id" :key="`tipsListItem${index}`" :date="date" :title="title[$i18n.locale]" />
        </template>
      </template>
      <!-- tips/:tips_id: 現在のパスと同じリンクは出力しない -->
      <template v-else-if="ignoreSelf(id)">
        <tips-list-item :id="id" :key="`tipsListItem${index}`" :date="date" :title="title[$i18n.locale]" />
      </template>
    </template>
    <div v-if="!open && isNotSinglePage() && tipsTitles.length > 6" class="TipsList__more">
      <div class="Button -yellow -sm" @click="open = !open">{{ $t('text01') }}</div>
    </div>
    <template v-if="isNotSinglePage() && open">
      <template v-for="({ id, date, title }, index) in tipsTitles">
        <!-- tips/idex or top: 全て出力する -->
        <template v-if="index >= 6">
          <tips-list-item :id="id" :key="`tipsListItem${index}`" :date="date" :title="title[$i18n.locale]" />
        </template>
      </template>
    </template>
  </div>
</template>

<script>
import TipsListItem from '@partials/tips/TipsListItem'
import { tipsTitles } from '@@/tips.config'

export default {
  name: 'TipsList',
  components: {
    TipsListItem
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    tipsTitles() {
      return [...tipsTitles].sort((a, b) => new Date(b.date) - new Date(a.date))
    }
  },
  methods: {
    isNotSinglePage() {
      return this.getRouteBaseName() === 'tips' || this.getRouteBaseName() === 'index'
    },
    ignoreSelf(id) {
      return this.$route.path.split('/').some((path, index, self) => !self.includes(id))
    }
  }
}
</script>

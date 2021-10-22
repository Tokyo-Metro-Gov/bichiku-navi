<template>
  <nav class="GlobalNav">
    <div class="Container -xl">
      <ul class="GlobalNav__list">
        <li>
          <nuxt-link
            :to="localePath($getPath('top'))"
            :class="
              $route.path === '/' || $route.path === '/en' ? '-active' : ''
            "
            exact
            @click.native="
              $entryGtm({
                category: 'ヘッダーナビゲーション',
                action: 'トップ',
                label: 'extra_pc_navi_1',
              })
            "
          >
            {{ $getTitle('top', $i18n.locale) }}
          </nuxt-link>
        </li>

        <li class="GlobalNav__list--tool">
          <nuxt-link
            :to="localePath($getPath('tool'))"
            @click.native="
              $entryGtm({
                category: 'ヘッダーナビゲーション',
                action: '自分に合った備蓄',
                label: 'extra_pc_navi_2',
              })
            "
          >
            {{ $getTitle('tool', $i18n.locale) }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import methods from '@mixins/methods'

export default {
  name: 'GlobalNav',
  mixins: [methods],
}
</script>

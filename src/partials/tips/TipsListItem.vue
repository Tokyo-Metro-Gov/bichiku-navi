<template>
  <article class="TipsList__item">
    <component
      :is="openInNewTab ? 'a' : 'nuxt-link'"
      :to="openInNewTab ? undefined : localePath(`/tips/${id}`)"
      :href="openInNewTab ? localePath(`/tips/${id}`) : undefined"
      :target="openInNewTab ? '_blank' : undefined"
      :rel="openInNewTab ? 'noopener noreferrer' : undefined"
    >
      <img
        :src="require(`~/assets/images/tips/${id}/thumb.jpg`)"
        :srcset="`
            ${require(`~/assets/images/tips/${id}/thumb.jpg`)} 1x,
            ${require(`~/assets/images/tips/${id}/thumb@2x.jpg`)} 2x
          `"
        alt=""
        width="360"
        height="250"
        draggable="false"
        @contextmenu.prevent
        @touchstart.prevent
        @dragstart.prevent
      />
      <div class="TipsList__itemWrap">
        <h3 class="TipsList__itemTitle">{{ title }}</h3>

        <div class="TipsList__itemDate">
          <time>{{ date }}</time>
        </div>
      </div>
    </component>
  </article>
</template>

<script>
export default {
  name: 'TipsListItem',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    openInNewTab: {
      type: Boolean,
      default: false
    }
  }
}
</script>

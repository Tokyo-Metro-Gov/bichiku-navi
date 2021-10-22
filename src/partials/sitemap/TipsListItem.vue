<template>
  <li class="SitemapList">
    <nuxt-link :to="`${$getPath(id)}`">
      {{ title }}
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'TipsListItem',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>

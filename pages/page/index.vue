<template>
  <div>
    <ul v-for="(page, index) in pages" :key="index">
      <nuxt-link :to="`page/${page.slug}`">{{page.title}}</nuxt-link>
      <p>{{page.description}}</p>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    pages() {
      return this.$store.state.pages
    }
  }
}
</script>
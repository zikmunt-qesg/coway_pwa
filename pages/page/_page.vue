<template>
  <article>
    <h1>{{page.title}}</h1>
    <div v-html="$md.render(page.content)" />
  </article>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { page: payload }
    else
      return {
        page: await require(`~/assets/content/page/${params.page}.json`)
      }
  }
}
</script>
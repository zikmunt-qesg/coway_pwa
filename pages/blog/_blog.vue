<template>
  <article>
    <h1>{{blog_post.title}}</h1>
    <div v-html="$md.render(blog_post.content)" />
  </article>
</template>
<script>
export default {
  transition(to, from) {
    if (!from) {
      return 'slide-left'
    }
    return 'slide-right'
  },
  async asyncData({ params, payload }) {
    if (payload) return { blog_post: payload }
    else
      return {
        blog_post: await require(`~/assets/content/blog/${params.blog}.json`)
      }
  }
}
</script>
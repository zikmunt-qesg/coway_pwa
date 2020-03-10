<template>
  <article>
    <h1>{{blog_post.title}}</h1>
    <div v-html="$md.render(blog_post.body)" />
  </article>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { blog_post: payload }
    else
      return {
        blog_post: await require(`~/assets/content/blog/${params.blog}.json`)
      }
  }
}
</script>
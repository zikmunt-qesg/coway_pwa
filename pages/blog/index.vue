<template>
  <div>
    <ul v-for="(blog_post, index) in blog_posts" :key="index">
      <nuxt-link :to="`${blog_post.slug}`">{{blog_post.title}}</nuxt-link>
      <p>{{blog_post.description}}</p>
    </ul>
  </div>
</template>
<script>
export default {
  transition(to, from) {
    if (!from) {
      return 'slide-left'
    }
    return 'slide-right'
  },
  computed: {
    blog_posts() {
      return this.$store.state.blog_posts
    }
  }
}
</script>
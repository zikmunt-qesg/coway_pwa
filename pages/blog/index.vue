<template>
  <div>
    <ul v-for="(blog_post, index) in blog_posts" :key="index">
      <nuxt-link :to="`blog/${blog_post.slug}`">{{blog_post.title}}</nuxt-link>
      <p>{{blog_post.description}}</p>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    blog_posts() {
      return this.$store.state.blog_posts
    }
  }
}
</script>
<template>
  <div>
    <b-row class="my-5">
      <b-col class="justify-content-center col-12 col-lg-6">
        <div>코웨이 2020 지속가능 웹보고서 Mockup</div>
      </b-col>
      <b-col>
        <b-img fluid class="rounded shadow-xl" src="https://source.unsplash.com/random/720x400" />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-left">
        <li v-for="(post, index) in blog_posts" :key="index">
          <nuxt-link :to="`blog/${post.slug}`">{{post.title}}</nuxt-link>
        </li>
      </b-col>
    </b-row>
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
  components: {},
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },
  computed: {
    blog_posts() {
      return this.$store.state.blog_posts
    }
  }
}
</script>

<style>
</style>

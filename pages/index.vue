<template>
  <div>
    <b-row class="my-5">
      <b-col class="justify-content-center col-12 col-lg-6">
        <div class="title">코웨이 2020 지속가능 웹보고서 Mockup</div>
        <div class="subtitle">코웨이 2020 지속가능보고서 콘텐츠 및 구조 작성용 웹사이트입니다. 페이지 디자인 작업 이후 7월 퍼블리싱될 예정입니다.</div>
      </b-col>
      <b-col>
        <b-img fluid class="rounded shadow-xl" src="https://source.unsplash.com/random/720x400" />
      </b-col>
    </b-row>
    <b-row class="mt-3">
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

<style scoped>
.title {
  display: block;
  font-weight: bold;
  font-size: 2.3em;
  /*color: #35495e;*/
}

.subtitle {
  font-weight: 300;
  font-size: 1.2em;
  /*color: #526488;*/
  padding-top: 10px;
  padding-bottom: 15px;
}
</style>

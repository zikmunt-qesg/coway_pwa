<template>
  <div >
    <script src="https://kit.fontawesome.com/3f3ed23357.js" crossorigin="anonymous"></script>

    <site-header />

      <nuxt class="nuxt" />
      <back-to-top :key="$route.fullPath" class="d-none d-lg-block"></back-to-top>

    <site-footer />
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import siteHeader from '@/components/header.vue'
import siteFooter from '@/components/footer.vue'

export default {
  
  components: {
    siteHeader,
    siteFooter
  },
  computed: {
    ...mapState('articles', {
      articles: state => state.articles,
      is_articles_loaded: state => state.is_articles_loaded
    })
  },
  methods: {
    ...mapActions('articles', ['readArticles', 'saveArticle'])
  },
  created() {
    if (this.is_articles_loaded != true) {
      this.readArticles()
    }
  },
}
</script>
<style>
.stretch {
  min-height: 92vh;
}
</style>

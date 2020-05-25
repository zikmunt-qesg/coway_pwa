<template>
  <div>
    <site-header />

    <b-container class="mt-4 stretch">
      <nuxt class="nuxt" />
    </b-container>

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
    console.log(this.is_articles_loaded)
    if (this.is_articles_loaded != true) {
      this.readArticles().then(() => {
        console.log(this.articles)
      })
    }
  }
}
</script>
<style>
.stretch {
  min-height: 92vh;
}
</style>

<template>
  <div>
    <script src="https://kit.fontawesome.com/3f3ed23357.js" crossorigin="anonymous"></script>
        <site-header />

        <nuxt class="nuxt"/>

        <site-footer />
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import siteHeader from '@/components/header.vue'
import siteFooter from '@/components/footer.vue'

export default {
    data() {
        return {
        }
    },
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
        ...mapActions('articles', ['readArticles', 'saveArticle']),
    },
    created() {
        //console.log(this.is_articles_loaded)
        //if (this.is_articles_loaded != true) {
        //  this.readArticles().then(() => {
        //    console.log(this.articles)
        //  })
        //}
    }
}
</script>
<style>

</style>

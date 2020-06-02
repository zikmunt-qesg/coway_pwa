<template>
  <div>
    <script src="https://kit.fontawesome.com/3f3ed23357.js" crossorigin="anonymous"></script>
        <site-header :hide_sub_menu="hide_sub_menu"/>

        <nuxt class="nuxt" @mouseover="hideSubmenu"/>

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
            hide_sub_menu: true
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
        hideSubmenu(){
            this.hide_sub_menu = true
        }
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

<template>
  <div>
    <script src="https://kit.fontawesome.com/3f3ed23357.js" crossorigin="anonymous"></script>
    <admin-header />

    <b-row no-gutters class="d-flex align-items-stretch min-vh-100">
        <b-col class="col-2 bg-gray6">
            {{active_page}}
            <admin-side class="admin-side" :active_page="this.active_page" />
        </b-col>
        <b-col class="col-10 bg-gray2">
            <nuxt class="nuxt" />
        </b-col>
    </b-row>

    <site-footer />
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import AdminHeader from '@/components/admin/AdminHeader.vue'
import AdminSide from '@/components/admin/AdminSide.vue'
import SiteFooter from '@/components/footer.vue'

export default {
    components: {
        AdminHeader,
        AdminSide,
        SiteFooter
    },
    computed: {
        // ...mapState('articles', {
        // articles: state => state.articles,
        // is_articles_loaded: state => state.is_articles_loaded
        // }),
        // active_page(){
        //     if(this.is_articles_loaded!=true){
        //         return 'page_view'
        //     }
        //     else return 'news'
        // }
    },
    methods: {
        ...mapActions('articles', ['readArticles', 'saveArticle']),        
    },
    
}
</script>

<style>
.stretch {
  min-height: 92vh;
}
/* 
.admin-side {
  background-color: #333333;
  width: 250px;
}

.admin_main {
  background-color: #efefef;
} */
</style>
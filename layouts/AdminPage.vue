<template>
  <div>
    <admin-header />

    <div class="d-flex">
      <admin-side class="stretch admin-side" />

      <b-container fluid class="stretch">
        <b-row class="admin_main">
          <nuxt class="nuxt" />
        </b-row>
      </b-container>
    </div>

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

.admin-side {
  background-color: #333333;
  width: 250px;
}

.admin_main {
  background-color: #efefef;
}
</style>
<template>
<div class="position-relative min-vh-100">
    <b-row no-gutters class="bg-blue3 mb-5">
        <b-col class="py-3 text-center text-white"><h2>Coway Sustainability News</h2></b-col>
    </b-row>
    <b-container>
        <div class="mb-3">
            <h7> {{ title }}</h7>
        </div>
        <div class="mb-3">
            {{ date }}
        </div>
        <div class="mb-3">
            <b-img v-if="picture_file != null && picture_file.name != undefined && picture_file.name != null && picture_file.name != 'null' && picture_file.name != ''" :src="picture_file_url" class="img-fluid"></b-img>
        </div>
        <div class="mb-3">
          <div v-html="contents"></div>
        </div>
    </b-container>
</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import axios from 'axios'

export default {
  async asyncData({ query, store }) {
    if (store.state.articles.is_articles_loaded != true) {
      await store.dispatch('articles/readArticles')
    }
    return { id: query.id }
  },
  data() {
    return {
      title: '',
      description: '',
      date: '',
      contents: '',
      picutre: '',
      picture_file: [],
      picture_file_url: ''
    }
  },
  computed: {
    ...mapState('articles', {
      articles: state => state.articles,
      is_articles_loaded: state => state.is_articles_loaded
    }),
  },
  methods: {
    ...mapActions('articles', ['readArticles', 'saveArticle', 'loadPicture']),
  },
  created() {

  },
  mounted() {
    if (this.id != null) {
      let target_article = this.articles.find(item => item.id == this.id)
      if (target_article) {
        this.title = target_article.title
        this.description = target_article.description
        this.date = target_article.date
        this.contents = target_article.contents
        this.picture_file = target_article.picture_file
        if(!this.picture_file_url){
            this.loadPicture({ id: this.id, thumb: true })
            .then( picture => {
                this.picture_file = picture 
                this.picture_file_url = URL.createObjectURL(picture)
            })
            .catch( error=>{
                console.log(error)
            })
        }
      }
    }
  },
}
</script>
<template>
<div class="position-relative page-top-bg-news min-vh-100">
    <div class="w-100 position-absolute bg-white" style="height:80%; top:500px; z-index:0"></div>

    <b-row no-gutters class="py-5">
        <b-col class="py-3 mt-md-4 mt-lg-5 text-center"><h2 class="fw-400">COWAY SUSTAINABILITY NEWS</h2></b-col>
    </b-row>
    <b-container class="">
        <b-row>
            <b-col class="col-0 col-lg-1"></b-col>
            <b-col class="col-12 col-lg-10 bg-white px-md-4 px-lg-5">
                <section class="px-3 px-md-4 px-lg-5 py-4 py-lg-5">
                    <div class="mb-1 blue3 f-90 fw-600"> {{ date }} </div>
                    <div class="mb-5 f-140 fw-500 font-noto"> {{ title }} </div>
                    <div class="mb-3 border-bottom-gray-bold"></div>
                    <!-- <p class="mb-5 f-140 parang8 font-noto"> {{ description }} </p> -->
                    <div class="mb-3">
                        <b-img v-if="picture_file != null && picture_file.name != undefined && picture_file.name != null && picture_file.name != 'null' && picture_file.name != ''" :src="picture_file_url" class="img-fluid"></b-img>
                    </div>
                    <div class="mb-3"> <div v-html="$md.render(contents)"></div> </div>
                    <div class="pt-4 mb-3 border-bottom-gray-bold"></div>
                    <hr class='mb-5 space-p75'> 
                </section>
            </b-col>
            <b-col class="col-0 col-lg-1"></b-col>
        </b-row>        
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
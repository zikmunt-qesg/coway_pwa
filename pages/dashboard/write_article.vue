<template>
<div class="position-relative min-vh-100">
    <hr class="mb-3">
    <b-container>
        <h3 class="mb-4 pb-2 border-bottom"> 뉴스 게시물 수정 및 작성 </h3>
        <div class="mb-3">
            <h7>Title</h7>
            <b-form-input v-model="title" placeholder="제목을 작성하여 주십시오"></b-form-input>
        </div>
        <div class="mb-3">
            <h7>Date</h7>
            <b-form-datepicker v-model="date" placeholder="작성 날짜를 입력하여 주십시오"></b-form-datepicker>
        </div>
        <div class="mb-3">
            <h7>Description</h7>
            <b-form-textarea v-model="description" rows="3" placeholder="핵심 요약 정보를 작성하여 주십시오"></b-form-textarea>
        </div>
        <div class="mb-3">
            <h7>사진 및 이미지</h7>
            <b-form-file v-model="picture_file" :placeholder="picture_file.name"></b-form-file>
            <b-img v-if="picture_file.name != undefined && picture_file.name != null && picture_file.name != 'null' && picture_file.name != ''" :src="picture_file_url" class="img-fluid"></b-img>

        </div>
        <div class="mb-3">
            <h7>내용</h7>
            <b-form-textarea v-model="contents" rows="8" placeholder="본문 내용을 작성하여 주십시오"></b-form-textarea>
        </div>
        <div class="mb-3 text-right">
            <b-button @click="save" variant="blue" class="mr-2">저장</b-button>
            <b-button @click.stop.prevent="$router.push('/dashboard/news)admin')">취소</b-button>
        </div>
        <hr class="mb-5">

    </b-container>
</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import axios from 'axios'

export default {
  layout: 'AdminPage',
  async asyncData({ query, store }) {
    if (query.id) {
      let target_article = store.state.articles.articles.find(item => item.id==query.id)
      return {
        id: query.id
      }
    } else {
      return {
        id: null,
      }
    }
  },
  data() {
    return {
      title: '',
      description: '',
      date: '',
      contents: '',
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
    save() {
      let new_article = {
        id: this.id,
        title: this.title,
        description: this.description,
        date: this.date,
        contents: this.contents,
        picture_file: this.picture_file
      }
      this.saveArticle(new_article)
      .then( () => {
          this.$router.push('/dashboard/news_admin')
      })
    }
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
  watch:{
    picture_file: {
      deep: true,
      handler(newVal){
        console.log(newVal)
      }
    }
  }
}
</script>
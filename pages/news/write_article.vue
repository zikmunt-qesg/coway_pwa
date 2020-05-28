<template>
<div class="position-relative min-vh-100">
    <b-row no-gutters class="bg-blue3 mb-5">
        <b-col class="py-3 text-center text-white"><h2>Coway Sustainability News</h2></b-col>
    </b-row>
    <b-container>
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
        </div>
        <div class="mb-3">
            <h7>내용</h7>
            <b-form-textarea v-model="contents" rows="8" placeholder="본문 내용을 작성하여 주십시오"></b-form-textarea>
        </div>
        <div class="mb-3 text-right">
            <b-button @click="save" variant="blue" class="mr-2">저장</b-button>
            <b-button @click.stop.prevent="$router.push('/news')">취소</b-button>
        </div>
    </b-container>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import axios from 'axios'

export default {
  async asyncData({ query, store }) {
    if (query.id) {
      const path = store.state.articles.backend_host + '/get_file_from_server'
      let file = store.state.articles.articles.find(item => item.id == query.id)
      let filename = null
      if (file != undefined) {
        filename = file.picture
      }
      const { data } = await axios.get(path, {
        params: { filename: filename },
        responseType: 'blob'
      })

      return {
        picture_file_data: data,
        id: query.id
      }
    } else {
      return {
        id: null,
        picture_file: []
      }
    }
  },
  data() {
    return {
      title: '',
      description: '',
      date: '',
      contents: '',
      picture_file: []
    }
  },
  computed: {
    ...mapState('articles', {
      articles: state => state.articles,
      is_articles_loaded: state => state.is_articles_loaded
    })
  },
  methods: {
    ...mapActions('articles', ['readArticles', 'saveArticle']),
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
        this.readArticles()
        this.$router.push('/news')
      })
    }
  },
  created() {},
  mounted() {
    if (this.id != null) {
      let target_article = this.articles.find(item => item.id == this.id)
      if (target_article) {
        this.title = target_article.title
        this.description = target_article.description
        this.date = target_article.date
        this.contents = target_article.contents
        this.picture_file = new File(
          [this.picture_file_data],
          target_article.picture
        )
      }
    }
  },
  watch: {
    picture_file(new_val) {
      console.log(new_val)
    }
  }
}
</script>
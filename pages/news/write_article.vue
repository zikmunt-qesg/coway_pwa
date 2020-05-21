<template>
  <b-container>
    <div class="mt-2">
      Title
      <b-form-input v-model="title"></b-form-input>
    </div>
    <div class="mt-2">
      Date
      <b-form-datepicker v-model="date"></b-form-datepicker>
    </div>
    <div class="mt-2">
      Description
      <b-form-textarea v-model="description" rows="3"></b-form-textarea>
    </div>
    <div class="mt-2">
      Picture
      <b-form-file v-model="picture_file" :placeholder="picture_file.name"></b-form-file>
    </div>
    <div class="mt-2">
      Contents
      <b-form-textarea v-model="contents" rows="8"></b-form-textarea>
    </div>
    <div class="mt-2">
      <b-button @click="save">저장</b-button>
      <b-button>취소</b-button>
    </div>
  </b-container>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import axios from 'axios'

export default {
  async asyncData({ query, store }) {
    if (query.id) {
      const path =
        store.state.articles.backend_host + '/api/get_file_from_server'
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
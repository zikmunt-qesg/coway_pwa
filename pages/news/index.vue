<template>
  <b-container>
    <div v-for="item in articles" :Key="item.id">
      {{ item.title }}
      <b-button @click.stop.prevent="$router.push('/news/write_article?id='+item.id)">수정</b-button>
      <b-button>삭제</b-button>
    </div>
    <div>
      <b-button @click.stop.prevent="$router.push('/news/write_article')">새 글쓰기</b-button>
    </div>
  </b-container>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('articles', {
      articles: state => state.articles,
      is_articles_loaded: state => state.is_articles_loaded
    })
  },
  methods: {
    ...mapActions('articles', ['readArticles', 'saveArticle'])
  }
}
</script>
-
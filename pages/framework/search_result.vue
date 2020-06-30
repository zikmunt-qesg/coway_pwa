<template>
  <div>
    <b-container class="min-vh-100">
        <search-form class="sticky-top bg-white shadow-sm w-100 py-3 px-3 px-lg-4 mb-5" 
            prop_mode='integrated' prop_framework='GRI' 
            :defined_query="defined_query" style="top:50.76px; z-index:888;"
        >
        </search-form>        
        <template v-if="search_results.length != 0">
            <b-card class="my-3 border-0 bg-blue-gray1 result-box" v-for="item in search_results" :key="item.link">
                <b-card-title> <nuxt-link :to="item.link"> {{ item.title }} </nuxt-link> </b-card-title>
                <b-card-text> <nuxt-link :to="item.link"> <div v-html="item.contents"> </div></nuxt-link></b-card-text>
            </b-card>
        </template>
        <template v-else>
            <b-card>
                <b-card-text>검색 결과가 없습니다. 다시 검색해 주세요</b-card-text>
            </b-card>
        </template>
    <hr class="space-p75 mb-5">
    </b-container>
  </div>
</template>

<script>
import SearchForm from '@/components/search/SearchForm'
import { mapState } from 'vuex'
import LocaleMixin from '@/components/locale'

export default {
  mixins: [LocaleMixin],
  components: {
    SearchForm
  },
  async asyncData({ query }) {
    return { defined_query: query.defined_query }
  },
  computed:{
      ...mapState('search', {
          search_results: state => state.search_results
      })
  }
}
</script>
<style scoped lang="scss">
.result-box > div > h4 > a,
.result-box > div > p > a {
    transition: all 0.2s ease-out;
}
.result-box:hover > div > h4 > a,
.result-box:hover > div > p > a {
    color: black!important;
    // background-color: $blue4;
}
</style>

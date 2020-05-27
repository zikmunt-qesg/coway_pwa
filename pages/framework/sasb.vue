<template>
  <div>
    <b-container>
    <search-form></search-form>

    <b-table-simple responsive>
      <b-thead>
        <b-tr>
          <b-td>구분</b-td>
          <b-td>SASB 코드</b-td>
          <b-td>지표명</b-td>
          <b-td>Link</b-td>
          <b-td>비고</b-td>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(row_item, index) in gri_table_100" :key="row_item.id">
          <template
            v-if="index-1 < 0 ? true: row_item.classification != gri_table_100[index-1].classification"
          >
            <b-td :rowspan="getSameLength(gri_table_100, index)">{{ row_item.classification }}</b-td>
          </template>
          <b-td :id="`gri_${row_item.code}`">{{ row_item.code }}</b-td>
          <b-td>{{ row_item.indicators }}</b-td>
          <b-td>{{ row_item.link }}</b-td>
          <b-td>{{ row_item.Note }}</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>

    </b-container>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import SearchForm from '@/components/search/SearchForm'

export default {
  components: {
    SearchForm
  },
  data() {
    return {
        sasb_table_appliance: [
            { classification: '제품안전', code: '102-1', indicators: '조직명칭', link: '',Note: '' },
        ]
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
    getSameLength(o_array, index) {
      let rowspan = 1
      for (let i = index; i < o_array.length; i++) {
        if (i + 1 >= o_array.length) return rowspan
        if (o_array[i].classification == o_array[i + 1].classification) {
          rowspan += 1
        } else {
          return rowspan
        }
      }
    }
  },
  created() {

  }
}
</script>
-
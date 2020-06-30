<template>
<div class="position-relative page-top-bg-news min-vh-100">
    <logger title="프레임워크 - DJSI"></logger>
    <div class="w-100 bg-white bg-white-cover-news position-absolute"></div>  

    <b-row no-gutters class="py-5">
        <b-col class="py-3 mt-md-4 mt-lg-5 text-center"><h2 class="fw-400">REPORTING FRAMEWORKS</h2></b-col>
    </b-row>
    <b-container fluid class="bg-white px-0 mx-0">
        <b-card class="border-0 bg-transparent-gray-50 sticky-top" style="top:50.76px; z-index:888;">
            <b-container><search-form class="my-1" prop_mode='indicator' prop_framework='SASB' :defined_query="defined_query"></search-form></b-container>
        </b-card>
    
        <b-container class="pt-5 position-relative">
                <b-nav tabs class="my-5">
                    <b-nav-item @click.stop.prevent="$router.push('/framework/gri')" class="f-110 fw-400"> GRI </b-nav-item>
                    <b-nav-item @click.stop.prevent="$router.push('/framework/sasb')" class="f-110 fw-400"> SASB </b-nav-item>
                    <b-nav-item active class="f-110 fw-400"> DJSI Public </b-nav-item>
                </b-nav>

                <b-card class="border-0 px-4 fw-400">
                DJSI(Dow Jones Sustainability Indices)는 기업의 경제적 성과와 환경-사회적 측면을 종합 평가하는 지수입니다. 글로벌 지속가능성 전문 평가기관 SAM의 평가 결과를 토대로 
                지속가능성 우수 기업을 Best-In-Class 방식으로 선별하고, S&amp;P DowJones Indices에서 투자 지수를 운영합니다. 코웨이는 2016년 부터 2019년 까지 4년 연속 DJSI World에 
                편입되며 우수한 지속가능경영 성과를 인정받고 있습니다. 
                </b-card>
            
            <hr class="space-p25">
            <div class="col-12 bg-gray3 fw-500 f-110 py-2 px-3 mb-4 font-noto"> DJSI 가정용 내구재(Household Durables) 산업 공개 요건 </div>
            <b-table-simple class="txt-table f-95" responsive>
                <b-thead>
                    <b-tr>
                    <b-td style="width:18%;">구분</b-td>
                    <b-td style="width:8%;"> 구분 번호</b-td>
                    <b-td style="">지표명</b-td>
                    <b-td>Contents</b-td>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr v-for="(row_item, index) in djsi_table" :key="row_item.id">
                    <template
                        v-if="index-1 < 0 ? true: row_item.classification != djsi_table[index-1].classification"
                    >
                        <b-td :rowspan="getSameLength(djsi_table, index)">{{ row_item.classification }}</b-td>
                    </template>
                    <b-td :id="safeHash(`djsi_${row_item.code}`)"><template v-if="$route.hash == safeHash(`#djsi_${row_item.code}`)"><mark>{{ row_item.code }}</mark></template><template v-else>{{ row_item.code }}</template></b-td>
                    <b-td><template v-if="$route.hash == safeHash(`#djsi_${row_item.code}`)"><mark>{{ row_item.indicators }}</mark></template><template v-else>{{ row_item.indicators }}</template></b-td>
                    <b-td>{{ row_item.Note }} <br v-if="row_item.Note">
                        <span v-if="row_item.link.length != 0">
                            <span v-for="link_to in row_item.link" :key="link_to.id">
                                <template v-if="link_to['to'].search(/http/g) != -1">
                                    <a :href="link_to['to']" class="mr-3" target="_blank">
                                        {{ link_to['name'] }}<i :class="link_to['icon']" class="fw-300 ml-2 f-80 gray4"></i>
                                    </a>
                                </template>
                                <template v-else>
                                    <nuxt-link :to="link_to['to']" class="mr-3">
                                        {{ link_to['name'] }}<i :class="link_to['icon']" class="fw-300 ml-2 f-80 gray4"></i>
                                    </nuxt-link>
                                </template>
                            </span>
                        </span>
                    </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
            <hr class="space-p75">
        </b-container>
    </b-container>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import SearchForm from '@/components/search/SearchForm'
import LocaleMixin from '@/components/locale'

export default {
  mixins: [LocaleMixin],
  components: {
    SearchForm
  },
  async asyncData({ query }) {
    return { defined_query: query.defined_query }
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState('articles', {
      articles: state => state.articles,
      is_articles_loaded: state => state.is_articles_loaded
    }),
    ...mapState('frameworks', {
      djsi_table: state => state.djsi_table
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
    },
    safeHash(target){
      return target.replace(/\./g,'-').replace(/\s/g,'')
    }
  },
  created() {

  }
}
</script>
-
<template>
<div class="position-relative page-top-bg-news min-vh-100">
    <logger title="프레임워크 - SASB"></logger>
    <div class="w-100 bg-white bg-white-cover-news position-absolute"></div>  

    <b-row no-gutters class="py-5">
        <b-col class="py-3 mt-md-4 mt-lg-5 text-center"><h2 class="fw-400">REPORTING FRAMEWORKS</h2></b-col>
    </b-row>
    <b-container fluid class="bg-white px-0 mx-0">
        <b-card class="border-0 bg-transparent-gray-50 sticky-top" style="top:64.75px; z-index:888;">
            <b-container><search-form class="my-1" prop_mode='indicator' prop_framework='SASB' :defined_query="defined_query"></search-form></b-container>
        </b-card>
    
        <b-container class="pt-5 position-relative">    
                <b-nav tabs class="my-5">
                    <b-nav-item @click.stop.prevent="$router.push('/framework/gri')" class="f-110 fw-400"> GRI </b-nav-item>
                    <b-nav-item active class="f-110 fw-400"> SASB </b-nav-item>
                    <b-nav-item @click.stop.prevent="$router.push('/framework/djsi')" class="f-110 fw-400"> DJSI Public </b-nav-item>
                </b-nav>

                <b-card class="border-0 px-4 fw-400">
                SASB(Sustainability Accounting Standard Board, 지속가능성 회계기준위원회)는 비재무 보고 표준을 제정하는 비영리 기관입니다. 2011년 설립되어 지속가능성 회계 표준을 개발하고 전파하고 있습니다.
                SASB는 산업별로 연관성이 높은 지속가능성 리스크 주제를 제시하고, 기업이 해당 주제에 대해 지속적으로 보고하여 투자자 및 이해관계자에 커뮤니케이션 할 것을 권고합니다. 
                환경가전 렌탈 비즈니스를 핵심으로 하는 코웨이는 소비재 중 가전제품 제조(Appliance Manufacturing) 및 소비자 서비스 중 전문 및 상업 서비스(Professional and Commercial Service) 산업과 연관성이 높다고 판단되어,
                두 산업의 기준에 따라 보고하였습니다.  
                </b-card>
            
            <hr class="space-p25">
            <div class="col-12 bg-gray3 fw-500 f-110 py-2 px-3 mb-4 font-noto"> 가전제품 제조(Appliance Manufacturing) 지속가능성 지표 </div>

            <b-table-simple class="txt-table f-95 mb-5" responsive>
                <b-thead>
                    <b-tr>
                    <b-td style="width:15%;">구분</b-td>
                    <b-td style="width:13%;">SASB 코드</b-td>
                    <b-td style="width:32%;">지표명</b-td>
                    <b-td>Contents</b-td>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr v-for="(row_item, index) in sasb_table_appliance_s" :key="row_item.id">
                    <template
                        v-if="index-1 < 0 ? true: row_item.classification != sasb_table_appliance_s[index-1].classification"
                    >
                        <b-td :rowspan="getSameLength(sasb_table_appliance_s, index)">{{ row_item.classification }}</b-td>
                    </template>
                    <b-td :id="safeHash(`sasb_${row_item.code}`)"><template v-if="$route.hash == safeHash(`#sasb_${row_item.code}`)"><mark>{{ row_item.code }}</mark></template><template v-else>{{ row_item.code }}</template></b-td>
                    <b-td><template v-if="$route.hash == safeHash(`#sasb_${row_item.code}`)"><mark>{{ row_item.indicators }}</mark></template><template v-else>{{ row_item.indicators }}</template></b-td>
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

            <b-table-simple class="txt-table f-95" responsive>
                <b-thead>
                    <b-tr>
                    <b-td style="width:15%;">구분</b-td>
                    <b-td style="width:13%;">SASB 코드</b-td>
                    <b-td style="width:32%;">지표명</b-td>
                    <b-td>Contents</b-td>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr v-for="(row_item, index) in sasb_table_appliance_a" :key="row_item.id">
                    <template
                        v-if="index-1 < 0 ? true: row_item.classification != sasb_table_appliance_a[index-1].classification"
                    >
                        <b-td :rowspan="getSameLength(sasb_table_appliance_a, index)">{{ row_item.classification }}</b-td>
                    </template>
                    <b-td :id="safeHash(`sasb_${row_item.code}`)"><template v-if="$route.hash == safeHash(`#sasb_${row_item.code}`)"><mark>{{ row_item.code }}</mark></template><template v-else>{{ row_item.code }}</template></b-td>
                    <b-td><template v-if="$route.hash == safeHash(`#sasb_${row_item.code}`)"><mark>{{ row_item.indicators }}</mark></template><template v-else>{{ row_item.indicators }}</template></b-td>
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

            <hr class="mb-4">

            <div class="col-12 bg-gray3 fw-500 f-110 py-2 px-3 mb-4 font-noto"> 전문 및 상업 서비스(Professional and Commercial Service) 지속가능성 지표 </div>
            <b-table-simple class="txt-table f-95 mb-5" responsive>
                <b-thead>
                    <b-tr>
                    <b-td style="width:15%;">구분</b-td>
                    <b-td style="width:13%;">SASB 코드</b-td>
                    <b-td style="width:32%;">지표명</b-td>
                    <b-td>Contents</b-td>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr v-for="(row_item, index) in sasb_table_professional_s" :key="row_item.id">
                    <template
                        v-if="index-1 < 0 ? true: row_item.classification != sasb_table_professional_s[index-1].classification"
                    >
                        <b-td :rowspan="getSameLength(sasb_table_professional_s, index)">{{ row_item.classification }}</b-td>
                    </template>
                    <b-td :id="safeHash(`sasb_${row_item.code}`)"><template v-if="$route.hash == safeHash(`#sasb_${row_item.code}`)"><mark>{{ row_item.code }}</mark></template><template v-else>{{ row_item.code }}</template></b-td>
                    <b-td><template v-if="$route.hash == safeHash(`#sasb_${row_item.code}`)"><mark>{{ row_item.indicators }}</mark></template><template v-else>{{ row_item.indicators }}</template></b-td>
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

            <b-table-simple class="txt-table f-95" responsive>
                <b-thead>
                    <b-tr>
                    <b-td style="width:15%;">구분</b-td>
                    <b-td style="width:13%;">SASB 코드</b-td>
                    <b-td style="width:32%;">지표명</b-td>
                    <b-td>Contents</b-td>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr v-for="(row_item, index) in sasb_table_professional_a" :key="row_item.id">
                    <template
                        v-if="index-1 < 0 ? true: row_item.classification != sasb_table_professional_a[index-1].classification"
                    >
                        <b-td :rowspan="getSameLength(sasb_table_professional_a, index)">{{ row_item.classification }}</b-td>
                    </template>
                    <b-td :id="safeHash(`sasb_${row_item.code}`)"><template v-if="$route.hash == safeHash(`#sasb_${row_item.code}`)"><mark>{{ row_item.code }}</mark></template><template v-else>{{ row_item.code }}</template></b-td>
                    <b-td><template v-if="$route.hash == safeHash(`#sasb_${row_item.code}`)"><mark>{{ row_item.indicators }}</mark></template><template v-else>{{ row_item.indicators }}</template></b-td>
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
        hashtag: '',
    }
  },
  computed: {
    ...mapState('articles', {
      articles: state => state.articles,
      is_articles_loaded: state => state.is_articles_loaded
    }),
    ...mapState('frameworks', {
        sasb_table_appliance_s: state => state.sasb_table_appliance_s,
        sasb_table_appliance_a: state => state.sasb_table_appliance_a,
        sasb_table_professional_s: state => state.sasb_table_professional_s,
        sasb_table_professional_a: state => state.sasb_table_professional_a
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

  },
  mounted() {

  }
}
</script>
-
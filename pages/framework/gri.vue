<template>
<div class="position-relative page-top-bg-news min-vh-100">
    <div class="w-100 bg-white bg-white-cover-news position-absolute"></div>  

    <b-row no-gutters class="py-5">
        <b-col class="py-3 mt-md-4 mt-lg-5 text-center"><h2 class="fw-400">REPORTING FRAMEWORKS</h2></b-col>
    </b-row>
    <b-container fluid class="bg-white px-0 mx-0">

        <b-card class="border-0 bg-transparent-gray-50 sticky-top" style="top:67.5px; z-index:888;">
            <b-container><search-form class="my-1" prop_mode='indicator' prop_framework='GRI' :defined_query="defined_query"></search-form></b-container>
        </b-card>
    
        <b-container class="pt-5 position-relative">    
                <b-nav tabs class="my-5 position-relative">
                    <b-nav-item active class="f-110 fw-400"> GRI </b-nav-item>
                    <b-nav-item @click.stop.prevent="$router.push('/framework/sasb')" class="f-110 fw-400"> SASB </b-nav-item>
                    <b-nav-item @click.stop.prevent="$router.push('/framework/djsi')" class="f-110 fw-400"> DJSI Public </b-nav-item>
                </b-nav>

                <b-card class="border-0 px-4 fw-400">
                GRI(Global Reporting Initiatives)는 기업, 정부 및 기타 조직이 기후 변화, 인권 및 부패와 같은 지속가능성 문제에 대한 영향을 이해하고 정보를 공시하도록 돕는 국제 표준 조직입니다. 
                코웨이는 GRI의 지속가능성 보고 표준(GRI Sustainability Disclosure Standard)의 핵심(Core) 부합 방법에 따라 보고서를 작성하여 공개하고 있습니다. 
                </b-card>

            <hr class="space-p25">
            <div class="col-12 bg-gray3 fw-500 f-110 py-2 px-3 mb-4 font-noto"> Universal Standards (GRI 100) </div>
            <b-table-simple class="txt-table f-95" responsive>
            <b-thead>
                <b-tr>
                <b-td style="width:18%;">구분</b-td>
                <b-td style="width:8%;">GRI 번호</b-td>
                <b-td style="width:36%;" >지표명</b-td>
                <b-td>Contents</b-td>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="(row_item, index) in gri_table_100" :key="row_item.id">
                    <template
                        v-if="index-1 < 0 ? true: row_item.classification != gri_table_100[index-1].classification"
                    >
                        <b-td :rowspan="getSameLength(gri_table_100, index)">{{ row_item.classification }}</b-td>
                    </template>
                    <b-td :id="safeHash(`gri_${row_item.code}`)"><template v-if="$route.hash == safeHash(`#gri_${row_item.code}`)"><mark>{{ row_item.code }}</mark></template><template v-else>{{ row_item.code }}</template></b-td>
                    <b-td><template v-if="$route.hash == safeHash(`#gri_${row_item.code}`)"><mark>{{ row_item.indicators }}</mark></template><template v-else>{{ row_item.indicators }}</template></b-td>
                    <b-td>{{ row_item.Note }} 
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

            <hr class="space-p25">
            <div class="col-12 bg-gray3 fw-500 f-110 py-2 px-3 mb-4 font-noto"> Econimic (GRI 200) </div>

            <b-table-simple class="txt-table f-95" responsive>
            <b-thead>
                <b-tr>
                <b-td style="width:18%;">구분</b-td>
                <b-td style="width:8%;">GRI 번호</b-td>
                <b-td style="width:36%;" >지표명</b-td>
                <b-td>Contents</b-td>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="(row_item, index) in gri_table_200" :key="row_item.id">
                <template
                    v-if="index-1 < 0 ? true: row_item.classification != gri_table_200[index-1].classification"
                >
                    <b-td :rowspan="getSameLength(gri_table_200, index)">{{ row_item.classification }}</b-td>
                </template>
                <b-td :id="safeHash(`gri_${row_item.code}`)"><template v-if="$route.hash == safeHash(`#gri_${row_item.code}`)"><mark>{{ row_item.code }}</mark></template><template v-else>{{ row_item.code }}</template></b-td>
                <b-td><template v-if="$route.hash == safeHash(`#gri_${row_item.code}`)"><mark>{{ row_item.indicators }}</mark></template><template v-else>{{ row_item.indicators }}</template></b-td>
                <b-td>{{ row_item.Note }} 
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
                    <!-- <span v-if="row_item.link.length != 0"><a v-for="link_to in row_item.link" :key="link_to.id" :href="link_to" <b-button>+</b-button></a></span>  -->
                </b-td>
                </b-tr>
            </b-tbody>
            </b-table-simple>

            <hr class="space-p25">

            <div class="col-12 bg-gray3 fw-500 f-110 py-2 px-3 mb-4 font-noto"> Environmental (GRI 300) </div>
            <b-table-simple class="txt-table f-95" responsive>
            <b-thead>
                <b-tr>
                <b-td style="width:18%;">구분</b-td>
                <b-td style="width:8%;">GRI 번호</b-td>
                <b-td style="width:36%;" >지표명</b-td>
                <b-td>Contents</b-td>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="(row_item, index) in gri_table_300" :key="row_item.id">
                <template
                    v-if="index-1 < 0 ? true: row_item.classification != gri_table_300[index-1].classification"
                >
                    <b-td :rowspan="getSameLength(gri_table_300, index)">{{ row_item.classification }}</b-td>
                </template>
                <b-td :id="safeHash(`gri_${row_item.code}`)"><template v-if="$route.hash == safeHash(`#gri_${row_item.code}`)"><mark>{{ row_item.code }}</mark></template><template v-else>{{ row_item.code }}</template></b-td>
                <b-td><template v-if="$route.hash == safeHash(`#gri_${row_item.code}`)"><mark>{{ row_item.indicators }}</mark></template><template v-else>{{ row_item.indicators }}</template></b-td>
                <b-td>{{ row_item.Note }} 
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
                    <!-- <span v-if="row_item.link.length != 0"><a v-for="link_to in row_item.link" :key="link_to.id" :href="link_to" <b-button>+</b-button></a></span>  -->
                </b-td>
                </b-tr>
            </b-tbody>
            </b-table-simple>

            <hr class="space-p25">
            <div class="col-12 bg-gray3 fw-500 f-110 py-2 px-3 mb-4 font-noto"> Social (GRI 400) </div>

            <b-table-simple class="txt-table f-95" responsive>
            <b-thead>
                <b-tr>
                <b-td style="width:18%;">구분</b-td>
                <b-td style="width:8%;">GRI 번호</b-td>
                <b-td style="width:36%;" >지표명</b-td>
                <b-td>Contents</b-td>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="(row_item, index) in gri_table_400" :key="row_item.id">
                <template
                    v-if="index-1 < 0 ? true: row_item.classification != gri_table_400[index-1].classification"
                >
                    <b-td :rowspan="getSameLength(gri_table_400, index)">{{ row_item.classification }}</b-td>
                </template>
                <b-td :id="safeHash(`gri_${row_item.code}`)"><template v-if="$route.hash == safeHash(`#gri_${row_item.code}`)"><mark>{{ row_item.code }}</mark></template><template v-else>{{ row_item.code }}</template></b-td>
                <b-td><template v-if="$route.hash == safeHash(`#gri_${row_item.code}`)"><mark>{{ row_item.indicators }}</mark></template><template v-else>{{ row_item.indicators }}</template></b-td>
                <b-td>{{ row_item.Note }} 
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
                    <!-- <span v-if="row_item.link.length != 0"><a v-for="link_to in row_item.link" :key="link_to.id" :href="link_to" <b-button>+</b-button></a></span>  -->
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

export default {
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
      gri_table_100: state => state.gri_table_100,
      gri_table_200: state => state.gri_table_200,
      gri_table_300: state => state.gri_table_300,
      gri_table_400: state => state.gri_table_400,      
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
}
</script>
-
<template>
<div class="position-relative min-vh-100">
    <b-row no-gutters class="py-5 bg-blue3 mb-5">
        <b-col class="py-5 my-3 my-md-4 text-center text-white"><h1>Reporting Frameworks</h1></b-col>
    </b-row>
    <b-container>
        <b-card class="border-0 bg-blue-gray1 mb-5">
            <search-form class="my-3" prop_mode='indicator' prop_framework='DJSI'></search-form>
        </b-card>

            <b-nav tabs class="mb-5">
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
        <div class="col-12 bg-gray3 fw-500 f-110 py-2 px-3 mb-4"> DJSI 가정용 내구재(Household Durables) 산업 공개 요건 </div>
        <b-table-simple class="txt-table" responsive>
            <b-thead>
                <b-tr>
                <b-td style="width:18%;">구분</b-td>
                <b-td style="width:8%;">DJSI 번호</b-td>
                <b-td>질문명</b-td>
                <b-td style="width:15%;">Link</b-td>
                <b-td style="width:15%;">비고</b-td>
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
                <b-td>{{ row_item.link }}</b-td>
                <b-td>{{ row_item.Note }}</b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>
        <hr class="space-p75">

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
        djsi_table: [
            { classification: '거버넌스', code: '1.1.1', indicators: '이사회 구조', link: '', Note: '' },
            { classification: '거버넌스', code: '1.1.2', indicators: '비상임 의장/선임 이사', link: '', Note: '' },
            { classification: '거버넌스', code: '1.1.3', indicators: '이사회 다양성 정책', link: '', Note: '' },   
            { classification: '거버넌스', code: '1.1.4', indicators: '이사회 성별 다양성', link: '', Note: '' },            
            { classification: '거버넌스', code: '1.1.5', indicators: '이사회 효율성', link: '', Note: '' },            
            { classification: '거버넌스', code: '1.1.6', indicators: '이사회 평균 임기', link: '', Note: '' },            
            { classification: '거버넌스', code: '1.1.7', indicators: '이사회 산업 경험 및 전문성', link: '', Note: '' },            
            { classification: '거버넌스', code: '1.1.8', indicators: '임원 보수 - 성공지표', link: '', Note: '' },            
            { classification: '거버넌스', code: '1.1.9', indicators: '임원 보수 - 장기 성과 연동', link: '', Note: '' },            
            { classification: '거버넌스', code: '1.1.10', indicators: '임원 주식소유', link: '', Note: '' },            
            { classification: '거버넌스', code: '1.1.11', indicators: '임원 주식소유 요건', link: '', Note: '' },            
            { classification: '거버넌스', code: '1.1.12', indicators: '정부 주식소유', link: '', Note: '' },            
            { classification: '거버넌스', code: '1.1.13', indicators: '설립가 주식소유', link: '', Note: '' },            
            { classification: '거버넌스', code: '1.1.14', indicators: '차등의결권', link: '', Note: '' },            
            { classification: '거버넌스', code: '1.1.15', indicators: 'CEO 및 임직원간 평균-중앙 보수 격차', link: '', Note: '' },            
            { classification: '중요성', code: '1.2.2', indicators: '중요 주제 공시', link: '', Note: '' },            
            { classification: '리스크 관리', code: '1.3.3', indicators: '신흥 위험(Emerging Risk)', link: '', Note: '' },            
            { classification: '윤리경영', code: '1.4.1', indicators: '윤리 강령', link: '', Note: '' },            
            { classification: '윤리경영', code: '1.4.3', indicators: '반부패', link: '', Note: '' },            
            { classification: '윤리경영', code: '1.4.7', indicators: '윤리강령 위반', link: '', Note: '' },            
            { classification: '고객관계관리', code: '1.5.2', indicators: '고객 만족 관리', link: '', Note: '' },            
            { classification: '정책 영향', code: '1.6.1', indicators: '정책 공헌 및 지출', link: '', Note: '' },            
            { classification: '정책 영향', code: '1.6.2', indicators: '상위 정책 공헌 및 지출 내역', link: '', Note: '' },            
            { classification: '공급망 관리', code: '1.7.1', indicators: '공급망 정책', link: '', Note: '' },            
            { classification: '공급망 관리', code: '1.7.6', indicators: '투명성 및 보고', link: '', Note: '' },            
            { classification: '세제정책', code: '1.9.1', indicators: '세제 정책', link: '', Note: '' },            
            { classification: '세제정책', code: '1.9.2', indicators: '세제 보고', link: '', Note: '' },            
            { classification: '세제정책', code: '1.9.3', indicators: '유효세율', link: '', Note: '' },            
            { classification: '정보 보안', code: '1.10.1', indicators: '정보 보안 거버넌스', link: '', Note: '' },            
            { classification: '프라이버시 보호', code: '1.12.1', indicators: '프라이버시 정책 및 절차', link: '', Note: '' },            
            { classification: '프라이버시 보호', code: '1.12.2', indicators: '고객 정보', link: '', Note: '' },            
            { classification: '프라이버시 보호', code: '1.12.3', indicators: '프라이버시 보호 위반', link: '', Note: '' },            
            { classification: '환경 보고', code: '2.1.1', indicators: '환경 보고 - 범위', link: '', Note: '' },            
            { classification: '환경 보고', code: '2.1.2', indicators: '환경 보고 - 검증', link: '', Note: '' },            
            { classification: '환경관리시스템', code: '2.2.1', indicators: '환경 정책 및 가이드라인', link: '', Note: '' },            
            { classification: '환경관리시스템', code: '2.2.3', indicators: '환경 투자 ROI', link: '', Note: '' },            
            { classification: '환경관리시스템', code: '2.2.4', indicators: '환경 법규 위반', link: '', Note: '' },            
            { classification: '운영환경효율성', code: '2.3.1', indicators: '직접 온실가스 배출(Scope 1)', link: '', Note: '' },            
            { classification: '운영환경효율성', code: '2.3.2', indicators: '간접 온실가스 배출(Scope 2)', link: '', Note: '' },            
            { classification: '운영환경효율성', code: '2.3.3', indicators: '에너지 사용', link: '', Note: '' },            
            { classification: '운영환경효율성', code: '2.3.4', indicators: '물 사용', link: '', Note: '' },            
            { classification: '운영환경효율성', code: '2.3.5', indicators: '폐기물', link: '', Note: '' },            
            { classification: '사회보고', code: '3.1.1', indicators: '사회 보고 - 범위', link: '', Note: '' },            
            { classification: '사회보고', code: '3.1.2', indicators: '사회 보고 - 검증', link: '', Note: '' },            
            { classification: '노동지표', code: '3.2.1', indicators: '임직원 다양성', link: '', Note: '' },            
            { classification: '노동지표', code: '3.2.2', indicators: '동등 보수', link: '', Note: '' },            
            { classification: '노동지표', code: '3.2.3', indicators: '결사의 자유', link: '', Note: '' },            
            { classification: '인권', code: '3.3.1', indicators: '인권 정책', link: '', Note: '' },            
            { classification: '인권', code: '3.3.4', indicators: '인권 공시', link: '', Note: '' },            
            { classification: '인재 확보 및 유지', code: '3.5.4', indicators: '임직원 참여도 추이', link: '', Note: '' },            
            { classification: '사회공헌', code: '3.6.1', indicators: '사회공헌 전략', link: '', Note: '' },            
            { classification: '사회공헌', code: '3.6.2', indicators: '사회공헌 활동 내역', link: '', Note: '' },            
            { classification: '사회공헌', code: '3.6.3', indicators: '사회공헌 투입', link: '', Note: '' },            
            { classification: '안전 및 보건', code: '3.7.1', indicators: '건강 및 웰빙', link: '', Note: '' },            
            { classification: '안전 및 보건', code: '3.7.3', indicators: '근로손실재해율(LTIFR) - 임직원', link: '', Note: '' },            
            { classification: '안전 및 보건', code: '3.7.4', indicators: '근로손실재해율(LTIFR) - 계약자', link: '', Note: '' },            
            { classification: '안전 및 보건', code: '3.7.5', indicators: '업무상발병률(OIFR) - 임직원', link: '', Note: '' },                   
        ],
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
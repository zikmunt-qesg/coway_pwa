<template>
  <div>
    <b-container>
    <search-form></search-form>

    <b-table-simple responsive>
      <b-thead>
        <b-tr>
          <b-td>구분</b-td>
          <b-td>GRI 번호</b-td>
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

    <b-table-simple responsive>
      <b-thead>
        <b-tr>
          <b-td>구분</b-td>
          <b-td>GRI 번호</b-td>
          <b-td>지표명</b-td>
          <b-td>Link</b-td>
          <b-td>비고</b-td>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(row_item, index) in gri_table_200" :key="row_item.id">
          <template
            v-if="index-1 < 0 ? true: row_item.classification != gri_table_200[index-1].classification"
          >
            <b-td :rowspan="getSameLength(gri_table_200, index)">{{ row_item.classification }}</b-td>
          </template>
          <b-td :id="`gri_${row_item.code}`">{{ row_item.code }}</b-td>
          <b-td>{{ row_item.indicators }}</b-td>
          <b-td>{{ row_item.link }}</b-td>
          <b-td>{{ row_item.Note }}</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>

    <b-table-simple responsive>
      <b-thead>
        <b-tr>
          <b-td>구분</b-td>
          <b-td>GRI 번호</b-td>
          <b-td>지표명</b-td>
          <b-td>Link</b-td>
          <b-td>비고</b-td>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(row_item, index) in gri_table_300" :key="row_item.id">
          <template
            v-if="index-1 < 0 ? true: row_item.classification != gri_table_300[index-1].classification"
          >
            <b-td :rowspan="getSameLength(gri_table_300, index)">{{ row_item.classification }}</b-td>
          </template>
          <b-td :id="`gri_${row_item.code}`">{{ row_item.code }}</b-td>
          <b-td>{{ row_item.indicators }}</b-td>
          <b-td>{{ row_item.link }}</b-td>
          <b-td>{{ row_item.Note }}</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>

    <b-table-simple responsive>
      <b-thead>
        <b-tr>
          <b-td>구분</b-td>
          <b-td>GRI 번호</b-td>
          <b-td>지표명</b-td>
          <b-td>Link</b-td>
          <b-td>비고</b-td>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(row_item, index) in gri_table_400" :key="row_item.id">
          <template
            v-if="index-1 < 0 ? true: row_item.classification != gri_table_400[index-1].classification"
          >
            <b-td :rowspan="getSameLength(gri_table_400, index)">{{ row_item.classification }}</b-td>
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
      gri_table_100: [
        {
          classification: '조직프로필',
          code: '102-1',
          indicators: '조직명칭',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-2',
          indicators: '활동 및 대표 브랜드, 제품 및 서비스',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-3',
          indicators: '본사의 위치',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-4',
          indicators: '사업 지역',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-5',
          indicators: '소유 구조 및 법적 형태',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-6',
          indicators: '시장 영역',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-7',
          indicators: '조직의 규모',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-8',
          indicators: '임직원 및 근로자에 대한 정보',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-9',
          indicators: '조직의 공급망',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-10',
          indicators: '조직 및 공급망의 중대한 변화',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-11',
          indicators: '사전예방 원칙 및 접근',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-12',
          indicators: '외부이니셔티브',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-13',
          indicators: '협회 멤버십',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-14',
          indicators: '최고 의사 결정권자 성명서',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-15',
          indicators: '주요 영향, 위기 그리고 기회',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-16',
          indicators: '가치, 원칙, 표준, 행동강령',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-17',
          indicators: '윤리 관련 안내 및 고충처리 메커니즘',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-18',
          indicators: '지배구조',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-22',
          indicators: '최고의사결정기구와 산하 위원회의 구성',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-23',
          indicators: '최고의사결정기구의 의장',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-24',
          indicators: '최고의사결정기구 추천 및 선정',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-25',
          indicators: '이해관계 상충',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-27',
          indicators: '최고의사결정기구의 집단지식',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-35',
          indicators: '보상정책',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-40',
          indicators: '조직과 관련 있는 이해관계자 집단 리스트',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-41',
          indicators: '단체협약',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-42',
          indicators: '이해관계자 파악 및 선정',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-43',
          indicators: '이해관계자 참여 방식',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-44',
          indicators: '이해관계자 참여를 통해 제기된 핵심 주제와 관심사',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-45',
          indicators:
            '조직의 연결 재무제표에 포함된 entities(자회사 및 합작회사)의 리스트',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-46',
          indicators: '보고 내용 및 토픽의 경계 정의',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-47',
          indicators: 'Material Topic 리스트',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-48',
          indicators: '정보의 재기술',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-49',
          indicators: '보고의 변화',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-50',
          indicators: '보고 기간',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-51',
          indicators: '가장 최근 보고일자',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-52',
          indicators: '보고 주기',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-53',
          indicators: '보고서에 대한 문의처',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-54',
          indicators: 'GRI Contents에 따른 보고 방식',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-55',
          indicators: 'GRI Index',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '102-56',
          indicators: '외부검증',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '103-1',
          indicators: 'Material Topic과 그 경계에 대한 설명',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '103-2',
          indicators: '경영 접근법과 그 구성 요소',
          link: '',
          Note: ''
        },
        {
          classification: '조직프로필',
          code: '103-3',
          indicators: '경영 방식 평가',
          link: '',
          Note: ''
        }
      ],
      gri_table_200: [
        {
          classification: '경제성과',
          code: 'MA',
          indicators: '경제성과 경영접근방식',
          link: '',
          Note: ''
        },
        {
          classification: '경제성과',
          code: '201-1',
          indicators: '직접적인 경제적 가치의 창출과 배분',
          link: '',
          Note: ''
        },
        {
          classification: '경제성과',
          code: '201-2',
          indicators: '기후변화의 재무적 영향과 사업활동에 대한 위험과 기회',
          link: '',
          Note: ''
        },
        {
          classification: '경제성과',
          code: '201-3',
          indicators: '조직의 확정급여형 연금제도 채무 충당',
          link: '',
          Note: ''
        },
        {
          classification: '경제성과',
          code: '201-4',
          indicators: '정부 지원 보조금 수혜 실적',
          link: '',
          Note: ''
        },
        {
          classification: '시장지위',
          code: '202-1',
          indicators: '사업장의 현지 법정최저임금 대비 신입사원 임금 비율',
          link: '',
          Note: ''
        },
        {
          classification: '시장지위',
          code: '202-2',
          indicators: '주요 사업장의 현지 출신 고위 관리자 비율',
          link: '',
          Note: ''
        },
        {
          classification: '간접경제효과',
          code: '203-1',
          indicators: '공익을 위한 인프라 투자 및 서비스 지원 활동',
          link: '',
          Note: ''
        },
        {
          classification: '간접경제효과',
          code: '203-2',
          indicators: '중요한 간접적 경제 파급효과 및 영향',
          link: '',
          Note: ''
        },
        {
          classification: '조달관행',
          code: '204-1',
          indicators: '주요한 사업 지역에서의 현지 구매 비율',
          link: '',
          Note: ''
        },
        {
          classification: '반부패',
          code: '205-1',
          indicators: '사업장 부패 위험 평가',
          link: '',
          Note: ''
        },
        {
          classification: '반부패',
          code: '205-2',
          indicators: '반부패 정책 및 절차에 관한 공지와 훈련',
          link: '',
          Note: ''
        },
        {
          classification: '반부패',
          code: '205-3',
          indicators: '확인된 부패 사례와 이에 대한 조치',
          link: '',
          Note: ''
        },
        {
          classification: '경쟁저해행위',
          code: '206-1',
          indicators:
            '경쟁저해행위, 독과점 등 불공정한 거래행위에 대한 법적 조치',
          link: '',
          Note: ''
        }
      ],
      gri_table_300: [
        {
          classification: '원재료',
          code: '301-1',
          indicators: '사용된 원료의 중량과 부피',
          link: '',
          Note: ''
        },
        {
          classification: '원재료',
          code: '301-2',
          indicators: '사용된 원료 중 재생 원료의 투입',
          link: '',
          Note: ''
        },
        {
          classification: '원재료',
          code: '301-3',
          indicators: '제품 및 포장재 재생 원료',
          link: '',
          Note: ''
        },
        {
          classification: '에너지',
          code: 'MA',
          indicators: '에너지 경영 접근',
          link: '',
          Note: ''
        },
        {
          classification: '에너지',
          code: '302-1',
          indicators: '조직 내부 에너지 소비',
          link: '',
          Note: ''
        },
        {
          classification: '에너지',
          code: '302-2',
          indicators: '조직 외부 에너지 소비',
          link: '',
          Note: ''
        },
        {
          classification: '에너지',
          code: '302-3',
          indicators: '에너지 집약도',
          link: '',
          Note: ''
        },
        {
          classification: '에너지',
          code: '302-4',
          indicators: '에너지 소비 절감',
          link: '',
          Note: ''
        },
        {
          classification: '용수',
          code: '303-1',
          indicators: '공급원별 취수량',
          link: '',
          Note: ''
        },
        {
          classification: '용수',
          code: '303-2',
          indicators: '취수로부터 큰 영향을 받는 용수 공급원',
          link: '',
          Note: ''
        },
        {
          classification: '용수',
          code: '303-3',
          indicators: '용수 재활용 및 재사용',
          link: '',
          Note: ''
        },
        {
          classification: '배출',
          code: '305-1',
          indicators: '직접 온실가스 배출량(Scope 1)',
          link: '',
          Note: ''
        },
        {
          classification: '배출',
          code: '305-2',
          indicators: '간접 온실가스 배출량(Scope 2)',
          link: '',
          Note: ''
        },
        {
          classification: '배출',
          code: '305-3',
          indicators: '기타 간접 온실가스 배출량(Scope 3)',
          link: '',
          Note: ''
        },
        {
          classification: '배출',
          code: '305-4',
          indicators: '온실가스 배출 집약도',
          link: '',
          Note: ''
        },
        {
          classification: '배출',
          code: '305-5',
          indicators: '온실가스 배출 감축',
          link: '',
          Note: ''
        },
        {
          classification: '배출',
          code: '305-6',
          indicators: '오존층 파괴 물질의 배출',
          link: '',
          Note: ''
        },
        {
          classification: '배출',
          code: '305-7',
          indicators: '질소산화물, 황산화물 그리고 다른 주요 대기 배출물',
          link: '',
          Note: ''
        },
        {
          classification: '폐수 및 폐기물',
          code: 'MA',
          indicators: '폐수 및 폐기물 경영 접근',
          link: '',
          Note: ''
        },
        {
          classification: '폐수 및 폐기물',
          code: '306-2',
          indicators: '유형과 처리방법에 따른 폐기물',
          link: '',
          Note: ''
        },
        {
          classification: '폐수 및 폐기물',
          code: '306-3',
          indicators: '중대한 유출',
          link: '',
          Note: ''
        },
        {
          classification: '폐수 및 폐기물',
          code: '306-4',
          indicators: '유해폐기물 운송',
          link: '',
          Note: ''
        },
        {
          classification: '폐수 및 폐기물',
          code: '306-1',
          indicators: '수질 및 목적지에 따른 폐수 배출',
          link: '',
          Note: ''
        },
        {
          classification: '폐수 및 폐기물',
          code: '301-5',
          indicators: '폐수 배출로 인해 영향을 받은 수역',
          link: '',
          Note: ''
        },
        {
          classification: '환경고충처리제도',
          code: '307-1',
          indicators: '환경법규 위반',
          link: '',
          Note: ''
        },
        {
          classification: '공급업체 환경평가',
          code: '308-1',
          indicators: '환경 기준 심사를 거친 신규 공급업체 비율',
          link: '',
          Note: ''
        },
        {
          classification: '공급업체 환경평가',
          code: '308-2',
          indicators:
            '공급망 내 실질적이거나 잠재적으로 중대한 부정적 환경영향 및 이에 대한 조치',
          link: '',
          Note: ''
        }
      ],
      gri_table_400: [
        {
          classification: '고용',
          code: '401-1',
          indicators: '신규채용과 이직',
          link: '',
          Note: ''
        },
        {
          classification: '고용',
          code: '401-2',
          indicators:
            '비정규 직원 혹은 파트타임 직원에게는 제공되지 않는 정규직 직원 대상의 보상',
          link: '',
          Note: ''
        },
        {
          classification: '고용',
          code: '401-3',
          indicators: '육아휴직',
          link: '',
          Note: ''
        },
        {
          classification: '노사관계',
          code: '402-1',
          indicators: '운영상의 변화와 관련한 최소 공지기간',
          link: '',
          Note: ''
        },
        {
          classification: '산업안전보건',
          code: '403-1',
          indicators: '노사공동 보건안전위원회가 대표하는 전체 근로자의 비율',
          link: '',
          Note: ''
        },
        {
          classification: '산업안전보건',
          code: '403-3',
          indicators: '업무상 질병 발생률 또는 발생 위험이 높은 근로자',
          link: '',
          Note: ''
        },
        {
          classification: '산업안전보건',
          code: '403-4',
          indicators: '노동조합과의 정식 협약 대상인 안전보건 사항',
          link: '',
          Note: ''
        },
        {
          classification: '훈련 및 교육',
          code: '404-1',
          indicators: '임직원 1인당 평균 교육시간',
          link: '',
          Note: ''
        },
        {
          classification: '훈련 및 교육',
          code: '404-2',
          indicators: '임직원 역량 강화 및 전환 지원을 위한 프로그램',
          link: '',
          Note: ''
        },
        {
          classification: '훈련 및 교육',
          code: '404-3',
          indicators: '정기적 성과 및 경력 개발 리뷰를 받은 임직원 비율',
          link: '',
          Note: ''
        },
        {
          classification: '다양성과 기회균등',
          code: '405-1',
          indicators: '거버넌스 기구 및 임직원 다양성',
          link: '',
          Note: ''
        },
        {
          classification: '다양성과 기회균등',
          code: '405-2',
          indicators: '남성 대비 여성의 기본급 및 보상 비율',
          link: '',
          Note: ''
        },
        {
          classification: '차별금지',
          code: '406-1',
          indicators: '차별 사건 및 이에 대한 시정조치',
          link: '',
          Note: ''
        },
        {
          classification: '결사 및 단체교섭의 자유',
          code: '407-1',
          indicators:
            '근로자의 결사 및 단체 교섭의 자유가 심각하게 침해될 소지가 있다고 판단된 사업장 및 협력회사',
          link: '',
          Note: ''
        },
        {
          classification: '아동노동',
          code: '408-1',
          indicators: '아동 노동 발생 위험이 높은 사업장 및 협력회사',
          link: '',
          Note: ''
        },
        {
          classification: '강제노동',
          code: '409-1',
          indicators: '강제 노동 발생 위험이 높은 사업장 및 협력회사',
          link: '',
          Note: ''
        },
        {
          classification: '보안관행',
          code: '410-1',
          indicators:
            '사업과 관련된 인권 정책 및 절차에 관한 훈련을 받은 보안요원의 비율',
          link: '',
          Note: ''
        },
        {
          classification: '원주민 권리',
          code: '411-1',
          indicators: '원주민의 권리 침해사고 건수와 취해진 조치',
          link: '',
          Note: ''
        },
        {
          classification: '인권평가',
          code: '412-1',
          indicators: '인권 영향평가 혹은 인권 검토 대상 사업장',
          link: '',
          Note: ''
        },
        {
          classification: '인권평가',
          code: '412-2',
          indicators: '사업과 관련된 인권 정책 및 절차에 관한 임직원 교육',
          link: '',
          Note: ''
        },
        {
          classification: '인권평가',
          code: '412-3',
          indicators:
            '인권 조항 또는 인권 심사 시행을 포함한 주요 투자 협약과 계약',
          link: '',
          Note: ''
        },
        {
          classification: '지역사회',
          code: '413-1',
          indicators: '지역사회 참여, 영향 평가 그리고 발전프로그램 운영 비율',
          link: '',
          Note: ''
        },
        {
          classification: '지역사회',
          code: '413-2',
          indicators:
            '지역사회에 중대한 실질적/잠재적인 부정적 영향이 존재하는 사업장',
          link: '',
          Note: ''
        },
        {
          classification: '공급망 관리',
          code: '414-1',
          indicators: '사회적 영향평가를 통해 스크리닝된 신규 협력회사',
          link: '',
          Note: ''
        },
        {
          classification: '공급망 관리',
          code: '414-2',
          indicators:
            '공급망 내 주요한 부정적인 사회 영향과 이에 대한 시행 조치',
          link: '',
          Note: ''
        },
        {
          classification: '공공정책',
          code: '415-1',
          indicators: '정치적 기부',
          link: '',
          Note: ''
        },
        {
          classification: '고객 안전보건',
          code: 'MA',
          indicators: '고객 안전보건 경영 접근',
          link: '',
          Note: ''
        },
        {
          classification: '고객 안전보건',
          code: '416-1',
          indicators: '제품 및 서비스군의 안전보건 영향 평가',
          link: '',
          Note: ''
        },
        {
          classification: '고객 안전보건',
          code: '416-2',
          indicators: '제품 및 서비스의 안전보건 영향에 관한 규정 위반 사건',
          link: '',
          Note: ''
        },
        {
          classification: '마케팅 및 라벨링',
          code: '417-1',
          indicators: '제품 및 서비스 정보와 라벨링',
          link: '',
          Note: ''
        },
        {
          classification: '마케팅 및 라벨링',
          code: '417-2',
          indicators:
            '제품 및 서비스 정보와 라벨링에 관한 법률규정 및 자율규정을 위반한 사건',
          link: '',
          Note: ''
        },
        {
          classification: '마케팅 및 라벨링',
          code: '417-3',
          indicators: '마케팅 커뮤니케이션과 관련된 규정 위반',
          link: '',
          Note: ''
        },
        {
          classification: '고객정보보호',
          code: '418-1',
          indicators:
            '고객 개인정보보호 위반 및 고객정보 분실 사실이 입증된 불만 건수',
          link: '',
          Note: ''
        },
        {
          classification: '컴플라이언스',
          code: '419-1',
          indicators: '사회적, 경제적 영역의 법률 및 규제 위반',
          link: '',
          Note: ''
        }
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
}
</script>
-
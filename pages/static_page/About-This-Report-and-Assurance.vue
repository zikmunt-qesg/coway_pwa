<template>
<div class="position-relative page-top-bg-news min-vh-100">
    <div class="w-100 bg-white bg-white-cover-news position-absolute"></div>

    <b-row no-gutters class="py-5">
        <b-col class="py-3 mt-md-4 mt-lg-5 text-center"><h2 class="fw-400">ABOUT THIS REPORT &amp; ASSURANCE</h2></b-col>
    </b-row>
   
    <b-container>
        <b-row>
            <b-col class="col-0 col-lg-1"></b-col>
            <b-col class="col-12 col-lg-10 px-0">
                <b-nav tabs class="">
                    <b-nav-item :active="show_page=='About-This-Report'" @click.stop.prevent="showTab('About-This-Report')" class="f-110 fw-400 border-0"> 이 보고서에 대하여 </b-nav-item>
                    <b-nav-item :active="show_page=='Independent-Assurance-Report'" @click.stop.prevent="showTab('Independent-Assurance-Report')" class="f-110 fw-400 border-0"> 제3자 검증 보고서 </b-nav-item>
                    <b-nav-item :active="show_page=='GHG-Assurance-Report'" @click.stop.prevent="showTab('GHG-Assurance-Report')" class="f-110 fw-400 border-0"> 온실가스 검증 보고서 </b-nav-item>
                </b-nav>
            </b-col>
            <b-col class="col-0 col-lg-1"></b-col>
        </b-row>
        <b-row>
            <b-col class="col-0 col-lg-1"></b-col>
            <b-col class="col-12 col-lg-10 px-0">
                <b-card v-if="show_page=='About-This-Report'" class="border-0 px-4 py-5 fw-400">
                    <p>본 보고서는 코웨이의 열 다섯번 째 지속가능경영 보고서입니다. 코웨이는 2016년부터 매년 온라인으로 지속가능경영보고서를 발간하고 있습니다. 회사의 위험과 기회에 대하여 이해관계자의 의견을 심도 있게 수렴하고, 사회적 환경적 영향을 고려한 중요성 평가 과정을 거쳐 보고 콘텐츠를 결정하였습니다. 본 보고서는 글로벌리포팅이니셔티브(GRI, Global Reporting Initiatives)의 GRI Standard를 준수하여 작성하였습니다.  
                    <p>2019년 보고서는 인쇄물(책) 중심의 구조를 탈피하여 온라인 보고를 중심으로 기획된 첫 번째 보고서입니다. 이해관계자 여러분이 필요로 하는 정보에 손쉽게 접근할 수 있도록 네비게이션(목차)와 사이트 맵 구조를 전반적으로 재점검하고, 필요한 정보를 빠르게 확인할 수 있도록 검색 기능을 도입하였습니다. 사이트는 국문과 영문으로 이용할 수 있으며, 상단의 메인 메뉴 버튼을 통해 모든 콘텐츠를 확인할 수 있습니다. 사이트는 데스크탑 PC와 모바일에 모두 최적화되어 있으며, 반응협 레이아웃(Responsive Layout)<sup>*</sup> 및 프로그레시프웹앱(Progressive Web App)<sup>**</sup>으로 구현됩니다.</p> 
                    <p>본 보고서는 제3자 검증 과정을 거쳐 2020년 6월 30일에 게시되었습니다.</p> 
                    <p class="f-80 ml-1 mb-5">
                        *반응형 레이아웃: 디스플레이의 종류에 따라 화면의 크기를 자동으로 최적화하는 웹사이트
                        **프로그레시브웹앱: 한번의 다운로드 만으로 모바일 앱처럼 인터넷 연결이 없는 오프라인에서도 웹사이트의 내용을 확인 가능
                    </p>

                    <h7 class="parang7 f-120 fw-500 bg-white">보고 범위</h7>
                    <p class="mb-5">서울 사무소, 연구소, 생산본부를 중심으로 작성하였으며, 이 보고 범위는 매출액 기준 90%이상에 해당합니다. 일부 성과는 글로벌 사업 현황을 포함하였습니다. 재무데이터는 연결실적 기준입니다.
                    </p>

                    <h7 class="parang7 f-120 fw-500 bg-white">보고 기간</h7>
                    <p class="mb-5">2019년 1월 1일~2019년 12월 31일 동안의 지속가능경영 성과를 보고하고 있으며, 정량성과는 이해관계자가 변화 추이를 확인할 수 있도록 3개년 실적을 함께 공개하였습니다. 일부 주요 현안 또는 유의미한 활동과 성과에 대해서는 2020년 내용도 함께 보고하고 있습니다. 
                    </p>

                    <h7 class="parang7 f-120 fw-500 bg-white">보고 기준</h7>
                    <p class="mb-5">글로벌리포팅이니셔티브(GRI, Global Reporting Initiatives)의 지속가능경영 보고 표준(GRI Standard)의 핵심(Core Option)을 충족하고 있습니다. 또한 국제통합보고위원회(IIRC, International Integrated Reporting Council)의 국제통합보고프레임워크, 미국 지속가능성회계기준위원회(SASB, Sustainability Accounting Standard Board)의 지속가능성회계표준을 함께 활용하였습니다.  
                    </p>

                    <h7 class="parang7 f-120 fw-500 bg-white">독립 검증</h7>
                    <p class="mb-5">본 보고서에 담긴 재무정보는 독립 감사법인의 회계감사를 통해 작성되었으며, 비재무 정보는 보고 내용의 정확성과 신뢰성을 높이기 위하여 독립적 전문기관인 QESG(퀀티파이드이에스지)로부터 검증을 받았습니다. 
                    </p>

                    <h7 class="parang7 f-120 fw-500 bg-white">문의처</h7>
                    <b-table-simple responsive hover class="txt-table f-95">
                            <b-thead><b-tr>
                                <b-td class="text-left"></b-td><b-td></b-td>
                            </b-tr></b-thead>
                            <b-tbody><b-tr>
                                <b-td>주소</b-td>
                                <b-td>서울특별시 중구 서소문로 88 중앙일보빌딩 11층 ~ 17층</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>담당</b-td>
                                <b-td>CSV팀</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>이메일</b-td>
                                <b-td>sustainability@coway.co.kr</b-td>
                            </b-tr></b-tbody>
                    </b-table-simple> 
                </b-card>
            </b-col>
            <b-col class="col-0 col-lg-1"></b-col>
        </b-row>       
        <hr class="space-p75">
    </b-container>
</div>
</template>

<script>
import * as ih from '@/components/util'
import SideNavigation from '@/components/navigation/SideNavigation'
import h6Ancor from '@/components/navigation/h6Ancor'
import h4Ancor from '@/components/navigation/h4Anchor'
import LocaleMixin from '@/components/locale'

export default {
    layout: 'StaticPage',
    mixins: [LocaleMixin],
    async asyncData({ query, store }) {
        let return_data = {}
        if (query.p != null) {
            return_data.show_page = query.p
        }
        else{
            return_data.show_page = 'About-This-Report'
        }
        if(query.l && query.l == 'ENG'){
            store.commit('setLang', 'ENG')
        }
        return return_data        
    },
    data(){
        return {
            activated: [],
            sub_titles: [],
        }
    },
    computed:{
        is_ENG(){
            return this.$store.state.is_ENG
        },
        title(){
            return this.is_ENG? 'About This Report and Assurance' : '이 보고서에 대하여'
        },
    },
    methods:{
        safeHash(target){
            return ih.safeHash(target)
        },
        showTab(target){
            this.show_page = target
        }
    },
    components:{
        SideNavigation,
        h6Ancor,
        h4Ancor
    },
    
}
</script>
<style scoped lang="scss">
.nav-tabs{
    border:0;
}
.nav-link.active{
    border-color: white;
}
</style>
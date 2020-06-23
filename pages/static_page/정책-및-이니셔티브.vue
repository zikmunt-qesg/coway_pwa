<template>
<div class="position-relative page-top-bg-news min-vh-100">
    <div class="w-100 bg-white bg-white-cover-news position-absolute"></div>

     <b-row no-gutters class="py-5">
        <b-col class="py-3 mt-md-4 mt-lg-5 text-center"><h2 class="fw-400">POLICIES &amp; INITIATIVES</h2></b-col>
    </b-row>
    <b-container>
        <b-row>
            <b-col class="col-0 col-lg-1"></b-col>
            <b-col class="col-12 col-lg-10 px-0">
                <b-nav tabs class="">
                    <b-nav-item :active="show_page=='Policies'" @click.stop.prevent="showTab('Policies')" class="f-110 fw-400"> 지속가능성 정책 </b-nav-item>
                    <b-nav-item :active="show_page=='Initiatives'" @click.stop.prevent="showTab('Initiatives')" class="f-110 fw-400"> 참여 이니셔티브 </b-nav-item>
                </b-nav>
            </b-col>
            <b-col class="col-0 col-lg-1"></b-col>
        </b-row>
        <b-row>
            <b-col class="col-0 col-lg-1"></b-col>
            <b-col class="col-12 col-lg-10 bg-white px-md-4 px-lg-5 py-5">              
                <div v-if="show_page=='Policies'">
                    <b-card header="지속가능성 정책">
                        <b-card-body class="p-0">
                            <a href="/documents/coway_trust_guideline_kor.pdf" download><li class="py-2">코웨이 트러스트 가이드라인(국문)</li></a>
                            <a href="/documents/coway_trust_guideline_eng.pdf" download><li class="py-2">코웨이 트러스트 가이드라인(영문)</li></a>
                        </b-card-body>
                    </b-card>       
                    <hr class="mb-2">

                    <b-card header="윤리경영">
                        <b-card-body class="p-0">
                            <a href="/documents/code_of_conduct.pdf" download><li class="py-2">윤리헌장(국문)</li></a>
                            <a href="/documents/code_of_conduct_guideline.pdf" download><li class="py-2">윤리규정(국문)</li></a>
                            <a href="/documents/code_of_conduct_instruction.pdf" download><li class="py-2">윤리실천지침(국문)</li></a>
                        </b-card-body>
                    </b-card>  
                    <hr class="mb-2">

                    <b-card header="협력회사 CSR">
                        <b-card-body class="p-0">
                            <a href="/documents/supplier_code_of_conduct_kor.pdf" download><li class="py-2">협력사 행동규범(국문)</li></a>
                            <a href="/documents/supplier_code_of_conduct_eng.pdf" download><li class="py-2">협력사 행동규범(영문)</li></a>
                        </b-card-body>
                    </b-card>
                    <hr class="mb-2">

                    <b-card header="환경">
                        <b-card-body class="p-0">
                            <a href="/documents/carbon_report_2018.pdf" download><li class="py-2">Carbon Report 2018(국문)</li></a>
                        </b-card-body>
                    </b-card>  
                    <hr class="mb-2">

                    <b-card header="지배구조">
                        <b-card-body class="p-0">
                            <a href="/documents/governance_report_2019.pdf" download><li class="py-2">거버넌스 리포트 2019(국문)</li></a>
                        </b-card-body>
                    </b-card>
                    <hr class="mb-2">
                </div>
                <div v-if="show_page=='Initiatives'" class="font-noto">
                    <div class="d-flex mb-4 position-relative overflow-hidden"> <h6 class="green7 f-130 fw-500 bg-white pr-5" style="z-index:10">글로벌 이니셔티브 참여</h6><div class="horizontal-line-2 green-line position-absolute" style="z-index:8"></div></div>
                    <div class="d-flex justify-content-around align-items-center px-md-3 px-lg-5 mb-5">
                        <div class="px-3"><b-img src="/images/148_1@3x.jpg" fluid></b-img></div>
                        <div class="px-3"><b-img src="/images/148_2@3x.jpg" fluid></b-img></div>
                        <div class="px-3"><b-img src="/images/148_3@3x.jpg" fluid></b-img></div>
                        <div class="px-3"><b-img src="/images/148_4@3x.jpg" fluid></b-img></div>
                        <div class="px-3 w-75"><b-img src="/images/148_5@3x.jpg" fluid></b-img></div>
                        <div class="px-3"><b-img src="/images/148_6@3x.jpg" fluid></b-img></div>
                    </div>
                    <h7 class="mb-2"> UNGC </h7>
                    <p class="mb-45">코웨이는 2006년 6월 UNGC(United Nations Global Compact: 유엔 글로벌 컴팩트)에 가입하여 인권, 노동, 환경, 그리고 반부패에 관한 10가지 원칙을 준수하고 이를 실천함으로써 성장의 추구와 함께 사회적인 책임을 다하는 기업 시민으로서의 역할을 다하고 있습니다. 본 지속가능경영보고서는 코웨이의 현재와 미래에대한 스스로의 평가이자 다짐입니다. 
                    </p>
                    <h7 class="mb-2"> CDP(탄소정보공개프로젝트) </h7>
                    <p class="mb-45"> 코웨이는 비영리단체인 탄소정보공개프로젝트(CDP)’ 한국위원회로부터 기후변화 대응의 우수함을 인정받아 선택소비재 부문‘탄소경영 섹터 아너스(Honors)’에 10년 연속 우수기업으로 선정되었습니다.
                    </p>
                    <h7 class="mb-2"> SDGs(Sustainable Development Goals) </h7>
                    <p class="mb-45"> 코웨이는 2016년 UN 회원국간 공동 성명에 의해 수립된 국제사회가 달성해야 할 지속가능한 발전목표(SDGs, Sustainable Development Goals)에 따라 SDGs달성을 위한 솔루션을 개발하고 이행함으로써 새로운 성장기회를 발견하고 지속가능한 성장을 추진합니다.
                    </p>
                    <h7 class="mb-2"> 유엔기후변화협약 당사국총회(COP21) 글로벌 기후변화 협약 지지 </h7>
                    <p class="mb-45"> 코웨이는 2015년 12월 세계 195개국이 프랑스 파리 에서 타결한 유엔기후변화협약 당사국총회(COP21) 의 ‘글로벌 기후변화협약’에 지지선언을 하고 자발적 탄소 감축계획을 수립하고 있습니다. 
                    </p>
                    <h7 class="mb-2"> C4C(Caring for Climate) </h7>
                    <p> 코웨이는 2010년 C4C(Caring for Climate)와 수자원관리책무(CEO Water Mandate)에 가입한 이후 지속적으로 기후변화관련 활동을 추진하고 있습니다.
                    </p>
                </div>
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

export default {
    layout: 'StaticPage',
    async asyncData({ query }) {
        if (query.p != null) {
            return { show_page: query.p }
        }
        else{
            return { show_page: 'Policies'}
        }
    },
    data(){
        return {
            title: '정책 및 이니셔티브',
            activated: [],
            sub_titles: [],
        }
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
    }
}
</script>
<style scoped>

</style>
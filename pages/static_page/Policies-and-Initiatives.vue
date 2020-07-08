<template>
<div class="position-relative page-top-bg-news min-vh-100">
    <div class="w-100 bg-white bg-white-cover-news position-absolute"></div>

     <b-row no-gutters class="py-5">
        <b-col class="py-3 mt-md-4 mt-lg-5 text-center"><h2 class="fw-400">POLICIES &amp; INITIATIVES</h2></b-col>
    </b-row>
    <b-container v-if="this.$store.state.is_ENG==false">
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
                <div v-if="show_page=='Policies'" class="px-md-2 px-lg-4 atr-content">
                    <div class="d-flex mb-5 position-relative overflow-hidden"> <h4 class="gray5 fw-500 bg-white pr-4" style="z-index:10">정책 보기 및 다운로드</h4><div class="horizontal-line-2 position-absolute" style="z-index:8"></div></div>

                            <h7 class="f-110 fw-500">지속가능성 정책</h7>    
                            <b-button-group class="w-100">
                                <b-button variant="light" href="/documents/Coway_coway_trust_guideline_kor.pdf" class="see-policy" target="_blank">코웨이 트러스트 가이드라인 (국문) </b-button>
                                <b-button variant="light" href="/documents/Coway_coway_trust_guideline_kor.pdf" download>다운로드 <i class="fas fa-file-download ml-2"></i></b-button>
                            </b-button-group> 
                            <hr class="py-1">
                            <b-button-group class="w-100">
                                <b-button variant="light" href="/documents/Coway_coway_trust_guideline_eng.pdf" class="see-policy" target="_blank">코웨이 트러스트 가이드라인 (영문) </b-button>
                                <b-button variant="light" href="/documents/Coway_coway_trust_guideline_eng.pdf" download>다운로드 <i class="fas fa-file-download ml-2"></i></b-button>
                            </b-button-group>
                        <hr>
                            <h7 class="f-110 fw-500">윤리경영</h7>  
                            <b-button-group class="w-100">
                                <b-button variant="light" href="/documents/Coway_code_of_conduct.pdf" class="see-policy" target="_blank">윤리헌장 (국문) </b-button>
                                <b-button variant="light" href="/documents/Coway_code_of_conduct.pdf" download>다운로드 <i class="fas fa-file-download ml-2"></i></b-button>
                            </b-button-group> 
                            <hr class="py-1">
                            <b-button-group class="w-100">
                                <b-button variant="light" href="/documents/Coway_code_of_conduct_guideline.pdf" class="see-policy" target="_blank">윤리규정 (국문) </b-button>
                                <b-button variant="light" href="/documents/Coway_code_of_conduct_guideline.pdf" download>다운로드 <i class="fas fa-file-download ml-2"></i></b-button>
                            </b-button-group>
                            <hr class="py-1">
                            <b-button-group class="w-100">
                                <b-button variant="light" href="/documents/Coway_code_of_conduct_instruction.pdf" class="see-policy" target="_blank">윤리실천지침 (국문) </b-button>
                                <b-button variant="light" href="/documents/Coway_code_of_conduct_instruction.pdf" download>다운로드 <i class="fas fa-file-download ml-2"></i></b-button>
                            </b-button-group>                               
                        <hr>
                            <h7 class="f-110 fw-500">협력사 지속가능성</h7>  
                            <b-button-group class="w-100">
                                <b-button variant="light" href="/documents/Coway_supplier_code_of_conduct_kor.pdf" class="see-policy" target="_blank">협력사 행동규범 (국문) </b-button>
                                <b-button variant="light" href="/documents/Coway_supplier_code_of_conduct_kor.pdf" download>다운로드 <i class="fas fa-file-download ml-2"></i></b-button>
                            </b-button-group> 
                            <hr class="py-1">
                            <b-button-group class="w-100">
                                <b-button variant="light" href="/documents/Coway_supplier_code_of_conduct_eng.pdf" class="see-policy" target="_blank">협력사 행동규범 (영문) </b-button>
                                <b-button variant="light" href="/documents/Coway_supplier_code_of_conduct_eng.pdf" download>다운로드 <i class="fas fa-file-download ml-2"></i></b-button>
                            </b-button-group>
                        <hr>
                            <h7 class="f-110 fw-500">환경</h7>  
                            <b-button-group class="w-100">
                                <b-button variant="light" href="/documents/carbon_report_2018.pdf" class="see-policy font-noto" target="_blank">Carbon Report 2018 (국문)</b-button>
                                <b-button variant="light" href="/documents/carbon_report_2018.pdf" download>다운로드 <i class="fas fa-file-download ml-2"></i></b-button>
                            </b-button-group> 
                        <hr>
                            <h7 class="f-110 fw-500">지배구조</h7>  
                            <b-button-group class="w-100">
                                <b-button variant="light" href="/documents/Coway_governance_report_2019.pdf" class="see-policy font-noto" target="_blank">거버넌스 리포트 2019 (국문)</b-button>
                                <b-button variant="light" href="/documents/Coway_governance_report_2019.pdf" download>다운로드 <i class="fas fa-file-download ml-2"></i></b-button>
                            </b-button-group> 
                        
                </div>
                <div v-if="show_page=='Initiatives'" class="font-noto">
                    <div class="d-flex mb-5 position-relative overflow-hidden"> <h4 class="gray5 fw-500 bg-white pr-4" style="z-index:10">글로벌 이니셔티브 참여 및 인지도</h4><div class="horizontal-line-2 position-absolute" style="z-index:8"></div></div>
                    <div class="d-flex justify-content-around align-items-center px-md-3 px-lg-5 mb-5">
                        <div class="px-3"><b-img src="/images/148_1.png" fluid style="max-height: 56px;"></b-img></div>
                        <div class="px-3"><b-img src="/images/148_2.png" fluid style="max-height: 68px;"></b-img></div>
                        <div class="px-3"><b-img src="/images/148_3.jpg" fluid style="max-height: 64px;"></b-img></div>                        
                        <div class="px-3"><b-img src="/images/148_4.png" fluid style="max-height: 75px;"></b-img></div>
                        <div class="px-3"><b-img src="/images/djsi.jpg" fluid style="max-height: 80px;"></b-img></div>
                        <!-- <div class="px-3"><b-img src="/images/148_6@3x.jpg" fluid></b-img></div> -->
                    </div>
                    <h7 class="mb-2 pt-4"> UNGC </h7>
                    <p class="mb-45">코웨이는 2006년 6월 UNGC(United Nations Global Compact: 유엔 글로벌 컴팩트)에 가입하여 인권, 노동, 환경, 그리고 반부패에 관한 10가지 원칙을 준수하고 이를 실천함으로써 성장의 추구와 함께 사회적인 책임을 다하는 기업 시민으로서의 역할을 다하고 있습니다. 본 지속가능경영보고서는 코웨이의 현재와 미래에대한 스스로의 평가이자 다짐입니다. 
                    </p>
                    <h7 class="mb-2"> SDGs(Sustainable Development Goals) </h7>
                    <p class="mb-45"> 코웨이는 2016년 UN 회원국간 공동 성명에 의해 수립된 국제사회가 달성해야 할 지속가능한 발전목표(SDGs, Sustainable Development Goals)에 따라 SDGs달성을 위한 솔루션을 개발하고 이행함으로써 새로운 성장기회를 발견하고 지속가능한 성장을 추진합니다.
                    </p>
                    <h7 class="mb-2"> CDP(탄소정보공개프로젝트) </h7>
                    <p class="mb-45"> 코웨이는 비영리단체인 탄소정보공개프로젝트(CDP)’ 한국위원회로부터 기후변화 대응의 우수함을 인정받아 선택소비재 부문‘탄소경영 섹터 아너스(Honors)’에 10년 연속 우수기업으로 선정되었습니다.
                    </p>                    
                    <h7 class="mb-2"> 유엔기후변화협약 당사국총회(COP21) 글로벌 기후변화 협약 지지 </h7>
                    <p class="mb-45"> 코웨이는 2015년 12월 세계 195개국이 프랑스 파리 에서 타결한 유엔기후변화협약 당사국총회(COP21) 의 ‘글로벌 기후변화협약’에 지지선언을 하고 자발적 탄소 감축계획을 수립하고 있습니다. 
                    </p>
                    <h7 class="mb-2"> DJSI(다우존스 지속가능경영지수) </h7>
                    <p> 코웨이의 지속가능경영은 대외적으로 인정받아 2016년부터 4년 연속 다우존스 지속가능경영지수(DJSI, Dow Jones Sustainability Indicies) 월드 지수에 편입되었습니다.
                    </p>
                </div>
            </b-col>
            <b-col class="col-0 col-lg-1"></b-col>
        </b-row>
        <hr class="space-p75">        
    </b-container>
    
    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->
    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->
    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->    
    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->

    <b-container v-else>
        <b-row>
            <b-col class="col-0 col-lg-1"></b-col>
            <b-col class="col-12 col-lg-10 px-0">
                <b-nav tabs class="">
                    <b-nav-item :active="show_page=='Policies'" @click.stop.prevent="showTab('Policies')" class="f-110 fw-400"> Sustainability Policies </b-nav-item>
                    <b-nav-item :active="show_page=='Initiatives'" @click.stop.prevent="showTab('Initiatives')" class="f-110 fw-400"> Global Initiatives </b-nav-item>
                </b-nav>
            </b-col>
            <b-col class="col-0 col-lg-1"></b-col>
        </b-row>
        <b-row>
            <b-col class="col-0 col-lg-1"></b-col>
            <b-col class="col-12 col-lg-10 bg-white px-md-4 px-lg-5 py-5">              
                <div v-if="show_page=='Policies'" class="px-md-2 px-lg-4 atr-content">
                    <div class="d-flex mb-5 position-relative overflow-hidden"> <h4 class="gray5 fw-500 bg-white pr-4" style="z-index:10">View and Download Policies</h4><div class="horizontal-line-2 position-absolute" style="z-index:8"></div></div>

                            <h7 class="f-110 fw-500">Sustainability Policies</h7>    
                            <b-button-group class="w-100">
                                <b-button variant="light" href="/documents/Coway_coway_trust_guideline_kor.pdf" class="see-policy" target="_blank">Coway Trust Guideline (Korean)</b-button>
                                <b-button variant="light" href="/documents/Coway_coway_trust_guideline_kor.pdf" download>Download <i class="fas fa-file-download ml-2"></i></b-button>
                            </b-button-group> 
                            <hr class="py-1">
                            <b-button-group class="w-100">
                                <b-button variant="light" href="/documents/Coway_coway_trust_guideline_eng.pdf" class="see-policy" target="_blank">Coway Trust Guideline (English) </b-button>
                                <b-button variant="light" href="/documents/Coway_coway_trust_guideline_eng.pdf" download>Download <i class="fas fa-file-download ml-2"></i></b-button>
                            </b-button-group>
                        <hr>
                            <h7 class="f-110 fw-500">Ethical Management</h7>  
                            <b-button-group class="w-100">
                                <b-button variant="light" href="/documents/Coway_code_of_conduct.pdf" class="see-policy" target="_blank">The Charter of Ethics (Korean) </b-button>
                                <b-button variant="light" href="/documents/Coway_code_of_conduct.pdf" download>Download <i class="fas fa-file-download ml-2"></i></b-button>
                            </b-button-group> 
                            <hr class="py-1">
                            <b-button-group class="w-100">
                                <b-button variant="light" href="/documents/Coway_code_of_conduct_guideline.pdf" class="see-policy" target="_blank">The Regulations on Ethics (Korean)</b-button>
                                <b-button variant="light" href="/documents/Coway_code_of_conduct_guideline.pdf" download>Download <i class="fas fa-file-download ml-2"></i></b-button>
                            </b-button-group>
                            <hr class="py-1">
                            <b-button-group class="w-100">
                                <b-button variant="light" href="/documents/Coway_code_of_conduct_instruction.pdf" class="see-policy" target="_blank">The Code of Ethics (Korean)</b-button>
                                <b-button variant="light" href="/documents/Coway_code_of_conduct_instruction.pdf" download>Download <i class="fas fa-file-download ml-2"></i></b-button>
                            </b-button-group>                               
                        <hr>
                            <h7 class="f-110 fw-500">Supplier CSR</h7>  
                            <b-button-group class="w-100">
                                <b-button variant="light" href="/documents/Coway_supplier_code_of_conduct_kor.pdf" class="see-policy" target="_blank">Supplier Code of Conduct (Korean) </b-button>
                                <b-button variant="light" href="/documents/Coway_supplier_code_of_conduct_kor.pdf" download>Download <i class="fas fa-file-download ml-2"></i></b-button>
                            </b-button-group> 
                            <hr class="py-1">
                            <b-button-group class="w-100">
                                <b-button variant="light" href="/documents/Coway_supplier_code_of_conduct_eng.pdf" class="see-policy" target="_blank">Supplier Code of Conduct (English)</b-button>
                                <b-button variant="light" href="/documents/Coway_supplier_code_of_conduct_eng.pdf" download>Download <i class="fas fa-file-download ml-2"></i></b-button>
                            </b-button-group>
                        <hr>
                            <h7 class="f-110 fw-500">Environment</h7>  
                            <b-button-group class="w-100">
                                <b-button variant="light" href="/documents/carbon_report_2018.pdf" class="see-policy font-noto" target="_blank">Carbon Report 2018 (Korean)</b-button>
                                <b-button variant="light" href="/documents/carbon_report_2018.pdf" download>Download <i class="fas fa-file-download ml-2"></i></b-button>
                            </b-button-group> 
                        <hr>
                            <h7 class="f-110 fw-500">Corporate Governance</h7>  
                            <b-button-group class="w-100">
                                <b-button variant="light" href="/documents/Coway_governance_report_2019.pdf" class="see-policy font-noto" target="_blank">Governance Report 2019 (Korean)</b-button>
                                <b-button variant="light" href="/documents/Coway_governance_report_2019.pdf" download>Download <i class="fas fa-file-download ml-2"></i></b-button>
                            </b-button-group> 
                        
                </div>
                <div v-if="show_page=='Initiatives'" class="font-noto">
                    <div class="d-flex mb-5 position-relative overflow-hidden"> <h4 class="gray5 fw-500 bg-white pr-4" style="z-index:10">Participate in Global Initiatives</h4><div class="horizontal-line-2 position-absolute" style="z-index:8"></div></div>
                    <div class="d-flex justify-content-around align-items-center px-md-3 px-lg-5 mb-5">
                        <div class="px-3"><b-img src="/images/148_1.png" fluid style="max-height: 56px;"></b-img></div>
                        <div class="px-3"><b-img src="/images/148_2.png" fluid style="max-height: 68px;"></b-img></div>
                        <div class="px-3"><b-img src="/images/148_3.jpg" fluid style="max-height: 64px;"></b-img></div>                        
                        <div class="px-3"><b-img src="/images/148_4.png" fluid style="max-height: 75px;"></b-img></div>
                        <div class="px-3"><b-img src="/images/djsi.jpg" fluid style="max-height: 80px;"></b-img></div>
                        <!-- <div class="px-3"><b-img src="/images/148_6@3x.jpg" fluid></b-img></div> -->
                    </div>
                    <h7 class="mb-2 pt-4"> UNGC </h7>
                    <p class="mb-45">Coway joined the United Nations Global Compact (UNGC) in June 2006. As a corporate citizen who fulfills social responsibility, we fulfill our duty by pursuing growth by adhering to and practicing the 10 principles of human rights, labor, environment, and anti-corruption. This Sustainability Report is a self-assessment and commitment to Coway's present and future.
                    </p>
                    <h7 class="mb-2"> SDGs(Sustainable Development Goals) </h7>
                    <p class="mb-45"> Coway seeks new growth opportunities and achieves sustainable growth by developing and implementing solutions to achieve SDGs as the United Nations announces Sustainable Development Goals (SDGs) that the international community must achieve, following the Millennium Development Goals (MDGs). 
                    </p>
                    <h7 class="mb-2"> CDP(Carbon Disclosure Project) </h7>
                    <p class="mb-45"> Coway was recognized by the Korean Council of Nonprofit organization “Carbon Disclosure Project (CDP)” for excellence in responding to climate change and was selected as an excellent company in the selected consumer goods category “Carbon Management Sector Honors” for 10 consecutive years.
                    </p>                    
                    <h7 class="mb-2"> United Nations Conference on Climate Change (COP21)-Support for the Global Climate Change Convention</h7>
                    <p class="mb-45"> In December 2015, Coway declared support for the “Global Climate Change Convention” of the United Nations General Conference on Climate Change (COP21), which was reached in 195 countries in Paris, France, and established a voluntary carbon reduction plan.
                    </p>
                    <h7 class="mb-2"> DJSI(Dow Jones Sustainability Indicies) </h7>
                    <p> Coway's sustainability management has been recognized externally and has been included in the Dow Jones Sustainability Indicies (DJSI) World Index for 4 consecutive years since 2016.
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
import LocaleMixin from '@/components/locale'

export default {
    layout: 'StaticPage',
    mixins: [LocaleMixin],
    async asyncData({ query, store }) {
        if(query.l && query.l == 'ENG'){
            store.commit('setLang', 'ENG')
        }
        if (query.p != null) {
            return { show_page: query.p }
        }
        else{
            return { show_page: 'Policies'}
        }
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
            return this.is_ENG? 'Policies and Initiatives' : '지역사회'
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
    }
}
</script>
<style scoped lang="scss">
.nav-tabs{
    border:0;
}
.nav-link.active{
    border-color: white;
}
.see-policy{
    width:64%;
    text-align: left;
}
</style>
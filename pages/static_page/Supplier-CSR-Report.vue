<template>
<div class="position-relative page-top-bg-so min-vh-100">   
    <logger title="협력사 CSR 리포트"></logger>
    <div class="w-100 bg-white bg-white-cover position-absolute"></div>

    <b-container class="">
        <b-row class="pt-md-5 px-3">
            <h1 class="mt-5 mb-3 pt-3 text-center w-100 fw-400">CARE FOR SOCIETY</h1>
            <div class="d-flex justify-content-center mb-5 text-center w-100">
                <div class="border-bottom-dark mr-3" style="width: 50px; margin-bottom: 1.25rem"></div>
                <h7 class="fw-400"> Supplier CSR Report</h7>
                <div class="border-bottom-dark ml-3" style="width: 50px; margin-bottom: 1.25rem"></div>
            </div>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="title"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#8e6627'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0">
                <section class="bg-white px-4 py-4">
                    <div class="border-top-dark pb-2 mb-5"></div>
                    <h4-ancor hash="T" :activated="activated" class="gold8 mb-4 mb-sm-5">협력사 CSR 리포트</h4-ancor>

                    <div class="d-flex mb-2 position-relative overflow-hidden"> <h6-ancor hash="v1" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">협력사 행동 규범</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                    <p>코웨이는 우리가 하는 일이 더 나은 세상을 만드는데 기여한다는 ‘착한 믿음’의 경영정신을 바탕으로 협력사와 함께 동반성장해 나아가기 위해 노력하고 있습니다. 지속가능한 사회 구축을 위한 책임 경영도 그 일환으로, 본 코웨이 협력사 행동 규범을 수립하였습니다. 본 규범은 협력사 구성원의 노동환경 개선 및 인권 존중, 환경에 대한 책임과 윤리 경영 등 코웨이가 협력사에 요구하는 바를 제시하고 있습니다. 
                    </p>

                    <p class="mb-4">코웨이의 협력사 행동 규범은 EICC 행동 규범 및 기타 글로벌 가이드라인을 참고하여 작성되었습니다.</p>
                    <b-button variant="gold" size="sm" block class="mb-5">협력사 행동규범 다운로드</b-button>

                    <hr class="py-3">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="v2" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">협력사 지속가능성 평가</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-5">코웨이는 거래규모, 대체불가능성, 핵심기술 여부, 비재무 리스크 발생 가능성 등을 종합적으로 고려하여 핵심 협력회사를 분류하여 관리하고 있습니다.
                    </p>

                    <h6-ancor hash="v2-1" :activated="activated" class="gold6 fw-500 mb-2">공급망 지속가능성 사전 스크리닝</h6-ancor>
                    <p class="mb-5">코웨이는 공급망의 지속가능성을 포괄적으로 관리하기 위하여 모든 협력사를 대상으로 협력사 사전 평가에서 협력사 행동규범을 준수하도록 요구하고 있으며, 평가항목상 일정한 기준을 충족하지 못한 경우 코웨이의 협력사 등록에서 제외하고 있습니다. 사전평가를 통해 협력회사 등록단게에서부터 잠재적인 지속가능성 리스크를 관리하고 있습니다. 
                    </p>

                    <h6-ancor hash="v2-2" :activated="activated" class="gold6 fw-500 mb-2">협력사 리스크 평가</h6-ancor>
                    <p>코웨이는 협력사의 실태, 실적, 경영 안정성을 평가하며 혁신활동 및 커뮤니케이션이 우수한 협력사에게 가점을 부여합니다. 평가 결과에 따라 협력사를 A에서 D등급으로 나누고 A와 B등급을 획득한 우수 협력사에게는 발주 물량 확대, 협의회 임원단 자격을 부여합니다. 반면 C와 D등급을 받은 취약 협력사에게는 개발 제한, 물량 축소 등의 페널티를 부여하는 것은 물론 2년 연속 D등급을 받을 경우 거래를 중단하고 있습니다.
                    </p>

                    <p>코웨이는 비재무적 요인으로 핵심 리스크를 도출하고 이에 대한 개선활동을 추진하고 있습니다. 코웨이의 협력사 행동 규범은 노동, 안전 및 보건, 환경, 윤리, 경영시스템의 5개 항목으로 구성되어 있습니다. 노동 측면에서는 차별 금지, 아동 노동 및 강제 노동의 금지, 근로시간 준수, 인도적 대우 등이 주요 세부 항목입니다. 안전 보건 측면에서는 산업 안전 및 보건, 비상사태 대비 수준을 검사합니다. 환경 측면에서는 환경 법규 준수 및 오염 예방과 제품 함유물질 규제 등이 중요한 항목입니다. 윤리 측면에서는 반부패, 공정거래, 책임 있는 광물 조달, 개인정보 보호를 중요 평가 요소로 두고 있습니다.
                    </p>

                    <p class="mb-5">2020년에는 총 67개의 협력사를 대상으로 노동, 안전보건, 환경, 윤리, 분쟁광물 측면의 신규 기준을 정립하고, 협력사의 지속가능성 위험을 평가하였습니다. 코웨이가 제시한 23개의 세부 기준을 토대로 평가한 결과, 코웨이 협력사는 평균 56.7%의 충족률을 나타냈습니다.
                    </p>

                        <h7 class="mb-1 gray63">협력사 CSR 리스크 평가 결과</h7>
                        <p class="f-80 gray6 mb-2"> (단위: %)</p>
                        <div class="d-flex align-items-center"> <div style="width:16px; height:16px; background-color:#f0c560;" class="mr-2"></div><span class="f-90 fw-300">충족률</span></div>
                        <hj-img src="/images/94_1.svg" fluid></hj-img>
                    <hr class="mb-4">
                    <h6-ancor hash="v2-3" :activated="activated" class="gold6 fw-500 mb-2">시정 조치</h6-ancor>
                    <p class="mb-5">코웨이는 협력사 평가 결과에 따라 개선이 필요한 협력사에 대해서는 시정조치 계획을 수립하고 리스크 요인(ESG 리스크 포함)을 개선하도록 요구하고 있습니다. 2019년 협력사 진단 및 평가결과에 따라 제재 조치를 받은 협력사는 총 XX 개였습니다. 
                    </p>
                    <hr class="py-3">
                    <div class="d-flex mb-5 position-relative overflow-hidden"> <h6-ancor hash="v3" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">분쟁광물</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                    <h6-ancor hash="v3-1" :activated="activated" class="gold6 fw-500 mb-2">분쟁광물 사용 제한 선언</h6-ancor>
                    <p class="mb-45">코웨이는 인간의 존엄성을 최우선시하며 지속가능한 소비 및 생산을 유도하기 위하여 분쟁광물 사용을 제한합니다. 아울러 분쟁지역에서 생산된 합법적인 광물은 사용하여 콩고 및 인접국가에 경제적 피해가 초래되지 않도록 노력하겠습니다. 이를 위하여 분쟁광물 사용에 대한 지속적이고 철저한 조사를 시행하고 있으며, 분쟁광물 사용 금지 정책과 관리 시스템, 내외부 심사를 통해 분쟁광물 이슈를 지속적으로 관리해 나가겠습니다. 
                    </p>

                        <h7 class="mb-3 gray63">분쟁광물 대응 현황</h7>
                        <b-table-simple responsive class="txt-table social-table f-95 mb-5">
                            <b-thead><b-tr><b-td colspan="2"></b-td></b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td><span class="fw-400">2012-2013</span></b-td><b-td><span class="fw-400">&middot; 구매방침 및 제한 물질 리스트에 분쟁광물 사용 제한 항목 추가</span></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td><span class="fw-400">2014-2016</span></b-td><b-td><span class="fw-400">&middot; 협력사 교육 및 시스템 구축<br>&middot; 분쟁광물 사용 현황 및 제련소 정보 조사 시행</span></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td><span class="fw-400">2017-2018</span></b-td><b-td><span class="fw-400">&middot; 협력사 행동규범에 12조 책임 있는 광물 조달 제정<br>&middot; CSMS(화학물질관리시스템)내 분쟁광물 등록 시스템 통합 관리</span></b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                    <hr class="py-2">

                    <h6-ancor hash="v3-2" :activated="activated" class="gold6 fw-500 mb-2 font-noto">코웨이 행동규범 제12조</h6-ancor>
                    <p class="mb-5">협력사는 불법적이고 비윤리적인 방법을 통해 취득한 원자재(무장세력이 점거한 광산에서 채굴된 광물, 산림 보존 및 벌목 금지 지역에서 벌목된 목재 등)을 사용하지 않습니다. 원자재, 부품, 제품에 포함된 탄탈륨, 주석, 텅스텐, 금 등 콩고민주공화국이나 인접국가에서 심각한 인권을 유린하는 무장세력에게 직간접적으로 재원 또는 편익을 제공하며 생산된 광물은 사용하지 않습니다.
                    </p>

                        <h7 class="mb-3 gray63">구매 분석</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-5">
                            <b-thead>
                                <b-tr>
                                    <b-td colspan="2" class="text-left">구분</b-td><b-td>협력사 수</b-td>
                                </b-tr>
                            </b-thead>
                            <b-tbody>                                
                                <b-tr>
                                    <b-td rowspan="2" class="text-left">1차 협력사</b-td><b-td class="text-left">1차 전체 협력사</b-td><b-td>180</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">핵심 협력사</b-td><b-td>67</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">2차 이상 협력사</b-td><b-td class="text-left">핵심 협력사</b-td><b-td>82</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">전체 협력사</b-td><b-td class="text-left">핵심 협력사</b-td><b-td>262</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                        
                        <!--<h7 class="mb-3 gray63">물품구매액</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-5">
                            <b-thead>
                                <b-tr>
                                    <b-td class="text-left">구분</b-td><b-td>구매액</b-td><b-td>구매비중</b-td>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">기자재</b-td><b-td></b-td><b-td></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">공사용역</b-td><b-td></b-td><b-td></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">&nbsp;</b-td><b-td></b-td><b-td></b-td><b-td></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">&nbsp;</b-td><b-td></b-td><b-td></b-td><b-td></b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>-->

                        <h7 class="mb-3 gray63">공급망 CSR 평가 현황(위험요인별)</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-0">
                            <b-thead>
                                <b-tr>
                                    <b-td colspan="4"></b-td>
                                </b-tr>
                            </b-thead>
                            <b-thead>
                                <b-tr>
                                    <b-td class="text-left" rowspan="2">구분</b-td><b-td class="text-left" rowspan="2">리스크 요인</b-td><b-td colspan="2" class=" border-bottom-0">평가 협력회사</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>조사 범위</b-td><b-td>지속가능성 위험요인 노출 협력사</b-td>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left" rowspan="5">인권/노동</b-td><b-td class="text-left">근로시간</b-td><b-td rowspan="17">67개사</b-td><b-td rowspan="5">4.4%</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">노동 관련 사건 및 법규 위반</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">아동노동 금지 및 연소자 근로</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">외국인 및 이주노동자</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">차별금지</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="2">안전/보건</b-td><b-td class="text-left">안전 보건 관리</b-td><b-td rowspan="2">5.0%</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">안전 보건 정책</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="5">환경</b-td><b-td class="text-left">물</b-td><b-td rowspan="5">1.4%</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">에너지 및 온실가스</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">유해물질 및 유해폐기물</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">폐기물</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">환경관련 사건 및 법규 위반</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="4">윤리</b-td><b-td class="text-left">공정경쟁</b-td><b-td rowspan="4">0.8%</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">기업윤리 관련 사건 및 법규 위반</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">반부패 및 윤리경영</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">정보보호</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" colspan="2">분쟁광물</b-td><b-td>3.0%</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                </section> 
                <!-- End of DMA-->

            </b-container> 
            <!-- End of Contents Container -->
            </b-col>
        </b-row>
        <hr class="mb-5 space-p75">
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
    asyncData({query, store}){
        if(query.l && query.l == 'ENG'){
            store.commit('setLang', 'ENG')
        }
    },
    data(){
        return {
            activated: [],
        }
    },
    computed:{
        is_ENG(){
            return this.$store.state.is_ENG
        },
        title(){
            return this.is_ENG? 'Supplier CSR Report' : '협력사 CSR 리포트'
        },
        sub_titles(){
            let temp = [
                { 
                    title: this.is_ENG? 'Supplier Code of Conduct': '협력사 행동규범', hash: 'v1' 
                },
                { 
                    title: this.is_ENG? 'Supplier Sustainability Assessment': '협력사 지속가능성 평가', hash: 'v2',
                    child: [
                        { title: this.is_ENG? 'Preliminary Screening on Supply Chain Sustainability': '공급망 지속가능성 사전 스크리닝', hash: 'v2-1' },
                        { title: this.is_ENG? 'Supplier Risk Assessment': '협력사 리스크 평가', hash: 'v2-2' },
                        { title: this.is_ENG? 'Corrective Action':'시정 조치', hash: 'v2-3' },                        
                    ]
                },
                {
                    title: this.is_ENG? 'Conflict Minerals': '분쟁광물', hash: 'v3',
                    child: [
                        { title: this.is_ENG? 'Declaration of Restriction on the Use of Conflict Minerals': '분쟁광물 사용 제한 선언', hash: 'v3-1' },
                        { title: this.is_ENG? 'Coway Code of Conduct Article 12': '코웨이 행동규범 제 12조', hash: 'v3-2'}
                    ]
                }
            ]
            return temp            
        }
    },
    methods:{
        safeHash(target){
            return ih.safeHash(target)
        }
    },
    components:{
        SideNavigation,
        h6Ancor,
        h4Ancor
    }
}
</script>
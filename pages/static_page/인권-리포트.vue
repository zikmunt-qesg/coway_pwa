<template>
<div class="position-relative page-top-bg min-vh-100">   
    <logger title="인권 리포트"></logger>
    <b-img src="@/assets/images/500.png" fluid class="page-top-img"></b-img>

    <b-container class="">
        <b-row class="my-5 pt-md-5">
            <h1 class="mt-2 mt-lg-5 mb-3 text-center w-100 fw-400">CARE FOR SOCIETY</h1>
            <h7 class="mb-lg-5 text-center w-100 fw-400"> dummy text 환경을 건강하게 사람을 행복하게, 내일을 디자인하는 그린 글로벌 리더 </h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="'인권 리포트'"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#8e6627'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0">
                <section class="bg-white px-4 py-4 mb-5">
                    <div class="border-top-dark pb-2 mb-5"></div>
                    <h4-ancor :title="'인권 리포트'" :activated="activated" class="gold9 mb-4 mb-sm-5 mt-m-2">인권 리포트</h4-ancor>

                    <div class="d-flex mb-2 position-relative"> <h6-ancor :title="'인권 경영 원칙 및 가이드'" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">인권 경영 원칙 및 가이드</h6-ancor></div>
                    <p>전 세계적으로 차별 방지, 다양성 존중 등 인권에 대한 관심이 증대되고 인권 관련 규제 및 가이드라인도 점차 강화되고 있습니다. 많은 기업이 인권 경영을 지속가능성을 담보할 수 있는 기본 원칙으로 삼고 있으며, 코웨이 또한 우리가 하는 일이 더 나은 세상을 만드는 데 기여한다는 '착한믿음'의 경영정신을 바탕으로 인권경영 활동을 충실히 이행하고 있습니다. 나아가 코웨이는 사업을 영위하는 모든 국가와 지역의 노동, 인권 및 근로조건 기준을 준수합니다. 코웨이의 인권 정책은 임직원뿐만 아니라 고객, 협력사, 영업·서비스 파트너 및 지역사회 등 모든 이해관계자들에게도 적용됩니다. 
                    </p>

                    <p>유엔 기업과 인권 이행원칙(UN Guiding Principles on Business and Human Rights)은 기업과 이해관계자에게 사업 과정에서 인권 진작을 위한 명확한 프레임워크를 제시하고 있습니다. 그 원칙은 ‘보호(Protect)’, ‘존중(Respect)’, ‘구제(Remedy)’로, 기업이 인권을 존중하고 권리 침해를 예방하기 위해 노력을 기울이며, 부정적 인권 이슈를 제거할 것을 기대합니다. 코웨이의 트러스트 가이드라인은 1) 차별금지, 2) 아동노동 금지, 3) 강제노동 금지, 4) 근로시간 준수, 5) 인도적 대우, 6) 안전과 건강, 7) 소비자 안전 보건, 8) 책임 있는 마케팅, 9) 개인정보 보호, 10) 반부패, 11) 공정 경쟁, 12) 환경에 대한 책임, 13) 현지주민 인권 보호, 14) 공유가치 창출의 14개 항목으로 구성되어 있습니다. 
                    </p>

                    <p>코웨이의 인권 경영은 1) 유엔 기업과 인권 이행원칙(UN Guiding Principles on Business and Human Rights)와 비교하는 진단 분석(Gap Analysis), 2) 글로벌 인권 행동플랫폼 및 NGO 등 3rd-Party의 인권 관련 이슈 트래킹(Tracking), 3) 연례 이해관계자 조사를 통한 이슈 식별, 4) CSR 이슈제기 채널을 통한 통합 고충처리(Grievance Resolution) 내용을 종합적으로 검토하여 이뤄집니다. 
                    </p>

                    <a href="http://sustainability18.coway.co.kr/download/cowaytrustguide.pdf"><b-button>코웨이 인권정책</b-button></a>

                    <div class="d-flex mb-3 position-relative"> <h6-ancor :title="'인권 리스크 식별 및 완화 프로세스'" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">인권 리스크 식별 및 완화 프로세스</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>

                        <h7 class="mb-2 gray63">리스크 식별 프로세스</h7>
                        <div style="border-width:0.1px; border-style:dotted; border-color:gray mb-45" class="my-3 p-3">리스크 식별 프로세스 그림</div>

                    <h6-ancor :title="'핵심적 인권 요소에 대한 조치 결과'" :activated="activated" class="gold6 fw-500 mb-2">핵심적 인권 요소에 대한 조치 결과</h6-ancor>
                    <p>2019년 시행된 가치사슬상에서의 주요 인권이슈 및 실사 결과는 아래와 같습니다. 
                    </p>

                    <div style="border-width:0.1px; border-style:dotted; border-color:gray mb-45" class="my-3 p-3">리스크 조치 결과 그림</div>

                        <h7 class="mb-2 gray63">주요 인권 이슈 및 개선조치</h7>
                        <b-table-simple responsive class="txt-table social-table f-95">
                             <b-thead>
                                 <b-tr>
                                    <b-td class="text-left">구분</b-td><b-td>주요 인권 이슈</b-td><b-td>취약 계층</b-td><b-td>2019 개선 및 구제 조치</b-td>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td>A</b-td><b-td>성희롱 예방활동</b-td><b-td>전체 임직원, 영업·서비스 파트너</b-td>
                                    <b-td>
                                        전체 임직원, 영업·서비스 파트너 대상의 성희롱 예방 및 장애인인식개선 교육 진행<br>
                                        신고 채널 운영<br>
                                        성희롱 예방 및 장애인식 교육: 100%<br>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>B</b-td><b-td>법정 노동시간 관리</b-td><b-td>부품제조 협력사, 전체 임직원</b-td>
                                    <b-td>
                                        주 52시간 시행에 따른 조직 문화 및 시스템 개선<br>
                                        일과 삶의 균형 추구<br>
                                        협력사 조사 근로시간 위험 발견: 3%<br>
                                        34개사 조사 결과 2개사에 대한 근로시간 및 노동관행 리스크 노출을 발견하였으며 기준 강화를 위한 조치 시행 중<br>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>C</b-td><b-td>폭력 및 폭언</b-td><b-td>콜센터 임직원, 영업·서비스 파트너</b-td>
                                    <b-td>
                                        리더십 교육, 인성교육 과정에서 비즈니스 에티켓 교육 진행
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>D</b-td><b-td>직장내 괴롭힘</b-td><b-td>전체 임직원</b-td>
                                    <b-td>
                                        직장내 괴롭힘 금지 및 예방에 대한 공지 및 교육 진행. 신고 채널 운영 
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>E</b-td><b-td>안전보건</b-td><b-td>임직원, 영업/서비스 파트너</b-td>
                                    <b-td>
                                        코로나-19 등 전염병 발생시 고객 및 파트너의 안전을 위한 서비스 대응 매뉴얼<br> 
                                        안전보건(마스크, 장갑, 소독제 등) 장비 제공<br>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>F</b-td><b-td>산업안전보건</b-td><b-td>생산직 임직원</b-td>
                                    <b-td>
                                        예방점검, 실행, 사후관리 등 자율 안전보건활동 이행 및 개선 과제 도출<br> 
                                        유소견자, 고위험 소견자 등을 대상으로 건강증진 프로그램 운영.<br>

                                        협력사 산업안전보건 관리 조사 위험 발견: 5%<br>
                                        32개사 조사 결과 5개사에 대한 안전 보건 관리상 기준 강화 필요를 발견하였으며 기준 강화를 위한 조치 시행 중<br>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>G</b-td><b-td>개인정보 유출</b-td><b-td>고객, 임직원</b-td>
                                    <b-td>
                                        정보보안 및 개인정보보호 교육<br> 
                                        개인정보보호 관리 실태 점검<br> 
                                        이상징후탐지시스템 운영<br> 
                                        고객 본인인증시스템 운영<br> 
                                    </b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                </section> 
            </b-container> 
            <!-- End of Contents Container -->
            </b-col>
        </b-row>
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
    data(){
        return {
            title: '인권 리포트',
            activated: [],
            sub_titles: [
                { 
                    title: '인권 경영 원칙 및 가이드'
                },
                {
                    title: '인권 리스크 식별 및 완화 프로세스',
                    child: [
                        { title: '리스크 식별' }, 
                        { title: '핵심적 인권 요소에 대한 조치 결과' }
                    ]
                },
                { 
                    title: '가치사슬 전체의 환경역량 강화' 
                }
            ],
        }
    },
    methods:{
        viewHandler(event){
            if(event.type == 'enter' ){
                this.activated.push(event.target.element.id)
            }
            else if(event.type == 'exit'){
                let idx = this.activated.findIndex(item => item == event.target.element.id)
                if (idx > -1) {
                    this.activated.splice(idx, 1)
                }
            }
            console.log(this.activated)
        },
        isActive(target){
            let idx = this.activated.findIndex(item => item == target)
            if(idx > -1) {
                return true
            }
            else {
                return false
            }
        },
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
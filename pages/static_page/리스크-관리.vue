<template>
<div class="position-relative page-top-bg min-vh-100">   
    <logger title="리스크 관리"></logger>
    <b-img src="@/assets/images/사각형17.png" fluid class="page-top-img"></b-img>
    
    <b-container class="">
        <b-row class="my-5 pt-md-5">
            <h1 class="mt-2 mt-lg-5 mb-3 text-center w-100 fw-400">CARE FOR SUSTAINABILITY</h1>
            <h7 class="mb-lg-5 text-center w-100 fw-400"> dummy text 환경을 건강하게 사람을 행복하게, 내일을 디자인하는 그린 글로벌 리더 </h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="'리스크 관리'"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#132e54'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0">
                <section class="bg-white px-4 py-4 mb-5">
                    <div class="border-top-dark pb-2 mb-5"></div>
                    <h4-ancor :title="'리스크관리'" :activated="activated" class="parang8 mb-4 mb-sm-5">리스크 관리</h4-ancor>

                    <h6-ancor :title="'전사적 리스크 관리 체계'" :activated="activated" class="parang7 f-130 fw-500 bg-white" style="z-index:10">전사적 리스크 관리 체계</h6-ancor>
                    <p>코웨이는 경영활동 중에 발생할 수 있는 리스크를 선제적으로 관리하기 위해 위기관리위원회를 운영하고 있습니다. 위기관리위원회는 주요 경영 이슈별 의사결정 과정에서 리스크 수준을 진단하고 관련 리스크에 대한 회사의 노출 범위, 대응 전략 등에 대한 의사결정을 수행합니다. 전사 리스크 관리 및 운영은 위기관리위원회를 중심으로 이루어집니다. 위기관리위원회는 리스크 이슈 수집, 영향도 분석, 대응방안 수립, 리스크 인지와 전파, 담당 부서와의 협조를 통한 리스크 대응 실행을 총괄합니다. 위기관리위원회는 긴급 및 중요 리스크 발생 시 이사회 내 위원회인 경영위원회 및 CEO에 보고하고, 전사 리스크 대응 조직으로서 위기평가회의를 소집할 권한을 가집니다.  
                    </p>
                    <p class="mb-5">코웨이의 리스크 관리 범위는 시장, 신용, 유동성 등의 재무 리스크, 준법 및 규제, 정책 등의 비재무 리스크를 포괄합니다. 각 사업본부는 경영활동과 관련된 주요 리스크를 선제적으로 관리하기 위해 리스크 관리 정책을 기반으로 위기상황 발생시 명확한 대응 및 보고를 진행하며, 리스크 완화를 위해 부서간 긴밀한 상호 협력을 추진합니다.  
                    </p>

                    <h7 class="mb-3 gray63">전사 리스크 대응 프로세스</h7>
                    <b-img src="@/assets/images/42_1.svg" fluid></b-img>
                    <hr class="mb-3">
                    <b-img src="@/assets/images/73_1.svg" fluid></b-img>
                    <hr class="mb-45">

                    <div class="d-flex mb-3 position-relative"> <h6-ancor :title="'잠재 리스크의 관리'" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">잠재 리스크의 관리</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    <p>코웨이는 경영환경에서 중장기적으로 상당한 영향 요소가 있는 리스크를 분석하고 새롭게 부각되는 리스크를 인지하여 전략적 대응을 추진합니다. 정기적 리스크 모니터링을 기반으로 잠재 리스크를 선제적으로 파악하고 지속가능한 경영환경을 조성하여 새로운 기회를 창출해 나가고 있습니다. 2019년 코웨이의 핵심 잠재 리스크는 1) 정보보호 위협의 증가와 2) 온라인 가전 서비스 시장의 성장으로 도출됩니다. 
                    </p>
                    <b-table-simple responsive class="sep-table f-90 mb-1">
                        <b-tbody>
                            <b-tr class="bg-parang7 fw-300 text-white">
                                <b-td style="width:20%;">잠재 리스크</b-td><b-td style="width:38%;">리스크 맥락 및 사업적 영향</b-td><b-td>리스크 대응 방안</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="f-100">정보보안 및 개인정보 유출</b-td>
                                <b-td>
                                    <p>사람과 사람이 연결되는 시대를 넘어 사물과 사람, 사물과 사물이 연결되는 4차산업혁명의 도래에 따라 제품 및 서비스의 생산, 유통 및 사용 전 단계에서 데이터 및 정보는 전 산업의 기반 인프라로 자리하였습니다.
                                    </p>
                                    <p>코웨이의 렌탈 비즈니스의 주요 제품인 가전제품은 사물인터넷(IoT)을 기반으로 고객에게 새로운 경험을 제공하고 있으며, 제품 생산 과정에서도 첨단 자동화 기술 기반 스마트 팩토리(Smart Factory) 도입에 따라 데이터 및 정보 보안이 기업 경쟁력의 중요한 요소로 자리하였습니다. 
                                    </p>
                                    <p>더불어, 렌탈 비즈니스의 특성상 고객 접점에서 직접 고객 개인정보를 수집 및 활용하는 과정은 점점 더 리스크 민감도가 증가하고 있습니다. 정보보안 및 개인정보 보호는 고객 신뢰의 기반일 뿐만 아니라 서비스 제공자의 기본 의무로서 코웨이는 리스크의 위험성을 완화하고 관리해야 할 책임이 있습니다.
                                    </p>
                                </b-td>
                                <b-td>
                                    <p>코웨이는 외부 사이버 공격 및 정보보호 침해에 대해 선제적인 대응 체계를 마련하고, 강력한 예방 활동 및 모니터링을 실시하여 리스크 대응력을 강화하고 있습니다. 내부적으로는 영업 및 서비스 제공 임직원 및 파트너에 정기적인 개인정보보호 교육을 실시하며, 정보보호위원회를 운영하여 개인정보의 수집-보관-폐기에 이르기까지 전 과정에서 고객정보를 보호하기 위해 최선의 노력을 다하고 있습니다. 
                                    </p>
                                    <p>또한 글로벌 시장 진출 확대에 따라 유럽연합 개인정보보호 규정(GDPR) 등 개인정보보호 규제에 대한 효과적인 대응체계를 수립 및 추진하고 있습니다.
                                    </p>
                                    <nuxt-link to="/static_page/데이터-및-개인정보보호"><b-button variant="parang-text" class="px-0 py-1 f-95">정보보안 및 개인정보보호 정책</b-button></nuxt-link>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="f-100">코로나 19 팬데믹</b-td>
                                <b-td>
                                    <p>코로나19는 전 세계적으로 빠르게 확산되고 있습니다. 코웨이의 주 사업장이 위치한 한국은 적극적인 초기 방역 및 강력한 사회적 격리를 통해 확산 방지에 성공하고 있지만, 여전히 대인 접촉에 따른 추가 확산을 막기 위한 주의가 필요합니다.
                                    </p>
                                    <p>코로나19로 인하여 코웨이 임직원의 건강및 안전 문제가 사업 계속성 확보를 위한 중요 이슈로 떠올랐습니다. 뿐만 아니라 코웨이의 주요 사업모델인 렌탈, 방문 케어 등은 대인 접촉을 기피하는 사회문화의 확산에 장기적인 영향을 받을 수 있습니다.
                                    </p>
                                </b-td>
                                <b-td>
                                    <p>코웨이는 코로나19로부터 임직원을 보호하기 위하여 불필요한 외부인의 사옥 출입금지, 마스크 및 손소독제 사용, 열감지기 설치 등 물리적 조치와 함께 유연근무, 의심자 재택근무 조치 등 다양한 활동을 추진하였습니다. 2020년 5월까지 코웨이 임직원은 코로나 확진자가 발생하지 않았습니다. 
                                    </p>
                                    <p>대인 접촉 기피 사회 문화 확산에 따른 장기적 사회 변화에 따른 매출 및 이익 감소우려에 근본적으로 대응하기 위하여, 비대면∙디지털화 전략을 강화하고 있습니다. 2020년 1월 코웨이는 방문 관리 없이 사용자가 직접 부품을 교체할 수 있는 자가 관리형 청정기를 출시하였습니다. 특히 넷마블로의 대주주가 변경됨에 따라, 코웨이는 비대면 서비스 확대를 위한 기술 기반 및 노하우를 갖추게 되었습니다. 코웨이는 단순 생활가전 제공에 그치지 않고 IT솔루션을 접목하여 온라인 맞춤형 마케팅, 사물인터넷(IoT)기술을 활용한 비대면 관리 서비스 등으로 확대해 나갈 계획입니다. 
                                    </p>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="f-100"> 자원순환 관련 규제 증가</b-td>
                                <b-td> 
                                    <p>폐기물 처리 및 방치가 심각한 글로벌 사회문제로 확산되며 국내외의 자원순환 관련 규제가 강화되고 있습니다.
                                    </p>
                                    <p>코웨이는 매출의 약 70%가 환경가전 제품에 기반하는 만큼 2006년부터 유럽의 전자 폐기물에 대항 지침(WEEE) 및 유해물질 제한 지침(EU RoHS) 등 환경 규제의 영향을 받고 있으며, 2014년 국내 환경 규제 ‘전기·전자제품 및 자동차의 자원순환에 관한 법률’ 준수 대상으로 포함됨에 따라 폐자원 회수 및 재활용의 중요성이 증가하였습니다.
                                    </p>
                                    <p>규제의 강화와 함께 구매 의사결정 시 제품 및 서비스의 사회 환경적 영향을 고려하는 윤리적 소비 주체가 증가함에 따라 자원순환에 대한 책임이 증가하고 있습니다.
                                    </p>
                                </b-td>
                                <b-td>
                                    <p>코웨이는 제품 개발부터 판매, 회수 및 재활용에 이르는 제품 전과정에 걸쳐 자원 선순환구조 확립을 위한 노력을 지속하고 있습니다.
                                    </p>
                                    <p>2014년부터 필터, 정수기, 청정기, 비데, 연수기, 음식물 처리기 등의 제품 회수 및 재활용을 추진하였으며, 2016년에는 회수 폐기물의 고형 연료화를 진행하여 99% 이상의 재활용률을 유지하고 있습니다.
                                    </p>
                                    <p>2019년에는 기존 대비 자재사용량을 00% 줄인 ‘한뼘 시루 직수 정수기’를 개발하는 등 절대적인 자원사용량을 줄이기 위한 노력을 지속하였습니다. 또한, 제품에 함유된 유해물질 및 유해폐기물을 관리하기 위해 2018년 유해물질관리경영시스템(HSPM)을 운영하여 자원순환 및 폐기물 배출 관련 리스크를 최소화하고 있습니다. 
                                    </p>
                                    <nuxt-link to="/static_page/깨끗한-물과-공기를-위한-환경경영#가치사슬전체의환경역량강화"><b-button variant="parang-text" class="px-0 py-1 f-95">가치사슬의 환경역량 강화</b-button></nuxt-link>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="f-100"> 환경가전 소비형태의 변화</b-td>
                                <b-td>
                                    <p>이커머스 시장의 성장과 함께 환경가전 제품의 구매 형태 또한 다양해지고 있습니다. 통계청 조사 결과 2019년 9월 가전·전자·통신기기의 온라인 쇼핑 거래액은 전년 동월 대비 40.8%(3,211억원) 증가를 기록하였습니다. 뿐만 아니라 온라인 해외 직구를 통한 구매율 또한 최근 2017년 대비 약76%성장하는 등 온라인 기반의 소비 문화가 빠르게 확산하고 있습니다.
                                    </p>
                                    <p> 이는 렌탈 기반의 대면 서비스를 기반으로 하는 코웨이의 시장 점유율에 상당한 리스크로 작용할 수 있습니다.
                                    </p>
                                </b-td>
                                <b-td>
                                    <p> 코웨이는 전문적이고 안정적인 서비스 네트워크를 기반으로 꾸준한 성장을 기록하고 있습니다. 
                                    </p>
                                    <p>온라인 구매로 충족하기 어려운 고객 경험을 제공하며 고객 접점에서 문제를 해결하고 가치를 높임으로써 기존 고객 유지율을 극대화하고, 신규 고객을 확대해 나가고 있습니다.
                                    </p>
                                    <p> 특히 맞춤형 고객 안심 케어 서비스는 온라인 구매와는 차별화된 고객 경험을 제공합니다.
                                    </p>
                                    <p> 한편, 이커머스의 장점을 활용하여 새로운 기회를 창출하기 위해 2019 온라인 사업을 확대하고 있습니다.
                                    </p>
                                    <p> 코웨이는 앞으로도 렌탈 서비스를 기반으로 고객 가치를 창출하기 위해 혁신을 거듭함과 함께, 전략적 온라인 진출을 통해 새로운 가치를 모색해 나갈 계획입니다.
                                    </p>
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </section>
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

export default {
    layout: 'StaticPage',
    data(){
        return {
            title: '리스크 관리',
            activated: [],
            sub_titles: [
                { 
                    title: '전사적 리스크 관리 체계'
                },
                { 
                    title: '잠재 리스크의 관리' 
                }
            ],
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
<template>
<div class="position-relative page-top-bg min-vh-100">
    <logger title="깨끗한 물과 공기를 위한 환경경영"></logger>
    <b-img src="@/assets/images/사각형17.png" fluid class="page-top-img"></b-img>

    <b-container class="">
        <b-row class="my-5 pt-md-5">
            <h1 class="mt-2 mt-lg-5 mb-3 text-center w-100 fw-400">CARE FOR ENVIRONMENT</h1>
            <p class="mb-0 mb-lg-4 text-center w-100 f-95"> 환경을 건강하게 사람을 행복하게, 내일을 디자인하는 그린 글로벌 리더 </p>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="'깨끗한 물과 공기를 위한 환경경영'"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#0b564a'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0">
                <section class="bg-blue-gray1 px-4 py-4 mb-5">
                    <div class="border-top-bottom-dark">
                        <b-row no-gutters class="px-3 pt-4">                            
                            <b-col class="col-12 col-md-4 mb-2 mb-sm-0 fw-500 green7">
                                <h1 class="mt-m-2 mb-0">01</h1>
                                <h4-ancor :title="'깨끗한 물과 공기를 위한 환경경영'" :activated="activated" class="mb-4 mb-sm-5 mt-m-2">깨끗한 물과 공기를 위한 환경경영</h4-ancor>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-4">
                            <b-col class="col-12 col-sm-4 mb-5 mb-sm-0 fw-500 green7">
                                <div class="temp-icon1"> <b-img src="@/assets/images/구성 요소8_1@2x.png" fluid class="h-100"></b-img> </div>
                            </b-col>
                            <b-col class="col-12 col-sm-8">
                                <h7 class="green7 f-120 mb-3">Business relevance & Approach</h7>
                                <p>고객에게 최종 전달되는 제품 뿐만 아니라 생산과정에서도 운영환경효율성을 갖추어야 합니다.
                                   코웨이는 유구공장, 인천공장, 포천공장 등 국내 공장에서 정수기 및 공기청정기를 연 XX 대 생산하는 생산 규모를 갖추고 있으며, 정수기 필터에 사용되는 프리 카본 필터나 포스트 카본 필터 등 관련 부품 또한 연간 XXX대를 생산합니다. 전국 배송을 위해 대형 물류센터 및 물류 네트워크 또한 운영합니다.
                                   이에 따라 자원 절약, 오염 배출, 기후변화 등 직접적인 운영 환경 효율성과 관련한 영향이 존재하며, 이를 최소화 하기 위해 최선의 노력을 다하고 있습니다.</p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark line-height-low">
                            <h7 class="green7 f-120 mb-4 w-100">Activity</h7>
                            <b-col class="col-6 col-md-3 text-center">
                                <div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img> </div>
                                <p class="fw-500 word-break px-md-2 px-xl-4 mx-xl-2">친환경 · 착한 브랜드 정립</p>
                            </b-col>
                            <b-col class="col-6 col-md-3 text-center">
                                <div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img> </div>
                                <p class="fw-500 word-break px-md-2 px-xl-4 mx-xl-2">에코 비즈니스 (Eco-Business) 구축</p>
                            </b-col>
                            <b-col class="col-6 col-md-3 text-center">
                                <div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img> </div>
                                <p class="fw-500 word-break px-md-2 px-xl-4 mx-xl-2">친환경 가치사슬 구축 및 운영</p>
                            </b-col>
                            <b-col class="col-6 col-md-3 text-center">
                                <div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img> </div>
                                <p class="fw-500 word-break px-md-2 px-xl-4 mx-xl-2">친환경 소통과 참여 확대</p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark line-height-low">
                            <b-col class="col-12 col-md-5 pr-md-4 mb-4 mb-md-0">
                                <h7 class="green7 f-120 mb-4 w-100">Business Cases</h7>
                                <b-row no-gutters> 
                                    <b-col class="col-6 text-center"><div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img></div>
                                        <p class="fw-500 word-break px-md-2 px-xl-4">Ecoway 협의체 부문 확대</p>
                                    </b-col>
                                    <b-col class="col-6 text-center"><div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img></div>
                                        <p class="fw-500 word-break px-md-2 px-xl-4">전과정 수자원 절감</p>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col class="col-12 col-md-7 position-relative pl-md-4">
                            <div class="vertical-line-1 position-absolute d-none d-md-block"></div>
                                <h7 class="green7 f-120 mb-3 w-100">Performance</h7>
                                <b-row no-gutters class="align-items-center">                                    
                                    <b-col class="col-7 pr-xl-2">
                                        <p class="fw-500 word-break">2050년까지 신재생에너지 RE100, 탄소 배출량 제로 NET ZERO 달성 </p>
                                        <p class="f-90 fw-300 word-break">(2030년 신재생 50%, 2040년 75%, 2050년 100%)</p>
                                    </b-col>
                                    <b-col class="col-5"><div class="temp-icon3 mx-auto"><b-img src="@/assets/images/구성 요소15_1.svg" fluid class="w-100"></b-img></div></b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </div>
                </section>
                <!-- End of DMA -->
                <hr class="py-2">
                <section class="mb-5">
                    <div class="d-flex mb-3 position-relative"> <h6-ancor :title="'환경경영을 통한 깨끗함의 가치 실현'" :activated="activated" class="green7 f-130 fw-500 bg-white pr-5" style="z-index:10">환경경영을 통한 깨끗함의 가치 실현 </h6-ancor><div class="horizontal-line-2 green-line position-absolute" style="z-index:8"></div></div>
                        <p class=""> 코웨이의 환경경영은 ‘착한 믿음’의 경영정신에서 시작됩니다. 또한 코웨이는 UNGC 10대 원칙을 지지하고 실천하는 데 동참하고 있습니다. 코웨이가 만드는 제품과 서비스를 통해 환경을 건강하게 사람을 행복하게 하는 것을 기업의 핵심 가치로 인식하고 이를 적극 실천하고 있습니다.
                        </p>
                        <p class="mb-45"> 코웨이는 비즈니스 운영과정에서의 환경영향을 최소화하고자 2006년부터 환경경영을 선포하면서 미션과 비전, 환경방침, 환경목표를 설정하고 환경경영위원회와 전담부서를 설치하여 전사적인 친환경 경영을 실천해 왔습니다. 2019년에는 기존 환경경영 전략에 의한 기후변화, 자원순환, 제품 친환경 설계를 계획대로 실천하며 소비자의 니즈와 사회적 요구사항을 반영하며 제품 안전성 강화에 집중하고 있습니다.
                        </p>
                    <h6-ancor :title="'코웨이 환경경영 방침'" :activated="activated" class="fw-500 gray65 mb-3 f-105">코웨이 환경경영 방침</h6-ancor>
                        <div class="row force-deflex mb-2">
                            <div class="col">
                                <div class="temp-icon4 mb-3"><b-img src="@/assets/images/74_1.svg" fluid class="h-100"></b-img></div>
                                <p class="f-90 fw-300">친환경 비즈니스에 지속적인 투자와 혁신을 통해 코웨이 지속가능성 강화와 글로벌 친환경기업 리더십을 확보한다.
                                </p>
                            </div>
                            <div class="col">
                                <div class="temp-icon4 mb-3"><b-img src="@/assets/images/75_1.svg" fluid class="h-100"></b-img></div>
                                <p class="f-90 fw-300"> 환경법규를 준수하고 선진적인 환경경영시스템을 구축하여 지속적인 환경경영 가치 창출 및 미래성장 동력을 확보한다.
                                </p>
                            </div>
                            <div class="col">
                                <div class="temp-icon4 mb-3"><b-img src="@/assets/images/76_1.svg" fluid class="h-100"></b-img></div>
                                <p class="f-90 fw-300"> 청정생산 체계를 구축하여 환경오염물질 및 온실가스 배출 감축활동 등 사전 예방활동을 통해 환경부하를 최소화하고 후손에게 쾌적한 환경을 제공한다. 
                                </p>
                            </div>
                            <div class="col">
                                <div class="temp-icon4 mb-3"><b-img src="@/assets/images/77_1.svg" fluid class="h-100"></b-img></div>
                                <p class="f-90 fw-300"> 제품 및 서비스의 전과정에 걸쳐 환경성을 고려하여 녹색 제품, 서비스 및 기술 개발을 선도한다.
                                </p>
                            </div>
                            <div class="col">
                                <div class="temp-icon4 mb-3"><b-img src="@/assets/images/78_1.svg" fluid class="h-100"></b-img></div>
                                <p class="f-90 fw-300"> 이해관계자에게 환경경영 정보를 투명하게 공개하고 지속적인 커뮤니케이션을 수행하여 지역사회의 환경보전활동에 적극 참여한다.
                                </p>
                            </div>
                        </div>
                        <div class="border-bottom-dark mb-5"></div>
                        <hr class="py-2">
                    <h6-ancor :title="'환경경영 전략'" :activated="activated" class="green6 fw-500 mb-3">환경경영 전략</h6-ancor>
                        <p> 코웨이는 고객에게 환경을 고려한 제품 및 서비스를 통해 친환경 가치를 제공하고자 노력하고 있습니다. 또한 인간과 자연(환경)을 존중하고 상호간의 밸런스를 유지하는 것을 최우선 가치로 인식하며 사회적 책임, 환경적 책임을 다하는 지속가능경영을 지속하고자 합니다. 
                        </p>
                        <p> 운영환경효율성 측면에서 코웨이의 중장기적 환경목표 핵심은 2050년까지 신재생에너지 100%와 탄소중립 달성, 2030년까지 폐기물 재활용률 100% 달성, 2050년까지 수자원 재활용률을 100% 달성하는 것입니다. 이러한 코웨이의 추진 목표의 중점은 지구 환경보전과 인간의 풍요로운 삶의 밸런스 유지, 친환경 기술과 제품, 서비스 제공을 통한 지속가능한 지구환경의 밸런스 유지 기여를 통해 지속가능한 발전 목표(SDGs, Sustainable Development Goals) 달성에 기여하는데 있습니다.
                        </p>
                </section>
                <section class="bg-blue-gray1 px-3 py-5 mb-5 text-center">
                    <h4 class="fw-600 green7 mb-3">Green Up</h4>
                    <h6 class="fw-600 green7 mb-3">환경을 건강하게 사람을 행복하게</h6>
                    <div class="mb-4 d-flex justify-content-between bg-white p-3 fw-500">
                        <div class="" style="color:#46776b;"> Cordial Life Care Science & Solution Company </div>
                        <div class="horizontal-line-2 w-25" style="margin-top:0.8em;"></div>
                        <div class="" style="color:#46776b;"> Green Global Leader</div>
                    </div>
                    <div class="position-relative mb-4" style="height:45px;"> 
                        <div class="bg-gray7 position-absolute" style="height:20px; width:3px; margin-left:49.9%; bottom:0;"></div>
                        <div class="bg-gray7 position-absolute" style="height:45px; width:1px; margin-left:50%; bottom:0;"></div>
                    </div>
                    <h6 class="fw-600 green7 mb-4">환경에 가치를 더하다</h6>
                    <div class="position-relative" style="height:45px;"> 
                        <div class="bg-gray7 position-absolute" style="height:20px; width:3px; margin-left:49.9%; bottom:0;"></div>
                        <div class="bg-gray7 position-absolute" style="height:45px; width:1px; margin-left:50%; bottom:0;"></div>
                    </div>
                    <b-row no-gutters class="border-top-bottom-dark bg-white py-4">
                        <b-col class="col-6 col-sm-3 mb-3 mb-sm-0">
                            <div class="temp-icon5 mx-auto"><b-img src="@/assets/images/18_1.svg" fluid class="h-100"></b-img></div>
                        </b-col>
                        <b-col class="col-6 col-sm-3 mb-3 mb-sm-0">
                            <div class="temp-icon5 mx-auto"><b-img src="@/assets/images/19_1.svg" fluid class="h-100"></b-img></div>
                        </b-col>
                        <b-col class="col-6 col-sm-3 mb-3 mb-sm-0">
                            <div class="temp-icon5 mx-auto"><b-img src="@/assets/images/20_1.svg" fluid class="h-100"></b-img></div>
                        </b-col>
                        <b-col class="col-6 col-sm-3 mb-3 mb-sm-0">
                            <div class="temp-icon5 mx-auto"><b-img src="@/assets/images/21_1.svg" fluid class="h-100"></b-img></div>
                        </b-col>
                    </b-row>
                    <b-row class="pt-3">
                        <b-col class="col-6 col-sm-3 mb-3 mb-sm-0">
                            <p class="mb-1 green5 fw-500">REPUTATION</p>
                            <p class="mb-0 word-break">친환경 기업 기반 구축 / 환경 브랜드 가치 극대화 </p>
                        </b-col>
                        <b-col class="col-6 col-sm-3 mb-3 mb-sm-0">
                            <p class="mb-1 green5 fw-500">RISK TAKING</p>
                            <p class="mb-0 word-break">환경 안전 Risk 사전 예방 / Eco-Value Chain 구축 및 운영 </p>
                        </b-col>
                        <b-col class="col-6 col-sm-3 mb-3 mb-sm-0">
                            <p class="mb-1 green5 fw-500">REVENUE</p>
                            <p class="mb-0 word-break">Eco-Biz 구축 및 형성 / 착한 선순환 수익 구조 확립</p>
                        </b-col>
                        <b-col class="col-6 col-sm-3 mb-3 mb-sm-0">
                            <p class="mb-1 green5 fw-500">COMMUNICATION</p>
                            <p class="mb-0 word-break">친환경 소통과 참여 확대 / Eco-DNA 내재화 </p>
                        </b-col>
                    </b-row>
                </section>
                <hr class="py-1">
                <h6-ancor :title="'환경경영 추진 체계'" :activated="activated" class="mb-3 green6">환경경영 추진 체계</h6-ancor>
                    <p> 코웨이는 전사 영역에서의 환경경영 실천을 위해 환경경영위원회를 운영하고 있습니다. 환경경영위원회는 TQA센터 본부장을 환경경영 최고 책임자로 임명하여 운영하고 있으며, 환경경영팀을 중심으로 환경 전략을 추진하고 있습니다. 전사적인 환경경영 내재화를 위해 각 부문에서 참여하는 협의체로 ‘Ecoway 협의체’를 구성하여 정기적으로 환경 관련 이슈를 논의하고 있습니다. 
                    </p>
                    <p> 2019년 Ecoway 협의체에서는 전사적인 환경경영과 관련한 주요 지표 4개 항목(기후변화, 자원순환, 친환경설계, 화학물질 안전성 평가)에 대한 운영활동 및 성과보고가 있었습니다. 첫째로 온실가스 대응 부문에서는 중장기 목표 수립 및 공개, 감축 투자안의 설정이 논의되었습니다(링크: 기후변화 대응). 자원순환 대응 부문에서는 전 사업 과정의 폐기물 발생 실적과 비용, 폐기물 개선 활동이 논의되었으며, 친환경 설계 부문에서는 냉매 전환, 에너지 소비효율 현황 및 분석이 주요 아젠다로 보고되었습니다. 마지막으로 제품환경 및 화학물질관리 안전성 평가 부문에서 제품화학물질관리시스템(CSMS)의 운영 개선 방안과 규제 네트워크 구축 활동 및 향후 계획이 보고되었습니다.
                    </p>
                <hr class="py-1 mb-5">
                <section class="mb-5">
                    <div class="d-flex mb-3 position-relative"> <h6-ancor :title="'가치사슬 전체의 환경역량 강화'" :activated="activated" class="green7 f-130 fw-500 bg-white pr-5" style="z-index:10">가치사슬 전체의 환경역량 강화</h6-ancor><div class="horizontal-line-2 green-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-45"> 코웨이는 지속 강화되어 가는 제품환경규제 및 안전성 대응을 위해 코웨이 전직원 및 협력사 대상으로 매년 오프라인 교육 프로그램을 제공 및 수시 온라인 지도, 지원을 실시하고 있습니다. “Global 환경규제 동향”, “기업의 환경규제 대응”, “환경규제 대응 방법론” 등 실질적이고 지속적인 도움을 제공함으로서 규제 대응력 강화 및 risk 제로 실행에 목표를 두고 있습니다. 2019년 사내 담당자 390명 및 협력사 77개사 담당자 대상으로 교육 실시를 완료하였습니다. 추가로 교육 내용 및 업무 활용에서 90%이상의 협력사로부터 우수하고 업무 적용 가능한 것으로 평가받았습니다.
                        </p>
                    <h7 class="mb-3 gray63">내/외부 교육 지원 현황</h7>
                        <b-table-simple responsive class="txt-table env-table">
                            <b-thead><b-tr>
                                <b-td class="text-left">교육 프로그램</b-td> <b-td class="text-left">교육대상</b-td> <b-td class="text-left w-25">교육내용</b-td><b-td>참가인원</b-td> <b-td>교육시간</b-td> <b-td>교육기간</b-td> 
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">친환경 내부 실무자 역량 향상 과정</b-td> <b-td class="text-left">임직원</b-td> <b-td class="text-left">환경규제대응 인식제고</b-td> <b-td>390명</b-td> <b-td>총 1,560시간<br>(인당 4시간)</b-td> <b-td>11일</b-td>
                                </b-tr>
                                <b-tr>
                                       <b-td rowspan="2" class="text-left">친환경 외부 실무자 역량 강화 과정</b-td> <b-td rowspan="2" class="text-left">협력사 환경 담당자</b-td> <b-td class="text-left pr-2">코웨이 유해화학물질 요구사항 및 대응방법</b-td> <b-td>77명</b-td> <b-td>총 616시간<br>(인당 8시간)</b-td> <b-td>2일</b-td>
                                </b-tr>
                                <b-tr>
                                        <b-td class="text-left">에너지 고효율화 개선 방안</b-td><b-td>10명</b-td> <b-td>총 40시간<br>(인당 4시간)</b-td> <b-td>5일</b-td> 
                                </b-tr>
                            </b-tbody> 
                        </b-table-simple>    
                </section>
                                        
            </b-container>
            </b-col>
        </b-row>
        <hr class="space-p75 mb-5">   
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
            title: '깨끗한 물과 공기를 위한 환경경영',
            activated: [],
            sub_titles: [
                { 
                    title: '환경경영을 통한 깨끗함의 가치 실현', 
                    child: [
                        { title: '코웨이 환경경영 방침' }, 
                        { title: '환경경영 전략' }, 
                        { title: '환경경영 추진 체계' }, 
                    ]
                },
                { 
                    title: '가치사슬 전체의 환경역량 강화' 
                }
            ],
            // active_color:{
            //     color: '#2d9155'
            // }
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

<style lang="scss">
/* .page-top-bg {
    background-image: url(../../assets/images/사각형17.png);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;    
} */



</style>
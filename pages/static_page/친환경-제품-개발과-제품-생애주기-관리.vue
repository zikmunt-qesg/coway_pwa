<template>
<div class="position-relative page-top-bg min-vh-100">   
    <logger title="친환경 제품 개발과 제품 생애주기 관리"></logger>
    <b-img src="@/assets/images/500.png" fluid class="page-top-img"></b-img>

    <b-container class="">
        <b-row class="my-5 pt-md-5">
            <h1 class="mt-2 mt-lg-5 mb-3 text-center w-100 fw-400">CARE FOR ENVIRONMENT</h1>
            <p class="mb-0 mb-lg-4 text-center w-100 f-95"> 환경을 건강하게 사람을 행복하게, 내일을 디자인하는 그린 글로벌 리더 </p>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="'친환경 제품 개발과 제품 생애주기 관리'"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#216a5a'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0">
                <section class="bg-blue-gray1 px-4 py-4 mb-5">
                    <div class="border-top-bottom-dark">
                        <b-row no-gutters class="px-3 pt-4">                            
                            <b-col class="col-12 col-md-4 mb-2 mb-sm-0 fw-500 green7">
                                <h1 class="mt-m-2 mb-0">02</h1>
                                <h4-ancor :title="'친환경 제품 개발과 제품 생애주기 관리'" :activated="activated" class="mb-4 mb-sm-5 mt-m-2">친환경 제품 개발과 제품 생애주기 관리</h4-ancor>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-4">
                            <b-col class="col-12 col-sm-4 mb-5 mb-sm-0 fw-500 green7">
                                <div class="temp-icon1"> <b-img src="@/assets/images/구성 요소8_1@2x.png" fluid class="h-100"></b-img> </div>
                            </b-col>
                            <b-col class="col-12 col-sm-8">
                                <h7 class="green7 f-120 mb-3">Business relevance & Approach</h7>
                                <p> 코웨이는 생활환경가전 기업으로 정수기, 공기청정기 등 고객의 생활을 편리하게 하고 깨끗한 물과 공기를 전달하는 가전제품을 직접 생산합니다. 공기청정기 시장은 2010년 100만대에서 2020년 약 250만대 시장으로 성장하였습니다. 소비자의 환경 친화적 제품에 대한 관심은 녹색 소비로 이어지고 있습니다. 환경부 조사 결과에 따르면, 제품을 생산, 소비, 폐기하는 전 과정에서 에너지와 자원의 소비를 줄이고 오염물질을 최소화 하는 제품과 서비스의 제품 매출은 지난 4년간 평균 20.1% 증가하였습니다.
                                </p>
                                <p> 코웨이는 친환경 제품 설계, 전과정 평가를 통한 제품 책임 강화, 자원효율성의 향상 등 제품설계 및 라이프사이클 관리 부문에서 보다 우수한 제품을 생산하여 날로 악화되는 물과 공기로부터 인간을 보호하고, 보다 친환경적인 가치를 고객에 전달할 수 있도록 친환경 제품과 서비스에 최선을 다하겠습니다.
                                </p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark line-height-low">
                            <h7 class="green7 f-120 mb-4 w-100">Activity</h7>
                            <b-col class="col-0 col-md-1"></b-col>
                            <b-col class="col-6 col-md-5 text-center">
                                <div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img> </div>
                                <p class="fw-500 word-break px-md-2 px-lg-5 mx-xl-2">친환경 · 착한 브랜드 정립</p>
                            </b-col>
                            <b-col class="col-6 col-md-5 text-center">
                                <div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img> </div>
                                <p class="fw-500 word-break px-md-2 px-lg-5 mx-xl-2">전과정 친환경 경영을 통한 자원효율성 향상과 순환경제 구현</p>
                            </b-col>
                            <b-col class="col-0 col-md-1"></b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark line-height-low">
                            <b-col class="col-12 col-md-4 pr-md-4 mb-4 mb-md-0 text-center">
                                <h7 class="green7 f-120 mb-4 w-100 text-left">Business Cases</h7>
                                <div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img></div>
                                <p class="fw-500 word-break px-md-2 px-xl-4">냉매 회수 및 재활용, 리퍼브 판매 확대</p>                                   
                            </b-col>
                            <b-col class="col-12 col-md-8 position-relative pl-md-4">
                            <div class="vertical-line-1 position-absolute d-none d-md-block"></div>
                                <h7 class="green7 f-120 mb-3 w-100">Performance</h7>
                                <b-row no-gutters class="align-items-center mb-3 pb-1">                                    
                                    <b-col class="col-6 text-center">                   
                                        <span class="f-330 fw-400">6,125</span><span class="f-130 fw-500">대</span>                
                                    </b-col>
                                    <b-col class="col-6 text-center">
                                        <span class="f-330 fw-400">100</span><span class="f-130 fw-500">%</span>   
                                    </b-col>
                                </b-row>
                                <b-row no-gutters class="align-items-start">                                    
                                    <b-col class="col-6 text-center">                   
                                        <p class="fw-500 word-break font-noto">2019년 리퍼브 제품 판매량 <br>(2020년 10,000대 달성 목표) </p>
                                    </b-col>
                                    <b-col class="col-6 text-center">
                                        <p class="fw-500 word-break font-noto">2019년 회수 냉매 재활용률</p>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </div>
                </section>
                <!-- End of DMA -->
                <hr class="py-2">
                <div class="d-flex mb-3 position-relative"> <h6-ancor :title="'친환경 제품 개발과 제품 생애주기 관리'" :activated="activated" class="green7 f-130 fw-500 bg-white pr-5" style="z-index:10">친환경 제품 개발과 제품 생애주기 관리</h6-ancor><div class="horizontal-line-2 green-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-5"> 코웨이는 친환경적 제품과 서비스, 비즈니스를 설계합니다. 제품개발 프로세스, 청정생산, 렌탈 서비스, 회수 및 재활용 절차에 이르는 전 과정에서 화학물질 안전성 확보, 에너지 고효율 달성 및 탄소배출 저감, 생활환경 개선, 자원사용 저감 및 재활용성 증가에 이르기까지 전 과정에서 부정적 영향을 감소시키고 긍정적 영향은 확대하기 위한 위한 다양한 활동을 전개하고 있습니다.
                    </p>
                    <b-img src="@/assets/images/72_1.svg" fluid class="w-100"></b-img>
                    <hr class="mb-3">

                    <h6-ancor :title="'전과정 평가와 제품 책임'" :activated="activated" class="fw-500 green5 mb-3 f-105">전과정 평가와 제품 책임</h6-ancor>
                    <p class="mb-5"> 코웨이는 제품이 환경에 미치는 영향을 정량적으로 평가하고 제품 개발에 반영하기 위하여 전 과정평가를 시행합니다. ISO14040 표준에 따른 전과정평가 중 간략 LCA(Simplified LCA) 기법을 이용하고 있습니다. 이전에는 탄소발자국과 같은 한정된 분야에서만 LCA가 진행되었으나, 2020년부터는 정수기, 공기 청정기 제품에 대하여 1개 모델을 선정하여 자원발자국, 탄소발자국, 오존층영향, 산성비, 부영향화, 광화학적 스모그, 물발자국의 7대 영향 범주를 반영한 전과정평가를 실시할 예정입니다.
                    </p>
                    <h6-ancor :title="'친환경 제품 인증 획득'" :activated="activated" class="fw-500 green5 mb-3 f-105">친환경 제품 인증 획득</h6-ancor>
                    <p class="mb-45">코웨이는 탄소성적표지, 환경마크 인증 제도 등을 통해 소비자에게 제품의 환경성 개선 정보를 지속적으로 제공하고 있습니다.
                    </p>
                    <b-table-simple responsive class="txt-table env-table">
                        <b-thead><b-tr>
                            <b-td class="text-left">인증</b-td> <b-td>2016</b-td><b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td> 
                        </b-tr></b-thead>
                        <b-tbody>
                            <b-tr>
                                <b-td class="text-left">환경마크 인증</b-td> <b-td>17</b-td> <b-td>31</b-td> <b-td>25</b-td> <b-td>22</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="text-left">물발자국</b-td> <b-td>-</b-td> <b-td>1</b-td> <b-td>1</b-td> <b-td>1</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="text-left">탄소중립제품 인증</b-td><b-td>-</b-td> <b-td>1</b-td> <b-td>1</b-td> <b-td>0</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="text-left">Carbon Balloon</b-td><b-td>2</b-td> <b-td>2</b-td> <b-td>2</b-td> <b-td>0</b-td>
                            </b-tr>
                        </b-tbody> 
                    </b-table-simple>
                    <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-45">
                        <li>해당 연도에 인증이 유효한 친환경 제품의 누적 개수 (매트리스 포함)</li>
                        <li>물 발자국: 제품 및 서비스의 원재료 취득·생산·유통·폐기 등 모든 과정에서 직·간접적으로 사용되는 물의 총량을 합산해 환경영향을 수치화한 것으로 국제표준기구의 검증 기준인 ISO14046의 요구조건에 의해 검증됨</li>
                        <li>탄소중립제품 인증: 제품의 생산·유통·사용·폐기까지 이르는 전 과정에서 발생하는 온실가스 배출량에 상응하는 탄소배출권을 구매하거나 온실가스 감축활동을 통해 탄소배출량을 제로(0)로 만든 제품에게 주어지는 인증</li>
                        <li>Carbon Balloon: 탄소성적표지는 대한민국 인증기준에 의해 제품 전 과정의 환경영향을 탄소로 계산하지만 Carbon Balloon은 보다 엄격한 ISO14044 & PAS2050의 기준에 의해 전 과정 배출량을 계산하여 인증받는 국제 탄소성적표지 인증</li>
                    </ol>
                    
                    <h7 class="mb-3 gray63">친환경제품 매출 현황 <span class="f-80 fw-300"> (단위: 억 원)</span></h7>
                    <b-table-simple responsive class="txt-table env-table mb-5">
                        <b-thead><b-tr>
                            <b-td class="text-left">구분</b-td> <b-td>2016</b-td><b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td> 
                        </b-tr></b-thead>
                        <b-tbody>
                            <b-tr>
                                <b-td class="text-left">친환경 제품 매출</b-td> <b-td>7,025</b-td> <b-td>6,858</b-td> <b-td>5,869</b-td> <b-td>5,529</b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                    <h6-ancor :title="'화학물질 관리 체계 강화'" :activated="activated" class="fw-500 green5 mb-3 f-105">화학물질 관리 체계 강화</h6-ancor>
                    <p class="mb-3"> 코웨이는 글로벌 품질, 환경경영시스템의 기본 구조와 개념을 도입하였으며, 인증을 취득하여 계획, 실행, 검토, 지속적 개선의 사이클을 통해 화학물질 관리를 강화하고 있습니다. 화학물질 사전 규제 모니터링 체계 구축을 통해 사전 모니터링 및 분석된 규제 정보를 화학물질관리시스템(CSMS)과 연계하여 제품 기획 단계부터 반영 및 규제 대응이 완료된 제·부품이 개발될 수 있도록 대응력을 강화하였습니다.
                    </p>
                    <p class="mb-5">사전 규제 대응 체계 강화로 RoHSⅡ 프탈레이트 규제에 대해 규제 시행 전 사전 대응 완료를 진행하였으며 지속 관리하고 있는 식품 접촉 물질에 대한 ‘식품용 기구 및 용기포장 기준’ 및 항균/살균 부품/물질에 대한 국내·외 살생물제법 기준에 맞춰 관리 및 검증을 강화하였습니다.
                    </p>
                    <div class="row force-deflex pb-3 border-bottom-dark">
                        <b-col class="custom-ul-li">
                            <div class="temp-icon9 mb-2 mb-md-3"><b-img src="@/assets/images/23_1.svg" fluid class="h-100"></b-img></div>
                            <ul class="f-90 fw-300 mb-3 mb-md-0">
                                <li>모든 부품에 대해 EU·X-RoHS 기준을 적용하여 적합성을 검증</li>
                                <li>전 제품의 적합성을 내부적으로 검증하기 위해 K-RoHS 대응을 확대하여 서비스 부품 코드 100% 등록</li>
                            </ul>
                        </b-col>
                        <b-col class="custom-ul-li position-relative">
                        <div class="vertical-line-dotted position-absolute d-none d-md-block"></div>
                            <div class="temp-icon9 mb-2 mb-md-3"><b-img src="@/assets/images/24_1.svg" fluid class="h-100"></b-img></div>
                            <ul class="f-90 fw-300 mb-3 mb-md-0">
                                <li>사업장 내 화학물질 사용 현황을 파악 및 점검하기 위한 관련 데이터 베이스(DB) 구축</li>
                                <li>국내·외 규제 및 법규와 관련된 DB 구축</li>
                            </ul>
                        </b-col>
                        <b-col class="custom-ul-li position-relative">
                        <div class="vertical-line-dotted position-absolute d-none d-md-block"></div>
                            <div class="temp-icon9 mb-2 mb-md-3"><b-img src="@/assets/images/25_1.svg" fluid class="h-100"></b-img></div>
                            <ul class="f-90 fw-300 mb-3 mb-md-0">
                                <li>화학물질관리를 제품 단위로 확대</li>
                                <li>글로벌 환경 규제 및 고객사의 화학물질 사용 관련 요구 적극 대응</li>
                            </ul>
                        </b-col>
                        <b-col class="custom-ul-li position-relative">
                        <div class="vertical-line-dotted position-absolute d-none d-md-block"></div>
                            <div class="temp-icon9 mb-2 mb-md-3"><b-img src="@/assets/images/26_1.svg" fluid class="h-100"></b-img></div>
                            <ul class="f-90 fw-300 mb-3 mb-md-0">
                                <li>국가별 법규·규제 강화 및 관리범위 확대에 따라 법규관리 영역을 전기·전자 제품에서 식품·위생 안전까지 확대</li>
                            </ul>
                        </b-col>
                        <b-col class="custom-ul-li position-relative">
                        <div class="vertical-line-dotted position-absolute d-none d-md-block"></div>
                            <div class="temp-icon9 mb-2 mb-md-3"><b-img src="@/assets/images/26_1.svg" fluid class="h-100"></b-img></div>
                            <ul class="f-90 fw-300 mb-3 mb-md-0">
                                <li>화학물질 사전 규제 모니터링 체계 구축에 따라 사전 규제 대응력 강화</li>
                                <li>전 제·부품에 대한 RoHSⅡ프탈레이트 규제 사전 대응 및 적합성 검증</li>
                            </ul>
                        </b-col>
                    </div>
                    <hr class="mb-5">
                    <b-img src="@/assets/images/28_1.svg" fluid class="w-100"></b-img>
                    <hr class="space-25">
                    <h6-ancor :title="'자원효율성 향상과 순환경제 지원'" :activated="activated" class="fw-500 green5 mb-3 f-105">자원효율성 향상과 순환경제 지원</h6-ancor>
                    
                    <h7 class="mb-3 gray63">자원효율성 KPI</h7>
                    <b-row no-gutters class="py-5 mb-45 border-top-bottom-dark">
                        <b-col class="col-12 col-md-4 px-md-3 position-relative"><b-img src="@/assets/images/29_1.svg" fluid class="h-100"></b-img></b-col>
                        <b-col class="col-12 col-md-4 px-md-3 position-relative"><div class="vertical-line-dotted position-absolute d-none d-md-block"></div>
                            <b-img src="@/assets/images/30_1.svg" fluid class="h-100"></b-img></b-col>
                        <b-col class="col-12 col-md-4 px-md-3 position-relative"><div class="vertical-line-dotted position-absolute d-none d-md-block"></div>
                            <b-img src="@/assets/images/31_1.svg" fluid class="h-100"></b-img></b-col>
                    </b-row>
                    <p class="mb-5">코웨이는 위기에 처한 환경을 보호하고 자원의 낭비를 막고자, 새로운 개념인 순환경제에 초점을 맞추어 활동을 펼치고 있습니다. 코웨이는 자원을 한 번만 쓰고 버리는 기존의 방식을 넘어, 제품이 사용된 후에도 회수와 물질 재활용을 통해 지속적으로 자원이 다시 사용될 수 있도록 많은 노력을 쏟고 있습니다. 리퍼브 제도 운영, 제·부품 물질 재활용, 매립 zero화, 전 과정에서 발생한 폐기물을 폐기물에너지화 하는 등 이러한 순환경제시스템을 통해 폐기물 소각으로 인해 발생하는 온실가스와 오염물질을 감소시키며, 매립으로 인한 토양 및 지하수 오염도 방지하고 있습니다.
                    </p>
                    <hr class="py-2">                   
                
                    <h7 class="mb-3 gray63">코웨이 자원순환 사이클</h7>
                    <b-img src="@/assets/images/32_1.svg" fluid class="w-100"></b-img>
                    <hr class="space-25">                   
                    <p class="mb-3"> 코웨이는 한 번쓰고 폐기하는 기존의 자원소비구조에서 자원순환사회 구축 전환을 위한 다양한 활동을 추진하고 있습니다. 신제품 개발시 대당 재활용율이 75% 이상을 만족하는지 여부를 점검하고 있으며, 만약 75%이하로 산정되면 재활용 가능한 소재로 대체하거나 실제 재활용공정에서 재활용가능한지 여부를 사전에 면밀히 검토하는 등 제품군별 재활용율 향상을 위해 노력하고 있습니다. 
                    </p>
                    <p class="mb-3"> 또한, 코웨이는 비즈니스 전 영역에서 발생하는 폐기물에 대한 정량화 관리를 통해 재활용 확대, 폐기물 제로화, 발생 비용을 최소화하기 위해 노력과 활동을 지속적으로 하고 있습니다. 특히 사업장, 서비스 폐기물은 99%이상 생활 폐기물에너지화(RDF, Refuse Derived Fuel)처리를 통해 폐기물 제로화를 추진하고 있습니다. 코웨이가 제조하는 생활환경가전은 음융, 흡입 등 고객의 안전과 건강에 밀접한 관련이 있어 현재는 재활용 원료를 적용하고 있지는 않지만, 향후에는 재생원료 사용이 가능한 부품을 검토하여 적용 예정입니다.
                    </p>
                    <p class="mb-5"> 코웨이는 한 번 사용된 제품을 다시 재생하여 사용하여 순환경제에 이바지하고 있습니다. 2007년 렌탈 가전 업계 최초로 리퍼브 제도를 도입하여, 내부적으로는 렌탈 폐기 절감과 외부적으로는 가격 경쟁력 모델 운영 및 자원재활용을 통한 가치를 창출하고 있습니다. 리퍼브 제품은 정상가 대비 평균 렌탈료 기준 20% 할인된 가격으로 판매되며, 19에는 전체 판매량의 0.4% 차지합니다.  향후에는 리퍼브 제품군 판매 활성화 및 고객 인식 제고를 위해 자원재활용, 친환경, 착한소비 컨셉에 부합되는 메시지를 전달하여 고객과 커뮤니케이션을 추진할 계획입니다.
                    </p>

                    <hr class="py-2">
                    <h6-ancor :title="'냉매 회수 및 재활용'" :activated="activated" class="fw-500 green5 mb-3 f-105">냉매 회수 및 재활용</h6-ancor>
                    <p class="mb-5"> 코웨이는 냉매로 인한 환경오염을 최소화하고자 제품에 사용되는 냉매를 친환경 냉매로 전환하고 있습니다. 아울러 기존 제품에 사용된 냉매(R-134a)를 제품 폐기시 회수하여 환경부가 지정한 업체를 통해 안전하게 처리하고 있습니다. 코웨이는 2018년이후 냉매·오일 회수 및 재활용을 1곳에서 2곳으로 확대하여 운영하였으며, 재활용사업자가 정수기 및 제습기 냉매·오일 회수 및 재활용 진행시 적법한 관리 및 운영에 대해 지속적으로 모니터링을 진행하고 있습니다. 2019년에는 약 6.1톤의 냉매를 회수하여 재활용하였습니다.
                    </p>
                    <hr class="py-2">

                    <h6-ancor :title="'리퍼브 제도'" :activated="activated" class="fw-500 green5 mb-3 f-105">리퍼브 제도</h6-ancor>
                    <p class="mb-5"> 리퍼브 제품은 소비자 변심으로 반품되었거나 매장에 진열되었던 제품을 재가공하여 저렴한 가격으로 다시 판매하는 재포장제품을 의미합니다. 부품 교체, 철저한 성능 테스트 등을 거쳐 품질은 새 제품과 동일하면서 환경보호에 기여하고 있습니다. 향후에는 코웨이만의 차별화된 리퍼브 제품군 커뮤니케이션을 통해 고객으로 하여금 ‘의식 있는 소비’를 유도할 예정이며, 제품군 확대 및 제품 가격 경쟁력 확보로 판매 활성화를 위해 노력할 예정입니다.
                    </p>
                    <b-img src="@/assets/images/33_1@3x.png" fluid class="w-100"></b-img>
                    <hr class="mb-2">
                    <b-row no-gutters>
                        <b-col class="col-12 col-sm-7"><b-img src="@/assets/images/36_1.svg" fluid style="width: 88%;"></b-img></b-col>
                        <b-col class="col-12 col-sm-5"><b-img src="@/assets/images/35_1.svg" fluid class="w-100"></b-img></b-col>
                    </b-row>
                    
                    <h6-ancor :title="'전과정 수자원 사용량 절감 '" :activated="activated" class="fw-500 green5 mb-3 f-105">전과정 수자원 사용량 절감 </h6-ancor>
                    <p class="mb-5"> 물은 중요한 자원입니다. 물 사용 제조 공정 개선 및 워터리스 테스트 시스템 도입 등을 통해 물 사용량을 지속적으로 관리하고 있습니다.
                    </p>

                    <h7 class="mb-3 gray63">수자원 사용량</h7>
                        <b-table-simple responsive class="num-table env-table f-95">
                            <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td> <b-td class="text-left">단위</b-td> <b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td> 
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">공업용수</b-td><b-td rowspan="5" class="text-left">톤</b-td> <b-td>0</b-td> <b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">지하수</b-td>    <b-td>26,084</b-td> <b-td>21,962</b-td><b-td>29,904</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">표층수</b-td>    <b-td>45,901</b-td> <b-td>49,385</b-td><b-td>60,519</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">수자원 사용 총량</b-td>    <b-td>71,985</b-td> <b-td>71,347</b-td><b-td>90,423</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">폐수 배출량</b-td>    <b-td>0</b-td> <b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">수자원 사용 원단위</b-td><b-td class="text-left">톤/억 원</b-td> <b-td>3.102</b-td> <b-td>2.987</b-td><b-td>3.573</b-td>
                                </b-tr>
                            </b-tbody> 
                        </b-table-simple>
                        <p class="f-80 ml-1 mb-5">* 2019년도 데이터는 외부 검증 전의 수치임</p>
                        <h7 class="mb-3 gray63">사업장별 수자원 사용량 <span class="f-80 fw-300"> (단위: 톤)</span></h7>
                        <b-table-simple responsive class="num-table env-table f-95">
                            <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td> <b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td> 
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">유구공장</b-td> <b-td>37,879</b-td> <b-td>34,501</b-td><b-td>44,357</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">인천공장</b-td><b-td>6,482</b-td> <b-td>4,401</b-td><b-td>5,725</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">포천공장</b-td> <b-td>134</b-td> <b-td>594</b-td><b-td>1,771</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">환경기술연구소(R&D센터)</b-td> <b-td>22,597</b-td> <b-td>26,045</b-td><b-td>33,183</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">물류센터(유구)</b-td><b-td>4,893</b-td> <b-td>5,806</b-td><b-td>5,387</b-td>
                                </b-tr>
                            </b-tbody> 
                        </b-table-simple>
                        <p class="f-80 ml-1 mb-5">* 2019년도 데이터는 외부 검증 전의 수치임</p>


            </b-container>
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
            title: '친환경 제품 개발과 제품 생애주기 관리',
            activated: [],
            sub_titles: [
                { 
                    title: '친환경 제품과 서비스, 비즈니스 설계', 
                    child: [
                        { title: '전과정 평가와 제품 책임' }, 
                        { title: '친환경 제품 인증 획득' }, 
                        { title: '화학물질 관리 체계 강화' }, 
                    ]
                },
                { 
                    title: '자원효율성 향상과 순환경제 지원',
                    child: [
                        { title: '냉매 회수 및 재활용' }, 
                        { title: '리퍼브 제도' }, 
                        { title: '전과정 수자원 사용량 절감' }, 
                    ]
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
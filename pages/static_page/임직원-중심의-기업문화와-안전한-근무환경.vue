<template>
<div class="position-relative page-top-bg min-vh-100">   
    <logger title="임직원 중심의 기업문화와 안전한 근무환경"></logger>
    <b-img src="@/assets/images/사각형17.png" fluid class="page-top-img"></b-img>

    <b-container class="">
        <b-row class="my-5 pt-md-5">
            <h1 class="mt-2 mt-lg-5 mb-3 text-center w-100 fw-400">CARE FOR SOCIETY</h1>
            <h7 class="mb-lg-5 text-center w-100 fw-400"> dummy text 환경을 건강하게 사람을 행복하게, 내일을 디자인하는 그린 글로벌 리더 </h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 side-nav position-relative">
                <side-navigation 
                :main_title="'임직원 중심의 기업문화와 안전한 근무환경'"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#8e6627'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0">
                <section class="bg-blue-gray1 px-4 py-4 mb-5">
                    <div class="border-top-bottom-bold">
                        <b-row no-gutters class="px-3 pt-4">                            
                            <b-col class="col-12 col-sm-4 mb-2 mb-sm-0 fw-500 gold8">
                                <h1 class="mt-m-2 mb-0">01</h1>
                                <h4-ancor :title="'임직원 중심의 기업문화와 안전한 근무환경'" :activated="activated" class="mb-4 mb-sm-5 mt-m-2">임직원 중심의 기업문화와 안전한 근무환경</h4-ancor>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 pb-4 mb-5 mb-sm-0">  
                            <b-col class="col-12 col-sm-4">
                                <div class="temp-icon1"> <b-img src="@/assets/images/구성 요소8_1@2x.png" fluid class="h-100"></b-img> </div>
                            </b-col>
                            <b-col class="col-12 col-sm-8 pr-2">
                                <h7 class="gold6 mb-3">Business relevance & Approach</h7>
                                <p>임직원이 자유롭게 역량을 발휘할 수 있는 기업문화는 기업 경쟁력을 유지하기 위해 매우 중요한 요소입니다. 코웨이는 투명하고 공정한 채용 과정을 통해 우수 인재를 선발하고, 체계화된 교육 프로그램을 운영하여 임직원이 자발적으로 역량을 개발할 수 있도록 지원합니다. 또한 임직원과의 적극적인 커뮤니케이션을 기반으로 수평적으로 소통하는 기업문화를 조성하여 자율적인 업무역량 발휘는 물론 일과 삶의 균형을 추구하는 인재 경영을 실천하고 있습니다. 
                                </p>
                                <p>또한, 사람 중심의 기업문화에 기반하여 안전한 업무 환경을 조성하고 근로자의 질병 및 재해를 최소화하기 위해 안전보건 경영을 추진합니다. 산업안전보건위원회를 기반으로 안전보건 시스템을 마련하고, 국내 전 공장에 통합적인 안전보건 시스템을 운영하고 있습니다.
                                </p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-bold">
                            <h7 class="gold6 mb-4 w-100">Activity</h7>
                            <b-col class="col-6 col-md-4 text-center fw-500">
                                <div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img> </div>
                                <p>STEP 제도 기반의 <br>역량 강화</p>
                            </b-col>
                            <b-col class="col-6 col-md-4 text-center fw-500">
                                <div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img> </div>
                                <p>노사협의회 운영을<br>통한 정기적 소통</p>
                            </b-col>
                            <b-col class="col-6 col-md-4 text-center fw-500">
                                <div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img> </div>
                                <p>산업안전보건<br>위원회 운영</p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-bold">
                            <b-col class="col-12 col-md-5 pr-md-4 mb-4 mb-md-0">
                                <h7 class="gold6 mb-4 w-100">Business Cases</h7>
                                <b-row no-gutters> 
                                    <b-col class="col-5 text-center fw-500 px-lg-2"><div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img></div>
                                        <p class="word-break">디지털 기반의 업무 혁신 지원</p>
                                    </b-col>
                                    <b-col class="col-7 text-center fw-500"><div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img></div>
                                        <p class="word-break"><span style="word-break: normal;">코로나바이러스감염증<span class="fw-600">-19</span></span> (COVID<span class="fw-600">-19</span>) 확산 방지 및 예방을 위한 노력</p>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col class="col-12 col-md-7">
                                <h7 class="gold6 mb-3 w-100 pl-md-4">Performance</h7>
                                <b-row no-gutters class="pl-md-4 position-relative"> 
                                    <div class="vertical-line-1 position-absolute d-none d-md-block"></div>
                                    <b-row no-gutters class="w-100">
                                        <b-col class="col-3 text-center px-2">
                                            <p class="fw-500 line-height-low word-break"><span class="fw-600">2019</span>년 임직원 만족도</p>
                                        </b-col>
                                        <b-col class="col-4 text-center px-2">
                                            <p class="fw-500 line-height-low word-break"><span class="fw-600">2019</span>년 임직원 고충 연내 처리율</p>
                                        </b-col>
                                        <b-col class="col-5 text-center">
                                            <p class="fw-500 line-height-low word-break"><span class="fw-600">2019</span>년 협력사 합동 안전실태 점검을 통한 안전환경 개선율</p>
                                        </b-col>
                                    </b-row>
                                    <b-row no-gutters class="w-100">
                                        <b-col class="col-3 text-center"><span class="f-330 fw-400">00</span>점 </b-col>
                                        <b-col class="col-4 text-center"><span class="f-330 fw-400">100</span>% </b-col>
                                        <b-col class="col-5 text-center"><span class="f-330 fw-400">100</span>% </b-col>
                                    </b-row>
                                </b-row>
                            </b-col>                            
                        </b-row>
                    </div>
                </section>
                <section class="mb-5">
                    <p class="mb-5"> 코웨이는 기업의 미래가치는 인재로부터 비롯된다는 원칙을 기반으로 공정성, 일과 삶의 균형, 착한 성장 중심 인재 경영을 실천하고 있습니다. 코웨이는 모든 임직원이 공정한 기회를 토대로 자신의 역량을 개발하고 그에 대한 성과를 보상받을 수 있도록 다방면의 지원 체계를 구축하고 있습니다. 투명하고 공정한 채용 프로세스를 기반으로 인재상에 부합하는 인재를 채용하며, 임직원들이 자신의 역량을 적극적으로 개발할 수 있도록 STEP(Self Teaching & Education Plan)제도 기반의 다양한 학습 기회를 제공합니다. 또한, 소통과 참여 기반의 기업문화를 조성하여 임직원이 일과 삶의 균형을 이룰 수 있는 환경을 제공하고 있습니다. 
                    </p>
                    <div class="mx-auto text-center" style="height:288px; width:100%"><b-img src="@/assets/images/구성 요소4_1.svg" fluid class="h-100"></b-img></div>
                    
                    <hr class="mb-45">
                    <h6-ancor :title="`'착한성장'을 위한 역량 강화`" :activated="activated" class="fw-500 gold7 mb-3">'착한성장'을 위한 역량 강화</h6-ancor>
                        <p class="mb-5"> 코웨이는 STEP(Self Teaching & Education Plan) 제도를 기반으로 임직원의 성장을 지원합니다. STEP은 임직원 필수 교육제도로 수료 여부를 승진 평가에 반영할 정도로 엄격하게 관리하고 있습니다. STEP 제도는 리더십 교육, 직무 교육, 온보딩 교육, 법정필수 교육으로 구성되어 있습니다. 2020년에는 임직원의 리더십 역량을 강화하고, 비즈니스 변화에 부합하는 직무 역량을 향상할 수 있도록 교육을 강화할 예정입니다. 
                        </p>
                        <b-img src="@/assets/images/구성 요소11_1.svg" fluid class="w-100"></b-img>
                    <hr class="mb-45">
                    <h6-ancor :title="'리더십 교육'" :activated="activated" class="gold6 fw-500 mb-3 f-110">리더십 교육</h6-ancor>
                        <p class="mb-45"> 미래를 선도하는 리더를 육성하고 직책에 맞는 역량을 개발하기 위해 리더십 교육을 진행하고 있습니다. 임원 및 팀장을 대상으로 맞춤 교육과 온라인 컨텐츠 교육을 정기적으로 제공하며, 신임직책자를 대상으로 신임리더 교육을 지원합니다. 또한 pre-leadership 교육으로 승진자 교육 및 직급별 3년차 교육을 실시하여 개인의 성장을 점검하고 필요한 역량을 개발하도록 지원하고 있습니다.
                        </p>
                    <h6-ancor :title="'직무 교육'" :activated="activated" class="gold6 fw-500 mb-3 f-110">직무 교육</h6-ancor>
                        <p class="mb-45"> 직무 교육은 직무 수행에 필요한 전문성을 강화하기 위한 공통역량 교육, 본부맞춤 교육, 외부위탁 교육, 글로벌 어학 지원, 명사 특강으로 프로그램이 구성되며, 임직원 개인이 자율적으로 이러닝을 들을 수 있도록 상시 학습환경을 구축했습니다. 특히 공통역량 교육은 기획, 재무회계, OA 등 다양한 분야의 전문가 강의와  코웨이의 제품과 기술력을 학습하고 서비스를 실습하는 사내 강의로 구성되어 있습니다. 김난도 서울대 교수, 유현준 건축가 등 저명한 강사를 초청하는 명사특강(착한교육)은 2013년부터 꾸준히 이어와 임직원들에게 다양한 주제로 인사이트를 제시하고 있습니다. 
                        </p>
                        <h7 class="mb-3">교육훈련 투자</h7>
                            <b-table-simple responsive class="num-table social-table f-95">
                                <b-thead><b-tr>
                                    <b-td class="text-left">구분</b-td> <b-td class="text-left">단위</b-td> <b-td>2016</b-td><b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td>
                                </b-tr></b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td class="text-left">총 교육비용<span class="f-90">*</span></b-td> <b-td class="text-left">백만원</b-td> <b-td>11,227</b-td> <b-td>11,740</b-td> <b-td>11,693</b-td><b-td>11,425</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">인당 교육비용<span class="f-90">*</span></b-td> <b-td class="text-left">백만원/명</b-td> <b-td>2.4</b-td> <b-td>2.4</b-td> <b-td>2.4</b-td><b-td>2.3</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">총 교육시간<span class="f-90">**</span></b-td><b-td class="text-left">시간</b-td><b-td>106,436</b-td> <b-td>106,796</b-td> <b-td>107,564</b-td><b-td>109,735</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">인당 교육 시간<span class="f-90">**</span></b-td><b-td class="text-left">시간/명</b-td><b-td>88.7</b-td> <b-td>89.0</b-td> <b-td>89.6</b-td><b-td>61.4</b-td>
                                    </b-tr>                                
                                </b-tbody>                                
                            </b-table-simple>
                            <div class="f-80 ml-1">* 총 교육 비용 및 1인당 교육비용은 2020년도 사업보고서에 공시된 전체 임직원을 기준으로 집계한 수치입니다. <br> ** 총 교육시간 및 1인당 교육시간은 영업직 제외 기준입니다.</div>
                    <hr class="space-p25">
                    <h6-ancor :title="'디지털 기반의 업무혁신'" :activated="activated" class="gold6 fw-500 mb-3 f-110">디지털 기반의 업무혁신</h6-ancor>
                        <p class="mb-45"> 코웨이는 불필요한 업무 과정 및 관행을 최소화하고 업무 생산성을 향상하기 위해 Work Smart 캠페인을 시행하고 있습니다. Work Smart 캠페인은 공간, 시간, 성과, 지식, 방식의 5대 영역을 개선하기 위한 활동으로, 합리적인 근무문화를 조성하고 업무 공간과 시간을 유연하게 활용하여 임직원 만족도를 높이고 있습니다. 특히 근무시간 내 업무 효율을 최대화함으로써 주 40시간 이상의 초과근무를 방지하고 일과 삶의 균형을 맞출 수 있도록 최선의 노력을 다하고 있습니다.
                        </p>
                        <hr class="mb-4">
                        <b-row no-gutters class="bg-blue-gray1 mb-5 py-4 text-center d-flex flex-column flex-md-row border-bottom-gray-bold">
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                                <div class="temp-icon6 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-66px; z-index:10"><b-img src="@/assets/images/구성 요소12_1.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2">공간(SPACE)</p><p class="px-2 f-90 word-break line-height-low">몰입 준비와 배려를 위한 효율적 공간 활용</p>
                            </b-col> 
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                                <div class="temp-icon6 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-66px; z-index:10"><b-img src="@/assets/images/구성 요소12_1.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2">시간(TIME)</p><p class="px-2 f-90 word-break line-height-low">책임있는 매너를 위한 효율적 시간 운영</p>
                            </b-col> 
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                                <div class="temp-icon6 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-66px; z-index:10"><b-img src="@/assets/images/구성 요소12_1.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2">성과(RESULT)</p><p class="px-2 f-90 word-break line-height-low">지속적인 문화 정착을 위한 기업문화 평가 모델 구축</p>
                            </b-col> 
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                                <div class="temp-icon6 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-66px; z-index:10"><b-img src="@/assets/images/구성 요소12_1.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2">지식(ACQUAINTANCE)</p><p class="px-2 f-90 word-break line-height-low">지식 습득 및 공유를 위한 활동 지속</p>
                            </b-col> 
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                                <div class="temp-icon6 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-66px; z-index:10"><b-img src="@/assets/images/구성 요소12_1.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2">방식(METHODS)</p><p class="px-2 f-90 word-break line-height-low">일하는 방식 효율을 위한 프로세스 검토</p>
                            </b-col> 
                        </b-row>
                        <p>디지털 업무 혁신을 통해 업무 효율성을 높이고자 회계, 분석 등 주요 업무에 로봇 프로세스 자동화(RPA, Robotic Process Automation) 시스템을 도입하였습니다. 로봇 프로세스 자동화는 반복적으로 실행하던 단순 업무를 로봇 소프트웨어가 자동으로 처리하는 시스템입니다. 이를 통해 임직원은 단순 업무에서 벗어나 부가가치가 높은 일에 집중하며 업무 효율을 증진시킬 수 있습니다. 현재 계정현황 모니터링, 판매실적 집계, 렌탈자산현황 정리, 요금 청구내역 조회 등 약 40여 개 업무에 RPA를 적용하였으며, 총 70개의 로봇을 운영하여 전체 업무처리 속도를 약 50% 이상 향상시켰습니다. 향후 업무영역 전반에 걸쳐 RPA 도입 가능성을 검토하고 순차적으로 확대 적용할 계획이며 이를 통해 임직원이 업무의 질적 수준을 높이고 일과 삶의 균형을 이룰 수 있도록 노력하겠습니다.
                        </p>
                    <hr class="space-p25 mb-4">
                    <div class="d-flex mb-3 position-relative"> <h6-ancor :title="'커뮤니케이션 기반의 기업문화'" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">커뮤니케이션 기반의 기업문화 </h6-ancor><div class="horizontal-line-2 position-absolute" style="z-index:8"></div></div>
                        <p class="pb-3 mb-5"> 임직원 간의 소통을 강화하여 수평적인 기업문화를 만들기 위해 다양한 프로그램을 진행하고 있습니다. CEO의 적극적인 커뮤니케이션 참여를 기반으로 경영진과 임직원 간 상호 교류를 활성화하기 위한 다양한 소통 프로그램을 운영하고 있습니다. 또한, 적극적으로 임직원의 고충을 경청하고, 즉각적인 해결을 통해 업무 효율성 및 직업 만족도를 향상하기 위해 임직원 고충 상담 채널 및 사내 웹진(코러스)를 운영하고 있습니다. 2019년에는 총 28건의 임직원 고충을 접수하여 연내 100% 처리 및 개선 완료하였습니다.
                        </p>
                        <b-row no-gutters class="bg-blue-gray1 mb-5 py-3 text-center d-flex flex-column flex-md-row border-bottom-gray-bold">
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="@/assets/images/구성 요소13_1.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2">CEO 커뮤니케이션 활동</p><p class="px-2 f-90 word-break line-height-low">신년식과 종무식, 수능을 앞둔 자녀가 있는 임직원을 위한 격려선물, 영업 현장 호프데이 등 다양한 활동을 진행하며 CEO와 임직원 간의 수평적 의사소통 강화</p>
                            </b-col> 
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="@/assets/images/구성 요소13_2.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2">상상오션</p><p class="px-2 f-90 word-break line-height-low">코웨이의 대표적인 아이디어 제안 제도로 임직원이 자유롭게 아이디어를 제공하고 이에 따른 보상 제공</p>
                            </b-col> 
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="@/assets/images/구성 요소13_3.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2">고충처리 채널</p><p class="px-2 f-90 word-break line-height-low">근로자 대표와 정기적인 노사협의회 및 노사협의회 워크숍 실시, 사내 온라인 상담 채널 '코러스' 운영</p>
                            </b-col>
                        </b-row>
                    <h7 class="mb-2">임직원 고충 접수 현황</h7>
                        <b-table-simple responsive class="num-table social-table f-95">
                            <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td> <b-td class="text-left">단위</b-td> <b-td>2016</b-td><b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">고충 접수</b-td> <b-td class="text-left">건수</b-td> <b-td>28</b-td> <b-td>52</b-td> <b-td>59</b-td><b-td>28</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">고충 처리</b-td> <b-td class="text-left">건수</b-td> <b-td>28</b-td> <b-td>52</b-td> <b-td>59</b-td><b-td>28</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">처리율</b-td><b-td class="text-left">%</b-td><b-td>100</b-td> <b-td>100</b-td> <b-td>100</b-td><b-td>100</b-td>
                                </b-tr>                                
                            </b-tbody>                                
                        </b-table-simple>
                    <hr class="space-p25">
                    <h6-ancor :title="'노사협의회 기반의 커뮤니케이션'" :activated="activated" class="gold6 fw-500 mb-3 f-110">노사협의회 기반의 커뮤니케이션</h6-ancor>
                        <p class="mb-45"> 코웨이는 전 임직원을 대표하는 근로자 대표와의 정기적인 노사협의회를 통해 기업 경영과 관련된 중요한 의사결정 및 변동사항에 대하여 소통하고 있습니다. 회사에 중요한 사업변동이 발생한 경우 이를 사전에 투명하게 공유하고 있으며, 2019년에는 총 4회의 노사협의회를 통해 평가위원회 운영 및 승진, 연봉 책정, 연말 인센티브 지급, 기업문화 및 교육 제도 개선 등 7개 안건에 대해 협의하였습니다.
                        </p>
                        <h7 class="mb-2">노사협의회 개최 및 협의 안건 수</h7>
                        <b-table-simple responsive class="num-table social-table f-95">
                            <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td> <b-td class="text-left">단위</b-td> <b-td>2016</b-td><b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">노사협의회 개최</b-td> <b-td class="text-left">회수</b-td> <b-td>5</b-td> <b-td>5</b-td> <b-td>5</b-td><b-td>4</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">협의 안건</b-td> <b-td class="text-left">건수</b-td> <b-td>8</b-td> <b-td>9</b-td> <b-td>8</b-td><b-td>7</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">처리 안건</b-td><b-td class="text-left">건수</b-td><b-td>8</b-td> <b-td>9</b-td> <b-td>8</b-td><b-td>7</b-td>
                                </b-tr>                                
                            </b-tbody>                                
                        </b-table-simple>
                    <hr class="space-p25">
                    <h6-ancor :title="'일과 삶의 균형을 통한 임직원 만족도 제고'" :activated="activated" class="gold6 fw-500 mb-3 f-110">일과 삶의 균형을 통한 임직원 만족도 제고</h6-ancor>
                        <p class="mb-45"> 코웨이는 다양한 프로그램을 통해 가족 친화적 기업문화를 조성하며 일과 삶의 균형을 추구하고 있습니다. 일 가정 양립을 위해 정시 출퇴근을 장려하는 PC-Off 제도를 도입하였으며, 패밀리데이를 운영하여 임직원이 가족과 함께하는 시간을 확보할 수 있도록 노력하고 있습니다. 또한 가족 참여 활동 및 행사를 통해 코웨이의 가족으로서 임직원과 가족들이 함께 행복한 시간을 보낼 수 있는 프로그램을 운영하고 있습니다. 이에 따라 코웨이는 2012년 가족친화 우수기업 첫 인증을 받았으며, 2017년 재인증을 받았습니다.
                        </p>
                        <h7 class="mb-2">일 가정 양립을 위한 지원 제도</h7>
                        <b-row no-gutters class="d-flex align-items-stretch">
                            <b-col class="col-4 col-sm-3 pr-2 f-95"><div class="h-100 py-1 border-bottom">패밀리 데이 및 정시 출퇴근제도</div></b-col><b-col class="col-8 col-sm-9 border-bottom py-1"> 정시 출퇴근을 장려하는 PC-Off 제도, 패밀리 데이 운영 등으로 가족과 함께 시간을 보낼 수 있도록 지원</b-col>
                        </b-row>
                        <b-row no-gutters class="d-flex align-items-stretch">
                            <b-col class="col-4 col-sm-3 pr-2 f-95"><div class="h-100 py-1 border-bottom">효율적 일하기 문화</div></b-col><b-col class="col-8 col-sm-9 border-bottom py-1">효율적이고 생산적인 코웨이만의 일하는 방법을 구축하기 위해 ‘결승전결’이라는 슬로건을 수립하고, 회의/보고/협업과 관련된 지침과 행동규범을 통해 업무에 집중할 수 있는 환경을 조성 </b-col>
                        </b-row>
                        <b-row no-gutters class="d-flex align-items-stretch">
                            <b-col class="col-4 col-sm-3 pr-2 f-95"><div class="h-100 py-1 border-bottom">초등학교 입학 휴가</div></b-col><b-col class="col-8 col-sm-9 border-bottom py-1">초등학교에 입학한 자녀의 적응을 돕기 위해 임직원에게 5일 유급휴가 지급 </b-col>
                        </b-row>
                        <b-row no-gutters class="d-flex align-items-stretch mb-45">
                            <b-col class="col-4 col-sm-3 pr-2 f-95"><div class="h-100 py-1 border-bottom">임신기간 단축 근무</div></b-col><b-col class="col-8 col-sm-9"> <div class="h-50 border-bottom py-1">임신기간 중 위험성이 높은 초기와 말기에 출근/퇴근 2시간 단축 근무 시행 </div><div class="h-50 border-bottom py-1"> 검진 휴가를 신청할 경우 유급으로 반일 휴가 사용 지원 </div></b-col>
                        </b-row>

                        <h7 class="mb-2">임직원 가족 참여 활동</h7>
                        <b-row no-gutters class="d-flex align-items-stretch">
                            <b-col class="col-4 col-sm-3 pr-2 f-95"><div class="h-100 py-1 border-bottom">가족초청 코웨이데이</div></b-col><b-col class="col-8 col-sm-9 border-bottom py-1">임직원 가족들을 초청하여 코웨이 견학, 레일바이크, 글램핑 등 다양한 프로그램 진행 </b-col>
                        </b-row>
                        <b-row no-gutters class="d-flex align-items-stretch">
                            <b-col class="col-4 col-sm-3 pr-2 f-95"><div class="h-100 py-1 border-bottom">신입사원 코웨이데이</div></b-col><b-col class="col-8 col-sm-9 border-bottom py-1">신입사원의 입사 100일을 기념하고 소속감을 강화하기 위해 가족들을 초청하여 업무 공간 견학 등의 행사 진행 </b-col>
                        </b-row>
                        <b-row no-gutters class="d-flex align-items-stretch">
                            <b-col class="col-4 col-sm-3 pr-2 f-95"><div class="h-100 py-1 border-bottom">과학캠프</div></b-col><b-col class="col-8 col-sm-9 border-bottom py-1">연 2회 임직원 자녀를 초청하여 물과 공기의 가치에 대해 느끼고 체험하는 기회 제공 </b-col>
                        </b-row>
                        <b-row no-gutters class="d-flex align-items-stretch mb-45">
                            <b-col class="col-4 col-sm-3 pr-2 f-95"><div class="h-100 py-1 border-bottom">코웨이 가족농장</div></b-col><b-col class="col-8 col-sm-9 border-bottom py-1"> 매년 4월부터 10월까지 가족농장을 운영하여 임직원들에게 유기농 채소재배를 통한 소소한 행복 제공 </b-col>
                        </b-row>

                        <p class="mb-45"> 코웨이는 연 1회 전 임직원을 대상으로 임직원 참여도를 조사하고 있습니다. 2019년 전체 임직원 중 참여도 조사에 참여한 임직원은 남성직원 xx%, 여성직원 xx%가 참여하여 총 xx%가 참여하였습니다. 조사 결과, 2019년 임직원 참여도는 지난해 대비 xx% 상승/하락한 xx점을 기록하였습니다. 남성 직원의 경우 ‘ㅇㅇㅇ’부문에서 높은 참여도를 보였으며, 여성 직원의 경우 ‘ㅇㅇㅇ’부문에서 높은 참여도를 보였습니다. 
                        </p>
                        <h7 class="mb-2">임직원 참여도(만족도) 현황</h7>
                        <b-table-simple responsive class="num-table social-table f-95">
                            <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td> <b-td class="text-left">단위</b-td> <b-td>2016</b-td><b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody><b-tr>
                                    <b-td class="text-left">참여도<span class="f-90">*</span></b-td> <b-td class="text-left">점수</b-td> <b-td></b-td> <b-td></b-td> <b-td></b-td> <b-td></b-td>
                            </b-tr></b-tbody>                                
                        </b-table-simple>
                        <div class="f-80 ml-1">* 참여도 산출 기준 작성 필요.</div>
                    <hr class="space-p25"> 
                    <h6-ancor :title="'임직원 현황 데이터'" :activated="activated" class="gold6 fw-500 mb-3 f-110">임직원 현황 데이터</h6-ancor>
                        <h7 class="mb-2">국내 임직원 현황</h7>
                        <b-table-simple responsive class="num-table social-table f-95">
                            <b-thead><b-tr>
                                <b-td class="text-left" colspan="2">구분</b-td> <b-td>2015</b-td> <b-td>2016</b-td> <b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left" colspan="2">총인원</b-td> <b-td>4,780</b-td> <b-td>4,771</b-td> <b-td>4,879</b-td> <b-td>4,927</b-td> <b-td>4,988</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="5">업무영역별</b-td> <b-td class="text-left">생산직</b-td> <b-td>250</b-td> <b-td>249</b-td> <b-td>264</b-td> <b-td>300</b-td> <b-td>321</b-td>
                                </b-tr>
                                <b-tr>
                                       <b-td class="text-left">영업직</b-td> <b-td>3,331</b-td> <b-td>3,358</b-td> <b-td>3,397</b-td> <b-td>3,406</b-td> <b-td>810</b-td>
                                </b-tr>
                                <b-tr>
                                       <b-td class="text-left">연구직</b-td> <b-td>368</b-td> <b-td>358</b-td> <b-td>361</b-td> <b-td>355</b-td> <b-td>366</b-td>
                                </b-tr>
                                <b-tr>
                                       <b-td class="text-left">사무직</b-td> <b-td>805</b-td> <b-td>779</b-td> <b-td>830</b-td> <b-td>835</b-td> <b-td>862</b-td>
                                </b-tr>
                                <b-tr>
                                       <b-td class="text-left">기타</b-td> <b-td>26</b-td> <b-td>27</b-td> <b-td>27</b-td> <b-td>31</b-td> <b-td>31</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="2">고용형태별</b-td> <b-td class="text-left">정규직</b-td> <b-td>3,936</b-td> <b-td>3,936</b-td> <b-td>4,007</b-td> <b-td>4,627</b-td> <b-td>4,733</b-td>
                                </b-tr>
                                <b-tr>
                                        <b-td class="text-left">비정규직</b-td> <b-td>844</b-td> <b-td>851</b-td> <b-td>872</b-td> <b-td>300</b-td> <b-td>255</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="2">성별</b-td> <b-td class="text-left">남성</b-td> <b-td>1,572 <br>(32.9%)</b-td> <b-td>1,588<br>(33.3%)</b-td> <b-td>1,685<br>(34.5%)</b-td> <b-td>1,773<br>(36.0%)</b-td> <b-td>1,809<br>(36.3%)</b-td>
                                </b-tr>
                                <b-tr>
                                        <b-td class="text-left">여성</b-td> <b-td>3,208<br>(67.1%)</b-td> <b-td>3,183<br>(66.7%)</b-td> <b-td>3,194<br>(65.5%)</b-td> <b-td>3,154<br>(64.0%)</b-td> <b-td>3,179<br>(63.7%)</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="2">소수그룹<span class="f-90">*</span></b-td> <b-td class="text-left">외국인</b-td> <b-td>-</b-td> <b-td>6</b-td> <b-td>5</b-td> <b-td>5</b-td> <b-td>5</b-td>
                                </b-tr>
                                <b-tr>
                                        <b-td class="text-left">장애인<span class="f-90">*</span></b-td> <b-td>-</b-td> <b-td>44</b-td> <b-td>51</b-td> <b-td>49</b-td> <b-td>51</b-td>
                                </b-tr>
                            </b-tbody>                                
                        </b-table-simple>
                        <div class="f-80 ml-1">* 2016년부터 데이터를 체계적으로 관리 및 보고함</div>
                    
                        <h7 class="mb-2">연령별 현황</h7>
                        <b-table-simple responsive class="num-table social-table f-95">
                             <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td> <b-td class="text-left">성별</b-td> <b-td>2016</b-td> <b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td rowspan="2" class="text-left">50세 이상 임원</b-td><b-td class="text-left">남</b-td><b-td>11</b-td><b-td>15</b-td><b-td>16</b-td><b-td>17</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">여</b-td><b-td>1</b-td><b-td>0</b-td><b-td>0</b-td><b-td>1</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                </section>
                <hr class="space-p75">
            </b-container>
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
            title: '임직원 중심의 기업문화와 안전한 근무환경',
            activated: [],
            sub_titles: [
                { 
                    title: `'착한성장'을 위한 역량 강화`, 
                    child: [
                        { title: '리더십 교육' }, 
                        { title: '직무 교육' }, 
                        { title: '디지털 기반의 업무혁신' }, 
                    ]
                },
                { 
                    title: '커뮤니케이션 기반의 기업문화' ,
                    child: [
                        { title: '노사협의회 기반의 커뮤니케이션' }, 
                        { title: '일과 삶의 균형을 통한 임직원 만족도 제고' }, 
                        { title: '임직원 현황 데이터' }, 
                    ]
                },
                { 
                    title: '안전하고 건강한 근무환경' ,
                    child: [
                        { title: '산업안전보건위원회 운영' }, 
                        { title: '안전보건 경영 및 안전문화 구축' }, 
                    ]
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
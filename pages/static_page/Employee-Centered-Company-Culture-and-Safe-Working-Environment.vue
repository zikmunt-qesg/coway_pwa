<template>
<div class="position-relative page-top-bg-so min-vh-100">   
    <logger title="임직원 중심의 기업문화와 안전한 근무환경"></logger>
    <div class="w-100 bg-white bg-white-cover position-absolute"></div>

    <b-container v-if="this.$store.state.is_ENG==false" class="">
        <b-row class="pt-md-5 px-3">
            <h1 class="mt-5 mb-3 pt-3 text-center w-100 fw-400">CARE FOR SOCIETY</h1>
            <h7 class="mb-5 text-center w-100 fw-400">환경을 건강하게 사람을 행복하게, 건강하고 편리한 삶을 케어합니다.</h7>
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
                <section class="bg-blue-gray1 px-4 py-4 mb-5">
                    <div class="border-top-bottom-dark">
                        <b-row no-gutters class="px-3 pt-4">                            
                            <b-col class="col-12 col-sm-4 mb-2 mb-sm-0 fw-500 gold8">
                                <h1 class="mt-m-2 mb-0">01</h1>
                                <h4-ancor hash="T" :activated="activated" class="mb-4 mb-sm-4 mt-m-2">임직원 중심의 기업문화와 안전한 근무환경</h4-ancor>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-4">
                            <b-col class="col-12 col-sm-4 mb-5 mb-sm-0 fw-500 gold7">
                                <div class="mr-5 pr-lg-2 pr-xl-4" style="max-width: 180px;"> <b-img src="/images/133_1.svg" fluid ></b-img> </div>
                            </b-col>
                            <b-col class="col-12 col-sm-8 pr-2">
                                <h7 class="gold7 mb-3">Business relevance & Approach</h7>
                                <p>임직원이 자유롭게 역량을 발휘할 수 있는 기업문화는 기업 경쟁력을 유지하기 위해 매우 중요한 요소입니다. 코웨이는 투명하고 공정한 채용 과정을 통해 인재상에 부합하는 우수 인재를 선발합니다. 또한 체계화된 교육 프로그램을 운영하여 역량을 개발할 수 있도록 지원하며, 수평적이고 소통하는 기업 문화를 조성하여 자율적인 업무역량 발휘는 물론 일과 삶의 균형을 추구하는 인재 경영을 실천하고 있습니다. 
                                또한 안전한 업무 환경을 조성하고 근로자의 질병 및 재해를 최소화하기 위해 안전보건 경영을 추진합니다. 산업안전보건위원회를 기반으로 안전보건 시스템을 마련하고, 국내 전 공장에 통합적인 안전보건 시스템을 운영하고 있습니다. 
                                </p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark">
                            <h7 class="gold7 mb-4 w-100">Activity</h7>
                            <b-col class="col-12 col-sm-4 text-center fw-500">
                                <div class="mx-auto mb-2" style="height:77px;"><b-img src="/images/134_1.svg" fluid></b-img> </div>
                                <p class="fw-500 word-break px-sm-3 px-lg-5 mx-xl-3">STEP 제도 기반의 역량 강화</p>
                            </b-col>
                            <b-col class="col-12 col-sm-4 text-center">
                                <div class="mx-auto mb-2 d-flex align-items-center justify-content-center" style="height:77px;"><b-img src="/images/134_2.svg" fluid></b-img> </div>
                                <p class="fw-500 word-break px-sm-3 px-lg-5 mx-xl-3">노사협의회 운영을 통한 정기적 소통</p>
                            </b-col>
                            <b-col class="col-12 col-sm-4 text-center">
                                <div class="mx-auto mb-2 d-flex align-items-center justify-content-center" style="height:77px;"><b-img src="/images/134_3.svg" fluid></b-img> </div>
                                <p class="fw-500 word-break px-sm-3 px-lg-5 mx-xl-3">산업안전보건 위원회 운영</p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark">
                            <b-col class="col-12 col-md-6 pr-md-4 mb-4 mb-md-0">
                                <h7 class="gold7 mb-4 w-100">Business Cases</h7>
                                <b-row no-gutters> 
                                    <b-col class="col-5 text-center fw-500 px-lg-2"><div class="mx-auto mb-3" style="height:59px;"><b-img src="/images/134_4.svg" fluid></b-img></div>
                                        <p class="fw-500 word-break px-3 px-md-0">디지털 기반의 업무 혁신 지원</p>
                                    </b-col>
                                    <b-col class="col-7 text-center fw-500"><div class="mx-auto mb-3" style="height:59px;"><b-img src="/images/134_5.svg" fluid></b-img></div>
                                        <p class="fw-500 word-break px-2 px-md-3"><span style="word-break: normal;">코로나바이러스감염증-19</span> (COVID-19) 확산 방지 및 예방을 위한 노력</p>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col class="col-12 col-md-6">
                                <h7 class="gold7 mb-3 w-100 pl-md-4">Performance</h7>
                                <b-row no-gutters class="pl-md-4 position-relative"> 
                                    <div class="vertical-line-1 position-absolute d-none d-md-block"></div>
                                    <b-row no-gutters class="w-100">
                                        <!--<b-col class="col-3 text-center"><span class="f-330 fw-400">00</span>점 </b-col>-->
                                        <b-col class="col-6 text-center"><span class="f-330 fw-400 font-italic">100</span> % </b-col>
                                        <b-col class="col-6 text-center"><span class="f-330 fw-400 font-italic">100</span> % </b-col>
                                    </b-row>
                                    <b-row no-gutters class="w-100">
                                        <!--<b-col class="col-3 text-center px-2">
                                            <p class="fw-500 line-height-low word-break"><span class="fw-600">2019</span>년 임직원 만족도</p>
                                        </b-col>-->
                                        <b-col class="col-6 text-center px-2">
                                            <p class="fw-500 line-height-low word-break font-noto">2019년 임직원 고충 연내 처리율</p>
                                        </b-col>
                                        <b-col class="col-6 text-center">
                                            <p class="fw-500 line-height-low word-break font-noto">2019년 협력사 합동 안전실태 점검을 통한 안전환경 개선율</p>
                                        </b-col>
                                    </b-row>
                                </b-row>
                            </b-col>                            
                        </b-row>
                    </div>
                </section>
                <!-- End of DMA-->
                <hr class="py-2">
                <section class="mb-5">
                    <p class="mb-5"> 코웨이는 기업의 미래가치는 인재로부터 비롯된다는 원칙을 기반으로 공정성, 일과 삶의 균형, 착한 성장 중심 인재 경영을 실천하고 있습니다. 코웨이는 모든 임직원이 공정한 기회를 토대로 자신의 역량을 개발하고 그에 대한 성과를 보상받을 수 있도록 다방면의 지원 체계를 구축하고 있습니다. 투명하고 공정한 채용 프로세스를 기반으로 인재상에 부합하는 인재를 채용하며, 임직원들이 자신의 역량을 적극적으로 개발할 수 있도록 STEP(Self Teaching & Education Plan)제도 기반의 다양한 학습 기회를 제공합니다. 또한, 소통과 참여 기반의 기업문화를 조성하여 임직원이 일과 삶의 균형을 이룰 수 있는 환경을 제공하고 있습니다. 
                    </p>
                    <div class="mx-auto text-center" style="height:288px; width:100%"><b-img src="/images/68_1.svg" fluid class="h-100"></b-img></div>
                    <hr class="mb-4">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="r1" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">체계적인 역량 강화 </h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-45"> 코웨이는 STEP(Self Teaching & Education Plan) 제도를 기반으로 임직원의 성장을 지원합니다. STEP은 임직원 필수 교육제도로 수료 여부를 승진 평가에 반영할 정도로 엄격하게 관리하고 있습니다. STEP 제도는 리더십 교육, 직무 교육, 온보딩 교육, 법정필수 교육으로 구성되어 있습니다. 2020년에는 임직원의 리더십 역량을 향상시키고, 비즈니스 변화에 부합하는 직무 역량을 향상시킬 수 있도록 교육을 강화할 예정입니다.
                        </p>
                        <hj-img src="/images/135_1.svg" fluid ></hj-img>
                    <hr class="space-p25 mb-2">
                    <h6-ancor hash="r1-1" :activated="activated" class="gold6 fw-500 mb-2">리더십 교육</h6-ancor>
                        <p class="mb-45"> 미래를 선도하는 리더를 육성하고 직책에 맞는 역량을 개발하기 위해 리더십 교육을 진행하고 있습니다. 임원 및 팀장을 대상으로 맞춤 교육과 온라인 컨텐츠 교육을 정기적으로 제공하며, 신임직책자를 대상으로 신임리더 교육을 지원합니다. 또한 pre-leadership 교육으로 승진자 교육 및 직급별 3년차 교육을 실시하여 개인의 성장을 점검하고 필요한 역량을 개발하도록 지원하고 있습니다.
                        </p>
                    <h6-ancor hash="r1-2" :activated="activated" class="gold6 fw-500 mb-3">직무 교육</h6-ancor>
                        <p class="mb-45"> 직무 교육은 직무 수행에 필요한 전문성을 강화하기 위한 공통역량 교육, 본부맞춤 교육, 외부위탁 교육, 글로벌 어학 지원, 명사 특강으로 프로그램이 구성되며, 임직원 개인이 자율적으로 이러닝을 들을 수 있도록 상시 학습환경을 구축했습니다. 특히 공통역량 교육은 기획, 재무회계, OA 등 다양한 분야의 전문가 강의와  코웨이의 제품과 기술력을 학습하고 서비스를 실습하는 사내 강의로 구성되어 있습니다. 김난도 서울대 교수, 유현준 건축가 등 저명한 강사를 초청하는 명사특강(착한교육)은 2013년부터 꾸준히 이어와 임직원들에게 다양한 주제로 인사이트를 제시하고 있습니다. 
                        </p>
                        <h7 class="mb-3 gray63">교육훈련 투자</h7>
                            <b-table-simple responsive class="num-table social-table f-95">
                                <b-thead><b-tr>
                                    <b-td class="text-left">구분</b-td> <b-td class="text-left">단위</b-td> <b-td>2016</b-td><b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td>
                                </b-tr></b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td class="text-left">총 교육비용<sup>*</sup></b-td> <b-td class="text-left">백만원</b-td> <b-td>11,227</b-td> <b-td>11,740</b-td> <b-td>11,693</b-td><b-td>11,425</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">인당 교육비용<sup>*</sup></b-td> <b-td class="text-left">백만원/명</b-td> <b-td>2.4</b-td> <b-td>2.4</b-td> <b-td>2.4</b-td><b-td>2.3</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">총 교육시간<sup>**</sup></b-td><b-td class="text-left">시간</b-td><b-td>106,436</b-td> <b-td>106,796</b-td> <b-td>107,564</b-td><b-td>109,735</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">인당 교육 시간<sup>*</sup></b-td><b-td class="text-left">시간/명</b-td><b-td>88.7</b-td> <b-td>89.0</b-td> <b-td>89.6</b-td><b-td>61.4</b-td>
                                    </b-tr>                                
                                </b-tbody>                                
                            </b-table-simple>
                            <p class="f-80 ml-1">* 총 교육 비용 및 1인당 교육비용은 2020년도 사업보고서에 공시된 전체 임직원을 기준으로 집계한 수치입니다. <br> ** 총 교육시간 및 1인당 교육시간은 영업직 제외 기준입니다.</p>
                    <hr class="space-p25">
                    <h6-ancor hash="r1-3" :activated="activated" class="gold6 fw-500 mb-3">디지털 기반의 업무혁신</h6-ancor>
                        <p class="mb-45"> 코웨이는 불필요한 업무 과정 및 관행을 최소화하고 업무 생산성을 향상하기 위해 Work Smart 캠페인을 시행하고 있습니다. Work Smart 캠페인은 공간, 시간, 성과, 지식, 방식의 5대 영역을 개선하기 위한 활동으로, 합리적인 근무문화를 조성하고 업무 공간과 시간을 유연하게 활용하여 임직원 만족도를 높이고 있습니다. 특히 근무시간 내 업무 효율을 최대화함으로써 주 40시간 이상의 초과근무를 방지하고 일과 삶의 균형을 맞출 수 있도록 최선의 노력을 다하고 있습니다.
                        </p>
                        <hr class="mb-4">
                        <b-row no-gutters class="bg-blue-gray1 mb-45 py-4 text-center d-flex flex-column flex-md-row border-bottom-gray-bold">
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                                <div class="temp-icon6 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-66px; z-index:10"><b-img src="/images/136_1.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 fw-500 f-100 mb-2">공간(SPACE)</p><p class="px-2 f-90 word-break line-height-low">몰입 준비와 배려를 위한 효율적 공간 활용</p>
                            </b-col> 
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                                <div class="temp-icon6 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-66px; z-index:10"><b-img src="/images/136_2.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 fw-500 f-100 mb-2">시간(TIME)</p><p class="px-2 f-90 word-break line-height-low">책임있는 매너를 위한 효율적 시간 운영</p>
                            </b-col> 
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                                <div class="temp-icon6 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-66px; z-index:10"><b-img src="/images/136_3.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 fw-500 f-100 mb-2">성과(RESULT)</p><p class="px-2 f-90 word-break line-height-low">지속적인 문화 정착을 위한 기업문화 평가 모델 구축</p>
                            </b-col> 
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                                <div class="temp-icon6 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-66px; z-index:10"><b-img src="/images/136_4.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 fw-500 f-100 mb-2">지식(ACQUAINTANCE)</p><p class="px-2 f-90 word-break line-height-low">지식 습득 및 공유를 위한 활동 지속</p>
                            </b-col> 
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                                <div class="temp-icon6 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-66px; z-index:10"><b-img src="/images/136_5.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 fw-500 f-100 mb-2">방식(METHODS)</p><p class="px-2 f-90 word-break line-height-low">일하는 방식 효율을 위한 프로세스 검토</p>
                            </b-col> 
                        </b-row>
                        <p>디지털 업무 혁신을 통해 업무 효율성을 높이고자 2018년부터 회계, 분석 등 주요 업무에 로봇 프로세스 자동화(RPA, Robotic Process Automation) 시스템을 도입하였습니다. 로봇 프로세스 자동화는 반복적으로 실행하던 단순 업무를 로봇 소프트웨어가 자동으로 처리하는 시스템입니다. 이를 통해 임직원은 단순 업무에서 벗어나 부가가치가 높은 일에 집중하며 업무 효율을 증진시킬 수 있습니다. 현재 계정현황 모니터링, 판매실적 집계, 렌탈자산현황 정리, 요금 청구내역 조회 등 약 40여 개 업무에 RPA를 적용하였으며, 총 70개의 로봇을 운영하여 전체 업무처리 속도를 약 50% 이상 향상시켰습니다. 향후 업무영역 전반에 걸쳐 RPA 도입 가능성을 검토하고 순차적으로 확대 적용할 계획이며 이를 통해 임직원이 업무의 질적 수준을 높이고 일과 삶의 균형을 이룰 수 있도록 노력하겠습니다.
                        </p>
                    <hr class="space-p25 mb-4">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="r2" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">커뮤니케이션 기반의 기업문화 </h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                        <p class="pb-3 mb-5"> 임직원 간의 소통을 강화하여 수평적인 기업문화를 만들기 위해 다양한 프로그램을 진행하고 있습니다. CEO의 적극적인 커뮤니케이션 참여를 기반으로 경영진과 임직원 간 상호 교류를 활성화하기 위한 다양한 소통 프로그램을 운영하고 있습니다. 또한, 적극적으로 임직원의 고충을 경청하고, 즉각적인 해결을 통해 업무 효율성 및 직업 만족도를 향상하기 위해 임직원 고충 상담 채널 및 사내 웹진(코러스)를 운영하고 있습니다. 2019년에는 총 28건의 임직원 고충을 접수하여 연내 100% 처리 및 개선 완료하였습니다.
                        </p>
                        <b-row no-gutters class="bg-blue-gray1 mb-5 py-3 text-center d-flex flex-column flex-md-row border-bottom-gray-bold">
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_1.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">CEO 커뮤니케이션 활동</p><p class="px-3 f-90 line-height-low">신년식과 종무식, 수능을 앞둔 자녀가 있는 임직원을 위한 격려선물, 영업 현장 호프데이 등 다양한 활동을 진행하며 CEO와 임직원 간의 수평적 의사소통 강화</p>
                            </b-col> 
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_2.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">상상오션</p><p class="px-3 f-90 line-height-low">코웨이의 대표적인 아이디어 제안 제도로 임직원이 자유롭게 아이디어를 제공하고 이에 따른 보상 제공</p>
                            </b-col> 
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_3.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">고충처리 채널</p><p class="px-3 f-90 line-height-low">근로자 대표와 정기적인 노사협의회 및 노사협의회 워크숍 실시, 사내 온라인 상담 채널 '코러스' 운영</p>
                            </b-col>
                        </b-row>
                    <h7 class="mb-3 gray63">임직원 고충 접수 현황</h7>
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
                    <h6-ancor hash="r2-1" :activated="activated" class="gold6 fw-500 mb-3">노사협의회 기반의 커뮤니케이션</h6-ancor>
                        <p class="mb-45"> 코웨이는 전 임직원을 대표하는 근로자 대표와의 정기적인 노사협의회를 통해 기업 경영과 관련된 중요한 의사결정 및 변동사항에 대하여 소통하고 있습니다. 회사에 중요한 사업변동이 발생한 경우 이를 사전에 투명하게 공유하고 있으며, 2019년에는 총 4회의 노사협의회를 통해 평가위원회 운영 및 승진, 연봉 책정, 연말 인센티브 지급, 기업문화 및 교육 제도 개선 등 7개 안건에 대해 협의하였습니다.
                        </p>
                        <h7 class="mb-3 gray63">노사협의회 개최 및 협의 안건 수</h7>
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
                    <h6-ancor hash="r2-2" :activated="activated" class="gold6 fw-500 mb-3">일과 삶의 균형을 통한 임직원 만족도 제고</h6-ancor>
                        <p class="mb-45"> 코웨이는 다양한 프로그램을 통해 가족 친화적 기업문화를 조성하며 일과 삶의 균형을 추구하고 있습니다. 일 가정 양립을 위해 정시 출퇴근을 장려하는 PC-Off 제도를 도입하였습니다. 또한 가족 참여 활동 및 행사를 통해 코웨이의 가족으로서 임직원과 가족들이 함께 행복한 시간을 보낼 수 있는 프로그램을 운영하고 있습니다. 이에 따라 코웨이는 2012년 가족친화 우수기업 첫 인증을 받았으며, 2017년 재인증을 받았습니다.
                        </p>
                        <h7 class="pb-2 mb-5 gray63">일 가정 양립을 위한 지원 제도</h7>
                        <b-row no-gutters class="bg-blue-gray1 mb-5 py-3 text-center border-bottom-gray-bold">
                            <b-col class="col-12 col-sm-6 col-md-3 position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_1.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">정시 출퇴근제도</p><p class="px-2 f-90 mb-md-0 line-height-low">정시 출퇴근을 장려하는 PC-Off 제도 운영 등으로 가족과 함께 시간을 보낼 수 있도록 지원</p>
                            </b-col> 
                            <b-col class="col-12 col-sm-6 col-md-3 position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_2.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">효율적 일하기 문화</p><p class="px-2 f-90 mb-md-0 line-height-low">효율적이고 생산적인 코웨이만의 일하는 방법을 구축하기 위해 ‘결승전결’이라는 슬로건을 수립하고, 회의/보고/협업과 관련된 지침과 행동규범을 통해 업무에 집중할 수 있는 환경을 조성</p>
                            </b-col> 
                            <b-col class="col-12 col-sm-6 col-md-3 position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_3.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">초등학교 입학 휴가</p><p class="px-2 f-90 mb-md-0 line-height-low">초등학교에 입학한 자녀의 적응을 돕기 위해 임직원에게 5일 유급휴가 지급</p>
                            </b-col>
                            <b-col class="col-12 col-sm-6 col-md-3 position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_4.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">임신기간 단축 근무</p><p class="px-2 f-90 mb-md-0 line-height-low">임신기간 중 위험성이 높은 초기와 말기에 출근/퇴근 2시간 단축 근무 시행</p>
                            </b-col>
                        </b-row>
                        
                        <h7 class="pb-2 mb-5 gray63">임직원 가족 참여 활동</h7>
                        <b-row no-gutters class="bg-blue-gray1 mb-3 py-3 text-center border-bottom-gray-bold">
                            <b-col class="col-12 col-sm-6 col-md-3 position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_1.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">가족초청 코웨이데이</p><p class="px-2 f-90 mb-md-0 line-height-low">임직원 가족들을 초청하여 코웨이 견학, 레일바이크, 글램핑 등 다양한 프로그램 진행</p>
                            </b-col> 
                            <b-col class="col-12 col-sm-6 col-md-3 position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_2.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">신입사원 코웨이데이</p><p class="px-2 f-90 mb-md-0 line-height-low">신입사원의 입사 100일을 기념하고 소속감을 강화하기 위해 가족들을 초청하여 업무 공간 견학 등의 행사 진행</p>
                            </b-col> 
                            <b-col class="col-12 col-sm-6 col-md-3 position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_3.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">과학캠프</p><p class="px-2 f-90 mb-md-0 line-height-low">연 2회 임직원 자녀를 초청하여 물과 공기의 가치에 대해 느끼고 체험하는 기회 제공</p>
                            </b-col>
                            <b-col class="col-12 col-sm-6 col-md-3 position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_4.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">코웨이 가족농장</p><p class="px-2 f-90 mb-md-0 line-height-low">매년 4월부터 10월까지 가족농장을 운영하여 임직원들에게 유기농 채소재배를 통한 소소한 행복 제공</p>
                            </b-col>
                        </b-row>
                        <b-row class="mb-5">
                            <b-col class="col-12 col-sm-6"> <hj-img src="/images/138_1@2x.png" fluid style="max-height: 215.6px;"></hj-img> <p class="f-80 gray63 mt-2">코웨이 데이</p> </b-col>
                            <b-col class="col-12 col-sm-6"> <hj-img src="/images/138_2@2x.png" fluid></hj-img> <p class="f-80 gray63 mt-2">과학캠프</p></b-col>
                        </b-row>

                        <!--<p class="mb-45"> 코웨이는 연 1회 전 임직원을 대상으로 임직원 참여도를 조사하고 있습니다. 2019년 전체 임직원 중 참여도 조사에 참여한 임직원은 남성직원 xx%, 여성직원 xx%가 참여하여 총 xx%가 참여하였습니다. 조사 결과, 2019년 임직원 참여도는 지난해 대비 xx% 상승/하락한 xx점을 기록하였습니다. 남성 직원의 경우 ‘ㅇㅇㅇ’부문에서 높은 참여도를 보였으며, 여성 직원의 경우 ‘ㅇㅇㅇ’부문에서 높은 참여도를 보였습니다. 
                        </p>
                        <h7 class="mb-3 gray63">임직원 참여도(만족도) 현황</h7>
                        <b-table-simple responsive class="num-table social-table f-95">
                            <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td> <b-td class="text-left">단위</b-td> <b-td>2016</b-td><b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody><b-tr>
                                    <b-td class="text-left">참여도<sup>*</sup></b-td> <b-td class="text-left">점수</b-td> <b-td></b-td> <b-td></b-td> <b-td></b-td> <b-td></b-td>
                            </b-tr></b-tbody>                                
                        </b-table-simple>
                        <p class="f-80 ml-1">* 참여도 산출 기준 작성 필요.</p>-->
                    <h6-ancor hash="r2-3" :activated="activated" class="gold6 fw-500 mb-3">임직원 현황 데이터</h6-ancor>
                        <h7 class="mb-3 gray63">국내 임직원 현황</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-2">
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
                                       <b-td class="text-left">영업직</b-td> <b-td>3,331</b-td> <b-td>3,358</b-td> <b-td>3,397</b-td> <b-td>3,406</b-td> <b-td>3,402</b-td>
                                </b-tr>
                                <b-tr>
                                       <b-td class="text-left">연구직</b-td> <b-td>368</b-td> <b-td>358</b-td> <b-td>361</b-td> <b-td>355</b-td> <b-td>366</b-td>
                                </b-tr>
                                <b-tr>
                                       <b-td class="text-left">사무직</b-td> <b-td>805</b-td> <b-td>779</b-td> <b-td>830</b-td> <b-td>835</b-td> <b-td>868</b-td>
                                </b-tr>
                                <b-tr>
                                       <b-td class="text-left">기타</b-td> <b-td>26</b-td> <b-td>27</b-td> <b-td>27</b-td> <b-td>31</b-td> <b-td>31</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="2">고용형태별</b-td> <b-td class="text-left">정규직</b-td> <b-td>3,936</b-td> <b-td>3,920</b-td> <b-td>4,007</b-td> <b-td>4,627</b-td> <b-td>4,733</b-td>
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
                                    <b-td class="text-left" rowspan="2">소수그룹<sup>1)</sup></b-td> <b-td class="text-left">외국인</b-td> <b-td>-</b-td> <b-td>6</b-td> <b-td>5</b-td> <b-td>5</b-td> <b-td>5</b-td>
                                </b-tr>
                                <b-tr>
                                        <b-td class="text-left">장애인</b-td> <b-td>-</b-td> <b-td>44</b-td> <b-td>51</b-td> <b-td>49</b-td> <b-td>51</b-td>
                                </b-tr>
                            </b-tbody>                                
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5">
                            <li> 2016년부터 데이터를 체계적으로 관리 및 보고함 
                            </li>
                        </ol>
                    
                        <h7 class="mb-3 gray63">연령별 현황</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-5">
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
                                <b-tr>
                                    <b-td rowspan="2" class="text-left">50세 이상 직원</b-td><b-td class="text-left">남</b-td><b-td>37</b-td><b-td>78</b-td><b-td>78</b-td><b-td>185</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">여</b-td><b-td>581</b-td><b-td>849</b-td><b-td>795</b-td><b-td>1,131</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td rowspan="2" class="text-left">30~50세 임원</b-td><b-td class="text-left">남</b-td><b-td>14</b-td><b-td>11</b-td><b-td>13</b-td><b-td>13</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">여</b-td><b-td>1</b-td><b-td>1</b-td><b-td>2</b-td><b-td>0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td rowspan="2" class="text-left">30~50세 직원</b-td><b-td class="text-left">남</b-td><b-td>1,462</b-td><b-td>1,489</b-td><b-td>1,539</b-td><b-td>1,513</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">여</b-td><b-td>2,352</b-td><b-td>2,107</b-td><b-td>2,144</b-td><b-td>1,903</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td rowspan="2" class="text-left">30세 미만 직원</b-td><b-td class="text-left">남</b-td><b-td>64</b-td><b-td>92</b-td><b-td>127</b-td><b-td>81</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">여</b-td><b-td>248</b-td><b-td>237</b-td><b-td>313</b-td><b-td>144</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                        <h7 class="mb-3 gray63">글로벌 임직원 현황</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-5">
                             <b-thead><b-tr>
                                <b-td class="text-left" colspan="2">구분</b-td> <b-td>2016</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td colspan="2" class="text-left">총 인원</b-td><b-td>1,631</b-td><b-td>1,177</b-td><b-td>1,428</b-td><b-td>1,673</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td rowspan="2" class="text-left">유형별</b-td><b-td class="text-left">해외파견</b-td><b-td>13</b-td><b-td>15</b-td><b-td>16</b-td><b-td>24</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">현지채용</b-td><b-td>1,618</b-td><b-td>1,162</b-td><b-td>1,412</b-td><b-td>1,649</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                        <h7 class="mb-3 gray63">여성관리자 비율</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-2">
                             <b-thead><b-tr>
                                <b-td class="text-left" colspan="2">구분</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td rowspan="2" class="text-left">여성관리자</b-td><b-td class="text-left">실무 관리자<sup> 1)</sup></b-td><b-td>54.9%</b-td><b-td>51.2%</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">관리자<sup> 2)</sup></b-td><b-td>37.3%</b-td><b-td>38.5%</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5">
                            <li> 실무관리자 : 사무/연구직 과장 이상, 영업직 지국장 이상
                            </li>
                            <li> 관리자 : 사무/연구직 팀장직책 이상, 영업직 총국장 이상
                            </li>
                        </ol>

                        <h7 class="mb-3 gray63">공정한 보수</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-2">
                             <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">남성 대비 여성 급여 비율</b-td><b-td>72.1%</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">법정 최저임금 대비 신입사원 임금 비율</b-td><b-td>173%</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ul type="1" class="f-80 fw-300 footnote-ul line-height-low mb-5">
                            <li> 2019년부터 기본급 및 성과급을 포함한 보수 총액 기준으로 보고
                            </li>
                        </ul>
                    
                        <h7 class="mb-3 gray63">육아휴직 현황</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-5">
                             <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td><b-td class="text-left">단위</b-td><b-td>2016</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">남성 육아휴직 사용자 수</b-td><b-td class="text-left">명</b-td><b-td>2</b-td><b-td>7</b-td><b-td>16</b-td><b-td>15</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">여성 육아휴직 사용자 수</b-td><b-td class="text-left">명</b-td><b-td>127</b-td><b-td>108</b-td><b-td>136</b-td><b-td>146</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">총 육아휴직 사용자 수</b-td><b-td class="text-left">명</b-td><b-td>129</b-td><b-td>115</b-td><b-td>152</b-td><b-td>161</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">육아휴직 사용 후 업무 복귀율</b-td><b-td class="text-left">%</b-td><b-td>95</b-td><b-td>97</b-td><b-td>99</b-td><b-td>96</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">육아휴직 복귀 후 12개월 유지율</b-td><b-td class="text-left">%</b-td><b-td>85</b-td><b-td>78</b-td><b-td>78</b-td><b-td>87</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                        <h7 class="mb-3 gray63">신규 채용, 퇴직 및 근속년수 현황</h7>
                        <b-table-simple responsive class="num-table social-table f-95">
                             <b-thead><b-tr>
                                <b-td class="text-left" colspan="2">구분</b-td><b-td class="text-left">단위</b-td><b-td>2016</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left" colspan="2">신규 채용</b-td><b-td class="text-left">명</b-td><b-td>668</b-td><b-td>683</b-td><b-td>666</b-td><b-td>595</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="3">퇴직률</b-td><b-td></b-td><b-td class="text-left">%</b-td><b-td>14.1</b-td><b-td>11.8</b-td><b-td>12.6</b-td><b-td>10.7</b-td>
                                </b-tr>
                                <b-tr>
                                      <b-td class="text-left">- 자발적 이직률 <sup> 1)</sup></b-td><b-td class="text-left">%</b-td><b-td>96.5</b-td><b-td>97.6</b-td><b-td>99.5</b-td><b-td>95.6</b-td>
                                </b-tr>
                                <b-tr>
                                      <b-td class="text-left">- 비자발적 이직률<sup> 2)</sup></b-td><b-td class="text-left">%</b-td><b-td>3.5</b-td><b-td>2.4</b-td><b-td>0.5</b-td><b-td>4.4</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" colspan="2">평균 근속년수</b-td><b-td class="text-left">년</b-td><b-td>6.8</b-td><b-td>7.2</b-td><b-td>7.5</b-td><b-td>8.1</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-45 ">
                            <li> 의원면직</li>
                            <li> 사망, 정년퇴직, 해고</li>
                        </ol>
                    <hr class="py-1 mb-5">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="r3" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">안전하고 건강한 근무환경</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                        <p class="pb-3 mb-45"> 코웨이는 근로자의 안전을 최우선으로 고려하며 사업장의 안전사고를 예방하고 건강한 근무환경을 조성하기 위해 다양한 안전보건 프로그램을 운영하고 있습니다. 특히 공장 및 R&D센터와 같이 안전사고가 발생할 수 있는 사업장에 대해 산업안전보건위원회를 운영하여 잠재적인 안전 리스크에 대해 선제적으로 대응하고 있습니다.
                        </p>
                    <h6-ancor hash="r3-1" :activated="activated" class="gold6 fw-500 mb-3">산업안전보건위원회 운영</h6-ancor>
                        <p class="mb-5"> 산업안전보건위원회는 안전보건위생에 대한 전반적인 협의 및 합의를 위해 2005년부터 운영되었으며, 사측대표 6인과 근로자 대표 6인의 노사 동수로 구성하여 합리적이고 민첩한 안전 이슈 대응을 추진하고 있습니다. 위원회는 분기별 산업재해 예방 계획을 수립하고 안전보건 관리 규정의 작성 및 변경, 근로자의 안전·보건교육 등을 논의, 의결하고 있습니다. 2019년 총 4회의 위원회 개최를 기반으로 근로자의 건강증진과 작업환경 측정을 통한 소음 개선, 근골격계질환 개선에 대한 사항을 중점적으로 논의하였으며, 그 결과 포장 공정의 자동화를 시행하여 재해요소를 제거하였습니다. 
                        </p>
                    <h6-ancor hash="r3-2" :activated="activated" class="gold6 fw-500 mb-3">안전보건 경영 및 안전문화 구축</h6-ancor>
                        <p class="mb-45"> 코웨이는 안전보건경영시스템(OHSAS18001 및 KOSHA 18001)인증을 보유하며, 이를 기반으로 국내 전 공장(유구, 인천, 포천)의 안전보건 시스템을 통합 운영하고 있습니다. 또한, 매년 협력사와 합동으로 안전실태를 점검하고 평가하여 공급망 전체에서의 안전 확보를 위해 노력하고 있습니다. 2019년 협력사 합동 안전실태 평가 결과 총 133건의 위험 요인을 발견하였으며, 산업안전보건위원회 논의를 통해 2019년 말까지 100%에 대해 개선하였습니다. 2020년에는 지난해 도출 및 개선 완료된 사항에 대한 후속 모니터링과 함께 실태 점검을 지속할 계획입니다. 
                        </p>
                        <h7 class="mb-3 gray63">안전보건경영 인증 비율</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-45">
                             <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td><b-td class="text-left">사업장</b-td><b-td class="text-left">인증 여부</b-td><b-td>유효기간</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">OHSAS18001</b-td><b-td class="text-left">서울사무소, R&amp;D센터, 유구, 인천, 포천 공장</b-td><b-td class="text-left">인증</b-td><b-td>2017.8.17 ~ 2020.07.13</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="2">KOSHA18001</b-td><b-td class="text-left">유구공장</b-td><b-td class="text-left">인증</b-td><b-td>2017.09.27 ~ 2020.09.26</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">인천공장</b-td><b-td class="text-left">인증</b-td><b-td>2019.05.25 ~ 2022.05.24</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                        <h7 class="mb-3 gray63">협력사 공동 안전 실태 점검 비율</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-45">
                             <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">위험요인 도출 건수</b-td><b-td>156</b-td><b-td>133</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">당해년도 위험요인 개선 비율(%)</b-td><b-td>100</b-td><b-td>100</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                        <p class="mb-5"> 코웨이는 안전한 일터를 제공할 뿐만 아니라 임직원이 자발적으로 안전한 환경을 조성할 수 있도록 안전문화 구축 활동을 시행하고 있습니다. 안전문화 구축을 위한 대표적 활동인 ‘행복지킴이’는 현장 관리자와 담당자, 근로자 대표로 구성된 조직으로, 매 월 2회 자발적인 시설점검, 환경개선 캠페인 등 안전 보건 관련 예방 및 개선활동을 실시합니다. 2019년에는 점검을 통해 총 133건의 위험 상황을 도출하였으며, 모든 위험 상황에 대해 100% 즉각적인 개선을 시행하였습니다. 또한 안전보건 인식 확산을 위한 공장 안전보건 업무체계표준화 활동, 화재예방 및 건강증진 프로그램 등 홍보 활동과 근골격계 질환 예방을 위한 프로젝트를 진행하였습니다. 
                        </p>
                        
                    <section class="border-gold px-4 py-3 mb-5">
                    <p class="gold6 fw-500 mt-2 mb-3 f-105"><b-badge class="rounded fw-400 bg-gold6 f-90 p-1 mr-2"> Case.</b-badge>코로나<span class="fw-600">19</span> 바이러스 예방을 위한 코웨이의 노력</p>
                    <p class="mb-3">코웨이는 코로나바이러스감염증-19(COVID-19) 확산의 방지 및 예방을 위해 다양한 활동을 추진하고 있습니다. 코로나바이러스-19에 대한 구체적인 정보가 부족한 만큼 잘못된 정보의 유통을 예방하고 정확한 정보가 전달될 수 있도록 중안재난안전대책본부에서 공식적으로 집계되는 일일 신규 확진자 수 및 발생현황 정보를 지속적으로 공지하고 예방 수칙을 안내하고 있습니다. 올바른 정보 및 행동 수칙의 인지를 기반으로 모든 임직원 및 이해관계자들이 스스로 안전한 환경을 조성할 수 있도록 전 사업장에 디스플레이 게시판 및 안전 수칙 홍보물을 제공하는 등 다양한 채널을 통해 커뮤니케이션 하였습니다.
                    </p>
                    <p class="mb-3">모든 사업장에 출입자 발열 체크, 손소독 및 마스크 착용을 의무화하며, 주 2회 자체 소독 작업을 진행하고 있습니다. 다중 이용시설로 위험성이 높은 구내식당의 경우 한 줄 줄서기 및 대화를 금지하는 등 밀접 접촉을 최소화하기 위한 규칙을 시행하고 있습니다. 임산부 및 초등학생 이하의 자녀가 있는 임직원의 경우 주 xx회 재택근무를 권유하여 바이러스 전파 위험 노출을 최소화하고 있습니다.
                    </p>
                    <p class="">코웨이는 모든 이해관계자의 건강한 생활을 위한 케어(Care) 기업으로서 코로나바이러스감염증-19의 빠른 종식 및 피해 최소화를 위해 노력해 나갈 예정입니다.
                    </p>
                    </section>

                        <h7 class="mb-3 gray63">사망사고 발생 건 수</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-5">
                             <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td><b-td>2016</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">임직원</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">사내도급 및 협력사</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>


                        <h7 class="mb-3 gray63">산업재해 발생건수</h7>
                        <b-table-simple responsive class="num-table social-table f-95">
                             <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td><b-td>2016</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">임직원</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td><b-td>1</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">재해율<sup>1)</sup></b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0.02</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">사내도급 및 협력사</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-45 ">
                            <li> 재해율 = 재해자 수 / 근로자 수 X 100 </li>
                        </ol>

                        <h7 class="mb-3 gray63">근로손실재해율(LTIFR)<sup>1)</sup></h7>
                        <b-table-simple responsive class="num-table social-table f-95">
                             <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td><b-td class="text-left">단위</b-td><b-td>2016</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">임직원</b-td><b-td class="text-left">건/백만 근로시간</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0.38</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">사내도급 및 협력사</b-td><b-td class="text-left">건/백만 근로시간</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-45 ">
                            <li> 근로손실재해율 = 재해건 수 / 연 근로시간 X 1,000,000 </li>
                        </ol>
                       
                </section>
            </b-container>
            </b-col>
        </b-row>
        <hr class="space-p75 mb-5">
    </b-container>

    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->
    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->
    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->    
    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->

    <b-container v-else class="">
        <b-row class="pt-md-5 px-3">
            <h1 class="mt-5 mb-3 pt-3 text-center w-100 fw-400">CARE FOR SOCIETY</h1>
            <h7 class="mb-5 text-center w-100 fw-400">We Make Healthier Environment, Happier People, and Healthy and Convenient Life.</h7>
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
            <b-container class="px-0 eng-font-scale">
                <section class="bg-blue-gray1 px-4 py-4 mb-5">
                    <div class="border-top-bottom-dark">
                        <b-row no-gutters class="px-3 pt-4">                            
                            <b-col class="col-12 mb-2 mb-sm-0 fw-500 gold8">
                                <h1 class="mt-m-2 mb-0">01</h1>
                                <h4-ancor hash="T" :activated="activated" class="mb-4 mb-sm-4 mt-m-2">Employee-oriented Culture,<br> Safe and Healthy Workplace</h4-ancor>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-4">
                            <b-col class="col-12 col-sm-4 mb-5 mb-sm-0 fw-500 gold7">
                                <div class="mr-5 pr-lg-2 pr-xl-4" style="max-width: 180px;"> <b-img src="/images/133_1.svg" fluid ></b-img> </div>
                            </b-col>
                            <b-col class="col-12 col-sm-8 pr-2">
                                <h7 class="gold7 mb-3">Business relevance & Approach</h7>
                                <p>A corporate culture in which employees can exercise their competencies without restrictions is an essential factor for maintaining corporate competitive advantage. Coway selects excellent talents through a transparent and fair recruitment process and runs a systematic training program to help employees develop their competencies voluntarily. 
                                   Also, based on active communication with employees, we build a corporate culture with horizontal communication and talent management that pursues independent work capabilities and balances work and life. Moreover, we promote safety and health management to create a safe working environment to minimize workers' illnesses and accidents. Based on the Occupational Safety and Health Committee, we have established a safety and health system, operating an integrated safety and health system at all domestic factories.  
                                </p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark">
                            <h7 class="gold7 mb-4 w-100">Activity</h7>
                            <b-col class="col-12 col-sm-4 text-center fw-500">
                                <div class="mx-auto mb-2" style="height:77px;"><b-img src="/images/134_1.svg" fluid></b-img> </div>
                                <p class="fw-500 word-break px-sm-1 px-lg-2">STEP Policy-based Enhancement</p>
                            </b-col>
                            <b-col class="col-12 col-sm-4 text-center">
                                <div class="mx-auto mb-2 d-flex align-items-center justify-content-center" style="height:77px;"><b-img src="/images/134_2.svg" fluid></b-img> </div>
                                <p class="fw-500 word-break px-sm-1 px-lg-2">Regular communication through a Joint Labor-Management Council</p>
                            </b-col>
                            <b-col class="col-12 col-sm-4 text-center">
                                <div class="mx-auto mb-2 d-flex align-items-center justify-content-center" style="height:77px;"><b-img src="/images/134_3.svg" fluid></b-img> </div>
                                <p class="fw-500 word-break px-sm-1 px-lg-2">Occupational Safety and Health Committee</p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark">
                            <b-col class="col-12 col-md-6 pr-md-4 mb-4 mb-md-0">
                                <h7 class="gold7 mb-4 w-100">Business Cases</h7>
                                <b-row no-gutters> 
                                    <b-col class="col-6 text-center fw-500 px-lg-2"><div class="mx-auto mb-3" style="height:59px;"><b-img src="/images/134_4.svg" fluid></b-img></div>
                                        <p class="fw-500 px-2 px-md-1">Digital-based Work Innovation Support</p>
                                    </b-col>
                                    <b-col class="col-6 text-center fw-500"><div class="mx-auto mb-3" style="height:59px;"><b-img src="/images/134_5.svg" fluid></b-img></div>
                                        <p class="fw-500 px-2 px-md-1"><span style="word-break: normal;">COVID-19</span> Efforts to prevent the spread of COVID-19</p>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col class="col-12 col-md-6">
                                <h7 class="gold7 mb-3 w-100 pl-md-4">Performance</h7>
                                <b-row no-gutters class="pl-md-4 position-relative"> 
                                    <div class="vertical-line-1 position-absolute d-none d-md-block"></div>
                                    <b-row no-gutters class="w-100">
                                        <!--<b-col class="col-3 text-center"><span class="f-330 fw-400">00</span>점 </b-col>-->
                                        <b-col class="col-6 text-center"><span class="f-330 fw-400 font-italic">100</span> % </b-col>
                                        <b-col class="col-6 text-center"><span class="f-330 fw-400 font-italic">100</span> % </b-col>
                                    </b-row>
                                    <b-row no-gutters class="w-100">
                                        <!--<b-col class="col-3 text-center px-2">
                                            <p class="fw-500 line-height-low word-break"><span class="fw-600">2019</span>년 임직원 만족도</p>
                                        </b-col>-->
                                        <b-col class="col-6 text-center px-1">
                                            <p class="fw-500 line-height-low word-break font-noto">2019 Employee Grievance Annual Processing Rate</p>
                                        </b-col>
                                        <b-col class="col-6 text-center">
                                            <p class="fw-500 line-height-low word-break font-noto letter-narrow">2019 Safety Improvement Rate <span class="f-75 fw-300">(Through Joint Safety Inspection with Suppliers)</span></p>
                                        </b-col>
                                    </b-row>
                                </b-row>
                            </b-col>                            
                        </b-row>
                    </div>
                </section>
                <!-- End of DMA-->
                <hr class="py-2">
                <section class="mb-5">
                    <p class="mb-5"> Based on the principle that the future value of a company comes from talent, Coway practices fairness, work-life balance, and talent management that reinforces expertise. Coway is building a diverse support system to develop their capabilities based on fair opportunities and rewarded for their performance. With a transparent and fair recruitment process, we recruit talented people who fit Coway and provide various learning opportunities based on the STEP (Self Teaching & Education Plan) system so that employees can actively develop their competencies. Also, by building a corporate culture based on communication and participation, we provide an environment where employees can balance work and life. 
                    </p>
                    <div class="mx-auto text-center" style="height:288px; width:100%"><b-img src="/images/311_1.svg" fluid class="h-100"></b-img></div>
                    <hr class="mb-4">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="r1" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">Systematic Empowerment</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-45"> Coway supports the growth of employees based on the STEP (Self Teaching & Education Plan) system. STEP is a mandatory education system for employees, and it is strictly managed to reflect whether it has been completed in the promotion evaluation. The STEP system consists of leadership training, job training, onboarding training, and mandatory training. In 2020, we plan to strengthen our employees' leadership competencies and training to improve job competencies in line with business changes.
                        </p>
                        <hj-img src="/images/311_2.svg" fluid ></hj-img>
                    <hr class="space-p25 mb-2">
                    <h6-ancor hash="r1-1" :activated="activated" class="gold6 fw-500 mb-2">Leadership Training</h6-ancor>
                        <p class="mb-45"> Leadership training is conducted to foster leaders who will lead the future and to develop competencies for positions. Customized training and online content training are provided regularly to executives and team leaders, and new leader training is provided to new positions. Moreover, pre-leadership training is provided to support the promotion of employees and training for employees who has been in the position for 3 years to check individual growth and develop necessary competencies.
                        </p>
                    <h6-ancor hash="r1-2" :activated="activated" class="gold6 fw-500 mb-3">Job Training</h6-ancor>
                        <p class="mb-45"> Job training consists of a program of common competency training, deparatmental training, outsourcing training, global language education support, and special lectures to strengthen the professionalism necessary for job performance, and built to provide an always-learning environment for employees to listen to e-learning voluntarily. In particular, common competency training consists of expert lectures in various fields such as business planning, financial accounting, OA, and in-house lectures to learn Coway's products and technologies and practice services. The special training with prominent lecturers such as Professor Kim Nan-do of Seoul National University and architect Yoo Hyun-jun has been continuing since 2013 and has been presenting insights on various topics to employees.  
                        </p>
                        <h7 class="mb-3 gray63">Education and Training Investment</h7>
                            <b-table-simple responsive class="num-table social-table f-95">
                                <b-thead><b-tr>
                                    <b-td class="text-left">Category</b-td> <b-td class="text-left">Unit</b-td> <b-td>2016</b-td><b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td>
                                </b-tr></b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td class="text-left">Total Training Cost<sup> 1)</sup></b-td> <b-td class="text-left">1 million KRW</b-td> <b-td>11,227</b-td> <b-td>11,740</b-td> <b-td>11,693</b-td><b-td>11,425</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">Training Cost Per Person<sup> 1)</sup></b-td> <b-td class="text-left">1 million KRW/person</b-td> <b-td>2.4</b-td> <b-td>2.4</b-td> <b-td>2.4</b-td><b-td>2.3</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">Total Training Time<sup> 2)</sup></b-td><b-td class="text-left">hour</b-td><b-td>106,436</b-td> <b-td>106,796</b-td> <b-td>107,564</b-td><b-td>109,735</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">Training Hour Per Person</b-td><b-td class="text-left">hour/person</b-td><b-td>88.7</b-td> <b-td>89.0</b-td> <b-td>89.6</b-td><b-td>61.4</b-td>
                                    </b-tr>                                
                                </b-tbody>                                
                            </b-table-simple>
                            <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5 gray55">
                                <li>Total training cost and training cost per person are counted as the total number of employees.</li>
                                <li>Total training hours and training hours per person excluded sales positions.</li>
                            </ol>
                    <hr class="space-p25">
                    <h6-ancor hash="r1-3" :activated="activated" class="gold6 fw-500 mb-3">Digital-based Work Innovation</h6-ancor>
                        <p class="mb-45"> Coway is running a Work Smart campaign to minimize unnecessary work processes and practices and improve work productivity. The Work Smart Campaign is an activity to improve the space, time, performance, knowledge, and method which creates a reasonable working culture, and flexible utilization of workspace and time to increase employee satisfaction. In particular, by maximizing work efficiency within working hours, we are doing our best to prevent overtime work over 40 hours a week and to balance work and life.
                        </p>
                        <hr class="mb-4">
                        <b-row no-gutters class="bg-blue-gray1 mb-45 py-4 text-center d-flex flex-column flex-md-row border-bottom-gray-bold">
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                                <div class="temp-icon6 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-66px; z-index:10"><b-img src="/images/136_1.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 fw-500 f-100 mb-2">SPACE</p><p class="px-2 line-height-low"><span class="f-90">Efficient use of space for engage preparation and consideration</span></p>
                            </b-col> 
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                                <div class="temp-icon6 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-66px; z-index:10"><b-img src="/images/136_2.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 fw-500 f-100 mb-2">TIME</p><p class="px-2 line-height-low"><span class="f-90">Efficient time operation for responsible manners</span></p>
                            </b-col> 
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                                <div class="temp-icon6 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-66px; z-index:10"><b-img src="/images/136_3.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 fw-500 f-100 mb-2">RESULT</p><p class="px-2 line-height-low"><span class="f-90">Establishment of corporate culture evaluation model for continuous cultural settlement</span></p>
                            </b-col> 
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                                <div class="temp-icon6 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-66px; z-index:10"><b-img src="/images/136_4.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 fw-500 f-100 mb-2">ACQUAINTANCE</p><p class="px-2 line-height-low"><span class="f-90">Continued activities to acquire and share knowledge</span></p>
                            </b-col> 
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                                <div class="temp-icon6 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-66px; z-index:10"><b-img src="/images/136_5.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 fw-500 f-100 mb-2">METHODS</p><p class="px-2 line-height-low"><span class="f-90">Process review for work-style efficiency</span></p>
                            </b-col> 
                        </b-row>
                        <p> To increase work efficiency through digital business innovation, we introduced Robotic Process Automation (RPA) systems for major tasks such as accounting and analysis since 2018. Robot Process Automation is a system that robot software automatically handles simple tasks that have been repeatedly executed. Through this system, employees can move away from simple tasks and concentrate on high-value added work to improve work efficiency. We applied RPA to about 40 tasks, such as current account status monitoring, sales results counting, rental asset status, and billing history. It improved the overall processing speed by more than 50%, with a total of 70 robots operating. We plan to review and sequentially apply the possibility of introducing RPA throughout the entire work area and strive to increase the quality of work and work-life balance.
                        </p>
                    <hr class="space-p25 mb-4">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="r2" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">Communication-based Company Culture </h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                        <p class="pb-3 mb-5"> Various programs are underway to strengthen communication between employees to create a horizontal corporate culture. Based on the CEO's active participation in communication, we are operating various communication programs to promote mutual exchange between the management and employees. Moreover, to actively listen to employees' grievances and to improve work efficiency and job satisfaction through immediate resolution, we are operating an employee grievance counseling channel and an in-house webzine (Chorus). In 2019, a total of 28 employee grievances were filed, and 100% of these were processed and improved throughout the year.
                        </p>
                        <b-row no-gutters class="bg-blue-gray1 mb-5 py-3 text-center d-flex flex-column flex-md-row border-bottom-gray-bold">
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_1.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">CEO Communication Activities</p><p class="px-1 line-height-min"><span class="letter-narrow f-85">Consolidating the horizontal communication between the CEO and employees by conducting various activities such as the New Year's ceremony, the end of the year ceremony, encouraging gifts for employees with children who are preparing for the SAT, and Hof Day at the sales site.</span> </p>
                            </b-col> 
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_2.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">SangSang Ocean</p><p class="px-1 line-height-min"><span class="letter-narrow f-85">A representative idea proposal system of Coway, and if employees freely provide ideas, compensation is provided accordingly.</span></p>
                            </b-col> 
                            <b-col class="position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_3.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">Grievance Channel</p><p class="px-1 line-height-min"><span class="letter-narrow f-85">Regular Joint Labor-Management Council meetings and Joint Labor-Management Council workshops are held with laborers' representatives. Moreover, we operate an in-house online consultation channel and "Chorus".</span></p>
                            </b-col>
                        </b-row>
                    <h7 class="mb-3 gray63">Received Employee Grievance Status</h7>
                        <b-table-simple responsive class="num-table social-table f-95">
                            <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td> <b-td class="text-left">Unit</b-td> <b-td>2016</b-td><b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Received Grievances</b-td> <b-td class="text-left">Case</b-td> <b-td>28</b-td> <b-td>52</b-td> <b-td>59</b-td><b-td>28</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Resolved Cases</b-td> <b-td class="text-left">case</b-td> <b-td>28</b-td> <b-td>52</b-td> <b-td>59</b-td><b-td>28</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Rate of Grievance Resolution</b-td><b-td class="text-left">%</b-td><b-td>100</b-td> <b-td>100</b-td> <b-td>100</b-td><b-td>100</b-td>
                                </b-tr>                                
                            </b-tbody>                                
                        </b-table-simple>
                    <hr class="space-p25">
                    <h6-ancor hash="r2-1" :activated="activated" class="gold6 fw-500 mb-3">Communication Based on a Joint Labor-Management Council</h6-ancor>
                        <p class="mb-45"> Coway communicates important decisions and changes related to corporate management through regular Joint Labor-Management Council meetings with representatives of all employees. When significant business changes occur in the company, they are transparently shared in advance. In 2019, through a total of 4 Joint Labor-Management Council meetings, 7 issues were discussed, including the operation and promotion of the evaluation committee, annual salary setting, payment of year-end incentives, and improvement of the corporate culture and education system.
                        </p>
                        <h7 class="mb-3 gray63">Number of a Joint Labor-Management Council and Agenda Items</h7>
                        <b-table-simple responsive class="num-table social-table f-95">
                            <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td> <b-td class="text-left">Unit</b-td> <b-td>2016</b-td><b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Joint Labor-Management Council Meetings</b-td> <b-td class="text-left">meeting</b-td> <b-td>5</b-td> <b-td>5</b-td> <b-td>5</b-td><b-td>4</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Discussed Agenda </b-td> <b-td class="text-left">case</b-td> <b-td>8</b-td> <b-td>9</b-td> <b-td>8</b-td><b-td>7</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Processed Agenda</b-td><b-td class="text-left">case</b-td><b-td>8</b-td> <b-td>9</b-td> <b-td>8</b-td><b-td>7</b-td>
                                </b-tr>                                
                            </b-tbody>                                
                        </b-table-simple>
                    <hr class="space-p25">
                    <h6-ancor hash="r2-2" :activated="activated" class="gold6 fw-500 mb-3">Employee Satisfaction through Work Life Balance </h6-ancor>
                        <p class="mb-45"> Coway promotes work-life balance with a family-friendly corporate culture through various programs. The PC-Off system encourages employees to leave the office at fixed time, and Family Day is to help employees have more time with their families. Also, Coway operates a program that allows employees and their families to have a happy time together through family participation activities and events. Accordingly, Coway was first certified as an excellent family-friendly company in 2012 and re-certified in 2017.
                        </p>
                        <h7 class="pb-2 mb-5 gray63">Support System for Work-family Compatibility</h7>
                        <b-row no-gutters class="bg-blue-gray1 mb-5 py-3 text-center border-bottom-gray-bold">
                            <b-col class="col-12 col-sm-6 col-md-3 position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_1.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">Fixed Time Work Policy</p><p class="px-1 mb-md-0 line-height-min"><span class="letter-narrow f-85">The PC-Off system encourages employees to leave the office at a fixed time and support employees to spend more time with their families. </span></p>
                            </b-col> 
                            <b-col class="col-12 col-sm-6 col-md-3 position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_2.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">Efficient Working Culture</p><p class="px-1 mb-md-0 line-height-min"><span class="letter-narrow f-85"> To build an efficient and productive way of working for Coway, we established the slogan “Gyeol Seung Jeong Gyeol” to create an environment where employees can concentrate on the work through guidelines and codes of conduct related to meetings / reports / collaboration.</span></p>
                            </b-col> 
                            <b-col class="col-12 col-sm-6 col-md-3 position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_3.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">Elementary School Entry Leave</p><p class="px-1 mb-md-0 line-height-min"><span class="letter-narrow f-85"> Five-day paid leave is provided to employees to help their children starting elementary school.</span></p>
                            </b-col>
                            <b-col class="col-12 col-sm-6 col-md-3 position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_4.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">Shortened Work Hour During Pregnancy </p><p class="px-1 mb-md-0 line-height-min"><span class="letter-narrow f-85"> During the early and late stages of pregnancy when there is a high risk, 2 hours shorter work hours.</span></p>
                            </b-col>
                        </b-row>
                        
                        <h7 class="pb-2 mb-5 gray63">Employee Family Engagement Activities</h7>
                        <b-row no-gutters class="bg-blue-gray1 mb-3 py-3 text-center border-bottom-gray-bold">
                            <b-col class="col-12 col-sm-6 col-md-3 position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_1.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">Family Invited Coway Day</p><p class="px-2 f-90 mb-md-0 line-height-min"><span class="letter-narrow f-85"> We invite employees' families to enjoy a happy time by conducting various programs such as field trips, rail bikes, and glamping.</span></p>
                            </b-col> 
                            <b-col class="col-12 col-sm-6 col-md-3 position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_2.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">New Employees Coway Day</p><p class="px-2 f-90 mb-md-0 line-height-min"><span class="letter-narrow f-85"> In commemoration of the 100th day of the new employees, we are inviting families to join business events such as field trips.</span></p>
                            </b-col> 
                            <b-col class="col-12 col-sm-6 col-md-3 position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_3.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">Science Camp</p><p class="px-2 f-90 mb-md-0 line-height-min"><span class="letter-narrow f-85"> We invite the children of our employees twice a year to provide an opportunity to feel and experience the value of water and air.</span></p>
                            </b-col>
                            <b-col class="col-12 col-sm-6 col-md-3 position-relative pt-2">
                                <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -24px;"></div>
                                <div class="temp-icon4 px-md-auto mb-3 position-absolute d-none d-md-block" style="top:-48px; z-index:10"><b-img src="/images/137_4.svg" fluid class="h-100"></b-img></div>
                                <p class="gold6 mb-2 px-3 fw-500 word-break text-underline">Coway Family Farm</p><p class="px-2 f-90 mb-md-0 line-height-min"><span class="letter-narrow f-85"> Every year from April to October, we operate a family farm, contributing to the employees to feel small happiness through organic vegetable farm.</span></p>
                            </b-col>
                        </b-row>
                        <b-row class="mb-5">
                            <b-col class="col-12 col-sm-6"> <hj-img src="/images/138_1@2x.png" fluid style="max-height:215.5px;"></hj-img> <div class="f-80 gray63 mt-2">Coway Day</div> </b-col>
                            <b-col class="col-12 col-sm-6"> <hj-img src="/images/138_2@2x.png" fluid></hj-img> <div class="f-80 gray63 mt-2">Science Camp</div></b-col>
                        </b-row>

                        <!--<p class="mb-45"> 코웨이는 연 1회 전 임직원을 대상으로 임직원 참여도를 조사하고 있습니다. 2019년 전체 임직원 중 참여도 조사에 참여한 임직원은 남성직원 xx%, 여성직원 xx%가 참여하여 총 xx%가 참여하였습니다. 조사 결과, 2019년 임직원 참여도는 지난해 대비 xx% 상승/하락한 xx점을 기록하였습니다. 남성 직원의 경우 ‘ㅇㅇㅇ’부문에서 높은 참여도를 보였으며, 여성 직원의 경우 ‘ㅇㅇㅇ’부문에서 높은 참여도를 보였습니다. 
                        </p>
                        <h7 class="mb-3 gray63">임직원 참여도(만족도) 현황</h7>
                        <b-table-simple responsive class="num-table social-table f-95">
                            <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td> <b-td class="text-left">단위</b-td> <b-td>2016</b-td><b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody><b-tr>
                                    <b-td class="text-left">참여도<sup>*</sup></b-td> <b-td class="text-left">점수</b-td> <b-td></b-td> <b-td></b-td> <b-td></b-td> <b-td></b-td>
                            </b-tr></b-tbody>                                
                        </b-table-simple>
                        <p class="f-80 ml-1">* 참여도 산출 기준 작성 필요.</p>-->
                    <h6-ancor hash="r2-3" :activated="activated" class="gold6 fw-500 mb-3">Employee Data</h6-ancor>
                        <h7 class="mb-3 gray63">Domestic Employee Status</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-2">
                            <b-thead><b-tr>
                                <b-td class="text-left" colspan="2">Category</b-td> <b-td>2015</b-td> <b-td>2016</b-td> <b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left" colspan="2">Total Personnel</b-td> <b-td>4,780</b-td> <b-td>4,771</b-td> <b-td>4,879</b-td> <b-td>4,927</b-td> <b-td>4,988</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="5">By Business Area</b-td> <b-td class="text-left">Production</b-td> <b-td>250</b-td> <b-td>249</b-td> <b-td>264</b-td> <b-td>300</b-td> <b-td>321</b-td>
                                </b-tr>
                                <b-tr>
                                       <b-td class="text-left">Sales</b-td> <b-td>3,331</b-td> <b-td>3,358</b-td> <b-td>3,397</b-td> <b-td>3,406</b-td> <b-td>3,402</b-td>
                                </b-tr>
                                <b-tr>
                                       <b-td class="text-left">Research</b-td> <b-td>368</b-td> <b-td>358</b-td> <b-td>361</b-td> <b-td>355</b-td> <b-td>366</b-td>
                                </b-tr>
                                <b-tr>
                                       <b-td class="text-left"></b-td> <b-td>805</b-td> <b-td>779</b-td> <b-td>830</b-td> <b-td>835</b-td> <b-td>868</b-td>
                                </b-tr>
                                <b-tr>
                                       <b-td class="text-left">Others</b-td> <b-td>26</b-td> <b-td>27</b-td> <b-td>27</b-td> <b-td>31</b-td> <b-td>31</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="2">By Employment Type</b-td> <b-td class="text-left">Permanent Employees</b-td> <b-td>3,936</b-td> <b-td>3,920</b-td> <b-td>4,007</b-td> <b-td>4,627</b-td> <b-td>4,733</b-td>
                                </b-tr>
                                <b-tr>
                                        <b-td class="text-left">Temporary Employees</b-td> <b-td>844</b-td> <b-td>851</b-td> <b-td>872</b-td> <b-td>300</b-td> <b-td>255</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="2">Sex</b-td> <b-td class="text-left">Male</b-td> <b-td>1,572 <br>(32.9%)</b-td> <b-td>1,588<br>(33.3%)</b-td> <b-td>1,685<br>(34.5%)</b-td> <b-td>1,773<br>(36.0%)</b-td> <b-td>1,809<br>(36.3%)</b-td>
                                </b-tr>
                                <b-tr>
                                        <b-td class="text-left">Female</b-td> <b-td>3,208<br>(67.1%)</b-td> <b-td>3,183<br>(66.7%)</b-td> <b-td>3,194<br>(65.5%)</b-td> <b-td>3,154<br>(64.0%)</b-td> <b-td>3,179<br>(63.7%)</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="2">Minority Group<sup>1)</sup></b-td> <b-td class="text-left">Foreigners</b-td> <b-td>-</b-td> <b-td>6</b-td> <b-td>5</b-td> <b-td>5</b-td> <b-td>5</b-td>
                                </b-tr>
                                <b-tr>
                                        <b-td class="text-left">Disabled</b-td> <b-td>-</b-td> <b-td>44</b-td> <b-td>51</b-td> <b-td>49</b-td> <b-td>51</b-td>
                                </b-tr>
                            </b-tbody>                                
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5">
                            <li> Data has been systematically managed and reported since 2016
                            </li>
                        </ol>
                    
                        <h7 class="mb-3 gray63">Status by Age</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-5">
                             <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td> <b-td class="text-left">Sex</b-td> <b-td>2016</b-td> <b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td rowspan="2" class="text-left">Executives over 50</b-td><b-td class="text-left">Male</b-td><b-td>11</b-td><b-td>15</b-td><b-td>16</b-td><b-td>17</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Female</b-td><b-td>1</b-td><b-td>0</b-td><b-td>0</b-td><b-td>1</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td rowspan="2" class="text-left">Employees over 50</b-td><b-td class="text-left">Male</b-td><b-td>37</b-td><b-td>78</b-td><b-td>78</b-td><b-td>185</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Female</b-td><b-td>581</b-td><b-td>849</b-td><b-td>795</b-td><b-td>1,131</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td rowspan="2" class="text-left">Executives between 30-50</b-td><b-td class="text-left">Male</b-td><b-td>14</b-td><b-td>11</b-td><b-td>13</b-td><b-td>13</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Female</b-td><b-td>1</b-td><b-td>1</b-td><b-td>2</b-td><b-td>0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td rowspan="2" class="text-left">Employees between 30-50</b-td><b-td class="text-left">Male</b-td><b-td>1,462</b-td><b-td>1,489</b-td><b-td>1,539</b-td><b-td>1,513</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Female</b-td><b-td>2,352</b-td><b-td>2,107</b-td><b-td>2,144</b-td><b-td>1,903</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td rowspan="2" class="text-left">Employees under 30</b-td><b-td class="text-left">Male</b-td><b-td>64</b-td><b-td>92</b-td><b-td>127</b-td><b-td>81</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Female</b-td><b-td>248</b-td><b-td>237</b-td><b-td>313</b-td><b-td>144</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                        <h7 class="mb-3 gray63">Global Employee Status</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-5">
                             <b-thead><b-tr>
                                <b-td class="text-left" colspan="2">Category</b-td> <b-td>2016</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td colspan="2" class="text-left">Total Personnel</b-td><b-td>1,631</b-td><b-td>1,177</b-td><b-td>1,428</b-td><b-td>1,673</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td rowspan="2" class="text-left">By Type</b-td><b-td class="text-left">Overseas Dispatch</b-td><b-td>13</b-td><b-td>15</b-td><b-td>16</b-td><b-td>24</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Local Employment</b-td><b-td>1,618</b-td><b-td>1,162</b-td><b-td>1,412</b-td><b-td>1,649</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                        <h7 class="mb-3 gray63">Ratio of Female Managers</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-2">
                             <b-thead><b-tr>
                                <b-td class="text-left" colspan="2">Category</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td rowspan="2" class="text-left">Female Managers</b-td><b-td class="text-left">Females in junior management positions <sup> 1)</sup></b-td><b-td>54.9%</b-td><b-td>51.2%</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Females in top management positions <sup> 2)</sup></b-td><b-td>37.3%</b-td><b-td>38.5%</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5">
                            <li> Working-level Manager: Office/research general manager or above, sales branch manager or above
                            </li>
                            <li> Manager: Office manager/research team leader or higher, sales manager general director or above
                            </li>
                        </ol>

                        <h7 class="mb-3 gray63">Fair Pay</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-2">
                             <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Ratio of female pay to male pay</b-td><b-td>72.1%</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Ratio of new employee's wage to legal minimum wage</b-td><b-td>173%</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ul type="1" class="f-80 fw-300 footnote-ul line-height-low mb-5">
                            <li> As of 2019, reporting is based on the total pay amount includes basic salary and performance salary.
                            </li>
                        </ul>
                    
                        <h7 class="mb-3 gray63">Parental Leave Status</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-5">
                             <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td class="text-left">Unit</b-td><b-td>2016</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Number of Male parental leave employees</b-td><b-td class="text-left">person</b-td><b-td>2</b-td><b-td>7</b-td><b-td>16</b-td><b-td>15</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Number of female parental leave employees </b-td><b-td class="text-left">person</b-td><b-td>127</b-td><b-td>108</b-td><b-td>136</b-td><b-td>146</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Total number of parental leave employees</b-td><b-td class="text-left">person</b-td><b-td>129</b-td><b-td>115</b-td><b-td>152</b-td><b-td>161</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Return rate of work after parental leave</b-td><b-td class="text-left">%</b-td><b-td>95</b-td><b-td>97</b-td><b-td>99</b-td><b-td>96</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Retention rate for 12 months after returning from parental leave </b-td><b-td class="text-left">%</b-td><b-td>85</b-td><b-td>78</b-td><b-td>78</b-td><b-td>87</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                        <h7 class="mb-3 gray63">New Recruitment, Turnover and Longevity Status</h7>
                        <b-table-simple responsive class="num-table social-table f-95">
                             <b-thead><b-tr>
                                <b-td class="text-left" colspan="2">Category</b-td><b-td class="text-left">Unit</b-td><b-td>2016</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left" colspan="2">New Recruits</b-td><b-td class="text-left">person</b-td><b-td>668</b-td><b-td>683</b-td><b-td>666</b-td><b-td>595</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="3">Turnover Rate</b-td><b-td></b-td><b-td class="text-left">%</b-td><b-td>14.1</b-td><b-td>11.8</b-td><b-td>12.6</b-td><b-td>10.7</b-td>
                                </b-tr>
                                <b-tr>
                                      <b-td class="text-left">- Voluntary Turnover <sup> 1)</sup></b-td><b-td class="text-left">%</b-td><b-td>96.5</b-td><b-td>97.6</b-td><b-td>99.5</b-td><b-td>95.6</b-td>
                                </b-tr>
                                <b-tr>
                                      <b-td class="text-left">- Involuntary Turnover<sup> 2)</sup></b-td><b-td class="text-left">%</b-td><b-td>3.5</b-td><b-td>2.4</b-td><b-td>0.5</b-td><b-td>4.4</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" colspan="2">Average Years of Employment</b-td><b-td class="text-left">year</b-td><b-td>6.8</b-td><b-td>7.2</b-td><b-td>7.5</b-td><b-td>8.1</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-45 ">
                            <li> Resignation</li>
                            <li> Death, retirement, dismissal</li>
                        </ol>
                    <hr class="py-1 mb-5">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="r3" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">Safe and Healthy Work Environment</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                        <p class="pb-3 mb-45"> Coway considers worker safety as a top priority that we operate various safety and health programs to prevent safety accidents at workplaces and create a healthy working environment. In particular, the Occupational Safety and Health Committee is operated for workplaces that may cause safety accidents, such as factories and R&D centers, to respond to potential safety risks proactively. 
                        </p>
                    <h6-ancor hash="r3-1" :activated="activated" class="gold6 fw-500 mb-3">Occupational Safety and Health Committee</h6-ancor>
                        <p class="mb-5"> The Occupational Safety and Health Committee has been in operation since 2005 for overall consultation and consensus on safety, health, and hygiene. It consists of six management representatives and six worker representatives. It promotes rational and agile responses to safety issues. The Committee establishes a quarterly plan to prevent industrial accidents, discusses and resolves the preparation and modification of safety and health management regulations, and safety and health training for workers. Based on a total of four committee meetings in 2019, we focused on discussing noise improvement and musculoskeletal disease improvement by measuring workers' health and working environment. As a result, we eliminated disasters by automating the packaging process.
                        </p>
                    <h6-ancor hash="r3-2" :activated="activated" class="gold6 fw-500 mb-3">Safety and Health Management and Safety Culture</h6-ancor>
                        <p class="mb-45"> Coway holds the Occupational Health and Safety Management System (OHSAS18001 and KOSHA 18001) certifications. Based on the certifications, we operate the safety and health systems of all domestic factories (Yugu, Incheon, Pocheon). Moreover, every year, we jointly work with suppliers to check and evaluate safety conditions to ensure safety throughout the supply chain. As a result of the joint safety assessment in 2019, we found a total of 133 risk factors, and through discussions with the Industrial Safety and Health Committee, we improved 100% of issues by the end of 2019. In 2020, we plan to continue the status inspection along with follow-up monitoring on the issues that have been drawn up and improved last year.
                        </p>
                        <h7 class="mb-3 gray63">Safety and Health Management Certification Ratio</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-45">
                             <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td class="text-left">Business Site</b-td><b-td class="text-left">Certification</b-td><b-td>Expiration Date</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">OHSAS18001</b-td><b-td class="text-left">Seoul Office, R&D Center, Yugu, Incheon, Pocheon Factories</b-td><b-td class="text-left">Certified</b-td><b-td>2017.8.17 ~ 2020.07.13</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="2">KOSHA18001</b-td><b-td class="text-left">Yugu Factory</b-td><b-td class="text-left">Certified</b-td><b-td>2017.09.27 ~ 2020.09.26</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Incheon Factory</b-td><b-td class="text-left">Certified</b-td><b-td>2019.05.25 ~ 2022.05.24</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                        <h7 class="mb-3 gray63">Ratio of Joint Safety Inspection with Suppliers</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-45">
                             <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Number of Risk Factors</b-td><b-td>156</b-td><b-td>133</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Rate of Improved Risk Factors In The Current Year </b-td><b-td>100</b-td><b-td>100</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                        <p class="mb-5"> Coway not only provides a safe workplace but also conducts safety culture-building activities so that employees can voluntarily create a safe environment. As a representative activity for building a safety culture, "Happiness Keeper" is an organization composed of field managers, representatives, and workers, that performs safety and health-related prevention and improvement activities such as voluntary facility inspections and environmental improvement campaigns twice a month. In 2019, a total of 133 risk situations were identified through inspection, and 100% of them were immediately improved against all risk situations. Also, to promote awareness for safety and health, we conducted promotional activities such as factory safety and health work system standardization activities, fire prevention and health promotion programs, and projects to prevent musculoskeletal disorders.
                        </p>
                        
                    <section class="border-gold px-4 py-3 mb-5">
                    <p class="gold6 fw-500 mt-2 mb-3 f-105"><b-badge class="rounded fw-400 bg-gold6 f-90 p-1 mr-2"> Case.</b-badge>Coway's Efforts to Prevent COVID<span class="fw-600">-19</span>  </p>
                    <p class="mb-3">As much as there is not much specific information on COVID-19, to prevent the distribution of incorrect information and deliver accurate information, we continuously notify the number of new confirmers and daily occurrence status, officially aggregated from the Central Disaster and Safety Countermeasures Headquarters, and guideline for preventive measures. Based on the recognition of the correct information and behavior rules, we communicated through various channels such as providing display bulletin boards and safety regulations promotional materials to all business sites so that all employees and stakeholders can create a safe environment for themselves.
                    </p>
                    <p class="mb-3">It is compulsory to check fever, hand sterilization, masks of visitors at all workplaces, and conduct self-disinfection twice a week. In the cafeteria, a multi-use facility with high infection risk, we implemented regulations to minimize close contacts, such as standing in a line one by one and banning conversations. For pregnant women and children with elementary school age or younger, employees are encouraged to work at home to minimize the risk of virus transmission.
                    </p>
                    <p class="">Coway, as a care company for the healthy life of all stakeholders, will endeavor to end COVID-19 and minimize damage quickly.
                    </p>
                    </section>

                        <h7 class="mb-3 gray63">Fatalities</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-5">
                             <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td>2016</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Employees</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">In-House Subcontractors and Suppliers</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>


                        <h7 class="mb-3 gray63">Industrial Accidents</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-2">
                             <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td>2016</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Employees</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td><b-td>1</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Accident Rate<sup>1)</sup></b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0.02</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">In-House Subcontractors and Suppliers</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-45 ">
                            <li> Accident rate = Number of Victim/Number of Workers*100 </li>
                        </ol>

                        <h7 class="mb-3 gray63">LTIFR (Lost Time Injury Frequency Rate)<sup>1)</sup></h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-2">
                             <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td class="text-left">Unit</b-td><b-td>2016</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Employees</b-td><b-td class="text-left">case/1 million working hours</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0.38</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">In-House Subcontractors and Suppliers</b-td><b-td class="text-left">case/1 million working hours</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-45 ">
                            <li> Lost Time Injury Frequency Rate = Number of Cases / Annual Working Hour x 1,000,000</li>
                        </ol>
                       
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
            return this.is_ENG? 'Employee-oriented Culture, Safe and Healthy Workplace' : '임직원 중심의 기업문화와 안전한 근무환경'
        },
        sub_titles(){
            let temp = [
                { 
                    title: this.is_ENG? 'Systematic Enhancement':'체계적인 역량 강화', hash: 'r1',  
                    child: [
                        { title: this.is_ENG? 'Leadership Training': '리더십 교육', hash: 'r1-1' }, 
                        { title: this.is_ENG? 'Job Training': '직무 교육', hash: 'r1-2' }, 
                        { title: this.is_ENG? 'Digital-based Productivity': '디지털 기반의 업무혁신', hash: 'r1-3' }, 
                    ]
                },
                { 
                    title: this.is_ENG? `Communication-based Company Culture`:`커뮤니케이션 기반의 기업문화`, hash: 'r2',
                    child: [
                        { title: this.is_ENG? 'Communication based on the Labor Management Council': '노사협의회 기반의 커뮤니케이션', hash: 'r2-1' }, 
                        { title: this.is_ENG? 'Employee Satisfaction through Work Life Balance': '일과 삶의 균형을 통한 임직원 만족도 제고', hash: 'r2-2' }, 
                        { title: this.is_ENG? 'Employee Data': '임직원 현황 데이터', hash: 'r2-3' }, 
                    ]
                },
                { 
                    title: this.is_ENG? 'Safe and Healthy Workplace':'안전하고 건강한 근무환경' , hash: 'r3',
                    child: [
                        { title: this.is_ENG? 'Occupational Safety and Health Committee': '산업안전보건위원회 운영', hash: 'r3-1' }, 
                        { title: this.is_ENG? 'Safety and Health Mgt. & Safety Culture': '안전보건 경영 및 안전문화 구축', hash: 'r3-2' }, 
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
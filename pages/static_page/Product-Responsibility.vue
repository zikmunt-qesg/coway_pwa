<template>
<div class="position-relative page-top-bg-m2 min-vh-100">  
    <logger title="제품 책임"></logger>
    <div class="w-100 bg-white bg-white-cover-m2 position-absolute"></div>

    <b-container v-if="this.$store.state.is_ENG==false" class="">
        <b-row class="pt-md-5 px-3">
            <h1 class="mt-5 mb-3 text-center text-white w-100 fw-400">MATERIAL TOPICS</h1>
            <h7 class="mb-5 text-center w-100 f-95 text-white fw-300 font-noto"> 사람들이 언제 어디서나 깨끗한 물과 공기로 안심하고 건강한 삶을 살 수 있도록 하는 일, 코웨이가 걸어 온 한결 같은 길입니다. </h7>
        </b-row>
        <b-row class="px-lg-3">
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="title"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#1394d1'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pr-lg-0">
            <b-container class="px-0">
                <section class="bg-blue1 px-4 py-4 mb-5">                    
                    <b-row no-gutters class="px-3 pt-4">                            
                        <b-col class="col-12 col-sm-3 mb-2 mb-sm-0 blue7">
                            <h4-ancor hash="T" :activated="activated" class="f-190 fw-300 mb-4 mb-sm-5 mt-m-2 line-height-low">제품 책임</h4-ancor>
                        </b-col>
                    </b-row>
                    <b-row no-gutters class="px-3 pb-4">
                        <b-col class="col-12 col-md-4 fw-500">
                            <b-row no-gutters class="pr-md-4 mb-3 mb-md-0">
                                <b-col class="col-12 pb-4 border-bottom-dark blue7">
                                    <h7 class="mb-3 f-120 w-100">Activity</h7>
                                    <ul class="material-ul fw-500 font-noto">
                                        <li>제품 책임 거버넌스 - 무한책임위원회, PIC 360, TQA 센터</li>
                                        <li>신뢰성 시험 표준 개발 및 검증 역량 강화</li>
                                        <li>안전인증 확대 및 고객 안심 서비스</li>
                                    </ul>
                                </b-col>
                                <b-col class="col-12 pt-3">
                                    <h7 class="mb-45 f-120 w-100 blue7">Performance</h7>
                                    <b-row>
                                        <b-col class="col-12 col-sm-6 col-md-12 mb-45 text-center">
                                            <div class="mx-auto mb-2" style="height:61px;"><b-img src="/images/98_1.svg" fluid class="h-100"></b-img> </div>
                                            <p class="mb-0 fw-500 line-height-low word-break">국제안전인증센터 공인시험소</p> 
                                            <p class="mb-0 mt-m-2 fw-400 blue7"><span class="f-230">13</span>개소 보유</p>
                                            <p class="gray65 fw-400 mt-m-2">(2019년 말 기준)</p>
                                        </b-col>
                                        <b-col class="col-12 col-sm-6 col-md-12 mb-45 mb-sm-0 text-center">
                                            <div class="mx-auto mb-2" style="height:61px;"><b-img src="/images/99_1.svg" fluid class="h-100"></b-img> </div>
                                            <p class="mb-0 fw-500 font-noto">2019년 제품책임 관련</p> 
                                            <p class="mb-0 f-140 fw-400 blue7">규제 위반 0건</p>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>                            
                        </b-col>                        
                        <b-col class="col-12 col-md-8 px-2 position-relative pl-md-4">
                            <div class="position-absolute vertical-line-1 d-none d-md-block"></div>
                            <h7 class="blue7 f-120 mb-3">Business relevance & Approach</h7>
                            <p >실내 생활환경의 위생과 건강에 대한 관심이 증가함에 따라 소비자들은 인체 무해성, 위생성, 환경적 영향력 등을 제품 선택의 우선순위로 두고 있습니다. 이러한 구매 경향은 제품 생산 및 판매 기업의 제품 책임을 더욱 강화하고 있습니다. 이에 따라 제품 책임은 기업의 브랜드 가치 및 재무적 가치에 직접적인 영향을 줄 수 있는 핵심 관리 요소로서 중요도가 증가하고 있습니다.
                            </p>
                            <p>코웨이의 주요 제품은 우리의 건강과 밀접한 물과 공기를 다루고, 오랜 기간 일상적으로 사용된다는 점에서 제품의 안전성, 위생성, 성능의 항상성을 제품 책임 우선순위로 관리하고 있습니다. 코웨이는 고객이 제품을 사용하는 동안 안전하고 무해하며, 변함없이 성능이 지속되도록 제품 책임을 적극적으로 이행하여 고객 신뢰를 쌓고자 노력하고 있습니다. 
                            </p>
                            <p class="mb-5 mb-md-45">코웨이는 무한책임위원회를 비롯한 전사 회의체 및 총괄 조직인 TQA(Trust & Quality Assurance)센터를 중심으로 제품 책임을 적극적으로 이행하고 있습니다. 제품 기획부터 설계, 생산, 서비스 등 전 단계에 걸쳐 품질, 신뢰성, 안전성, 환경성 검증을 실시하고 있으며, 글로벌 품질 검증력 강화와 신규 해외시장 진출 확대를 위해 글로벌 사용환경을 분석해 데이터를 구축하고 지역별 신뢰성 표준을 수립하였습니다. 또한 서비스 위생 강화를 위해 서비스 점검 기준 및 범위를 확대하여 고객 관점에서 서비스를 강화하고 선제적으로 대응하고 있습니다. 
                            </p>
                            <h7 class="blue7 f-120 mb-3 mb-sm-2">Business Cases</h7>
                            <div class="d-flex align-items-center">
                                <div class="py-2 d-xl-flex align-items-center mr-3">
                                    <p class="fw-500 mb-3 mb-xl-0 mr-2 word-break font-noto line-height-low">2019년 한국신뢰성대상 '제조업 부문 대상' 수상</p>
                                    <p class="fw-500 mb-0 mr-2 word-break font-noto line-height-low">2019년 '서비스품질 우수상' 국무총리 표창</p>
                                </div>
                                <div style="height:90px;"><b-img src="/images/100_1.svg"></b-img> </div>
                            </div>
                        </b-col>
                    </b-row>
                </section>
                <hr class="mb-4">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="b1" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">제품 책임 거버넌스</h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-5">코웨이는 제품 책임 및 품질경영을 위해 CEO 직속 협의체인 ‘무한책임위원회’와 CEO 참석 전사 회의체 PIC 360를 운영하고 있습니다. 또한, 통합적 품질관리로 일관적이고 효율적인 품질 혁신 관리를 위해 통합 품질검증 조직인 TQA 센터를 운영하고 있습니다.
                    </p>
                
                    <h6-ancor hash="b1-1" :activated="activated" class="blue5 mb-3 font-noto">전사적 제품 책임 및 품질경영 거버넌스 - 무한책임위원회, PIC 360</h6-ancor>
                    <p>코웨이는 제품 책임을 다하여 고객 신뢰를 강화하고자 ‘무한책임위원회’를 운영하고 있습니다. 고객에게 좋은 품질의 제품을 제공하기 위해 제품 품질, 안전성, 고객 신뢰 이슈 등을 포괄적으로 검토하고, 관련 사항을 선제적으로 점검 및 개선하고 있습니다. 무한책임위원회는 CEO 직속 협의체로서 신속한 의사결정을 내리기 위해 매월 1회 본부장급 임원으로 구성된 책임위원들이 모여 안건을 공유하며, 논의된 사항은 전사 프로세스에 접목해 실행하면서 문제를 신속히 해결하고 궁극적으로는 고객 신뢰를 강화하고 있습니다. 
                    </p>

                    <p class="mb-5">또한 2018년 8월부터 연구개발회의와 품질회의를 통합하여 전사 회의체 PIC 360(Product Immersion Committee 360)를 신설하였습니다. 매월 1회 대표이사, 관련 부문 임원, 실무 팀장까지 참석하여, 상품 기획단계부터 출시 이후 전 과정에 대한 전방위적(360도) 관점에서 제품 책임을 논의하고 실행력을 강화하고 있습니다. 
                    </p>

                    <h6-ancor hash="b1-2" :activated="activated" class="blue5 mb-3">TQA 센터(Trust &amp; Quality Assurance Center)</h6-ancor>
                    <p class="mb-5">고객신뢰 회복과 고객 안심 구현을 위한 품질 혁신 추진체로 TQA센터 (Trust & Quality Assurance Center)를 운영하고 있습니다. TQA센터는 환경기술연구소와 생산운영본부로 분사되어 있던 품질 검증 부서를 통합한 독립적인 조직으로, 품질관련 전략과 기능을 통합하고 역량 및 실행력을 강화하여 잠재된 품질 이슈를 사전에 발굴하고 선제적으로 대응하기 위해 노력하고 있습니다. 
                    </p>

                    <hj-img src="/images/81_1.svg" fluid></hj-img>
                    <hr class="mb-4">

                    <section class="border-blue px-4 py-3 mb-5 ">
                        <p class="blue5 fw-500 mt-2 mb-3 f-105 font-noto"><b-badge class="rounded fw-400 bg-blue5 f-90 p-1 mr-2"> Case.</b-badge>2019 한국신뢰성대상* '제조업 부문 대상' 수상</p>
                        <div class="">
                            <div class="mb-4 mb-md-2 ml-md-3 float-md-right" style="max-width: 360px;"><b-img style="top:0;" src="/images/97@2x.png" fluid ></b-img></div>

                            <p class="mb-3">코웨이는 제20회 한국신뢰성대상에서 ‘제조업 부문’ 대상을 수상했습니다. 코웨이는 이번 평가에서 높은 수준의 신뢰성 검증 시스템을 구축하고 국내 및 해외의 다양한 사용환경에 따른 시험표준을 개발한 공로를 인정받아 제조업 부문 대상을 수상했습니다. 
                            </p>
                            <p class="mb-3"> 코웨이는 품질검증 총괄 부서인 TQA(Trust & Quality Assurance)센터를 중심으로 제품 기획부터 설계, 생산, 서비스 등 전 단계에 걸쳐 품질과 신뢰성을 강화하고 있습니다. 코웨이는 시험실에서 벗어나 실제 사용 환경과 고객 관점에서 제품 적합성을 평가하기 위해 국내외 필드테스트를 진행하여 제품 설계에 적용하는 방법을 통해 제품 신뢰성을 향상하고 있습니다. 실제 사용기준보다 엄격한 조건에서 제품 및 부품 수명을 측정하는 가속수명 시험법을 적용해 내구성을 향상하며, 제품 기능별 고장 예측 및 원인 분석 프로세스를 시행해 잠재 불량을 예방하고 제품 설계 완성도를 높였습니다. 
                            </p>
                            <p class="mb-3"> 글로벌 품질 검증력 강화와 신규 해외시장 진출 확대를 위해 국내외 각 지역마다 다른 수질, 온도, 기압 등 사용환경을 분석해 데이터를 구축하고 지역별 신뢰성 표준을 수립한 점도 우수한 평가를 받았습니다. 코웨이가 보유한 시험 표준은 약 300여 건에 달하며, 고객 사용환경 변화와 기술 발전에 따라 매년 신뢰성 시험법을 제·개정하고 있습니다. 또 글로벌 기업들과 제휴해 신뢰성 시험기준 검증을 진행하며 해외시장 품질 인증에도 나서고 있습니다.  
                            </p>
                            <p class="f-80 mb-4">* 한국신뢰성학회가 주관하는 한국신뢰성대상은 소재나 부품, 제품의 신뢰성을 강화해 산업 및 국가의 경제발전에 기여하고 고객 만족도를 향상시킨 기업을 선정합니다. 
                            </p>
                        </div>
                    </section>

                    <hr class="py-2">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="b2" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">제품 신뢰성 강화</h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                    <p class="pb-3 mb-3">코웨이는 제품 신뢰성 향상을 위해, 환경, 포장/운송, 고장분석, 소재/화학, 소프트웨어검증 등 다양한 분야에 대한 신뢰성 시험장비를 구축하고 있으며, 40여대의 최첨단 분석 장비를 지속적으로 도입하여 운영하고 있습니다. 또한 IoCare 제품 신뢰성 검증 향상을 위해 무선 기술 측정 장비를 확충하였으며, IAQ(Indoor Air Quality, 실내공기질) 센싱 기술 검증력을 확보해 IT 기술을 활용한 다양한 제품 개발에 대응할 수 있는 인프라를 확충하고 있습니다. 
                    </p>

                    <b-row class="mb-5">
                        <b-col class="col-12 col-sm-6 mb-3 mb-sm-0">
                            <h7 class="gray63 mb-0">신뢰성 인프라 투자금액</h7>
                            <div class="f-80 gray6 mb-2">(단위: 백만 원)</div>
                            <b-img src="/images/82_1.svg" fluid></b-img>
                        </b-col>
                        <b-col class="col-12 col-sm-6">
                            <h7 class="gray63 mb-0">신뢰성 인프라 보유현황</h7>
                            <div class="f-80 gray6 mb-2">(단위: 건)</div>
                            <b-table-simple responsive class="txt-table f-95">
                                <b-thead><b-tr>
                                    <b-td>계측장비</b-td><b-td>시험장비</b-td><b-td>시험지그</b-td><b-td>합계</b-td>
                                </b-tr></b-thead>
                                <b-tbody><b-tr>
                                    <b-td>263건</b-td><b-td>207건</b-td><b-td>130건</b-td><b-td>600건</b-td>
                                </b-tr></b-tbody>
                            </b-table-simple>
                        </b-col>
                    </b-row>
                
                    <hr class="py-2">
                    <h6-ancor hash="b2-1" :activated="activated" class="blue5 mb-3">신뢰성 시험 표준 개발</h6-ancor>
                    <p class="mb-45">글로벌 스탠다드를 충족하는 제품·부품 신뢰성 시험 역량을 보유하기 위해 국내외 선진 6개사, 국제 표준(IEC, ISO), 국가 표준(KS, MIL, JIS, BS) 및 관련 단체 규격(JEDEC, EIAJ) 등을 검토하여, 자사 제품에 적합한 시험 표준을 개발하는 등 외부 규격을 적극 도입하고 있습니다. 매년 필드 실패사례 및 고객 사용환경에 따른 신뢰성 시험법을 지속적으로 제/개정하여, 환경의 변화와 기술 발전, 사업 범위와 영역의 확대 등에 신속하게 대응하고 있습니다. 
                    </p>

                            <b-table-simple responsive class="num-table f-95 mb-2">
                                <b-thead><b-tr>
                                    <b-td class="text-left">구분</b-td><b-td class="text-left">단위</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                                </b-tr></b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td class="text-left">신뢰성 시험표준 보유 현황</b-td><b-td class="text-left">누적 건수</b-td><b-td>289</b-td><b-td>294</b-td><b-td>302</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">연도별 개정 건</b-td><b-td class="text-left">건수</b-td><b-td>18</b-td><b-td>6</b-td><b-td>15</b-td>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                            <p class="f-80 ml-1 mb-5">
                                * 신뢰성 시험 항목: 공통, 정수기, 청정기, 비데, 전기레인지, 의류청정기 등 9개 항목
                            </p>
                    
                        <p class="mb-45">2009년부터 가속수명시험법을 도입하고 있으며, 가혹한 부하(Stress) 인가에 따른, 제품 부하와 수명의 상관관계를 분석해 제품 사용환경에 따른, 수명을 정확하게 추정하고 있습니다. 실제 필드 데이터와 비교검증을 진행하여, 실제 사용 환경에서 정확한 신뢰성이 확보될 수 있도록 기준을 개선해 나가고 있습니다.
                        </p>

                            <b-table-simple responsive class="num-table f-95 mb-5">
                                <b-thead><b-tr>
                                    <b-td class="text-left">구분</b-td><b-td class="text-left">단위</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                                </b-tr></b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td class="text-left">가속수명 시험법 보유 현황</b-td><b-td class="text-left">누적 건수</b-td><b-td>33</b-td><b-td>35</b-td><b-td>36</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">연도별 개정 건</b-td><b-td class="text-left">건수</b-td><b-td>1</b-td><b-td>2</b-td><b-td>1</b-td>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>

                    <hr class="py-2">                    
                    <h6-ancor hash="b2-2" :activated="activated" class="blue5 mb-3">신뢰성 검증 역량 강화</h6-ancor>
                    <p class="mb-45"> 제품 고장을 사전 예측하고 분석하는 프로세스를 기반으로 설계 완성도를 높이고 불량 및 고장을 예방하여, 제품 신뢰성을 향상하고 있습니다.
                    </p>

                    <b-row no-gutters class="mb-45">
                        <b-col class="col-12 col-sm-6 pr-sm-3 mb-3 mb-sm-0">
                            <div class="px-3 blue7-box blue7 text-center d-flex align-items-center fw-500 border-bottom-blue7" style="height:66px;">DFMEA(Design Failure Modes and Effect Analysis, 제품 고장 모드 및 영향도 분석)</div>
                            <div class="border-bottom-blue7 adjust-height">
                                <p class="px-3 py-4 f-95">DFMEA 시스템 운영을 통해, 제품 구조에 따른 고장 모드를 체계적으로 추출하고 분석하여, 보다 효과적으로 고장을 예방하고 있습니다. 예측된 고장과 개선 방안의 정확성을 평가하여, 제품 설계 완성도를 향상하는 프로세스로, 2019년에는 AIS3.0 등 총 32건의 DFMEA 심의를 시행하여 약 1,200여건의 고장 모드 및 고장원인을 예측하고 예방 설계를 진행하였습니다.
                                </p>
                            </div>
                        </b-col>
                        <b-col class="col-12 col-sm-6 pl-sm-3 position-relative">
                            <div class="vertical-line-dotted position-absolute d-none d-sm-block" style="height: 74%; top: 23%;"></div>
                            <div class="px-3 blue7-box blue7 fw-500 text-center d-flex align-items-center justify-content-center" style="height:66px; z-index:10;">SSM(Stress-Strength Model, 스트레스-강도 모델)</div>
                            <div class="border-bottom-blue7 adjust-height">
                                <p class="px-3 py-4 f-95 mb-0"> SSM 시스템 구축을 통해, 과거 실패사례, 사용환경 데이터, 화학물질 사용기준 등 다양한 지식을 구조화하여 관리함으로써, 신규 제품·부품 개발 과정에서 효율성을 향상하고 실패 사례의 재발 방지를 추진하고 있습니다. 또한, 품질 및 개발과정 관련 실패사례를 취합하여 지식구조화 함으로써 실패에 따른 반복적인 설계 개선과 검증, 단가 상승 및 개발 일정 지연 등을 예방하고 있습니다. 2016년 도입 이후 2019년까지 시장 품질, 고분자 재료, 전자부품 등 다양하 분야에서 총 835건의 지식을 등록하여 관리하고 있습니다.
                                </p>
                            </div>
                        </b-col>
                    </b-row>

                    <p class="mb-5">또한, 내부 전문교육 프로그램인 R-campus(Reliability Campus)를 통해 전문 분야별, 직급별 필수 교육 항목을 선정하여 신뢰성 검증 전문가를 육성하고 있습니다. 대외적으로는 한국신뢰성협회, 한국표준협회, FITI시험연구원 등 다양한 외부 전문기관과의 협력을 통해 시험원들에게 보다 전문적인 교육의 기회를 제공하고 있으며, CRE(국제신뢰성기사), ISTA CPLP(국제포장운송시험원) 등 국제 자격증 취득을 지원하여 개인 역량 향상에 노력하고 있습니다. 
                    </p>
                    <hr class="py-3">                    

                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="b3" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">안전 인증 확대 및 고객 안심</h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-5">코웨이는 적극적인 안전 인증 시험소 운영을 기반으로 안전 인증 취득 범위를 확대하고, 제품 안전성에 대한 신속한 사전 준비를 추진합니다. 안전 인증을 통해 고객에 믿을 수 있는 정보를 제공하며, 시장 경쟁에서의 민첩성을 확보하고 있습니다. 또한 고객에 종합적인 안전 및 위생 안심 서비스를 제공하여 사용단계에서의 제품 책임을 이행하고 있습니다.
                    </p>

                    <h6-ancor hash="b3-1" :activated="activated" class="blue5 mb-3">제품 안전 인증 확대</h6-ancor>
                    <p class="mb-45 pb-2">코웨이 TQA 센터는 13개의 제품 안전 관련 공인 시험소를 운영하며 빠르게 변화하는 국내외 안전성 트랜드 및 인증 규제에 신속히 대응하고 있습니다. 2019년에는 유럽 공인 시험기관인 NEMKO(전기 장비 제조 안전 테스트 감독 기관)와 공동으로 운영하고 있는 CTF(Customer’s Testing Facility) 시험소를 갱신하며 해외에 수출하는 전기전자제품의 안전 인증인 ENEC 와 CB 인증의 취득 관리를 더욱 효율적으로 수행할 수 있도록 협력을 강화하였습니다. 또한, 2019년 내부 NEMKO ICSE(International Certified Safety Engineer) 자격증 취득 인원을 4명으로 확대하여 전문성 기반의 안전 인증을 취득하였습니다.
                    </p>

                        <h7 class="mb-45 gray63">국제 공인시험소 운영 및 인증 취득 현황</h7>
                        <hj-img src="/images/83_1.svg" fluid></hj-img>
                        <hr class="mb-5 py-2">                    
                    
                    <h6-ancor hash="b3-2" :activated="activated" class="blue5 mb-3">안전 및 위생 안심 서비스</h6-ancor>
                    <p class="mb-45">코웨이는 제품의 위생과 안전성을 확보하기 위해 제품 설계부터 소재 선택, 관리 서비스까지 통합적 관리를 추진하고 있습니다. 제품 설계 과정에서 부품 교체 및 청소 등 위생적인 유지 보수 및 자동화된 위생 관리 시스템을 적용합니다. 먹는 물의 위생 관리가 핵심적인 정수기의 경우 정수기 사용 시 유로에 남은 잔수를 자동으로 배출하는 ‘유로 비움 모드’를 적용하고, 24시간 미사용 시 정수기 내 장수를 자동으로 배출하는 자동 배수 시스템을 도입하였습니다. 또한 안전한 소재를 사용하기 위해 모든 부품에 대한 화학물질 함유량을 확인하며, 더욱 안전성이 높은 소재로 대체하기 위한 신소재 개발을 지속하고 있습니다. 또한 고객 사용 단계에서의 안전 및 위생 관리를 위해 1) 제품별 전문 위생관리 도구 제공, 2) 위생 부품 전면 교체 스페셜 케어 서비스, 3) 위생 모니터링 및 경고 알람 제공, 4) IoT 기술 기반 제품 상태 정보 제공 등의 복합 서비스를 제공하고 있습니다. 
                    </p>     
                        <hj-img src="/images/84_1.svg" fluid></hj-img>

                    <hr class="mb-5 py-3">                    
                    <section class="border-blue px-4 py-3 mb-5">
                        <p class="blue5 fw-500 mt-2 mb-3 f-105"><b-badge class="rounded fw-400 bg-blue5 f-90 p-1 mr-2"> Case.</b-badge><span class="fw-600">2019</span> 국가품질경영대회 '서비스품질우수상' 국무총리 표창</p>
                        <p class="mb-3">코웨이는 2019 국가품질경영대회에서 ‘서비스품질우수상 국무총리 표창’과 ‘품질경쟁력 우수기업’에 선정되며 서비스 경쟁력 및 제품 신뢰성을 인정받았습니다. 코웨이는 서비스 점검 기준 및 범위를 확대하여 고객 관점에서 서비스를 강화하고 선제적으로 위생 케어에 나선 점을 높이 평가받았습니다. 살균수로 정수기 내부를 관리해주는 서비스 내용을 소리와 화면으로 알려주는 ‘코디 서비스 키트’를 도입해 서비스 전문성과 위생성을 향상시켰습니다. 또한 정수기 주요 위생 부품을 렌탈 기간 동안 1~2회 무상으로 전면 교체해주는 ‘스페셜 케어 서비스’를 시행해 관리 수준을 강화했습니다. 
                        </p>
                        <p class="mb-3">체계적인 품질경영 시스템을 구축해 제품 안전성을 향상한 것 또한 우수한 평가를 받았습니다. 업계 최고 수준의 신뢰성 시험 규격을 구축하고, 신제품 개발부터 생산까지 모든 과정에서 완성도를 검토하는 ‘품질검증체계’를 도입했습니다. 코웨이는 앞으로도 제품 안전 및 서비스 향상 방안을 포괄적으로 논의하는 ‘무한책임위원회’를 중심으로 제품 책임 및 품질 경영을 위해 노력해 나갈 것입니다.
                        </p>
                        <p class="f-80 gray6 pb-2 word-break indent-sm">* 국가품질경영대회: 지속적인 서비스 및 제조 품질혁신 활동을 통해 고객만족도를 높이고 탁월한 경영성과를 이뤄 국가산업 경쟁력 향상에 기여한 기업을 표창하는 제도. (산업통상자원부 국가기술표준원이 주최, 한국표준협회가 주관) 
                        </p>
                    </section>

            </b-container>         
            <!-- End of Contents Container -->
            </b-col>
        </b-row>
        <hr class="mb-5 space-p75">
    </b-container>

    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->
    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->
    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->    
    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->

    <b-container v-else class="">
        <b-row class="pt-md-5 px-3">
            <h1 class="mt-5 mb-3 text-center text-white w-100 fw-400">MATERIAL TOPICS</h1>
            <h7 class="mb-5 text-center w-100 f-95 text-white fw-300 font-noto"> To Help People Live A Healthy and Peaceful Life With Clean Water And Air Anytime, Anywhere Is The Consistent Path That Coway Has Walked.
 </h7>
        </b-row>
        <b-row class="px-lg-3">
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="title"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#1394d1'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pr-lg-0">
            <b-container class="px-0 eng-font-scale">
                <section class="bg-blue1 px-4 py-4 mb-5">                    
                    <b-row no-gutters class="px-3 pt-4">                            
                        <b-col class="col-12 col-sm-5 mb-2 mb-sm-0 blue7">
                            <h4-ancor hash="T" :activated="activated" class="f-190 fw-300 mb-4 mb-sm-5 mt-m-2 line-height-low">Product Responsibility</h4-ancor>
                        </b-col>
                    </b-row>
                    <b-row no-gutters class="px-3 pb-4">
                        <b-col class="col-12 col-md-4 fw-500">
                            <b-row no-gutters class="pr-md-4 mb-3 mb-md-0">
                                <b-col class="col-12 pb-4 border-bottom-dark blue7">
                                    <h7 class="mb-3 f-120 w-100">Activity</h7>
                                    <ul class="material-ul fw-500 font-noto">
                                        <li class="mb-2 line-height-low">Product Responsibility Governance – Infinite Responsibility Committee, PIC 360, TQA Center </li>
                                        <li class="mb-2 line-height-low">Reliability Test Standard and Verification Capacity</li>
                                        <li class="mb-2 line-height-low">Safety Certification and Customer Service</li>
                                    </ul>
                                </b-col>
                                <b-col class="col-12 pt-3">
                                    <h7 class="mb-45 f-120 w-100 blue7">Performance</h7>
                                    <b-row>
                                        <b-col class="col-12 col-sm-6 col-md-12 mb-45 text-center">
                                            <div class="mx-auto mb-2" style="height:61px;"><b-img src="/images/98_1.svg" fluid class="h-100"></b-img> </div>
                                            <div class="mb-0 mt-m-2 fw-400 blue7"><span class="f-230">13</span> Testing Laboratories</div>
                                            <p class="mb-0 fw-500 line-height-low word-break"> Approved by International Safety Certification Center</p>                                             
                                            <p class="gray65 fw-400">(As of the end of 2019)</p>
                                        </b-col>
                                        <b-col class="col-12 col-sm-6 col-md-12 mb-45 mb-sm-0 text-center">
                                            <div class="mx-auto mb-2" style="height:61px;"><b-img src="/images/99_1.svg" fluid class="h-100"></b-img> </div>
                                            <div class="mb-0 blue7 font-noto"> <span class="f-140">0</span> Case of Violations</div> 
                                            <p class="mb-0 fw-400">of product liability regulations in 2019 </p>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>                            
                        </b-col>                        
                        <b-col class="col-12 col-md-8 px-2 position-relative pl-md-4">
                            <div class="position-absolute vertical-line-1 d-none d-md-block"></div>
                            <h7 class="blue7 f-120 mb-3 font-noto">Business relevance & Approach</h7>
                            <p> While a growing number of people are interested in sanitation of healthy indoor living environment, consumers put nonmaleficence to the human body, sanitation quality, and environmental impacts as priorities for product selection. This growing purchase tendency reinforces product liability on manufacturing and sales corporations, and the significance of product liability rises as a key management element that directly affects company’s brand and financial value.
                            </p>
                            <p> As Coway’s main products deal with water and air, which are closely related to health and daily life, we manage product safety, sanitation, and consistency of performance as the top priority of product liability. Coway actively fulfills product responsibility to ensure safe and harmless product use and consistent performance and strives to build customer trust.
                            </p>
                            <p class="mb-5 mb-md-45"> Coway actively fulfills product responsibility with corporate committees such as Infinite Responsibility Committee and TQA(Trust & Quality Assurance) Center, a supervising department. We conduct verification process on quality, reliability, safety, and environmental impact through every step from product planning to design, manufacturing, and service. To strengthen global quality verification capability and expand into new overseas markets, we established data by analyzing the global usage environment and set regional reliability standards. Moreover, to strengthen service hygiene, we are expanding service inspection standards and scope to strengthen services from the customer's perspective and respond proactively.
                            </p>
                            <h7 class="blue7 f-120 mb-3 mb-sm-2">Business Cases</h7>
                            <div class="d-flex align-items-center">
                                <div class="py-2 d-xl-flex align-items-center mr-3">
                                    <p class="fw-500 mb-3 mb-xl-0 mr-2 word-break font-noto line-height-low">"Manufacturing Sector Grand Prize" at the 2019 Korea Reliability Award</p>
                                    <p class="fw-500 mb-0 mr-2 word-break font-noto line-height-low">Prime Minister’s Citation for excellent service quality at "Korean National Quality Award" in 2019</p>
                                </div>
                                <div style="height:90px;"><b-img src="/images/100_1.svg"></b-img> </div>
                            </div>
                        </b-col>
                    </b-row>
                </section>
                <hr class="mb-4">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="b1" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">Product Responsibility Governance</h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-5">For product responsibility and quality management, Coway organized the Infinite Responsibility Committee, direct consultation with the CEO, and PIC 360, a company-wide CEO-attending committee. Moreover, TQA Center, an integrated quality verification organization, is organized for consistent and efficient quality innovation management through integrated quality management.
                    </p>
                
                    <h6-ancor hash="b1-1" :activated="activated" class="blue5 mb-3 font-noto">Company-wide Product Responsibility and Quality Mgt.</h6-ancor>
                    <p> We organized the "Infinite Responsibility Committee" to strengthen customer trust by fulfilling product responsibility. To provide the best quality, we comprehensively review product quality, safety, and customer trust issues, and proactively examine and improve related matters. The Infinite Responsibility Committee, which consists of director-level executives, directly reports to the CEO, and gathers the agenda once a month and implement in the corporate-wide process to promptly resolve issues and ultimately boost customer trust. 
                    </p>

                    <p class="mb-5">Since August 2018, the R&amp;D Committee and Quality Committee are merged to form Product Immersion Committee 360 (PIC 360), a corporate-wide committee. Once a month, senior executives, and team leaders attend to discuss product responsibility in every angle (360 degrees) through the entire process from product planning to post-launching step for bolstering executive ability. 
                    </p>

                    <h6-ancor hash="b1-2" :activated="activated" class="blue5 mb-3">Trust &amp; Quality Assurance Center</h6-ancor>
                    <p class="mb-5">To restore customer trust and assurance, we organized the Trust & Quality Assurance Center as a quality innovation propellant. TQA center is an independent organization that integrates the Environmental Technology Research Center, and the quality verification department divided into the production and operation division. It incorporates quality-related strategies and functions, bolsters capacity and executive ability to discover potential quality issues in advance, and proactively responds.
                    </p>

                    <hj-img src="/images/306_1.svg" fluid></hj-img>
                    <hr class="mb-4">

                    <section class="border-blue px-4 py-3 mb-5 ">
                        <p class="blue5 fw-500 mt-2 mb-3 f-105 font-noto"><b-badge class="rounded fw-400 bg-blue5 f-90 p-1 mr-2"> Case.</b-badge>"Manufacturing Sector Grand Prize" at the 2019 Korea Reliability Award</p>
                        <div class="">
                            <div class="mb-4 mb-md-2 ml-md-3 float-md-right" style="max-width: 360px;"><b-img style="top:0;" src="/images/97@2x.png" fluid ></b-img></div>

                            <p class="mb-3">Coway received the grand prize in the “Manufacturing Sector” in the 20th Korea Reliability Award. In this evaluation, Coway was awarded the Grand Prize in the manufacturing sector in recognition of its contribution to establishing a high-level reliability verification system and developing test standards for various domestic and overseas usage environments.
                            </p>
                            <p class="mb-3">Centered on the TQA (Trust & Quality Assurance) Center, the department in charge of overall quality verification, Coway is reinforcing quality and reliability in every step from product planning to design, production, and service. Coway is conducting field tests at home and abroad to evaluate product suitability from the actual usage environment and customer's perspective and improves product reliability by applying it to product design. HALT (Highly Accelerated Limit Test) is applied to measure product and component limits under stricter conditions than actual usage standards to improve durability. Failure prediction and cause analysis processes are performed for each product function to prevent potential defects and expand product design completion.
                            </p>
                            <p class="mb-3"> We were highly appraised for constructing data and established reliability standards for each region by analyzing different water quality, temperature, and air pressure usage environment in each region at home and abroad to strengthen global quality verification capabilities and expand into new overseas markets.  
                            </p>
                            <p class="mb-3"> Coway owns approximately 300 test standards, and each year, we establish and revise reliability test methods in keeping with changes in customer usage environment and technological development. Additionally, we are conducting reliability test standards verifications in partnership with global companies and quality certification in overseas markets.
                            </p>
                            <p class="f-80 mb-4">* The Korea Reliability Award, organized by the Korea Reliability Society, selects companies that contribute to the economic development of industries and countries and enhance customer satisfaction by improving the reliability of materials, parts, and products.
                            </p>
                        </div>
                    </section>

                    <hr class="py-2">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="b2" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">Product Reliability</h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                    <p class="pb-3 mb-3">To improve product reliability, Coway holds reliability test equipment for various fields such as environment, packaging/transportation, failure analysis, material/chemistry, software verification, and continuously introduced and operated more than 40 state-of-the-art analysis equipment. Moreover, wireless technology measurement equipment has been acquired to improve the reliability of IoCare products and the infrastructure to respond to various product development using IT technology secured by obtaining the IAQ (Indoor Air Quality) sensing technology verification capability.
                    </p>

                    <b-row class="mb-5">
                        <b-col class="col-12 col-sm-6 mb-3 mb-sm-0">
                            <h7 class="gray63 mb-0">Reliability Infrastructure Investment</h7>
                            <div class="f-80 gray6 mb-2">(Unit: million KRW)</div>
                            <b-img src="/images/82_1.svg" fluid></b-img>
                        </b-col>
                        <b-col class="col-12 col-sm-6">
                            <h7 class="gray63 mb-0">Coway Reliability Infrastructure</h7>
                            <div class="f-80 gray6 mb-2">(Unit: Cases)</div>
                            <b-table-simple responsive class="txt-table f-95">
                                <b-thead><b-tr>
                                    <b-td>Measuring Equipment</b-td><b-td>Testing Equipment</b-td><b-td>Test Jig</b-td><b-td>Total</b-td>
                                </b-tr></b-thead>
                                <b-tbody><b-tr>
                                    <b-td>263</b-td><b-td>207</b-td><b-td>130</b-td><b-td>600</b-td>
                                </b-tr></b-tbody>
                            </b-table-simple>
                        </b-col>
                    </b-row>
                
                    <hr class="py-2">
                    <h6-ancor hash="b2-1" :activated="activated" class="blue5 mb-3">Reliability Test Standards</h6-ancor>
                    <p class="mb-45">We are actively adopting external standards to obtain product and part reliability test capacity that satisfies global standard, we reviewed 6 advanced companies, International Standards (IEC, ISO), National Standards (KS, MIL, JIS, BS) and related organization standard (JEDEC, EIAJ) and developed test standards suitable for our products. Each year, we consistently establish and revise field failure cases and reliability test methods according to the customer usage environment, promptly responding to changes in the environment, technological development, and expansion of business scope and area.
                    </p>

                            <b-table-simple responsive class="num-table f-95 mb-2">
                                <b-thead><b-tr>
                                    <b-td class="text-left">Category</b-td><b-td class="text-left">Unit</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                                </b-tr></b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td class="text-left">Reliability Test Standards holding status</b-td><b-td class="text-left">cumulative cases</b-td><b-td>289</b-td><b-td>294</b-td><b-td>302</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">The number of revisions in the year</b-td><b-td class="text-left">cases</b-td><b-td>18</b-td><b-td>6</b-td><b-td>15</b-td>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>
                            <div class="f-80 fw-300 font-noto ml-1 mb-5">
                                * Reliability test items: 9 items including common, water purifier, purifier, bidet, electric range, and clothing purifier
                            </div>
                    
                        <p class="mb-45">Since 2009, HALT (Highly Accelerated Limit Test) has been implemented to analyze the correlation between the product load and the product life when severe stress is applied for accurately estimation of the product life in different product usage environments. We are improving the standards to secure accurate reliability in the actual usage environment by conducting comparative verification with actual field data.
                        </p>

                            <b-table-simple responsive class="num-table f-95 mb-5">
                                <b-thead><b-tr>
                                    <b-td class="text-left">Category</b-td><b-td class="text-left">Unit</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                                </b-tr></b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td class="text-left">HALT (Highly Accelerated Limit Test) holding status</b-td><b-td class="text-left">cumulative cases</b-td><b-td>33</b-td><b-td>35</b-td><b-td>36</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">The number of revisions in the year</b-td><b-td class="text-left">cases</b-td><b-td>1</b-td><b-td>2</b-td><b-td>1</b-td>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>

                    <hr class="py-2">                    
                    <h6-ancor hash="b2-2" :activated="activated" class="blue5 mb-3">Reliability Verification Capacity</h6-ancor>
                    <p class="mb-45"> Based on the prediction and analysis process of product failures in advance, we increase the level of design completeness and prevent defects and failures to improve product reliability.
                    </p>

                    <b-row no-gutters class="mb-45">
                        <b-col class="col-12 col-sm-6 pr-sm-3 mb-3 mb-sm-0">
                            <div class="px-3 blue7-box blue7 text-center d-flex align-items-center fw-500 border-bottom-blue7" style="height:66px;">DFMEA(Design Failure Modes and Effect Analysis)</div>
                            <div class="border-bottom-blue7 adjust-height-eng">
                                <p class="px-3 py-4">Through DFMEA system operation, we can more effectively prevent failures through systematically extract and analyze failure modes of each product structure. The process improves the product design completeness by evaluating the accuracy of the predicted failures and improvement measures. In 2019, a total of 32 DFMEA deliberations, including AIS3.0, were conducted that about 1,200 failure modes and causes of failures were predicted and proceeded with preventive designs.
                                </p>
                            </div>
                        </b-col>
                        <b-col class="col-12 col-sm-6 pl-sm-3 position-relative">
                            <div class="vertical-line-dotted position-absolute d-none d-sm-block" style="height: 74%; top: 23%;"></div>
                            <div class="px-3 blue7-box blue7 fw-500 text-center d-flex align-items-center justify-content-center" style="height:66px; z-index:10;">SSM(Stress-Strength Model)</div>
                            <div class="border-bottom-blue7 adjust-height-eng">
                                <p class="px-3 pt-4 mb-0"> Through SSM system establishment, we have structured and managed various knowledge such as past failure cases, usage environment data, and chemical use standards to improve efficiency in developing new products and parts and preventing recurrence of failure cases. Moreover, by collecting knowledge on failures related to the quality and development process, we structure and construct knowledge to improve repetitive design and verification due to failure, unit cost, and delay in the development schedule
                                </p>
                                <p class="px-3 pb-4 mb-0"> Since the introduction from 2016 to 2019, we have registered and managed a total of 835 knowledge in various fields, such as market quality, polymer materials, and electronic parts.
                                </p>
                            </div>
                        </b-col>
                    </b-row>

                    <p class="mb-5">Moreover, through the internal expert training program, R-Campus (Reliability Campus), essential training items are selected for each field of expertise and position to cultivate reliability experts. Externally, through cooperation with various external professional organizations such as Reliability Association of Korea , Korean Standards Association, and the FITI Test Research Institute, we provide opportunities for professional training to testers. We are striving to improve individual capabilities by supporting the acquisition of international certifications such as CRE(Certified Reliability Expert) and ISTA CPLP(International Safe Transit Association Certified Professional in Learning and Performance).
                    </p>
                    <hr class="py-3">                    

                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="b3" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">Safety Certification and Customer Satisfaction</h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-5">Coway expands the scope of safety certification acquisition based on an active safety certification laboratory and promotes rapid, proactive preparation for product safety. We provide reliable information to our customers through safety certification and secure agility in market competition. Also, by providing comprehensive safety and hygiene services to customers, we fulfill product responsibilities at the use stage.
                    </p>

                    <h6-ancor hash="b3-1" :activated="activated" class="blue5 mb-3">Safety Certification</h6-ancor>
                    <p class="mb-45 pb-2">Coway TQA Center operates 13 accredited laboratories related to product safety and responds to rapidly changing domestic and international safety trends and certification regulations. In 2019, the CTF(Customer's Testing Facility) test center, jointly operated by NEMKO(electric equipment manufacturing safety testing supervisory authority), a European accredited testing institute, was renewed to acquire ENEC and CB certifications, safety certifications for electrical and electronic products exported overseas. Cooperation was strengthened to make management more efficient. In 2019, the number of internal NEMKO ICSE(International Certified Safety Engineer) certified personnel were expanded to 4, and safety certification based on expertise was acquired.
                    </p>

                        <h7 class="mb-45 gray63">International Accredited Test Center Operation and Certification Status</h7>
                        <hj-img src="/images/306_2.svg" fluid></hj-img>
                        <hr class="mb-5 py-2">                    
                    
                    <h6-ancor hash="b3-2" :activated="activated" class="blue5 mb-3">Safety and Hygiene Satisfaction Service </h6-ancor>
                    <p class="mb-45">Coway promotes integrated management from product design to material selection and management services to ensure product hygiene and safety. In the product design process, hygienic maintenance and automated hygiene management systems such as parts replacement and cleaning are applied. In the case of a water purifier where water hygiene management is essential, we installed water path drainage mode, which automatically discharges the remaining amount of water in the faucet when using the water purifier, and introduced an automatic drainage system that automatically releases all water in the water purifier when it is not used for 24 hours. Also, to use safe materials, we examine the chemical content of all parts and develop new materials to replace them with safe materials. Also, for safety and hygiene management at the customer use stage: 1) we provide professional hygiene management tools for each product, 2) special care service for the full replacement of hygiene parts, 3) hygiene monitoring and warning alarms, 4) IoT technology-based product status information and other complex services.
                    </p>     
                        <hj-img src="/images/306_3.svg" fluid></hj-img>

                    <hr class="mb-5 py-3">                    
                    <section class="border-blue px-4 py-3 mb-5">
                        <p class="blue5 fw-500 mt-2 mb-3 f-105"><b-badge class="rounded fw-400 bg-blue5 f-90 p-1 mr-2"> Case.</b-badge>Prime Minister’s Citation for Excellent Service Quality at "Korean National Quality Award" in 2019 </p>
                        <p class="mb-3">At the 2019 Korean National Quality Management Convention, Coway received the Prime Minister's Citation for Excellent Service Quality and recognized as the "Company with Excellent Quality Competitiveness", for its service competitiveness and product reliability. Coway strengthened the service from the customer's perspective by expanding the standard and scope of service inspection and highly regarded for taking proactive hygiene care. We introduced the "CODY Service Kit", which informs the contents of the service that manages the inside of the water purifier with sterilized water through sounds and screens to improve service expertise and hygiene. Moreover, we strengthened our management level by implementing the "Special Care Service", which replaces the main sanitary parts of the water purifier 1 ~ 2 times free of charge during the rental period.
                        </p>
                        <p class="mb-3">Coway was recognized for improving product safety by establishing a systematic quality management system that developed the industry's highest level of reliability test standards and introduced a "Quality Verification System" that examines completeness in all processes from new product development to production. Coway will continue to strive for product responsibility and quality management through the "Infinite Responsibility Committee," which will comprehensively discuss ways to improve product safety and service. 
                        </p>
                        <div class="f-80 font-noto fw-300 pb-2 gray55 word-break indent-sm">* National Quality Management Convention: A competition that recognizes companies that have contributed to the competitiveness of the national industry by increasing customer satisfaction and achieving excellent management performance through continuous service and manufacturing quality innovation activities. (Organized by the National Institute of Technology and Standards by the Ministry of Trade, Industry and Energy, hosted by Korean Standards Association)
                        </div>
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
            return this.is_ENG? 'Product Responsibility' : '제품 책임'
        },
        sub_titles(){
            let temp = [
                { 
                    title: this.is_ENG? 'Product Responsibility Governance': '제품 책임 거버넌스', hash: 'b1',
                    child: [
                        { title: this.is_ENG? 'Company wide Product Responsibility and Quality Mgt.':'전사적 제품 책임 및 품질경영 거버넌스 - 무한책임위원회, PIC360', hash: 'b1-1' }, 
                        { title: this.is_ENG? 'Trust and Quality Assurance Center': 'TQA센터(Trust & Quality Assurance Center)', hash: 'b1-2' }, 
                    ]
                },
                { 
                    title: this.is_ENG? 'Product Reliability':'제품 신뢰성 강화', hash: 'b2',
                    child: [
                        { title: this.is_ENG? 'Reliability Test Standards': '신뢰성 시험 표준 개발', hash: 'b2-1'},
                        { title: this.is_ENG? 'Reliability Verification Capacity':'신뢰성 검증 역량 강화', hash: 'b2-2'}
                    ] 
                },
                {
                    title: this.is_ENG? 'Safety Certification and Customer Satisfaction': '안전 인증 확대 및 고객 안심', hash: 'b3',
                    child: [
                        { title: this.is_ENG? 'Safety Certification': '제품 안전 인증 확대', hash: 'b3-1'},
                        { title: this.is_ENG? 'Safety and Hygiene Mgt. Service': '안전 및 위생 안심 서비스', hash: 'b3-2'}
                    ]
                }
            ]
            return temp            
        }
    },    
    methods:{
        safeHash(target){
            return ih.safeHash(target)
        },
    },
    components:{
        SideNavigation,
        h6Ancor,
        h4Ancor
    }
}
</script>
<style scoped lang="scss">
.adjust-height{
    height: 80%;
}
.adjust-height-eng{
    height: 86%;
}
@media (max-width: 576px) {
    .adjust-height, .adjust-height-eng{
        height: auto;
    }
}
</style>
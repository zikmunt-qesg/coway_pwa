<template>
<div class="position-relative page-top-bg-news min-vh-100">
    <logger title="이 보고서에 대하여"></logger>
    <div class="w-100 bg-white bg-white-cover-news position-absolute"></div>

    <b-row no-gutters class="py-5">
        <b-col class="py-3 mt-md-4 mt-lg-5 text-center"><h2 class="fw-400">ABOUT THIS REPORT &amp; ASSURANCE</h2></b-col>
    </b-row>
   
    <b-container v-if="this.$store.state.is_ENG==false">
        <b-row>
            <b-col class="col-0 col-lg-1"></b-col>
            <b-col class="col-12 col-lg-10 px-0">
                <b-nav tabs class="">
                    <b-nav-item :active="show_page=='About-This-Report'" @click.stop.prevent="showTab('About-This-Report')" class="f-110 fw-400 border-0"> 이 보고서에 대하여 </b-nav-item>
                    <b-nav-item :active="show_page=='Independent-Assurance-Statement'" @click.stop.prevent="showTab('Independent-Assurance-Statement')" class="f-110 fw-400 border-0"> 제3자 검증의견서 </b-nav-item>
                    <b-nav-item :active="show_page=='GHG-Assurance-Statement'" @click.stop.prevent="showTab('GHG-Assurance-Statement')" class="f-110 fw-400 border-0"> 환경 검증의견서 </b-nav-item>
                </b-nav>
            </b-col>
            <b-col class="col-0 col-lg-1"></b-col>
        </b-row>
        <b-row>
            <b-col class="col-0 col-lg-1"></b-col>
            <b-col class="col-12 col-lg-10 px-0">
                <b-card v-if="show_page=='About-This-Report'" class="border-0 px-4 py-5 fw-400">
                    <div class="px-md-2 px-lg-4 atr-content">
                        <div class="d-flex mb-4 position-relative overflow-hidden"><h4 class="parang7 bg-white pr-4 letter-narrow" style="z-index:10"> About This Report </h4><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                        <p>본 보고서는 코웨이의 열 다섯번 째 지속가능경영 보고서입니다. 코웨이는 2016년부터 매년 온라인으로 지속가능경영보고서를 발간하고 있습니다. 회사의 위험과 기회에 대하여 이해관계자의 의견을 심도 있게 수렴하고, 사회적 환경적 영향을 고려한 중요성 평가 과정을 거쳐 보고 콘텐츠를 결정하였습니다. 본 보고서는 글로벌리포팅이니셔티브(GRI, Global Reporting Initiatives)의 GRI Standard를 준수하여 작성하였습니다.  
                        <p>2019년 보고서는 인쇄물(책) 중심의 구조를 탈피하여 온라인 보고를 중심으로 기획된 보고서입니다. 이해관계자 여러분이 필요로 하는 정보에 손쉽게 접근할 수 있도록 네비게이션(목차)와 사이트 맵 구조를 전반적으로 재점검하고, 필요한 정보를 빠르게 확인할 수 있도록 검색 기능을 도입하였습니다. 사이트는 국문과 영문으로 이용할 수 있으며, 상단의 메인 메뉴 버튼을 통해 모든 콘텐츠를 확인할 수 있습니다. 사이트는 데스크탑 PC와 모바일에 모두 최적화되어 있으며, 반응형 레이아웃(Responsive Layout)<sup>*</sup>으로 구현됩니다.</p> 
                        <p>본 보고서는 제3자 검증 과정을 거쳐 2020년 6월 30일에 게시되었습니다.</p> 
                        <div class="f-85 fw-300 ml-1 mb-45 gray6">
                            * 반응형 레이아웃: 디스플레이의 종류에 따라 화면의 크기를 자동으로 최적화하는 웹사이트 <br>
                            <!-- **프로그레시브웹앱: 한번의 다운로드 만으로 모바일 앱처럼 인터넷 연결이 없는 오프라인에서도 웹사이트의 내용을 확인 가능 -->
                        </div>

                        <h7 class="parang6 f-110 fw-500">보고 범위</h7>
                        <p class="mb-45">서울 사무소, 연구소, 생산본부를 중심으로 작성하였으며, 이 보고 범위는 매출액 기준 최소 75% 이상에 해당합니다. 일부 성과는 글로벌 사업 현황을 포함하였습니다. 재무데이터는 연결실적 기준입니다.
                        </p>

                        <h7 class="parang6 f-110 fw-500">보고 기간</h7>
                        <p class="mb-45">2019년 1월 1일~2019년 12월 31일 동안의 지속가능경영 성과를 보고하고 있으며, 정량성과는 이해관계자가 변화 추이를 확인할 수 있도록 3개년 실적을 함께 공개하였습니다. 일부 주요 현안 또는 유의미한 활동과 성과에 대해서는 2020년 내용도 함께 보고하고 있습니다. 
                        </p>

                        <h7 class="parang6 f-110 fw-500">보고 기준</h7>
                        <p class="mb-45">글로벌리포팅이니셔티브(GRI, Global Reporting Initiatives)의 지속가능경영 보고 표준(GRI Standard)의 핵심(Core Option)을 충족하고 있습니다. 또한 국제통합보고위원회(IIRC, International Integrated Reporting Council)의 국제통합보고프레임워크, 미국 지속가능성회계기준위원회(SASB, Sustainability Accounting Standard Board)의 지속가능성회계표준을 함께 활용하였습니다.  
                        </p>

                        <h7 class="parang6 f-110 fw-500">독립 검증</h7>
                        <p class="mb-45">본 보고서에 담긴 재무정보는 독립 감사법인의 회계감사를 통해 작성되었으며, 비재무 정보는 보고 내용의 정확성과 신뢰성을 높이기 위하여 독립적 전문기관인 QESG(퀀티파이드이에스지)와 KMR로부터 검증을 받았습니다. 
                        </p>

                        <h7 class="parang6 f-110 fw-500">문의처</h7>
                        <b-table-simple responsive hover class="txt-table sustainability-table f-95">
                                <b-thead><b-tr>
                                    <b-td class="text-left"></b-td><b-td></b-td>
                                </b-tr></b-thead>
                                <b-tbody><b-tr>
                                    <b-td>주소</b-td>
                                    <b-td>04511 서울 중구 서소문로 88 삼성생명 서소문빌딩 11 ~ 18층 </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>담당</b-td>
                                    <b-td>홍보팀</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>이메일</b-td>
                                    <b-td>sustainability@coway.co.kr</b-td>
                                </b-tr></b-tbody>
                        </b-table-simple> 
                    </div>
                </b-card>

                <!-- Independent-Assurance-Statement -->
                <!-- Independent-Assurance-Statement -->
                <!-- Independent-Assurance-Statement -->

                <b-card v-else-if="show_page=='Independent-Assurance-Statement'" class="border-0 px-4 py-5 fw-400">
                    <div class="px-md-2 px-lg-4 atr-content">
                        <div class="d-flex mb-4 position-relative overflow-hidden font-noto"><h4 class="parang7 bg-white pr-4 letter-narrow-lg" style="z-index:10"> 독립된 검증인의 제3자 검증 보고서</h4><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                        <h7 class="parang6 f-110 fw-500">주식회사 코웨이 이해관계자 귀중</h7>
                        <p>퀀티파이드이에스지(이하 ‘검증인’)는 주식회사 코웨이(이하 ‘보고 기관’)가 발행한 ‘2019 코웨이 지속가능성 웹보고서(이하 ‘보고서’)에 대하여 제한적 검증(limited assurance engagement)을 수행하였으며, 다음과 같이 검증성명서(이하 ‘검증 의견’)를 제출합니다.
                        </p>
                        <p class="mb-45 indent"> &rtrif; 검증대상: 2019 코웨이 지속가능성 웹보고서 http://sustainability.coway.co.kr <br>
                            (2020년 6월 30일 기준, 보고기간: 2019년 1월 ~ 2019년 12월)
                        </p>
                        <h7 class="parang6 f-110 fw-500">검증의 범위 및 제한 사항</h7>
                        <p class="mb-45"> 검증인의 검증 업무는 검증대상 보고서에 나타난 정보에 국한되었으며, 검증인은 외부 감사인에게 감사를 받는 재무 정보에 대해서는 검증하지 않았습니다. 또한 검증인은 보고 기관이 제시한 미래 전망(Forward-looking statements)에 대해서는 검증하지 않았습니다.
                        </p>
                        <h7 class="parang6 f-110 fw-500">코웨이 경영진의 책무</h7>
                        <p> 코웨이 경영진은 정확한 정보가 기술된 보고서를 작성하기 위한 내부 통제제도의 구현과 보고서에 표현된 정보에 대한 최종적 책임이 있습니다. 보고 기관은 다음 기준을 준용하여 보고서를 작성하였습니다. 
                        </p>
                        <p class="indent"> &rtrif; GRI(Global Reporting Initiatives) 보고 표준 – 핵심 부합방법(Core Option)
                        </p>
                        <p class="mb-45 indent"> &rtrif; SASB(지속가능성회계표준, Sustainability Accounting Standard Board)의 가전제품 제조(Appliance Manufacturing) 및 전문 및 상업서비스(Professional and Commercial Service) 기준
                        </p>
                        <h7 class="parang6 f-110 fw-500">독립성 및 내부 통제</h7>
                        <p class="mb-45"> 본 검증인은 독립된 검증 기관으로서 보고 내용의 생산, 작성에 관여하지 않았으며, 작성된 보고서에 대한 객관적 검증 업무를 토대로 검증 의견을 작성할 책임을 지니고 있습니다. 본 검증인은 검증 업무를 수행하는데 독립성을 저해할 수 있는 어떠한 이해관계도 보고 기관과 맺고 있지 않습니다.
                        </p>
                        <h7 class="parang6 f-110 fw-500">검증인의 책무와 검증 진행경과</h7>
                        <p class="mb-1"> 검증인은 국제적 비재무 정보 검증 기준 ISAE3000(International Standard on Assurance Engagement 3000)에 따라 보고서에 나타난 지표 및 정보의 균형성, 비교가능성, 정확성, 적시성, 명확성, 신뢰성을 보고 기관으로부터 제시 받은 문서 기반 정보 및 인터뷰를 통해 확인하였습니다. 
                        </p>
                        <p>본 검증 업무는 다음과 같은 방법으로 진행되었습니다.
                        </p>
                        <ul class="footnote-ul line-height-low mb-5 f-95 fw-300">
                            <li><span class="gray7">지속가능성 전략 및 중요 성과 지표(Materiality Matrix)에 대한 책임자 인터뷰</span></li>
                            <li><span class="gray7">이해관계자 참여 과정, 결과, 외부 미디어 및 동종 기업 지속가능성 보고서를 통해 결정된 중요 주제에 대한 리뷰</span></li>
                            <li><span class="gray7">GRI 보고 표준에 따라 작성된 각 지표별 데이터 수집 및 작성 절차, 내부 통제의 신뢰성 확인을 위한 담당자 인터뷰</span></li>
                            <li><span class="gray7">보고 기관의 지속가능성 정보 수집, 분석, 종합 절차의 평가를 위한 샘플링 기반의 서면 자료 평가</span></li>
                            <li><span class="gray7">GRI 보고 핵심 부합방법(Core Option) 충족 여부 판단</span></li>
                            <li><span class="gray7">SASB 가전제품 제조, 전문 및 상업서비스 주요 지표 보고사항에 대한 리뷰</span></li>
                            <li><span class="gray7">전반적인 지속가능성 보고 품질에 대한 리뷰</span></li>
                        </ul>
                        <div class="d-flex justify-content-between align-items-center"><h7 class="fw-500">GRI 검증 범위<sup>*</sup></h7><div class="f-85 gray6 fw-300">* 각 주제별 MA를 포함함</div></div>
                            <b-table-simple responsive class="txt-table sustainability-table f-95 mb-5">
                                <b-thead><b-tr>
                                    <b-td style="width:65%">GRI Topic</b-td><b-td>Disclosures</b-td>
                                </b-tr></b-thead>
                                <b-tbody>
                                    <b-tr><b-td>경제성과(Economic Performance)</b-td><b-td>201-1, 201-2, 201-3, 201-4</b-td></b-tr>
                                    <b-tr><b-td>시장지위(Market Presence)</b-td> <b-td>202-1</b-td></b-tr>
                                    <b-tr><b-td>간접경제효과(Indirect Economic Impacts)</b-td> <b-td>203-1, 203-2</b-td></b-tr>
                                    <b-tr><b-td>반부패(Anti-Corruption)</b-td> <b-td>205-1, 205-2, 205-3</b-td></b-tr>
                                    <b-tr><b-td>경쟁저해행위(Anti-Competitive Behavior)</b-td> <b-td>206-1</b-td></b-tr>
                                    <b-tr><b-td>원재료(Materials)</b-td> <b-td>301-1, 301-2, 301-3</b-td></b-tr>
                                    <b-tr><b-td>에너지(Energy)</b-td>	<b-td>302-1, 302-2, 302-3, 302-4, 302-5</b-td></b-tr>
                                    <b-tr><b-td>용수(Water)</b-td> <b-td>303-1, 303-2, 303-3</b-td></b-tr>
                                    <b-tr><b-td>배출(Emissions)</b-td> <b-td>305-1, 305-2, 305-3, 305-4, 305-5</b-td></b-tr>
                                    <b-tr><b-td>폐수 및 폐기물(Effluents and Waste)</b-td> <b-td>306-1, 306-2, 306-3, 306-4, 306-5</b-td></b-tr>
                                    <b-tr><b-td>환경 규제준수(Environmental Compliance)</b-td> <b-td>307-1</b-td></b-tr>
                                    <b-tr><b-td>공급업체 환경평가(Supplier Environmental Assessment)</b-td> <b-td>308-1, 308-2</b-td></b-tr>
                                    <b-tr><b-td>고용(Employment)</b-td><b-td>401-1, 401-2, 401-3</b-td></b-tr>
                                    <b-tr><b-td>노사관계(Labor/Management Relations)</b-td><b-td>402-1</b-td></b-tr>
                                    <b-tr><b-td>산업안전보건(Occupational Health and Safety)</b-td><b-td>403-1, 403-2, 403-3, 403-4</b-td></b-tr>
                                    <b-tr><b-td>훈련 및 교육(Training and Education)</b-td><b-td>404-1, 404-2, 404-3</b-td></b-tr>
                                    <b-tr><b-td>다양성과 기회균등(Diversity and Equal Opportunity)</b-td><b-td>405-1, 405-2</b-td></b-tr>
                                    <b-tr><b-td>차별금지(Non-Discrimination)</b-td><b-td>406-1</b-td></b-tr>                                
                                    <b-tr><b-td>결사 및 단체교섭의 자유(Freedom of Association and Collective Bargaining)</b-td><b-td>407-1</b-td></b-tr>
                                    <b-tr><b-td>아동노동(Child Labor)</b-td><b-td>408-1</b-td></b-tr>
                                    <b-tr><b-td>강제노동(Forced or Compulsory Labor)</b-td><b-td>409-1</b-td></b-tr>
                                    <b-tr><b-td>인권평가(Human Rights Assessment)</b-td><b-td>412-1, 412-2, 412-3</b-td></b-tr>
                                    <b-tr><b-td>지역사회(Local Communities)</b-td><b-td>413-1, 413-2</b-td></b-tr>
                                    <b-tr><b-td>공급업체 사회평가(Supplier Social Assessment)</b-td><b-td>414-1, 414-2</b-td></b-tr>
                                    <b-tr><b-td>공공정책(Public Policy)</b-td><b-td>415-1</b-td></b-tr>
                                    <b-tr><b-td>고객 안전 보건(Customer Health and Safety)</b-td><b-td>416-1, 416-2</b-td></b-tr>
                                    <b-tr><b-td>마케팅 및 라벨링(Marketing and Labeling)</b-td><b-td>417-1, 417-2, 417-3</b-td></b-tr>
                                    <b-tr><b-td>고객개인정보보호(Customer Privacy)</b-td><b-td>418-1</b-td></b-tr>
                                    <b-tr><b-td>사회경제적 컴플라이언스(Socioeconomic Compliance)</b-td><b-td>419-1</b-td></b-tr>
                                </b-tbody>
                            </b-table-simple>
                        <h7 class="parang6 f-110 fw-500">검증 결과</h7>
                        <p> 상기 기술된 검증 절차에 따른 검증 수행 결과 검증인은 관련 보고 기준 및 이해관계자의 판단에 영향을 미칠 수 있는 모든 중요한 측면에 대하여, 보고서가 적절치 않게 준비되었다고 결론 내릴 수 있는 어떠한 증거도 발견하지 못하였습니다.
                        </p>
                        <p class="mb-4"> 본 검증인은 보고 기관에 다음의 내용을 제언하는 바입니다.
                        </p>
                        <div class="border-left-gray pl-4 fw-300 gray6 mb-4">기업 평가 요소로서 지속가능한 성장과 발전을 위해 기업이 야기하는 사회-환경 영향을 측정하고 관리하는 것이 중요해지고 있는 추세입니다. 투입(Input), 활동(Activities), 산출(Outputs), 성과(Outcomes)로 구성되는 영향 평가 단계별로 흐름에 따른 중요 지표(Indicator)를 선정하고 도출되는 정성, 정량 자료들을 활용하여 기업의 중장기적 영향을 평가하는 체계를 갖추어 갈 것을 권고 드립니다.
                        </div>
                        <hr>
                        <div class="text-right parang7"> 2020년 06월</div>
                        <hr>
                        <div class="text-right"> (주)퀀티파이드이에스지 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 대 표 &nbsp;&nbsp;&nbsp; 배 익 현</div>
                    </div>
                </b-card>

                <!-- GHG-Assurance-Statement -->
                <!-- GHG-Assurance-Statement -->
                <!-- GHG-Assurance-Statement -->

                <b-card v-else-if="show_page=='GHG-Assurance-Statement'" class="border-0 px-4 py-5 fw-400">
                    <div class="px-md-2 px-lg-4 atr-content">
                        <div class="d-flex mb-45 position-relative overflow-hidden"><h4 class="parang7 bg-white pr-4 letter-narrow-lg" style="z-index:10"> 온실가스 &middot; 태양광 &middot; 물 검증의견서</h4><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    
                            <h7 class="f-110 mb-3">온실가스 &middot; 태양광 검증 의견서</h7>
                                <b-button-group class="mb-3 w-100">
                                    <b-button variant="light" href="/documents/[KMR]GHG,_Solar_Verification_Statement_Coway_CY2019_KOR.pdf" target="_blank" class=" font-noto see-policy">온실가스 태양광 검증의견서 2019년</b-button>
                                    <b-button variant="light" href="/documents/[KMR]GHG,_Solar_Verification_Statement_Coway_CY2019_KOR.pdf" download class=""> 다운로드<i class="fas fa-file-download ml-2"></i> </b-button>
                                </b-button-group>
                                <b-button-group class="mb-3 w-100">
                                    <b-button variant="light" href="/documents/[KMR]GHG,_Solar_Verification_Statement_Coway_CY2018_KOR.pdf" target="_blank" class=" font-noto see-policy">온실가스 태양광 검증의견서 2018년</b-button>
                                    <b-button variant="light" href="/documents/[KMR]GHG,_Solar_Verification_Statement_Coway_CY2018_KOR.pdf" download class=""> 다운로드<i class="fas fa-file-download ml-2"></i> </b-button>
                                </b-button-group>
                                <b-button-group class="mb-3 w-100">
                                    <b-button variant="light" href="/documents/[KMR]GHG,_Solar_Verification_Statement_Coway_CY2017_KOR.pdf" target="_blank" class=" font-noto see-policy">온실가스 태양광 검증의견서 2017년</b-button>
                                    <b-button variant="light" href="/documents/[KMR]GHG,_Solar_Verification_Statement_Coway_CY2017_KOR.pdf" download class=""> 다운로드<i class="fas fa-file-download ml-2"></i> </b-button>
                                </b-button-group>                                    
                            <hr>
                            <h7 class="f-110 mb-3">물 사용량 검증의견서</h7>
                                <b-button-group class="mb-3 w-100">
                                    <b-button variant="light" href="/documents/[KMR]Water_Verification_Statement_Coway_CY2019_KOR.pdf" target="_blank" class=" font-noto see-policy">물 사용량 검증의견서 2019년</b-button>
                                    <b-button variant="light" href="/documents/[KMR]Water_Verification_Statement_Coway_CY2019_KOR.pdf" download class=""> 다운로드<i class="fas fa-file-download ml-2"></i> </b-button>
                                </b-button-group>
                                <b-button-group class="mb-3 w-100">
                                    <b-button variant="light" href="/documents/[KMR]Water_Verification_Statement_Coway_CY2018_KOR.pdf" target="_blank" class=" font-noto see-policy">물 사용량 검증의견서 2018년</b-button>
                                    <b-button variant="light" href="/documents/[KMR]Water_Verification_Statement_Coway_CY2018_KOR.pdf" download class=""> 다운로드<i class="fas fa-file-download ml-2"></i> </b-button>
                                </b-button-group>
                                <b-button-group class="mb-3 w-100">
                                    <b-button variant="light" href="/documents/[KMR]Water_Verification_Statement_Coway_CY2017_KOR.pdf" target="_blank" class=" font-noto see-policy">물 사용량 검증의견서 2017년</b-button>
                                    <b-button variant="light" href="/documents/[KMR]Water_Verification_Statement_Coway_CY2017_KOR.pdf" download class=""> 다운로드<i class="fas fa-file-download ml-2"></i> </b-button>
                                </b-button-group>                                    
                    </div>
                </b-card>              
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
                    <b-nav-item :active="show_page=='About-This-Report'" @click.stop.prevent="showTab('About-This-Report')" class="fw-400 border-0"> About This Report </b-nav-item>
                    <b-nav-item :active="show_page=='Independent-Assurance-Statement'" @click.stop.prevent="showTab('Independent-Assurance-Statement')" class="fw-400 border-0"> Independent Assurance Statement </b-nav-item>
                    <b-nav-item :active="show_page=='GHG-Assurance-Statement'" @click.stop.prevent="showTab('GHG-Assurance-Statement')" class="fw-400 border-0"> GHG Assurance Statement </b-nav-item>
                </b-nav>
            </b-col>
            <b-col class="col-0 col-lg-1"></b-col>
        </b-row>
        <b-row>
            <b-col class="col-0 col-lg-1"></b-col>
            <b-col class="col-12 col-lg-10 px-0">
                <b-card v-if="show_page=='About-This-Report'" class="border-0 px-4 py-5 fw-400">
                    <div class="px-md-2 px-lg-4 atr-content">
                        <div class="d-flex mb-4 position-relative overflow-hidden"><h4 class="parang7 bg-white pr-4 letter-narrow" style="z-index:10"> About This Report </h4><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                        <p>This report is the 15th Coway Sustainability Report. Since 2016, Coway has published an online sustainability report every year. We gathered opinions of stakeholders in-depth about the company's risks and opportunities. We decided on the content through a materiality assessment process that considered social and environmental impacts. This report was prepared in compliance with the GRI Standards of the Global Reporting Initiatives (GRI).
                        </p>
                        <p>The 2019 report is the first report centered on online reporting, breaking away from the structure centered on printed materials (books). To make it easy for stakeholders to access the information they need, we revisited the overall structure of the navigation (table of contents) and site map and introduced a search function to check the necessary information quickly. The site is available in Korean and English, and all content can be checked through the main menu button at the top. The site is optimized for both desktop PC and mobile, and it is implemented with Responsive Layout*.
                        </p>
                        <p>This report was published on June 30, 2020, after a third-party assurance process.
                        </p> 
                        <div class="f-85 fw-300 ml-1 mb-45 gray6">
                            *Responsive layout: Website that automatically optimizes the screen size according to the type of display.
                        </div>

                        <h7 class="parang6 f-110 fw-500">Reporting Scope</h7>
                        <p class="mb-45">Focused mainly in the office, research institute, and production headquarter in Seoul, the reporting scope is more than 75% of sales. Some achievements have included global business status. Financial data is based on consolidated performance.
                        </p>

                        <h7 class="parang6 f-110 fw-500">Reporting Period</h7>
                        <p class="mb-45">Sustainability management performance is reported from January 1, 2019, to December 31, 2019. Quantitative results are disclosed together with three-year results so that stakeholders can see the change. Some major issues or significant activities and achievements are also reported in 2020.
                        </p>

                        <h7 class="parang6 f-110 fw-500">Reporting Standards</h7>
                        <p class="mb-45">This report meets the core option of the GRI Standard of the Global Reporting Initiatives(GRI). Also, the International Integrated Reporting Council(IIRC) and the Sustainability Accounting Standard Board(SASB) were used together.
                        </p>

                        <h7 class="parang6 f-110 fw-500">Reporting Assurance</h7>
                        <p class="mb-45">The financial information contained in this report was prepared through an independent audit firm's accounting audit. Non-financial information was verified by QuantifiedESG, Inc., an independent professional organization, and KMR, a management certification provider to increase the report's accuracy and reliability.
                        </p>

                        <h7 class="parang6 f-110 fw-500">Reporting Inquiry</h7>
                        <b-table-simple responsive hover class="txt-table sustainability-table f-95">
                                <b-thead><b-tr>
                                    <b-td class="text-left"></b-td><b-td></b-td>
                                </b-tr></b-thead>
                                <b-tbody><b-tr>
                                    <b-td>Address</b-td>
                                    <b-td>04511 11~18F, JoongAng Ilbo Bldg., 88, Seosomun-ro, Jung-gu, Seoul</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>Department</b-td>
                                    <b-td>PR Team</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>E-mail</b-td>
                                    <b-td>sustainability@coway.co.kr</b-td>
                                </b-tr></b-tbody>
                        </b-table-simple> 
                    </div>
                </b-card>

                <!-- Independent-Assurance-Statement -->
                <!-- Independent-Assurance-Statement -->

                <b-card v-else-if="show_page=='Independent-Assurance-Statement'" class="border-0 px-4 py-5 fw-400">
                    <div class="px-md-2 px-lg-4 atr-content">
                        <div class="d-flex mb-4 position-relative overflow-hidden font-noto"><h4 class="parang7 bg-white pr-4 letter-narrow-lg" style="z-index:10"> Independent Assurance Statement</h4><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                        <h7 class="parang6 f-110 fw-500">To the Management of Coway Stakeholders</h7>
                        <p> Quantified ESG (hereinafter the "verifier") has undertaken limited assurance engagement on the “2019 Coway Sustainability Web Report” (hereinafter "Report") from Coway (hereinafter the "Reporting Authority"), and submit a verification statement (hereinafter "Verification opinion") as follow:
                        </p>
                        <p class="mb-45 indent"> &rtrif; Verifying Target: 2019 Coway Sustainability Web Report http://sustainability.coway.co.kr <br>
                            (As of June 30, 2020, reporting period: January 2019 to December 2019)
                        </p>
                        <h7 class="parang6 f-110 fw-500">Limitations of the engagement</h7>
                        <p> The verifier was limited to the information listed above. The verifier has not assessed the following information disclosed in the report:
                        </p>
                        <p class="mb-1 indent"> &rtrif; The financial information audited by external auditors. 
                        </p>
                        <p class="mb-45 indent"> &rtrif; The forward-looking statements presented by the reporting body.
                        </p>
                        <h7 class="parang6 f-110 fw-500">Responsibility of Coway’s management</h7>
                        <p class=""> The management of Coway is responsible for the preparation of the report and the information contained therein in accordance with the applicable criteria. This responsibility includes the implementation of an internal control system to produce a report describing the correct information. The reporting agency prepared the report by the following criteria:
                        </p>
                        <p class="mb-1 indent"> &rtrif; GRI (Global Reporting Initiatives) Reporting Standard – Core Option
                        </p>
                        <p class="mb-45 indent"> &rtrif; SASB (Sustainability Accounting Standard Board) Appliance Manufacturing and Professional and Commercial Service Standard
                        </p>
                        
                        <h7 class="parang6 f-110 fw-500">Independence and Quality Control </h7>
                        <p class="mb-45"> As an independent assurance agency, the verifier was not involved in the production or preparation of the report and is responsible for writing verification opinions based on objective verification work for the report. The verifier does not have any interests with the reporting agency that may impair its independence in performing the verification work.
                        </p>

                        <h7 class="parang6 f-110 fw-500">Our responsibility</h7>
                        <p class="mb-45"> The verifier confirmed the comparability, accuracy, timeliness, clarity, and reliability of the indicators and information presented in the report based on ISAE3000 (International Standard on Assurance Engagement 3000), an international non-financial information assurance standard, through information and interviews based on the documents from the reporting agency. 
                        </p>
                        <p class="mb-1"> Our limited assurance procedures included, amongst others, the following work:
                        </p>    
                        <ul class="footnote-ul line-height-low mb-5 f-95 fw-300">
                            <li><span class="gray7">Interviews with representatives of senior management and employees regarding the sustainability strategy and the materiality matrix</span></li>
                            <li><span class="gray7">Review of material topics against key issues raised in stakeholder dialogues, areas of performance covered in external media reports and sustainability reports</span></li>
                            <li><span class="gray7">Interviews with employees responsible for preparing the GRl-based sustainability reporting to assess the process of preparing the report, the reporting system, the data capture and compilation methods as well as internal controls to the extent relevant for a review of the report </span></li>
                            <li><span class="gray7">Review of the documentation of the systems and processes for compiling, analyzing, and aggregating sustainability data and testing of the reporting agency on a sample basis</span></li>
                            <li><span class="gray7">Review of the application of the GRI Sustainability Reporting Standards in accordance with the Core Option </span></li>
                            <li><span class="gray7">Review of the material indicators of SASB (Sustainability Accounting Standard Board) Appliance Manufacturing and Professional and Commercial Service Standard </span></li>
                            <li><span class="gray7">Evaluation of the overall quality of sustainability information provided in the report</span></li>
                        </ul>
                        <div class="d-flex justify-content-between align-items-center"><h7 class="fw-500">GRI Verification Scope<sup>*</sup></h7><div class="f-85 gray6 fw-300">* Including MA for each subject</div></div>
                            <b-table-simple responsive class="txt-table sustainability-table f-90 mb-5">
                                <b-thead><b-tr>
                                    <b-td style="width:65%">GRI Topic</b-td><b-td>Disclosures</b-td>
                                </b-tr></b-thead>
                                <b-tbody>
                                    <b-tr><b-td>Economic Performance</b-td><b-td>201-1, 201-2, 201-3, 201-4</b-td></b-tr>
                                    <b-tr><b-td>Market Presence</b-td> <b-td>202-1</b-td></b-tr>
                                    <b-tr><b-td>Indirect Economic Impacts</b-td> <b-td>203-1, 203-2</b-td></b-tr>
                                    <b-tr><b-td>Anti-Corruption</b-td> <b-td>205-1, 205-2, 205-3</b-td></b-tr>
                                    <b-tr><b-td>Anti-Competitive Behavior</b-td> <b-td>206-1</b-td></b-tr>
                                    <b-tr><b-td>Materials</b-td> <b-td>301-1, 301-2, 301-3</b-td></b-tr>
                                    <b-tr><b-td>Energy</b-td>	<b-td>302-1, 302-2, 302-3, 302-4, 302-5</b-td></b-tr>
                                    <b-tr><b-td>Water</b-td> <b-td>303-1, 303-2, 303-3</b-td></b-tr>
                                    <b-tr><b-td>Emissions</b-td> <b-td>305-1, 305-2, 305-3, 305-4, 305-5</b-td></b-tr>
                                    <b-tr><b-td>Effluents and Waste</b-td> <b-td>306-1, 306-2, 306-3, 306-4, 306-5</b-td></b-tr>
                                    <b-tr><b-td>Environmental Compliance</b-td> <b-td>307-1</b-td></b-tr>
                                    <b-tr><b-td>Supplier Environmental Assessment</b-td> <b-td>308-1, 308-2</b-td></b-tr>
                                    <b-tr><b-td>Employment</b-td><b-td>401-1, 401-2, 401-3</b-td></b-tr>
                                    <b-tr><b-td>Labor/Management Relations</b-td><b-td>402-1</b-td></b-tr>
                                    <b-tr><b-td>Occupational Health and Safety</b-td><b-td>403-1, 403-2, 403-3, 403-4</b-td></b-tr>
                                    <b-tr><b-td>Training and Education</b-td><b-td>404-1, 404-2, 404-3</b-td></b-tr>
                                    <b-tr><b-td>Diversity and Equal Opportunity</b-td><b-td>405-1, 405-2</b-td></b-tr>
                                    <b-tr><b-td>Non-Discrimination</b-td><b-td>406-1</b-td></b-tr>                                
                                    <b-tr><b-td>Freedom of Association and Collective Bargaining</b-td><b-td>407-1</b-td></b-tr>
                                    <b-tr><b-td>Child Labor</b-td><b-td>408-1</b-td></b-tr>
                                    <b-tr><b-td>Forced or Compulsory Labor</b-td><b-td>409-1</b-td></b-tr>
                                    <b-tr><b-td>Human Rights Assessment</b-td><b-td>412-1, 412-2, 412-3</b-td></b-tr>
                                    <b-tr><b-td>Local Communities</b-td><b-td>413-1, 413-2</b-td></b-tr>
                                    <b-tr><b-td>Supplier Social Assessment</b-td><b-td>414-1, 414-2</b-td></b-tr>
                                    <b-tr><b-td>Public Policy</b-td><b-td>415-1</b-td></b-tr>
                                    <b-tr><b-td>Customer Health and Safety</b-td><b-td>416-1, 416-2</b-td></b-tr>
                                    <b-tr><b-td>Marketing and Labeling</b-td><b-td>417-1, 417-2, 417-3</b-td></b-tr>
                                    <b-tr><b-td>Customer Privacy</b-td><b-td>418-1</b-td></b-tr>
                                    <b-tr><b-td>Socioeconomic Compliance</b-td><b-td>419-1</b-td></b-tr>
                                </b-tbody>
                            </b-table-simple>
                        <h7 class="parang6 f-110 fw-500">Our Conclusion</h7>
                        <p> Based on the procedures we have performed and the evidence we have obtained, nothing has come to our attention that causes us to believe that the report has been prepared inappropriately for all important aspects that may affect the relevant reporting standards and judgment of stakeholders.
                        </p>
                        <p class="mb-4"> The verifier suggests the following to the reporting agency:
                        </p>
                        <div class="border-left-gray pl-4 fw-300 gray6 mb-4"> It is becoming increasingly important to measure and manage the company’s social-environmental impacts for sustainable growth and development as a company evaluation factor. We suggest that you establish a system that evaluates the medium and long-term impact of a company by utilizing qualitative, quantitative data derived from selecting material indicators according to the flow of Impact Evaluation Steps: Input, Activities, Output, and Outcome.
                        </div>
                        <hr>
                        <div class="text-right parang7"> June 2020</div>
                        <hr>
                        
                        <div class="text-right pb-2"> CEO &nbsp;&nbsp;&nbsp;&nbsp; Ikhyun Bae</div>
                        <div class="text-right f-95 mt-3">QuantifiedESG, Inc.</div>
                    </div>
                </b-card>

                <!-- GHG-Assurance-Statement -->
                <!-- GHG-Assurance-Statement -->
                <!-- GHG-Assurance-Statement -->

                <b-card v-else-if="show_page=='GHG-Assurance-Statement'" class="border-0 px-4 py-5 fw-400">
                    <div class="px-md-2 px-lg-4 atr-content">
                        <div class="d-flex mb-45 position-relative overflow-hidden"><h4 class="parang7 bg-white pr-4 letter-narrow-lg" style="z-index:10"> GHG &middot; Solar &middot; Water Verification Statement</h4><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    
                            <h7 class="f-110 mb-3">GHG, Solar Verification Statement Coway</h7>
                                <b-button-group class="mb-3 w-100">
                                    <b-button variant="light" href="/documents/[KMR]GHG,_Solar_Verification_Statement_Coway_CY2019.pdf" target="_blank" class=" font-noto see-policy">GHG &middot; Solar Verification Statement CY2019</b-button>
                                    <b-button variant="light" href="/documents/[KMR]GHG,_Solar_Verification_Statement_Coway_CY2019.pdf" download class=""> download<i class="fas fa-file-download ml-2"></i> </b-button>
                                </b-button-group>
                                <b-button-group class="mb-3 w-100">
                                    <b-button variant="light" href="/documents/[KMR]GHG,_Solar_Verification_Statement_Coway_CY2018.pdf" target="_blank" class=" font-noto see-policy">GHG &middot; Solar Verification Statement CY2018</b-button>
                                    <b-button variant="light" href="/documents/[KMR]GHG,_Solar_Verification_Statement_Coway_CY2018.pdf" download class=""> download<i class="fas fa-file-download ml-2"></i> </b-button>
                                </b-button-group>
                                <b-button-group class="mb-3 w-100">
                                    <b-button variant="light" href="/documents/[KMR]GHG,_Solar_Verification_Statement_Coway_CY2017.pdf" target="_blank" class=" font-noto see-policy">GHG &middot; Solar Verification Statement CY2017</b-button>
                                    <b-button variant="light" href="/documents/[KMR]GHG,_Solar_Verification_Statement_Coway_CY2017.pdf" download class=""> download<i class="fas fa-file-download ml-2"></i> </b-button>
                                </b-button-group>                                    
                            <hr>
                            <h7 class="f-110 mb-3">Water Verification Statement Coway</h7>
                                <b-button-group class="mb-3 w-100">
                                    <b-button variant="light" href="/documents/[KMR]Water_Verification_Statement_Coway_CY2019.pdf" target="_blank" class=" font-noto see-policy">Water Verification Statement CY2019</b-button>
                                    <b-button variant="light" href="/documents/[KMR]Water_Verification_Statement_Coway_CY2019.pdf" download class=""> download<i class="fas fa-file-download ml-2"></i> </b-button>
                                </b-button-group>
                                <b-button-group class="mb-3 w-100">
                                    <b-button variant="light" href="/documents/[KMR]Water_Verification_Statement_Coway_CY2018.pdf" target="_blank" class=" font-noto see-policy">Water Verification Statement CY2018</b-button>
                                    <b-button variant="light" href="/documents/[KMR]Water_Verification_Statement_Coway_CY2018.pdf" download class=""> download<i class="fas fa-file-download ml-2"></i> </b-button>
                                </b-button-group>
                                <b-button-group class="mb-3 w-100">
                                    <b-button variant="light" href="/documents/[KMR]Water_Verification_Statement_Coway_CY2017.pdf" target="_blank" class=" font-noto see-policy">Water Verification Statement CY2017</b-button>
                                    <b-button variant="light" href="/documents/[KMR]Water_Verification_Statement_Coway_CY2017.pdf" download class=""> download<i class="fas fa-file-download ml-2"></i> </b-button>
                                </b-button-group>                                    
                    </div>
                </b-card>              
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
        let return_data = {}
        if (query.p != null) {
            return_data.show_page = query.p
        }
        else{
            return_data.show_page = 'About-This-Report'
        }
        if(query.l && query.l == 'ENG'){
            store.commit('setLang', 'ENG')
        }
        return return_data        
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
            return this.is_ENG? 'About This Report and Assurance' : '이 보고서에 대하여'
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
    },
    
}
</script>
<style scoped lang="scss">
.nav-tabs{
    border:0;
}
.nav-link.active{
    border-color: white;
}

.atr-content p {
    font-size: 1.02rem;
    letter-spacing: -0.26px;
}
.see-policy{
    width:64%;
    text-align: left;
}
</style>
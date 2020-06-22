<template>
<div class="position-relative page-top-bg-sus min-vh-100">   
   <logger title="이해관계자 참여 및 중요 주제"></logger>
   <!-- <b-img src="/images/500.png" fluid class="page-top-img"></b-img> -->
    <div class="w-100 position-absolute bg-white" style="height:95%; top:600px; z-index:-1"></div>
    <b-container class="">
        <b-row class="pt-md-5 px-3">
            <h1 class="mt-5 mb-3 pt-3 text-center w-100 fw-400">CARE FOR SUSTAINABILITY</h1>
            <h7 class="mb-5 text-center w-100 fw-400">더 나은 세상을 향한 착한 믿음의 실천, 코웨이 지속가능경영 비전</h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="'이해관계자 참여 및 중요 주제'"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#5171b1'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0">
                <section class="bg-white px-4 py-4 mb-5">

                    <div class="border-top-dark pb-2 mb-5"></div>
                    <h4-ancor :title="'이해관계자 참여 및 중요 주제'" :activated="activated" class="parang8 mb-4 mb-sm-5">이해관계자 참여 및 중요 주제</h4-ancor>

                    <h6-ancor :title="'이해관계자 참여'" :activated="activated" class="parang7 f-130 fw-500 bg-white" style="z-index:10">이해관계자 참여</h6-ancor>
                    <p class="mb-5">코웨이는 기업 활동에 대해 영향을 주고받는 조직 내·외부의 주체를 이해관계자로 정의하고 이를 7개 그룹으로 나누어 관리하고 있습니다. 이해관계자 그룹 별 다양한 커뮤니케이션 채널을 운영하여 경영의 투명성을 제고하고 신뢰성 있는 관계를 구축해 나가고 있습니다. 코웨이의 이해관계자별 커뮤니케이션 채널은 각 담당부서에서 운영되며 주요 이슈는 경영위원회를 통해 검토됩니다. 
                    </p>

                    <!-- <hr class=""> -->
                        <h7 class="mb-3 gray63">이해관계자 커뮤니케이션 채널</h7>
                        <b-table-simple responsive class="sep-table f-90 mb-5">
                            <b-tbody><b-tr class="bg-parang7 fw-300 text-white">
                                <b-td class="border-0 py-0" style="width: 15%">이해관계자</b-td><b-td class="border-0 py-0" style="width: 38%">커뮤니케이션 채널</b-td><b-td class="border-0 py-0" style="width: 17%">커뮤니케이션 빈도</b-td><b-td class="border-0 py-0">주요 관심사</b-td>
                            </b-tr>
                                <b-tr>
                                    <b-td rowspan="3" style="width: 15%">고객<br><b-img src="/images/2_1.svg" class="mt-2"></b-img></b-td><b-td style="width: 38%">기업 홈페이지</b-td><b-td style="width: 17%">수시</b-td><b-td rowspan="3" class="custom-ul-li table-li"><ul><li>제품 안전성 및 품질 책임</li><li>철저한 개인정보보호</li><li>제품 및 서비스 체험 및 경험</li><li>고객 불편사항의 즉각적 해소</li></ul></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>미디어 및 보도자료</b-td><b-td>수시</b-td>
                                </b-tr>
                                <b-tr class="border-bottom">
                                    <b-td>VOD/콜센터</b-td><b-td>수시</b-td>
                                </b-tr>
                            
                                <b-tr>
                                    <b-td rowspan="4">주주·투자자<br><b-img src="/images/2_2.svg" class="mt-2"></b-img></b-td><b-td>정기 주주총회</b-td><b-td>연 1회</b-td><b-td rowspan="4" class="custom-ul-li table-li"><ul><li>기업 가치 구축</li><li>주주가치 제고</li><li>건전한 지배구조</li><li>사업 기회 및 위험 관리</li></ul></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>IR 미팅</b-td><b-td>수시</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>투자자/애널리스트 컨퍼런스 콜</b-td><b-td>수시</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>IR웹진</b-td><b-td>월 1회</b-td>
                                </b-tr>

                                <b-tr>
                                    <b-td rowspan="3">임직원<br><b-img src="/images/2_3.svg" class="mt-2"></b-img></b-td><b-td>노사협의회</b-td><b-td>연 1회</b-td><b-td rowspan="3" class="custom-ul-li table-li"><ul><li>공정한 성과 평가 및 보상</li><li>역량개발</li><li>일과 삶의 균형</li><li>다양성 기반의 기업문화</li></ul></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>사내 온라인 상담 채널(소나무 베이커리, 코러스)</b-td><b-td>수시</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>아이디어 제안 제도(상상오션)</b-td><b-td>수시</b-td>
                                </b-tr>

                                <b-tr>
                                    <b-td rowspan="3">파트너 및 협력사<br><b-img src="/images/2_4.svg" class="mt-2"></b-img></b-td><b-td>협력사 협의회(착한믿음 협의회)</b-td><b-td>연 4회</b-td><b-td rowspan="3" class="custom-ul-li table-li"><ul><li>협력사 상생협력</li><li>협력사 지속가능성 개발 지원</li><li>건강한 근무환경 조성</li></ul></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>협력사 온라인 상생포털</b-td><b-td>수시</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>파트너 간담회</b-td><b-td>수시</b-td>
                                </b-tr>

                                <b-tr>
                                    <b-td rowspan="3">지역사회<br><b-img src="/images/2_5.svg" class="mt-2"></b-img></b-td><b-td>지역 협의회</b-td><b-td>연 4회</b-td><b-td rowspan="3" class="custom-ul-li table-li"><ul><li>사회공헌 및 지역사회 활동 참여</li><li>지역 내 일자리 창출</li><li>지속가능한 지역 발전</li></ul></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>NGO 미팅</b-td><b-td>수시</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>사회공헌 사업 및 프로젝트</b-td><b-td>수시</b-td>
                                </b-tr>

                                <b-tr>
                                    <b-td rowspan="4">학계·언론<br><b-img src="/images/2_6.svg" class="mt-2"></b-img></b-td><b-td>기업지배구조 보고서</b-td><b-td>연 1회</b-td><b-td rowspan="4" class="custom-ul-li table-li"><ul><li>투명한 정보공개</li><li>ESG 데이터 및 성과 커뮤니케이션</li></ul></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>사업보고서 등 정기공시</b-td><b-td>연5회 이상</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>글로벌 ESG 평가참여</b-td><b-td>연6회 이상</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>지속가능경영 이니셔티브 참여</b-td><b-td>연4회 이상</b-td>
                                </b-tr>

                                <b-tr>
                                    <b-td rowspan="3">정부<br><b-img src="/images/2_7.svg" class="mt-2"></b-img></b-td><b-td>금융감독원 공시</b-td><b-td>수시</b-td><b-td rowspan="3" class="custom-ul-li table-li"><ul><li>조세납부 등 경제적 가치 분배</li><li>법규 준수 및 윤리경영</li></ul></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>법/규제 준수</b-td><b-td>수시</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>민관협력 사업</b-td><b-td>수시</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                    <hr class="py-3">
                    
                    <div class="d-flex mb-3 position-relative"> <h6-ancor :title="'중대성 평가'" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">중대성 평가</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-5"> 코웨이는 지속가능경영 측면의 중요 주제를 도출하기 위해 중대성 평가를 실시하고 있습니다. 코웨이가 중요 주제를 정의하는 방법은 대외 환경 변화 및 코웨이 전략 변화에 기반한 이슈 풀(Pool)을 구성하고, 사업적 연관성 및 이해관계자에의 영향력을 파악하여 우선순위 주제를 도출하는 과정으로 진행됩니다. 각 우선순위 주제는 코웨이의 사업적 가치 창출 측면에서의 영향 수준과 함께 중요 주제로 정의되며, 본 보고서 전반에 걸쳐 사업적 중요성 및 사회적 가치 창출 영향력, 경영 전략 및 목표, 활동 등에 대해 상세히 보고하고 있습니다. 
                    </p>
                    <hr class="py-1">
                    <h6-ancor :title="'Step 1. 이슈 풀(Pool)구성'" :activated="activated" class="parang6 mb-3 font-noto">Step 1. 이슈 풀(Pool)구성</h6-ancor>
                    <p class="mb-45">코웨이는 산업 및 기업환경의 변화를 반영하고 지속가능경영 측면의 핵심 화두를 반영한 중요 주제를 도출하기 위해 다양한 지표를 분석하여 이슈 풀(Pool)을 도출하고 있습니다. 글로벌 지속가능성 표준 및 이니셔티브 분석을 통해 최신 트랜드 및 거시적인 산업 환경의 변화를 파악하며, 코웨이의 변화를 밀접하게 반영하는 미디어 및 커뮤니케이션 키워드를 분석하여 핵심 이슈를 도출합니다. 이를 통해 2019년 코웨이의 이슈 풀(Pool)은 26개로 도출되었습니다.
                    </p>
                    <b-row class="mb-5">
                        <b-col class="col-12 col-sm-6">
                            <div class="py-3 px-3 parang8-box parang8 text-center fw-500">글로벌 지속가능성 표준 및 이니셔티브</div>
                            <div class="px-md-3 py-3 border-bottom-dark adjust-height-80">
                                <p class="parang6 fw-400 pt-2 pb-1 line-height-low"> 지속가능경영 보고 표준의 정보공개 요건, 글로벌 지속가능성 관련 표준 및 이니셔티브 주요 이슈 반영
                                </p>
                                <ul class="custom-ul line-height-low fw-300 f-90">
                                    <li>GRI (Global Reporting Initiative) Standards</li>
                                    <li>SASB (Sustainability Accounting Standards Board)</li>
                                    <li>UN SDGs (UN Sustainable Development Goals)</li>
                                    <li>ISO26000</li>
                                    <li class="mb-1">DJSI (Dow Jones Sustainability Indices)</li>
                                </ul>
                            </div>
                        </b-col>
                        <b-col class="col-12 col-sm-6 position-relative">
                            <div class="vertical-line-dotted position-absolute d-none d-sm-block" style="height: 77%; top: 20%;"></div>
                            <div class="py-3 px-3 parang8-box parang8 text-center fw-500">미디어 및 커뮤니케이션 키워드 분석</div>
                            <div class="px-md-3 py-3 border-bottom-dark adjust-height-80">
                                <p class="parang6 fw-400 pt-2 pb-1 line-height-low"> 미디어 리서치를 통한 코웨이 지속가능경영 이슈 노출도 및 긍정/부정 이슈 분석
                                </p>
                                <ul class="custom-ul line-height-low fw-300 f-90 mb-3">
                                    <li>노출 기간: 2019.01.01~2019.12.31</li>
                                    <li>매체: 전국 14개 주요 일간지 포함 132개 언론사</li>
                                </ul>
                                <p class="parang6 fw-400"> 대외 커뮤니케이션 자료 주요 키워드 분석
                                </p>
                                <ul class="custom-ul line-height-low fw-300 f-90">
                                    <li>IR자료 및 실적발표자료 등</li>
                                </ul>
                            </div>
                        </b-col>
                    </b-row>
                    <hr class="py-2">
                    <h6-ancor :title="'Step 2. 중대성 평가 실시'" :activated="activated" class="parang6 mb-3 font-noto">Step 2. 중대성 평가 실시</h6-ancor>
                    <p class="mb-45">26개 이슈 풀(Pool) 중 사업적 연관성과 이해관계자에의 영향력을 파악하여 중점 관리 이슈에 대한 우선순위를 도출하였습니다. 사업적 연관성 도출을 위해 코웨이 지속가능경영의 내부적 현안 분석과 산업 내 이슈 밀접성을 종합적으로 적용하였습니다. 각 이슈의 이해관계자 영향 수준을 파악하기 위해 온라인 설문조사를 통해 7대 이해관계자별 이슈 우선순위를 분석하였습니다. 또한, 연관성 및 영향력 분석을 통해 도출된 우선순위 이슈에 대해 해당 이슈가 코웨이의 사업적 가치 창출에 어떠한 영향을 미칠지에 대해 1) 비용(Cost), 수익창출(Revenue), 리스크(Risk)의 세 가지 측면에서 평가하였습니다. 
                    </p>

                    <h7 class="mb-3 gray63">연관성 분석 - 기업 내부적 &amp; 산업적 맥락</h7>
                    <b-row class="mb-3">
                        <b-col class="col-12 col-sm-6">
                            <div class="py-3 px-3 parang8-box parang8 text-center fw-500">내부 연관성(Internal Relevance)</div>
                            <div class="px-md-3 py-3 border-bottom-dark adjust-height-80">
                                <p class="parang6 fw-400 pt-2 pb-1 line-height-low"> 코웨이 지속가능경영 추진 전략, 정책 및 현황 분석 기반 내부 주요 이슈 도출
                                </p>
                                <ul class="custom-ul fw-300 f-90 mb-45">
                                    <li>전년도 지속가능경영 보고 주요 이슈 리뷰</li>
                                    <li>지속가능경영 관련 전략 및 정책 문서 확인</li>
                                    <li>지속가능경영 추진 중장기 목표 및 성과 분석</li>
                                </ul>
                            </div>
                        </b-col>
                        <b-col class="col-12 col-sm-6 position-relative">
                            <div class="vertical-line-dotted position-absolute d-none d-sm-block" style="height: 77%; top: 20%;"></div>
                            <div class="py-3 px-3 parang8-box parang8 text-center fw-500">산업적 연관성(Industrial Relevance)</div>
                            <div class="px-md-3 py-3 border-bottom-dark adjust-height-80">
                                <p class="parang6 fw-400 pt-2 pb-1 line-height-low"> 산업 내 동종기업 보고 이슈 및 맥락 심층 리뷰 및 글로벌 지속가능성 평가의 산업 특수 평가 지표 분석
                                </p>
                                <ul class="custom-ul line-height-low fw-300 f-90">
                                    <li>해외기업 2개사, 국내기업 3개사 보고 현황 및 이슈 심층 분석</li>
                                    <li>DJSI (Dow Jones Sustainability Indices) Household Durables 산업 평가 요건 분석</li>                            
                                    <li>MSCI Household Durables 산업 평가요건 분석 등</li>
                                </ul>
                            </div>
                        </b-col>
                    </b-row>
                    <div class="py-3 px-3 parang8-box parang8 text-center fw-500">영향력 분석 - 이해관계자 설문조사</div>
                    <div class="px-md-3 py-4 border-bottom-dark mb-5">
                        <p class="parang6 fw-400 py-1 line-height-low"> 각 이슈의 이해관계자에 대한 영향 수준, 중요성 및 대응 우선순위에 대한 평가를 위해 온라인 설문조사 실시
                        </p>
                        <ul class="custom-ul line-height-low fw-300 f-90">
                            <li>대상: 7대 이해관계자(고객, 주주·투자자, 임직원, 파트너, 정부, 학계·언론, 지역사회)</li>
                            <li>기간: 2020.03.16~2020.03.23</li>                            
                            <li>조사방법: 온라인 설문조사</li>
                            <li>설문내용: 중요 이슈 선정, 이슈 우선순위 평가, 이슈 선정 맥락 조사</li>
                        </ul>
                    </div>
                    <hr class="py-2">

                    <h6-ancor :title="'Step 3. 중요 주제 보고'" :activated="activated" class="parang6 mb-3 font-noto">Step 3. 중요 주제 보고</h6-ancor>
                    <p class="mb-45">중대성 평가로 도출된 코웨이의 중요 주제는 총 10개로 도출되었습니다. 코웨이는 각 중요 주제의 사업적-사회적 배경과 핵심 KPI에 대해 보고하고 있으며, 상세 전략 및 활동, 성과와 비즈니스 케이스에 대해 본 지속가능경영 웹 리포트 전반에 걸쳐 보고하고 있습니다.
                    </p>
                    <hj-img src="/images/14_1.svg" fluid></hj-img>
                    <hr class="space-p25">
                    <div style="border-bottom: 1.2px solid #6095dd;"> </div>
                        <b-table-simple responsive class="txt-table sustainability-table f-95 mb-5">
                            <b-thead>
                                <b-tr>
                                    <b-td rowspan="2" class="text-center">No</b-td><b-td rowspan="2" class="text-center">중요 주제</b-td><b-td rowspan="2" class="text-center w-50">보고 주제</b-td><b-td colspan="3" class="border-bottom-0 text-center">사업적 영향</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-center">비용</b-td><b-td class="text-center">수익창출</b-td><b-td class="text-center">리스크</b-td>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-center">1</b-td><b-td class="parang8"><span class="fw-400">고객 맞춤형 제품 및 서비스 개발</span></b-td><b-td> <a href="/static_page/제품과-서비스의-혁신" target="_blank"> 제품과 서비스의 혁신 <i class="fas fa-link fw-300 ml-2 f-80 gray4"></i></a> </b-td><b-td class="f-80 parang6 text-center">●</b-td><b-td class="f-80 parang6 text-center">●</b-td><b-td></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-center">2</b-td><b-td class="parang8"><span class="fw-400">제품 안전 및 신뢰성 강화</span></b-td><b-td> <a href="/static_page/제품-책임" target="_blank"> 제품 책임 <i class="fas fa-link fw-300 ml-2 f-80 gray4"></i></a> </b-td><b-td class="f-80 parang6 text-center">●</b-td><b-td></b-td><b-td class="f-80 parang6 text-center">●</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-center">3</b-td><b-td class="parang8"><span class="fw-400">정보보호</span></b-td><b-td> <a href="/static_page/정보보안-및-개인정보보호" target="_blank"> 정보보안 및 개인정보보호 <i class="fas fa-link fw-300 ml-2 f-80 gray4"></i></a> </b-td><b-td class="f-80 parang6 text-center">●</b-td><b-td class="f-80 parang6 text-center">●</b-td><b-td></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-center">4</b-td><b-td class="parang6"><span class="fw-400">R&amp;D를 통한 기술 경쟁력 확보</span></b-td><b-td> <a href="/static_page/제품과-서비스의-혁신" target="_blank"> 제품과 서비스의 혁신 <i class="fas fa-link fw-300 ml-2 f-80 gray4"></i></a> </b-td><b-td class="f-80 parang6 text-center">●</b-td><b-td></b-td><b-td class="f-80 parang6 text-center">●</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-center">5</b-td><b-td class="parang6"><span class="fw-400">임직원 역량개발 및 유지</span></b-td><b-td> <a href="/static_page/임직원-중심의-기업문화와-안전한-근무환경#착한성장을위한역량강화" target="_blank"> 임직원 중심의 기업문화와 안전한 근무환경 - 착한성장을 위한 역량 강화 <i class="fas fa-link fw-300 ml-2 f-80 gray4"></i></a> </b-td><b-td class="f-80 parang6 text-center">●</b-td><b-td class="f-80 parang6 text-center">●</b-td><b-td></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-center">6</b-td><b-td class="parang6"><span class="fw-400">환경 친화적 제품 및 서비스 개발</span></b-td><b-td> <a href="/static_page/친환경-제품-개발과-제품-생애주기-관리" target="_blank"> 친환경 제품 개발과 제품 생애주기 관리 <i class="fas fa-link fw-300 ml-2 f-80 gray4"></i></a> </b-td><b-td class="f-80 parang6 text-center">●</b-td><b-td class="f-80 parang6 text-center">●</b-td><b-td></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-center">7</b-td><b-td class="parang6"><span class="fw-400">전략적 사회공헌 활동</span></b-td><b-td> <a href="/static_page/지역사회" target="_blank"> 지역사회 <i class="fas fa-link fw-300 ml-2 f-80 gray4"></i></a> </b-td><b-td class="f-80 parang6 text-center">●</b-td><b-td></b-td><b-td></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-center">8</b-td><b-td class="parang6"><span class="fw-400">인권과 노동 관련 원칙 준수</span></b-td><b-td> <a href="/static_page/인권-리포트" target="_blank"> 인권 리포트 <i class="fas fa-link fw-300 ml-2 f-80 gray4"></i></a> </b-td><b-td class="f-80 parang6 text-center">●</b-td><b-td></b-td><b-td class="f-80 parang6 text-center">●</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-center">9</b-td><b-td class="parang6"><span class="fw-400">브랜드 신뢰도 강화</span></b-td><b-td> <a href="/static_page/제품과-서비스의-혁신" target="_blank"> 제품과 서비스의 혁신 <i class="fas fa-link fw-300 ml-2 f-80 gray4"></i></a> </b-td><b-td></b-td><b-td class="f-80 parang6 text-center">●</b-td><b-td class="f-80 parang6 text-center">●</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-center">10</b-td><b-td class="parang6"><span class="fw-400">자원순환 및 재활용</span></b-td><b-td> <a href="/static_page/친환경-제품-개발과-제품-생애주기-관리#자원효율성향상과순환경제지원" target="_blank"> 친환경 제품 개발과 제품 생애주기 관리 - 자원효율성 향상과 순환경제 지원 <i class="fas fa-link fw-300 ml-2 f-80 gray4"></i></a> </b-td><b-td class="f-80 parang6 text-center">●</b-td><b-td></b-td><b-td class="f-80 parang6 text-center">●</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple> 
                    <hr class="py-3">
                    
                    <div class="d-flex mb-4 position-relative"> <h6-ancor :title="'중대성 맥락과 중장기 목표'" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">중대성 맥락과 중장기 목표</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>

                    <h6-ancor :title="'고객 맞춤형 제품 및 서비스 개발'" :activated="activated" class="parang6 mb-3 pb-2">고객 맞춤형 제품 및 서비스 개발</h6-ancor>
                    <b-row no-gutters class="mb-4 border-bottom-dark pb-3">
                        <b-col class="col-12 col-md-5 pr-md-3 mb-3 mb-md-0">
                            <div class="parang8-box py-1 fw-500 text-center mb-3" style="width:156px">Actvities</div>
                            <ul class="custom-ul f-95 pt-2 fw-300">
                                <li>고객 니즈와 라이프스타일에 기반한 혁신적 제품 및 서비스 개발</li>
                                <li>빅데이터, 가상 시뮬레이션 등 미래 기술 기반의 혁신적 서비스 제공</li>
                                <li>R&D와 오픈 이노베이션을 통한 고객가치 혁신 역량 강화</li>
                            </ul>
                        </b-col>
                        <b-col class="col-12 col-md-7 pl-md-4 position-relative">
                        <div class="vertical-line-dotted position-absolute d-none d-md-block"></div>
                            <div class="parang8-box py-1 fw-500 text-center mb-3" style="width:156px">Progress</div>
                            <div class="d-md-flex pt-2">
                                <div class="fw-500 mr-3 mb-2 mb-md-0">고객만족도 <br> <span class="fw-300 f-80">(단위: 점수)</span></div>
                                <div><b-img src="/images/17_1.svg" fluid class="w-100"></b-img></div>
                            </div>
                        </b-col>
                    </b-row>                   

                    <p class="mb-5">코웨이의 비즈니스 모델은 고객의 접점에서 제품과 서비스를 제공함으로써 고객 만족을 통해 신뢰를 얻고 고객과 함께 발전하고 있습니다. 제품과 서비스의 혁신을 통해 고객에게 새로운 경험을 제공하고, 생활의 가치를 높임으로써 코웨이는 고객과 더불어 성장합니다. 이에 따라 물과 공기에 대한 전문성을 기반으로 깨끗함의 본질적 가치를 높이기 위한 제품 혁신을 지속한 결과 2019년에는 5년 연속 CES 혁신상을 수상하였습니다. 또한 고객 라이프스타일의 변화를 파악하고 서비스에 선제적으로 반영하여 미래 기술 기반의 서비스를 선보이기 위해 노력하고 있습니다. 2019년에는 빅데이터 기반의 제품 추천 서비스인 ‘워터맵 서비스’과 가상 시뮬레이션을 통해 개인 생활환경에 맞는 공기청정기를 체험할 수 있는 ‘공기주치의 서비스’ 등을 선보였습니다. 코웨이는 고객에 대한 끊임없는 연구를 통해 고객 생활의 전반에서 맞춤형 케어를 제공함으로써 고객 만족도를 제고하고 있습니다. 이를 기반으로 단기적으로는 2020년 고객만족도 77점 달성, 장기적으로 2030년 고객만족도 87점 달성을 목표로 수립하여 고객 가치를 높여 나갈 예정입니다.
                    </p>

                    <h6-ancor :title="'제품 안전 및 신뢰성 강화'" :activated="activated" class="parang6 mb-3">제품 안전 및 신뢰성 강화</h6-ancor>
                    <b-row no-gutters class="mb-4 border-bottom-dark pb-3 pt-1">
                        <b-col class="col-12 col-md-4 pr-md-3 mb-3 mb-md-0">
                            <div class="parang8-box py-1 fw-500 text-center mb-3" style="width:156px">Actvities</div>
                            <ul class="custom-ul f-95 pt-2 fw-300">
                                <li>제품 책임 거버넌스 – 무한책임위원회, PIC 360, TQA 센터</li>
                                <li>신뢰성 시험 표준 개발 및 검증 역량 강화</li>
                                <li>안전인증 확대 및 고객 안심 서비스</li>
                            </ul>
                        </b-col>
                        <b-col class="col-12 col-md-8 pl-md-4 position-relative">
                        <div class="vertical-line-dotted position-absolute d-none d-md-block"></div>
                            <div class="parang8-box py-1 fw-500 text-center mb-4" style="width:156px">Progress</div>                                
                            <div class="position-relative">
                                <!-- <div class="fw-500 mr-2 position-absolute">
                                    <div class="line-height-low">연도별 검증 <br>진행 현황 </div> <div class="fw-300 f-80 mb-2">(단위: 건)</div>
                                    <div class="fw-300 f-80 d-flex align-items-center"><div style="width:9px; height:9px; background-color:#5171b1" class="mr-1"></div>자체 검증</div>
                                    <div class="fw-300 f-80 d-flex align-items-center"><div style="width:9px; height:9px; background-color:#d5ddec" class="mr-1"></div>외부 의뢰</div>
                                </div>
                                <b-img src="/images/22_1.svg" fluid class="pt-2"></b-img> -->
                            </div>
                        </b-col>
                    </b-row>      

                    <p class="mb-5">라이프스타일의 변화에 따라 생활 필수 가전제품이 다양화되며, 가정에 및 생활환경에서 사용하는 환경가전 제품의 수도 점차 증가하고 있습니다. 이에 따라 환경가전 제품의 안전성 및 품질 관리의 중요성이 더욱 부각되고 있습니다. 이에 대헤 코웨이는 2019년 한국신뢰성대상 ‘제조업 부문 대상’ 수상 및 ‘서비스 품질 우수상’ 국무총리 표창 수상 등을 통해 제품 책임의 우수성을 증명하였습니다. 코웨이는 전사적 제품 책임 거버넌스로서 CEO 직속 협의체인 무한책임위원회를 운영하며, 품질경영 전사 회의체인 PIC 360(Product Immersion Committee 360)을 운영하여 실행력을 강화하고 있습니다. 또한, TQA센터를 중심으로 제품 신뢰성 시험 표준 개발 및 검증 역량을 강화하고, 제품 안전 인증 공인 시험소를 운영하여 안전 인증 범위를 확대하고 있습니다. 코웨이는 체계적인 제품책임 및 품질경영 시스템을 통해 고객 신뢰를 높이기 위해 지속적으로 노력하겠습니다.
                    </p>

                    <h6-ancor :title="'정보보호'" :activated="activated" class="parang6 mb-3">정보보호</h6-ancor>
                    <b-row no-gutters class="mb-4 border-bottom-dark pb-3">
                        <b-col class="col-12 col-md-4 pr-md-3 mb-3 mb-md-0">
                            <div class="parang8-box py-1 fw-500 text-center mb-3" style="width:156px">Actvities</div>
                            <ul class="custom-ul f-95 pt-2 fw-300">
                                <li>정보보호 및 개인정보보호 원칙 기반의 철저한 관리</li>
                                <li>글로벌 정보보호 규제 대응</li>
                                <li>시스템 기반 모니터링 및 실사</li>
                            </ul>
                        </b-col>
                        <b-col class="col-12 col-md-8 pl-md-4 position-relative">
                        <div class="vertical-line-dotted position-absolute d-none d-md-block"></div>
                            <div class="parang8-box py-1 fw-500 text-center mb-3" style="width:156px">Progress</div>
                            <div class="d-md-flex pt-2">
                                <div class="fw-500 mr-3 mb-3 mb-md-0">임직원 정보보호 교육 참여율</div>
                                <div><b-img src="/images/45_1.svg" fluid class="w-100"></b-img></div>
                            </div>
                        </b-col>
                    </b-row> 

                    <p >데이터 및 정보 인프라가 사회 전반의 필수 자산으로 자리함에 따라 생활 전반의 영역에서 정보보호 및 개인정보보호의 중요성이 증가하고 있습니다. 4차 산업혁명에 따라 데이터의 활용도가 급격히 증가하고, ICT의 영역이 특정 디바이스를 넘어 환경가전 제품의 영역까지 연결되는 사물 인터넷이 보편화 됨에 따라 정보보안에 대한 철저한 관리가 필요한 시점입니다. 또한 코웨이는 렌탈 비즈니스의 특성상 많은 고객의 개인정보를 수집 및 활용하여 안전한 개인정보의 수집, 활용 및 폐기는 고객 신뢰에 중요한 영향을 미칩니다. 이에 따라 코웨이는 정보보호 및 개인정보보호 원칙을 기반으로 강력한 정보보안 체계를 운영하고 있습니다. 2019년 코웨이는 유럽연합 데이터 보호법(GDPR) 등 글로벌 정보보호 규제에 대응하기 위한 가이드를 수립하였습니다. 또한 정기적 모의해킹, 취약점 진단 등을 통해 위험 요소를 진단 및 완화하고 있으며, 시스템 기반의 개인정보 리스크 점검 및 실사를 진행하여 철저한 관리를 지속하고 있습니다. 
                    </p>                                               
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
            title: '이해관계자 참여 및 중요 주제',
            activated: [],
            sub_titles: [
                { 
                    title: '이해관계자 참여'
                },
                { 
                    title: '중대성 평가',
                    child: [
                        { title: 'Step 1. 이슈 풀(Pool) 구성' }, 
                        { title: 'Step 2. 중대성 평가 실시' }, 
                        { title: 'Step 3. 중요 주제 보고' }, 
                    ] 
                },
                { 
                    title: '중대성 맥락과 중장기 목표',
                    child: [
                        { title: '고객 맞춤형 제품 및 서비스 개발' }, 
                        { title: '제품 안전 및 신뢰성 강화' }, 
                        { title: '정보보호' }, 
                    ] 
                },                
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
<style lang="scss">
.adjust-height-80{
    height: 80%;
}
@media (max-width: 576px) {
    .adjust-height-80{
        height: auto;
    }
}
</style>
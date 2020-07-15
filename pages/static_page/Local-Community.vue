<template>
<div class="position-relative page-top-bg-so min-vh-100">   
    <logger title="지역사회 참여"></logger>
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
                                <h1 class="mt-m-2 mb-0">04</h1>
                                <h4-ancor hash="T" :activated="activated" class="mb-4 mb-sm-5 mt-m-2">지역사회</h4-ancor>
                            </b-col>
                        </b-row>
                         <b-row no-gutters class="px-3 py-4">
                            <b-col class="col-12 col-sm-4 mb-5 mb-sm-0 fw-500 gold7">
                                <div class="mr-5 pr-lg-2 pr-xl-4" style="max-width: 180px;"> <b-img src="/images/142_1.svg" fluid ></b-img> </div>
                            </b-col>
                            <b-col class="col-12 col-sm-8 pr-2">
                                <h7 class="gold7 mb-3">Business relevance &amp; Approach</h7>
                                <p> 코웨이는 우리가 하는 일로 더 나은 세상을 만든다는 ‘착한믿음’ 가지고 사람과 환경을 위한 나눔을 실천하고 있습니다. 코웨이는 깨끗한 물과 공기에 대한 전문성을 기반으로 가장 잘 할 수 있는 일을 통해, 가장 필요로 하는 곳에 기여하는 코웨이다운 사회공헌을 중점적으로 추진하고 있습니다. 코웨이는 깨끗한 물로 건강한 변화를 만들고, 청정한 공기를 마음껏 누릴 수 있도록 지원하고, 청년 창업가들과 꿈과 비전을 나눕니다.
                                </p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark">
                            <h7 class="gold7 mb-4 w-100">Activity</h7>
                            <b-col class="col-12 col-sm-4 text-center fw-500">
                                <div class="mx-auto mb-3"><b-img src="/images/143_1.svg" fluid></b-img> </div>
                                <p class="fw-500 word-break px-sm-3 px-lg-5 mx-xl-3">물, 공기, 사람을 통한 사회공헌</p>
                            </b-col>
                            <b-col class="col-12 col-sm-4 text-center fw-500">
                                <div class="mx-auto mb-3"><b-img src="/images/143_2.svg" fluid></b-img> </div>
                                <p class="fw-500 word-break px-sm-3 px-lg-5 mx-xl-3">CEO가 함께하는 임직원 봉사단 운영</p>
                            </b-col>
                            <b-col class="col-12 col-sm-4 text-center fw-500">
                                <div class="mx-auto mb-2"><b-img src="/images/143_3.svg" fluid></b-img> </div>
                                <p class="fw-500 word-break px-sm-3 px-lg-5 mx-xl-3">말레이시아 글로벌 사회공헌 추진</p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark">
                            <b-col class="col-12 col-md-8 pr-md-4 mb-4 mb-md-0">
                                <h7 class="gold7 mb-4 w-100">Business Cases</h7>
                                <b-row no-gutters> 
                                    <b-col class="col-12 col-sm-4 text-center fw-500 px-lg-2"><div class="mx-auto mb-2"><b-img src="/images/143_4.svg" fluid></b-img></div>
                                        <p class="fw-500 word-break">'착한 정수기' 캠페인</p>
                                    </b-col>
                                    <b-col class="col-12 col-sm-4 text-center fw-500 px-lg-2"><div class="mx-auto mb-3"><b-img src="/images/143_5.svg" fluid></b-img></div>
                                        <p class="fw-500 word-break">취약계층 환경 개선 사업</p>
                                    </b-col>
                                    <b-col class="col-12 col-sm-4 text-center fw-500 px-lg-2"><div class="mx-auto mb-3"><b-img src="/images/143_6.svg" fluid></b-img></div>
                                        <p class="fw-500 word-break">청년 창업사관학교 COWAY Wi School 운영</p>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col class="col-12 col-md-4 position-relative pl-md-4">
                                <div class="vertical-line-1 position-absolute d-none d-md-block"></div>
                                <h7 class="gold7 mb-45 w-100">Performance</h7>
                                <span class="f-330 fw-400 font-italic">22.1</span><span class="fw-500"> 시간</span> <br>
                                <p class="fw-500 line-height-low f-100 word-break">임직원 인당 봉사활동 참여</p>
                            </b-col>                            
                        </b-row>
                    </div>
                </section> 
                <!-- End of DMA-->
                <section class="mb-5">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="u1" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">코웨이다운 사회공헌</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-3">코웨이는 물과 공기라는 소중한 자연의 가치를 지키고 지속가능한 방법으로 삶을 건강하고 풍요롭게 만들고자 ‘착한 믿음’의 경영정신을 바탕으로 사회공헌을 추진합니다. 코웨이의 핵심 비즈니스 역량인 물과 공기, 그리고 임직원을 기반으로 지역사회 공동체에 새로운 사회적 가치를 창출할 수 있도록 전략적 사회공헌을 추진하고 있습니다. 코웨이가 가장 잘할 수 있는 일을 기반으로 가장 필요로 하는 곳에 기여하여 더 나은 삶과 사회를 조성해 나가는 것이 코웨이 사회공헌의 핵심 가치입니다. 
                        </p>
                        <a target="_blank" href="https://www.coway.co.kr/Company/Management/Contribution"><b-button variant="gold" size="sm" class="px-3">코웨이 사회공헌 웹사이트 바로가기<i class="fas fa-external-link-alt ml-2"></i></b-button></a>
                        <hr class="mb03">
                        <h7 class="gray63 mb-3">코웨이 사회공헌 전략</h7>
                        <b-img src="/images/10_1.svg" fluid></b-img>
                        <hr class="space-p25">
                        
                        <h7 class="mb-3 gray63">사회공헌 투자 비율 <span class="f-80 fw-300"> (단위: %)</span></h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-5">
                             <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">현금 기부</b-td><b-td>50</b-td><b-td>55</b-td><b-td>56</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">현물 기부</b-td><b-td>44</b-td><b-td>32</b-td><b-td>39</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">사회공헌성 비용</b-td><b-td>6</b-td><b-td>13</b-td><b-td>5</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">합계</b-td><b-td>100</b-td><b-td>100</b-td><b-td>100</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                    <section class="border-gold px-4 py-3 mb-5">
                        <p class="gold6 fw-500 mt-2 mb-3 f-105"><b-badge class="rounded fw-400 bg-gold6 f-90 p-1 mr-2"> Case.</b-badge>코로나<span class="fw-600">19</span> 긴급재해 기부</p>
                        <p class="mb-3">코웨이는 코로나바이러스감염증19로 인해 많은 지원이 필요한 우리 지역사회에 응원과 격려의 마음을 보태기 위해 모회사인 넷마블과 함께 각 10억원씩 성금을 전국재해구호협회 희망브리지에 기부하였습니다. 이 성금은 전국재해구호협회를 통해 방호 물품, 진단키트 등 의료 물품 부족 상황에 직면한 전국 의료진에 대한 지원과 의료·복지 시설의 방역에 사용되었습니다. 또한 코웨이 말레이시아법인은 말레이시아 정부에 코로나19 극복 성금 30만 링깃을 전달하였습니다. 코웨이는 전 세계가 힘을 모아 코로나19로 인한 어려움을 극복하고 안전한 생활환경을 되찾을 수 있도록 지원을 아끼지 않겠습니다.
                        </p>
                    </section>
                    <hr class="py-3">
                    <h6-ancor hash="u1-1" :activated="activated" class="gold6 fw-500 mb-3">임직원과 함께하는 나눔 실천</h6-ancor>
                        <p class="mb-45">코웨이는 임직원 참여 사회공헌 활동을 통해 나눔을 실천합니다. CEO를 단장으로 하는 임직원 봉사단을 운영하여 본사뿐만 아니라 R&amp;D센터 및 공장 등 전사 임직원의 적극적인 참여를 기반으로 하고 있습니다.
                        </p>
                        <hj-img src="/images/15_1.svg" fluid></hj-img>
                        <hr class="space-p25">
                        <h7 class="mb-3 gray63">임직원 봉사활동 성과</h7>
                        <b-table-simple responsive class="num-table social-table f-95">
                            <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td> <b-td class="text-left">단위</b-td><b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">봉사단 임직원 수</b-td> <b-td class="text-left">명</b-td> <b-td>1,482</b-td> <b-td>1,713</b-td> <b-td>1,586</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">인당 봉사시간</b-td> <b-td class="text-left">시간</b-td> <b-td>24</b-td> <b-td>19.9</b-td> <b-td>22.1</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">가치 환산액<sup>1</sup></b-td><b-td class="text-left">천 원</b-td><b-td>1,034,211</b-td> <b-td>1,009,912</b-td> <b-td>1,108,055</b-td>
                                </b-tr>                                
                            </b-tbody>                                
                        </b-table-simple>
                        <p class="f-80 ml-1 mb-5">1. 가치 환산액: 시간당 평균 급여(추정치) X 봉사단 임직원 수 X 인당 봉사시간</p>
                    <hr class="py-3">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="u2" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">깨끗한 물과 공기를 위한 코웨이의 약속</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-5">코웨이는 모든 지역사회에 깨끗한 물과 공기에 대한 접근성을 향상하고 위생이 보장된 생활환경을 제공하여 삶의 질을 향상하고자 물, 공기, 사람의 세 가지 약속을 주요 사회공헌 영역으로 추진합니다. 이에 따라 중점 추진 활동으로 국내외 취약계층에 정수기 및 공기청정기를 지원하여 깨끗함의 가치를 공유하는 한편, 청년 일자리 창출 및 산업 혁신을 위해 라이프스타일 분야 청년 창업자를 지원하고 있습니다.  
                        </p>
                        <div class="position-relative"><b-img src="/images/57_1.svg" fluid></b-img> <h7 class="gray63 position-absolute" style="top:1.25rem; left:1.25rem;"> 물, 공기, 사람 핵심 성과</h7></div>
                    <hr class="mb-4">          

                <section class="bg-blue-gray1 py-4 px-4 mb-5">
                    <div class="d-flex justify-content-between mb-3 mt-2">
                        <h6-ancor hash="u2-1" :activated="activated" class="gold8 fw-500 mb-3 font-noto">'약속 1.물 - 생명의 물 나눔'</h6-ancor>
                        <b-img src="/images/13_1.svg" fluid></b-img>
                    </div>
                    <div class="f-105 fw-500 font-noto mb-1">SDGs 6 – 깨끗한 물과 위생</div>
                    <p class="f-105 mb-3">6.1 모두가 이용 가능한 안전한 식수에 대한 접근성 확보</p>
                        <b-table-simple responsive class="txt-table social-table f-90 mb-5">
                            <b-thead><b-tr>
                                <b-td colspan="3">주요 활동</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr><b-td style="width:33.3%">착한정수기 사업</b-td><b-td style="width:33.3%">안심지하수/물복지 사업</b-td><b-td>말레시이사 빗물공급장치 지원</b-td></b-tr>
                                <b-tr>
                                    <b-td class="word-break fw-300">2015년부터 공익사업재단 네이버 해피빈과 협업을 통해 '착한정수기' 캠페인을 전개하고 있습니다. 아동센터, 자원봉사시설, 무료병원, 장애 보호센터 등 전국 49개지역 136개 단체에 리퍼브 정수기를 기증하고 정기 관리 서비스를 제공하고 있습니다.  
                                    </b-td>
                                    <b-td class="word-break fw-300">
                                        2015년 환경부와 ‘안심 지하수 지원사업’ 협약을 체결하여 농촌 지하수 오염 지역에 정수기를 지원하고 있습니다. 지하수 오염 지역 주민들이 안심하고 깨끗한 물을 마실 수 있도록 약 400가구에 정수기를 무상으로 지원하고 있습니다. 또한 2015년 충청남도와 물복지 사업을 체결하여 지하수 오염지역 취약계층에 연간 100대씩 600대의 정수기 지원과 무상 점검을 제공하고 있습니다.
                                    </b-td>
                                    <b-td class="word-break fw-300">
                                        코웨이는 2017년부터 코웨이 말레이시아 현지 법인과 함께 물 취약지역을 선정하여 빗물공급장치를 지원하고 있습니다. 2019년 말 누적 155가구에 빗물공급장치를 기증하였으며, 2023년까지 1,000가구에 빗물공급장치를 제공하여 깨끗한 물에 대한 접근성을 확대할 계획입니다.
                                    </b-td> 
                                </b-tr>
                                <b-tr>
                                    <b-td colspan="3" class="border-bottom-0">&nbsp;</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td colspan="3" style="border-bottom: 1.2px solid #d6a803;">사회적 영향과 사업적 영향</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td colspan="3">사회적 영향: 깨끗한 식수 접근성이 떨어지는 취약 지역에 정수기 및 빗물공급장치를 지원하여 위생적인 식수에 대한 접근성 향상</b-td>
                                </b-tr> 
                                <b-tr>
                                    <b-td colspan="3">사업적 영향: 사업 진출 지역 내 제품 인지도 증가를 기반으로 시장 기회 확대</b-td>
                                </b-tr>                           
                            </b-tbody>                                
                        </b-table-simple>
                    <hr class="py-2">
                    <div class="d-flex justify-content-between mb-3 mt-2">
                        <h6-ancor hash="u2-2" :activated="activated" class="gold8 fw-500 mb-3 font-noto">'약속 2.공기 - 청정한 공기 나눔'</h6-ancor>
                        <b-img src="/images/12_1.svg" fluid></b-img>
                    </div> 
                    <div class="f-105 fw-500 font-noto mb-1">SDGs 3 – 건강과 웰빙</div>
                    <p class="f-105 mb-3">3.9 대기, 수질, 토양오염 및 유해 화학물질 등으로 인한 질병 및 사망 감축</p>
                        <b-table-simple responsive class="txt-table social-table f-90 mb-5">
                            <b-thead><b-tr>
                                <b-td colspan="3">주요 활동</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr><b-td>취약계층 환경 개선 사업</b-td></b-tr>
                                <b-tr><b-td class="fw-300">대기오염과 미세먼지 증가에도 생활환경 개선이 어려운 취약계층을 돕고자 2018년부터 환경부와 ‘취약계층 환경성 질환 예방사업’ 업무 협약을 기반으로 공기청정기를 무상 지원하고 있습니다. 2019년 말 기준 서울을 포함한 수도권과 5대 광역시 등 지방자치단체 50곳에 공기청정기를 무상지원하고 관리서비스를 제공하여 취약계층의 환경개선을 돕고 있습니다. 또한 학교 등 청소년 이용시설에 400대의 공기청정기를 무상지원 청정한 공기나눔에 앞장서고 있습니다.
                                </b-td></b-tr>
                                <b-tr>
                                    <b-td colspan="3" class="border-bottom-0">&nbsp;</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td colspan="3" style="border-bottom: 1.2px solid #d6a803;">사회적 영향과 사업적 영향</b-td>
                                </b-tr>
                                <b-tr><b-td> 사회적 영향: 미세먼지로 인한 인체 건강 영향 감소, 취약계층 호흡기 질환 예방
                                </b-td></b-tr>
                                <b-tr><b-td>사업적 영향: 공기청정기 제품의 생활환경 필수품화를 통한 시장 규모 확대
                                </b-td></b-tr>                          
                            </b-tbody>                                
                        </b-table-simple>
                    <hr class="py-2">
                    <div class="d-flex justify-content-between mb-3 mt-2">
                        <h6-ancor hash="u2-3" :activated="activated" class="gold8 fw-500 mb-3 font-noto">'약속 3.사람 - 꿈과 비전 나눔'</h6-ancor>
                        <b-img src="/images/11_1.svg" fluid></b-img>
                    </div> 
                    <div class="f-105 fw-500 font-noto mb-1">SDGs 8 – 양질의 일자리와 경제 성장</div>
                    <div class="f-105 fw-300 font-noto">8.3 일자리 창출에 대한 창의적·혁신적 정책 장려 및 중소기업 성장 촉진</div>
                    <div class="f-105 fw-300 font-noto">8.5 청년과 장애인 등 모든 계층에 대한 총체적·생산적 고용 및 일자리 창출</div>
                    <p class="f-105 mb-3">8.6 고용 또는 학습 중이지 않은 청년 비율의 최소화</p>
                    <b-table-simple responsive class="txt-table social-table f-90">
                        <b-thead><b-tr>
                                <b-td colspan="3">주요 활동</b-td>
                        </b-tr></b-thead>
                        <b-tbody>
                            <b-tr><b-td>청년창업 지원 - 청년창업사관학교 위스쿨(Wi School)</b-td></b-tr>
                            <b-tr><b-td class="fw-300">코웨이는 코디, CS닥터, 홈케어닥터, HP, 파랑새, BP 등 약 2만여 명의 1인 기업가가 활약하고 있는 '1인 기업’의 대표적인 파트너입니다. 코웨이는 라이프스타일 분야 관련 1인 창업을 준비하는 청년들을 지원하기 위해 창업사관학교 위스쿨(Wi School)을 운영하고 있습니다. 위스쿨은 비즈니스 모델 멘토링, 경영 컨설팅, 해외진출지원 등을 지원하여 전문적이고 실질적인 도움을 주고 있습니다. 2019년까지 코웨이는 위스쿨을 통해 총 2,300여 명의 청년 창업자를 지원하였으며, 30개 팀에 코웨이 멘토링 과정을 제공하였습니다.
                            </b-td></b-tr>
                            <b-tr>
                                <b-td colspan="3" class="border-bottom-0">&nbsp;</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td colspan="3" style="border-bottom: 1.2px solid #d6a803;">사회적 영향과 사업적 영향</b-td>
                            </b-tr>
                            <b-tr><b-td> 사회적 영향: 청년 일자리 창출 확대 및 창업 기업의 사업 연속성 확보
                            </b-td></b-tr>
                            <b-tr><b-td>사업적 영향: 라이프스타일 비즈니스 영역의 다양화를 통한 산업 성장
                            </b-td></b-tr>                       
                        </b-tbody>                                
                    </b-table-simple>
                </section>
                <hr class="py-3">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="u3" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">공공정책 참여</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-45">코웨이는 정치자금법 제31조(기부의 제한)에 의거하여 정치 기부금을 출연하지 않습니다.
                        </p>

                        <h7 class="mb-3 gray63">정치 기부금 및 협회 기부금</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-5">
                             <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td><b-td class="text-left">단위</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">정치 기부금</b-td><b-td class="text-left">천 원</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">협회 기부금</b-td><b-td class="text-left">천 원</b-td><b-td>541,822</b-td><b-td>430,162</b-td><b-td>505,759</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                        <h7 class="mb-3 gray63">협회 기부금 세부내역</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-45">
                             <b-thead><b-tr>
                                <b-td class="text-left">단체명</b-td><b-td class="text-left">구분</b-td><b-td class="text-left">지출목적</b-td><b-td>금액(원)</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">대전상공회의소</b-td><b-td class="text-left">협회</b-td><b-td class="text-left">포괄적 경제 및 산업 발전</b-td><b-td>103,200,000</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">(사)한국포장재재활용사업공제조합</b-td><b-td class="text-left">협회</b-td><b-td class="text-left">환경가전 산업 발전</b-td><b-td>54,575,000</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">사단법인한국직접판매산업협회</b-td><b-td class="text-left">협회</b-td><b-td class="text-left">포괄적 경제 및 산업 발전</b-td><b-td>30,000,000</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">(주)한국거래소</b-td><b-td class="text-left">협회</b-td><b-td class="text-left">포괄적 경제 및 산업 발전</b-td><b-td>15,147,600</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">(사)한국상장회사협의회</b-td><b-td class="text-left">협회</b-td><b-td class="text-left">포괄적 경제 및 산업 발전</b-td><b-td>10,640,000</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                </section>
            </b-container> 
            <!-- End of Contents Container -->
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
                            <b-col class="col-12 col-sm-4 mb-2 mb-sm-0 fw-500 gold8">
                                <h1 class="mt-m-2 mb-0">04</h1>
                                <h4-ancor hash="T" :activated="activated" class="mb-4 mb-sm-5 mt-m-2">Local Community</h4-ancor>
                            </b-col>
                        </b-row>
                         <b-row no-gutters class="px-3 py-4">
                            <b-col class="col-12 col-sm-4 mb-5 mb-sm-0 fw-500 gold7">
                                <div class="mr-5 pr-lg-2 pr-xl-4" style="max-width: 180px;"> <b-img src="/images/142_1.svg" fluid ></b-img> </div>
                            </b-col>
                            <b-col class="col-12 col-sm-8 pr-2">
                                <h7 class="gold7 mb-3">Business relevance &amp; Approach</h7>
                                <p> Coway acts upon the "Goodness" that we make a better world by doing what we do, sharing for people and the environment. Based on our expertise in clean water and air, Coway focuses on "Coway-like" social contributions that contribute to where it is needed most through what we can do best. Coway makes healthy changes with clean water, helps people to enjoy clean air freely, and shares dreams and visions with young entrepreneurs.
                                </p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark">
                            <h7 class="gold7 mb-4 w-100">Activity</h7>
                            <b-col class="col-12 col-sm-4 text-center fw-500">
                                <div class="mx-auto mb-3"><b-img src="/images/143_1.svg" fluid></b-img> </div>
                                <p class="fw-500 word-break px-sm-3 px-lg-5 mx-xl-3">Contribute to Society Through Water, Air, and People</p>
                            </b-col>
                            <b-col class="col-12 col-sm-4 text-center fw-500">
                                <div class="mx-auto mb-3"><b-img src="/images/143_2.svg" fluid></b-img> </div>
                                <p class="fw-500 word-break px-sm-3 px-lg-5 mx-xl-3">Operate Employee Volunteer Group with CEO</p>
                            </b-col>
                            <b-col class="col-12 col-sm-4 text-center fw-500">
                                <div class="mx-auto mb-2"><b-img src="/images/143_3.svg" fluid></b-img> </div>
                                <p class="fw-500 word-break px-sm-3 px-lg-5 mx-xl-3">Promote Malaysia's Global Social Contribution</p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark">
                            <b-col class="col-12 col-md-8 pr-md-4 mb-4 mb-md-0">
                                <h7 class="gold7 mb-4 w-100">Business Cases</h7>
                                <b-row no-gutters> 
                                    <b-col class="col-12 col-sm-4 text-center fw-500 px-lg-2"><div class="mx-auto mb-2"><b-img src="/images/143_4.svg" fluid></b-img></div>
                                        <p class="fw-500 word-break">"Good Water Purifier" Campaign</p>
                                    </b-col>
                                    <b-col class="col-12 col-sm-4 text-center fw-500 px-lg-2"><div class="mx-auto mb-3"><b-img src="/images/143_5.svg" fluid></b-img></div>
                                        <p class="fw-500 word-break">Environment Improvement Project for Vulnerable Groups</p>
                                    </b-col>
                                    <b-col class="col-12 col-sm-4 text-center fw-500 px-lg-2"><div class="mx-auto mb-3"><b-img src="/images/143_6.svg" fluid></b-img></div>
                                        <p class="fw-500 word-break">Youth Start-up Academy COWAY Wi School</p>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col class="col-12 col-md-4 position-relative pl-md-4">
                                <div class="vertical-line-1 position-absolute d-none d-md-block"></div>
                                <h7 class="gold7 mb-45 w-100">Performance</h7>
                                <span class="f-330 fw-400 font-italic">22.1</span><span class="fw-500"> hours</span> <br>
                                <p class="fw-500 line-height-low f-100 word-break">Volunteer Participation per Employee</p>
                            </b-col>                            
                        </b-row>
                    </div>
                </section> 
                <!-- End of DMA-->
                <section class="mb-5">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="u1" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">Coway-like Social Contribution</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-3"> Coway promotes social contribution based on the management spirit of "Goodness" to protect the precious nature of water and air and make life healthy and enriched in a sustainable way. Based on Coway's core business capabilities, water and air, and employees, we are pursuing strategic social contributions to create new social values in the local community. The core value of Coway's social contribution is to create a better life and society by contributing to where it is most needed based on what Coway can do best.
                        </p>
                        <a target="_blank" href="https://www.coway.co.kr/Company/Management/Contribution"><b-button variant="gold" size="sm" class="px-3">Coway Social Contribution Website <i class="fas fa-external-link-alt ml-2"></i></b-button></a>
                        <hr class="mb03">
                        <h7 class="gray63 mb-3">Coway Social Contribution Strategy</h7>
                        <b-img src="/images/317_1.svg" fluid></b-img>
                        <hr class="space-p25">
                        
                        <h7 class="mb-3 gray63">Social Contribution Investment Ratio<span class="f-80 fw-300"> (Unit: %)</span></h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-5">
                             <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Charitable donations</b-td><b-td>50</b-td><b-td>55</b-td><b-td>56</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Community investments</b-td><b-td>44</b-td><b-td>32</b-td><b-td>39</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Commercial initiatives</b-td><b-td>6</b-td><b-td>13</b-td><b-td>5</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Total</b-td><b-td>100</b-td><b-td>100</b-td><b-td>100</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                    <section class="border-gold px-4 py-3 mb-5">
                        <p class="gold6 fw-500 mt-2 mb-3 f-105"><b-badge class="rounded fw-400 bg-gold6 f-90 p-1 mr-2"> Case.</b-badge>COVID<span class="fw-600">-19</span> Emergency Disaster Donation</p>
                        <p class="mb-3"> Coway donated a donation of 1 billion KRW to Hope Bridge of the National Disaster Relief Association and its parent company Netmarble to add support and encouragement to our communities that need much support due to COVID-19. This donation was used by the National Disaster Relief Association to provide medical aid to nationwide medical personnel in the face of a shortage of medical supplies, such as protective items and diagnostic kits, and to prevent medical and welfare facilities. Also, the Malaysian Coway Corporation delivered 300,000 MYR (Malaysian Ringgit) to the Malaysian government to overcome the COVID-19. Coway will spare no effort to help the whole world work together to overcome the difficulties caused by COVID-19 and regain a safe living environment.
                        </p>
                    </section>
                    <hr class="py-3">
                    <h6-ancor hash="u1-1" :activated="activated" class="gold6 fw-500 mb-3">Practice Sharing with All Employees</h6-ancor>
                        <p class="mb-45"> Coway practices sharing through employees' social contribution activities. We operate an employee volunteer group led by the CEO, based on the active participation of all employees, including R&D centers and factories, as well as the head office. 

                        </p>
                        <hj-img src="/images/317_2.svg" fluid></hj-img>
                        <hr class="space-p25">
                        <h7 class="mb-3 gray63">Employee Volunteer Activities</h7>
                        <b-table-simple responsive class="num-table social-table f-95">
                            <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td> <b-td class="text-left">Unit</b-td><b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Number of employees in the volunteer group</b-td> <b-td class="text-left">person</b-td> <b-td>1,482</b-td> <b-td>1,713</b-td> <b-td>1,586</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Volunteer Hours per Person</b-td> <b-td class="text-left">hour</b-td> <b-td>24</b-td> <b-td>19.9</b-td> <b-td>22.1</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Value Conversion<sup>1</sup></b-td><b-td class="text-left">1,000 KRW</b-td><b-td>1,034,211</b-td> <b-td>1,009,912</b-td> <b-td>1,108,055</b-td>
                                </b-tr>                                
                            </b-tbody>                                
                        </b-table-simple>
                        <p class="f-80 ml-1 mb-5">1. Value conversion: Average hourly salary (estimated value) x Volunteer group employees x Volunteer hours per person</p>
                    <hr class="py-3">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="u2" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">Commitments for Clean Water and Air</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-5"> Coway promotes three promises of water, air, and people as major social contribution areas to improve the quality of life by improving access to clean water and air to all communities and providing a sanitary environment. As a result, we provide water purifiers and air purifiers to the vulnerable groups at home and abroad as a key initiative to share the value of cleanliness, while supporting youth entrepreneurs in the lifestyle sector to create youth jobs and innovate industries.
                        </p>
                        <div class="position-relative"><b-img src="/images/317_3.svg" fluid></b-img> <h7 class="gray63 position-absolute" style="top:1.25rem; left:1.25rem;">Water, Air, People Key Performance</h7></div>
                    <hr class="mb-4">          

                <section class="bg-blue-gray1 py-4 px-4 mb-5">
                    <div class="d-flex justify-content-between mb-3 mt-2">
                        <h6-ancor hash="u2-1" :activated="activated" class="gold8 fw-500 mb-3 font-noto">Commitment 1. Water - Sharing the Water of Life</h6-ancor>
                        <b-img src="/images/13_1.svg" fluid></b-img>
                    </div>
                    <div class="f-105 fw-500 font-noto mb-1">SDGs 6 – Clean Water and Sanitation</div>
                    <p class="f-105 mb-3">6.1 Secure access to safe drinking water for everyone</p>
                        <b-table-simple responsive class="txt-table social-table f-90 mb-5">
                            <b-thead><b-tr>
                                <b-td colspan="3">Major Activities</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr><b-td style="width:33.3%">"Good Water Purifier" Project</b-td><b-td style="width:33.3%">Safe Groundwater/Water Welfare Project</b-td><b-td>Malaysia Rainwater Supply System</b-td></b-tr>
                                <b-tr>
                                    <b-td class="word-break fw-300"> Since 2015, we have been launching the "Good Water Purifier" campaign in collaboration with Naver Happybean, a public interest foundation. We donate refurbished water purifiers and provide regular management services to 136 organizations in 49 regions across the country, including children's centers, volunteer facilities, free hospitals, and disability protection centers.
                                    </b-td>
                                    <b-td class="word-break fw-300"> In 2015, the Ministry of Environment signed an agreement with the Ministry of Environment to provide a water purifier to rural groundwater contaminated areas. We provide free water purifiers to about 500 households so that residents in the groundwater pollution area can drink clean water with confidence. We are also conducting technical support and research to improve groundwater.
                                    </b-td>
                                    <b-td class="word-break fw-300"> Since 2018, Coway has been supporting local rainwater supply devices by selecting local water vulnerable areas with local subsidiaries in Malaysia. At the end of 2019, we donated rainwater supply to 155 households. We plan to expand access to clean water by providing rainwater supply to 1,000 households by 2023.
                                    </b-td> 
                                </b-tr>
                                <b-tr>
                                    <b-td colspan="3" class="border-bottom-0">&nbsp;</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td colspan="3" style="border-bottom: 1.2px solid #d6a803;">Social Impact and Business Impact</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td colspan="3"> Social impact: Improve access to sanitary drinking water by supporting water purifiers and rainwater supply systems in vulnerable areas with poor access to clean drinking water.</b-td>
                                </b-tr> 
                                <b-tr>
                                    <b-td colspan="3"> Business Impact: Expand market opportunities based on increased product awareness within the region</b-td>
                                </b-tr>                           
                            </b-tbody>                                
                        </b-table-simple>
                    <hr class="py-2">
                    <div class="d-flex justify-content-between mb-3 mt-2">
                        <h6-ancor hash="u2-2" :activated="activated" class="gold8 fw-500 mb-3 font-noto">Commitment 2. Air - Sharing Clean Air</h6-ancor>
                        <b-img src="/images/12_1.svg" fluid></b-img>
                    </div> 
                    <div class="f-105 fw-500 font-noto mb-1">SDGs 3 – Good Health and Well-Being</div>
                    <p class="f-105 mb-3">3.9 Reduce disease and death from the air, water quality, soil pollution, and hazardous chemicals</p>
                        <b-table-simple responsive class="txt-table social-table f-90 mb-5">
                            <b-thead><b-tr>
                                <b-td colspan="3">Major Activities</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr><b-td>Environment Improvement Project For the Vulnerable Groups</b-td></b-tr>
                                <b-tr><b-td class="fw-300"> To help vulnerable groups unable to improve their living environment despite increased air pollution and fine dust, we are providing free air purifiers based on the 2018 Ministry of Environment's "Vulnerable Group Environmental Disease Prevention Project" business agreement. As of the end of 2019, a total of 400 air purifiers are provided free of charge to 50 local governments, including the metropolitan area, such as Seoul City and 5 metropolitan cities. Management services are provided to help improve the living space of the vulnerable.
                                </b-td></b-tr>
                                <b-tr>
                                    <b-td colspan="3" class="border-bottom-0">&nbsp;</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td colspan="3" style="border-bottom: 1.2px solid #d6a803;">Social Impact and Business Impact</b-td>
                                </b-tr>
                                <b-tr><b-td> Social Impact: Reduce human health effects due to fine dust and the prevention of respiratory diseases in vulnerable groups
                                </b-td></b-tr>
                                <b-tr><b-td>Business Impact: Expand market size through the necessity of living environment of air purifier products
                                </b-td></b-tr>                          
                            </b-tbody>                                
                        </b-table-simple>
                    <hr class="py-2">
                    <div class="d-flex justify-content-between mb-3 mt-2">
                        <h6-ancor hash="u2-3" :activated="activated" class="gold8 fw-500 mb-3 font-noto">Commitment 3. People - Sharing Dreams and Visions</h6-ancor>
                        <b-img src="/images/11_1.svg" fluid></b-img>
                    </div> 
                    <div class="f-105 fw-500 font-noto mb-1">SDGs 8 – Decent Work and Economic Growth</div>
                    <div class="f-105 fw-300 font-noto">8.3 Promote creative and innovative policies for job creation and promote SME growth</div>
                    <div class="f-105 fw-300 font-noto">8.5 Total and productive employment and job creation for all classes, including young people and people with disabilities</div>
                    <p class="f-105 mb-3">8.6 Minimizing the proportion of young people who are not employed or learning</p>
                    <b-table-simple responsive class="txt-table social-table f-90">
                        <b-thead><b-tr>
                                <b-td colspan="3">Major Activities</b-td>
                        </b-tr></b-thead>
                        <b-tbody>
                            <b-tr><b-td>Youth Entrepreneurship – Youth Entrepreneurship Academy Wi School</b-td></b-tr>
                            <b-tr><b-td class="fw-300"> Coway is a representative partner of '"One-person company," There are about 20,000 entrepreneurs such as Cody, CS Doctor, Home Care Doctor, HP, Bluebird, and BP. Coway operates the Wi School, a sergeant entrepreneurship school, to support young people preparing for start-ups related to lifestyle. Wi School provides professional and practical help by supporting business model mentoring, management consulting, and overseas advancement. In 2019, Coway supported a total of 2,300 young entrepreneurs through Wi School and provided Coway mentoring courses to 30 teams.
                            </b-td></b-tr>
                            <b-tr>
                                <b-td colspan="3" class="border-bottom-0">&nbsp;</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td colspan="3" style="border-bottom: 1.2px solid #d6a803;">Social Impact and Business Impact</b-td>
                            </b-tr>
                            <b-tr><b-td> Social Impact: Expand youth job creation and secure business continuity for start-ups
                            </b-td></b-tr>
                            <b-tr><b-td> Business Impact: Industry growth through diversification of lifestyle business areas
                            </b-td></b-tr>                       
                        </b-tbody>                                
                    </b-table-simple>
                </section>
                <hr class="py-3">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="u3" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">Public Policy Participation</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-45">Coway does not contribute political contributions under Article 31 of the Political Funding Act (limited donations).
                        </p>

                        <h7 class="mb-3 gray63">Political Contributions and Association Contributions</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-5">
                             <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td class="text-left">Unit</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Political Contributions</b-td><b-td class="text-left">1,000 KRW</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Association Donations</b-td><b-td class="text-left">1,000 KRW</b-td><b-td>541,822</b-td><b-td>430,162</b-td><b-td>505,759</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                        <h7 class="mb-3 gray63">Association Donation Details</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-45">
                             <b-thead><b-tr>
                                <b-td class="text-left">Group Name</b-td><b-td class="text-left">Category</b-td><b-td class="text-left">Expenditure Purpose</b-td><b-td>Amount(KRW)</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Daejeon Chamber of Commerce</b-td><b-td class="text-left">Association</b-td><b-td class="text-left">Comprehensive Economic and Industrial Development</b-td><b-td>103,200,000</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Korea Packaging Recycling Business Mutual Aid Association</b-td><b-td class="text-left">Association</b-td><b-td class="text-left">Home Appliance Industry Development</b-td><b-td>54,575,000</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Korea Direct Sales Industry Association</b-td><b-td class="text-left">Association</b-td><b-td class="text-left">Comprehensive Economic and Industrial Development</b-td><b-td>30,000,000</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Korea Exchange(KRX)</b-td><b-td class="text-left">Association</b-td><b-td class="text-left">Comprehensive Economic and Industrial Development</b-td><b-td>15,147,600</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Korea Listed Companies Association</b-td><b-td class="text-left">Association</b-td><b-td class="text-left">Comprehensive Economic and Industrial Development</b-td><b-td>10,640,000</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                </section>
            </b-container> 
            <!-- End of Contents Container -->
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
    head(){
        return{
            title: this.title + ' | Coway'
        }
    },
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
            return this.is_ENG? 'Local Community' : '지역사회'
        },
        sub_titles(){
            let temp = [
                { 
                    title: this.is_ENG? 'Coway-like Social Contribution':'코웨이다운 사회공헌', hash: 'u1',
                    child: [
                        { title: this.is_ENG? 'Practice Sharing with All Employees':'임직원과 함께하는 나눔 실천', hash: 'u1-1' }
                    ]
                },
                { 
                    title: this.is_ENG? 'Commitments for Clean Water and Air':'깨끗한 물과 공기를 위한 코웨이의 약속', hash: 'u2',
                    child: [
                        { title: this.is_ENG? 'Commitments 1. Water – Sharing the Water of Life': '약속 1. 물 - 생명의 물 나눔', hash: 'u2-1' },
                        { title: this.is_ENG? 'Commitments 2. Air – Sharing Clean Air': '약속 2. 공기 - 청정한 공기 나눔', hash: 'u2-2'},
                        { title: this.is_ENG? 'Commitments 3. People – Sharing Dreams and Visions': '약속 3. 사람 - 꿈과 비전 나눔', hash: 'u2-3'}
                    ]
                },
                { 
                    title: this.is_ENG? 'Public Policy Participation': '공공정책 참여', hash: 'u3'
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
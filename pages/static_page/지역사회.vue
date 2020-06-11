<template>
<div class="position-relative page-top-bg min-vh-100">   
    <logger title="지역사회 참여"></logger>
    <b-img src="@/assets/images/사각형17.png" fluid class="page-top-img"></b-img>

    <b-container class="">
        <b-row class="my-5 pt-md-5">
            <h1 class="mt-2 mt-lg-5 mb-3 text-center w-100 fw-400">CARE FOR SOCIETY</h1>
            <h7 class="mb-lg-5 text-center w-100 fw-400"> dummy text 환경을 건강하게 사람을 행복하게, 내일을 디자인하는 그린 글로벌 리더 </h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="'지역사회'"
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
                                <h4-ancor :title="'지역사회'" :activated="activated" class="mb-4 mb-sm-5 mt-m-2">지역사회</h4-ancor>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 pb-4 mb-5 mb-sm-0">  
                            <b-col class="col-12 col-sm-4">
                                <div class="temp-icon1"> <b-img src="@/assets/images/구성 요소8_1@2x.png" fluid class="h-100"></b-img> </div>
                            </b-col>
                            <b-col class="col-12 col-sm-8 pr-2">
                                <h7 class="gold7 mb-3">Business relevance &amp; Approach</h7>
                                <p>코웨이는 우리가 하는 일로 더 나은 세상을 만든다는 ‘착한 믿음’ 가지고 사람과 환경을 위한 나눔을 실천하고 있습니다. 코웨이는 깨끗한 물과 공기에 대한 전문성을 기반으로 가장 잘 할 수 있는 일을 통해, 가장 필요로 하는 곳에 기여하는 코웨이다운 사회공헌을 중점적으로 추진하고 있습니다. 코웨이는 깨끗한 물로 건강한 변화를 만들고, 청정한 공기를 마음껏 누릴 수 있도록 지원하고, 청년 창업가들과 꿈과 비전을 나눕니다.
                                </p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark">
                            <h7 class="gold7 mb-4 w-100">Activity</h7>
                            <b-col class="col-12 col-sm-4 text-center fw-500">
                                <div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img> </div>
                                <p class="fw-500 word-break px-sm-3 px-lg-5 mx-xl-3">물, 공기, 사람을 통한 사회공헌</p>
                            </b-col>
                            <b-col class="col-12 col-sm-4 text-center fw-500">
                                <div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img> </div>
                                <p class="fw-500 word-break px-sm-3 px-lg-5 mx-xl-3">CEO가 함께하는 임직원 봉사단 운영</p>
                            </b-col>
                            <b-col class="col-12 col-sm-4 text-center fw-500">
                                <div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img> </div>
                                <p class="fw-500 word-break px-sm-3 px-lg-5 mx-xl-3">말레이시아 글로벌 사회공헌 추진</p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark">
                            <b-col class="col-12 col-md-8 pr-md-4 mb-4 mb-md-0">
                                <h7 class="gold7 mb-4 w-100">Business Cases</h7>
                                <b-row no-gutters> 
                                    <b-col class="col-12 col-sm-4 text-center fw-500 px-lg-2"><div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img></div>
                                        <p class="fw-500 word-break">'착한 정수기' 캠페인</p>
                                    </b-col>
                                    <b-col class="col-12 col-sm-4 text-center fw-500 px-lg-2"><div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img></div>
                                        <p class="fw-500 word-break">취약계층 환경 개선 사업</p>
                                    </b-col>
                                    <b-col class="col-12 col-sm-4 text-center fw-500 px-lg-2"><div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img></div>
                                        <p class="fw-500 word-break">청년 창업사관학교 COWAY Wi School 운영</p>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col class="col-12 col-md-4 position-relative pl-md-4">
                                <div class="vertical-line-1 position-absolute d-none d-md-block"></div>
                                <h7 class="gold7 mb-45 w-100">Performance</h7>
                                <span class="f-330 fw-400">22.1</span><span class="fw-500">시간</span> <br>
                                <p class="fw-500 line-height-low f-100 word-break">임직원 인당 봉사활동 참여</p>
                            </b-col>                            
                        </b-row>
                    </div>
                </section> 
                <!-- End of DMA-->
                <section class="mb-5">
                    <div class="d-flex mb-3 position-relative"> <h6-ancor :title="'코웨이다운 사회공헌'" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">코웨이다운 사회공헌</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-45">코웨이는 물과 공기라는 소중한 자연의 가치를 지키고 지속가능한 방법으로 삶을 건강하고 풍요롭게 만들고자 ‘착한 믿음’의 경영정신을 바탕으로 사회공헌을 추진합니다. 코웨이의 핵심 비즈니스 역량인 물과 공기, 그리고 임직원을 기반으로 지역사회 공동체에 새로운 사회적 가치를 창출할 수 있도록 전략적 사회공헌을 추진하고 있습니다. 코웨이가 가장 잘할 수 있는 일을 기반으로 가장 필요로 하는 곳에 기여하여 더 나은 삶과 사회를 조성해 나가는 것이 코웨이 사회공헌의 핵심 가치입니다. 
                        </p>
                        <a href="https://www.coway.co.kr/Company/Management/Contribution"><b-button variant="gold" size="sm" block>코웨이 사회공헌 웹사이트 바로가기</b-button></a>
                        <hr class="space-p25">
                        <div style="border-width:0.1px; border-style:dotted; border-color:gray mb-45" class="my-3 p-3">그림. 코웨이 사회공헌 전략</div>
                        <hr class="space-p25">
                        
                        <h7 class="mb-3 gray63">사회공헌 투자액 <span class="f-80 fw-300"> (단위: 천 원)</span></h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-5">
                             <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">현금 기부</b-td><b-td>403,757,567</b-td><b-td>485,218,807</b-td><b-td>10,572,045</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">현물 기부</b-td><b-td>95,278,076</b-td><b-td>212,726,724</b-td><b-td>662,125,605</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">사회공헌성 비용</b-td><b-td>558,692,653</b-td><b-td>137,790,578</b-td><b-td>211,578,500</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                    <section class="border-gold px-4 py-3 mb-5">
                        <p class="gold6 fw-500 mt-2 mb-3 f-105"><b-badge class="rounded fw-400 bg-gold6 f-90 p-1 mr-2"> Case.</b-badge>코로나<span class="fw-600">19</span> 긴급재해 기부</p>
                        <p class="mb-3">코웨이는 코로나바이러스감염증19로 인해 많은 지원이 필요한 우리 지역사회에 응원과 격려의 마음을 보태기 위해 모회사인 넷마블과 함께 각 10억원씩 성금을 전국재해구호협회 희망브리지에 기부하였습니다. 이 성금은 전국재해구호협회를 통해 방호 물품, 진단키트 등 의료 물품 부족 상황에 직면한 전국 의료진에 대한 지원과 의료·복지 시설의 방역에 사용되었습니다. 또한 코웨이 말레이시아법인은 말레이시아 정부에 코로나19 극복 성금 30만 링깃을 전달하였습니다. 코웨이는 전 세계가 힘을 모아 코로나19로 인한 어려움을 극복하고 안전한 생활환경을 되찾을 수 있도록 지원을 아끼지 않겠습니다.
                        </p>
                    </section>

                    <h6-ancor :title="'임직원과 함께하는 나눔 실천'" :activated="activated" class="gold6 fw-500 mb-3 f-110">임직원과 함께하는 나눔 실천</h6-ancor>
                        <p>코웨이는 임직원 참여 사회공헌 활동을 통해 나눔을 실천합니다. CEO를 단장으로 하는 임직원 봉사단을 운영하여 본사뿐만 아니라 R&amp;D센터 및 공장 등 전사 임직원의 적극적인 참여를 기반으로 하고 있습니다.
                        </p>
                        <p class="mb-45">스마트 영업조직인 블루버드는 소아암재단과 협약을 맺고 정기적인 봉사활동을 실천하고 있습니다. 2019년에는 소아암 백혈병 치료를 마친 150명의 환아들을 격려하고 축하하기 위해 치료종결 축하행사를 진행했습니다.
                        </p>
                        <div style="border-width:0.1px; border-style:dotted; border-color:gray mb-45" class="my-3 p-3">그림. 코웨이 사회공헌 조직도</div>
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
                                    <b-td class="text-left">가치 환산액<sup>1)</sup></b-td><b-td class="text-left">천 원</b-td><b-td>1,034,211</b-td> <b-td>1,009,912</b-td> <b-td>1,108,055</b-td>
                                </b-tr>                                
                            </b-tbody>                                
                        </b-table-simple>
                        <p class="f-80 ml-1 mb-5">(1) 가치 환산액: 시간당 평균 급여(추정치) X 봉사단 임직원 수 X 인당 봉사시간</p>
                    <hr class="py-3">
                    <div class="d-flex mb-3 position-relative"> <h6-ancor :title="'깨끗한 물과 공기를 위한 코웨이의 약속'" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">깨끗한 물과 공기를 위한 코웨이의 약속</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-45">코웨이는 모든 지역사회에 깨끗한 물과 공기에 대한 접근성을 향상하고 위생이 보장된 생활환경을 제공하여 삶의 질을 향상하고자 물, 공기, 사람의 세 가지 약속을 주요 사회공헌 영역으로 추진합니다. 이에 따라 중점 추진 활동으로 국내외 취약계층에 정수기 및 공기청정기를 지원하여 깨끗함의 가치를 공유하는 한편, 청년 일자리 창출 및 산업 혁신을 위해 라이프스타일 분야 청년 창업자를 지원하고 있습니다.  
                        </p>
                        <div style="border-width:0.1px; border-style:dotted; border-color:gray mb-45" class="my-3 p-3">그림. 물, 공기, 사람 핵심 성과</div>
                    <hr class="space-p25">                
                    <h6-ancor :title="'약속 1.물 - 지역사회 깨끗한 물 지원'" :activated="activated" class="gold6 fw-500 mb-3 f-110">'약속 1.물 - 지역사회 깨끗한 물 지원'</h6-ancor>
                    <div style="border-width:0.1px; border-style:dotted; border-color:gray mb-45" class="my-3 p-3">SDGs 아이콘 및 그림자리</div>
                        <b-table-simple responsive class="text-table social-table f-95">
                            <b-thead><b-tr>
                                <b-td colspan="3">주요 활동</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td>
                                        <p>착한정수기 사업</p>
                                        <p>2015년부터 공익사업재단 네이버 해피빈과 협업을 통해 '착한정수기' 캠페인을 전개하고 있습니다. 아동센터, 자원봉사시설, 무료병원, 장애 보호센터 등 전국 49개지역 136개 단체에 리퍼브 정수기를 기증하고 정기 관리 서비스를 제공하고 있습니다.  
                                        </p>
                                    </b-td>
                                    <b-td>
                                        <p>안심지하수 사업</p>
                                        <p>2015년 환경부와 ‘안심 지하수 지원사업’ 협약을 체결하여 농촌 지하수 오염 지역에 정수기를 지원하고 있습니다. 지하수 오염 지역 주민들이 안심하고 깨끗한 물을 마실 수 있도록 약 500가구에 정수기를 무상으로 지원하고 있으며, 지하수 개선을 위한 기술 지원과 연구도 추진하고 있습니다. 
                                        </p>
                                    </b-td>
                                    <b-td>
                                        <p>말레시이사 빗물공급장치 지원</p>
                                        <p>코웨이는 2018년부터 코웨이 말레이시아 현지 법인과 함께 물 취약지역을 선정하여 빗물공급장치를 지원하고 있습니다. 2019년 말 누적 155가구에 빗물공급장치를 기증하였으며, 202X년까지 1,000가구에 빗물공급장치를 제공하여 깨끗한 물에 대한 접근성을 확대할 계획입니다.
                                        </p>
                                    </b-td> 
                                </b-tr>
                                <b-tr>
                                    <b-td colspan="3">사회적 영향과 사업적 영향</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td colspan="3">
                                        <li>사회적 영향: 깨끗한 식수 접근성이 떨어지는 취약 지역에 정수기 및 빗물공급장치를 지원하여 위생적인 식수에 대한 접근성 향상 </li>
                                        <li>사업적 영향: 사업 진출 지역 내 제품 인지도 증가를 기반으로 시장 기회 확대</li>
                                    </b-td>
                                </b-tr>                          
                            </b-tbody>                                
                        </b-table-simple>
                    
                    <h6-ancor :title="'약속 2.공기 - 취약계층 환경개선 지원'" :activated="activated" class="gold6 fw-500 mb-3 f-110">'약속 2. 공기 - 취약계층 환경개선 지원'</h6-ancor>
                    <div style="border-width:0.1px; border-style:dotted; border-color:gray mb-45" class="my-3 p-3">SDGs 아이콘 및 그림자리</div>
                        <b-table-simple responsive class="text-table social-table f-95">
                            <b-thead><b-tr>
                                <b-td>주요 활동</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td>
                                        <p>취약계층 환경 개선 사업</p>
                                        <p>대기오염과 미세먼지 증가에도 생활환경 개선이 어려운 취약계층을 돕고자 2018년 환경부와 ‘취약계층 환경성 질환 예방사업’ 업무 협약을 기반으로 공기청정기를 무상 지원하고 있습니다. 2019년 말 기준 서울을 포함한 수도권과 5대 광역시 등 지방자치단체 50곳에 총 400대의 공기청정기를 무상 지원하고, 관리 서비스를 제공하여 취약계층 거주 공간의 환경 개선을 돕고 있습니다.
                                        </p>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>사회적 영향과 사업적 영향</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>
                                        <li>사회적 영향: 미세먼지로 인한 인체 건강 영향 감소, 취약계층 호흡기 질환 예방 </li>
                                        <li>사업적 영향: 공기청정기 제품의 생활환경 필수품화를 통한 시장 규모 확대</li>
                                    </b-td>
                                </b-tr>                          
                            </b-tbody>                                
                        </b-table-simple>
                    
                    <h6-ancor :title="'약속 3.사람 - 청년 창업 지원'" :activated="activated" class="gold6 fw-500 mb-3 f-110">'약속 3.사람 - 청년 창업 지원'</h6-ancor>
                    <div style="border-width:0.1px; border-style:dotted; border-color:gray mb-45" class="my-3 p-3">SDGs 아이콘 및 그림자리</div>
                        <b-table-simple responsive class="text-table social-table f-95">
                            <b-thead><b-tr>
                                <b-td>주요 활동</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td>
                                        <p>청년창업 지원 - 청년창업사관학교 위스쿨(Wi School)</p>
                                        <p>코웨이는 코디, CS닥터, 홈케어닥터, HP, 파랑새, BP 등 약 2만여 명의 1인 기업가가 활약하고 있는 '1인 기업’의 대표적인 파트너입니다. 코웨이는 라이프스타일 분야 관련 1인 창업을 준비하는 청년들을 지원하기 위해 창업사관학교 위스쿨(Wi School)을 운영하고 있습니다. 위스쿨은 비즈니스 모델 멘토링, 경영 컨설팅, 해외진출지원 등을 지원하여 전문적이고 실질적인 도움을 주고 있습니다. 2019년 코웨이는 위스쿨을 통해 총 2,300여 명의 청년 창업자를 지원하였으며, 30개 팀에 코웨이 멘토링 과정을 제공하였습니다.
                                        </p>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>사회적 영향과 사업적 영향</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>
                                        <li>사회적 영향: 청년 일자리 창출 확대 및 창업 기업의 사업 연속성 확보</li>
                                        <li>사업적 영향: 라이프스타일 비즈니스 영역의 다양화를 통한 산업 성장</li>
                                    </b-td>
                                </b-tr>                          
                            </b-tbody>                                
                        </b-table-simple>

                    <div class="d-flex mb-3 position-relative"> <h6-ancor :title="'공공정책 참여'" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">공공정책 참여</h6-ancor><div class="horizontal-line-2 position-absolute" style="z-index:8"></div></div>
                        <p>코웨이는 정치자금법 제31조(기부의 제한)에 의거하여 정치 기부금을 출연하지 않습니다.
                        </p>
                        <div style="border-width:0.1px; border-style:dotted; border-color:gray mb-45" class="my-3 p-3">그림. 물, 공기, 사람 핵심 성과</div>

                        <h7 class="mb-2">정치 기부금 및 협회 기부금</h7>
                        <b-table-simple responsive class="num-table social-table f-95 mb-45">
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

                        <h7 class="mb-2">협회 기부금 세부내역</h7>
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
            title: '지역사회',
            activated: [],
            sub_titles: [
                { 
                    title: '코웨이다운 사회공헌', 
                    child: [
                        { title: '임직원과 함께하는 나눔 실천' }
                    ]
                },
                { 
                    title: '깨끗한 물과 공기를 위한 코웨이의 약속',
                    child: [
                        { title: '약속 1. 물 - 지역사회 깨끗한 물 지원' },
                        { title: '약속 2. 공기 - 취약계층 환경개선 지원 '},
                        { title: '약속 3. 사람 - 청년 창업 지원'}
                    ]
                },
                { 
                    title: '공공정책 참여',
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
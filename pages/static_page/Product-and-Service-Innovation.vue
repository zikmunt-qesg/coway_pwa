<template>
<div class="position-relative page-top-bg-m1 min-vh-100">  
    <logger title="제품과 서비스의 혁신"></logger>
    <div class="w-100 bg-white bg-white-cover-m1 position-absolute"></div>

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
                            <h4-ancor hash="T" :activated="activated" class="f-190 fw-300 mb-4 mb-sm-5 mt-m-2 line-height-low">제품과 서비스의 혁신</h4-ancor>
                        </b-col>
                    </b-row>
                    <b-row no-gutters class="px-3 pb-4">
                        <b-col class="col-12 col-md-4 fw-500">
                            <b-row no-gutters class="pr-md-4">
                                <b-col class="col-12 pb-4 border-bottom-dark blue7">
                                    <h7 class="mb-3 f-120 w-100">Activity</h7>
                                    <ul class="material-ul fw-500">
                                        <li>본질적 가치를 높이는 제품 혁신</li>
                                        <li>미래 기술 기반의 서비스 혁신</li>
                                        <li>혁신을 위한 연구개발 역량 강화</li>
                                    </ul>
                                </b-col>
                                <b-col class="col-12 pt-3">
                                    <h7 class="mb-4 f-120 w-100 blue7">Performance</h7>
                                    <b-row>
                                        <b-col class="col-12 col-sm-6 col-md-12 mb-45 text-center">
                                            <div class="mx-auto mb-3" style="height:58px"><b-img src="/images/63_1.svg" fluid class="h-100"></b-img> </div>
                                            <p class="mb-0 fw-500 font-noto">2019년 연구개발비</p>
                                            <p class="mb-0 fw-400 blue7 mt-m-2"><span class="f-230">37,671</span>백만 원</p>
                                            <p class="gray65 fw-400 line-height-low px-xl-5">(전년대비 2.3% 증가, 매출액 대비 1.25%)</p>
                                        </b-col>
                                        <b-col class="col-12 col-sm-6 col-md-12 mb-4 mb-sm-0 text-center">
                                            <div class="mx-auto mb-2" style="height:58px"><b-img src="/images/64_1.svg" fluid class="h-100"></b-img> </div>
                                            <p class="gray7 mb-0 fw-500 font-noto">5년 연속</p>
                                            <p class="f-140 fw-400 blue7">CES 혁신상 수상</p>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>                            
                        </b-col>                        
                        <b-col class="col-12 col-md-8 px-2 position-relative pl-md-4">
                        <div class="position-absolute vertical-line-1 d-none d-md-block"></div>
                            <h7 class="blue7 f-120 mb-3">Business relevance & Approach</h7>
                            <p >감염병의 확산과 미세먼지 증가 등 최근의 글로벌 사회·환경 문제는 소비자 생활패턴의 변화를 이끌며 환경가전 시장에 큰 영향을 끼치고 있습니다. 가정에 머무는 시간이 증가함에 따라 건강과 위생은 물론, 고객 개인의 라이프스타일을 반영한 제품과 서비스에 대한 니즈가 증가하였으며, 디지털 기술이 생활 전반에 자리함에 따라 주거공간에 인공지능(AI), 사물인터넷(IoT) 기술을 접목한 스마트 홈(Smart Home) 구현이 경쟁 요소로 자리하였습니다.
                            </p>
                            <p class="mb-5 mb-md-45">코웨이는 이러한 변화를 환경가전 렌탈 비즈니스의 새로운 기회로 삼아 ‘물과 공기를 깨끗하게’라는 코웨이의 본질을 강화하기 위한 활동을 추진하였습니다. 2019년 코웨이는 위생성을 극대화한 ‘한뼘 시루직수 정수기’를 출시하고, 빅데이터 기반 고객 맞춤형 제품을 추천하는 ‘워터맵 서비스’를 제공하는 한편, 깨끗하고 맛있는 물을 선도하는 글로벌 리더로서 연구를 강화하기 위해 R&D 센터 내 ‘물맛 연구소’를 개소하는 등의 혁신 활동을 추진하였습니다. 또한, 오픈 이노베이션을 통해 제품에 ICT 기술을 결합한 스마트 가전을 선보이며 시장 내 경쟁력을 확보하고 고객 가치를 향상하기 위한 노력을 기울이고 있습니다.
                            </p>
                            <h7 class="blue7 f-120 mb-3">Business Cases</h7>
                            <b-row>
                                <b-col class="col-12 col-md-7 py-2 pr-sm-2 pr-xl-3 d-flex align-items-center">
                                    <div class="ml-2 ml-md-0 mr-3"><b-img src="/images/65_1.svg" ></b-img> </div>
                                    <div class="fw-500 mb-0"><span class="fw-600">2020</span> CES 혁신상 수상, 사계절 의류청정기 더블케어</div>
                                </b-col>
                                <b-col class="col-12 col-md-5 py-2 d-flex align-items-center">
                                    <div class="ml-2 ml-md-0 mr-3" style="height:57px"><b-img src="/images/66_1.svg" ></b-img> </div>
                                    <div class="fw-500 mb-0">물맛연구소 개소</div>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </section>
                <hr class="mb-4">
                <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="a1" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">본질적 가치를 높이는 제품 혁신 </h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-45 mb-md-5"> 코웨이는 깨끗함을 기반으로 고객에게 새로운 가치를 제공하는 대한민국 대표 물 · 공기 기업으로서 본질에 집중하여 위생성을 강화한 ‘한뼘 시루직수 정수기’를 개발하였습니다. 한뼘 시루직수 정수기는 혁신 기술의 집약체로서, 제품의 위생성, 효율성뿐만 아니라 환경적 영향을 최소화하기 위한 코웨이의 노력이 담긴 제품입니다. 또한, 고객 경험을 기반으로 하는 렌탈 비즈니스의 본질적 가치 향상을 위해 고객 맞춤형 제품 및 서비스를 제공하고 있습니다.
                    </p>
                    <b-row class="mb-5">
                        <b-col class="col-12 col-md-5 mb-45 mb-md-0 pr-0" style="height: 286px;"><b-img src="/images/149@3x.png" fluid class="h-100"></b-img></b-col>
                        <b-col class="col-12 col-md-7 px-3 pl-md-4 px-xl-0"><h6-ancor hash="a1-1" :activated="activated" class="blue5 mb-3">혁신 기술의 집약, 한뼘 시루직수 정수기 개발</h6-ancor>
                            <p>코웨이는 끊임없는 기술 진화를 통해 2019년 ‘한뼘 시루직수 정수기’를 출시하였습니다. 한뼘 시루직수 정수기는 RO멤브레인 필터를 직수화 기술로 구현한 ‘시루직수 정수기’의 업그레이드 버전으로, 오염 물질 제거 성능과 풍부한 유량을 특징으로 합니다. 필터 기술력의 정점인 ‘CIROO 2.0 필터’를 탑재하여, 기존 필터보다 면적을 6배, 정수량을 30배 높인 직수 방식으로 구현하였으며, 물을 마실 때마다 유로에 남은 물을 배출하는 ‘유로 비움 모드’, 24시간 동안 사용하지 않으면 정수기 속 남은 물을 배출하는 ‘자동 배수 시스템’으로 위생성을 향상하였습니다. 또한, 기존 시루직수 정수기(CHP-7300R, CP-7300R) 대비 크기를 약 30% 줄여 공간 활용도를 높였고, 소형 냉각 시스템과 순간 온수 시스템을 적용하여 에너지소비효율을 1등급으로 높여 친환경적 측면도 개선하였습니다.
                            </p>
                        </b-col>
                    </b-row>
                <section class="border-blue px-4 py-4 mb-5">
                    <p class="blue5 fw-500 mt-2 mb-3 f-105"><b-badge class="rounded fw-400 bg-blue5 f-90 p-1 mr-2"> Case.</b-badge><span class="fw-600">2020</span> CES 혁신상 수상, 사계절 의류청정기 더블케어</p>
                    <p class="mb-3">코웨이는 2020년 CES(Consumer Electronics Show)*에 참가하여 혁신적인 생활가전 제품 및 서비스를 전 세계에 선보였으며, 5년연속 CES 혁신상을 수상하며 혁신성을 인정받고 있습니다.
                    </p>
                    <p class="mb-3"> 매해 전세계 각국의 혁신적인 기업들이 새로운 아이디어와 제품을 선보이는 CES는 한 해를 견인할 기술을 확인할 수 있는 지표입니다. CES혁신상은 매년 CES(소비자 가전 전시회)에서 미국소비자기술협회(CTA: Consumer Technology Association)의 전문가들이 기술력, 디자인, 고객가치 등의 혁신성을 종합 평가하여 우수한 제품을 선발, 시상하는 상으로, 코웨이는 2016년 첫 참가 이후 5년 연속 CES 혁신상을 수상하는 성과를 거두고 있습니다.
                    </p>
                    <p class="mb-3"> 2020년 코웨이의 수상작인 ‘사계절 의류청정기 더블케어’는 일반적으로 의류 관리 기능만 제공되는 기존 의류관리기와는 차별적으로 의류 건조 기능과 함께 실내 공기 청정 및 제습 기능까지 제공되어 365일 사계절 내내 활용가치가 높은 혁신 제품입니다. 
                    </p>
                    <p class="f-80 mb-5">* CES(Consumer Electronics Show): 미국소비자기술협회(CTA: Consumer Technology Association)가 주최하는 글로벌 소비자 가전 전시회
                    </p>

                    <b-table-simple responsive class="txt-table case-table f-95 mb-5">
                        <b-thead><b-tr>
                            <b-td>컨셉</b-td> <b-td class="text-center bg-blue15" style="width:18%">2016<br><span class="fw-500">복합기능</span></b-td> <b-td class="text-center bg-blue15" style="width:18%">2017<br><span class="fw-500">IoT(사물인터넷)</span></b-td><b-td class="text-center bg-blue15" style="width:18%">2018<br><span class="fw-500">AI(인공지능)</span></b-td> <b-td class="text-center bg-blue15" style="width:18%">2019<br><span class="fw-500">원천기술의 혁신</span></b-td> <b-td class="text-center bg-blue15" style="width:18%">2020<br><span class="fw-500">미래 Home</span></b-td>
                        </b-tr></b-thead>
                        <b-tbody>
                            <b-tr>
                                <b-td class="border-bottom-0" style="border-top: 1px solid #c6c6c6!important;">설명</b-td> <b-td>기존 제품에 기능을 더한 복합 제품으로 제품의 활용성 향상</b-td> <b-td>제품 간의 연결을 통한 사용성, 모바일 통한 제품 조작, 데이터 확인이 가능한 IoCare 기술</b-td> <b-td>빅데이타, 인공지능을 활용해 제품 스스로 데이터 판단여 서비스 제공하는 기술</b-td> <b-td>‘깨끗함’의 본질적 가치를 강조, 기술적 차별점 제시</b-td><b-td>주거 환경의 중심 트랜드, 미래 가전 제시</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="border-bottom-0" style="border-top: 1px solid #c6c6c6!important;">수상 제품명</b-td> <b-td>듀얼케어 공기청정기, 스스로살균 정수기, 바리스타 아이스 정수기, 클리닉 비데, 차량용 공기청정기, 포터블 공기청정기</b-td> <b-td>스스로살균 정수기, 한뼘 정수기</b-td> <b-td>의류관리기, 액티브 액션 공기청정기, 스마트 베드 시스템, 뷰티플렛폼, 나노직수 정수기</b-td> <b-td>시루직수 정수기(CHP-7300R), 시루스탠드 정수기(CHP-5700R), 한방온혈 안마의자(MC-S01), 바디리프레셔 연수기</b-td><b-td>사계절 의류청정기 더블케어</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="border-bottom-0" style="border-top: 1px solid #c6c6c6!important;">수상 개수</b-td><b-td>6개</b-td><b-td>2개</b-td> <b-td>5개</b-td> <b-td>4개</b-td><b-td>1개</b-td>
                            </b-tr>                                
                        </b-tbody>                                
                    </b-table-simple>
                    <b-row class="">
                        <b-col class="col-12 col-sm-6 mb-5 mb-md-0"><b-img src="/images/150@2x.png" fluid></b-img>
                            <p class="f-80 mt-2">사계절 의류청정기 더블케어 FAD-01S</p>
                        </b-col>
                        <b-col class="col-12 col-sm-6 "><b-img src="/images/151@2x.png" fluid></b-img>
                            <p class="f-80 mt-2">2020 CES</p>
                        </b-col>
                    </b-row>
                </section>
                <hr class="py-2">
                <h6-ancor hash="a1-2" :activated="activated" class="blue5 mb-3">고객 맞춤형 혁신 다각화 </h6-ancor>
                <b-row class="mb-5">
                    <b-col class="col-12 col-sm-6">
                        <p class="mb-4 mb-sm-3"> 코웨이는 다양한 생활환경에 맞는 맞춤형 제품을 개발하여 고객 라이프스타일을 혁신합니다. 2019년 코웨이는 공기청정기 제품군을 시작으로 맞춤형 제품을 개발하고 있습니다. 거주 공간에서의 삶의 질을 추구하는 소비자의 증가에 따라 각 주거 환경에 맞춰 사용 가능한 벽걸이 겸용 제품 (AP-1519B, AP3519A), 디자인 가구형 공기청정기(AP-1019D)를 개발하여 자신만의 공간 구축에 대한 고객의 니즈를 반영했습니다. 또한 최근 국내외 시장에서 비대면 서비스에 대한 니즈가 커지고 있다는 점에 착안해 필터교체 알림을 통해 사용자 스스로 필터 세척 및 교체를 손쉽게 할 수 있는 자가관리형 공기청정기 카트리지(AP-1019C)를 개발하였습니다.
                        </p>
                    </b-col>
                    <b-col class="col-12 col-sm-6 line-height-low">
                        <h7 class="gray63 font-noto">코웨이 고객만족도<sup>1)</sup></h7>
                        <div class="f-80 gray6 mb-2">(단위: %)</div>
                        <b-table-simple responsive class="num-table f-95 position-relative mb-2" >
                            <b-thead><b-tr>
                                <b-td></b-td><b-td> 고객만족도 </b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left py-1">2017</b-td> <b-td class="py-1" >76.0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left py-1">2018</b-td> <b-td class="py-1" >79.0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left py-1">2019</b-td> <b-td class="py-1" >75.1</b-td>
                                </b-tr> 
                                <b-tr class="">
                                    <b-td class="text-left py-1"><span class="fw-500"> 2020 목표</span></b-td> <b-td class="py-1"><span class="fw-500">77.0</span></b-td>
                                </b-tr>                                
                            </b-tbody>   
                            <!-- <div class="position-absolute" style="z-index:2; width:98%; height:25.7px; bottom:0.5px; left:0; background-color: #d3e9f3;">&nbsp;</div> -->

                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5 mb-sm-4">
                            <li> NPS(순추천 지수 = 추천 고객비율 - 비추천 고객 비율)를 통해 고객만족도를 측정함
                            </li>
                            <li> 2019년도는 모바일로 조사방법을 변경함</li>
                        </ol>
                    </b-col>
                    <b-col class="col-12">
                        <p class="mb-3">한편 말레이시아와 미주지역 중심 해외시장 경쟁력 강화 전략에 따라 시장 맞춤형 기술 개발을 추진하고 있습니다. 현지 환경에 맞는 정수기 기술 및 시스템 확보를 위해 워터맵(Water Map)을 구축하고 필터 수명 평가, 사용자 만족도 조사 등을 진행하고 있습니다. 또한, 비데 제품의 경우 사용자 상태에 맞춰 최적화된 세정을 제공하는 i-wave 수류 시스템을 개발하였습니다. 뿐만 아니라 어린이 맞춤 모드, 시각장애인용 점자 표기 등을 탑재하여 다양성 기반의 혁신적인 제품으로 해외 시장에서의 입지를 다져 나갈 계획입니다.
                        </p>
                    </b-col>
                </b-row>
                <hr class="py-2">
                <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="a2" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">미래 기술 기반의 서비스 혁신</h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                <p class="mb-5">2019년 기준 국내 렌탈 서비스 569만명의 고객 계정을 보유하며 환경가전 업계를 선도하는 코웨이는 미래기술을 기반으로 고객에 새로운 서비스 경험을 제공합니다. 빅데이터를 이용하여 지역 수질에 맞는 정수기 제품을 추천하는 워터맵 서비스와, 가상 시뮬레이션을 통해 생활환경에 맞는 공기청정기를 체험해 볼 수 있는 공기주치의 서비스가 대표적입니다. 코웨이는 오랜 기간 연구해온 데이터를 기반으로 보다 정확하고 편리한 경험을 제공합니다.
                </p>
                    <h6-ancor hash="a2-1" :activated="activated" class="blue5 mb-3">빅데이터 기반 제품 추천, 워터맵 서비스</h6-ancor>
                    <p class="mb-45"> 워터맵 서비스는 국내외 각지의 물을 채취·분석해 수질 데이터베이스를 구축한 뒤 이를 기반으로 고객 수질 환경에 따른 맞춤 필터를 파악하고, 고객의 다양한 상황을 고려해 최종적으로 적합한 제품을 추천해주는 서비스입니다. 빅데이터 분석* 기반의 추천 서비스를 통해 고객이 속한 지역적 특성에 맞는 필터 및 제품을 사용할 수 있도록 차별화된 가치를 제공하고 있습니다.
                    </p>
                <section class="bg-blue-gray1 py-4 px-4 mb-5">                    
                    <hj-img src="/images/62_1@3x.png" fluid></hj-img> 
                    <p class="f-80 mt-2">코웨이 글로벌 워터맵 / 국내 워터맵</p>
                    <hr class="space-p25">
                    <p class="f-90 letter-narrow"> 1단계 : ‘모바일 워터맵 서비스 페이지’ 접속 &rarr; 2단계 : 거주하는 지역, 건물의 연식, 원수 종류 등의 정보 입력 &rarr; 3단계 : 입력 정보 기반으로 수질 데이터베이스 이용해 수질 환경 분석 &rarr; 4단계 : 수질 환경에 알맞은 필터를 파악, 사용 장소, 필요 기능, 사용자 수 등을 고려해 맞춤 정수기 추천</p>
                    <p class="f-80">* 빅데이터 분석 항목 : 먹는 물 수질 기준 항목인 탁도, TDS(Total Dissolved Solid), pH를 비롯해 양이온 17종, 음이온 4종 등 </p>
                </section>
                <hr class="py-2">
                <h6-ancor hash="a2-2" :activated="activated" class="blue5 mb-3">시뮬레이션 체험, 공기 주치의 서비스</h6-ancor>
                    <p class="mb-45"> 코웨이는 ‘에어 시뮬레이션 시스템’을 활용하여 공간의 구조, 가구, 사람 수 등에 따라 다른 사용 환경에 공간별로 공기 청정 성능이 어떻게 다른지 직접 보여주고, 알맞은 제품 종류 및 최적의 배치 장소를 제안하는 맞춤형 ‘공기주치의 서비스’를 제공합니다. 에어 시뮬레이션 시스템은 약 1,960억 개의 공기질 빅데이터를 활용한 컴퓨터 시뮬레이션을 통해 공기나 물의 움직임을 예측하는 시스템으로, 설치한 공기청정기를 통해 시간 단위로 공기가 정화되는 효과를 확인할 수 있습니다. 고객은 가상 시뮬레이션을 통해 시각적으로 제품을 체험할 수 있으며 생활 환경에 최적화된 제품을 구매하여 높은 만족도를 얻을 수 있습니다.
                    </p>
                    <div class="d-flex justify-contents-between mb-5">
                        <div class="mr-2" style="width:18%"><b-img src="/images/36@2x.png" fluid class="w-100"></b-img></div>
                        <div class="mr-2" style="width:18%"><b-img src="/images/39@2x.png" fluid class="w-100"></b-img></div>
                        <div class="mr-2" style="width:32%"><b-img src="/images/42@2x.png" fluid class="w-100"></b-img></div>
                        <div style="width:32%"><b-img src="/images/45@2x.png" fluid class="w-100"></b-img></div>
                    </div>
                    <hr class="py-3">
                    <b-row class="mb-5">
                        <b-col class="col-12 col-sm-4 mb-4 mb-sm-0"><b-img src="/images/48@3x.png" fluid class="w-100"></b-img></b-col>
                        <b-col class="col-12 col-sm-8"><h6-ancor hash="a2-3" :activated="activated" class="blue5 mb-3">모바일 서비스 강화, 안심 QR 서비스 시행</h6-ancor>
                            <p>코웨이는 고객의 불편사항을 빠르고 정확하게 해결하여 고객과 긴밀하게 소통하고자 24시간 모바일 안심서비스를 시행하고 있습니다. 이를 통해 고객은 시간과 공간의 제약 없이 언제 어디서나 모바일로 제품 점검 일정, 점검 이력, 사용설명서 등의 정보를 조회할 수 있고, 카카오 상담톡을 통해 제품 상담뿐만 아니라 A/S 신청도 간단하게 신청할 수 있습니다. 특히, 별도의 어플리케이션 설치와 회원가입, 인증 절차가 없어 서비스의 접근성과 편의성을 높였습니다. 또한 제품에 붙어있는 QR을 통해 접속할 수 있도록 하였고, 고객 사용성 확대를 위해 지속적인 개선을 진행하고 있습니다.
                            </p>
                        </b-col>
                    </b-row>
                <hr class="py-3">
                <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="a3" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">혁신을 위한 연구개발 역량 강화</h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                <p class="mb-5">코웨이는 물과 공기에 대한 전문성과 책임감을 바탕으로 건강한 생활환경을 위한 신기술을 확보하고 혁신제품을 개발하기 위해 노력하고 있습니다. 코웨이는 기술 연구부터 제품 개발, 신뢰성 검증에 이르기까지 지속적으로 연구개발 투자를 확대하며, 미래 가치를 발굴하기 위해 선행기술과 디자인을 논의하는 전사 차원의 회의체인 NIC 365(New Technology and Product Innovation Committee 365)를 운영하여 전사차원의 혁신을 추진하고 있습니다. 물과 공기에 대한 기존 보유 기술을 강화하는 한편, 의류청정기, 매트리스 등 새로운 제품군에 신기술 접목에 힘쓰고 있습니다. 또한 오픈 이노베이션 및 기술제휴를 통해 신성장동력을 탐색하고 있습니다.
                </p>
                <h6-ancor hash="a3-1" :activated="activated" class="blue5 mb-3">깨끗하고 맛있는 물에 대한 연구, 물맛 연구소</h6-ancor>
                    <p class="mb-3"> 코웨이는 ‘깨끗하고 맛있는 물’에 대해 연구하고 정수기 물맛의 기준을 정립하기 위하여 R&D센터에 '물맛 연구소'를 개소했습니다. 물맛 연구소에는 한국국제소믈리에협회, 한국수자원공사 공인 워터소믈리에 28명과미국수질협회(WQA) 공인 물 전문가(CWS, Certified Water Specialist) 23명, 물 관련 전문 기술을 보유한 코웨이 연구원 45명 등이 소속되어 활동하고 있습니다.
                    </p>
                    <p class="mb-45"> 코웨이는 물맛 연구를 위해 2009년부터 테스크포스팀을 구성해 연구를 시작하였으며, 2011년에는 글로벌 연구를 바탕으로 물맛의 방향성을 수립했으며 2017년부터 코웨이만의 깐깐한 물맛 기준인 'GPT(Good Pure Tasty water) 지수'를 수립해 제품 평가에 활용하고 있습니다. 또한 ‘물맛 관능 평가실’ 및 ‘관능 평가 전문 통계 프로그램’을 도입하고, 물맛 전문 패널을 양성하는 등 물맛 연구에 대한 수준을 지속적으로 높이고 있습니다. 향후 코웨이는 물맛 연구소를 중심으로 1) 정수기 물맛 속성 정의, 2) 정수기 필터 성능에 따른 물맛의 연관성 과학적 입증, 3) 정수기만의 맛있는 물맛 기준 수립 등의 연구활동을 진행할 계획입니다.
                    </p>
                    <b-row class="mb-5">
                        <b-col class="col-12 col-sm-6 mb-3 mb-sm-0"><b-img src="/images/27@3x.png" fluid class="w-100"></b-img> </b-col>
                        <b-col class="col-12 col-sm-6">
                            <div class="overflow-hidden"><a href="http://water.coway.co.kr"> <b-img src="/images/30@3x.png" fluid class="link-img"></b-img> </a></div>
                            <p class="f-70 mt-2 gray6">http://water.coway.co.kr</p>
                        </b-col>
                    </b-row>
                    <b-row class="mb-5">
                        <b-col class="col-12 col-md-6 mb-4 mb-md-0">
                        <h6-ancor hash="a3-2" :activated="activated" class="blue5 mb-3">오픈 이노베이션, 아마존과 협력을 통한 IoT 기술 도입</h6-ancor>
                            <p class="mb-3"> 코웨이는 미국의 전자 상업회사 아마존(Amazon)과의 협업을 통해 고객의 제품 사용 환경을 강화하였습니다. 사용환경에서 알맞은 시기에 필터를 교체하는 것이 필수적인 공기청정기 제품에 아마존의 인공지능 플랫폼 알렉사(Alexa)를 도입하여 고객 편의성을 극대화하였습니다. 2017년 코웨이 공기청정기 에어메가(Airmega)에 아마존의 알렉사(Alexa)를 처음 도입하였으며, 2018년에는 아마존 소모품 자동 배송 시스템인 DRS(Dash Replenishment Through Alexa)를 적용하였습니다. 이를 기반으로 2019년 미주 시장에서의 코웨이 제품 판매량은 2017년 대비 약 267% 성장한 12만대를 기록하였습니다.
                            </p>
                            <p class="mb-3"> 2020년 5월 현재 코웨이와 아마존은 DRS의 3세대 버전인 DART 서비스가 적용된 공기청정기 기술을 적용하여 필터 수명 및 제품상태 확인, 음성명령을 통한 필터 주문을 구현하고 있습니다. 또한 2020년 내 코웨이의 정수기 제품 아쿠아메가(Aquamega)에도 알렉사를 적용하여 사용성을 제고할 계획입니다.
                            </p>
                            <p> 아마존과의 협업은 미주 시장 뿐만 아니라 글로벌 시장에서 물과 공기에 대한 코웨이의 전문성을 알리는 계기가 되었습니다. 특히 인공지능 플랫폼 서비스 적용을 통해 사물인터넷(IoT)를 구현하여 소비자에게 한층 높은 수준의 라이프 케어를 제공하며, 빠르게 성장중인 구독 경제 시장에서 차별화된 서비스를 구현할 수 있게 되었습니다.
                            </p>
                        </b-col>
                        <b-col class="col-12 col-md-6 d-flex flex-row flex-md-column align-items-center">
                            <div :class="isIE ? 'd-none' :'text-center d-none d-sm-block mb-md-4 px-md-5'" style="max-width:330px;"><b-img src="/images/33@3x.png" fluid></b-img></div>
                            <div class="position-relative pt-md-4">
                                <div class="position-absolute" style="margin-top: -1.75rem;">
                                    <h7 class="mb-2 pt-3 pt-sm-0">연구개발 투자 및 성과</h7>
                                    <div class="fw-300 f-80 d-flex align-items-center mb-1"><div style="width:12px; height:12px;" class="mr-1 bg-blue5"></div> 연구개발 비용 (단위: 백만 원)</div>
                                    <div class="fw-300 f-80 d-flex align-items-center "><div style="width:12px; height:1.5px;" class="mr-1 bg-gray7"></div> 매출액 대비 비용(단위: %)</div>
                                </div>
                                <hj-img src="/images/115_1.svg" fluid class="w-100"></hj-img> 
                            </div>
                        </b-col>
                    </b-row>
                    <h7 class="mb-3 gray63"> 지식재산권 보유 현황 <span class="f-80 fw-300"> (단위: 건)</span></h7>
                    <b-table-simple responsive class="num-table f-95">
                        <b-thead><b-tr>
                            <b-td class="text-left">구분</b-td> <b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td>
                        </b-tr></b-thead>
                        <b-tbody>
                            <b-tr>
                                <b-td class="text-left">특허</b-td> <b-td>799</b-td> <b-td>930</b-td> <b-td>1,107</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="text-left">실용</b-td> <b-td>182</b-td> <b-td>17</b-td> <b-td>10</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="text-left">상표</b-td> <b-td>2,645</b-td> <b-td>2,841</b-td> <b-td>3,124</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="text-left">디자인</b-td> <b-td>641</b-td> <b-td>668</b-td> <b-td>785</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="text-left">합계</b-td> <b-td>4,267</b-td> <b-td>4,456</b-td> <b-td>5,026</b-td>
                            </b-tr>                         
                        </b-tbody>                                
                    </b-table-simple>                    
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
            <h1 class="mt-5 mb-3 text-center text-white w-100 fw-400">MATERIAL TOPICS</h1>
            <h7 class="mb-5 text-center w-100 f-95 text-white fw-300 font-noto"> 
                To Help People Live A Healthy and Peaceful Life With Clean Water And Air Anytime, Anywhere Is The Consistent Path That Coway Has Walked.
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
                        <b-col class="col-12 col-sm-6 mb-2 mb-sm-0 blue7">
                            <h4-ancor hash="T" :activated="activated" class="f-190 fw-300 mb-4 mb-sm-5 mt-m-2 line-height-low">Product and Service Innovation</h4-ancor>
                        </b-col>
                    </b-row>
                    <b-row no-gutters class="px-3 pb-4">
                        <b-col class="col-12 col-md-4 fw-500">
                            <b-row no-gutters class="pr-md-4">
                                <b-col class="col-12 pb-4 border-bottom-dark blue7">
                                    <h7 class="mb-3 f-120 w-100">Activity</h7>
                                    <ul class="material-ul fw-500">
                                        <li class="line-height-low mb-2">Product Innovation </li>
                                        <li class="line-height-low mb-2">Service Innovation  </li>
                                        <li class="line-height-low mb-2">Research Capacity Improvement</li>
                                    </ul>
                                </b-col>
                                <b-col class="col-12 pt-3">
                                    <h7 class="mb-4 f-120 w-100 blue7">Performance</h7>
                                    <b-row>
                                        <b-col class="col-12 col-sm-6 col-md-12 mb-45 text-center">
                                            <div class="mx-auto mb-3" style="height:58px"><b-img src="/images/63_1.svg" fluid class="h-100"></b-img> </div>
                                            <p class="mb-0 fw-500 font-noto">2019 R&D Expenditure </p>
                                            <p class="mb-0 fw-400 blue7 mt-m-2"><span class="f-230">37.671</span> billion KRW</p>
                                            <p class="gray65 fw-400 line-height-low px-xl-5">(Up 2.3% YoY, 1.25% of Sales)</p>
                                        </b-col>
                                        <b-col class="col-12 col-sm-6 col-md-12 mb-4 mb-sm-0 text-center">
                                            <div class="mx-auto mb-2" style="height:58px"><b-img src="/images/64_1.svg" fluid class="h-100"></b-img> </div>
                                            <div class="blue7 mb-0 fw-500 font-noto mt-m-2"><span class="f-230">5</span> Consecutive Years</div>
                                            <p class="f-140 fw-400">Received CES Innovation Award</p>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>                            
                        </b-col>                        
                        <b-col class="col-12 col-md-8 px-2 position-relative pl-md-4">
                        <div class="position-absolute vertical-line-1 d-none d-md-block"></div>
                            <h7 class="blue7 f-120 mb-3">Business relevance & Approach</h7>
                            <p>Recent global social and environmental issues such as the spread of the pandemic and increasing fine dust are driving the change in consumer life patterns, affecting home appliance market significantly.  As people stay in their home longer, not only needs for health and hygiene increased but also needs for products and service that reflects each consumer’s lifestyle. Moreover, as digital technology became part of our everyday life, Smart Home implementation with A.I. and IoT technology in living spaces became an element of competition. 
                            </p>
                            <p class="mb-5 mb-md-45">Coway takes this shift as a new opportunity for home appliance rental business, promoting activities that strengthen the core principle of Coway: "For Cleaner Water and Air". In 2019, Coway launched "HANDSPAN CIROO Tankless Water Purifier" with maximized sanitation, provided "Water Map Service," a big data-based customized product recommending service, and promoted innovative activities such as the establishment of "Water Taste Laboratory" within R&D Center to reinforce research as a global leader for clean and tasteful water. Moreover, Coway is undertaking efforts to improve customer value and secure a competitive advantage in the market by unveiling smart home appliances, combined with ICT technology through open innovation.
                            </p>
                            <h7 class="blue7 f-120 mb-3">Business Cases</h7>
                            <b-row>
                                <b-col class="col-12 col-md-7 py-2 pr-sm-2 pr-xl-3 d-flex align-items-center">
                                    <div class="ml-2 ml-md-0 mr-3"><b-img src="/images/65_1.svg" ></b-img> </div>
                                    <div class="fw-500 mb-0 font-noto">2020 CES Innovation Award, Four-Season Double-Care FWSS(Fresh Wear Styling System)</div>
                                </b-col>
                                <b-col class="col-12 col-md-5 py-2 d-flex align-items-center">
                                    <div class="ml-2 ml-md-0 mr-3" style="height:57px"><b-img src="/images/66_1.svg" ></b-img> </div>
                                    <div class="fw-500 mb-0">Launched "Water Taste laboratory" </div>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </section>
                <hr class="mb-4">
                <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="a1" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">Product Innovation</h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-45 mb-md-5"> As the most eminent water and air company in South Korea that provides the new value of "Cleanness" to customers, Coway, focused on its essential value, developed "HANDSPAN CIROO Tankless Purifier" with strengthened sanitation. HANDSPAN CIROO Tankless Purifier is an integration of innovative technology that aggregates Coway’s effort to innovate hygiene and efficiency and minimize the environmental effects. Moreover, to enhance the intrinsic value of the rental business centered on customer experience, Coway provides customized products and services.
                    </p>
                    <b-row class="mb-5">
                        <b-col class="col-12 col-sm-8 col-md-4 col-xl-5 mb-45 mb-md-0 pr-md-3 pr-xl-5" style=""><b-img src="/images/149@3x.png" fluid class=""></b-img></b-col>
                        <b-col class="col-12 col-md-8 col-xl-7 px-3 pl-md-4 px-xl-0"><h6-ancor hash="a1-1" :activated="activated" class="blue5 mb-3">HANDSPAN CIROO, The Integration of Innovation</h6-ancor>
                            <p>Through the continuous evolution of technology, in 2019, Coway launched "HANDSPAN CIROO Tankless Purifier". HANDSPAN CIROO Tankless Purifier is an upgraded version of "CIROO Tankless Purifier", which implemented RO membrane filter with Tankless technology, featuring effective pollutant removal and abundant flow. It is equipped with the "CIROO 2.0 Filter", the culmination of filter technology, that increases the area by 6 times and the amount of water filtered by 30 times the existing tankless filters. Its improved sanitation with a water path drainage mode that discharge remaining water in the faucet whenever the product is used and the automatic drainage system that discharges all water in the water purifier if it is not used for 24 hours. Moreover, the space utilization was improved by reducing the size by about 30% compared to the previous CIROO Tankless Purifiers (CHP-7300R, CP-7300R) and by applying a small cooling system and instantaneous hot water system, the energy consumption efficiency was improved to the 1st grade, enhancing the eco-friendly features as well.
                            </p>
                        </b-col>
                    </b-row>
                <section class="border-blue px-4 py-4 mb-5">
                    <p class="blue5 fw-500 mt-2 mb-3 f-105"><b-badge class="rounded fw-400 bg-blue5 f-90 p-1 mr-2"> Case.</b-badge><span class="fw-600">2020</span> CES CES Innovation Award, Four-Season Double-Care FWSS(Fresh Wear Styling System)</p>
                    <p class="mb-3">Coway participated in the CES(Consumer Electronics Show) 2020 to showcase innovative home appliance products and services. Coway has been recognized for innovation by winning the CES Innovation Award for 5 consecutive years.
                    </p>
                    <p class="mb-3"> CES, where innovative companies from around the world showcase new ideas and products every year, is an indicator of the technologies that will drive the year. The CES Innovation Award is an annual award at CES, where experts from the CTA(Consumer Technology Association) in the USA comprehensively evaluate innovations such as technology, design, and customer value to select and award excellent products. Coway has been awarded the CES Innovation Award for 5 consecutive years since its first participation in 2016.
                    </p>
                    <p class="mb-3"> 2020 Coway’s award-winning “Four-Season FWSS Double Care” is an innovative product with versatile useful functions for all year long such as indoor air purification and dehumidification function accompanied by cloth drying function which differentiates itself from existing products that only offer basic clothing management functions in general. 
                    </p>
                    <div class="f-80 mb-5">* CES(Consumer Electronics Show): Global consumer electronics exhibition hosted by the Consumer Technology Association(CTA)
                    </div>

                    <b-table-simple responsive class="txt-table case-table f-95 mb-5">
                        <b-thead><b-tr>
                            <b-td>Concept</b-td> <b-td class="text-center bg-blue15" style="width:18%">2016<br><span class="fw-500">Composite Function</span></b-td> <b-td class="text-center bg-blue15" style="width:18%">2017<br><span class="fw-500">IoT(Internet of Things)</span></b-td><b-td class="text-center bg-blue15" style="width:18%">2018<br><span class="fw-500">AI(Artificial Intelligence)</span></b-td> <b-td class="text-center bg-blue15" style="width:18%">2019<br><span class="fw-500">Innovation of Original Technology</span></b-td> <b-td class="text-center bg-blue15" style="width:18%">2020<br><span class="fw-500">Future Home</span></b-td>
                        </b-tr></b-thead>
                        <b-tbody>
                            <b-tr>
                                <b-td class="border-bottom-0" style="border-top: 1px solid #c6c6c6!important;">Contents</b-td> <b-td>Improved usability of a product with a composite product that adds functions to the existing product.</b-td> <b-td>Emphasizing usability through connection between products. IoCare technology that enables product operation and data verification through mobile.</b-td> <b-td>Technology that provides services with its own judgement utilizing big data and AI. </b-td> <b-td>Emphasizing the essential value of "Cleaness", Technological differentiation.</b-td><b-td>Showcase future home appliances, the main trend in the residential environment. </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="border-bottom-0" style="border-top: 1px solid #c6c6c6!important;">Awarded Products</b-td> <b-td>Dual care air purifier, self-sterilizing water purifier, barista ice water purifier, clinic bidet, car air purifier, portable air purifier</b-td> <b-td>Self-sterilizing water purifier, HANDSPAN water purifier</b-td> <b-td>FWSS(Fresh Wear Styling System), Active Action Air Purifier, Smart Bed System, Beauty Platform, Nano Tankless Purifier </b-td> <b-td>CIROO Tankless purifier(CHP-7300R), CIROO Stand purifier (CHP-5700R), Korean Medicine Warm Massage Chair(MC-S01), body refresher, water softener</b-td><b-td>Four-Season FWSS Double Care</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="" style="border-top: 1px solid #c6c6c6!important;">Number of Awards Received</b-td><b-td>6</b-td><b-td>2</b-td> <b-td>5</b-td> <b-td>4</b-td><b-td>1</b-td>
                            </b-tr>                                
                        </b-tbody>                                
                    </b-table-simple>
                    <b-row class="">
                        <b-col class="col-12 col-sm-6 mb-5 mb-md-0"><b-img src="/images/150@2x.png" fluid></b-img>
                            <div class="f-80 fw-300 font-noto mt-2">Four-Season FWSS Double Care FAD-01S</div>
                        </b-col>
                        <b-col class="col-12 col-sm-6 "><b-img src="/images/151@2x.png" fluid></b-img>
                            <div class="f-80 fw-300 font-noto mt-2">2020 CES</div>
                        </b-col>
                    </b-row>
                </section>
                <hr class="py-2">
                <h6-ancor hash="a1-2" :activated="activated" class="blue5 mb-3">Diversification of Innovation</h6-ancor>
                <b-row class="mb-5">
                    <b-col class="col-12 col-sm-6">
                        <p class="mb-4 mb-sm-3"> In Coway, we develop customized products for various life environments to innovate customer lifestyles. In 2019, Coway developed customized products, starting from the air purifier product line. As a growing number of customers seek the quality of life in the living space, Coway developed wall-mountable products (AP-1519B, AP3519A), Design furniture type air purifier (AP-1019D), that can be used for different living environments, to reflect customer’s needs for building personalized space. Moreover, we have developed a self-manageable air purifier cartridge (AP-1019C) that allows users to easily clean and replace filters by notifying them with filter replacement notifications in light of the recent growing need for non-face-to-face services in the domestic and foreign markets.  
                        </p>
                    </b-col>
                    <b-col class="col-12 col-sm-6 line-height-low">
                        <h7 class="gray63 font-noto"> Coway Customer Satisfaction<sup>1)</sup></h7>
                        <div class="f-80 gray6 mb-2">(Unit: %)</div>
                        <b-table-simple responsive class="num-table f-95 position-relative mb-2" >
                            <b-thead><b-tr>
                                <b-td></b-td><b-td>Customer Satisfaction </b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left py-1">2017</b-td> <b-td class="py-1" >76.0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left py-1">2018</b-td> <b-td class="py-1" >79.0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left py-1">2019</b-td> <b-td class="py-1" >75.1</b-td>
                                </b-tr> 
                                <b-tr class="">
                                    <b-td class="text-left py-1"><span class="fw-500"> 2020 Target</span></b-td> <b-td class="py-1"><span class="fw-500">77.0</span></b-td>
                                </b-tr>                                
                            </b-tbody>   
                            <!-- <div class="position-absolute" style="z-index:2; width:98%; height:25.7px; bottom:0.5px; left:0; background-color: #d3e9f3;">&nbsp;</div> -->

                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5 mb-sm-4">
                            <li>Customer satisfaction is measured through NPS (net recommendation index = recommended customer ratio-non-recommended customer ratio)
                            </li>
                            <li>In 2019, the survey method was changed to mobile.</li>
                        </ol>
                    </b-col>
                    <b-col class="col-12">
                        <p class="mb-3">Meanwhile, we are pursuing market-specific technology development in line with strategies to strengthen competitive advantage in overseas markets centered on Malaysia and North America. To secure water purifier technology and systems suitable for the local environment, we have established "Water Map," and conduct filter life evaluations and user satisfaction surveys. Moreover, for the bidet products, we developed an I-Wave Water Flow System that provides optimized cleaning according to user conditions. We plan to fortify our presence in the overseas market with innovative products with diversity by equipping children-customized mode and Braille notation for the visually impaired.
                        </p>
                    </b-col>
                </b-row>
                <hr class="py-2">
                <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="a2" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">Service Innovation Based on Future Technology</h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                <p class="mb-5">As of 2019, Coway, which has 5.69 million domestic customer accounts in rental services leading the home appliance industry, provides new service experiences to customers based on future technologies: The Water Map service that recommends water purifier products suitable for local water quality using big data, and the Air Doctor service that let customers experience the air purifier ideal for the living environment through virtual simulation. Coway provides a more accurate and convenient experience with long-running research data.
                </p>
                    <h6-ancor hash="a2-1" :activated="activated" class="blue5 mb-3">Big Data Based Water Map Service</h6-ancor>
                    <p class="mb-45"> Water Map Service constructs a water quality database by collecting and analyzing waters from different regions all over the world to identify customized filters for different water qualities in customer environments. It considers numerous variables for customers to eventually recommend the most compatible product. We provide differentiated value that customers can use filters and products compatible with the customer’s regional characteristics through a recommendation service based on big data analysis. 
                    </p>
                <section class="bg-blue-gray1 py-4 px-4 mb-5">                    
                    <hj-img src="/images/62_1@3x.png" fluid></hj-img> 
                    <p class="f-80 mt-2">Coway Global Water Map / Domestic Water Map</p>
                    <hr class="space-p25">
                    <p class="f-90 letter-narrow"> Step 1: Access "Mobile Water Map Service Page"&rarr; Step 2: Enter specific information: the region, the age of the building, and the type of raw water &rarr; Step 3: Analyze the water quality environment using the water quality database based on the input information &rarr; Step 4: Identify the right filter and recommend a customized water purifier considering the place of use, required functions, number of users
                    </p>
                    <div class="f-80 fw-300 font-noto">* Big data analysis categories: Turbidity, a standard for drinking water quality, TDS (Total Dissolved Solid), pH, 17 types of cation, 4 types of anion, etc.</div>
                </section>
                <hr class="py-2">
                <h6-ancor hash="a2-2" :activated="activated" class="blue5 mb-3"> Air Doctor Service Simulation Experience </h6-ancor>
                    <p class="mb-45"> Coway utilizes the "Air Simulation System" to show how air clean performance varies from space to space for different service environments according to the structure of the space, furniture, and the number of people, and to provide "Air Doctor Service" that suggests proper product type and optimal location. The Air Simulation System predicts the movement of air or water through computer simulation using approximately 196 billion air quality big data and checks the effect of air purification every hour through the installed air purifiers. Customers can visually experience the product through virtual simulation, and purchase products optimized for their living environment with high satisfaction. 
                    </p>
                    <div class="d-flex justify-contents-between mb-5">
                        <div class="mr-2" style="width:18%"><b-img src="/images/36@2x.png" fluid class="w-100"></b-img></div>
                        <div class="mr-2" style="width:18%"><b-img src="/images/39@2x.png" fluid class="w-100"></b-img></div>
                        <div class="mr-2" style="width:32%"><b-img src="/images/42@2x.png" fluid class="w-100"></b-img></div>
                        <div style="width:32%"><b-img src="/images/45@2x.png" fluid class="w-100"></b-img></div>
                    </div>
                    <hr class="py-3">
                    <b-row class="mb-5">
                        <b-col class="col-12 col-sm-4 mb-4 mb-sm-0"><b-img src="/images/48@3x.png" fluid class="w-100"></b-img></b-col>
                        <b-col class="col-12 col-sm-8"><h6-ancor hash="a2-3" :activated="activated" class="blue5 mb-3">Mobile QR Service</h6-ancor>
                            <p>Coway implements a 24-hour mobile care service to resolve customer complaints and communicate with customers quickly and accurately. Through this, customers can view information such as product inspection schedule, inspection history, user manual on mobile anytime, anywhere and easily apply for customer service as well as product consultation through Kakao Biz Messaging Service. Distinctively, application installation, membership registration nor authentication procedures are required, enhancing the accessibility and convenience of the service. In addition, customers can access through the QR attached to the product, and continuously improving to expand customer usability.
                            </p>
                        </b-col>
                    </b-row>
                <hr class="py-3">
                <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="a3" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">Research Capacity Improvement for Innovation</h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                <p class="mb-5">Coway strives to develop innovative products and secure new technology for healthy living environments through responsibility and expertise on water and air.  From technology research to product development and reliability verification, Coway continuously expands R&D investment and manage new technology and product Innovation Committee 365 (NIC 365), a corporate board to discuss prior technologies and design to find future value, promoting corporate innovation. In addition to strengthening existing technologies for water and air, we are focusing on grafting new technologies into new products such as FWSS and mattresses. We are also exploring new growth engines through open innovation and technical alliances.
                </p>
                <h6-ancor hash="a3-1" :activated="activated" class="blue5 mb-3">Water Taste Laboratory</h6-ancor>
                    <p class="mb-3"> To research clean and tasty water and establish the standard for water taste of water purifier, Coway founded "Water Taste Laboratory" within R&D Center. 28 water sommeliers certified by KISA (Korea International Sommelier Association) and K-water (Korea Water Resources Corporation), 23 CWS (Certified Water Specialists) certified by Water Quality Association in the US, and 45 Coway researchers with technical specialties related to water are registered and actively working at Water Taste Laboratory.
                    </p>
                    <p class="mb-45"> Since 2009, Coway formed fa task force team to start researching for water taste study. In 2011, we set the direction of water taste through global research, and since 2017, we established GPT (Good Pure Tasty) water Indices as Coway’s own strict water taste standard, utilizing in product assessment. Moreover, we continued to lift the level of a water taste study with various initiations such as introducing "Water Sensory Evaluation Room" and "Sensory Evaluation Specialized Statistical Program," and training water taste professional panels. Hereafter, Water Taste Laboratory at its core, Coway plans to conduct research activities such as 1) defining attributes of water purifier water taste, 2) scientifically proving correlations between water taste and performance of each water purifier filter, 3) establishing tasty water standard of water purifier.   
                    </p>
                    <b-row class="mb-5">
                        <b-col class="col-12 col-sm-6 mb-3 mb-sm-0"><b-img src="/images/27@3x.png" fluid class="w-100"></b-img> </b-col>
                        <b-col class="col-12 col-sm-6">
                            <div class="overflow-hidden"><a href="http://water.coway.co.kr"> <b-img src="/images/30@3x.png" fluid class="link-img"></b-img> </a></div>
                            <div class="f-70 mt-2 gray6">http://water.coway.co.kr</div>
                        </b-col>
                    </b-row>
                    <b-row class="mb-5">
                        <b-col class="col-12 col-md-6 mb-4 mb-md-0">
                        <h6-ancor hash="a3-2" :activated="activated" class="blue5 mb-3">Open Innovation</h6-ancor>
                            <p class="mb-3"> Coway reinforced customer product usage environment through cooperation with Amazon. To maximize customer convenience, we adapted Alexa, the AI platform of Amazon, to air purifiers of which filter replacement at an appropriate timing for usage environment is necessary. In 2017, Amazon’s Alexa was first adapted to Coway air purifier Air Mega, and in 2018, Dash Replenishment Through Alexa (DRS), Amazon’s automatic consumable-shipping program was applied that in 2019 Coway product sales in North American market marked 120,000 units, a 267% growth compared to sales 2017. 
                            </p>
                            <p class="mb-3"> As of today, May of 2020, Coway and Amazon provide filter order through voice command and filter lifespan and product status check though air purifier technology applied with DART service, the 3rd generation version of DRS. Also, Coway plans to adapt Alexa in Aqua Mega, Coway water purifier, to enhance its usability.
                            </p>
                            <p> Cooperation with Amazon served as a momentum to promote Coway’s expertise on water and air not only in the North American market but also in the global market. Especially, implementing IoT through AI platform service application provided customer life care with a much higher standard, offering differentiated service in a rapidly growing subscription economy.
                            </p>
                        </b-col>
                        <b-col class="col-12 col-md-6 d-flex flex-row flex-md-column align-items-center">
                            <div :class="isIE ? 'd-none' :'text-center d-none d-sm-block mb-md-4 px-md-5'" style="max-width:330px;"><b-img src="/images/33@3x.png" fluid></b-img></div>
                            <div class="position-relative pt-md-4">
                                <div class="position-absolute" style="margin-top: -1.75rem;">
                                    <h7 class="mb-2 pt-3 pt-sm-0 font-noto">R&amp;D Investment and Performance</h7>
                                    <div class="fw-300 f-80 d-flex align-items-center mb-1"><div style="width:12px; height:12px;" class="mr-1 bg-blue5"></div> R&amp;D Expenditure (Unit: million KRW)</div>
                                    <div class="fw-300 f-80 d-flex align-items-center"><div style="width:12px; height:1.5px;" class="mr-1 bg-gray7"></div> Ratio to sales (%)</div>
                                </div>
                                <hj-img src="/images/115_1.svg" fluid class="pt-5 w-100"></hj-img> 
                            </div>
                        </b-col>
                    </b-row>
                    <h7 class="mb-3 gray63"> Intellectual Properties <span class="f-80 fw-300"> (Unit: Cases)</span></h7>
                    <b-table-simple responsive class="num-table f-95">
                        <b-thead><b-tr>
                            <b-td class="text-left">Category</b-td> <b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td>
                        </b-tr></b-thead>
                        <b-tbody>
                            <b-tr>
                                <b-td class="text-left">Patent</b-td> <b-td>799</b-td> <b-td>930</b-td> <b-td>1,107</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="text-left">Utility Model</b-td> <b-td>182</b-td> <b-td>17</b-td> <b-td>10</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="text-left">Brand</b-td> <b-td>2,645</b-td> <b-td>2,841</b-td> <b-td>3,124</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="text-left">Design</b-td> <b-td>641</b-td> <b-td>668</b-td> <b-td>785</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="text-left">Total</b-td> <b-td>4,267</b-td> <b-td>4,456</b-td> <b-td>5,026</b-td>
                            </b-tr>                         
                        </b-tbody>                                
                    </b-table-simple>                    
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
            return this.is_ENG? 'Product and Service Innovation' : '제품과 서비스의 혁신'
        },
        sub_titles(){
            let temp = [
                { 
                    title: this.is_ENG? 'Product Innovation':'본질적 가치를 높이는 제품 혁신', hash: 'a1',
                    child: [
                        { title: this.is_ENG? 'HANDSPAN CIROO, The Integration of Technology': '혁신 기술의 집약, 한뼘 시루직수 정수기 개발', hash: 'a1-1' }, 
                        { title: this.is_ENG? 'Diversification of Innovation':'고객 맞춤형 혁신 다각화', hash: 'a1-2' }, 
                    ]
                },
                { 
                    title: this.is_ENG? 'Service Innovation based on Future Technology': '미래 기술 기반의 서비스 혁신', hash: 'a2',
                    child: [
                        { title: this.is_ENG? 'Big Data based Water Map Service':'빅데이터 기반 제품 추천, 워터맵 서비스', hash: 'a2-1' }, 
                        { title: this.is_ENG? 'Air Doctor Service through Simulation Experience': '시뮬레이션 체험, 공기 주치의 서비스', hash: 'a2-2' }, 
                        { title: this.is_ENG? 'Mobile QR Service':'모바일 서비스 강화, 안심 QR 서비스 시행', hash: 'a2-3' }
                    ]
                },
                { 
                    title: this.is_ENG? 'Research Capacity Improvement for Innovation':'혁신을 위한 연구개발 역량 강화', hash: 'a3',
                    child: [
                        { title: this.is_ENG? 'Water Taste Laboratory':'깨끗하고 맛있는 물에 대한 연구, 물맛 연구소', hash: 'a3-1' }, 
                        { title: this.is_ENG? 'Open Innovation':'오픈 이노베이션, 아마존과 협력을 통한 IoT 기술 도입', hash: 'a3-2' }
                    ]
                }
            ]
            return temp            
        },
        isIE() {

            if ( process.client && ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (navigator.userAgent.toLowerCase().indexOf("msie") != -1)) )
                {
                    return true
                }
            else
                { 
                    return false
                }
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
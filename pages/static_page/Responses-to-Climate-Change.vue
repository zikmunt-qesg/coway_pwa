<template>
<div class="position-relative page-top-bg-env min-vh-100">
    <logger title="기후변화 대응"></logger>
    <div class="w-100 bg-white bg-white-cover position-absolute"></div>

    <b-container v-if="this.$store.state.is_ENG==false" class="">
        <b-row class="pt-md-5 px-3">
            <h1 class="mt-5 mb-3 pt-3 text-center w-100 fw-400">CARE FOR ENVIRONMENT</h1>
            <h7 class="mb-5 text-center w-100 fw-400"> Green Global Leader Designing Tomorrow for Healthier Environment, and Happier People </h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="title"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#0f7a5a'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0">
                <section class="bg-blue-gray1 px-4 py-4 mb-5">
                    <div class="border-top-bottom-dark">
                        <b-row no-gutters class="px-3 pt-4">                            
                            <b-col class="col-12 col-md-4 mb-2 mb-sm-0 fw-500 green7">
                                <h1 class="mt-m-2 mb-0">03</h1>
                                <h4-ancor hash="T" :activated="activated" class="mb-4 mb-sm-5 mt-m-2">기후변화 대응</h4-ancor>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-4">
                            <b-col class="col-12 col-sm-4 mb-5 mb-sm-0 fw-500 green7">
                                <div class="mr-5 pr-lg-2 pr-xl-4" style="max-width: 180px;"> <b-img src="/images/131_1.svg" fluid ></b-img> </div>
                            </b-col>
                            <b-col class="col-12 col-sm-8">
                                <h7 class="green7 f-120 mb-3 font-noto">Business relevance & Approach</h7>
                                <p>2030년까지 전세계 온실가스 배출량을 5억 3,600만 톤으로 감축하는 제2차 기후변화대응 기본계획이 확정되었습니다. 한국은 배출권거래제를 통한 온실가스 배출기업의 책임을 더욱 더 강화하고 있습니다. '2030 국가 온실가스 감축 로드맵'에 따르면 현재 3%의 배출권 유상할당 비율이 2025년까지 10% 이상으로 확대되며, 감축 효율이 좋은 기업이 상대적으로 더 많은 배출권을 할당 받는 인센티브 또한 늘어날 것으로 보입니다. 이러한 제도적 변화는 기업의 온실가스 배출이 불확실성이나 단순한 규제 위험이 아니라, 재무적 성과에도 직접적 영향을 미치는 제도적 요인이자 관리 가능한 위험으로 전환하고 있다는 것을 의미합니다.
                                </p>
                                <p>코웨이는 고객 생활환경을 개선하는 제품과 서비스를 제공하는 기업으로서, 국가와 사회의 온실가스 감축 및 기후변화 적응을 적극 지원하고자 합니다. 이를 위해 기후 시나리오 분석과 이에 따른 명확한 온실가스 감축 목표의 설정, 사업장 에너지 고효율화 및 냉매에 의한 배출 저감 등을 적극 실행하겠습니다.
                                </p> 
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark line-height-low">
                            <h7 class="green7 f-120 mb-4 w-100">Activity</h7>
                            <b-col class="col-0 col-lg-1"></b-col>
                            <b-col class="col-6 col-lg-5 text-center mb-3 mb-sm-0">
                                <div class="mx-auto mb-3" style="height: 70px;"><b-img src="/images/132_1.svg" fluid></b-img></div>
                                <p class="fw-500 word-break pr-1 px-md-3 px-lg-4 mx-xl-3">기후변화 대응 중장기 목표치 재산정</p>
                            </b-col>
                            <b-col class="col-6 col-lg-5 text-center">
                                <div class="mx-auto mb-3" style="height: 70px;"><b-img src="/images/132_2.svg" fluid></b-img> </div>
                                <p class="fw-500 word-break pl-1 px-md-3 px-lg-4 mx-xl-3">과학기반 감축 방법론 (SBT, Science-Based Target) 추진</p>
                            </b-col>
                            <b-col class="col-0 col-lg-1"></b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark line-height-low">
                            <b-col class="col-12 col-md-6 pr-md-4 mb-4 mb-md-0">
                                <h7 class="green7 f-120 mb-4 w-100">Business Cases</h7>
                                <b-row no-gutters> 
                                    <b-col class="col-6 text-center mb-3 mb-sm-0"><div class="mx-auto mb-3" style="height: 65px;"><b-img src="/images/132_3.svg" fluid></b-img></div>
                                        <p class="fw-500 word-break pr-1 pr-md-2 px-xl-3">협력사 공급망의 자발적 탄소 감축</p>
                                    </b-col>
                                    <b-col class="col-6 text-center"><div class="mx-auto mb-3" style="height: 65px;"><b-img src="/images/132_4.svg" fluid></b-img></div>
                                        <p class="fw-500 word-break pl-1">CDP(Carbon Disclosure Project)등 국제 이니셔티브 적극 참여</p>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col class="col-12 col-md-6 position-relative pl-md-4">
                            <div class="vertical-line-1 position-absolute d-none d-md-block"></div>
                                <h7 class="green7 f-120 mb-3 w-100">Performance</h7>
                                <b-row no-gutters class="align-items-center mb-3 pb-1">                                    
                                    <b-col class="col-6 text-center">                   
                                        <div class="f-330 fw-400 mb-3 mb-sm-1 pt-2">-50<span class="f-130 fw-500">%</span> </div>     
                                        <p class="fw-500 word-break pr-1 px-md-2 font-noto">온실가스 원단위 배출량 감축 목표 (2010년 대비 2020년) </p>       
                                    </b-col> 
                                    <b-col class="col-6 text-center">
                                        <div class="mx-auto mb-3 d-flex justify-content-center align-items-end" style="height: 60px;"><b-img src="/images/132_5.svg" fluid></b-img></div>
                                        <p class="fw-500 word-break pl-1 px-md-2 font-noto">물류센터 신재생에너지(태양광) 1차 구축 실행</p>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </div>
                </section>
                <!-- End of DMA -->
                <hr class="py-3">
                <section class="mb-5">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="n1" :activated="activated" class="green7 f-130 fw-500 bg-white pr-5" style="z-index:10">기후변화 목표 및 시나리오 관리</h6-ancor><div class="horizontal-line-2 green-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-5 font-noto"> 코웨이는 기후변화와 지구환경의 변화가 기업의 경영활동에 중요한 영향을 미친다는 것을 인식하고 2006년 환경경영을 선포하였습니다. 코웨이는 2009년 온실가스 인벤토리 구축을 시작으로 2010년대비 2020년 온실가스 원단위 배출량을 50%까지 저감하는 중장기 목표를 수립하여 감축 활동을 진행해 왔습니다. 2010년 온실가스 배출량 5,356 tCO<sub>2</sub>e, 원단위 0.357 tCO<sub>2</sub>e/억원 대비 2019년 5,935 tCO<sub>2</sub>e, 원단위 0.234 tCO<sub>2</sub>e/억원으로 온실가스 배출량은 10.81% 증가하였으나, 매출 증가 대비 온실가스 배출량을 최대한 억제하여 원단위는 기준년도 대비 약 70% 저감하는 효과가 있었습니다(2010년과 동일하게 내부 배출량 산정 기준 적용 시, 온실가스 배출량 4.13% 증가, 원단위 약 77% 저감).
                        </p>
                        <div class="position-relative pt-5 mb-4">
                            <hj-img src="/images/44_1.svg" fluid></hj-img>
                            <div class="position-absolute" style="top: 0;">
                                <h7 class="mb-3 gray63 font-noto">온실가스 배출량 및 2030목표</h7>
                                <!-- <div class="fw-300 f-80 d-flex align-items-center "><div style="width:12px; height:1.5px;" class="mr-1 bg-green5"></div> 배출량 (단위: tCO<sub>2</sub>e)</div> -->
                                <div class="fw-300 f-80 mb-2 d-flex align-items-center"><div style="width:12px; height:1.5px;" class="mr-1 bg-gray7"></div> 원단위 (단위: tCO<sub>2</sub>e/억원)</div>
                                <div class="fw-300 f-80 pt-1 mb-1 d-flex align-items-center" >배출량 (단위: tCO<sub>2</sub>e)</div>
                                <div class="fw-300 f-80 d-flex align-items-center"><b-img src="/images/scope1.svg"></b-img> <span class="ml-2">Scope1</span></div>
                                <div class="fw-300 f-80 d-flex align-items-center"><b-img src="/images/scope2.svg"></b-img> <span class="ml-2">Scope2</span></div>
                                <div class="fw-300 f-80 d-flex align-items-center"><b-img src="/images/scope3.svg"></b-img> <span class="ml-2">Scope3</span></div>
                            </div>
                        </div>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5 gray55">
                            <li>2019년 목표는 매출(생산량) 증가에 따라 전년대비 에너지 사용이 5% 증가하는 것으로 예상함
                            </li>
                            <li>2030년 목표는 매출 증가율과 에너지 사용 증가율이 연간 5% 증가하는 것으로 예상한 목표임
                            </li>
                            <li>온실가스 관리 범위와 기준을 자사 내부기준에서 '온실가스·에너지목표관리제'에 따른 국가 기준으로 변경함에 따라 이전년도 보고서와 데이터 차이가 발생함. 본 보고서의 데이터는 2017년부터 2019년 배출량을 국가 기준으로 재검증한 수치임
                            </li>
                        </ol>    
                        <hr class="py-2">
                        
                        <p class="mb-5">코웨이는 사업장의 온실가스 저감 활동과 기업 운영 효율화를 통해 에너지를 효율적으로 사용하고 있습니다. 또한 신재생에너지인 태양광 발전의 지속적인 도입으로 인한 효과도 있었습니다. 코웨이는 유구공장(49.5KWh 규모), 인천공장(39KWh), 포천공장(45KWh 규모) 및 물류센터(48.8KWh 규모)에 태양광 발전을 설치하여 운영하고 있습니다. 3공장 및 물류센터에서 2019년 약 237MW의 전력을 생산, 자체 소비하여 온실가스 약 110톤을 저감하는 효과가 있었습니다. 또한 유구공장에 도입된 에너지저장장치(ESS, Energy Storage System)는 Peak 부하를 감소시키고, 에너지 사용량 분산에 기여하고 있습니다. 뿐만 아니라 에너지 비용 절감 효과가 있어 2019년 약 1.2억원의 비용을 절감하였습니다. 유구공장과 물류센터에 도입된 LED 조명은 작업장 근로환경(조도) 개선과 함께 물류센터 기준 2019년 약 0.65억원 이상의 에너지 비용이 절감되었으며, 물류센터 기준 온실가스 약 264톤을 저감하는 효과가 있었습니다.
                        </p>

                    <h6-ancor hash="n1-1" :activated="activated" class="green6 fw-500 mb-2">과학적 감축 목표(Science-based Target)계획 도입</h6-ancor>
                        <p class="mb-5"> 코웨이는 2020년 이후, 신기후변화체제에 대응하기 위해 온실가스 감축 목표를 과학적 감축 목표 계획(SBT, Science Based Target)에 근거하여 2030년 및 2050년까지의 목표를 수립하고 있습니다. 에너지의 대부분을 전력에 의존하고 있어 신재생에너지의 지속 설치, 구매 및 감축량 구매 등, 실질적인 감축이 이루어질 수 있는 방향으로 목표를 수립 중에 있습니다. 이를 위해 온실가스 배출량 산정 기준을 자사 내부 기준에서 대한민국 에너지·온실가스 목표관리제 기준으로 산정 기준을 변경하여 최근 3년간 온실가스 배출량을 재산정 하였습니다. 최근 3년간 온실가스 배출량에 대한 외부 검증이 완료되는 시점에서 2030년 및 2050년 온실가스 감축 목표를 최종 확정하여 공개할 예정입니다. 
                        </p>
                    <hr class="py-3">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="n2" :activated="activated" class="green7 f-130 fw-500 bg-white pr-5" style="z-index:10">기후변화의 위험과 기회 분석</h6-ancor><div class="horizontal-line-2 green-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-45"> 코웨이는 TCFD(Taskforce on Climate Related Financial Disclosures)의 권고에 따라 세부적인 기후변화 위험과 기회를 분석하고 이를 공개하고 있습니다. 코웨이의 2019년 기후변화 관련 위험과 기회 분석은 아래와 같습니다.  
                        </p>
                    
                        <h6-ancor hash="n2-1" :activated="activated" class="green6 fw-500 mb-3">기후변화에 따른 잠재 위험 분석</h6-ancor>
                        <b-table-simple responsive class="sep-table f-90 mb-5">
                            <b-tbody>
                                <b-tr class="bg-green7 text-white">
                                    <b-td class="py-0">위험 요인</b-td><b-td class="py-0" style="width:60%">설명</b-td><b-td class="py-0">시점</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>제품에 관한 정책 및 법적 규제 강화</b-td>
                                    <b-td>에너지이용 합리화법에 따른 효율관리기자재 운용 규정에 의해 에너지 사용 제품에 대한 규제가 강화되고 있습니다. 따라서 코웨이의 주력 상품인 정수기의 에너지 소비효율 등급 기준도 강화되고 있습니다. 코웨이가 제품의 에너지 소비효율 향상을 위한 기술을 개발하여 대응하지 않는다면 경쟁력이 약화될 수 밖에 없습니다. 이에 따라 연구 개발 투자비와 같은 기업 운영비의 증가가 예상됩니다.</b-td>
                                    <b-td>단기</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>저탄소 배출 기술에 대한 전환 비용</b-td>
                                    <b-td class="word-break">현재 코웨이가 생산하는 정수기 제품에는 R-134a 냉매가 사용되고 있습니다. 국제협약으로 오존층 파괴물질인 냉매의 사용 규제가 강화되고 있습니다. R-12 냉매는 이미 제조와 판매가 금지되었으며, R-134a 냉매도 GWP가 높아 규제적 위험으로 작용하고 있습니다. 따라서 코웨이가 R-134a 냉매를 대체 할 수 있는 소재와 신기술을 개발하지 않는 다면 정수기 사업에 큰 위험이 될 수 있습니다.</b-td>
                                    <b-td>단기</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>시장 불확실성</b-td>
                                    <b-td class="word-break">대한민국은 기후변화로 인해 강수 패턴이 변화하고 있습니다. 따라서 물 부족으로 인한 국가의 수자원 관리 정책도 강화될 것으로 예상됩니다. 코웨이의 정수기에는 물이 사용되고 있으며 이 정수기 제품은 국가 수자원 관리 정책에 의해 영향을 받게 될 것으로 예상됩니다. 이로 인해 코웨이는 연구 개발 및 시설 투자 등과 같은 기업 운영비의 증가가 예상 됩니다.</b-td>
                                    <b-td>중기</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <hr class="py-2">
                        <h6-ancor hash="n2-2" :activated="activated" class="green6 fw-500 mb-3">기후변화에 따른 잠재 기회 분석</h6-ancor>
                        <b-table-simple responsive class="sep-table f-90 mb-5">
                            <b-tbody>
                                <b-tr class="bg-green7 text-white">
                                    <b-td class="py-0">기회 요인</b-td><b-td class="py-0" style="width:60%">설명</b-td><b-td class="py-0">시점</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>새로운 시장에의 접근</b-td>
                                    <b-td class="word-break">기후변화로 인해 강수 패턴이 변화하고 있습니다. 강수 패턴의 변화에 의한 극심한 가뭄으로 황사와 미세먼지의 발생 빈도가 증가하고 있습니다. 이러한 기후변화로 인해 공기청정기 시장이 중국으로 확대되어 코웨이에 새로운 시장 진출 기회를 제공하고 있습니다.</b-td>
                                    <b-td>단기</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>사업 다각화 기회</b-td>
                                    <b-td class="word-break">기후변화로 인해 에너지 소비가 증가하고 있으며, 가정에 공급되는 전력의 종류에도 변화가 예상되고 있습니다. 코웨이는 플랫폼 비즈니스를 전개하고 있습니다. 이에 따라 새로운 형태의 사업이나 상품을 도입하는데 편리합니다. 기후변화와 관련된 새로운 사업이나 상품은 코웨이에게 새로운 시장 진출의 기회를 제공할 것으로 예측하고 있습니다.</b-td>
                                    <b-td>중기</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                    <hr class="py-4">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="n3" :activated="activated" class="green7 f-130 fw-500 bg-white pr-5" style="z-index:10">협력사 탄소 파트너십</h6-ancor><div class="horizontal-line-2 green-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-5"> 코웨이의 탄소 파트너 협력사들도 2010년 대비 2020년까지 온실가스 원단위 50% 저감이라는 목표를 가지고 감축 활동을 진행해 왔습니다. 코웨이는 탄소 파트너십 협력사들을 지속적으로 지원함으로써 협력사들의 매출 증가 대비 에너지 사용량을 최대한 억제하고 각 사의 탄소파트너 협력사들의 에너지 경쟁력을 강화하고 있으며, 이를 통해 기후변화와 관련한 협력사 리스크를 예방하기 위해 노력하고 있습니다. 2018년 기준 온실가스 원단위는 감축 목표 대비 110%, 배출량은 7.55% 감축하는 성과를 이미 달성 하였습니다. 2019년부터는 각 협력사의 자발적 관리로 전환하여 운영 중에 있으며, 2019년 온실가스 배출량 정보는 필요시, CDP 질의&amp;응답 및 탄소보고서를 통해 정보를 공개할 예정입니다.
                        </p> 

                        <h7 class="mb-3 gray63">탄소파트너 협력사 지원 현황</h7>
                        <b-table-simple responsive class="txt-table env-table f-95 mb-2">
                            <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td> <b-td class="text-left">참여 협력사</b-td> <b-td class="text-left w-25">기간</b-td><b-td>주요 내용</b-td> 
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">기업협력군 에너지동행사업</b-td> <b-td class="text-left">5개사</b-td> <b-td class="text-left">2019.04 ~ 2019.10</b-td> <b-td>사업장 에너지 진단 지원<br>(고효율 에너지로 전환 유도) </b-td>
                                </b-tr>
                            </b-tbody> 
                        </b-table-simple>       
                        <ul class="f-80 fw-300 footnote-ul line-height-low mb-5">
                            <li> 2014년 6월 코웨이 협력사[㈜제성]에 29.7KWh 규모의 태양광발전 설치 지원</li> 
                            <li> 2015년 7월 코웨이 협력사[아이디시스템㈜에 29.4KWh 규모의 태양광발전 설치 지원</li> 
                            <li> 기업협력군 에너지동행사업은 2012년부터 2019년까지 지속적으로 참여하고 있으며, 8년간 참여 협력사는 39개사 입니다.</li> 
                        </ul>

                    <hr class="py-4">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="n4" :activated="activated" class="green7 f-130 fw-500 bg-white pr-5" style="z-index:10">온실가스 &middot; 에너지 및 기타 환경 데이터</h6-ancor><div class="horizontal-line-2 green-line position-absolute" style="z-index:8"></div></div>
                        <h7 class="mb-3 gray63">온실가스 배출</h7>
                        <b-table-simple responsive class="num-table env-table f-95 mb-2">
                            <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td><b-td class="text-left">단위</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td><b-td>2019 목표</b-td><b-td>2030 목표</b-td> 
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Scope1</b-td><b-td class="text-left" rowspan="4">tCO<sub>2</sub>e</b-td><b-td>630</b-td><b-td>676</b-td><b-td>640</b-td><b-td>710</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Scope2</b-td><b-td>5,162</b-td><b-td>5,349</b-td><b-td>5,224</b-td><b-td>5,616</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Scope3</b-td><b-td>71</b-td><b-td>71</b-td><b-td>70</b-td><b-td>71</b-td><b-td>-</b-td>
                                </b-tr> 
                                <b-tr>
                                    <b-td class="text-left">Total</b-td><b-td>5,863</b-td><b-td>6,096</b-td><b-td>5,935</b-td><b-td>6,397</b-td><b-td>2,982</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">원단위</b-td><b-td class="text-left">tCO<sub>2</sub>e/억원</b-td><b-td>0.253</b-td><b-td>0.254</b-td><b-td>0.234</b-td><b-td>0.253</b-td><b-td>0.069</b-td>
                                </b-tr>                                   
                            </b-tbody> 
                        </b-table-simple> 
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5 gray55">
                            <li>2019년 목표는 매출(생산량) 증가에 따라 전년대비 에너지 사용이 5% 증가하는 것으로 예상함
                            </li>
                            <li>2030년 목표는 매출 증가율과 에너지 사용 증가율이 연간 5% 증가하는 것으로 예상한 목표임
                            </li>
                            <li>온실가스 관리 범위와 기준을 자사 내부기준에서 '온실가스·에너지목표관리제'에 따른 국가 기준으로 변경함에 따라 이전년도 보고서와 데이터 차이가 발생함. 본 보고서의 데이터는 2017년부터 2019년 배출량을 국가 기준으로 재검증한 수치임
                            </li>
                        </ol>      

                        <h7 class="mb-3 gray63">사업장별 온실가스 배출</h7>
                        <b-table-simple responsive class="num-table env-table f-95 mb-2">
                            <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td> <b-td class="text-left">단위</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td> 
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">유구공장</b-td><b-td class="text-left" rowspan="8">tCO<sub>2</sub>e</b-td><b-td>2,178</b-td><b-td>2,466</b-td><b-td>2,438</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">인천공장</b-td><b-td>609</b-td><b-td>663</b-td><b-td>707</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">포천공장</b-td><b-td>375</b-td><b-td>205</b-td><b-td>218</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">환경기술연구소(R&amp;D센터)</b-td><b-td>1,708</b-td><b-td>1,889</b-td><b-td>1,849</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">화장품연구소</b-td><b-td>203</b-td><b-td>126</b-td><b-td>0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">서울사무소</b-td><b-td>502</b-td><b-td>456</b-td><b-td>444</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">물류센터</b-td><b-td>287</b-td><b-td>292</b-td><b-td>279</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">합계</b-td><b-td>5,863</b-td><b-td>6,096</b-td><b-td>5,935</b-td>
                                </b-tr>                                
                            </b-tbody> 
                        </b-table-simple>       
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5 gray55">
                            <li>화장품연구소 폐쇄로 2019년 온실가스 배출량 0임
                            </li>
                            <li>온실가스 관리 범위와 기준을 자사 내부기준에서 '온실가스·에너지목표관리제'에 따른 국가 기준으로 변경함에 따라 이전년도 보고서와 데이터 차이가 발생함. 본 보고서의 데이터는 2017년부터 2019년 배출량을 국가 기준으로 재검증한 수치임
                            </li>
                        </ol>  

                        <h7 class="mb-3 gray63">냉매 사용에 따른 온실가스 배출</h7>
                        <b-table-simple responsive class="num-table env-table f-95 mb-2">
                            <b-thead><b-tr>
                                <b-td class="text-left" colspan="2">구분</b-td><b-td class="text-left">단위</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td> 
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">R-134</b-td><b-td class="text-left">제품 제조시 냉매 사용량</b-td><b-td class="text-left" rowspan="2">kg</b-td><b-td>46,580</b-td><b-td>51,230</b-td><b-td>46,360</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">R-600a, R-436B</b-td><b-td class="text-left">제품 제조시 친환경 냉매 사용량</b-td><b-td>800</b-td><b-td>5,320</b-td><b-td>4,010</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <p class="f-80 ml-1 mb-5 font-noto gray55"> * 온실가스 배출량 재검증을 통해 2018년 데이터가 전년도 보고 내용과 상이함 (R-134a: 49,320 → 51,230 / R-600a, R-436B: 3,220 → 5,320kg)
                        </p>

                        <h7 class="mb-3 gray63 font-noto">기타 간접 온실가스(Scope 3) 배출량</h7>
                        <b-table-simple responsive class="num-table env-table f-95 mb-2">
                            <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td><b-td class="text-left">단위</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td> 
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">국내물류/운송</b-td><b-td class="text-left" rowspan="2">tCO<sub>2</sub>e</b-td><b-td>5,047</b-td><b-td>5,420</b-td><b-td>5,491</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ul class="f-80 fw-300 footnote-ul line-height-low mb-5">
                            <li>국내물류/운송은 자발적으로 위탁 협력기업에서 제공한 자료이며, 외부 검증은 진행하지 않음</li>
                        </ul>


                        <h7 class="mb-3 gray63">에너지 사용량</h7>
                        <b-table-simple responsive class="num-table env-table f-95 mb-2">
                            <b-thead><b-tr><b-td colspan="10"></b-td></b-tr></b-thead>
                            <b-thead>
                                <b-tr>
                                    <b-td class="text-left" colspan="2">구분</b-td><b-td class="text-left">단위</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td><b-td>2019 목표</b-td><b-td>2030 목표</b-td> 
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left" rowspan="6">직접</b-td><b-td class="text-left">LPG</b-td><b-td rowspan="10" class="text-left">GJ</b-td><b-td>84</b-td><b-td>41</b-td><b-td>0</b-td><b-td>-</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">휘발유</b-td><b-td>2,423</b-td><b-td>2,533</b-td><b-td>2,587</b-td><b-td>-</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">경유</b-td><b-td>2,458</b-td><b-td>2,540</b-td><b-td>2,773</b-td><b-td>-</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">LNG</b-td><b-td>323</b-td><b-td>554</b-td><b-td>201</b-td><b-td>-</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">등유</b-td><b-td>432</b-td><b-td>225</b-td><b-td>338</b-td><b-td>-</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">프로판</b-td><b-td>5,294</b-td><b-td>5,908</b-td><b-td>5,163</b-td><b-td>-</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td colspan="2" class="text-left">직접 Total</b-td><b-td>11,014</b-td><b-td>11,801</b-td><b-td>11,062</b-td><b-td>12,391</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">간접</b-td><b-td class="text-left">전력</b-td><b-td>106,275</b-td><b-td>110,142</b-td><b-td>107,564</b-td><b-td>-</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td colspan="2" class="text-left">간접 Total</b-td><b-td>106,275</b-td><b-td>110,142</b-td><b-td>107,564</b-td><b-td>115,649</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td colspan="2" class="text-left">총 에너지 사용량</b-td><b-td>117,289</b-td><b-td>121,943</b-td><b-td>118,627</b-td><b-td>128,040</b-td><b-td>64,020</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td colspan="2" class="text-left">총 에너지 원단위 사용량</b-td><b-td class="text-left">GJ/매출액</b-td><b-td>5.055</b-td><b-td>5.091</b-td><b-td>4.687</b-td><b-td>5.059</b-td><b-td>1.479</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5 gray55">
                            <li>2019년 목표는 매출(생산량) 증가에 따라 전년대비 에너지 사용이 5% 증가하는 것으로 예상함
                            </li>
                            <li>2030년 목표는 매출 증가율과 에너지 사용 증가율이 연간 5% 증가하는 것으로 예상한 목표임
                            </li>
                            <li>온실가스 관리 범위와 기준을 자사 내부기준에서 '온실가스·에너지목표관리제'에 따른 국가 기준으로 변경함에 따라 이전년도 보고서와 데이터 차이가 발생함. 본 보고서의 데이터는 2017년부터 2019년 배출량을 국가 기준으로 재검증한 수치임
                            </li>
                            <li>에너지 사용량 계산에 적용된 계수는 총발열량을 적용함
                            </li>
                            <li>코웨이의 모든 사업장은 대기배출시설을 보유하고 있지 않으며 따라서 질소산화물(NOx), 황산화물(Sox) 등의 대기오염물질을 배출하지 않음
                            </li>
                            <li>2019년 임직원 렌트 차량 중 LPG 차량이 없는 관계로 온실가스 배출량 0임
                            </li>
                        </ol>

                        <h7 class="mb-3 gray63">환경/품질 인증률</h7>
                        <b-table-simple responsive class="txt-table env-table f-95 mb-5">
                            <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td><b-td class="text-left">인증범위</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">환경경영시스템(ISO14001)</b-td><b-td class="text-left">100%</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">품질경영시스템(ISO9001)</b-td><b-td class="text-left">100%</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                        <h7 class="mb-3 gray63">환경 투자액</h7>
                        <b-table-simple responsive class="num-table env-table mb-2">
                            <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td><b-td class="text-left">단위</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td><b-td class="text-left">비고</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">시설운영<sup> 1)</sup></b-td><b-td class="text-left" rowspan="5">백만 원</b-td><b-td>86.5</b-td><b-td>377.4</b-td><b-td>850.2</b-td><b-td class="text-left">사업장 환경안전설비 증설 및 공사</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">시스템운영<sup> 2)</sup></b-td><b-td>253.3</b-td><b-td>407.8</b-td><b-td>302.5</b-td><b-td class="text-left">제·부품 적합성 검증 안정화로 인한 시스템 투자 축소</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">커뮤니케이션<sup> 3)</sup></b-td><b-td>229.2</b-td><b-td>327.6</b-td><b-td>227.4</b-td><b-td class="text-left">법규 대응 안정화로 인한 비용 축소</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">환경 신사업<sup> 4)</sup></b-td><b-td>50.8</b-td><b-td>80.0</b-td><b-td>121.6</b-td><b-td class="text-left">규제 네트워크 구축 확대</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">총계</b-td><b-td>619.8</b-td><b-td>1192.8</b-td><b-td>1501.7</b-td><b-td class="text-left"></b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5 gray55">
                            <li>시설운영: 고효율 설비 교체, 신규 설비 투자 등을 지칭</li>
                            <li>시스템운영: IT구축 및 운영, 내부심사, 벤치마킹, 교육, 검증 등을 지칭</li>
                            <li>커뮤니케이션: 법규 대응, 국책과제, 홍보/이벤트/교육, 기부, 사회공헌 등</li>
                            <li>환경신사업: 외부 컨설팅, 신재생에너지 투자 등</li>
                        </ol>

                        <h7 class="mb-3 gray63">환경 법규 위반 및 벌금액</h7>
                        <b-table-simple responsive class="num-table env-table f-95">
                            <b-thead>
                                <b-tr>
                                    <b-td class="text-left">구분</b-td><b-td>2016</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">환경 법규 위반 건수</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">위반으로 인한 벌금액(원)</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>                    
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
            <h1 class="mt-5 mb-3 pt-3 text-center w-100 fw-400">CARE FOR ENVIRONMENT</h1>
            <h7 class="mb-5 text-center w-100 fw-400"> Green Global Leader Designing Tomorrow for Healthier Environment, and Happier People </h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="title"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#0f7a5a'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0 eng-font-scale">
                <section class="bg-blue-gray1 px-4 py-4 mb-5">
                    <div class="border-top-bottom-dark">
                        <b-row no-gutters class="px-3 pt-4">                            
                            <b-col class="col-12 mb-2 mb-sm-0 fw-500 green7">
                                <h1 class="mt-m-2 mb-0">03</h1>
                                <h4-ancor hash="T" :activated="activated" class="mb-4 mb-sm-5 mt-m-2">Climate Change</h4-ancor>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-4">
                            <b-col class="col-12 col-sm-4 mb-5 mb-sm-0 fw-500 green7">
                                <div class="mr-5 pr-lg-2 pr-xl-4" style="max-width: 180px;"> <b-img src="/images/131_1.svg" fluid ></b-img> </div>
                            </b-col>
                            <b-col class="col-12 col-sm-8">
                                <h7 class="green7 f-120 mb-3 font-noto">Business relevance & Approach</h7>
                                <p> The 2nd Basic Plan for Climate Change Response was established to reduce global greenhouse gas emissions to 536 million  tons by 2030. South Korea is further strengthening its responsibilities as a greenhouse gas emission company through the emission trading system. According to the 2030 National Greenhouse Gas Reduction Roadmap, the current 3% emission allowance rate will increase to more than 10% by 2025, and incentives for companies with high reduction efficiency will be allocated relatively more emissions. These institutional changes mean that the company's greenhouse gas emissions turn into institutional and manageable risks that directly impact financial performance, not just uncertainties or pure regulatory risks.
                                </p>
                                <p> Coway is a company that provides products and services that improve the customer's living environment and aims to actively support GHG reduction and climate change adaptation by countries and societies. To this end, we will actively analyze climate scenarios, set clear greenhouse gas reduction targets, increase energy efficiency in the workplace, and reduce emissions from refrigerants.
                                </p> 
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark line-height-low">
                            <h7 class="green7 f-120 mb-4 w-100">Activity</h7>
                            <b-col class="col-0 col-lg-1"></b-col>
                            <b-col class="col-6 col-lg-5 text-center mb-3 mb-sm-0">
                                <div class="mx-auto mb-3" style="height: 70px;"><b-img src="/images/132_1.svg" fluid></b-img></div>
                                <p class="fw-500 word-break pr-1 px-md-3 px-lg-4">Recalculate medium to long-term targets for climate change</p>
                            </b-col>
                            <b-col class="col-6 col-lg-5 text-center">
                                <div class="mx-auto mb-3" style="height: 70px;"><b-img src="/images/132_2.svg" fluid></b-img> </div>
                                <p class="fw-500 word-break pl-1 px-md-3 px-lg-4">Promote science-based target (SBT) for reduction methodology</p>
                            </b-col>
                            <b-col class="col-0 col-lg-1"></b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark line-height-low">
                            <b-col class="col-12 col-md-6 pr-md-4 mb-4 mb-md-0">
                                <h7 class="green7 f-120 mb-4 w-100">Business Cases</h7>
                                <b-row no-gutters> 
                                    <b-col class="col-6 text-center mb-3 mb-sm-0"><div class="mx-auto mb-3" style="height: 65px;"><b-img src="/images/132_3.svg" fluid></b-img></div>
                                        <p class="fw-500 word-break pr-1 pr-md-2">Voluntary carbon reduction of a supplier in the supply chain</p>
                                    </b-col>
                                    <b-col class="col-6 text-center"><div class="mx-auto mb-3" style="height: 65px;"><b-img src="/images/132_4.svg" fluid></b-img></div>
                                        <p class="fw-500 word-break pl-1">Active participation in global initiatives such as CDP (Carbon Disclosure Project)</p>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col class="col-12 col-md-6 position-relative pl-md-4">
                            <div class="vertical-line-1 position-absolute d-none d-md-block"></div>
                                <h7 class="green7 f-120 mb-3 w-100">Performance</h7>
                                <b-row no-gutters class="align-items-center mb-3 pb-1">                                    
                                    <b-col class="col-6 text-center">                   
                                        <div class="f-330 fw-400 mb-3 mb-sm-1 pt-2">-50<span class="f-130 fw-500">%</span> </div>     
                                        <p class="fw-500 word-break pr-1 px-md-2 font-noto">Reduction in GHG emissions per sales (KRW) in 2020 compared to 2010</p>       
                                    </b-col> 
                                    <b-col class="col-6 text-center">
                                        <div class="mx-auto mb-3 d-flex justify-content-center align-items-end" style="height: 60px;"><b-img src="/images/132_5.svg" fluid></b-img></div>
                                        <p class="fw-500 word-break pl-1 px-md-2 font-noto">1st Implementation of renewable energy (Solar) in Logistics Center</p>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </div>
                </section>
                <!-- End of DMA -->
                <hr class="py-3">
                <section class="mb-5">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="n1" :activated="activated" class="green7 f-130 fw-500 bg-white pr-5" style="z-index:10">Climate Change Goals and Scenario Management</h6-ancor><div class="horizontal-line-2 green-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-5 font-noto">Coway declared environmental management in 2006, recognizing that climate change and changes in the global environment have a significant impact on corporate management activities. Coway has established a mid- to long-term goal of reducing GHG emissions up to 50% by 2020 compared to the 2010s. Even though GHG emissions increased by 10.81% but GHG emissions compared to sales increase in KRW decreased by about 70% from 2010 to 2019-from 5,356 tCO2e and 0.357 tC02e/100 million KRW in 2010 to 5,935 tCO2e and 0.234 tonCO2e/100 million KRW in 2019. (when the internal emission calculation standards were applied as same as those of 2010, the GHG emissions increased by 4.13% and the GHG emissions compared to sales increase was reduced by approximately 77%.)
                        </p>
                        <div class="position-relative pt-5 mb-4">
                            <hj-img src="/images/315_1.svg" fluid></hj-img>
                            <div class="position-absolute" style="top: 0;">
                                <h7 class="mb-3 gray63 font-noto">GHG Emissions and 2030 Goals</h7>
                                <!-- <div class="fw-300 f-80 d-flex align-items-center "><div style="width:12px; height:1.5px;" class="mr-1 bg-green5"></div> 배출량 (단위: tCO<sub>2</sub>e)</div> -->
                                <div class="fw-300 f-80 mb-2 d-flex align-items-center font-noto"><div style="width:12px; height:1.5px;" class="mr-1 bg-gray7"></div> GHG Emissions Compared to Sales Increase (Unit: tCO<sub>2</sub>e/100 million KRW)</div>
                                <div class="fw-300 f-80 pt-1 mb-1 d-flex align-items-center font-noto">Emission (Unit: tCO<sub>2</sub>e)</div>
                                <div class="fw-300 f-80 d-flex align-items-center font-noto"><b-img src="/images/scope1.svg"></b-img> <span class="ml-2">Scope1</span></div>
                                <div class="fw-300 f-80 d-flex align-items-center font-noto"><b-img src="/images/scope2.svg"></b-img> <span class="ml-2">Scope2</span></div>
                                <div class="fw-300 f-80 d-flex align-items-center font-noto"><b-img src="/images/scope3.svg"></b-img> <span class="ml-2">Scope3</span></div>
                            </div>
                        </div>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5 gray55">
                            <li>2019 target is estimated by calculating increase in energy use by 5% compared to the previous year as sales (production) increase.
                            </li>
                            <li>2030 target is estimated by calculating increase in sales and energy use by 5% per year.
                            </li>
                            <li>As the scope and standards of greenhouse gas management were changed from the internal standards to national standards according to the 'GHG and Energy Target Management System', there was a difference in reports and data from the previous year. The data in this report is a revalidation of emissions from 2017 to 2019 on a national basis.
                            </li>
                        </ol>    
                        <hr class="py-2">
                        
                        <p class="mb-5">Coway uses energy efficiently through its GHG reduction activities and business operation efficiency. We maximize energy efficiency by continuously introducing new and renewable energy, solar power generation. Coway installs and operates solar power at Yugu Plant (49.5KWh scale), Incheon Plant (39KWh), Pocheon Factory (45KWh scale), and Logistics Center (48.8KWh scale). Through this, 3 factories and distribution centers produced about 237MWh of electricity in 2019, reducing the GHG emission by about 110 tons. The energy storage system (ESS) introduced at the Yugu plant reduces peak loads and contributes to the distribution of energy consumption. Also, it has an energy cost-saving effect, saving approximately 120 million KRW in 2019. The LED lighting introduced in the Yugu Plant and Logistics Center improved the working environment in the workplace, reduced energy costs by more than 65 million KRW in 2019 based on the logistics center, and about 264 tons of GHG.
                        </p>

                    <h6-ancor hash="n1-1" :activated="activated" class="green6 fw-500 mb-2">Science-based Target</h6-ancor>
                        <p class="mb-5"> Since 2020, Coway has set targets for 2030 and 2050 based on the Science-Based Target initiative to respond to the new climate change system. Since most of the energy relies on electric power, we are setting goals that substantial reductions can be made, such as the continuous installation, purchase, and reduction purchase of new and renewable energy. To this end, we changed the standard for calculating GHG emissions from our internal standard to the target system for energy and GHG in South Korea and recalculated GHG emissions in the last 3 years. As soon as the external GHG emissions verification of the last 3 years is completed, the targets for GHG reduction for 2030 and 2050 will be finalized and disclosed.
                        </p>
                    <hr class="py-3">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="n2" :activated="activated" class="green7 f-130 fw-500 bg-white pr-5" style="z-index:10">Risks and Opportunities of Climate Change</h6-ancor><div class="horizontal-line-2 green-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-45"> Coway analyzes and discloses specific climate change risks and opportunities following the recommendations of Taskforce on Climate-Related Financial Disclosures (TCFD). Coway's 2019 climate change risks and opportunities analysis are as follows:
                        </p>
                    
                        <h6-ancor hash="n2-1" :activated="activated" class="green6 fw-500 mb-3">Potential Risks from Climate Change</h6-ancor>
                        <b-table-simple responsive class="sep-table f-90 mb-5">
                            <b-tbody>
                                <b-tr class="bg-green7 text-white">
                                    <b-td class="py-0">Risk Factors</b-td><b-td class="py-0" style="width:60%">Context</b-td><b-td class="py-0">Term</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>Strengthened product policy and legal regulations</b-td>
                                    <b-td>Regulations on energy-using products are strengthened by the efficient management equipment operation regulations under the Energy Use Rationalization Act. Therefore, the standard of energy consumption efficiency of Coway's flagship water purifier is being strengthened. If Coway does not respond by developing technology to improve the energy consumption efficiency of products, it will inevitably weaken its competitiveness in the market. As a result, it is expected that the company's operating costs, such as R&D investment costs will increase.</b-td>
                                    <b-td>Short Term</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>Conversion costs for low carbon emission technologies</b-td>
                                    <b-td class="word-break">Currently, R-134a refrigerant is used in the water purifier product produced by Coway. The international agreement is tightening regulations on the use of refrigerants that deplete the ozone layer. R-12 refrigerants have already been banned from manufacturing and sales. R-134a refrigerants also have a high GWP, making them a regulatory risk. Therefore, if Coway does not develop materials and new technologies to replace R-134a refrigerant, it can be a considerable risk to the water purifier business.</b-td>
                                    <b-td>Short Term</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>Market uncertainty</b-td>
                                    <b-td class="word-break">In South Korea, precipitation patterns are changing due to climate change. Therefore, the nation's water resource management policy is expected to be strengthened due to water shortages. Water is used in Coway's water purifier, and it is expected that this water purifier product will be affected by national water resource management policies. As a result, it is expected that Coway will increase its operating expenses, such as R&D and facility investment.</b-td>
                                    <b-td>Mid Term</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <hr class="py-2">
                        <h6-ancor hash="n2-2" :activated="activated" class="green6 fw-500 mb-3">Potential Opportunity from Climate Change</h6-ancor>
                        <b-table-simple responsive class="sep-table f-90 mb-5">
                            <b-tbody>
                                <b-tr class="bg-green7 text-white">
                                    <b-td class="py-0">Opportunity Factors</b-td><b-td class="py-0" style="width:60%">Context</b-td><b-td class="py-0">Term</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>Access to new markets</b-td>
                                    <b-td class="word-break">Precipitation patterns are changing due to climate change. The frequency of yellow dust and fine dust is increasing due to severe drought caused by changes in precipitation patterns. Due to this climate change, the air purifier market has expanded to China, providing Coway with a new opportunity to enter the market.</b-td>
                                    <b-td>Short Term</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>Business diversification opportunities</b-td>
                                    <b-td class="word-break">Due to climate change, energy consumption is increasing, and the type of electricity supplied to homes is also expected to change. Coway has a platform business that is convenient to introduce new types of business or products. It is predicted that new businesses or products related to climate change will provide Coway with opportunities to enter new markets.</b-td>
                                    <b-td>Mid Term</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                    <hr class="py-4">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="n3" :activated="activated" class="green7 f-130 fw-500 bg-white pr-5" style="z-index:10">Carbon Partnership with Supplier</h6-ancor><div class="horizontal-line-2 green-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-5"> Coway's carbon partnership suppliers  have also implemented reduction activities to decrease 50% of GHG emissions compared to sales increase by 2020 compared to 2010. Coway continues to support its carbon partnership suppliers  to minimize energy use compared to their sales growth, thereby strengthening the energy competitiveness of carbon partner suppliers, striving to prevent supply chain risks related to climate change. For the 2020 GHG reduction target, starting from 2018, the GHG emissions compared to sales increase exceeded the mid- to long-term target by reducing 110% of the reduction target and 7.55% of emissions. Since 2019, it has been converted to voluntary management of each supplier. In 2019, GHG emissions information will be disclosed through CDP Q&A and carbon report, if necessary.
                        </p> 

                        <h7 class="mb-3 gray63">Carbon Partner Support Status</h7>
                        <b-table-simple responsive class="txt-table env-table f-95 mb-2">
                            <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td> <b-td class="text-left">Participating Partners</b-td> <b-td class="text-left w-25">Term</b-td><b-td>Main Contents</b-td> 
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Energy Cooperation Project of Corporate Cooperation Group</b-td> <b-td class="text-left">5 Companies</b-td> <b-td class="text-left">2019.04 ~ 2019.10</b-td> <b-td>Energy diagnosis support to business sites<br>(Induce conversion to high-efficiency energy) </b-td>
                                </b-tr>
                            </b-tbody> 
                        </b-table-simple>       
                        <ul class="f-80 fw-300 footnote-ul line-height-low mb-5">
                            <li> In June 2014 installed 29.7KWh solar power to Coway supplier [Jesung Co., Ltd.]</li>
                            <li> In July 2015,installed 29.4KWh solar power to Coway supplier [ID System Co., Ltd.]</li>
                            <li> We continue to participate in the Energy Cooperation Project of the Corporate Cooperation Group from 2012 to 2019, and 39 partners are participating for 8 years.</li>
                        </ul>

                    <hr class="py-4">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="n4" :activated="activated" class="green7 f-130 fw-500 bg-white pr-5" style="z-index:10">GHG &middot; Energy and Other Environment Data</h6-ancor><div class="horizontal-line-2 green-line position-absolute" style="z-index:8"></div></div>
                        <h7 class="mb-3 gray63">GHG Emissions</h7>
                        <b-table-simple responsive class="num-table env-table f-95 mb-2">
                            <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td class="text-left">Unit</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td><b-td>2019 Goals</b-td><b-td>2030 Goals</b-td> 
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Scope1</b-td><b-td class="text-left" rowspan="4">tCO<sub>2</sub>e</b-td><b-td>630</b-td><b-td>676</b-td><b-td>640</b-td><b-td>710</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Scope2</b-td><b-td>5,162</b-td><b-td>5,349</b-td><b-td>5,224</b-td><b-td>5,616</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Scope3</b-td><b-td>71</b-td><b-td>71</b-td><b-td>70</b-td><b-td>71</b-td><b-td>-</b-td>
                                </b-tr> 
                                <b-tr>
                                    <b-td class="text-left">Total</b-td><b-td>5,863</b-td><b-td>6,096</b-td><b-td>5,935</b-td><b-td>6,397</b-td><b-td>2,982</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">GHG Emissions Compared to Sales Increase</b-td><b-td class="text-left">tCO<sub>2</sub>e/100 million KRW</b-td><b-td>0.253</b-td><b-td>0.254</b-td><b-td>0.234</b-td><b-td>0.253</b-td><b-td>0.069</b-td>
                                </b-tr>                                   
                            </b-tbody> 
                        </b-table-simple> 
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5 gray55">
                            <li>2019 target is estimated by calculating increase in energy use by 5% compared to the previous year as sales (production) increase.
                            </li>
                            <li>2030 target is estimated by calculating increase in sales and energy use by 5% per year.
                            </li>
                            <li>As the scope and standards of greenhouse gas management were changed from the internal standards to national standards according to the 'GHG and Energy Target Management System', there was a difference in reports and data from the previous year. The data in this report is a revalidation of emissions from 2017 to 2019 on a national basis.
                            </li>
                        </ol>      

                        <h7 class="mb-3 gray63"> GHG Emissions by Business Site</h7>
                        <b-table-simple responsive class="num-table env-table f-95 mb-2">
                            <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td> <b-td class="text-left">Unit</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td> 
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Yugu Factory</b-td><b-td class="text-left" rowspan="8">tCO<sub>2</sub>e</b-td><b-td>2,178</b-td><b-td>2,466</b-td><b-td>2,438</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Incheon Factory</b-td><b-td>609</b-td><b-td>663</b-td><b-td>707</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Pocheon Factory</b-td><b-td>375</b-td><b-td>205</b-td><b-td>218</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Environmental Technology Research Center (R&D Center)</b-td><b-td>1,708</b-td><b-td>1,889</b-td><b-td>1,849</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Cosmetic Research Institute</b-td><b-td>203</b-td><b-td>126</b-td><b-td>0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Seoul Office</b-td><b-td>502</b-td><b-td>456</b-td><b-td>444</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Logistics Center</b-td><b-td>287</b-td><b-td>292</b-td><b-td>279</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Total</b-td><b-td>5,863</b-td><b-td>6,096</b-td><b-td>5,935</b-td>
                                </b-tr>                                
                            </b-tbody> 
                        </b-table-simple>       
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5 gray55">
                            <li> GHG emissions in 2019 is zero due to closure of the Cosmetic Research Institute 
                            </li>
                            <li> Due to changes in the scope of verification of GHG data in 2019, it differs from last year's reporting data.
                            </li>
                        </ol>  

                        <h7 class="mb-3 gray63"> GHG Emissions Sccording to the the Use of Refrigerant</h7>
                        <b-table-simple responsive class="num-table env-table f-95 mb-2">
                            <b-thead><b-tr>
                                <b-td class="text-left" colspan="2">Category</b-td><b-td class="text-left">Unit</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td> 
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">R-134</b-td><b-td class="text-left">Refrigerant usage in product manufacturing</b-td><b-td class="text-left" rowspan="2">kg</b-td><b-td>46,580</b-td><b-td>51,230</b-td><b-td>46,360</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">R-600a, R-436B</b-td><b-td class="text-left">Refrigerant usage in product manufacturing</b-td><b-td>800</b-td><b-td>5,320</b-td><b-td>4,010</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ul class="f-80 fw-300 footnote-ul line-height-low mb-5">
                            <li> R-134a in 2018 is modified as follow: 49,320 → 51,230 / R-600a, 3,220 → 5,320kg for R-436B</li>
                        </ul>

                        <h7 class="mb-3 gray63 font-noto">Other Indirect GHG (Scope 3) Emissions</h7>
                        <b-table-simple responsive class="num-table env-table f-95 mb-2">
                            <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td class="text-left">Unit</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td> 
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Domestic Logistics/Transportation</b-td><b-td class="text-left" rowspan="2">tCO<sub>2</sub>e</b-td><b-td>5,047</b-td><b-td>5,420</b-td><b-td>5,491</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ul class="f-80 fw-300 footnote-ul line-height-low mb-5">
                            <li> Domestic logistics/transport is voluntarily provided by consigned partner companies, and external verification is not conducted.</li>
                        </ul>


                        <h7 class="mb-3 gray63">Energy Usage</h7>
                        <b-table-simple responsive class="num-table env-table f-95 mb-2">
                            <b-thead><b-tr><b-td colspan="10"></b-td></b-tr></b-thead>
                            <b-thead>
                                <b-tr>
                                    <b-td class="text-left" colspan="2">Category</b-td><b-td class="text-left">Unit</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td><b-td>2019 Goals</b-td><b-td>2030 Goals</b-td> 
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left" rowspan="6">Direct</b-td><b-td class="text-left">LPG</b-td><b-td rowspan="10" class="text-left">GJ</b-td><b-td>84</b-td><b-td>41</b-td><b-td>0</b-td><b-td>-</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Gasoline</b-td><b-td>2,423</b-td><b-td>2,533</b-td><b-td>2,587</b-td><b-td>-</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Diesel</b-td><b-td>2,458</b-td><b-td>2,540</b-td><b-td>2,773</b-td><b-td>-</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">LNG</b-td><b-td>323</b-td><b-td>554</b-td><b-td>201</b-td><b-td>-</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Kerosene</b-td><b-td>432</b-td><b-td>225</b-td><b-td>338</b-td><b-td>-</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Propane</b-td><b-td>5,294</b-td><b-td>5,908</b-td><b-td>5,163</b-td><b-td>-</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td colspan="2" class="text-left">Direct Total</b-td><b-td>11,014</b-td><b-td>11,801</b-td><b-td>11,062</b-td><b-td>12,391</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Indirect</b-td><b-td class="text-left">Electricity</b-td><b-td>106,275</b-td><b-td>110,142</b-td><b-td>107,564</b-td><b-td>-</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td colspan="2" class="text-left">Indirect Total</b-td><b-td>106,275</b-td><b-td>110,142</b-td><b-td>107,564</b-td><b-td>115,649</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td colspan="2" class="text-left">Total Energy Usage</b-td><b-td>117,289</b-td><b-td>121,943</b-td><b-td>118,627</b-td><b-td>128,040</b-td><b-td>64,020</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td colspan="2" class="text-left">Total Energy Intensity</b-td><b-td class="text-left">GJ/Sales</b-td><b-td>5.055</b-td><b-td>5.091</b-td><b-td>4.687</b-td><b-td>5.059</b-td><b-td>1.479</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5 gray55">
                            <li>2019 target is estimated by calculating increase in energy use by 5% compared to the previous year as sales (production) increase.
                            </li>
                            <li>2030 target is estimated by calculating increase in sales and energy use by 5% per year.
                            </li>
                            <li>As the scope and standards of greenhouse gas management were changed from the internal standards to national standards according to the "GHG and Energy Target Management System," there was a difference in reports and data from the previous year. The data in this report is a revalidation of emissions from 2017 to 2019 on a national basis.
                            </li>
                            <li> The total heat generated is applied to the coefficient applied to the energy consumption calculation.
                            </li>
                            <li>All of Coway's business sites do not have air emission facilities. Therefore, they do not emit air pollutants such as nitrogen oxide(NOx) and sulfur oxides(SOx).
                            </li>
                            <li>Greenhouse gas emissions are zero due to the absence of LPG vehicles among the rental vehicles in 2019.
                            </li>
                        </ol>

                        <h7 class="mb-3 gray63">Environment/Quality Certification Rate</h7>
                        <b-table-simple responsive class="txt-table env-table f-95 mb-5">
                            <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td class="text-left">Certification Scope</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Environmental Management System (ISO14001)</b-td><b-td class="text-left">100%</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Quality Management System (ISO9001)</b-td><b-td class="text-left">100%</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                        <h7 class="mb-3 gray63">Environmental Investment</h7>
                        <b-table-simple responsive class="num-table env-table mb-2">
                            <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td class="text-left">Unit</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td><b-td class="text-left">Note</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Facility Operation<sup> 1)</sup></b-td><b-td class="text-left" rowspan="5">1 million KRW</b-td><b-td>86.5</b-td><b-td>377.4</b-td><b-td>850.2</b-td><b-td class="text-left">Expansion and construction of environmental safety facilities at business sites</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">System operation<sup> 2)</sup></b-td><b-td>253.3</b-td><b-td>407.8</b-td><b-td>302.5</b-td><b-td class="text-left">Reduced system investment due to stabilization of verification of conformity to parts</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Communication<sup> 3)</sup></b-td><b-td>229.2</b-td><b-td>327.6</b-td><b-td>227.4</b-td><b-td class="text-left">Cost reduction due to stabilization of legal response</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">New Environmental Business<sup> 4)</sup></b-td><b-td>50.8</b-td><b-td>80.0</b-td><b-td>121.6</b-td><b-td class="text-left">Expand regulatory network</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Total</b-td><b-td>619.8</b-td><b-td>1192.8</b-td><b-td>1501.7</b-td><b-td class="text-left"></b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5 gray55">
                            <li>Facility operation: refers to high-efficiency facility replacement, new facility investment.</li>
                            <li>System operation: Refers to IT construction and operation, internal audit, benchmarking, training, verification.</li>
                            <li>Communication: Responding to laws and regulations, national projects, promotion/event/education, donation, social contribution.</li>
                            <li>New Environmental business: external consulting, new and renewable energy investment.</li>
                        </ol>

                        <h7 class="mb-3 gray63">Environmental Law Violations and Fine</h7>
                        <b-table-simple responsive class="num-table env-table f-95">
                            <b-thead>
                                <b-tr>
                                    <b-td class="text-left">Category</b-td><b-td>2016</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Number of violations of environmental regulations</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Fine for violation (KRW)</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
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
            return this.is_ENG? 'Climate Change' : '기후변화 대응'
        },
        sub_titles(){
            let temp = [
                { 
                    title: this.is_ENG? 'Climate Change Goals and Scenario Management':'기후변화 목표 및 시나리오 관리', hash: 'n1',
                    child: [
                        { title: this.is_ENG? 'Science-based Target':'과학적 감축 목표(Science based Target)계획 도입', hash: 'n1-1' }, 
                    ]
                },
                { 
                    title: this.is_ENG? 'Risks and Opportunities of Climate Change':'기후변화의 위험과 기회 분석', hash: 'n2',
                    child: [
                        { title: this.is_ENG? 'Potential Risks from Climate Change': '기후변화에 따른 잠재 위험 분석', hash: 'n2-1' }, 
                        { title: this.is_ENG? 'Potential Opportunity from Climate Change': '기후변화에 따른 잠재 기회 분석', hash: 'n2-2' }, 
                    ]
                }, 
                { 
                    title: this.is_ENG? 'Carbon Partnership with Supplier':'협력사 탄소 파트너십', hash: 'n3'
                },
                { 
                    title: this.is_ENG? 'GHG, Energy and Other Environment Data':'온실가스 · 에너지 및 기타 환경 데이터', hash: 'n4'
                },
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
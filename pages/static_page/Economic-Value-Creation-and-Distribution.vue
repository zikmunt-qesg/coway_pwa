<template>
<div class="position-relative page-top-bg-sus min-vh-100">   
    <logger title="경제적 가치 창출과 분배"></logger>
    <div class="w-100 bg-white bg-white-cover position-absolute"></div>

    <b-container v-if="this.$store.state.is_ENG==false" class="">
        <b-row class="pt-md-5 px-3">
            <h1 class="mt-5 mb-3 pt-3 text-center w-100 fw-400">CARE FOR SUSTAINABILITY</h1>
            <h7 class="mb-5 text-center w-100 fw-400">더 나은 세상을 향한 착한 믿음의 실천, 코웨이 지속가능경영 비전</h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="title"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#5171b1'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0">
                <section class="bg-white px-4 py-4">
                    <div class="border-top-dark pb-2 mb-5"></div>
                    <h4-ancor hash="T" :activated="activated" class="parang8 mb-4 mb-sm-5 mt-m-2">경제적 가치 창출과 분배</h4-ancor>

                    <div class="d-flex mb-2 position-relative overflow-hidden"> <h6-ancor hash="j1" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">경제적 가치 창출</h6-ancor></div>
                    <p class="font-noto">지난 10년 간 한 해도 빠짐없이 꾸준한 성장을 이어온 코웨이는 2019년에도 지속적인 매출 성장세를 기록하며, 전년대비 11.5% 증가한 3조 189억 원의 사상최대 매출을 달성하였습니다. 국내 환경가전 사업 매출은 2조 1,112억 원으로, 세부 매출은 1. 렌탈 판매, 2. 일시불 판매, 3. 멤버십 프로그램으로 구성됩니다. 2019년 기준 총 관리계정은 779만(국내 628만, 해외 151만) 계정입니다. 
                    </p>
                    <p class="font-noto">렌탈 판매량 또한 전년 145만 대에서 2019년 157만대로 전년대비 8.4% 증가하였으며, 기존제품 및 신규제품 판매 성장 영향으로 최대 판매를 달성하였습니다. 청정기의 판매 호조와 매트리스 등 신규 제품군의 판매가 확대되었습니다. 
                    </p>
                    <p class="font-noto mb-5">고객 해약률 또한 1.01%로 장기적 감소추세에 있으며, 렌탈 자산폐기 또한 매출대비 2.5%로 손실을 최소화하고 있습니다. 
                    </p>
                    <hr class="py-1">
                    <div class="position-relative"> <hj-img src="/images/89_1.svg" fluid alt="코웨이 매출 및 영업이익 추이(2010-2019)"></hj-img>
                    <div class="position-absolute" style="top:1.1rem; left:1.25rem;">
                        <h7 class="mb-2 font-noto">매출 및 영업이익 추이(2010-2019) </h7>
                        <div class="fw-300 f-80 d-flex align-items-center mb-1"><div style="width:12px; height:1.5px;" class="mr-1 bg-parang6"></div> 매출액 (단위: 억원)</div>
                        <div class="fw-300 f-80 d-flex align-items-center "><div style="width:12px; height:1.5px;" class="mr-1 bg-gray7"></div> 영업이익 (단위: 억원)</div>
                    </div></div>
                    <hr class="mb-3">
                    <!--<div class="position-relative"> <hj-img src="/images/90_1.svg" fluid alt="렌탈 계정현황"></hj-img>
                    <div class="position-absolute" style="top:1.1rem; left:1.25rem;">
                        <h7 class="mb-2 font-noto">국내 환경가전 렌탈 계정현황 </h7>
                        <div class="fw-300 f-80 d-flex align-items-center mb-1"> (단위: 천 계정)</div>
                    </div></div>
                    <hr class="mb-3">-->

                    <h6-ancor hash="j1-1" :activated="activated" class="parang6 fw-500 mb-2">해외 사업의 꾸준한 확대</h6-ancor>
                    <p class="mb-45">2019년 해외사업 매출은 7,491억 원으로 전년대비 37.7% 성장하였습니다. 말레이시아 및 미국법인의 매출이 큰 폭으로 증가하며 해외법인은 고성장을 지속하고 있습니다. 주요 법인별로는 말레이시아 법인의 매출이 전년 3,534억 원 대비 48.9% 증가하여 5,263억 원을 달성하였으며, 관리계정은 2018년 97만 6,000계정에서 135만 4,000 계정으로 38.8% 증가하였습니다. 미국 또한 전년 805억 원 대비 20.9% 성장한 973억 원의 매출, 11만 4,000계정에서 4.7% 증가한 12만 계정을 달성하며 견조한 성장세를 유지하고 있습니다. 
                    </p>

                    <hj-img src="/images/91_1.svg" fluid alt="제품별 수출 비중"></hj-img>
                   

                    <hr class="mb-3">

                    <div class="position-relative"> <hj-img src="/images/92_1.svg" fluid alt="해외법인 관리계정"></hj-img>
                    <div class="position-absolute" style="top:1.1rem; left:1.25rem;">
                        <h7 class="mb-2 font-noto">해외법인 관리계정 <span class="fw-300 f-80 gray6"> (단위: 천 계정)</span></h7>
                        <div class="fw-300 f-80 d-flex align-items-center mb-1"><div style="width:12px; height:1.5px;" class="mr-1 bg-parang6"></div> 말레이시아</div>
                        <div class="fw-300 f-80 d-flex align-items-center "><div style="width:12px; height:1.5px;" class="mr-1 bg-gray7"></div> 미국</div>
                    </div></div>
                    <hr class="mb-3">

                    <h6-ancor hash="j1-2" :activated="activated" class="parang6 fw-500 mb-2">넷마블 인수에 따른 구독경제 시너지 확대</h6-ancor>
                    <p class="mb-5">2020년 2월 ㈜넷마블이 코웨이 주식 25.08%를 인수하며 최대 주주가 되었습니다. 넷마블의 코웨이 경영권 매입은 중장기적으로는 넷마블이 게임사업에서 확보한 빅데이터 운영 노하우를 코웨이 제품에 접목할 수 있는 가능성을 열어줍니다. 렌탈산업은 정수기 등 품목에서 경쟁이 심화되고 있으며, 렌탈 품목의 다변화와 함께 데이터 산업과의 결합을 통한 스마트홈 구독경제 등 새로운 가치를 창출할 수 있을 것으로 기대됩니다. 
                    </p>
                    <hr class="py-3">

                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="j2" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">경제적 가치 분배</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-5">코웨이는 2019년 연결기준 3조 189억 원의 매출액과 기타수익 및 금융수익을 합해 총 3조 683억 원의 경제적 가치를 창출하였습니다. 창출된 가치 중 3조 7억 원을 기업의 미래가치와 투자 효율성을 고려하여 이해관계자들에게 합리적으로 배분하였으며, 모든 배분을 마치고 유보된 총 675억 원의 경제적 가치를 자본 총계로 가산하였습니다. 
                    </p>
                    <hj-img src="/images/93_1.svg" fluid ></hj-img>
                    <p class="f-80 gray5 mb-0">협력회사: 상품 및 원재료의 사용(재료비), 외주용역, 소모품, 지급수수료, 감가상각비, 광고선전비 등 </p>
                    <p class="f-80 gray5 mb-0">파트너: 판촉비, 판매수수료</p>
                    <p class="f-80 gray5 mb-0">주주 및 투자자: 연차배당 및 중간배당</p>
                    <p class="f-80 gray5 mb-0">임직원: 급여 및 상여, 퇴직급여, 복리후생비</p>
                    <p class="f-80 gray5 mb-0">정부: 법인세 비용</p>
                    <p class="f-80 gray5 mb-0">기타: 기타포괄손익 등</p>
                    <hr class="mb-45">

                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="j3" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">조세 정책</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-45">코웨이는 합리적 조세전략을 바탕으로 세무 신고 및 납부 의무를 성실히 이행하고 있습니다. 코웨이의 조세정보는 금융감독원 공시 시스템(http://dart.fss.or.kr/)내 정기 공시를 통해 투명하게 공개되고 있습니다. 감사보고서상 재무제표 및 주석사항에서는 법인세비용 산출 기준, 이연법인세 자산 및 부채, 법인세비용 구성내역 및 세율 등을 확인할 수 있으며 외부감사를 통해 그 투명성과 객관성을 확보하고 있습니다. 국내뿐 아니라 해외에서도 법인이 가지는 납세의무를 성실히 이행하며 정부의 세수 및 공공 서비스 증대 등 선순환 구조 창출에 기여하고 있습니다. 
                    </p>

                    <div class="border-parang py-2 px-4 mb-45">
                        <div class="border-bottom-dotted py-2"><p class="indent-sm mb-0"><span class="parang6 fw-600">&middot;</span> 조세 관련 신고와 납세에 대한 정책을 보유하고 이를 준수한다.</p></div>
                        <div class="border-bottom-dotted py-2"><p class="indent-sm mb-0"><span class="parang6 fw-600">&middot;</span> 사업장이 위치한 국가의 세법 및 규제를 준수하며,</p></div>
                        <div class="border-bottom-dotted py-2"><p class="indent-sm mb-0"><span class="parang6 fw-600">&middot;</span> 조세관할권이 낮은 지역으로의 가치 이전을 금지하며,</p></div>
                        <div class="border-bottom-dotted py-2"><p class="indent-sm mb-0"><span class="parang6 fw-600">&middot;</span> 조세회피를 위한 조세구조 사용을 지양하며,</p></div>
                        <div class="border-bottom-dotted py-2"><p class="indent-sm mb-0"><span class="parang6 fw-600">&middot;</span> 이전 가격을 비롯해 비밀관할권, "조세피난처"를 사용하지 않는다.</p></div>
                        <div class="border-bottom-dotted py-2"><p class="indent-sm mb-0"><span class="parang6 fw-600">&middot;</span> 이사회는 외환위험, 이자율위험, 신용위험, 파생금융상품과 비파생금융상품의 이용 및 유동성을 초과하는 투자 등 특정 분야에 관한 문서화된 정책뿐 아니라, 전반적인 리스크 관리를 위한 문서화된 정책을 제공한다.</p></div>
                        <div class="py-2"><p class="indent-sm mb-0"><span class="parang6 fw-600">&middot;</span> 법인세 관련 정보는 금융감독원의 전자공시시스템에 공시되는 감사보고서와 지속가능경영 보고서를 통해 공개한다.</p></div>
                    </div>
                
                    <p class="mb-5">코웨이는 조세 관련 규정 및 세제정책 등의 변화를 지속적으로 모니터링하여 조세 관련 리스크를 선제적으로 파악·관리하고 있습니다. 리스크 관리는 이사회에서 승인한 정책에 따라 자금부서에서 진행됩니다. 자금부서는 연결기업의 현업부서들과 긴밀히 협력하여 재무위험을 식별, 평가 및 상쇄하고 있습니다. 이사회는 외환위험, 이자율위험, 신용위험, 파생금융상품과 비파생금융상품의 이용 및 유동성을 초과하는 투자 등 특정 분야에 관한 문서화된 정책뿐 아니라, 전반적인 리스크 관리를 위한 문서화된 정책을 제공합니다. 한편 최근 국세청이 국제거래와 관련한 조세의 성실신고를 장려함에 따라 코웨이는 이러한 세제정책에 맞춰 조세 정보를 보고하고 있습니다. 특히, 조세피난처를 이용해 탈세하는 역외탈세와 국제거래 이용탈세를 원칙적으로 금지하고 있습니다. 코웨이는 말레이시아, 미국, 중국 등에 지점 또는 현지법인을 보유하고 있으며, 해외법인과의 국제 거래 시 해당국 세법 및 OECD 이전가격 가이드라인을 준수하고 현지법을 기준으로 납세 의무를 다하고 있습니다.
                    </p>

                    <h6-ancor hash="j3-1" :activated="activated" class="parang6 fw-500 mb-3">조세 납부 현황 및 유효세율 보고</h6-ancor>

                        <h7 class="mb-3 gray63">지역별 조세 납부 <span class="fw-300 f-80"> (단위: 천 원)</span></h7>
                        <b-table-simple responsive class="num-table f-95 mb-2">
                             <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">아시아<sup>1)</sup></b-td><b-td>9,815,520</b-td><b-td>21,562,805</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">미주<sup>2)</sup></b-td><b-td>222,997</b-td><b-td>-2,617,299</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <p class="mb-1 f-80 gray6">* 지역별 해외 법인 법인세 비용으로, 현지 납부액에 대해 2019년 연평균 환율을 적용하여 산출함</p>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5">
                            <li> 말레이시아 법인, 태국 법인, 인도네시아 법인, 중국 법인 </li>
                            <li> 미국 법인 </li>
                        </ol>

                        <h7 class="mb-3 gray63">법인세 비용의 주요 구성 내역 <span class="fw-300 f-80"> (단위: 천 원)</span></h7>
                        <b-table-simple responsive class="num-table f-95">
                             <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">법인세비용차감전 순이익</b-td><b-td>468,567,061</b-td><b-td>451,418,558</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">법인세 부담액<sup>1)</sup></b-td><b-td>118,493,942</b-td><b-td>113,778,104</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left"> 세액공제</b-td><b-td>-142,015</b-td><b-td>-182,651</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left"> 영구적 차이 등</b-td><b-td>-432,685</b-td><b-td>6,146,218</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left"> 일시적 차이 중 이연법인세 미인식</b-td><b-td>5,910,785</b-td><b-td>1,869,336</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left"> 실현가능성 판단의 변경효과</b-td><b-td>1,087,653</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left"> 법인세추납액(환급액) 등</b-td><b-td>-4,770,130</b-td><b-td>627,398</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left"> 기타</b-td><b-td>-1,391,977</b-td><b-td>-3,027,522</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">법인세 비용<sup>3)</sup></b-td><b-td>118,755,573</b-td><b-td>119,210,883</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">명목세율<sup>4)</sup></b-td><b-td>25.28%</b-td><b-td>26.41%</b-td>
                                </b-tr>
                                <b-tr>                        
                                    <b-td class="text-left">유효세율<sup>5)</sup></b-td><b-td>25.34%</b-td><b-td>26.40%</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low">
                            <li> 법인세부담액: 당기법인세 </li>
                            <li> 이연법인세: 회계이익과 과세소득의 일시적 차이로 인해 세금을 이연하는 것으로 예상 법인세 효과</li>
                            <li> 법인세비용 = 당기법인세 + 이연법인세</li>
                            <li> 법인세 부담액 / 법인세비용차감전 순이익</li>
                            <li> 법인세 비용 / 법인세비용차감전 순이익</li>
                        </ol>                       
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
            <h1 class="mt-5 mb-3 pt-3 text-center w-100 fw-400">CARE FOR SUSTAINABILITY</h1>
            <h7 class="mb-5 text-center w-100 fw-400">Practicing "Good faith" toward a better world, Coway Sustainability Management Vision</h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="title"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#5171b1'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0 eng-font-scale">
                <section class="bg-white px-4 py-4">
                    <div class="border-top-dark pb-2 mb-5"></div>
                    <h4-ancor hash="T" :activated="activated" class="parang8 mb-4 mb-sm-5 mt-m-2">Economic Value Creation and Distribution</h4-ancor>

                    <div class="d-flex mb-2 position-relative overflow-hidden"> <h6-ancor hash="j1" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">Economic Value Creation</h6-ancor></div>
                    <p class="font-noto">Coway, which has continued to grow steadily for the past 10 years, continued to record sales growth in 2019 and achieved a record-high sale of 3018.9 billion KRW, an increase of 11.5% over the previous year. Domestic environmental home appliance business sales are 2111.2 billion KRW, and detailed sales are 1. rental sales, 2. lump sum sales, and 3. membership program. As of 2019, the total management account was 7.79 million(6.28 million domestic, 1.51 million overseas).
                    </p>
                    <p class="font-noto">Rental sales increased by 8.4% year-on-year, from 1.45 million units last year to 1.57 million units in 2019. The largest sales were achieved with growth in sales of existing and new products. sales of air purifiers increased and new product lines such as mattresses expanded.
                    </p>
                    <p class="font-noto mb-5">The customer cancellation rate is also on a long-term decline trend to 1.01%, and rental asset disposal is also minimizing losses by 2.5% of sales.
                    </p>
                    <hr class="py-1">
                    <div class="position-relative"> <hj-img src="/images/89_1.svg" fluid alt="코웨이 매출 및 영업이익 추이(2010-2019)"></hj-img>
                    <div class="position-absolute" style="top:1.1rem; left:1.25rem;">
                        <h7 class="mb-2 font-noto">Sales and Operating Profit Trend(2010-2019) </h7>
                        <div class="fw-300 f-80 d-flex align-items-center mb-1"><div style="width:12px; height:1.5px;" class="mr-1 bg-parang6 font-noto"></div> Sales (Unit: 100 million KRW)</div>
                        <div class="fw-300 f-80 d-flex align-items-center "><div style="width:12px; height:1.5px;" class="mr-1 bg-gray7 font-noto"></div> Sales Profit (Unit: 100 million KRW)</div>
                    </div></div>
                    <hr class="mb-3">
                    <!--<div class="position-relative"> <hj-img src="/images/90_1.svg" fluid alt="렌탈 계정현황"></hj-img>
                    <div class="position-absolute" style="top:1.1rem; left:1.25rem;">
                        <h7 class="mb-2 font-noto">국내 환경가전 렌탈 계정현황 </h7>
                        <div class="fw-300 f-80 d-flex align-items-center mb-1"> (단위: 천 계정)</div>
                    </div></div>
                    <hr class="mb-3">-->

                    <h6-ancor hash="j1-1" :activated="activated" class="parang6 fw-500 mb-2">Steady Expansion of Overseas Business</h6-ancor>
                    <p class="mb-45">In 2019, overseas business sales amounted to 749.1 billion KRW, up 37.7% from the previous year. Sales in Malaysia and the U.S. increased significantly, and overseas subsidiaries continue to proliferate. For each major subsidiary, Malaysian subsidiaries' sales increased by 48.9%, reaching 532.6 billion KRW, from the previous year's sales 353.4 billion KRW, and the accounts increased by 38.8% from 976,000 accounts in 2018 to 1,354,000 accounts. The U.S. maintains substantial growth, reaching 97.3 billion KRW in sales, 29.7% over the previous year's sales of 80.5 billion KRW, and the accounts increased by 4.7% from 114,000 to 120,000 accounts
                    </p>

                    <hj-img src="/images/305_1.svg" fluid alt="제품별 수출 비중"></hj-img>
                   

                    <hr class="mb-3">

                    <div class="position-relative"> <hj-img src="/images/92_1.svg" fluid alt="해외법인 관리계정"></hj-img>
                    <div class="position-absolute" style="top:1.1rem; left:1.25rem;">
                        <h7 class="mb-2 font-noto">Overseas Corporation Management Account <span class="fw-300 f-80 gray6"> (Unit: 1,000 accounts)</span></h7>
                        <div class="fw-300 f-80 d-flex align-items-center mb-1"><div style="width:12px; height:1.5px;" class="mr-1 bg-parang6"></div> Malaysia</div>
                        <div class="fw-300 f-80 d-flex align-items-center "><div style="width:12px; height:1.5px;" class="mr-1 bg-gray7"></div> U.S.A</div>
                    </div></div>
                    <hr class="mb-3">

                    <h6-ancor hash="j1-2" :activated="activated" class="parang6 fw-500 mb-2">Subscription Economy Synergy with Netmarble Acquisition</h6-ancor>
                    <p class="mb-5">In February 2020, Netmarble acquired 25.08% of Coway's shares, becoming the largest shareholder. Netmarble's purchase of Coway's management rights opens up the possibility of incorporating the significant data operation know-how acquired by Netmarble in the game business into Coway products in the medium to long term. The rental industry is intensifying competition in items such as water purifiers. It is expected to create new values such as a smart home subscription economy through diversification of rental items and integration with the data industry.
                    </p>
                    <hr class="py-3">

                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="j2" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">Economic Value Distribution</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-5">In 2019, Coway created a total economic value of 3068.3 billion KRW by combining sales of 3018.9 billion KRW and other revenues and financial revenues based on consolidation in 2019. Of the created value, 3000.7 billion KRW was reasonably allocated to stakeholders in consideration of the company's future value and investment efficiency. After all allocations, the economic value of the total reserve of 67.5 billion KRW was added to the total amount of capital. 
                    </p>
                    <hj-img src="/images/305_2.svg" fluid ></hj-img>
                    <p class="f-80 gray5 mb-0 indent">- Suppliers: products and raw materials usage (material costs), outsourcing services, consumables, payment fees, depreciation costs, advertising costs, etc. </p>
                    <p class="f-80 gray5 mb-0">- Partners: Promotion fee, sales fee</p>
                    <p class="f-80 gray5 mb-0">- Shareholders and investors: Annual and interim dividends</p>
                    <p class="f-80 gray5 mb-0">- Employees: Salary and Incentives, Retirement Salary, Benefits</p>
                    <p class="f-80 gray5 mb-0">- Government: Income tax expense</p>
                    <p class="f-80 gray5 mb-0">- Other: Other comprehensive income</p>
                    <hr class="mb-45">

                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="j3" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">Tax Policy</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-45">Coway faithfully fulfills its tax reporting and payment obligations based on its reasonable tax strategy. Coway's tax information is transparently disclosed through regular disclosure in the Financial Supervisory Service's disclosure system (http://dart.fss.or.kr/). In the financial statements and notes in the audit report, one can check the income tax expense calculation criteria, deferred income tax assets and liabilities, and the composition and tax rate of income tax expenses, and secure transparency and objectivity through external audits. Not only in South Korea but also overseas, we faithfully fulfill the tax obligations of corporations and contribute to the creation of a virtuous cycle structure, such as the government's tax revenue and public service increase.
                    </p>

                    <div class="border-parang py-2 px-4 mb-45">
                        <div class="border-bottom-dotted py-2"><p class="indent-sm mb-0"><span class="parang6 fw-600">&middot;</span> Uphold and observe tax reporting and payment policies.</p></div>
                        <div class="border-bottom-dotted py-2"><p class="indent-sm mb-0"><span class="parang6 fw-600">&middot;</span> Comply with local tax laws and regulations,</p></div>
                        <div class="border-bottom-dotted py-2"><p class="indent-sm mb-0"><span class="parang6 fw-600">&middot;</span> Prohibit transfer of value to areas with a low level of tax jurisdiction,</p></div>
                        <div class="border-bottom-dotted py-2"><p class="indent-sm mb-0"><span class="parang6 fw-600">&middot;</span> Avoid taking advantage of tax structures for the purposes of evasion,</p></div>
                        <div class="border-bottom-dotted py-2"><p class="indent-sm mb-0"><span class="parang6 fw-600">&middot;</span> Avoid the use of confidential jurisdictions, "tax havens" including previous price.</p></div>
                        <div class="border-bottom-dotted py-2"><p class="indent-sm mb-0"><span class="parang6 fw-600">&middot;</span> The Board of Directors provides documented policies on overall risk management, as well as specific areas such as foreign exchange risk, interest rate risk, credit risk, derivative and non-derivative financial instruments, and investments in excess of liquidity.</p></div>
                        <div class="py-2"><p class="indent-sm mb-0"><span class="parang6 fw-600">&middot;</span> When it comes to corporate tax information, we disclose it through the Sustainability Management Report, and the Audit Report which is available at the DART (Data Analysis, Retrieval and Transfer System) of the Financial Supervisory Service</p></div>
                    </div>
                
                    <p class="mb-5">At Coway, we take a proactive approach in our response to tax risks by monitoring changes in tax regulations and policies. Risk management is conducted by the Funding Department in accordance with policies approved by the Board of Directors. The Funding Department works closely with the business units of associated companies to identify, evaluate, and offset financial risks. The Board provides documented policies on overall risk management as well as specific areas such as foreign exchange risk, interest rate risk, credit risk, use of derivative and non-derivative financial instruments, and investments in excess of liquidity. Meanwhile, we ensure compliance with the National Tax Service's policies on voluntary reporting on international transactions. In particular, we prohibit tax evasion using falsified overseas transactions and tax havens. Coway has branches or local subsidiaries in Malaysia, the the United States, and China. In international transactions with overseas subsidiaries, it complies with applicable local tax laws and OECD transfer pricing guidelines. It fulfills its tax obligations based on local laws.
                    </p>

                    <h6-ancor hash="j3-1" :activated="activated" class="parang6 fw-500 mb-3">Report on Tax Payment Status and Effective Tax Rate</h6-ancor>

                        <h7 class="mb-3 gray63">Overseas Tax Payment by Region <span class="fw-300 f-80"> (Unit: 1,000 KRW)</span></h7>
                        <b-table-simple responsive class="num-table f-95 mb-2">
                             <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Asia<sup>1)</sup></b-td><b-td>9,815,520</b-td><b-td>21,562,805</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">U.S.A<sup>2)</sup></b-td><b-td>222,997</b-td><b-td>-2,617,299</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <p class="mb-1 f-80 gray6 indent-sm">* The cost of corporate tax for overseas corporations by region, calculated by applying the annual average exchange rate in 2019 for local payments</p>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5">
                            <li> Malaysia Corporation, Thailand Corporation, Indonesia Corporation, China Corporation </li>
                            <li> The United States Corporation </li>
                        </ol>

                        <h7 class="mb-3 gray63">Main Composition of Corporate Tax Expenses  <span class="fw-300 f-80"> (Unit: 1,000 KRW)</span></h7>
                        <b-table-simple responsive class="num-table f-95">
                             <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left"> Net Income Before Income Tax Expenses</b-td><b-td>468,567,061</b-td><b-td>451,418,558</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left"> Corporate tax burden<sup>1)</sup></b-td><b-td>118,493,942</b-td><b-td>113,778,104</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left"> Tax credit</b-td><b-td>-142,015</b-td><b-td>-182,651</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left"> Permanent difference</b-td><b-td>-432,685</b-td><b-td>6,146,218</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left"> Deferred tax unrecognized among temporary differences</b-td><b-td>5,910,785</b-td><b-td>1,869,336</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left"> Change effect of feasibility judgment</b-td><b-td>1,087,653</b-td><b-td>-</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left"> Corporate tax payment (refund)</b-td><b-td>-4,770,130</b-td><b-td>627,398</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left"> Others</b-td><b-td>-1,391,977</b-td><b-td>-3,027,522</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Income tax expense<sup>3)</sup></b-td><b-td>118,755,573</b-td><b-td>119,210,883</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Nominal tax rate<sup>4)</sup></b-td><b-td>25.28%</b-td><b-td>26.41%</b-td>
                                </b-tr>
                                <b-tr>                        
                                    <b-td class="text-left">Effective tax rate<sup>5)</sup></b-td><b-td>25.34%</b-td><b-td>26.40%</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low">
                            <li> Corporate tax burden: Current corporate tax </li>
                            <li> Deferred income tax: expected tax effect due to temporary difference between accounting income and taxable income</li>
                            <li> Income tax expense = current corporate tax + deferred corporate tax</li>
                            <li> Income tax burden / Net income before income tax expense</li>
                            <li> Income Tax Expense / Net Income Before Income Tax Expense</li>
                        </ol>                       
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
            return this.is_ENG? 'Economic Value Creation and Distribution' : '경제적 가치 창출과 분배'
        },
        sub_titles(){
            let temp = [
                { 
                    title: this.is_ENG? 'Economic Value Creation':'경제적 가치 창출', hash: 'j1', 
                    child: [
                        { title: this.is_ENG? 'Steady Expansion of Overseas Business':'해외 사업의 꾸준한 확대', hash:'j1-1' }, 
                        { title: this.is_ENG? 'Subscription Economy Synergy with Netmarble Acquisition':'넷마블 인수에 따른 구독경제 시너지 확대', hash:'j1-2' }
                    ]
                },
                { 
                    title: this.is_ENG? 'Economic Value Distribution': '경제적 가치 분배', hash: 'j2' 
                },
                { 
                    title: this.is_ENG? 'Tax Policy':'조세 정책', hash: 'j3',
                    child: [
                        { title: this.is_ENG? 'Report on Tax Payment Status and Effective Tax Rate': '조세 납부 현황 및 유효세율 보고', hash: 'j3-1' }
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
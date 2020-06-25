<template>
<div class="position-relative page-top-bg-sus min-vh-100">   
    <logger title="지배구조"></logger>
    <div class="w-100 bg-white bg-white-cover position-absolute"></div>

    <b-container v-if="this.$store.state.is_ENG==false" class="">
        <b-row class="pt-md-5 px-3">
            <h1 class="mt-5 mb-3 pt-3 text-center w-100 fw-400">CARE FOR SUSTAINABILITY</h1>
            <h7 class="mb-5 text-center w-100 fw-400">더 나은 세상을 향한 착한 믿음의 실천, 코웨이 지속가능경영 비전 </h7>
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
                    <h4-ancor hash="T" :activated="activated" class="parang8 mb-4 mb-sm-5">지배구조</h4-ancor>
                    <p class="mb-5">코웨이는 이사회를 중심으로 견제와 균형에 기반한 효율적 경영활동을 수행하는 독립적인 지배구조를 구축하여 이를 유지∙발전시켜 나가고 있습니다. 이사회는 안정적 경영활동과 이익 창출을 통한 주주환원의 실현 및 전략적 의사결정을 통한 성장전략 구현 등 장기 기업가치 향상을 목표로 투명성, 독립성, 다양성, 전문성, 효율성 제고를 지향합니다. 
                    </p>

                    <div class="d-flex mb-2 position-relative overflow-hidden"> <h6-ancor hash="f1" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">이사회 중심의 책임경영 수행</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-5">코웨이 이사회는 법령과 정관에 따라 주주로부터 기업 경영에 관한 최고 의사결정권을 위임받아, 이해관계자와 다양한 이해관계를 조율하고 경영 의사결정을 승인하는 최고 기구로서의 책임과 역할을 지니고 있습니다. 코웨이의 이사회는 투자계획, 내부거래 등 이해관계 상충, 투명한 보상 등에 대한 심의, 승인과 함께 회사의 장기 리스크 관리 전반에 대한 검토 및 책임을 수행합니다. 
                    </p>

                    <h6-ancor hash="f1-1" :activated="activated" class="parang6 fw-500 mb-4">이사회 구성 현황</h6-ancor>
                    <b-table-simple responsive class="sep-table f-90">
                        <b-tbody>
                            <b-tr class="bg-parang7 fw-300 text-white">
                                <b-td class="border-0 py-0">성명</b-td><b-td class="border-0 py-0">주요 역할</b-td><b-td class="border-0 py-0">성별</b-td><b-td class="border-0 py-0">주요 경력<sup>*</sup></b-td><b-td class="border-0 py-0">최초 선임일</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>방준혁</b-td>
                                <b-td>이사회 의장</b-td>
                                <b-td>남</b-td>
                                <b-td class="custom-ul-li table-li"><ul><li>2020 ~ 현재 코웨이 이사회 의장</li><li>2014 ~ 현재 넷마블 이사회 의장</li><li>2011 ~ 2014 CJ E&amp;M 게임사업부문 총괄 상임고문</li></ul></b-td>
                                <b-td>2020.02.07</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>이해선</b-td>
                                <b-td>대표이사</b-td>
                                <b-td>남</b-td>
                                <b-td class="custom-ul-li table-li"><ul><li>2020 ~ 현재 코웨이 대표이사</li><li>2019 ~ 2020 코웨이 사업기술총괄사장</li><li>2016 ~ 2019 웅진코웨이 대표이사</li></ul></b-td>
                                <b-td>2020.02.07</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>서장원</b-td>
                                <b-td>사내이사</b-td>
                                <b-td>남</b-td>
                                <b-td class="custom-ul-li table-li"><ul><li>2020 ~ 현재 코웨이 경영관리본부장</li><li>2020 ~ 2020 넷마블 코웨이 TF장</li><li>2019 ~ 2019 넷마블 투자전략담당 및 커뮤니케이션 담당</li><li>2015 ~ 2018 넷마블 경영전략담당</li><li>2001 ~ 2015 법무법인 세종 선임미국변호사</li></ul></b-td>
                                <b-td>2020.02.07</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>김진배</b-td>
                                <b-td>대표이사</b-td>
                                <b-td>남</b-td>
                                <b-td class="custom-ul-li table-li"><ul><li>2001 ~ 현재 고려대학교 경영대학 교수</li><li>1997 ~ 2001 보스톤대학교 조교수</li></ul></b-td>
                                <b-td>2020.02.07</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>김규호</b-td>
                                <b-td>사외이사(독립)</b-td>
                                <b-td>남</b-td>
                                <b-td class="custom-ul-li table-li"><ul><li>2015 ~ 현재 고려대학교 경영대학 교수</li><li>2013 ~ 2014 삼성전자 미디어솔루션센터(전무)</li></ul></b-td>
                                <b-td>2020.02.07</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>윤부현</b-td>
                                <b-td>사외이사(독립)</b-td>
                                <b-td>남</b-td>
                                <b-td class="custom-ul-li table-li"><ul><li>2020 ~ 현재 LG디스플레이 고문</li><li>2018 ~ 2020 LG유플러스 고문</li><li>2012 ~ 2018 LG전자 MC사업본부 경영기획담당(전무)</li><li>2009 ~ 2011 LG전자 금융담당(상무)</li><li>2007 ~ 2008 LG전자 경영기획담당(상무)</li></ul></b-td>
                                <b-td>2020.02.07</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>이다우</b-td>
                                <b-td>사외이사(독립)</b-td>
                                <b-td>남</b-td>
                                <b-td class="custom-ul-li table-li"><ul><li>2018 ~ 현재 법무법인 율촌 변호사</li><li>2016 ~ 2018 춘천지방법원 부장판사</li><li>2015 ~ 2016 서울중앙지방법원 판사</li></ul></b-td>
                                <b-td>2020.02.07</b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                    <p class="f-80 ml-1 mb-5">
                        *표기기간: 2017년 1월 1일 ~ 2019년 12월 31일
                    </p>
                    <h6-ancor hash="f1-2" :activated="activated" class="parang6 fw-500 mb-3">이사회의 독립성 및 전문성</h6-ancor>
                    <p>코웨이의 사외이사 비중은 57.1%로 국내 대기업 평균(51.3%, 2019년 12월 공정거래위원회 발표) 대비 높은 수준을 유지하고 있습니다. 코웨이는 사외이사의 독립성 판단 기준에 대해 국내 상법, 공정거래법 및 기타 법령에 준하여 이사회 정관에 명시하고 있습니다.
                    </p>
                    <p class="mb-45">이사는 상법 제382조에 따라 주주총회에서 선임하며, 이사회는 정관에 따라 최소 3인에서 최대 9인으로 구성합니다. 2019년말 기준 코웨이 이사회는 사내이사 1인, 사외이사 5인, 기타비상무이사 1인으로 구성되어 있었으나, 2020년 2월 7일 인수에 따른 대주주 변경 이후 임시 주주총회를 통해 사내이사 3인, 사외이사 4인이 새롭게 선임되었습니다. 
                    </p>

                    <div class="border-parang py-3 px-4 mb-45">
                        <h7 class="mb-3">사외이사 독립성 및 이해관계 상충 판단기준</h7>
                        <b-row no-gutters>
                            <b-col class="col-12 col-sm-3 pr-3"> 
                                <div class="fw-500 h-100 border-bottom-gray d-flex align-items-center py-1">독립성 결격 사유</div>
                            </b-col>
                            <b-col class="col-12 col-sm-9 border-bottom-gray py-2">
                                <p class="indent mb-0"> &#9312; 회사의 상무에 종사하는 이사∙집행임원 및 피용자 또는 최근 2년 이내 회사의 상무에 종사한 이사∙감사∙집행임원 및 피용자</p>
                                <p class="indent mb-0"> &#9313; 최대주주 본인, 배우자 및 직계존속 및 비속</p>
                                <p class="indent mb-0"> &#9314; 최대주주가 법인인 경우 법인의 이사∙감사∙집행임원 및 피용자</p>
                                <p class="indent mb-0"> &#9315; 이사∙감사∙집행임원의 배우자 및 직계 존속∙비속</p>
                                <p class="indent mb-0"> &#9316; 회사의 모회사 또는 자회사의 이사∙감사∙집행임원 및 피용자</p>
                                <p class="indent mb-0"> &#9317; 회사의 거래관계 등 중요한 이해관계가 있는 법인의 이사∙감사∙집행임원 및 피용자</p>
                                <p class="indent mb-0"> &#9318; 회사의 이사∙집행임원 및 피용자가 이사∙집행임원으로 있는 다른 회사의 이사∙감사∙집행임원 및 피용자</p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters>
                            <b-col class="col-12 col-sm-3 pr-3"> 
                                <div class="fw-500 h-100 d-flex align-items-center py-1">이해관계 상충</div>
                            </b-col>
                            <b-col class="col-12 col-sm-9 py-2">
                                <p class="indent mb-0"> &#9312;	회사와 경쟁관계에 있는 회사를 지배하는 공정거래법상 동일인 및 관련자</p>
                                <p class="indent mb-0"> &#9313;	회사와 경쟁관계에 있는 회사 및 공정거래법상 동일한 기업집단에 속하는 회사의 임직원 또는 최근 2년이내 임직원이었던 자</p>
                                <p class="indent mb-0"> &#9314;	회사의 경쟁관계에 있는 회사의 최대주주 또는 2대주주인 회사 및 공정거래법상 동일 기업집단에 속하는 회사의 임직원 또는 최근 2년 이내 임직원이었던 자</p>
                            </b-col>
                        </b-row>
                    </div>

                    <p>사내이사는 면밀한 검토 과정을 거쳐 후보를 추천하여 주주총회에서 최종 선임합니다. 사외이사는 상법 제542조의 8에 따라 설치된 사외이사후보추천위원회가 투명한 절차에 따라 후보를 선발한 후 주주총회에서 최종 선임합니다. 코웨이는 지배구조 다양성과 전문성을 구현하기 위하여 경영, 경제, 회계 등 각 분야의 전문성을 갖춘 자를 사외이사로 선임하고 있습니다. 
                    </p>
                    <p class="mb-5">사외이사 선임 시 독립성 및 겸직사항 등 법률상 사외이사 자격요건을 확인하여 확인서를 한국거래소에 제출하고 있으며, 주주총회소집 결의 공시 과정에서도 사외이사 자격요건 적격 확인서를 통해 회사와의 독립성 여부, 법령상 자격요건을 주주 및 이해관계자에게 투명하게 공개하고 있습니다.
                    </p>

                    <hj-img src="/images/47_1.svg" fluid></hj-img>
                    <hr class="mb-4">

                    <h6-ancor hash="f1-3" :activated="activated" class="parang6 fw-500 mb-3">이사회 산하 위원회 운영</h6-ancor>
                    <p class=""> 코웨이는 이사회 책임과 역할을 효율적이고 전문적으로 수행하기 위하여 이사회 산하 위원회로 경영위원회,사외이사후보추천위원회, 감사위원회를 운영하고 있습니다. 2020년 3월 기준 이사회 산하 위원회는 경영위원회의 경우 사내이사 3인, 감사위원회의 경우 사외이사 3인, 사외이사후보추천위원회의 경우 사외이사 3인으로 구성되어 운영되었습니다. 이사회가 경영진 견제기능을 실질적으로 행사할 수 있도록 이사회 내 사외이사비율을 과반 이상으로 구성하고, 이사회 내 위원회인 사외이사후보추천위원회, 감사위원회 모두 사외이사 과반 이상으로 구성하고 있습니다. 특히 감사위원회는 감사 위원장은 회계/재무 전문가이며, 감사위원회에 소비재 및 생활가전 산업전문가 1명과 법률 전문가 1명으로 구성하여 전문성을 높이고 있습니다. 
                    </p>

                    <p class="mb-5">2019년에는 총 13차에 걸쳐 이사회가 개최되었으며, 평균 이사 출석률은 98.9%입니다.</p>

                        <h7 class="mb-2 gray63 font-noto">2019 이사회 활동내역</h7>
                        <b-table-simple responsive class="txt-table parang-table font-noto fw-300 f-95 mb-5">
                            <b-thead>
                                <b-tr>
                                    <b-td>회차</b-td><b-td>안건</b-td><b-td>구분</b-td><b-td class="text-right">개최 일자</b-td><b-td class="text-right">출석/총원</b-td>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td>1차</b-td><b-td>2019년 연간 사업계획 및 예산의 수립 외 1건</b-td><b-td>임시</b-td><b-td class="text-right">2019.01.23</b-td><b-td class="text-right">7/7</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>2차</b-td><b-td>임시주주총회를 위한 주주명부 폐쇄 및 기준일 설정의 건</b-td><b-td>임시</b-td><b-td class="text-right">2019.01.31</b-td><b-td class="text-right">7/7</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>3차</b-td><b-td>제30기 정기주주총회 소집의 건 외 6건</b-td><b-td>정기</b-td><b-td class="text-right">2019.02.13</b-td><b-td class="text-right">7/7</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>4차</b-td><b-td>2019년 1차 임시주주총회 소집의 건 외 4건</b-td><b-td>임시</b-td><b-td class="text-right">2019.03.06</b-td><b-td class="text-right">6/7</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>5차</b-td><b-td>사외이사후보추천위원회 구성위원 선임의 건 외 2건</b-td><b-td>임시</b-td><b-td class="text-right">2019.03.29</b-td><b-td class="text-right">8/8</b-td>
                                </b-tr>   
                                <b-tr>
                                    <b-td>6차</b-td><b-td>2019년 1분기 배당 결정의 건 외 6건</b-td><b-td>정기</b-td><b-td class="text-right">2019.04.29</b-td><b-td class="text-right">8/8</b-td>
                                </b-tr> 
                                <b-tr>
                                    <b-td>7차</b-td><b-td>㈜웅진과의 렌탈사업 영업양수도 계약 체결의 건 외 1건</b-td><b-td>임시</b-td><b-td class="text-right">2019.05.17</b-td><b-td class="text-right">7/8</b-td>
                                </b-tr> 
                                <b-tr>
                                    <b-td>8차</b-td><b-td>분기배당을 위한 주주명부 기준일 결정의 건</b-td><b-td>임시</b-td><b-td class="text-right">2019.06.12</b-td><b-td class="text-right">8/8</b-td>
                                </b-tr>   
                                <b-tr>
                                    <b-td>9차</b-td><b-td>2019년 2분기 배당 결정의 건 외 5건</b-td><b-td>정기</b-td><b-td class="text-right">2019.07.29</b-td><b-td class="text-right">7/8</b-td>
                                </b-tr> 
                                <b-tr>
                                    <b-td>10차</b-td><b-td>신임 대표이사 선임의 건</b-td><b-td>임시</b-td><b-td class="text-right">2019.08.12</b-td><b-td class="text-right">8/8</b-td>
                                </b-tr> 
                                <b-tr>
                                    <b-td>11차</b-td><b-td>내부회계관리규정 개정 승인의 건 외 1건</b-td><b-td>임시</b-td><b-td class="text-right">2019.09.19</b-td><b-td class="text-right">7/8</b-td>
                                </b-tr> 
                                <b-tr>
                                    <b-td>12차</b-td><b-td>2019년 3분기 배당 결정의 건 외 3건</b-td><b-td>정기</b-td><b-td class="text-right">2019.10.28</b-td><b-td class="text-right">8/8</b-td>
                                </b-tr>  
                                <b-tr>
                                    <b-td>13차</b-td><b-td>임시주주총회를 위한 주주명부 폐쇄 및 기준일 설정의 건 외 2건</b-td><b-td>임시</b-td><b-td class="text-right">2019.12.30</b-td><b-td class="text-right">7/7</b-td>
                                </b-tr>                                                                                                                                                                                                                                                       
                            </b-tbody>
                        </b-table-simple>
                        <hr class="py-2">
                        <hj-img src="/images/79_1.svg" fluid></hj-img>

                    <hr class="py-3 mb-5">

                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="f2" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">성과평가와 보수 지급</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    <p> 동종업계 보수 수준을 고려한 합리적인 보수를 지급하여 우수한 전문가를 사외이사로 선임하고, 적극적인 직무 활동을 할 수 있도록 보장하고 있습니다. 사내이사는 이사회 결의에 따라 직무 및 직급, 근속기간, 리더십, 전문성, 회사 기여도 등을 고려하여 기본 보수를 책정하고, 정량지표과제 및 정성지표 과제 평가에 따라 종합점수를 산출하여 달성률을 평가하여 인센티브(상여)를 지급하고 있습니다.
                    </p>
                    <p class="mb-5">코웨이는 2019년 제30기 정기주주총회를 통해 이사에게 지급할 연간 보수 총액을 40억으로 승인하였으며, 2020년 제31기 정기주주총회에서 연간 보수 총액을 50억으로 상향하여 승인하였습니다.
                    </p>

                        <h7 class="mb-3 gray63">CEO-임직원 보수 비율</h7>
                        <b-table-simple responsive class="txt-table sustainability-table f-95">
                            <b-thead>
                                <b-tr>
                                    <b-td >구분</b-td><b-td class="text-right">보수액<span class="f-90"> (단위: 천 원)</span></b-td><b-td class="text-right">비율<span class="f-90"> (단위: %)</span></b-td>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td>최고 보수자(CEO) 보수액</b-td><b-td class="text-right">671,364<sup> 1)</sup></b-td><b-td rowspan="2" class="text-right">11.06</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>직원 보수 평균 보수액</b-td><b-td class="text-right">60,697</b-td>
                                </b-tr>
                                
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5">
                            <li> 2019년 10월까지 대표이사로 재직한 이해선 사장의 보수를 기준으로 하였습니다. 해당 사내이사는 임기만료 후 사업기술총괄 사장(미등기 임원)으로 재직한 바 있습니다. 공시금액은 미등기임원 재임분을 포함한 보수 총액 기준으로 산정되었으며, 2016년 부여된 주식매수선택권 행사이익을 제외한 금액입니다. 주식매수선택권 행사이익을 포함한 세부 내역은 사내이사 개인별 보수지급현황을 참조하시기 바랍니다.
                            </li>
                        </ol>


                        <h7 class="mb-3 gray63">사내이사 개인별 보수 지급 현황</h7>
                        <b-table-simple responsive class="txt-table sustainability-table fw-300 font-noto f-95 mb-5">
                            <b-thead>
                                <b-tr>
                                    <b-td>이름</b-td><b-td>총액(천원)</b-td><b-td colspan="2">산정기준 및 방법</b-td>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td rowspan="4">이해선</b-td><b-td>급여</b-td><b-td style="width: 12%">411,364</b-td><b-td>직무 · 직급(대표이사), 근속기간, 리더십, 전문성, 회사기여도 등을 종합적으로 반영</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>상여</b-td><b-td>260,000</b-td><b-td>성장성, 수익성, 안정성 등으로 구성된 정량 KPI와 해당 년도 전략과제로 구성된 정성 KPI를 종합평가표에 의거하여 평가하여 종합점수를 산출함. 2018년은 당사 매출액이 연결기준 2017년 2조 5168억에서 2018년  2조 7073억으로 7.6% 증가한 점, 당기순이익이 2017년 3,256억에서 2017년 3,499억으로 7.4% 증가한 점 등을 고려함. 또한 신제품군 출시를 통한 성장 동력을 확보한 점, 해외사업 진출을 위한 기반을 마련한 점 등의 정성 및 전략 지표를 고려하여 총 급여의 65% 수준인 2.6억원을 산출·지급 하였음</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>주식매수선택권 행사이익</b-td><b-td>2,460,285</b-td><b-td>주주총회 결의로 부여받은 주식매수선택권의 행사가격(92,640원)과 최대주주변경에 따른 주식매수선택권 부여계약서상 특칙에 의거하여 (주당) 경영권 변동거래의 매각가격(102,891원)과의 차이에 행사수량(240,000주)을 곱하여 2,460,285천원을 산출하였음</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>비고</b-td><b-td colspan="2" class="text-right">- 기타근로소득, 퇴직소득 및 기타소득 해당사항 없음</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td rowspan="3">안지용</b-td><b-td>급여</b-td><b-td>260,203</b-td><b-td>이사회 결의에 따라 직무 · 직급(본부장), 근속기간, 리더십, 전문성, 회사기여도 등을 종합적으로 반영하여 연간 급여총액을 245,440,000원으로 책정하고, 2019년 8월 승진 및 의사회 결의에 따라 직급(대표이사)를 고려해 연간 급여총액을 400,000,000원으로 인상 지급함. 본부장 직급기간 월 500,000원 및 복리후생 및 기타 세액반영액을 연간 6,518,156원을 지급함. 
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>상여</b-td><b-td>1,500,000</b-td><b-td>경영관리본부 및 마케팅본부 최고 책임자로서, 임원선임계약상 회사의 경영/재무/마케팅 목표달성을 위한 주요 검토, 의사결정, 책임을 부담함에 따라 의사회 결의를 통해 1,500,000,000원을 지급함                                        
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>비고</b-td><b-td colspan="2" class="text-right">- 주식매수선택권 행사이익, 기타근로소득, 퇴직소득 및 기타소득 해당사항 없음</b-td>
                                </b-tr>

                            </b-tbody>
                        </b-table-simple>

                        <h7 class="mb-3 gray63">등기임원 및 미등기임원 주식매수선택권 부여 내역</h7>
                        <b-table-simple responsive class="num-table sustainability-table fw-300 font-noto f-95">
                            <b-thead>
                                <b-tr>
                                    <b-td class="text-left">부여 받은자</b-td><b-td class="text-left">관계</b-td><b-td class="text-center">부여일</b-td><b-td class="text-center">주식의 종류</b-td><b-td>부여</b-td><b-td>행사</b-td><b-td>취소</b-td><b-td>미행사수량</b-td><b-td>행사기간</b-td>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">안진혁 외 1명</b-td><b-td class="text-left">미등기 임원</b-td><b-td class="text-center">2017.03</b-td><b-td class="text-center">보통주</b-td><b-td>87,000</b-td><b-td>0</b-td><b-td>46,980</b-td><b-td>40,020</b-td><b-td>2019.03 ~ 2026.03</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">이재호 외 21명</b-td><b-td class="text-left">미등기 임원</b-td><b-td class="text-center">2017.04</b-td><b-td class="text-center">보통주</b-td><b-td>216,792</b-td><b-td>0</b-td><b-td>206,122</b-td><b-td>10,850</b-td><b-td>2019.04 ~ 2026.04</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">박재영 외 5명</b-td><b-td class="text-left">미등기 임원</b-td><b-td class="text-center">2018.03</b-td><b-td class="text-center">보통주</b-td><b-td>104,400</b-td><b-td>-</b-td><b-td>33,060</b-td><b-td>71,340</b-td><b-td>2020.03 ~ 2027.03</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">송현주 외 1명</b-td><b-td class="text-left">미등기 임원</b-td><b-td class="text-center">2019.03</b-td><b-td class="text-center">보통주</b-td><b-td>69,600</b-td><b-td>-</b-td><b-td>-</b-td><b-td>69,600</b-td><b-td>2021.03 ~ 2028.03</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <p class="f-80 ml-1 mb-5">
                            *기간: 2017년 1월 1일 ~ 2019년 12월 31일
                        </p>
                    <hr class="py-3">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="f3" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">소유구조 및 의결권</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    <p> 2019년 말 기준 코웨이의 주주는 웅진씽크빅 25.08%, 국민연금 8.08%, 자사주 2.14%, 외국인 58.87%, 기타 5.83%로 구성되어 있었으나, 2019년 12월 말 체결한 주식매매계약 등에 따라 2020년 2월 7일 웅진씽크빅이 소유하고 있던 18,511,446주(지분율 25.08%)를 ㈜넷마블에 매도하는 거래를 종결하였습니다. 이에 따라 2020년 2월 11일 이후 대주주가 넷마블㈜로 변경되었습니다. 
                    </p>

                    <p class="mb-5">코웨이의 총 발행주식 수는 73,799,619주이며, 우선주 없이 100% 보통주로 구성되어 있습니다. 코웨이는 1주당 1의결권 원칙을 따르고 있으며, 특정 주식에 복수 의결권을 부여하는 차등의결권제도를 두고 있지 않습니다. 단, 자사주로 보유하고 있는 자사주의 경우 상법에 따라 의결권이 제한되어 있습니다. 2019년 12월 말 기준 의결권이 부여된 주식은 72,218,395주(전체 발행 주식의 97.85%)입니다. 코웨이는 서면투표제나 전자투표제를 도입하고 있지 않습니다. 
                    </p>

                        <h7 class="mb-2 gray63">주주현황</h7>
                        <hj-img src="/images/80_1.svg" fluid></hj-img>
                        <hr class="mb-4">
                    
                        <h7 class="mb-3 gray63">의결권 현황 *</h7>
                        <b-table-simple responsive class="num-table sustainability-table fw-300 f-95">
                            <b-thead>
                                <b-tr>
                                    <b-td class="text-left">구분</b-td><b-td>주식 수</b-td><b-td>비율</b-td><b-td class="text-left">비고</b-td>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">우선주</b-td><b-td>0</b-td><b-td>0%</b-td><b-td class="text-left">의결권 없음</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">보통주 - 의결권 있는 주식</b-td><b-td>72,218,395</b-td><b-td>97.85%</b-td><b-td class="text-left">의결권 있음</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">보통주 - 자기주식</b-td><b-td>1,581,224</b-td><b-td>2.14%</b-td><b-td class="text-left">의결권 있음</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">합계</b-td><b-td>73,799,619</b-td><b-td>100%</b-td><b-td class="text-left">-</b-td>
                                </b-tr>                                                                
                            </b-tbody>
                        </b-table-simple>
                        <p class="f-80 ml-1">
                            *2019년 12월 말 기준임
                        </p>   
                </section> 
                <!-- End of DMA-->

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
            <h7 class="mb-5 text-center w-100 fw-400">더 나은 세상을 향한 착한 믿음의 실천, 코웨이 지속가능경영 비전_ENG </h7>
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
                    <h4-ancor hash="T" :activated="activated" class="parang8 mb-4 mb-sm-5">지배구조</h4-ancor>
                    <p class="mb-5">코웨이는 이사회를 중심으로 견제와 균형에 기반한 효율적 경영활동을 수행하는 독립적인 지배구조를 구축하여 이를 유지∙발전시켜 나가고 있습니다. 이사회는 안정적 경영활동과 이익 창출을 통한 주주환원의 실현 및 전략적 의사결정을 통한 성장전략 구현 등 장기 기업가치 향상을 목표로 투명성, 독립성, 다양성, 전문성, 효율성 제고를 지향합니다. 
                    </p>

                    <div class="d-flex mb-2 position-relative overflow-hidden"> <h6-ancor hash="f1" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">이사회 중심의 책임경영 수행</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-5">코웨이 이사회는 법령과 정관에 따라 주주로부터 기업 경영에 관한 최고 의사결정권을 위임받아, 이해관계자와 다양한 이해관계를 조율하고 경영 의사결정을 승인하는 최고 기구로서의 책임과 역할을 지니고 있습니다. 코웨이의 이사회는 투자계획, 내부거래 등 이해관계 상충, 투명한 보상 등에 대한 심의, 승인과 함께 회사의 장기 리스크 관리 전반에 대한 검토 및 책임을 수행합니다. 
                    </p>

                    <h6-ancor hash="f1-1" :activated="activated" class="parang6 fw-500 mb-4">이사회 구성 현황</h6-ancor>
                    <b-table-simple responsive class="sep-table f-90">
                        <b-tbody>
                            <b-tr class="bg-parang7 fw-300 text-white">
                                <b-td class="border-0 py-0">성명</b-td><b-td class="border-0 py-0">주요 역할</b-td><b-td class="border-0 py-0">성별</b-td><b-td class="border-0 py-0">주요 경력<sup>*</sup></b-td><b-td class="border-0 py-0">최초 선임일</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>방준혁</b-td>
                                <b-td>이사회 의장</b-td>
                                <b-td>남</b-td>
                                <b-td class="custom-ul-li table-li"><ul><li>2020 ~ 현재 코웨이 이사회 의장</li><li>2014 ~ 현재 넷마블 이사회 의장</li><li>2011 ~ 2014 CJ E&amp;M 게임사업부문 총괄 상임고문</li></ul></b-td>
                                <b-td>2020.02.07</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>이해선</b-td>
                                <b-td>대표이사</b-td>
                                <b-td>남</b-td>
                                <b-td class="custom-ul-li table-li"><ul><li>2020 ~ 현재 코웨이 대표이사</li><li>2019 ~ 2020 코웨이 사업기술총괄사장</li><li>2016 ~ 2019 웅진코웨이 대표이사</li></ul></b-td>
                                <b-td>2020.02.07</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>서장원</b-td>
                                <b-td>사내이사</b-td>
                                <b-td>남</b-td>
                                <b-td class="custom-ul-li table-li"><ul><li>2020 ~ 현재 코웨이 경영관리본부장</li><li>2020 ~ 2020 넷마블 코웨이 TF장</li><li>2019 ~ 2019 넷마블 투자전략담당 및 커뮤니케이션 담당</li><li>2015 ~ 2018 넷마블 경영전략담당</li><li>2001 ~ 2015 법무법인 세종 선임미국변호사</li></ul></b-td>
                                <b-td>2020.02.07</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>김진배</b-td>
                                <b-td>대표이사</b-td>
                                <b-td>남</b-td>
                                <b-td class="custom-ul-li table-li"><ul><li>2001 ~ 현재 고려대학교 경영대학 교수</li><li>1997 ~ 2001 보스톤대학교 조교수</li></ul></b-td>
                                <b-td>2020.02.07</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>김규호</b-td>
                                <b-td>사외이사(독립)</b-td>
                                <b-td>남</b-td>
                                <b-td class="custom-ul-li table-li"><ul><li>2015 ~ 현재 고려대학교 경영대학 교수</li><li>2013 ~ 2014 삼성전자 미디어솔루션센터(전무)</li></ul></b-td>
                                <b-td>2020.02.07</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>윤부현</b-td>
                                <b-td>사외이사(독립)</b-td>
                                <b-td>남</b-td>
                                <b-td class="custom-ul-li table-li"><ul><li>2020 ~ 현재 LG디스플레이 고문</li><li>2018 ~ 2020 LG유플러스 고문</li><li>2012 ~ 2018 LG전자 MC사업본부 경영기획담당(전무)</li><li>2009 ~ 2011 LG전자 금융담당(상무)</li><li>2007 ~ 2008 LG전자 경영기획담당(상무)</li></ul></b-td>
                                <b-td>2020.02.07</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>이다우</b-td>
                                <b-td>사외이사(독립)</b-td>
                                <b-td>남</b-td>
                                <b-td class="custom-ul-li table-li"><ul><li>2018 ~ 현재 법무법인 율촌 변호사</li><li>2016 ~ 2018 춘천지방법원 부장판사</li><li>2015 ~ 2016 서울중앙지방법원 판사</li></ul></b-td>
                                <b-td>2020.02.07</b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                    <p class="f-80 ml-1 mb-5">
                        *표기기간: 2017년 1월 1일 ~ 2019년 12월 31일
                    </p>
                    <h6-ancor hash="f1-2" :activated="activated" class="parang6 fw-500 mb-3">이사회의 독립성 및 전문성</h6-ancor>
                    <p>코웨이의 사외이사 비중은 57.1%로 국내 대기업 평균(51.3%, 2019년 12월 공정거래위원회 발표) 대비 높은 수준을 유지하고 있습니다. 코웨이는 사외이사의 독립성 판단 기준에 대해 국내 상법, 공정거래법 및 기타 법령에 준하여 이사회 정관에 명시하고 있습니다.
                    </p>
                    <p class="mb-45">이사는 상법 제382조에 따라 주주총회에서 선임하며, 이사회는 정관에 따라 최소 3인에서 최대 9인으로 구성합니다. 2019년말 기준 코웨이 이사회는 사내이사 1인, 사외이사 5인, 기타비상무이사 1인으로 구성되어 있었으나, 2020년 2월 7일 인수에 따른 대주주 변경 이후 임시 주주총회를 통해 사내이사 3인, 사외이사 4인이 새롭게 선임되었습니다. 
                    </p>

                    <div class="border-parang py-3 px-4 mb-45">
                        <h7 class="mb-3">사외이사 독립성 및 이해관계 상충 판단기준</h7>
                        <b-row no-gutters>
                            <b-col class="col-12 col-sm-3 pr-3"> 
                                <div class="fw-500 h-100 border-bottom-gray d-flex align-items-center py-1">독립성 결격 사유</div>
                            </b-col>
                            <b-col class="col-12 col-sm-9 border-bottom-gray py-2">
                                <p class="indent mb-0"> &#9312; 회사의 상무에 종사하는 이사∙집행임원 및 피용자 또는 최근 2년 이내 회사의 상무에 종사한 이사∙감사∙집행임원 및 피용자</p>
                                <p class="indent mb-0"> &#9313; 최대주주 본인, 배우자 및 직계존속 및 비속</p>
                                <p class="indent mb-0"> &#9314; 최대주주가 법인인 경우 법인의 이사∙감사∙집행임원 및 피용자</p>
                                <p class="indent mb-0"> &#9315; 이사∙감사∙집행임원의 배우자 및 직계 존속∙비속</p>
                                <p class="indent mb-0"> &#9316; 회사의 모회사 또는 자회사의 이사∙감사∙집행임원 및 피용자</p>
                                <p class="indent mb-0"> &#9317; 회사의 거래관계 등 중요한 이해관계가 있는 법인의 이사∙감사∙집행임원 및 피용자</p>
                                <p class="indent mb-0"> &#9318; 회사의 이사∙집행임원 및 피용자가 이사∙집행임원으로 있는 다른 회사의 이사∙감사∙집행임원 및 피용자</p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters>
                            <b-col class="col-12 col-sm-3 pr-3"> 
                                <div class="fw-500 h-100 d-flex align-items-center py-1">이해관계 상충</div>
                            </b-col>
                            <b-col class="col-12 col-sm-9 py-2">
                                <p class="indent mb-0"> &#9312;	회사와 경쟁관계에 있는 회사를 지배하는 공정거래법상 동일인 및 관련자</p>
                                <p class="indent mb-0"> &#9313;	회사와 경쟁관계에 있는 회사 및 공정거래법상 동일한 기업집단에 속하는 회사의 임직원 또는 최근 2년이내 임직원이었던 자</p>
                                <p class="indent mb-0"> &#9314;	회사의 경쟁관계에 있는 회사의 최대주주 또는 2대주주인 회사 및 공정거래법상 동일 기업집단에 속하는 회사의 임직원 또는 최근 2년 이내 임직원이었던 자</p>
                            </b-col>
                        </b-row>
                    </div>

                    <p>사내이사는 면밀한 검토 과정을 거쳐 후보를 추천하여 주주총회에서 최종 선임합니다. 사외이사는 상법 제542조의 8에 따라 설치된 사외이사후보추천위원회가 투명한 절차에 따라 후보를 선발한 후 주주총회에서 최종 선임합니다. 코웨이는 지배구조 다양성과 전문성을 구현하기 위하여 경영, 경제, 회계 등 각 분야의 전문성을 갖춘 자를 사외이사로 선임하고 있습니다. 
                    </p>
                    <p class="mb-5">사외이사 선임 시 독립성 및 겸직사항 등 법률상 사외이사 자격요건을 확인하여 확인서를 한국거래소에 제출하고 있으며, 주주총회소집 결의 공시 과정에서도 사외이사 자격요건 적격 확인서를 통해 회사와의 독립성 여부, 법령상 자격요건을 주주 및 이해관계자에게 투명하게 공개하고 있습니다.
                    </p>

                    <hj-img src="/images/47_1.svg" fluid></hj-img>
                    <hr class="mb-4">

                    <h6-ancor hash="f1-3" :activated="activated" class="parang6 fw-500 mb-3">이사회 산하 위원회 운영</h6-ancor>
                    <p class=""> 코웨이는 이사회 책임과 역할을 효율적이고 전문적으로 수행하기 위하여 이사회 산하 위원회로 경영위원회,사외이사후보추천위원회, 감사위원회를 운영하고 있습니다. 2020년 3월 기준 이사회 산하 위원회는 경영위원회의 경우 사내이사 3인, 감사위원회의 경우 사외이사 3인, 사외이사후보추천위원회의 경우 사외이사 3인으로 구성되어 운영되었습니다. 이사회가 경영진 견제기능을 실질적으로 행사할 수 있도록 이사회 내 사외이사비율을 과반 이상으로 구성하고, 이사회 내 위원회인 사외이사후보추천위원회, 감사위원회 모두 사외이사 과반 이상으로 구성하고 있습니다. 특히 감사위원회는 감사 위원장은 회계/재무 전문가이며, 감사위원회에 소비재 및 생활가전 산업전문가 1명과 법률 전문가 1명으로 구성하여 전문성을 높이고 있습니다. 
                    </p>

                    <p class="mb-5">2019년에는 총 13차에 걸쳐 이사회가 개최되었으며, 평균 이사 출석률은 98.9%입니다.</p>

                        <h7 class="mb-2 gray63 font-noto">2019 이사회 활동내역</h7>
                        <b-table-simple responsive class="txt-table parang-table font-noto fw-300 f-95 mb-5">
                            <b-thead>
                                <b-tr>
                                    <b-td>회차</b-td><b-td>안건</b-td><b-td>구분</b-td><b-td class="text-right">개최 일자</b-td><b-td class="text-right">출석/총원</b-td>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td>1차</b-td><b-td>2019년 연간 사업계획 및 예산의 수립 외 1건</b-td><b-td>임시</b-td><b-td class="text-right">2019.01.23</b-td><b-td class="text-right">7/7</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>2차</b-td><b-td>임시주주총회를 위한 주주명부 폐쇄 및 기준일 설정의 건</b-td><b-td>임시</b-td><b-td class="text-right">2019.01.31</b-td><b-td class="text-right">7/7</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>3차</b-td><b-td>제30기 정기주주총회 소집의 건 외 6건</b-td><b-td>정기</b-td><b-td class="text-right">2019.02.13</b-td><b-td class="text-right">7/7</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>4차</b-td><b-td>2019년 1차 임시주주총회 소집의 건 외 4건</b-td><b-td>임시</b-td><b-td class="text-right">2019.03.06</b-td><b-td class="text-right">6/7</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>5차</b-td><b-td>사외이사후보추천위원회 구성위원 선임의 건 외 2건</b-td><b-td>임시</b-td><b-td class="text-right">2019.03.29</b-td><b-td class="text-right">8/8</b-td>
                                </b-tr>   
                                <b-tr>
                                    <b-td>6차</b-td><b-td>2019년 1분기 배당 결정의 건 외 6건</b-td><b-td>정기</b-td><b-td class="text-right">2019.04.29</b-td><b-td class="text-right">8/8</b-td>
                                </b-tr> 
                                <b-tr>
                                    <b-td>7차</b-td><b-td>㈜웅진과의 렌탈사업 영업양수도 계약 체결의 건 외 1건</b-td><b-td>임시</b-td><b-td class="text-right">2019.05.17</b-td><b-td class="text-right">7/8</b-td>
                                </b-tr> 
                                <b-tr>
                                    <b-td>8차</b-td><b-td>분기배당을 위한 주주명부 기준일 결정의 건</b-td><b-td>임시</b-td><b-td class="text-right">2019.06.12</b-td><b-td class="text-right">8/8</b-td>
                                </b-tr>   
                                <b-tr>
                                    <b-td>9차</b-td><b-td>2019년 2분기 배당 결정의 건 외 5건</b-td><b-td>정기</b-td><b-td class="text-right">2019.07.29</b-td><b-td class="text-right">7/8</b-td>
                                </b-tr> 
                                <b-tr>
                                    <b-td>10차</b-td><b-td>신임 대표이사 선임의 건</b-td><b-td>임시</b-td><b-td class="text-right">2019.08.12</b-td><b-td class="text-right">8/8</b-td>
                                </b-tr> 
                                <b-tr>
                                    <b-td>11차</b-td><b-td>내부회계관리규정 개정 승인의 건 외 1건</b-td><b-td>임시</b-td><b-td class="text-right">2019.09.19</b-td><b-td class="text-right">7/8</b-td>
                                </b-tr> 
                                <b-tr>
                                    <b-td>12차</b-td><b-td>2019년 3분기 배당 결정의 건 외 3건</b-td><b-td>정기</b-td><b-td class="text-right">2019.10.28</b-td><b-td class="text-right">8/8</b-td>
                                </b-tr>  
                                <b-tr>
                                    <b-td>13차</b-td><b-td>임시주주총회를 위한 주주명부 폐쇄 및 기준일 설정의 건 외 2건</b-td><b-td>임시</b-td><b-td class="text-right">2019.12.30</b-td><b-td class="text-right">7/7</b-td>
                                </b-tr>                                                                                                                                                                                                                                                       
                            </b-tbody>
                        </b-table-simple>
                        <hr class="py-2">
                        <hj-img src="/images/79_1.svg" fluid></hj-img>

                    <hr class="py-3 mb-5">

                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="f2" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">성과평가와 보수 지급</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    <p> 동종업계 보수 수준을 고려한 합리적인 보수를 지급하여 우수한 전문가를 사외이사로 선임하고, 적극적인 직무 활동을 할 수 있도록 보장하고 있습니다. 사내이사는 이사회 결의에 따라 직무 및 직급, 근속기간, 리더십, 전문성, 회사 기여도 등을 고려하여 기본 보수를 책정하고, 정량지표과제 및 정성지표 과제 평가에 따라 종합점수를 산출하여 달성률을 평가하여 인센티브(상여)를 지급하고 있습니다.
                    </p>
                    <p class="mb-5">코웨이는 2019년 제30기 정기주주총회를 통해 이사에게 지급할 연간 보수 총액을 40억으로 승인하였으며, 2020년 제31기 정기주주총회에서 연간 보수 총액을 50억으로 상향하여 승인하였습니다.
                    </p>

                        <h7 class="mb-3 gray63">CEO-임직원 보수 비율</h7>
                        <b-table-simple responsive class="txt-table sustainability-table f-95">
                            <b-thead>
                                <b-tr>
                                    <b-td >구분</b-td><b-td class="text-right">보수액<span class="f-90"> (단위: 천 원)</span></b-td><b-td class="text-right">비율<span class="f-90"> (단위: %)</span></b-td>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td>최고 보수자(CEO) 보수액</b-td><b-td class="text-right">671,364<sup> 1)</sup></b-td><b-td rowspan="2" class="text-right">11.06</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>직원 보수 평균 보수액</b-td><b-td class="text-right">60,697</b-td>
                                </b-tr>
                                
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5">
                            <li> 2019년 10월까지 대표이사로 재직한 이해선 사장의 보수를 기준으로 하였습니다. 해당 사내이사는 임기만료 후 사업기술총괄 사장(미등기 임원)으로 재직한 바 있습니다. 공시금액은 미등기임원 재임분을 포함한 보수 총액 기준으로 산정되었으며, 2016년 부여된 주식매수선택권 행사이익을 제외한 금액입니다. 주식매수선택권 행사이익을 포함한 세부 내역은 사내이사 개인별 보수지급현황을 참조하시기 바랍니다.
                            </li>
                        </ol>


                        <h7 class="mb-3 gray63">사내이사 개인별 보수 지급 현황</h7>
                        <b-table-simple responsive class="txt-table sustainability-table fw-300 font-noto f-95 mb-5">
                            <b-thead>
                                <b-tr>
                                    <b-td>이름</b-td><b-td>총액(천원)</b-td><b-td colspan="2">산정기준 및 방법</b-td>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td rowspan="4">이해선</b-td><b-td>급여</b-td><b-td style="width: 12%">411,364</b-td><b-td>직무 · 직급(대표이사), 근속기간, 리더십, 전문성, 회사기여도 등을 종합적으로 반영</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>상여</b-td><b-td>260,000</b-td><b-td>성장성, 수익성, 안정성 등으로 구성된 정량 KPI와 해당 년도 전략과제로 구성된 정성 KPI를 종합평가표에 의거하여 평가하여 종합점수를 산출함. 2018년은 당사 매출액이 연결기준 2017년 2조 5168억에서 2018년  2조 7073억으로 7.6% 증가한 점, 당기순이익이 2017년 3,256억에서 2017년 3,499억으로 7.4% 증가한 점 등을 고려함. 또한 신제품군 출시를 통한 성장 동력을 확보한 점, 해외사업 진출을 위한 기반을 마련한 점 등의 정성 및 전략 지표를 고려하여 총 급여의 65% 수준인 2.6억원을 산출·지급 하였음</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>주식매수선택권 행사이익</b-td><b-td>2,460,285</b-td><b-td>주주총회 결의로 부여받은 주식매수선택권의 행사가격(92,640원)과 최대주주변경에 따른 주식매수선택권 부여계약서상 특칙에 의거하여 (주당) 경영권 변동거래의 매각가격(102,891원)과의 차이에 행사수량(240,000주)을 곱하여 2,460,285천원을 산출하였음</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>비고</b-td><b-td colspan="2" class="text-right">- 기타근로소득, 퇴직소득 및 기타소득 해당사항 없음</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td rowspan="3">안지용</b-td><b-td>급여</b-td><b-td>260,203</b-td><b-td>이사회 결의에 따라 직무 · 직급(본부장), 근속기간, 리더십, 전문성, 회사기여도 등을 종합적으로 반영하여 연간 급여총액을 245,440,000원으로 책정하고, 2019년 8월 승진 및 의사회 결의에 따라 직급(대표이사)를 고려해 연간 급여총액을 400,000,000원으로 인상 지급함. 본부장 직급기간 월 500,000원 및 복리후생 및 기타 세액반영액을 연간 6,518,156원을 지급함. 
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>상여</b-td><b-td>1,500,000</b-td><b-td>경영관리본부 및 마케팅본부 최고 책임자로서, 임원선임계약상 회사의 경영/재무/마케팅 목표달성을 위한 주요 검토, 의사결정, 책임을 부담함에 따라 의사회 결의를 통해 1,500,000,000원을 지급함                                        
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>비고</b-td><b-td colspan="2" class="text-right">- 주식매수선택권 행사이익, 기타근로소득, 퇴직소득 및 기타소득 해당사항 없음</b-td>
                                </b-tr>

                            </b-tbody>
                        </b-table-simple>

                        <h7 class="mb-3 gray63">등기임원 및 미등기임원 주식매수선택권 부여 내역</h7>
                        <b-table-simple responsive class="num-table sustainability-table fw-300 font-noto f-95">
                            <b-thead>
                                <b-tr>
                                    <b-td class="text-left">부여 받은자</b-td><b-td class="text-left">관계</b-td><b-td class="text-center">부여일</b-td><b-td class="text-center">주식의 종류</b-td><b-td>부여</b-td><b-td>행사</b-td><b-td>취소</b-td><b-td>미행사수량</b-td><b-td>행사기간</b-td>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">안진혁 외 1명</b-td><b-td class="text-left">미등기 임원</b-td><b-td class="text-center">2017.03</b-td><b-td class="text-center">보통주</b-td><b-td>87,000</b-td><b-td>0</b-td><b-td>46,980</b-td><b-td>40,020</b-td><b-td>2019.03 ~ 2026.03</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">이재호 외 21명</b-td><b-td class="text-left">미등기 임원</b-td><b-td class="text-center">2017.04</b-td><b-td class="text-center">보통주</b-td><b-td>216,792</b-td><b-td>0</b-td><b-td>206,122</b-td><b-td>10,850</b-td><b-td>2019.04 ~ 2026.04</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">박재영 외 5명</b-td><b-td class="text-left">미등기 임원</b-td><b-td class="text-center">2018.03</b-td><b-td class="text-center">보통주</b-td><b-td>104,400</b-td><b-td>-</b-td><b-td>33,060</b-td><b-td>71,340</b-td><b-td>2020.03 ~ 2027.03</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">송현주 외 1명</b-td><b-td class="text-left">미등기 임원</b-td><b-td class="text-center">2019.03</b-td><b-td class="text-center">보통주</b-td><b-td>69,600</b-td><b-td>-</b-td><b-td>-</b-td><b-td>69,600</b-td><b-td>2021.03 ~ 2028.03</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <p class="f-80 ml-1 mb-5">
                            *표기기간: 2017년 1월 1일 ~ 2019년 12월 31일
                        </p>
                    <hr class="py-3">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="f3" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">소유구조 및 의결권</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    <p> 2019년 말 기준 코웨이의 주주는 웅진씽크빅 25.08%, 국민연금 8.08%, 자사주 2.14%, 외국인 58.87%, 기타 5.83%로 구성되어 있었으나, 2019년 12월 말 체결한 주식매매계약 등에 따라 2020년 2월 7일 웅진씽크빅이 소유하고 있던 18,511,446주(지분율 25.08%)를 ㈜넷마블에 매도하는 거래를 종결하였습니다. 이에 따라 2020년 2월 11일 이후 대주주가 넷마블㈜로 변경되었습니다. 
                    </p>

                    <p class="mb-5">코웨이의 총 발행주식 수는 73,799,619주이며, 우선주 없이 100% 보통주로 구성되어 있습니다. 코웨이는 1주당 1의결권 원칙을 따르고 있으며, 특정 주식에 복수 의결권을 부여하는 차등의결권제도를 두고 있지 않습니다. 단, 자사주로 보유하고 있는 자사주의 경우 상법에 따라 의결권이 제한되어 있습니다. 2019년 12월 말 기준 의결권이 부여된 주식은 72,218,395주(전체 발행 주식의 97.85%)입니다. 코웨이는 서면투표제나 전자투표제를 도입하고 있지 않습니다. 
                    </p>

                        <h7 class="mb-2 gray63">주주현황</h7>
                        <hj-img src="/images/80_1.svg" fluid></hj-img>
                        <hr class="mb-4">
                    
                        <h7 class="mb-3 gray63">의결권 현황 *</h7>
                        <b-table-simple responsive class="num-table sustainability-table fw-300 f-95">
                            <b-thead>
                                <b-tr>
                                    <b-td class="text-left">구분</b-td><b-td>주식 수</b-td><b-td>비율</b-td><b-td class="text-left">비고</b-td>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">우선주</b-td><b-td>0</b-td><b-td>0%</b-td><b-td class="text-left">의결권 없음</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">보통주 - 의결권 있는 주식</b-td><b-td>72,218,395</b-td><b-td>97.85%</b-td><b-td class="text-left">의결권 있음</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">보통주 - 자기주식</b-td><b-td>1,581,224</b-td><b-td>2.14%</b-td><b-td class="text-left">의결권 있음</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">합계</b-td><b-td>73,799,619</b-td><b-td>100%</b-td><b-td class="text-left">-</b-td>
                                </b-tr>                                                                
                            </b-tbody>
                        </b-table-simple>
                        <p class="f-80 ml-1">
                            *2019년 12월 말 기준임
                        </p>   
                </section> 
                <!-- End of DMA-->

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
            return this.is_ENG? 'Corporate Governance' : '지배구조'
        },
        sub_titles(){
            let temp = [
                { 
                    title: this.is_ENG? 'Responsible Management Centered on the Board of  Directors(BoD)' : '이사회 중심의 책임경영 수행', 
                    hash: 'f1',
                    child: [
                        { title: this.is_ENG? 'Current Status of the BoD' : '이사회 구성현황', hash: 'f1-1' }, 
                        { title: this.is_ENG? 'Independence and Expertise of the BoD': '이사회의 독립성 및 전문성', hash: 'f1-2' }, 
                        { title: this.is_ENG? 'Committees under the BoD': '이사회 산하 위원회 운영', hash: 'f1-3' }
                    ]
                },
                { 
                    title: this.is_ENG? 'Performance Evaluation and Renumeration':'성과평가와 보수 지급',
                    hash: 'f2'
                },
                { 
                    title: this.is_ENG? 'Ownership Structure and Voting Rights':'소유구조 및 의결권',
                    hash: 'f3'
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
    },
}
</script>
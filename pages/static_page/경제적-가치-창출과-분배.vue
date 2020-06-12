<template>
<div class="position-relative page-top-bg min-vh-100">   
    <logger title="경제적 가치 창출과 분배"></logger>

    <b-img src="@/assets/images/사각형17.png" fluid class="page-top-img"></b-img>

    <b-container class="">
        <b-row class="my-5 pt-md-5">
            <h1 class="mt-2 mt-lg-5 mb-3 text-center w-100 fw-400">CARE FOR SUSTAINABILITY</h1>
            <h7 class="mb-lg-5 text-center w-100 fw-400"> dummy text 환경을 건강하게 사람을 행복하게, 내일을 디자인하는 그린 글로벌 리더 </h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 side-nav position-relative">
                <side-navigation 
                :main_title="'경제적 가치 창출과 분배'"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#8e6627'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0">
                <section class="bg-white px-4 py-4 mb-5">
                    <div class="border-top-dark pb-2 mb-5"></div>
                    <h4-ancor :title="'경제적 가치 창출과 분배'" :activated="activated" class="blue9 mb-4 mb-sm-5 mt-m-2">경제적 가치 창출과 분배</h4-ancor>

                    <div class="d-flex mb-2 position-relative"> <h6-ancor :title="'경제적 가치 창출'" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">경제적 가치 창출</h6-ancor></div>
                    <p>지난 10년 간 한 해도 빠짐없이 꾸준한 성장을 이어온 코웨이는 2019년에도 지속적인 매출 성장세를 기록하며, 전년대비 11.5% 증가한 3조 189억 원의 사상최대 매출을 달성하였습니다. 국내 환경가전 사업 매출은 2조 1,112억 원으로, 세부 매출은 1. 렌탈 판매, 2. 일시불 판매, 3. 멤버십 프로그램으로 구성됩니다. 2019년 기준 총 관리계정은 628만으로 전년 590만 계정 대비 6.5% 증가하였습니다. 
                    </p>
                    <p>렌탈 판매량 또한 전년 145만 대에서 2019년 157만대로 전년대비 8.4% 증가하였으며, 기존제품 및 신규제품 판매 성장 영향으로 최대 판매를 달성하였습니다. 청정기의 판매 호조와 매트리스 등 신규 제품군의 판매가 확대되었습니다. 
                    </p>
                    <p>고객 해약률 또한 1.01%로 장기적 감소추세에 있으며, 렌탈 자산폐기 또한 매출대비 2.5%로 손실을 최소화하고 있습니다. 
                    </p>

                        <h7 class="mb-2 gray63">코웨이 매출 및 영업이익 추이(2010-2019)</h7>
                        <div style="border-width:0.1px; border-style:dotted; border-color:gray mb-45" class="my-3 p-3">매출 및 영업이익 그래프</div>
                    
                        <h7 class="mb-2 gray63">렌탈 계정현황</h7>
                        <div style="border-width:0.1px; border-style:dotted; border-color:gray mb-45" class="my-3 p-3">렌탈 계정현황 그래프</div>
                    
                    <h6-ancor :title="'해외 사업의 꾸준한 확대'" :activated="activated" class="blue6 fw-500 mb-2">해외 사업의 꾸준한 확대</h6-ancor>
                    <p>2019년 해외사업 매출은 7,491억 원으로 전년대비 37.7% 성장하였습니다. 말레이시아 및 미국법인의 매출이 큰 폭으로 증가하며 해외법인은 고성장을 지속하고 있습니다. 주요 법인별로는 말레이시아 법인의 매출이 전년 3,534억 원 대비 48.9% 증가하여 5,263억 원을 달성하였으며, 관리계정은 2018년 97만 6,000계정에서 135만 4,000 계정으로 38.8% 증가하였습니다. 미국 또한 전년 805억 원 대비 20.9% 성장한 973억 원의 매출, 11만 4,000계정에서 4.7% 증가한 12만 계정을 달성하며 견조한 성장세를 유지하고 있습니다. 
                    </p>

                        <h7 class="mb-2 gray63">제품별 수출 비중</h7>
                        <div style="border-width:0.1px; border-style:dotted; border-color:gray mb-45" class="my-3 p-3">제품별 수출 비중 그래프</div>
                    
                        <h7 class="mb-2 gray63">해외법인 관리계정</h7>
                        <div style="border-width:0.1px; border-style:dotted; border-color:gray mb-45" class="my-3 p-3">해외법인 관리계정 그래프</div>
                    
                    <h6-ancor :title="'넷마블 인수에 따른 구독경제 시너지 확대'" :activated="activated" class="blue6 fw-500 mb-2">넷마블 인수에 따른 구독경제 시너지 확대</h6-ancor>
                    <p>2020년 2월 ㈜넷마블이 코웨이 주식 25.08%를 인수하며 최대 주주가 되었습니다. 넷마블의 코웨이 경영권 매입은 중장기적으로는 넷마블이 게임사업에서 확보한 빅데이터 운영 노하우를 코웨이 제품에 접목할 수 있는 가능성을 열어줍니다. 렌탈산업은 정수기 등 품목에서 경쟁이 심화되고 있으며, 렌탈 품목의 다변화와 함께 데이터 산업과의 결합을 통한 스마트홈 구독경제 등 새로운 가치를 창출할 수 있을 것으로 기대됩니다. 
                    </p>

                    <div class="d-flex mb-3 position-relative"> <h6-ancor :title="'경제적 가치 분배'" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">경제적 가치 분배</h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                    <p>코웨이는 2019년 연결기준 3조 189억 원의 매출액과 기타수익 및 금융수익을 합해 총 3조 683억 원의 경제적 가치를 창출하였습니다. 창출된 가치 중 3조 7억 원을 기업의 미래가치와 투자 효율성을 고려하여 이해관계자들에게 합리적으로 배분하였으며, 모든 배분을 마치고 유보된 총 675억 원의 경제적 가치를 자본 총계로 가산하였습니다. 한편 코웨이는 2019년 연구인력 개발비 투자, 생산성 향상 투자 등으로 정부로부터 약 XX원의 세액을 공제 받았습니다. 
                    </p>

                    <div class="d-flex mb-3 position-relative"> <h6-ancor :title="'조세 정책'" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">조세 정책</h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                    <p>코웨이는 합리적 조세전략을 바탕으로 세무 신고 및 납부 의무를 성실히 이행하고 있습니다. 코웨이의 조세정보는 금융감독원 공시 시스템(http://dart.fss.or.kr/)내 정기 공시를 통해 투명하게 공개되고 있습니다. 감사보고서상 재무제표 및 주석사항에서는 법인세비용 산출 기준, 이연법인세 자산 및 부채, 법인세비용 구성내역 및 세율 등을 확인할 수 있으며 외부감사를 통해 그 투명성과 객관성을 확보하고 있습니다. 국내뿐 아니라 해외에서도 법인이 가지는 납세의무를 성실히 이행하며 정부의 세수 및 공공 서비스 증대 등 선순환 구조 창출에 기여하고 있습니다. 
                    </p>

                        <div>
                            <li> 조세 관련 신고와 납세에 대한 정책을 보유하고 이를 준수한다.</li>
                            <li> 사업장이 위치한 국가의 세법 및 규제를 준수하며,</li>
                            <li> 조세관할권이 낮은 지역으로의 가치 이전을 금지하며,</li>
                            <li> 조세회피를 위한 조세구조 사용을 지양하며,</li>
                            <li> 이전 가격을 비롯해 비밀관할권, ”조세피난처”를 사용하지 않는다.</li>
                            <li> 이사회는 외환위험, 이자율위험, 신용위험, 파생금융상품과 비파생금융상품의 이용 및 유동성을 초과하는 투자 등 특정 분야에 관한 문서화된 정책뿐 아니라, 전반적인 리스크 관리를 위한 문서화된 정책을 제공한다.</li>
                            <li> 법인세 관련 정보는 금융감독원의 전자공시시스템에 공시되는 감사보고서와 지속가능경영 보고서를 통해 공개한다.</li>
                        </div>
                    
                    <p>코웨이는 조세 관련 규정 및 세제정책 등의 변화를 지속적으로 모니터링하여 조세 관련 리스크를 선제적으로 파악·관리하고 있습니다. 리스크 관리는 이사회에서 승인한 정책에 따라 자금부서에서 진행됩니다. 자금부서는 연결기업의 현업부서들과 긴밀히 협력하여 재무위험을 식별, 평가 및 상쇄하고 있습니다. 이사회는 외환위험, 이자율위험, 신용위험, 파생금융상품과 비파생금융상품의 이용 및 유동성을 초과하는 투자 등 특정 분야에 관한 문서화된 정책뿐 아니라, 전반적인 리스크 관리를 위한 문서화된 정책을 제공합니다. 한편 최근 국세청이 국제거래와 관련한 조세의 성실신고를 장려함에 따라 코웨이는 이러한 세제정책에 맞춰 조세 정보를 보고하고 있습니다. 특히, 조세피난처를 이용해 탈세하는 역외탈세와 국제거래 이용탈세를 원칙적으로 금지하고 있습니다. 코웨이는 말레이시아, 미국, 중국 등에 지점 또는 현지법인을 보유하고 있으며, 해외법인과의 국제 거래 시 해당국 세법 및 OECD 이전가격 가이드라인을 준수하고 현지법을 기준으로 납세 의무를 다하고 있습니다.
                    </p>

                    <h6-ancor :title="'조세 납부 현황 및 유효세율 보고'" :activated="activated" class="blue6 fw-500 mb-2">조세 납부 현황 및 유효세율 보고</h6-ancor>

                        <h7 class="mb-2 gray63">지역별 조세 납부(단위: 천원)</h7>
                        <b-table-simple responsive class="num-table f-95">
                             <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td><b-td>단위</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">아시아</b-td><b-td>9,815,520</b-td><b-td></b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">미주</b-td><b-td>222,997</b-td><b-td></b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                        <h7 class="mb-2 gray63">지역별 조세 납부(단위: 천원)</h7>
                        <b-table-simple responsive class="num-table f-95">
                             <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td><b-td>단위</b-td><b-td>2019</b-td>
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
                        <p class="f-80 ml-1">
                            1) 법인세부담액: 당기법인세<br>
                            2) 이연법인세: 회계이익과 과세소득의 일시적 차이로 인해 세금을 이연하는 것으로 예상 법인세 효과<br>
                            3) 법인세비용 = 당기법인세 + 이연법인세<br>
                            4) 법인세 부담액 / 법인세비용차감전 순이익<br>
                            5) 법인세 비용 / 법인세비용차감전 순이익<br>
                        </p>                            
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
            title: '경제적 가치 창출과 분배',
            activated: [],
            sub_titles: [
                { 
                    title: '경제적 가치 창출', 
                    child: [
                        { title: '해외 사업의 꾸준한 확대' }, 
                        { title: '넷마블 인수에 따른 구독경제 시너지 확대' }
                    ]
                },
                { 
                    title: '경제적 가치 분배' 
                },
                { 
                    title: '조세 정책',
                    child: [
                        { title: '조세 납부 현황 및 유효세율 보고' }
                    ]
                }
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
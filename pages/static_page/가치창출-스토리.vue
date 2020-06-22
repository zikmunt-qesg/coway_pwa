<template>
<div class="position-relative page-top-bg-sus min-vh-100">   
    <logger title="가치창출 스토리"></logger>
    <!-- <b-img src="/images/500.png" fluid class="page-top-img"></b-img> -->
    <div class="w-100 position-absolute bg-white" style="height:95%; top:600px; z-index:-1"></div>

    <b-container class="">
        <b-row class="pt-md-5 px-3">
            <h1 class="mt-5 mb-3 pt-3 text-center w-100 fw-400">CARE FOR SUSTAINABILITY</h1>
            <h7 class="mb-5 text-center w-100 fw-400"> 더 나은 세상을 향한 착한 믿음의 실천, 코웨이 지속가능경영 비전 </h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="'가치창출 스토리'"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#5171b1'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0">
                <section class="bg-white px-4 py-4 mb-5">
                    <div class="border-top-dark pb-2 mb-5"></div>
                    <h4-ancor :title="'가치창출 스토리'" :activated="activated" class="parang8 mb-4 mb-sm-5 mt-m-2">가치창출 스토리</h4-ancor>

                    <div class="d-flex mb-2 position-relative"> <h6-ancor :title="'비즈니스 모델'" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">비즈니스 모델</h6-ancor></div>
                    <p>1989년 설립된 코웨이는 생활환경 전반을 케어하는 라이프케어 기업으로, 제품 렌탈에 전문적 서비스를 결합한 차별화된 비즈니스 모델을 가지고 있습니다. 환경가전제품을 초기 구입 비용에 대한 부담 없이 렌탈하고, 정기적인 케어(Care) 서비스를 통해 제품의 가치를 지속적으로 유지할 수 있는 구조를 마련하였으며, 이를 기반으로 국내외 780만 계정의 고객을 확보하여 지속성장을 위한 동력으로 삼고, 안정적인 현금흐름을 창출하고 있습니다. 
                    </p>
                    <p class="mb-5">코웨이만의 핵심 역량인 '케어(Care)'의 가치를 확장하여 워터케어, 에어케어, 바디케어, 슬립케어, 홈케어 제품을 제공하여, 고객이 물과 공기, 수면을 포함한 모든 생활환경을 안심하며 누릴 수 있도록 노력하고 있습니다. 또한 제품에 IoT 기술을 결합하여 새로운 맞춤형 솔루션인 'IoCare(Internet of Care)'를 개발하여 본연의 경쟁력을 강화하는 한편, 신규 제품 라인업 강화, 자가관리형 제품 출시 등으로 신규 고객층을 새롭게 창출하여 지속성장의 동력으로 발전시킵니다. 코웨이는 이러한 차별화된 혁신의 DNA를 바탕으로 이해관계자에 대한 지속적인 가치 창출과 배분을 위해 끊임없이 노력하고 있습니다.
                    </p>

                    <div class="d-flex mb-2 position-relative"> <h6-ancor :title="'비즈니스 밸류체인'" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">비즈니스 밸류체인</h6-ancor></div>
                    <p class="mb-45">코웨이의 제품 및 브랜드는 궁극적으로 ‘환경을 건강하게, 사람을 행복하게’ 만들기 위한 가치를 창출하는 데 목표를 두고 있습니다. 특히, 자재 및 부품 공급부터 제품 판매에 이르기까지 전 공급망에서 지속가능경영 관점으로 경제/사회/환경적 가치를 투입(INPUT)해 행복한 고객, 건강한 환경을 구현하며 사회적 가치를 창출(OUTPUT)하고 있습니다. 
                    </p>
                    <hj-img src="/images/1_1.svg" fluid class="w-100"></hj-img>

                    <hr class="mb-3">
                        <h7 class="mb-3 gray63">통합 자본표</h7>
                        <b-table-simple responsive class="num-table sustainability-table f-95">
                             <b-thead><b-tr>
                                <b-td class="text-left" colspan="4">구분</b-td><b-td>단위</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left" rowspan="4">Financial Capital</b-td><b-td class="text-left" rowspan="2">가치 투입</b-td><b-td colspan="2" class="text-left">자본 총계</b-td><b-td class="text-left">억 원</b-td><b-td>10,772</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" colspan="2">자산</b-td><b-td class="text-left">억 원</b-td><b-td>28,550</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="2">가치 창출</b-td><b-td class="text-left" colspan="2">매출액</b-td><b-td class="text-left">억 원</b-td><b-td>30,189</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" colspan="2">영업 이익</b-td><b-td class="text-left">억 원</b-td><b-td>4,587</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="3">Manufactured Capital</b-td><b-td class="text-left">가치 투입</b-td><b-td class="text-left" colspan="2">환경가전 원재료 구입 비용</b-td><b-td class="text-left">억 원</b-td><b-td>4,096</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="2">가치 창출</b-td><b-td class="text-left" colspan="2">제품 생산량<sup>1)</sup></b-td><b-td class="text-left">천 대</b-td><b-td>24,661</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" colspan="2">평균 가동률<sup>2)</sup></b-td><b-td class="text-left">%</b-td><b-td>72.0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="3">Human Capital</b-td><b-td class="text-left" rowspan="2">가치 투입</b-td><b-td class="text-left" colspan="2">교육훈련 비용</b-td><b-td class="text-left">억 원</b-td><b-td>114</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" colspan="2">임직원 총 교육시간</b-td><b-td class="text-left">시간</b-td><b-td>109,735</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">가치 창출</b-td><b-td class="text-left" colspan="2">인당 생산성<sup>4)</sup></b-td><b-td class="text-left">백만 원 /명</b-td><b-td>605</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="5">Intellectual Capital</b-td><b-td class="text-left" rowspan="2">가치 투입</b-td><b-td class="text-left" colspan="2">연구개발비</b-td><b-td class="text-left">백만 원</b-td><b-td>37,671</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" colspan="2">연구개발 인력</b-td><b-td class="text-left">명</b-td><b-td>366</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="3">가치 창출</b-td><b-td rowspan="3" class="text-left">지적재산권</b-td><b-td class="text-left">특허&amp;실용</b-td><b-td class="text-left">건</b-td><b-td>1,117</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">상표</b-td><b-td class="text-left">건</b-td><b-td>3,124</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">디자인</b-td><b-td class="text-left">건</b-td><b-td>785</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="4">Social Capital</b-td><b-td class="text-left" rowspan="2">가치 투입</b-td><b-td colspan="2" class="text-left">봉사 임직원 수</b-td><b-td class="text-left">명</b-td><b-td>1,586</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" colspan="2">사회공헌 기부금</b-td><b-td class="text-left">백만 원</b-td><b-td>884</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="2">가치 창출</b-td><b-td class="text-left" colspan="2">인당 사회봉사활동 참여 시간</b-td><b-td class="text-left">시간</b-td><b-td>22.1</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" colspan="2">협력사 기술보호 및 임치 성과</b-td><b-td class="text-left">건</b-td><b-td>6</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="5">Natural Capital</b-td><b-td class="text-left" rowspan="3">가치 투입</b-td><b-td colspan="2" class="text-left">친환경 투자비<sup>5)</sup></b-td><b-td class="text-left">백만 원</b-td><b-td>1,502</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" colspan="2">원자재 사용량</b-td><b-td class="text-left">Ton</b-td><b-td>17,670</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" colspan="2">에너지 사용량</b-td><b-td class="text-left">Gj</b-td><b-td>118,020</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" rowspan="2">가치 창출</b-td><b-td class="text-left" colspan="2">에너지 배출량 원단위</b-td><b-td class="text-left">tCO2eq/매출액(억원)</b-td><b-td>0.223</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left" colspan="2">폐기물 재활용량</b-td><b-td class="text-left">ton</b-td><b-td>23,432</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <p class="f-80 ml-1 gray55">
                            1) 제품 생산량: 제품 생산량 + 필터 생산량<br>
                            2) 평균 가동률: 실제 생산량 / 최대 생산능력 X 100<br>
                            3) 임직원 총 교육시간: 교육훈련 비용은 전체 임직원 수로 집계되어 있습니다. (사업보고서 기준) 총 교육시간 및 1인당 교육시간은 영업직 제외 기준입니다.<br>
                            4) 인당 생산성: 매출액 / 19년 말 12개월 기준 임직원 수<br>
                            5) 친환경 투자비: 친환경 연구개발 비용은 제외<br>
                        </p>
                </section>
                <hr class="space-p75 mb-5">

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
            title: '가치창출 스토리',
            activated: [],
            sub_titles: [
                { 
                    title: '비즈니스 모델'
                },
                { 
                    title: '비즈니스 밸류체인' 
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
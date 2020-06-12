<template>
<div class="position-relative page-top-bg min-vh-100">   
    <logger title="기후변화 대응"></logger>
    <b-img src="@/assets/images/500.png" fluid class="page-top-img"></b-img>

    <b-container class="">
        <b-row class="my-5 pt-md-5">
            <h1 class="mt-2 mt-lg-5 mb-3 text-center w-100 fw-400">CARE FOR ENVIRONMENT</h1>
            <h7 class="mb-lg-5 text-center w-100 fw-400"> dummy text 환경을 건강하게 사람을 행복하게, 내일을 디자인하는 그린 글로벌 리더 </h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 side-nav position-relative">
                <side-navigation 
                :main_title="'기후변화 대응'"
                :sub_titles="sub_titles"
                :activated="activated"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0">
                <section class="bg-blue-gray1 px-6 py-4 mb-5">
                    <div class="border-top-bottom-bold">
                        <b-row no-gutters class="py-4 px-2 px-lg-3">
                            <b-col class="col-12 col-sm-6 mb-5 mb-sm-0 pr-sm-4 dma-title">
                                <h1 class="mt-m-2">3.</h1>
                                <h4 class="mb-4 mb-sm-5">기후변화 대응</h4>
                                <div class="temp-icon1"></div>
                            </b-col>
                            <b-col class="col-12 col-sm-6 pl-sm-2">
                                <h5 class="dma-title mb-45">Business relevance & Approach</h5>
                                <p> 2030년까지 전세계 온실가스 배출량을 5억 3,600만 톤으로 감축하는 제2차 기후변화대응 기본계획이 확정되었습니다. 한국은 배출권거래제를 통한 온실가스 배출기업의 책임을 더욱 더 강화하고 있습니다.</p>
                                <p> 2030 국가 온실가스 감축 로드맵에 따르면 현재 3%의 배출권 유상할당 비율이 2025년까지 10% 이상으로 확대되며, 감축 효율이 좋은 기업이 상대적으로 더 많은 배출권을 할당 받는 인센티브 또한 늘어날 것으로 보입니다. 이러한 제도적 변화는 기업의 온실가스 배출이 불확실성이나 단순한 규제 위험이 아니라, 재무적 성과에도 직접적 영향을 미치는 제도적 요인이자 관리 가능한 위험으로 전환하고 있다는 것을 의미합니다.</p>
                                <p> 코웨이는 고객 생활환경을 개선하는 제품과 서비스를 제공하는 기업으로서, 국가와 사회의 온실가스 감축 및 기후변화 적응을 적극 지원하고자 합니다. 이를 위해 기후 시나리오 분석과 이에 따른 명확한 온실가스 감축 목표의 설정, 사업장 에너지 고효율화 및 냉매에 의한 배출 저감 등을 적극 실행하겠습니다 . </p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="py-4 px-2 px-lg-3  border-top-bold">
                            <h5 class="dma-title mb-3 w-100">Activity</h5>
                            <b-col class="col-6 col-md-6 text-center">
                                <div class="temp-icon2 mx-auto mb-3"></div><p class="fw-500">기후변화 대응 중장기 목표치 재산정</p>
                            </b-col>
                            <b-col class="col-6 col-md-6 text-center">
                                <div class="temp-icon2 mx-auto mb-3"></div><p class="fw-500">과학기반 감축 방법론(SBT, Science Based Target) 추진</p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="py-4 px-2 px-lg-3  border-top-bold">
                            <b-col class="col-12 col-sm-5 pr-sm-4 mb-4 mb-sm-0 border-right-bold">
                                <h5 class="dma-title mb-3 w-100">Business Cases</h5>
                                <b-row no-gutters> 
                                    <b-col class="col-6 text-center"><div class="temp-icon2 mx-auto mb-3"></div><p class="fw-500">협력사 공급망의 자발적 탄소 감축</p></b-col>
                                    <b-col class="col-6 text-center"><div class="temp-icon2 mx-auto mb-3"></div><p class="fw-500">CDP(Carbon Disclosure Project) 등 국제 이니셔티브 적극 참여</p></b-col>
                                </b-row>
                            </b-col>
                            <b-col class="col-12 col-sm-7 pl-sm-4">
                                <h5 class="dma-title mb-3 w-100">Performance</h5>
                                <b-row no-gutters class="align-items-center"> 
                                    <b-col class="col-7">
                                        <p class="fw-500">2010년 대비 2020년 매출액당 온실가스 배출량(원단위) <span class="f-120">50% 감축 </span></p>
                                        <p class="fw-500">물류센터 <span class="f-120">신재생에너지(태양광) 1차 구축</span> 실행</p>
                                    </b-col>
                                    <b-col class="col-5"><div class="temp-icon3 mx-auto mb-3"></div></b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </div>
                </section>
                <section class="mb-5">
                    <h6-ancor :title="'기후변화 목표 및 시나리오 관리'" :activated="activated" class="dma-title mb-3">기후변화 목표 및 시나리오 관리</h6-ancor>
                        <p> 코웨이는 기후변화와 지구환경의 변화가 기업의 경영활동에 중요한 영향을 미친다는 것을 인식하고 2006년 환경경영을 선포하였습니다.
                        </p>
                        <p> 코웨이는 2009년 온실가스 인벤토리 구축을 시작으로 2010년대비 2020까지의 온실가스 배출량 원단위(배출량/매출액)를 50%까지 저감하는 중장기 목표를 수립하여 감축 활동을 진행해 왔습니다. 2010년 온실가스 배출량 5,356톤CO2e, 원단위 0.357톤CO2e/억원 대비 2019년 5,935톤CO2e, 원단위 0.234톤CO2e/억원으로 온실가스 배출량은 10.81% 증가하였으나, 매출 증가 대비 온실가스 배출량을 최대한 억제하여 원단위는 목표 대비 약 70% 저감*하는 효과가 있었습니다. 
                        </p>
                        <p class="f-90"> * 2010년과 동일하게 내부 배출량 산정 기준 적용 시, 온실가스 배출량 4.13% 증가, 원단위 약 77% 저감함
                        </p>
                        <div class="bg-gray2 w-100 mb-4" style="height:250px;"> 그래프 </div>
                        <p> 코웨이는 사업장의 온실가스 저감 활동과 기업 운영 효율화를 통해 에너지를 효율적으로 사용하고 있습니다. 신∙재생에너지인 태양광 발전의 지속적인 도입 확대를 기반으로 에너지 효율화를 극대화하고 있습니다. 코웨이는 유구공장(49.5KWh 규모), 인천공장(39KWh), 포천공장(45KWh 규모) 및 물류센터(48.8KWh 규모)에 태양광 발전을 설치하여 운영하고 있습니다. 이를 통해 3공장 및 물류센터에서 2019년 약 237MW의 전력을 생산, 자체 소비하여 온실가스 약 110톤을 저감하는 효과가 있었습니다. 
                        </p>
                        <p> 유구공장에 도입된 에너지저장장치(ESS, Energy Storage System)는 Peak 부하를 감소시키고, 에너지 사용량 분산에 기여하고 있습니다. 또한 에너지 비용 절감 효과가 있어 2019년 약 1.2억원의 비용을 절감하였습니다. 유구공장과 물류센터에 도입된 LED 조명은 작업장 근로환경 개선과 함께 물류센터 기준 2019년 약 0.65억원 이상의 에너지 비용이 절감되었으며, 온실가스 약 264톤 을 저감하는 효과가 있었습니다.
                        </p>
                    <hr class="space-p25">
                    <h6-ancor :title="'과학적 감축 목표(Science Based Target) 계획 도입'" :activated="activated" class="fw-500 mb-45">과학적 감축 목표(Science Based Target) 계획 도입</h6-ancor>
                        <p> 코웨이는 2020년 이후, 신기후변화체제에 대응하기 위해 온실가스 감축 목표를 과학적 감축 목표 계획 [SBT, Science Based Target]에 근거하여 2030년, 및 2050년까지의 목표를 수립하고 있습니다. 에너지의 대부분을 전력에 의존하고 있어 신·재생에너지의 지속 설치, 구매 및 감축량 구매 등, 실질적인 감축이 이루어질 수 있는 방향으로 목표를 수립 중에 있습니다. 이를 위해 온실가스 배출량 산정 기준을 자사 내부 기준에서 대한민국 에너지·온실가스 목표관리제 기준으로 산정 기준을 변경하여 최근 3년간 온실가스 배출량을 재산정 하였습니다. 최근 3년간 온실가스 배출량에 대한 외부 검증이 완료되는 시점에서 2030년 및 2050년 온실가스 감축 목표를 최종 확정하여 공개할 예정입니다. 
                        </p>
                </section>
                <section class="mb-5">
                    <h6-ancor :title="'기후변화의 위험과 기회 분석'" :activated="activated" class="dma-title mb-3">기후변화의 위험과 기회 분석</h6-ancor>
                        <p> 코웨이는 기후변화와 지구환경의 변화가 기업의 경영활동에 중요한 영향을 미친다는 것을 인식하고 2006년 환경경영을 선포하였습니다.
                        </p>
                    <h6-ancor :title="'기후변화에 따른 잠재 위험 분석'" :activated="activated" class="fw-500 mb-3">기후변화에 따른 잠재 위험 분석</h6-ancor>
                        <p class="bg-gray3" style="height:500px;"> TEXT TABLE 자리
                        </p>
                    <h6-ancor :title="'기후변화에 따른 잠재 기회 분석'" :activated="activated" class="fw-500 mb-3">기후변화에 따른 잠재 기회 분석</h6-ancor>
                        <p class="bg-gray3" style="height:500px;"> TEXT TABLE 자리
                        </p>
                </section>
                <section class="mb-5">
                    <h6-ancor :title="'협력사 탄소 파트너십'" :activated="activated" class="dma-title mb-3">협력사 탄소 파트너십</h6-ancor>
                        <p> 코웨이의 탄소파트너 협력사들도 2010년 대비 2020년까지 온실가스 원단위 50% 저감이라는 목표를 가지고 감축 활동을 진행해 왔습니다. 코웨이는 탄소파트너십 협력사들을 지속적으로 지원하여 협력사들의 매출 증가 대비 에너지 사용량을 최대한 억제하여 탄소파트너 협력사들의 에너지 경쟁력을 강화하고 있으며, 이를 통해 기후변화로 인한 코웨이 협력사 리스크를 예방하기 위해 노력하고 있습니다.
                        </p>
                        <p> 2020년 온실가스 감축 목표에 대해 2018년 기점에서 원단위는 감축 목표 대비 110%, 배출량은 7.55%를 감축하여 중장기 목표를 초과 달성하였습니다. 2019년부터는 자발적 관리로 전환하여 운영 중에 있으며, 2019년 온실가스 배출량 정보는 필요 시, CDP 질의&응답 및 탄소보고서를 통해 정보를 공개할 예정입니다.
                        </p>
                        <p class="bg-gray3" style="height:200px;"> TEXT TABLE 자리
                        </p>
                </section>
                <section class="mb-5">
                    <h6-ancor :title="'온실가스·에너지 및 기타 환경 데이터'" :activated="activated" class="dma-title mb-3">온실가스·에너지 및 기타 환경 데이터</h6-ancor>
                    <b-row class="py-3">
                        <b-col class="col-12 col-md-6 mb-3 mb-md-0">
                            <h7 class="mb-2">수자원 사용량</h7>
                            <b-table-simple responsive class="num-table">
                                <b-thead><b-tr>
                                    <b-td class="text-left">구분</b-td> <b-td class="text-left">단위</b-td> <b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td>
                                </b-tr></b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td class="text-left">공업용수</b-td> <b-td rowspan="5" class="text-left">톤</b-td> <b-td>-</b-td> <b-td>-</b-td> <b-td>-</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">지하수</b-td>   <b-td>26,084</b-td> <b-td>21,962</b-td> <b-td>29,904</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">표층수</b-td>    <b-td>45,901</b-td> <b-td>49,385</b-td> <b-td>60,519</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">수자원 사용 총량</b-td>   <b-td>71,985</b-td> <b-td>71,347</b-td> <b-td>90,423</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">폐수 배출량</b-td>    <b-td>-</b-td> <b-td>-</b-td> <b-td>-</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">수자원 사용 원단위</b-td> <b-td class="text-left">톤/억원</b-td> <b-td>3.102</b-td> <b-td>2.987</b-td> <b-td>3.573</b-td>
                                    </b-tr>                                    
                                </b-tbody>
                            </b-table-simple>
                        </b-col>
                        <b-col class="col-12 col-md-6 mb-3 mb-md-0">
                            <h7 class="mb-2">사업장별 수자원 사용량</h7>
                            <b-table-simple responsive class="num-table">
                                <b-thead><b-tr>
                                    <b-td class="text-left">구분</b-td> <b-td class="text-left">단위</b-td> <b-td>2017</b-td> <b-td>2018</b-td> <b-td>2019</b-td>
                                </b-tr></b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td class="text-left">유구공장</b-td> <b-td rowspan="5" class="text-left">톤</b-td> <b-td>37,879</b-td> <b-td>34,501</b-td> <b-td>44,357</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">인천공장</b-td>   <b-td>6,482</b-td> <b-td>4,401</b-td> <b-td>5,725</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">포천공장</b-td>   <b-td>134</b-td> <b-td>509</b-td> <b-td>177</b-td>
                                    </b-tr> 
                                    <b-tr>
                                        <b-td class="text-left">환경기술연구소<br>(R&D센터)</b-td>   <b-td>22,597</b-td> <b-td>26,045</b-td> <b-td>33,183</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td class="text-left">물류센터(유구)</b-td>   <b-td>4,893</b-td> <b-td>5,806</b-td> <b-td>5,387</b-td>
                                    </b-tr>
                                </b-tbody> 
                            </b-table-simple>
                            <div class="f-80 ml-1">* 2019년도 데이터는 외부 검증 전의 수치입니다</div>
                        </b-col>
                    </b-row>
                </section>
                
                                        
            </b-container>
            </b-col>
        </b-row>
        <hr class="space-p75">
    </b-container>

</div>
</template>

<script>
import * as ih from '@/components/util'
import SideNavigation from '@/components/navigation/SideNavigation'
import h6Ancor from '@/components/navigation/h6Ancor'

export default {
    layout: 'StaticPage',
    data(){
        return {
            title: '기후변화 대응',
            activated: [],
            sub_titles: [
                { 
                    title: '기후변화 목표 및 시나리오 관리', 
                    child: [
                        { title: '과학적 감축 목표(Science Based Target) 계획 도입' }, 
                    ]
                },
                { 
                    title: '기후변화의 위험과 기회 분석', 
                    child: [
                        { title: '기후변화에 따른 잠재 위험 분석' }, 
                        { title: '기후변화에 따른 잠재 기회 분석' }, 
                    ]
                }, 
                { 
                    title: '협력사 탄소 파트너십'
                },
                { 
                    title: '온실가스·에너지 및 기타 환경 데이터'
                }
            ]
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
    }
    
}
</script>
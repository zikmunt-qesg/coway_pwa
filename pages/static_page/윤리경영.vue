<template>
<div class="position-relative page-top-bg min-vh-100">   
    <logger title="윤리경영"></logger>
    <b-img src="@/assets/images/사각형17.png" fluid class="page-top-img"></b-img>

    <b-container class="">
        <b-row class="my-5 pt-md-5">
            <h1 class="mt-2 mt-lg-5 mb-3 text-center w-100 fw-400">윤리경영</h1>
            <h7 class="mb-lg-5 text-center w-100 fw-400"> dummy text 환경을 건강하게 사람을 행복하게, 내일을 디자인하는 그린 글로벌 리더 </h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 side-nav position-relative">
                <side-navigation 
                :main_title="'가치창출 스토리'"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#8e6627'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0">
                <section class="bg-blue-gray1 px-4 py-4 mb-5">
                    <div class="border-top-bottom-bold">
                        <b-row no-gutters class="px-3 pt-4">                            
                            <b-col class="col-12 col-sm-4 mb-2 mb-sm-0 fw-500 gold8">
                                <h1 class="mt-m-2 mb-0">02</h1>
                                <h4-ancor :title="'동반성장'" :activated="activated" class="mb-4 mb-sm-5 mt-m-2">동반성장</h4-ancor>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 pb-4 mb-5 mb-sm-0">  
                            <b-col class="col-12 col-sm-4">
                                <div class="temp-icon1"> <b-img src="@/assets/images/구성 요소8_1@2x.png" fluid class="h-100"></b-img> </div>
                            </b-col>
                            <b-col class="col-12 col-sm-8 pr-2">
                                <h7 class="gold6 mb-3">Business relevance &amp; Approach</h7>
                                <p>산업 내 상생을 도모하고 건전하고 공정한 거래 문화를 조성하는 것은 경쟁력 확보 및 지속가능한 시장 성장의 기반이 됩니다. 코웨이는 밸류체인 전 과정에서 협력사와의 긴밀한 협력과 상생활동을 추진하여 산업 내 건강한 거래문화를 견인합니다. 이를 위해 협력사와 열린 소통을 추진하여 경영안정 기반 강화, 성장 인프라 지원, 1차협력사의 2차 협력사 지원 등 다각적인 동반성장 활동을 추진하고 있습니다.   
                                </p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-bold">
                            <h7 class="gold6 mb-4 w-100">Activity</h7>
                            <b-col class="col-6 col-md-4 text-center fw-500">
                                <div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img> </div>
                                <p>착한믿음협의회 및 상생포털을 통한 협력사 소통</p>
                            </b-col>
                            <b-col class="col-6 col-md-4 text-center fw-500">
                                <div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img> </div>
                                <p>경영안정 기반 강화 지원</p>
                            </b-col>
                            <b-col class="col-6 col-md-4 text-center fw-500">
                                <div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img> </div>
                                <p>성장 인프라 지원</p>
                            </b-col>
                            <b-col class="col-6 col-md-4 text-center fw-500">
                                <div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img> </div>
                                <p>1차 협력사의 2차 협력사 지원</p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-bold">
                            <b-col class="col-12 col-md-5 pr-md-4 mb-4 mb-md-0">
                                <h7 class="gold6 mb-4 w-100">Business Cases</h7>
                                <b-row no-gutters> 
                                    <b-col class="col-5 text-center fw-500 px-lg-2"><div class="temp-icon2 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img></div>
                                        <p class="word-break">공정거래 4대 가이드라인을 기반으로 투명한 거래 문화 조성</p>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col class="col-12 col-md-7">
                                <h7 class="gold6 mb-3 w-100 pl-md-4">Performance</h7>
                                <b-row no-gutters class="pl-md-4 position-relative"> 
                                    <div class="vertical-line-1 position-absolute d-none d-md-block"></div>
                                    <b-row no-gutters class="w-100">
                                        <b-col class="col-3 text-center px-2">
                                            <p class="fw-500 line-height-low word-break">동반성장위원회 동반성장지수 2018까지 5년연속 최우수 등급 획득, 2019년 우수 등급 획득</p>
                                        </b-col>
                                        <b-col class="col-4 text-center px-2">
                                            <p class="fw-500 line-height-low word-break">1,2차 간 상생협력을 위한 협약 체결 64건 달성</p>
                                        </b-col>
                                    </b-row>
                                </b-row>
                            </b-col>                            
                        </b-row>
                    </div>
                </section> 
                <!-- End of DMA-->

                <section class="mb-5">
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
            title: '깨끗한 물과 공기를 위한 환경경영',
            activated: [],
            sub_titles: [
                { 
                    title: '환경경영을 통한 깨끗함의 가치 실현', 
                    child: [
                        { title: '코웨이 환경경영 방침' }, 
                        { title: '환경경영 전략' }, 
                        { title: '환경경영 추진 체계' }, 
                    ]
                },
                { 
                    title: '가치사슬 전체의 환경역량 강화' 
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
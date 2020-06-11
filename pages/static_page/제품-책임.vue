<template>
<div class="position-relative page-top-bg min-vh-100">  
    <logger title="제품과 서비스의 혁신"></logger>
    <b-img src="@/assets/images/사각형 8@2x.png" fluid class="material-page-top-img"></b-img>

    <b-container class="">
        <b-row class="my-5 pt-md-5">
            <h1 class="mt-2 mt-lg-5 mb-3 text-center text-white w-100 fw-400">MATERIAL TOPICS</h1>
            <p class="mb-0 mb-lg-4 text-center text-white w-100 f-95"> dummy text 환경을 건강하게 사람을 행복하게, 내일을 디자인하는 그린 글로벌 리더 </p>
        </b-row>
        <b-row class="px-lg-3">
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="'제품과 서비스의 혁신'"
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
                            <h4-ancor :title="'제품과 서비스의 혁신'" :activated="activated" class="f-190 fw-300 mb-4 mb-sm-5 mt-m-2 line-height-low">제품과 서비스의 혁신</h4-ancor>
                        </b-col>
                    </b-row>
                    <b-row no-gutters class="px-3 pb-4">
                        <b-col class="col-12 col-md-4 fw-500">
                            <b-row no-gutters class="pr-md-4">
                                <b-col class="col-12 pb-4 border-bottom-dark blue7">
                                    <h7 class="mb-3 w-100">Activity</h7>
                                    <div>‧ 본질적 가치를 높이는 제품 혁신</div>
                                    <div>‧ 미래 기술 기반의 서비스 혁신</div>
                                    <div>‧ 혁신을 위한 연구개발 역량 강화</div>
                                </b-col>
                                <b-col class="col-12 pt-3">
                                    <h7 class="mb-4 w-100 blue7">Performance</h7>
                                    <b-row>
                                        <b-col class="col-12 col-sm-6 col-md-12 mb-3 text-center">
                                            <div class="temp-icon8 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img> </div>
                                            <p class="gray65 mb-0 fw-500"><span class="fw-600">2019</span>년 연구개발비</p>
                                            <p class="mb-0 fw-400"><span class="f-230">37,671</span>백만 원</p>
                                            <p class="gray65 fw-400 line-height-low px-xl-5">(전년대비 2.3% 증가, 매출액 대비 1.25%)</p>
                                        </b-col>
                                        <b-col class="col-12 col-sm-6 col-md-12 mb-4 mb-sm-0 text-center">
                                            <div class="temp-icon8 mx-auto mb-3"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img> </div>
                                            <p class="gray7 mb-0 fw-500">5년 연속</p>
                                            <p class="f-140 fw-400">CES 혁신상 수상</p>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>                            
                        </b-col>                        
                        <b-col class="col-12 col-md-8 pr-2 position-relative pl-md-5">
                        <div class="position-absolute vertical-line-1 d-none d-md-block"></div>
                            <h7 class="blue7 mb-3">Business relevance & Approach</h7>
                            <p >감염병의 확산과 미세먼지 증가 등 최근의 글로벌 사회·환경 문제는 소비자 생활패턴의 변화를 이끌며 환경가전 시장에 큰 영향을 끼치고 있습니다. 가정에 머무는 시간이 증가함에 따라 건강과 위생은 물론, 고객 개인의 라이프스타일을 반영한 제품과 서비스에 대한 니즈가 증가하였으며, 디지털 기술이 생활 전반에 자리함에 따라 주거공간에 인공지능(AI), 사물인터넷(IoT) 기술을 접목한 스마트 홈(Smart Home) 구현이 경쟁 요소로 자리하였습니다.
                            </p>
                            <p class="mb-45">코웨이는 이러한 변화를 환경가전 렌탈 비즈니스의 새로운 기회로 삼아 ‘물과 공기를 깨끗하게’라는 코웨이의 본질을 강화하기 위한 활동을 추진하였습니다. 2019년 코웨이는 위생성을 극대화한 ‘한뼘 시루직수 정수기’를 출시하고, 빅데이터 기반 고객 맞춤형 제품을 추천하는 ‘워터맵 서비스’를 제공하는 한편, 깨끗하고 맛있는 물을 선도하는 글로벌 리더로서 연구를 강화하기 위해 R&D 센터 내 ‘물맛 연구소’를 개소하는 등의 혁신 활동을 추진하였습니다. 또한, 오픈 이노베이션을 통해 제품에 ICT 기술을 결합한 스마트 가전을 선보이며 시장 내 경쟁력을 확보하고 고객 가치를 향상하기 위한 노력을 기울이고 있습니다.
                            </p>
                            <h7 class="blue7 mb-3">Business Cases</h7>
                            <div class="d-flex align-items-center">
                                <div class="py-2 d-flex align-items-center mr-3" style="width: 55%">
                                    <div class="temp-icon8 w-50"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img> </div>
                                    <p class="fw-500 mb-0 word-break"><span class="fw-600">2020</span> CES 혁신상 수상, 사계절 의류청정기 더블케어</p>
                                </div>
                                <div class="py-2 d-flex align-items-center" style="width: 45%">
                                    <div class="temp-icon8 w-25"><b-img src="@/assets/images/구성 요소10_1.svg" fluid class="h-100"></b-img> </div>
                                    <p class="fw-500 mb-0">물맛연구소 개소</p>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </section>
                <hr class="py-3">
                <div class="d-flex mb-3 position-relative"> <h6-ancor :title="'본질적 가치를 높이는 제품 혁신'" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">본질적 가치를 높이는 제품 혁신 </h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                    <p class="pb-3 mb-5"> 코웨이는 깨끗함을 기반으로 고객에게 새로운 가치를 제공하는 대한민국 대표 물 · 공기 기업으로서 본질에 집중하여 위생성을 강화한 ‘한뼘 시루직수 정수기’를 개발하였습니다. 한뼘 시루직수 정수기는 혁신 기술의 집약체로서, 제품의 위생성, 효율성뿐만 아니라 환경적 영향을 최소화하기 위한 코웨이의 노력이 담긴 제품입니다. 또한, 고객 경험을 기반으로 하는 렌탈 비즈니스의 본질적 가치 향상을 위해 고객 맞춤형 제품 및 서비스를 제공하고 있습니다.
                    </p>
                    <b-row class="mb-5">
                        <b-col class="col-12 col-md-5 mb-3 mb-md-0 temp-img1 pr-0"><b-img src="@/assets/images/사각형 15@3x.png" fluid class="h-100"></b-img></b-col>
                        <b-col class="col-12 col-md-7 px-3 px-xl-0"><h6-ancor :title="'혁신 기술의 집약, 한뼘 시루직수 정수기 개발 '" :activated="activated" class="blue5 mb-3">혁신 기술의 집약, 한뼘 시루직수 정수기 개발</h6-ancor>
                            <p>코웨이는 끊임없는 기술 진화를 통해 2019년 ‘한뼘 시루직수 정수기’를 출시하였습니다. 한뼘 시루직수 정수기는 RO멤브레인 필터를 직수화 기술로 구현한 ‘시루직수 정수기’의 업그레이드 버전으로, 오염 물질 제거 성능과 풍부한 유량을 특징으로 합니다. 필터 기술력의 정점인 ‘CIROO 2.0 필터’를 탑재하여, 기존 필터보다 면적을 6배, 정수량을 30배 높인 직수 방식으로 구현하였으며, 물을 마실 때마다 유로에 남은 물을 배출하는 ‘유로 비움 모드’, 24시간 동안 사용하지 않으면 정수기 속 남은 물을 배출하는 ‘자동 배수 시스템’으로 위생성을 향상하였습니다. 또한, 기존 시루직수 정수기(CHP-7300R, CP-7300R) 대비 크기를 약 30% 줄여 공간 활용도를 높였고, 소형 냉각 시스템과 순간 온수 시스템을 적용하여 에너지소비효율을 1등급으로 높여 친환경적 측면도 개선하였습니다.
                            </p>
                        </b-col>
                    </b-row>
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
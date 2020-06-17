<template>
<div class="position-relative page-top-bg min-vh-100">   
    <logger title="CEO Message"></logger>
    <b-img src="/images/500.png" fluid class="page-top-img"></b-img>

    <b-container class="">
        <b-row class="pt-md-5 px-3">
            <h1 class="mt-5 mb-3 pt-3 text-center w-100 fw-400">CARE FOR SUSTAINABILITY</h1>
            <h7 class="mb-5 text-center w-100 fw-400"> dummy text 환경을 건강하게 사람을 행복하게, 내일을 디자인하는 그린 글로벌 리더 </h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="'CEO Message'"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#132e54'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0">
                <section class="px-4 py-4" style="background: linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0.6) 100%);">
                    <div class="border-top-dark pb-2 mb-5"></div>
                    <h4-ancor :title="'CEO Message'" :activated="activated" class="parang8">CEO Message</h4-ancor>
                    <div class="d-flex justify-content-between mt-m-3">
                        <div>
                            <hr class="mb-5 space-p75">
                            <h3 class="fw-300 parang8 pt-3 mb-5">‘초심’의 에너지를 품고 <br>더 나은 세상으로 향하겠습니다. </h3>
                            <h6>안녕하십니까? </h6>
                            <h6>이해관계자 여러분 모두에게<br> 건강과 행복이 가득하기를 바랍니다.</h6>
                        </div>
                        <div><b-img src="/images/CEO.png" fluid class="w-100"></b-img></div>
                    </div>
                </section>
                <section class="px-4 py-4">
                    <b-row>
                        <b-col class="col-12 col-md-7 pr-md-4">
                            <p class="f-105">최근 신규 코로나 바이러스의 전 세계적인 확산으로 세계가 혼란을 겪고 있습니다. 처음 겪는 어려운 상황에도 자신의 자리에서 묵묵하게 최선을 다해서 함께 위기를 극복하고 있는 여러분 모두가 자랑스럽고 감사합니다. 코웨이도 그 동안 보여준 위기 극복의 저력으로 이번 위기를 슬기롭게 극복하고 더 큰 도약의 기회를 만들어 나가겠습니다.
                            </p>
                            <p class="f-105 mb-5">‘New Coway’로 새롭게 시작하는 2020년, 코웨이의 오늘을 만든 원동력인 ‘초심’의 에너지로 국내를 넘어 글로벌 환경가전시장의 리더로 도약하는 원년으로 만들어 나가겠습니다.
                            </p>
                        </b-col>
                    </b-row>
                    <b-row no-gutters class="mb-2">
                        <b-col class="col-7 col-md-5 col-xl-4">
                            <div class="parang-bold-short-line mb-1"></div>
                            <h4 class="parang7 fw-400 mb-0">고객과 시대를 반영한 혁신,<br> 세상을 바꾸고 있습니다. </h4>
                        </b-col>
                        <b-col class="col-5 col-md-6 col-xl-7 d-flex align-items-end">
                            <div class="parang-bold-short-line mb-3"></div><div class="parang-thin-line" style="margin-bottom:1.1rem;"></div>
                        </b-col>
                    </b-row>  
                    <b-row class="mb-5 pb-3">
                        <b-col class="col-12 col-md-11"> 
                            <p class="f-105"> 전 세계가 ‘구독 경제’에 주목하고 있는 요즘 코웨이가 그 중심에 있습니다. 20년 전 코웨이가 최초로 선보인 렌탈시스템이 이제 지극히 일상적이고 당연한 것이 되었습니다. 코웨이가 지금까지 보여준 혁신은 국내를 넘어 해외 시장에서도 호응을 얻어 올해 약 800만 고객 계정 확보가 예상됩니다.
                            </p>
                            <p class="f-105"> 고객의 기대는 업종과 경험의 종류를 불문하고 날로 높아져가고 있습니다. 특히 빠르게 변하는 고객 행동 패턴과 트렌드가 기업의 미래 전략 방향을 제시해 줍니다. 그렇기 때문에 기업은 고객에 집중해 신속하면서도 유연하게 움직여야 시장을 선도할 수 있습니다. 고객을 최우선으로 생각하는 습관을 길러 고객에게 더 높은 수준의 영감을 제공할 수 있는 코웨이로 거듭나겠습니다.
                            </p>
                            <p class="f-105"> 지난 3월 발표한 올해 대한민국 100대 브랜드(브랜트 스탁)에서 ‘코웨이 정수기’가 33위를 차지하며 국내 대표 브랜드로 인정받았습니다. 코웨이 브랜드파워는 고객에 집중하며 혁신을 거듭해온 제품과 서비스 품질의 결과물입니다. 이제 코웨이의 내일은 국내에만 머물러 있지 않습니다. 코웨이만의 엄격한 기준을 지키며 대체할 수 없는 품질과 경쟁력으로 글로벌 시장을 향해 나아갈 것입니다. 삶을 더욱 풍요롭게 만들기 위한 선도적 기술력과 최고의 품질을 향한 코웨이의 끊임없는 도전은 오늘을 이겨내고 내일로 나아가는 힘이자 글로벌 환경가전시장 리더십 확보의 지름길입니다.
                            </p>
                        </b-col>
                    </b-row> 
                    <b-row>
                        <b-col class="col-8 col-sm-6 col-xl-5"></b-col>
                        <b-col><div class="parang-bold-short-line mb-1"></div> </b-col>
                    </b-row>
                    <b-row no-gutters class="mb-2">
                        <b-col class="col-1 col-md-2 d-flex align-items-end" style="padding-bottom:1.5rem;">
                            <div class="parang-thin-line position-relative"><div class="parang-bold-short-line position-absolute" style="right:0; top:-1px;"></div></div>
                        </b-col>
                        <b-col class="col-11 col-md-10 pl-3">
                            <h4 class="parang7 fw-400">더 나은 세상을 향한 혁신,<br> 코웨이의 미래입니다.</h4>
                        </b-col>
                    </b-row>
                    <b-row no-gutters class="mb-5">
                        <b-col class="col-1 col-md-2 d-flex align-items-end"></b-col>   
                        <b-col class="col-11 col-md-10 pl-3">
                            <p class="f-105"> 경영환경이 점점 불투명해지면서 기업의 수명도 점차 짧아지고 있습니다. 지금의 선두 자리가 기업의 지속 성장과 영속성을 보장하지 않습니다. 이에 성장의 지속성에 대한 끊임없는 탐구와 노력은 기업의 숙명이 되었습니다. 우리가 미래 지향적인 전략을 수립하고 끊임없는 학습과 과감한 도전, 고객 중심의 새로운 가치 창조에 집중해야 하는 이유입니다.
                            </p>
                            <p class="f-105"> 또한 기업이 지속가능하려면 기후환경 변화도 물과 공기를 다루는 코웨이가 예의주시해야 합니다. 코로나 팬데믹으로 우리 모두가 잠시 멈추었을 때 환경은 놀랍게 다시 깨끗해졌습니다. 이는 앞으로 우리가 환경오염에 어떻게 대처해야 하는가 말해줍니다. 친환경 소비는 이제 미래를 위해 반드시 실천해야 한다는 공감대가 확산되고 있습니다. 환경과 사회를 생각하는 기업이 선택받는 것이 당연한 시대가 될 것입니다.
                            </p>
                            <p class="f-105"> 킹스턴 대학교 연구 결과에 따르면 100년 이상의 역사를 이어온 조직들의 공통된 특성이 있다고 합니다. 바로 ‘견고하게 핵심을 지킨다는 점에서는 전통적이지만, 놀랄 정도로 급진적이고 무서운 역동성을 가지고 있다’는 점입니다. 
                            </p>
                            <p class="f-105"> 코웨이의 내일을 위해 ‘고객 최우선 가치’와 ‘우리 가족과 이웃, 더 나아가 인류의 생활을 더욱 건강하고 편리하게 만든다’는 핵심 가치는 굳건하게 지키면서 미래 지향적인 로드맵 구축에 민첩한 실행력을 갖춰나갈 것입니다.
                            </p>
                            <p class="f-105"> 코웨이의 31년 성장의 역사는 언제나 아무도 가지 않은 길에 있었습니다. 그 동안 쌓아온 혁신 역량을 체력 삼아 새로운 시대와 경영환경에 부합하는 성장을 지속해 나갈 것입니다.
                            </p>
                            <p class="f-105"> 더 나은 세상을 향한 코웨이의 행보에 이해관계자 여러분께서 함께해 주시기 바랍니다.
                            </p>
                        </b-col>
                    </b-row> 
                    <p class="text-right f-90 fw-500 mb-1"> 코웨이 대표이사 </p>
                    <div class="text-right fw-500 f-130 mb-2"> 이 해 선 </div>
                    <div class="text-right"><b-img src="/images/49_1.png"></b-img></div>
                </section>                
            </b-container>
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

export default {
    layout: 'StaticPage',
    data(){
        return {
            title: 'CEO Message',
            activated: [],
            sub_titles: [
                { 
                    title: ''
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
<style lang="scss">
.parang-bold-short-line{
    width: 38px!important;
    border-bottom: 4px solid $parang7;
}
.parang-thin-line{
    border-bottom: 1px solid $parang7;
    width: 100%;
}
</style>
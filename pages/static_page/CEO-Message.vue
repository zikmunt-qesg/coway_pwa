<template>
<div class="position-relative page-top-bg-sus w-100 min-vh-100">   
    <logger title="CEO Message"></logger>
    <div class="w-100 bg-white bg-white-cover position-absolute"></div>

    <b-container v-if="this.$store.state.is_ENG==false" class="">
        <b-row class="pt-md-5 px-3">
            <h1 class="mt-5 mb-3 pt-3 text-center w-100 fw-400">CARE FOR SUSTAINABILITY</h1>
            <h7 class="mb-5 text-center w-100 fw-400"> 더 나은 세상을 향한 착한 믿음의 실천, 코웨이 지속가능경영 비전 </h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="title"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#132e54'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0">
                <section class="px-4 py-4" style="background: linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0.6) 100%);">
                    <div class="border-top-dark pb-2 mb-5"></div>
                    <h4-ancor hash="T" :activated="activated" class="parang8">CEO Message</h4-ancor>
                    <div class="d-flex justify-content-between mt-m-3 font-noto">
                        <div>
                            <hr class="mb-5 space-p75">
                            <h3 class="fw-300 parang8 pt-3 mb-5">‘초심’의 에너지를 품고 <br>더 나은 세상으로 향하겠습니다. </h3>
                            <h6>안녕하십니까? </h6>
                            <h6>이해관계자 여러분 모두에게<br> 건강과 행복이 가득하기를 바랍니다.</h6>
                        </div>
                        <div><b-img src="/images/CEO.png" fluid class="w-100"></b-img></div>
                    </div>
                </section>
                <section class="px-4 py-4 bg-white">
                    <b-row>
                        <b-col class="col-12 col-md-7 pr-md-4">
                            <p class="f-105 text-justify">최근 신규 코로나 바이러스의 전 세계적인 확산으로 세계가 혼란을 겪고 있습니다. 처음 겪는 어려운 상황에도 자신의 자리에서 묵묵하게 최선을 다해서 함께 위기를 극복하고 있는 여러분 모두가 자랑스럽고 감사합니다. 코웨이도 그 동안 보여준 위기 극복의 저력으로 이번 위기를 슬기롭게 극복하고 더 큰 도약의 기회를 만들어 나가겠습니다.
                            </p>
                            <p class="f-105 mb-5 text-justify">‘New Coway’로 새롭게 시작하는 2020년, 코웨이의 오늘을 만든 원동력인 ‘초심’의 에너지로 국내를 넘어 글로벌 환경가전시장의 리더로 도약하는 원년으로 만들어 나가겠습니다.
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
                            <p class="f-105 text-justify"> 전 세계가 ‘구독 경제’에 주목하고 있는 요즘 코웨이가 그 중심에 있습니다. 20년 전 코웨이가 최초로 선보인 렌탈시스템이 이제 지극히 일상적이고 당연한 것이 되었습니다. 코웨이가 지금까지 보여준 혁신은 국내를 넘어 해외 시장에서도 호응을 얻어 올해 약 800만 고객 계정 확보가 예상됩니다.
                            </p>
                            <p class="f-105 text-justify"> 고객의 기대는 업종과 경험의 종류를 불문하고 날로 높아져가고 있습니다. 특히 빠르게 변하는 고객 행동 패턴과 트렌드가 기업의 미래 전략 방향을 제시해 줍니다. 그렇기 때문에 기업은 고객에 집중해 신속하면서도 유연하게 움직여야 시장을 선도할 수 있습니다. 고객을 최우선으로 생각하는 습관을 길러 고객에게 더 높은 수준의 영감을 제공할 수 있는 코웨이로 거듭나겠습니다.
                            </p>
                            <p class="f-105 text-justify"> 지난 3월 발표한 올해 대한민국 100대 브랜드(브랜트 스탁)에서 ‘코웨이 정수기’가 33위를 차지하며 국내 대표 브랜드로 인정받았습니다. 코웨이 브랜드파워는 고객에 집중하며 혁신을 거듭해온 제품과 서비스 품질의 결과물입니다. 이제 코웨이의 내일은 국내에만 머물러 있지 않습니다. 코웨이만의 엄격한 기준을 지키며 대체할 수 없는 품질과 경쟁력으로 글로벌 시장을 향해 나아갈 것입니다. 삶을 더욱 풍요롭게 만들기 위한 선도적 기술력과 최고의 품질을 향한 코웨이의 끊임없는 도전은 오늘을 이겨내고 내일로 나아가는 힘이자 글로벌 환경가전시장 리더십 확보의 지름길입니다.
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
                            <p class="f-105 text-justify"> 경영환경이 점점 불투명해지면서 기업의 수명도 점차 짧아지고 있습니다. 지금의 선두 자리가 기업의 지속 성장과 영속성을 보장하지 않습니다. 이에 성장의 지속성에 대한 끊임없는 탐구와 노력은 기업의 숙명이 되었습니다. 우리가 미래 지향적인 전략을 수립하고 끊임없는 학습과 과감한 도전, 고객 중심의 새로운 가치 창조에 집중해야 하는 이유입니다.
                            </p>
                            <p class="f-105 text-justify"> 또한 기업이 지속가능하려면 기후환경 변화도 물과 공기를 다루는 코웨이가 예의주시해야 합니다. 코로나 팬데믹으로 우리 모두가 잠시 멈추었을 때 환경은 놀랍게 다시 깨끗해졌습니다. 이는 앞으로 우리가 환경오염에 어떻게 대처해야 하는가 말해줍니다. 친환경 소비는 이제 미래를 위해 반드시 실천해야 한다는 공감대가 확산되고 있습니다. 환경과 사회를 생각하는 기업이 선택받는 것이 당연한 시대가 될 것입니다.
                            </p>
                            <p class="f-105 text-justify"> 킹스턴 대학교 연구 결과에 따르면 100년 이상의 역사를 이어온 조직들의 공통된 특성이 있다고 합니다. 바로 ‘견고하게 핵심을 지킨다는 점에서는 전통적이지만, 놀랄 정도로 급진적이고 무서운 역동성을 가지고 있다’는 점입니다. 
                            </p>
                            <p class="f-105 text-justify"> 코웨이의 내일을 위해 ‘고객 최우선 가치’와 ‘우리 가족과 이웃, 더 나아가 인류의 생활을 더욱 건강하고 편리하게 만든다’는 핵심 가치는 굳건하게 지키면서 미래 지향적인 로드맵 구축에 민첩한 실행력을 갖춰나갈 것입니다.
                            </p>
                            <p class="f-105 text-justify"> 코웨이의 31년 성장의 역사는 언제나 아무도 가지 않은 길에 있었습니다. 그 동안 쌓아온 혁신 역량을 체력 삼아 새로운 시대와 경영환경에 부합하는 성장을 지속해 나갈 것입니다.
                            </p>
                            <p class="f-105 text-justify"> 더 나은 세상을 향한 코웨이의 행보에 이해관계자 여러분께서 함께해 주시기 바랍니다.
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

    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->
    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->
    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->    
    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->

    <b-container v-else class="">
        <b-row class="pt-md-5 px-3">
            <h1 class="mt-5 mb-3 pt-3 text-center w-100 fw-400">CARE FOR SUSTAINABILITY</h1>
            <h7 class="mb-5 text-center w-100 fw-400"> Practicing "Good faith" toward a better world, Coway Sustainability Management Vision </h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="title"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#132e54'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0">
                <section class="px-4 py-4" style="background: linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0.6) 100%);">
                    <div class="border-top-dark pb-2 mb-5"></div>
                    <h4-ancor hash="T" :activated="activated" class="parang8">CEO Message</h4-ancor>
                    <div class="d-flex justify-content-between mt-m-3 font-noto">
                        <div>
                            <hr class="mb-5 space-p75">
                            <h3 class="fw-300 parang8 pt-3 mb-5">We will head for the better world  <br>with the “Beginner’s heart”  </h3>
                            <h6>I extend my best wishes </h6>
                            <h6>for the health and happiness <br> of all stakeholders.</h6>
                        </div>
                        <div><b-img src="/images/CEO.png" fluid class="w-100"></b-img></div>
                    </div>
                </section>
                <section class="px-4 py-4 bg-white">
                    <b-row>
                        <b-col class="col-12 col-md-7 pr-md-4">
                            <p class="f-105 text-justify"> Recently, the world is suffering from severe dislocation due to the global pandemic called COVID-19. I want to express my respect and gratitude to all of you who are keeping your nose to the grindstone every day, enduring this unprecedented difficult time. As we have done many times in the past, Coway will prudently overcome this crisis and take it as an opportunity for the greater leap forward.
                            </p>
                            <p class="f-105 mb-5 text-justify">In 2020, the beginning of "New Coway," we will leap as a leader of the global environmental home appliance market with the “Beginner's heart”, the driving force which made Coway today.
                            </p>
                        </b-col>
                    </b-row>
                    <b-row no-gutters class="mb-2">
                        <b-col class="col-7 col-md-5 col-xl-4">
                            <div class="parang-bold-short-line mb-1"></div>
                            <h4 class="parang7 fw-400 mb-0">Innovation that reflects the customers and the times,<br> It is changing the world. </h4>
                        </b-col>
                        <b-col class="col-5 col-md-6 col-xl-7 d-flex align-items-end">
                            <div class="parang-bold-short-line mb-3"></div><div class="parang-thin-line" style="margin-bottom:1.1rem;"></div>
                        </b-col>
                    </b-row>  
                    <b-row class="mb-5 pb-3">
                        <b-col class="col-12 col-md-11"> 
                            <p class="f-105 text-justify"> As “subscription economy” is attracting the eyes of the global community, Coway is at the center of it today. The rental system that Coway launched for the first time 20 years ago, now became an ordinary and mundane aspect of our lives. The innovation that Coway has shown so far has been well received in overseas markets beyond South Korea and we expect to secure approximately 8 million customer accounts this year.
                            </p>
                            <p class="f-105 text-justify"> Customer expectations are rising day after day, regardless of the industry or experiences. Above all, rapidly changing customer behavior patterns and trends provide a direction for the company's future strategy. That's why to lead the market a company must focus on customers pattern and adapt flexibly and quickly. Developing a habit of putting customers first, we will be reborn as Coway that provides a higher level of inspiration to customers.
                            </p>
                            <p class="f-105 text-justify"> Among “South Korea's Top 100 Brands” announced by Brand Stock in March 2020,” Coway Water Purifier” was ranked 33rd recognized as a representative brand in South Korea. Coway brand power is the result of customer-centric innovative products and service quality. Now, Coway's tomorrow is not only in South Korea but we will continue to meet the strict standards of Coway and advance toward the global market with our inimitable quality and competitive advantage. Coway's constant challenge toward leading technology and the highest quality for abundant life is the power to conquer today and mar to tomorrow, and shortcut to secure leadership in the global environmental home appliance market.
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
                            <h4 class="parang7 fw-400">Innovation For a Better World,<br> The Future of Coway.</h4>
                        </b-col>
                    </b-row>
                    <b-row no-gutters class="mb-5">
                        <b-col class="col-1 col-md-2 d-flex align-items-end"></b-col>   
                        <b-col class="col-11 col-md-10 pl-3">
                            <p class="f-105 text-justify"> As the business environment becomes unpredictable, the lifespan of a company is gradually shortening. The current leadership position does not guarantee the company's sustainable growth and permanence. As a result, the constant exploration and efforts for the sustainable growth have become the mission of the company. That is why we must establish a future-oriented strategy, constant learning, bold challenges, and new customer-centric values.
                            <p class="f-105 text-justify"> As a company dealing with water and air, Coway pays close attention to climate change and strives to minimize the environmental impact of corporate activities.   When we all pushed the pause button for a while due to the COVID-19 pandemic, the environment became surprisingly clean again. It tells us how to deal with environmental pollution in the future. There is a growing consensus that green consumption must be practiced for the future. It will soon be the time that people would choose companies that think about the environment and society.
                            </p>
                            <p class="f-105 text-justify"> A study from Kingston University shows that organizations that have a history of over 100 years have a common trait. That is, "It is traditional in that it is firmly defending its core, but it has surprisingly radical and terrifying dynamics."
                            </p>
                            <p class="f-105 text-justify"> For Coway's tomorrow, the core values of "Customer First Value" and "Our family, neighbors, and even life of mankind will be healthier and more convenient" will be firmly maintained while building a forward-looking roadmap and prompt executive ability.
                            </p>
                            <p class="f-105 text-justify"> Coway's 31-year history of growth has always been on the road not taken by anyone. We will continue to grow following the new era and business environment by utilizing our accumulated innovation capabilities.
                            </p>
                            <p class="f-105 text-justify"> I hope stakeholders would take part in Coway's move toward the better world together.
                            </p>
                        </b-col>
                    </b-row> 
                    <p class="text-right f-90 fw-500 mb-1"> Coway CEO </p>
                    <div class="text-right fw-500 f-130 mb-2"> Lee Hae-Sun </div>
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
import LocaleMixin from '@/components/locale'

export default {
    layout: 'StaticPage',
    mixins: [ LocaleMixin ],
    asyncData({query, store}){
        if(query.l && query.l == 'ENG'){
            store.commit('setLang', 'ENG')
        }
    },
    data(){
        return {
            activated: [],
            sub_titles: [
                { 
                    hash: ''
                }
            ],
        }
    },
    computed:{
        is_ENG(){
            return this.$store.state.is_ENG
        },
        title(){
            return this.is_ENG? 'CEO Message' : 'CEO 메시지'
        },
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
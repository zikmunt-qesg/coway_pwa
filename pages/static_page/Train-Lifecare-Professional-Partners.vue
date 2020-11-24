<template>
<div class="position-relative page-top-bg-so min-vh-100"> 
    <logger title="라이프케어 전문 파트너 양성"></logger>
    <div class="w-100 bg-white bg-white-cover position-absolute"></div>

    <b-container v-if="this.$store.state.is_ENG==false" class="">
        <b-row class="pt-md-5 px-3">
            <h1 class="mt-5 mb-3 pt-3 text-center w-100 fw-400">CARE FOR SOCIETY</h1>
            <h7 class="mb-5 text-center w-100 fw-400">환경을 건강하게 사람을 행복하게, 건강하고 편리한 삶을 케어합니다.</h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="title"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#8e6627'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0">
                <section class="bg-blue-gray1 px-4 py-4 mb-5">
                    <div class="border-top-bottom-dark">
                        <b-row no-gutters class="px-3 pt-4">                            
                            <b-col class="col-12 col-sm-4 mb-2 mb-sm-0 fw-500 gold8">
                                <h1 class="mt-m-2 mb-0">02</h1>
                                <h4-ancor hash="T" :activated="activated" class="mb-4 mb-sm-5 mt-m-2">라이프케어 전문 파트너 양성</h4-ancor>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 pb-4 mb-2 mb-sm-0">  
                            <b-col class="col-12 col-sm-4 mb-5 mb-sm-0 fw-500 gold7">
                                <div class="mr-5 pr-lg-2 pr-xl-4" style="max-width: 180px;"> <b-img src="/images/138_1.svg" fluid ></b-img> </div>
                            </b-col>
                            <b-col class="col-12 col-sm-8 pr-2">
                                <h7 class="gold7 mb-3">Business relevance &amp; Approach</h7>
                                <p>코웨이는 라이프 케어 서비스 분야의 리더로서 서비스 전문 파트너와 함께 지속적인 케어 서비스를 제공하여 고객과의 신뢰를 형성하고 브랜드 가치를 구축합니다. 파트너는 코웨이의 제품과 서비스에 담긴 가치를 가장 잘 전달할 수 있는 주체로서 코웨이의 기술력 뿐만 아니라 서비스 철학까지 전문성을 기반으로 합니다. 코웨이는 파트너의 전문성 향상을 위해 체계적인 교육 시스템을 제공하며 현장의 이슈를 해결하기 위해 적극적으로 지원하고 있습니다.  
                                </p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark">
                            <h7 class="gold7 mb-4 w-100">Activity</h7>
                            <b-col class="col-4 text-center fw-500">
                                <div class="mx-auto mb-3"><b-img src="/images/139_1.svg" fluid></b-img> </div>
                                <p class="fw-500 word-break px-1 px-sm-3 px-lg-5 mx-xl-3">파트너 기술 교육 및 서비스 교육</p>
                            </b-col>
                            <b-col class="col-4 text-center fw-500">
                                <div class="mx-auto mb-3"><b-img src="/images/139_2.svg" fluid></b-img> </div>
                                <p class="fw-500 word-break px-1 px-sm-3 px-lg-5 mx-xl-3">현장 이슈 점검을 통한 전문성 향상</p>
                            </b-col>
                            <b-col class="col-4 text-center fw-500">
                                <div class="mx-auto mb-2"><b-img src="/images/139_3.svg" fluid></b-img> </div>
                                <p class="fw-500 word-break px-1 px-sm-3 px-lg-5 mx-xl-3">상생 커뮤니케이션</p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark">
                            <b-col class="col-12 col-md-7 pr-md-4 mb-4 mb-md-0">
                                <h7 class="gold7 mb-3 w-100">Business Cases</h7>
                                <b-row no-gutters> 
                                    <b-col class="col-4 text-center fw-500 px-lg-2"><div class="mx-auto mb-2"><b-img src="/images/139_4.svg"></b-img></div>
                                        <p class="fw-500 word-break px-1 px-lg-2">대학 협력 아카데미 운영</p>
                                    </b-col>
                                    <b-col class="col-4 text-center fw-500"><div class="mx-auto mb-3"><b-img src="/images/139_5.svg"></b-img></div>
                                        <p class="fw-500 word-break px-1 px-lg-2">파트너 서비스 툴백 (Tool bag) 제공</p>
                                    </b-col>
                                    <b-col class="col-4 text-center fw-500"><div class="mx-auto mb-3"><b-img src="/images/139_6.svg"></b-img></div>
                                        <p class="fw-500 word-break pt-1 px-1 px-lg-2 font-noto">파트너 소통 3C* 간담회 실시</p>
                                    </b-col>
                                    <div class="gray6 f-80 w-100 fw-300 text-right mt-2">* 3C: Cody, Service manager, Call center</div>
                                </b-row>
                            </b-col>
                            <b-col class="col-12 col-md-5 position-relative pl-md-4">
                                <div class="vertical-line-1 position-absolute d-none d-md-block"></div>
                                <h7 class="gold7 mb-3 mb-md-5 w-100">Performance</h7> 
                                <div class="d-flex justify-content-around mb-3 mb-md-0">                                   
                                    <div class="fw-400 f-120 line-height-low letter-narrow word-break font-noto text-center">코로나19 특별재난지역 파트너 긴급생활비 지원</div>
                                    <div class="fw-400 f-120 line-height-low letter-narrow word-break font-noto px-2 text-center">3C 간담회 기반 9개 유형의 VOC 개선</div>
                                </div>
                            </b-col>                            
                        </b-row>
                    </div>
                </section> 
                <!-- End of DMA-->
                <section class="mb-5">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="s1" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">파트너 전문성 강화</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-45">코웨이는 고객과 가장 가까운 현장에서 코웨이의 제품 및 서비스를 제공하는 파트너와의 상생 성장을 추구하고 있습니다. 파트너는 고객 접점에서 소통하며 브랜드 가치 및 만족도를 제고하는 중요한 역할을 하고 있습니다. 이에 코웨이는 영업·서비스 파트너가 현장에서 고객을 대상으로 원활한 서비스와 판매활동을 진행할 수 있도록 지원하고 있습니다.
                        </p>
                        <b-img src="/images/51_1.svg" fluid></b-img>
                        <hr class="mb-3">
                    <h6-ancor hash="s1-1" :activated="activated" class="gold6 fw-500 mb-3">파트너 전문성 향상을 위한 교육 지원</h6-ancor>
                        <p class="mb-45">코웨이는 파트너가 직무 역량을 갖추고 장기적으로 활동할 수 있도록 체계적인 교육 프로그램을 제공합니다. 교육은 제품 및 서비스 지식을 습득하는 기술 교육과 서비스 교육으로 구성됩니다. 기술 교육은 코웨이의 제품과 서비스에 대한 기본 지식을 갖추고 실습을 통해 하트서비스의 진행 방법을 숙달하는 과정이며, 서비스 교육은 업무에 대한 전반적인 이해와 함께 고객을 대하는 서비스 마인드를 갖출 수 있는 과정입니다. 이와 더불어 신규 코디에게는 안정적으로 업무를 시작할 수 있도록 별도의 멘토링 프로그램을 진행합니다.
                        </p>
                        <b-img src="/images/52_1.svg" fluid></b-img>
                        <hr class="space-p25">
                        <p class="mb-5">코웨이는 대학 협력 아카데미를 운영하여 파트너 역량 강화를 지원합니다. 아카데미는 총 2개 프로그램으로, 이화여자대학교와 진행하는 소비자 서비스 역량강화 프로그램 ‘코웨이-이화 아카데미’와 연세대학교와 진행하는 리더십 프로그램 ‘코웨이-연세 리더십 아카데미’로 구성되어 있습니다. 코웨이-이화 아카데미는 소비자 심리의 이해, 창조적인 사고와 자기계발, 맞춤형 힐링 스트레스 관리법 등 고객관리 및 서비스 경쟁력 향상 프로그램을 9주간 진행합니다. 코웨이-연세 리더십 아카데미는 영업 현장에서 우수한 리더십 역량을 발휘하고 있는 리더를 대상으로 8주에 걸처 인문과 철학, 인간관계, 경영관리 등 리더 역량에 대한 교육을 제공합니다.
                        </p>
                    
                    <h6-ancor hash="s1-2" :activated="activated" class="gold6 fw-500 mb-3">현장 이슈에 기반한 파트너 지원</h6-ancor>
                        <p class="mb-5">코웨이는 현장 이슈를 즉각적으로 반영하여 통해 코디, 서비스매니저, HP/GHP 등 영업·서비스 파트너가 효과적으로 서비스를 제공할 수 있도록 지원하고 있습니다. 서비스 툴백(Tool bag)제공은 현장 이슈 경청을 통한 파트너 전문성 향상의 대표적인 사례입니다. 서비스 툴백은 서비스 물품 이용 실태와 파트너 의견을 조사를 통해 제작한 것으로, 다양한 종류의 서비스 도구를 관리하고 운반 및 이동할 수 있는 전문 서비스 도구 전용 키트입니다. 또한 툴백 뿐만 아니라 용도별 도구를 다양화하여 정수기, 비데, 매트리스, 의류청정기각 제품군별 전문 도구를 제공하였습니다. 이를 통해 파트너의 서비스 제공 효율성을 높였을 뿐만 아니라, 업무로 인한 피로도를 최소화하였습니다.
                        </p>
                    
                    <hr class="py-3">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="s2" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">파트너 상생 및 커뮤니케이션</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-5">코웨이는 현장을 명확히 이해하기 위해 3C(Cody, Service manager, Call center) 간담회를 실시하여 현장 VOC를 청취하여 전사적으로 공유하고 있습니다. 3C 간담회는 코웨이의 주요 고객 접점에서 활동하는 코디, 서비스매니저, 콜센터의 실무자 대표로 구성된 정기 회의체로서, 상호 간 업무 현황과 상황을 이해하고 소통의 시너지를 확대하여 고객만족을 높이고 있습니다. 2019년 코웨이는 3C 간담회를 통해 제품, A/S, 교육 등 9개 유형별 VOC를 기반으로 과제를 도출하여 유관부서와 함께 개선 활동을 추진하였습니다. 
                        </p>
                    
                    <h6-ancor hash="s2-1" :activated="activated" class="gold6 fw-500 mb-3 font-noto">코로나19 특별재난지역에 파트너 긴급생활비 지원</h6-ancor>
                        <p>코로나바이러스감영증-19로 인한 특별재난지역에서 활동하고 있는 파트너의 경우 서비스 제공 및 제품 판매의 한계로 인해 경제적 영향이 발행하였습니다. 이에 따라 코웨이는 2020년 3월 특별재난지역으로 선포된 대구 경북 일부 지역의 파트너에게 수수료의 70%를 선지급하였으며, 총 약 6억원 규모의 재난긴급생활비를 지원하였습니다.
                        </p>
                </section>
            </b-container> 
            <!-- End of Contents Container -->
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
            <h1 class="mt-5 mb-3 pt-3 text-center w-100 fw-400">CARE FOR SOCIETY</h1>
            <h7 class="mb-5 text-center w-100 fw-400">We Make Healthier Environment, Happier People, and Healthy and Convenient Life.</h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="title"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#8e6627'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0 eng-font-scale">
                <section class="bg-blue-gray1 px-4 py-4 mb-5">
                    <div class="border-top-bottom-dark">
                        <b-row no-gutters class="px-3 pt-4">                            
                            <b-col class="col-12 mb-2 mb-sm-0 fw-500 gold8">
                                <h1 class="mt-m-2 mb-0">02</h1>
                                <h4-ancor hash="T" :activated="activated" class="mb-4 mb-sm-5 mt-m-2">Lifecare Professional Partners</h4-ancor>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 pb-4 mb-2 mb-sm-0">  
                            <b-col class="col-12 col-sm-4 mb-5 mb-sm-0 fw-500 gold7">
                                <div class="mr-5 pr-lg-2 pr-xl-4" style="max-width: 180px;"> <b-img src="/images/138_1.svg" fluid ></b-img> </div>
                            </b-col>
                            <b-col class="col-12 col-sm-8 pr-2">
                                <h7 class="gold7 mb-3">Business relevance &amp; Approach</h7>
                                <p> As a life care service leader, Coway provides continuous care services with professional service partners to build trust with customers and build brand value. Partners are the main agents that can deliver the best value contained in Coway's products and services, based on expertise not only in Coway's technology but also in its service philosophy. Coway provides a systematic training system to improve its partners' professionalism and actively supports them to solve issues in a workplace.
                                </p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark">
                            <h7 class="gold7 mb-4 w-100">Activity</h7>
                            <b-col class="col-4 text-center fw-500">
                                <div class="mx-auto mb-3"><b-img src="/images/139_1.svg" fluid></b-img> </div>
                                <p class="fw-500 line-height-low">Partner Technical Training and Service Training</p>
                            </b-col>
                            <b-col class="col-4 text-center fw-500">
                                <div class="mx-auto mb-3"><b-img src="/images/139_2.svg" fluid></b-img> </div>
                                <p class="fw-500 line-height-low">Expertise Improvement Through Monitoring Field Issue</p>
                            </b-col>
                            <b-col class="col-4 text-center fw-500">
                                <div class="mx-auto mb-2"><b-img src="/images/139_3.svg" fluid></b-img> </div>
                                <p class="fw-500 line-height-low">Mutual Growth Communication</p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark">
                            <b-col class="col-12 col-md-8 pr-md-4 mb-4 mb-md-0">
                                <h7 class="gold7 mb-3 w-100">Business Cases</h7>
                                <b-row no-gutters> 
                                    <b-col class="col-4 text-center fw-500 px-lg-2"><div class="mx-auto mb-2"><b-img src="/images/139_4.svg"></b-img></div>
                                        <p class="fw-500 px-sm-2 line-height-low">Operate Academy with Universities</p>
                                    </b-col>
                                    <b-col class="col-4 text-center fw-500"><div class="mx-auto mb-3"><b-img src="/images/139_5.svg"></b-img></div>
                                        <p class="fw-500 px-sm-2 line-height-low">Provide Partner Service Tool Bag</p>
                                    </b-col>
                                    <b-col class="col-4 text-center fw-500"><div class="mx-auto mb-3"><b-img src="/images/139_6.svg"></b-img></div>
                                        <p class="fw-500 px-sm-2 pt-1 line-height-low font-noto">Initiate Partner Communication 3C* Meeting</p>
                                    </b-col>
                                    <div class="gray6 f-80 w-100 fw-300 text-right mt-2">* 3C: Cody, Service manager, Call center</div>
                                </b-row>
                            </b-col>
                            <b-col class="col-12 col-md-4 position-relative pl-md-4">
                                <div class="vertical-line-1 position-absolute d-none d-md-block"></div>
                                <h7 class="gold7 mb-3 mb-md-5 w-100">Performance</h7> 
                                <div class="mb-3 mb-md-0">                                   
                                    <div class="f-100 line-height-low letter-narrow mb-3 font-noto text-center">Emergency Relief for Partners in COVID-19 Special Disaster Areas</div>
                                    <div class="f-100 line-height-low letter-narrow font-noto px-2 text-center">9 Types of VOC Improvements Based on 3C Meeting</div>
                                </div>
                            </b-col>                            
                        </b-row>
                    </div>
                </section> 
                <!-- End of DMA-->
                <section class="mb-5">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="s1" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">Partner Expertise Enhancement</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-45">Coway is pursuing mutual growth with partners who provide Coway products and services the closest to customers. Partners play an essential role in communicating at the customer interface and improving brand value and satisfaction. Accordingly, Coway supports sales and service partners in the field to facilitate smooth service and sales activities for customers.
                        </p>
                        <b-img src="/images/312_1.svg" fluid></b-img>
                        <hr class="mb-3">
                    <h6-ancor hash="s1-1" :activated="activated" class="gold6 fw-500 mb-3">Expertise Improvement Training</h6-ancor>
                        <p class="mb-45"> Coway offers systematic training programs to help partners build job skills and work in the long run. Training consists of technical training and service training to acquire product and service knowledge and technical training is the process of having a basic knowledge of Coway's products and services and mastering how to perform "heart service" through practical training. Service training is a process that allows you to develop a service mindset that treats customers with an overall understanding of the job. Also, a separate mentoring program is provided for steady start of new Codys.
                        </p>
                        <b-img src="/images/312_2.svg" fluid></b-img>
                        <hr class="space-p25">
                        <p class="mb-5"> Coway operates a university cooperative academy to help strengthen partner competencies. The academy consists of two programs: "Coway-Ewha Academy', a consumer service capacity building program with Ewha Womans University, and "Coway-Yonsei Leadership Academy," a leadership program with Yonsei University. Coway-Ewha Academy offers 9 weeks of customer management and service competitiveness improvement programs, including understanding consumer psychology, creative thinking and self-development, and customized healing stress management. The Coway-Yonsei Leadership Academy provides training on leaders' competencies, such as humanities, philosophy, human relations, and business management, over 8 weeks for leaders who demonstrate excellent leadership skills in sales.
                        </p>
                    
                    <h6-ancor hash="s1-2" :activated="activated" class="gold6 fw-500 mb-3">Supporting Partner with Field Issues</h6-ancor>
                        <p class="mb-5"> Coway provides effective support for sales and service partners such as Cody, Service manager, and HP/GHP through an immediate reflection of field issues. Providing a service tool bag is a prime example of improving partner expertise through listening to field issues. The service tool bag is produced through research on the use of service items and partner opinions as a kit dedicated to professional service tools that can manage, transport, and move various service tools. We have diversified tools by application and tool bags to provide specialized tools for each product line of water purifiers, bidets, mattresses, and clothing cleaners. This not only improved the efficiency of service delivery from partners but also minimized fatigue from work.
                        </p>
                    
                    <hr class="py-3">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="s2" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">Cooperation and Communication</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-5"> To clearly understand the site, Coway holds a 3C (Cody, Service manager, Call center) meeting and listens to VOC and shared across the company. The 3C meeting is a regular meeting consisting of Codys, service managers, and representatives of call centers working at Coway's primary customer interfaces. In 2019, Coway drew up tasks based on nine types of VOCs through 3C meetings, including products, Customer Service, and education, and promoted improvement activities with related departments.
                        </p>
                    
                    <h6-ancor hash="s2-1" :activated="activated" class="gold6 fw-500 mb-3 font-noto">Emergency Relief for Partners in COVID-19 Special Disaster Areas</h6-ancor>
                        <p> In the case of partners working in the COVID-19 special disaster areas, economic impacts were issued due to limitations in service provision and product sales. Accordingly, Coway paid 70% of the commission in advance to partners in some parts of Daegu, North Gyeung-Sang Province (Gyeongbuk), which was declared the special disaster zone in March 2020. We provided a total of approximately 600 million KRW in disaster emergency living expenses.
                        </p>
                </section>
            </b-container> 
            <!-- End of Contents Container -->
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
            activated: []
        }
    },
    computed:{
        is_ENG(){
            return this.$store.state.is_ENG
        },
        title(){
            return this.is_ENG? 'Lifecare Professional Partners' : '라이프케어 전문 파트너 양성'
        },
        sub_titles(){
            let temp = [
                { 
                    title: this.is_ENG? 'Partner Expertise Enhancement': '파트너 전문성 강화', hash: 's1',
                    child: [
                        { title: this.is_ENG? 'Expertise Improvement Training': '파트너 전문성 향상을 위한 교육 지원', hash: 's1-1' }, 
                        { title: this.is_ENG? 'Supporting Partner with Field Issues':'현장 이슈에 기반한 파트너 지원', hash: 's1-2' }, 
                    ]
                },
                { 
                    title: this.is_ENG? 'Cooperation and Communication': '파트너 상생 및 커뮤니케이션', hash: 's2',
                    child: [
                        { title: this.is_ENG? 'Emergency Relief for Partners in COVID-19 Special Disaster Areas':'코로나19 특별재난지역에 파트너 긴급생활비 지원', hash: 's2-1' }
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
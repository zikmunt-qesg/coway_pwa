<template>
<div class="position-relative min-vh-100">
    <logger title="메인"></logger>

    <template  v-if="this.$store.state.is_ENG==false" >
        <b-carousel id="intro-carousel" v-view="viewHandlerIntro" v-model="slide" :interval="6000" controls indicators background="#fff" @sliding-start="onSlideStart" @sliding-end="onSlideEnd" class="">
            <b-carousel-slide><template v-slot:img>
                <div class="bg-i-img i1_bg" >
                    <div class="position-relative carousel-height overflow-hidden">
                        <div class="position-absolute d-md-block pr-lg-5 mr-xl-5 m-r-5" style="top:0; right:0; height: 87%; max-width: 80%;">
                            <transition name="tran-1"> <b-img src="/images/i1_1.svg" v-if="slide==0 && visible" fluid class="pr-xl-5 mr-xl-5" style="max-height: 100%;"></b-img> </transition>
                        </div>
                        <div class="position-absolute d-none d-xl-block pr-lg-2 mr-xl-5" style="top: 31%; right: 0; height: 33%;">
                            <transition name="tran-4"> <b-img src="/images/i1_4.svg" v-if="slide==0 && visible" fluid class="h-100 pr-xl-5 mr-xl-5"></b-img> </transition>
                        </div>
                        <div class="position-absolute row d-none d-xl-block w-100 pl-xl-5 ml-xl-5" style="top: 28%; left: 0; height: 27%; ">
                            <div class="h-100 pl-xl-5 ml-xl-5"><transition name="tran-3"> <b-img src="/images/i1_3.svg" v-if="slide==0 && visible" fluid class="pl-xl-5 ml-xl-5 h-100"></b-img> </transition></div>
                        </div>
                        <div class="position-absolute d-mds-block pl-xl-5 ml-xl-5" style="bottom: 0; left: 0; height: 50%;">
                            <transition name="tran-2"> <b-img src="/images/i1_2.png" v-if="slide==0 && visible" fluid class="h-100 ml-lg-5"></b-img> </transition>
                        </div>
                        <div class="mt-5 text-left text-lg-center row w-100">
                            <div class="col-0 col-lg-1 col-xl-1"></div>
                            <div class="col-11 col-sm-9 col-md-12 pl-5 pl-md-5 pl-lg-0 col-lg-8 col-xl-6"> <transition name="tran-txt0"> <div v-if="slide==0 && visible" class="fw-300 letter-narrow-lg carousel-title">코웨이는 빅데이터, 인공지능, IoT 등 디지털 기반의 혁신을 통해</div> </transition></div> 
                        </div>
                        <div class="mt-2 text-left text-lg-center row w-100">
                            <div class="col-0 col-lg-1 col-xl-1"></div>
                            <div class="col-9 col-sm-8 col-md-10 pl-5 pl-md-5 pl-lg-0 col-lg-8 col-xl-6"> <transition name="tran-txt1"> <div v-if="slide==0 && visible" class="fw-300 letter-narrow-lg carousel-title">변화를 선도하고 고객 경험의 가치를 극대화합니다.</div> </transition></div> 
                        </div>
                    </div>
                </div>
            </template></b-carousel-slide>
            <b-carousel-slide><template v-slot:img>
                <div class="bg-i-img i2_bg">
                    <div class="position-relative carousel-height overflow-hidden"> 
                        <div class="position-absolute row w-100 mt-4 mt-sm-0 " style="top: 29%; left: 0; height: 29%; width:92%">
                            <div class="col-sm-1 col-md-3 col-lg-4 col-xl-5">&nbsp;</div>
                            <div class="col-sm-10 mt-2 mt-md-0 col-md-7 col-lg-8 col-xl-7 h-100 pr-5 pr-md-0 "><transition name="ran-1"> <b-img src="/images/i2_1.svg" v-if="slide==1 && visible==true" fluid class="h-100"></b-img> </transition></div>
                        </div>
                        <div class="position-absolute d-none d-lg-block pl-md-4 ml-xl-5" style="bottom: 25%; left: 0; height: 30%;">
                            <transition name="ran-2"> <b-img src="/images/i2_2.svg" v-if="slide==1 && visible" fluid class="h-100 pl-lg-5 ml-xl-5"></b-img> </transition>
                        </div>
                        <div class="position-absolute row w-100 pl-xl-5 ml-xl-5 mt-4 mt-sm-0" style="top:21%; left: 0; height: 12%;">
                            <div class="col-sm-2 col-lg-2 col-xl-3">&nbsp;</div>
                            <div class="col-sm-10 col-lg-10 col-xl-9 h-100 d-none d-md-flex justify-content-md-start pl-xl-5"><transition name="ran-3"> <b-img src="/images/i2_3.svg" v-if="slide==1 && visible" fluid class="h-100 pl-xl-5 ml-xl-5"></b-img> </transition></div>
                        </div>
                        <div class="position-absolute row w-100" style="bottom: 3%; left: 0; height: 30%;">
                            <div class="col-0 col-lg-2 col-xl-2">&nbsp;</div>
                            <div class="col-lg-10 col-xl-10 h-100"><transition name="ran-3"> <b-img src="/images/i2_4.svg" v-if="slide==1 && visible" fluid class="h-100 pl-xl-5 ml-xl-5"></b-img> </transition></div>
                        </div>
                        <div class="position-absolute ml-lg-2 row w-100 d-none d-lg-block" style="bottom: 20%; left: 0; height:13%;">
                            <transition name="ran-2"> <b-img src="/images/i2_5.svg" v-if="slide==1 && visible" fluid class="h-100 pl-xl-5 ml-xl-3"></b-img> </transition>
                        </div>
                        <div class="mt-5 pt-2 pt-xl-3 row w-100">
                            <div class="col-0 col-sm-2 col-md-2 col-lg-5 col-xl-6"></div>
                            <div class="col-12 text-right text-lg-left col-sm-10 col-md-10 col-lg-7 col-xl-6 pl-5 pl-sm-4 pl-xl-5"><transition name="tran-txt2"> <div v-if="slide==1 && visible" class="fw-300 letter-narrow-lg carousel-title pl-xl-2">코웨이는 물과 공기의 본질을 연구하는 전문기업으로,</div> </transition></div>
                        </div>
                        <div class="mt-2 row w-100">
                            <div class="col-0 col-sm-2 col-md-1 col-lg-6 col-xl-7"></div> 
                            <div class="col-12 col-sm-10 col-md-11 text-right text-lg-left col-lg-6 pl-5 pl-sm-4 col-xl-5"><transition name="tran-txt3"> <div v-if="slide==1 && visible" class="fw-300 letter-narrow-lg carousel-title">혁신적이고 안전한 제품을 끊임없이 개발합니다.</div> </transition></div>
                        </div>
                    </div>
                </div>
            </template></b-carousel-slide>
            <b-carousel-slide><template v-slot:img>
                <div class="bg-i-img i3_bg">
                    <div class="position-relative carousel-height overflow-hidden">
                        <div class="position-absolute row w-100" style="top:32%; right:0; height: 46%;">
                            <div class="col-lg-6 col-xl-7">&nbsp;</div>
                            <div class="col-lg-6 col-xl-5 h-100 d-none d-lg-block"><transition name="an-1"> <b-img src="/images/i3_2.svg" v-if="slide==2 && visible" fluid class="h-100"></b-img> </transition> </div>
                        </div>
                        <div class="position-absolute d-none d-md-block m-r-6" style="bottom:5%; height: 60%; max-width: 75%;">
                            <transition name="an-2"> <b-img src="/images/i3_1.svg" v-if="slide==2 && visible" fluid class="" style="max-height: 100%;"></b-img> </transition>
                        </div>
                        <div class="position-absolute row w-100 mt-5 mt-sm-0 pl-lg-5 ml-xl-5 d-flex justify-content-end justify-content-md-start" style="top:31%; left: 0; height: 21%;">
                            <transition name="an-3"> <b-img src="/images/i3_3.svg" v-if="slide==2 && visible" fluid class="h-100 mt-5 mt-sm-0 pl-md-5 ml-xl-5"></b-img> </transition>
                        </div>
                        <div class="position-absolute row w-100 mt-4 mt-md-0 " style="top:53%; left: 0; height: 33%;">
                            <div class="col-md-1 col-lg-2">&nbsp;</div>
                            <div class="col-md-11 col-lg-10 h-100"><transition name="an-4"> <b-img src="/images/i3_4.svg" v-if="slide==2 && visible" fluid class="h-100 pl-xl-5 ml-xl-4"></b-img> </transition></div>
                        </div>
                        <div class="position-absolute row w-100 pl-xl-5 d-none d-lg-block" style="top:47%; left: 0; height: 16%;">
                            <transition name="an-5"> <b-img src="/images/i3_5.svg" v-if="slide==2 && visible" fluid class="h-100 pl-xl-5 ml-xl-5"></b-img> </transition>
                        </div>
                        <div class="mt-5 mt-md-4 pt-3 row w-100">
                            <div class="col-sm-1 col-lg-1 col-xl-2"></div> 
                            <div class="col-10 col-sm-10 col-lg-8 col-xl-6 pl-5 pl-sm-0 pl-xl-5 ml-xl-2"><transition name="tran-txt2"> <div v-if="slide==2 && visible" class="gray65 fw-300 letter-narrow-lg carousel-title">코웨이는 미래세대를 위해 깨끗한 물과 공기를 순환하여 </div> </transition></div>
                        </div>  
                        <div class="mt-2 row w-100">
                            <div class="col-sm-1 col-lg-2 col-xl-3"></div> 
                            <div class="col-10 col-sm-10 col-lg-10 col-xl-6 pl-5 pl-sm-0"><transition name="tran-txt3"> <div v-if="slide==2 && visible" class="gray65 fw-300 letter-narrow-lg carousel-title"> 환경영향을 최소화하고 지속가능한 미래를 구현합니다.</div> </transition></div>
                        </div>                                        
                    </div>
                </div>
            </template></b-carousel-slide>
        </b-carousel>

        <!-- intro 영역 경계 -->
        <!-- intro 영역 경계 -->
        <!-- intro 영역 경계 -->
        <!-- intro 영역 경계 -->
        <!-- intro 영역 경계 -->
        <!-- intro 영역 경계 -->

        <b-container>
            <hr class="mb-45">
            <h1 class="text-center mb-3 fw-300 font-noto"> SUSTAINABILITY ISSUES 2020</h1>
            <section>
                <b-row class="mb-4">
                    <b-col class="col-0 col-md-1"></b-col>
                    <b-col class="col-12 col-md-10 text-center mb-4 f-105 letter-narrow gray6 fw-300"> 
                        코웨이는 글로벌 보고 기준에 부합하는 방법론으로 매년 중대성 평가를 실시하고 있습니다. <br>
                        2020년 중대성 평가 결과 제품과 서비스의 혁신, 제품 책임, 정보보안 및 개인정보보호 3가지 주제가 지속가능한 기업이 되기 위해 관리해야 할 주요 내용으로 도출되었습니다. 이 3가지 주제와 관련된 코웨이의 목표와 성과, 노력을 본 섹션에서 보고하고 있습니다.
                    </b-col>
                    <b-col class="col-0 col-md-1"></b-col>
                </b-row>
                <b-row>
                    <b-col class="col-12 col-md-4 text-white mb-3 mb-md-0">
                        <b-card class="bg-blue5 p-lg-2 h-100 position-relative border-0" >
                            <div class="f-90 fw-300 pr-4"> 
                            최근의 글로벌 사회·환경 문제는 소비자 생활패턴의 변화를 이끌며 환경가전 시장에 큰 영향을 끼치고 있습니다. 
                            </div>
                            <div class="my-2 my-md-4 my-xl-5" style="height:210px;"></div>
                            <div class="position-absolute w-100 pr-5" style="top:10%">
                                <div class="my-3 my-sm-2 my-md-5 my-lg-5 py-md-4 py-lg-1">&nbsp;</div>
                                <div class="d-flex align-items-center w-100" style="height:55px;"><div class="w-100 px-2 f-110 letter-narrow border border-white fw-300">제품과 서비스의 혁신</div></div>
                                <div class="d-flex justify-content-between align-items-center"> 
                                    <b-img src="/images/153.png" rounded="circle" class="main1-card-img mt-2 mb-3 d-md-none d-lg-block"></b-img> 
                                    <div class="card-plus mt-md-4 mt-lg-0" @click="$router.push('/static_page/Product-and-Service-Innovation')"><div class="bar horizontal"></div> <div class="bar vertical"></div> </div>
                                </div>
                            </div>
                        </b-card>
                    </b-col>
                    <b-col class="col-12 col-md-4 text-white mb-3 mb-md-0">
                        <b-card class="bg-blue6 p-lg-2 h-100 position-relative border-0">
                            <div class="f-90 fw-300 pr-4"> 
                            실내 생활환경의 위생과 건강에 대한 관심이 증가함에 따라 소비자들은 인체 무해성, 위생성, 환경적 영향력 등을 제품 선택의 우선순위로 두고 있습니다.
                            </div>
                            <div class="my-2 my-md-4 my-xl-5" style="height:210px;"></div>
                            <div class="position-absolute w-100 pr-5" style="top:10%">
                                <div class="my-4 my-sm-2 my-md-5 my-lg-5 py-md-4 py-lg-1">&nbsp;</div>
                                <div class="d-flex align-items-center w-100" style="height:55px;"><div class="w-100 px-2 f-110 letter-narrow border border-white fw-300">제품 책임</div></div>
                                <div class="d-flex justify-content-between align-items-center"> 
                                    <b-img src="/images/154.png" rounded="circle" class="main1-card-img mt-2 mb-3 d-md-none d-lg-block"></b-img>
                                    <div class="card-plus mt-md-4 mt-lg-0" @click="$router.push('/static_page/Product-Responsibility')"> <div class="bar horizontal"></div> <div class="bar vertical"></div> </div>
                                </div>
                            </div>
                        </b-card>
                    </b-col>
                    <b-col class="col-12 col-md-4 text-white mb-3 mb-md-0">
                        <b-card class="bg-blue4 p-lg-2 h-100 position-relative border-0" >
                            <div class="f-90 fw-300 pr-4"> 
                                ICT 기술의 급격한 발달을 기반으로 데이터 및 정보 기반 인프라의 활용성이 극대화되는 한편, 정보 유출 및 사이버 공격 등 사회적 문제에 대한 우려가 커지고 있습니다.
                            </div>
                            <div class="my-2 my-md-4 my-xl-5" style="height:210px;"></div>
                            <div class="position-absolute w-100 pr-5" style="top:10%">
                                <div class="my-4 my-sm-2 my-md-5 my-lg-5 py-md-4 py-lg-1">&nbsp;</div>
                                <div class="d-flex align-items-center w-100" style="height:55px;"><div class="w-100 px-2 f-110 letter-narrow border border-white fw-300">정보보안 및 개인정보 보호</div></div>
                                <div class="d-flex justify-content-between align-items-center"> 
                                    <b-img src="/images/155.png" rounded="circle" class="main1-card-img mt-2 mb-3 d-md-none d-lg-block"></b-img>
                                    <div class="card-plus mt-md-4 mt-lg-0"  @click="$router.push('/static_page/Information-Security-and-Personal-Information-Protection')"> <div class="bar horizontal"></div> <div class="bar vertical"></div> </div>
                                </div>
                            </div>
                        </b-card>
                    </b-col>
                </b-row>
            </section>
            <hr class="mb-5 py-5">

            <!-- KEY FIGURES 2019 -->
            <!-- KEY FIGURES 2019 -->
            <!-- KEY FIGURES 2019 -->

            <h1 class="text-center mb-3 fw-300 font-noto"> KEY FIGURES 2019</h1>
            <section>
                <b-row class="mb-4">
                    <b-col class="col-0 col-md-1"></b-col>
                    <b-col class="col-12 col-md-10 text-center letter-narrow f-105 mb-4 gray6 px-xl-5 fw-300 font-noto">
                        물과 공기를 다루는 업이 생명과 직결되는 만큼, 코웨이의 지속가능경영은 우리가 하는 일에 책임을 다하는 것에서 시작합니다. <br>
                        코웨이는 제품 및 서비스 개발, 생산, 마케팅, 판매에 이르기까지 비즈니스 전 과정에서 지속가능성을 추구하기 위해 노력합니다. 2019년 코웨이의 경제, 환경, 사회 관련 주요 성과 지표를 한 눈에 볼 수 있습니다. 
                    </b-col>
                    <b-col class="col-0 col-md-1"></b-col>
                </b-row>
                <div class="col-12 bg-gray3 f-105 fw-600 py-2 px-3"> Economic Performance </div>
                <b-row class="my-4 py-md-3">
                    <b-col class="col-12 col-md-4 mb-4 mb-md-0" v-view="viewHandlerGraph">
                        <h7 class="mb-md-4 blue7 fw-600 letter-narrow line-height-15 pr-xl-3"> 코웨이는 물과 공기를 깨끗하게 하는 ‘본질’에 집중하며, 고객 경험과 서비스의 가치를 향상하기 위한 끊임없는 혁신으로 지속성장해가고 있습니다. 
                        </h7>
                        <p class="blue7 fw-600 f-105 mb-1"> 매출액 </p>
                        <div class="overflow-hidden">
                            <div class="d-flex d-md-inline d-lg-flex align-items-center f-80">
                                <transition name="graph-1"> <div v-if="raising" class="bg-gray4 tans-bar-x gray5 pl-2" style="height:18px; width:50%; line-height:1.5;">2017</div> </transition>
                                <div class="ml-3 letter-narrow"> <span class="f-110"> 23,205</span><span class="fw-300">억원</span> </div>
                            </div>
                            <div class="d-flex d-md-inline d-lg-flex align-items-center f-80">
                                <transition name="graph-2"> <div v-if="raising" class="bg-gray4 tans-bar-x gray5 pl-2" style="height:18px; width:60%; line-height:1.5;">2018</div> </transition>
                                <div class="ml-3 letter-narrow"> <span class="f-110"> 27,073</span><span class="fw-300">억원</span> </div>
                            </div>
                            <div class="d-flex d-md-inline d-lg-flex align-items-center f-80">
                                <transition name="graph-2"> <div v-if="raising" class="tans-bar-x text-white pl-2" style="height:18px; width:70%; background-color:#1494d4; line-height:1.5;">2019</div> </transition>
                                <div class="ml-3 letter-narrow"> <span class="f-140"> 30,189</span><span class="fw-300">억원</span> </div>
                            </div>
                        </div>
                    </b-col>
                    <b-col class="col-12 col-md-4 position-relative py-4 py-md-0">                    
                        <div class="position-absolute d-none d-md-block bg-gray3" style="height: 100%; width:2px; left:0; top:0;"></div>
                        <div class="position-absolute d-block d-md-none bg-gray3" style="height: 2px; width:94%; left:3%; top:0;"></div>
                        <div class="px-lg-2 mb-md-5 mb-xl-4 text-center pb-3 pt-1 py-md-0"><b-img src="/images/144_1.svg" fluid></b-img> </div>
                        <div class="blue7 fw-600 pt-md-4 pt-lg-3 mb-2"> 제품과 서비스 혁신 </div>
                        <div class="blue7 fw-400 pr-xl-4 font-noto"> 본질적 가치를 높이는 제품과 서비스 혁신으로 CES에서 5년 연속 혁신상을 수상했습니다. 
                        </div>
                    </b-col>
                    <b-col class="col-12 col-md-4 position-relative py-4 py-md-0">
                        <div class="position-absolute d-none d-md-block bg-gray3" style="height: 100%; width:2px; left:0; top:0;"></div>
                        <div class="position-absolute d-block d-md-none bg-gray3" style="height: 2px; width:94%; left:3%; top:0;"></div>
                        <div class="d-flex justify-content-between align-items-start mb-md-5 mb-lg-4">
                            <div class="blue7 f-105 fw-300 letter-narrow mt-m-3"><span class="main2-card-num"><animated-number :value="779" :comma="true" :fixed="0"></animated-number></span>만 계정</div>
                            <div class="text-right pl-3 pb-2 pb-md-0"><b-img src="/images/108_1.svg" fluid></b-img></div>
                        </div>
                        <div class="gray6 fw-400 word-break pt-md-4 pt-lg-0 pr-xl-3 font-noto"> 2019년 말 기준 국내외 779만 고객 계정을 보유한 코웨이는 오랜 기간 연구해온 데이터를 미래 기술과 접목하여 고객에게 보다 정확하고 편리한 새로운 서비스 경험을 제공합니다. 
                        </div>
                    </b-col>
                </b-row>
                <div class="col-12 bg-gray3 f-105 fw-600 py-2 px-3"> Social Performance </div>
                <b-row class="my-4 py-md-3">
                    <b-col class="col-12 col-md-4 position-relative mb-4 mb-md-0">
                        <div class="blue7 main1-card-num mb-3 fw-300"><span style="letter-spacing:-0.1rem;"><animated-number :value="1000000" :comma="true" :fixed="0"></animated-number></span><span class="f-105">천원</span></div>
                        <div class="d-flex justify-content-between align-items-end">
                            <div class="gray6 pr-4 fw-400 letter-narrow"> 코로나바이러스감염증-19로 많은 지원이 필요한 지역사회에 10억원을 기부했습니다. 이 성금은 방호 물품, 진단키트 등 의료 물품 부족에 직면한 전국 의료진에 대한 지원과 의료복지 시설 방역에 사용되었습니다. 
                            </div>
                            <div class="temp-icon5 d-block d-md-none d-lg-block"> <b-img src="/images/103_1.svg" fluid ></b-img></div>
                        </div>
                    </b-col>
                    <b-col class="col-12 col-md-4 blue7 py-4 py-md-0">
                        <div class="position-absolute d-none d-md-block bg-gray3" style="height: 100%; width:2px; left:0; top:0;"></div>
                        <div class="position-absolute d-block d-md-none bg-gray3" style="height: 2px; width:94%; left:3%; top:0;"></div>
                        <h7 class="mb-4 mb-md-4 fw-600 font-noto line-height-low"> 물과 공기 나눔 <span class="f-80 fw-300">(2015~2019년 정수기 및 공기청정기 지원 누적)</span></h7>
                        <b-row>
                            <b-col class="col-6 text-center px-md-1 px-lg-3 d-flex flex-row flex-md-column">
                                <div class="temp-icon5 mb-2 mb-lg-3 pr-3 pr-sm-0 d-none d-sm-block"><b-img src="/images/104_1.svg" fluid class="h-100"></b-img></div>
                                <div><h7 class="fw-600 f-105">생명의 물 나눔</h7> <div class="mt-m-3" style="margin-bottom: -1rem;"><span class="main2-card-num fw-300 f-105"><animated-number :value="825" :comma="true" :fixed="0"></animated-number></span>대</div></div>
                            </b-col>
                            <b-col class="col-6 text-center px-md-1 px-lg-3 d-flex flex-row flex-md-column">
                                <div class="temp-icon5 mb-2 mb-lg-3 pr-3 pr-sm-0 d-none d-sm-block"><b-img src="/images/105_1.svg" fluid class="h-100"></b-img></div>
                                <div><h7 class="fw-600 f-105">청정한 공기 나눔</h7> <div class="mt-m-3" style="margin-bottom: -1rem;"> <span class="main2-card-num fw-300 f-105"><animated-number :value="450" :comma="true" :fixed="0"></animated-number></span>대</div></div>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="col-12 col-md-4 position-relative py-4 py-md-0">
                        <div class="position-absolute d-none d-md-block bg-gray3" style="height: 100%; width:2px; left:0; top:0;"></div>
                        <div class="position-absolute d-block d-md-none bg-gray3" style="height: 2px; width:94%; left:3%; top:0;"></div>
                        <h7 class="blue7 mb-4 mb-md-5 fw-600"> 협력사 상생 활동</h7>
                        <div class="gray6 pr-xl-4"> 코웨이는 협력사와의 긴밀한 협력과 상생활동을 추진하여 산업 내 건강한 거래문화를 견인하고자 합니다. 협력사와 열린 소통을 추진하여 경영안정 기반 강화, 성장 인프라 지원 등 다각적인 동반성장 활동을 추진합니다. 
                        </div>
                    </b-col>
                </b-row>
                <div class="col-12 bg-gray3 f-105 fw-600 py-2 px-3"> Environmental Performance </div>
                <b-row class="my-4 py-md-3">
                    <b-col class="col-12 col-md-4 position-relative mb-4 mb-md-0">
                        <h7 class="blue7 fw-600 mb-2"> 친환경 제품 개발 </h7>
                        <div class="gray6 mb-3 mb-md-5 pb-xl-2 letter-narrow pr-xl-2"> 코웨이는 제품 개발 프로세스, 청정 생산, 렌탈 서비스, 회수 및 재활용에 이르는 전 과정에서 부정적 환경영향을 줄이는 친환경적 비즈니스를 설계합니다.  
                        </div>
                        <div class="d-flex justify-content-between align-items-center">            
                            <div class="blue7 d-flex flex-row flex-md-column"><h7 class="fw-600 font-noto letter-narrow-lg"> 친환경 제품 매출액 </h7>
                                <div class="f-105 ml-3 ml-md-0" style="line-height:1;"><span class="main1-card-num fw-300 font-open"><animated-number :value="5529" :comma="true" :fixed="0"></animated-number></span>억원</div>
                            </div>
                            <div class="text-right d-none d-sm-block" style="max-width: 92px"><b-img src="/images/106_1.svg" fluid></b-img></div>
                        </div>
                    </b-col>
                    <b-col class="col-12 col-md-4 position-relative py-4 py-md-0">
                        <div class="position-absolute d-none d-md-block bg-gray3" style="height: 100%; width:2px; left:0; top:0;"></div>
                        <div class="position-absolute d-block d-md-none bg-gray3" style="height: 2px; width:94%; left:3%; top:0;"></div>
                        <div class="gray6 letter-narrow font-noto mb-45"> 2010년 온실가스 원단위 0.357 tCO<span class="f-60">2</span>e/억원 대비 2019년 원단위 0.234 tCO<span class="f-60">2</span>e/억원으로 매출 증가 대비 온실가스 배출량을 최대한 억제하여 기준년도 대비 약 70% 저감했습니다. 2020년에는 과학적 감축 목표 계획에 근거하여 2030년까지 중장기 목표를 수립하였습니다. 
                        </div>
                        <div class="d-flex justify-content-around align-items-end"> 
                            <div class="px-1"><b-img src="/images/145_1.svg" fluid></b-img></div>      
                            <div class="px-1"><b-img src="/images/146_1.svg" fluid></b-img></div>  
                            <div class="px-1"><b-img src="/images/147_1.svg" fluid></b-img></div>  
                        </div>
                    </b-col>    
                    <b-col class="col-12 col-md-4 position-relative py-4 py-md-0">
                        <div class="position-absolute d-none d-md-block bg-gray3" style="height: 100%; width:2px; left:0; top:0;"></div>
                        <div class="position-absolute d-block d-md-none bg-gray3" style="height: 2px; width:94%; left:3%; top:0;"></div>
                        <div class="d-flex justify-content-between align-items-start mb-md-4">
                            <div class="blue7 main1-card-num letter-narrow-lg fw-300"><animated-number :value="99.1"></animated-number>%</div>
                            <div class="text-right pl-3 pb-2 pb-md-0" style="max-width: 109px"><b-img src="/images/107_1.svg" fluid ></b-img></div>
                        </div>
                        <h7 class="blue7 fw-600 mb-2 pt-md-4 pt-lg-0"> 폐기물 재활용률 </h7>
                        <div class="gray6 letter-narrow pr-xl-3"> 코웨이는 제품 생산 및 사용 후 폐기 과정에서 발생하는 폐기물과 폐제품을 재활용하여 순환경제 구축에 기여하고 있습니다. 
                        </div>
                        <p class="f-80 gray5 mb-0">*99.1%: 제품, 서비스, 사업장 폐기물 중 재활용한 폐기물의 비율 (재활용한 폐기물 총량/입고된 폐기물 총량 x 100)  </p>
                    </b-col>                
                </b-row>
            </section>
            <hr class="mb-5 py-5">
            <h1 class="text-center mb-3 fw-300"> SUSTAINABILITY NEWS</h1>
            <b-row class="mb-3">
                <b-col class="col-0 col-md-1"></b-col>
                <b-col class="col-12 col-md-10 text-center gray6 letter-narrow f-105 mb-4 fw-300">주요 이해관계자와 함께 새로운 가치를 더하기 위한 코웨이의 노력, 지속가능성 관련 소식을 여기서 만나볼 수 있습니다.
                </b-col>
                <b-col class="col-0 col-md-1"></b-col>
            </b-row>
            <b-row class="mb-5">
                <b-col v-for="item in main_articles" :key="item.id" class="col-12 col-md-4 mb-3 mb-md-0">
                    <b-card no-body class="shadow border-0 cursor " @click="$router.push('/news/view_article?id='+item.id)">

                        <div class="overflow-hidden"><b-card-img v-if="item.picture_file_url" :src="item.picture_file_url" alt="Image" class="main-news-card-img" img-top ></b-card-img>   </div>
                        <b-card-body class="p-4">
                            <p class="px-2 mb-1 fw-400 f-110 gray6 overflow-hidden" style="max-height:52px; min-height:52px;"> {{ item.title }} </p>
                            <p class="px-2 f-90 gray5 mb-0 overflow-hidden" style="max-height:65px; min-height:65px;">{{ item.description }} </p>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
            <div class="w-100 text-center d-flex justify-content-center align-items-center pt-3" style="height: 100px;">
                <div class="card-plus-news" @click="$router.push('/news')"> <div class="bar-news horizontal"></div> <div class="bar-news vertical"></div> </div>
            </div>
            <hr class="mb-5 space-p75">
        </b-container>   
    </template> 


    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->
    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->
    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->    
    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->
    
    
    <template  v-else >
        <b-carousel id="intro-carousel" v-view="viewHandlerIntro" v-model="slide" :interval="6000" controls indicators background="#fff" @sliding-start="onSlideStart" @sliding-end="onSlideEnd" class="">
            <b-carousel-slide><template v-slot:img>
                <div class="bg-i-img i1_bg">
                    <div class="position-relative carousel-height overflow-hidden">
                        <div class="position-absolute d-md-block pr-lg-5 mr-xl-5 m-r-5" style="top:0; right:0; height: 87%; max-width: 80%;">
                            <transition name="tran-1"> <b-img src="/images/e1_1.png" v-if="slide==0 && visible" fluid class="pr-xl-5 mr-xl-5" style="max-height: 100%;"></b-img> </transition>
                        </div>
                        <div class="position-absolute d-none d-xl-block pr-lg-2 mr-xl-5" style="top: 31%; right: 0; height: 33%;">
                            <transition name="tran-4"> <b-img src="/images/e1_4.svg" v-if="slide==0 && visible" fluid class="h-100 pr-xl-5 mr-xl-5"></b-img> </transition>
                        </div>
                        <div class="position-absolute row d-none d-xl-block w-100 pl-xl-5 ml-xl-5" style="top: 28%; left: 0; height: 27%; ">
                            <div class="h-100 pl-xl-5 ml-xl-5"><transition name="tran-3"> <b-img src="/images/e1_3.svg" v-if="slide==0 && visible" fluid class="pl-xl-5 ml-xl-5 h-100"></b-img> </transition></div>
                        </div>
                        <div class="position-absolute d-mds-block pl-xl-5 ml-xl-5" style="bottom: 0; left: 0; height: 50%;">
                            <transition name="tran-2"> <b-img src="/images/e1_2.png" v-if="slide==0 && visible" fluid class="h-100 ml-lg-5"></b-img> </transition>
                        </div>
                        <div class="mt-5 text-left text-lg-center row w-100">
                            <div class="col-0 col-lg-1 col-xl-1"></div>
                            <div class="col-11 col-sm-9 col-md-10 pl-5 pl-md-5 pl-lg-0 col-lg-8 col-xl-7"> <transition name="tran-txt0"> <div v-if="slide==0 && visible" class="fw-300 letter-narrow-lg carousel-title">Coway maximizes the value of the customer experience, </div> </transition></div> 
                        </div>
                        <div class="mt-2 text-left text-lg-center row w-100">
                            <div class="col-0 col-lg-1 col-xl-1"></div>
                            <div class="col-9 col-sm-8 col-md-11 pl-5 pl-md-5 pl-lg-0 col-lg-8 col-xl-7"> <transition name="tran-txt1"> <div v-if="slide==0 && visible" class="fw-300 letter-narrow-lg carousel-title">driving digital-based innovation such as big data, A.I., and IoT.</div> </transition></div> 
                        </div>
                    </div>
                </div>
            </template></b-carousel-slide>
            <b-carousel-slide><template v-slot:img>
                <div class="bg-i-img i2_bg">
                    <div class="position-relative carousel-height overflow-hidden"> 
                        <div class="position-absolute row w-100 mt-4 mt-sm-0 " style="top: 29%; left: 0; height: 29%; width:92%">
                            <div class="col-sm-1 col-md-3 col-lg-4 col-xl-5">&nbsp;</div>
                            <div class="col-sm-10 mt-2 mt-md-0 col-md-7 col-lg-8 col-xl-7 h-100 pr-5 pr-md-0 "><transition name="ran-1"> <b-img src="/images/e2_1.svg" v-if="slide==1 && visible==true" fluid class="h-100"></b-img> </transition></div>
                        </div>
                        <div class="position-absolute d-none d-lg-block pl-md-4 ml-xl-5" style="bottom: 25%; left: 0; height: 30%;">
                            <transition name="ran-2"> <b-img src="/images/i2_2.svg" v-if="slide==1 && visible" fluid class="h-100 pl-lg-5 ml-xl-5"></b-img> </transition>
                        </div>
                        <div class="position-absolute row w-100 pl-xl-5 ml-xl-5 mt-4 mt-sm-0" style="top:21%; left: 0; height: 12%;">
                            <div class="col-sm-2 col-lg-2 col-xl-3">&nbsp;</div>
                            <div class="col-sm-10 col-lg-10 col-xl-9 h-100 d-none d-md-flex justify-content-md-start pl-xl-5"><transition name="ran-3"> <b-img src="/images/e2_3.svg" v-if="slide==1 && visible" fluid class="h-100 pl-xl-5 ml-xl-5"></b-img> </transition></div>
                        </div>
                        <div class="position-absolute row w-100" style="bottom: 3%; left: 0; height: 30%;">
                            <div class="col-0 col-lg-2 col-xl-2">&nbsp;</div>
                            <div class="col-lg-10 col-xl-10 h-100"><transition name="ran-3"> <b-img src="/images/e2_4.svg" v-if="slide==1 && visible" fluid class="h-100 pl-xl-5 ml-xl-5"></b-img> </transition></div>
                        </div>
                        <div class="position-absolute ml-lg-2 row w-100 d-none d-lg-block" style="bottom: 20%; left: 0; height:13%;">
                            <transition name="ran-2"> <b-img src="/images/i2_5.svg" v-if="slide==1 && visible" fluid class="h-100 pl-xl-5 ml-xl-3"></b-img> </transition>
                        </div>
                        <div class="mt-5 pt-2 pt-xl-3 row w-100">
                            <div class="col-0 col-sm-2 col-md-2 col-lg-4 col-xl-6"></div>
                            <div class="col-12 text-right text-lg-left col-sm-10 col-md-10 col-lg-8 col-xl-6 pl-5 pl-sm-2 pl-xl-3"><transition name="tran-txt2"> <div v-if="slide==1 && visible" class="fw-300 letter-narrow-lg carousel-title pl-xl-2">Coway specializes in the core of water and air,</div> </transition></div>
                        </div>
                        <div class="mt-2 row w-100">
                            <div class="col-0 col-sm-2 col-md-1 col-lg-4 col-xl-6"></div> 
                            <div class="col-12 col-sm-10 col-md-11 text-right text-lg-left col-lg-8 pl-5 pl-sm-4 pl-xl-5 col-xl-6"><transition name="tran-txt3"> <div v-if="slide==1 && visible" class="fw-300 letter-narrow-lg carousel-title">constantly developing innovative and safety products.</div> </transition></div>
                        </div>
                    </div>
                </div>
            </template></b-carousel-slide>
            <b-carousel-slide><template v-slot:img>
                <div class="bg-i-img i3_bg">
                    <div class="position-relative carousel-height overflow-hidden">
                        <div class="position-absolute row w-100" style="top:32%; right:0; height: 46%;">
                            <div class="col-lg-6 col-xl-7">&nbsp;</div>
                            <div class="col-lg-6 col-xl-5 h-100 d-none d-lg-block"><transition name="an-1"> <b-img src="/images/i3_2.svg" v-if="slide==2 && visible" fluid class="h-100"></b-img> </transition> </div>
                        </div>
                        <div class="position-absolute d-none d-md-block m-r-6" style="bottom:5%; height: 60%; max-width: 75%;">
                            <transition name="an-2"> <b-img src="/images/e3_1.png" v-if="slide==2 && visible" fluid class="" style="max-height: 100%;"></b-img> </transition>
                        </div>
                        <div class="position-absolute row w-100 mt-5 mt-sm-0 pl-lg-5 ml-xl-5 d-flex justify-content-end justify-content-md-start" style="top:31%; left: 0; height: 21%;">
                            <transition name="an-3"> <b-img src="/images/e3_3.svg" v-if="slide==2 && visible" fluid class="h-100 mt-5 mt-sm-0 pl-md-5 ml-xl-5"></b-img> </transition>
                        </div>
                        <div class="position-absolute row w-100 mt-4 mt-md-0 " style="top:53%; left: 0; height: 33%;">
                            <div class="col-md-1 col-lg-2">&nbsp;</div>
                            <div class="col-md-11 col-lg-10 h-100"><transition name="an-4"> <b-img src="/images/e3_4.png" v-if="slide==2 && visible" fluid class="h-100 pl-xl-5 ml-xl-4"></b-img> </transition></div>
                        </div>
                        <div class="position-absolute row w-100 pl-xl-5 d-none d-lg-block" style="top:47%; left: 0; height: 16%;">
                            <transition name="an-5"> <b-img src="/images/i3_5.svg" v-if="slide==2 && visible" fluid class="h-100 pl-xl-5 ml-xl-5"></b-img> </transition>
                        </div>
                        <div class="mt-5 mt-md-4 pt-3 row w-100">
                            <div class="col-sm-1 col-lg-1 col-xl-1"></div> 
                            <div class="col-10 col-sm-8 col-lg-10 col-xl-8 pl-5 pl-sm-0 pl-xl-5 ml-xl-2"><transition name="tran-txt2"> <div v-if="slide==2 && visible" class="gray65 fw-300 letter-narrow-lg carousel-title">Coway minimizes environmental impact and realizes a sustainable future</div> </transition></div>
                        </div>  
                        <div class="mt-2 row w-100">
                            <div class="col-sm-1 col-lg-2 col-xl-2"></div> 
                            <div class="col-10 col-sm-10 col-lg-10 col-xl-7 pl-5 pl-sm-0"><transition name="tran-txt3"> <div v-if="slide==2 && visible" class="gray65 fw-300 letter-narrow-lg carousel-title">by circulating clean water and air for future generations.</div> </transition></div>
                        </div>                                        
                    </div>
                </div>
            </template></b-carousel-slide>
        </b-carousel>

        <!-- intro 영역 경계 -->
        <!-- intro 영역 경계 -->
        <!-- intro 영역 경계 -->

        <b-container>
            <hr class="mb-45">
            <h1 class="text-center mb-3 fw-300 font-noto"> SUSTAINABILITY ISSUES 2020</h1>
            <section>
                <b-row class="mb-4">
                    <b-col class="col-0 col-md-1"></b-col>
                    <b-col class="col-12 col-md-10 text-center mb-4 font-noto letter-narrow gray6 fw-300"> 
                        Coway conducts a materiality assessment every year with a methodology that meets global reporting standards. <br>
                        As a result of the materiality assessment in 2020, three topics were identified as the main contents to be managed to become a sustainable company: Product and Service Innovation, Product Responsibility, and Information Security and Privacy Protection. Coway's goals, achievements, and efforts related to these three topics are reported in this section.
                    </b-col>
                    <b-col class="col-0 col-md-1"></b-col>
                </b-row>
                <b-row>
                    <b-col class="col-12 col-md-4 text-white mb-3 mb-md-0">
                        <b-card class="bg-blue5 p-lg-2 h-100 position-relative border-0" >
                            <div class="f-85 fw-300 pr-3 line-height-low"> 
                                Recent global social and environmental issues such as the spread of the pandemic and increasing fine dust are driving the change in consumer life patterns, affecting home appliance market significantly.
                            </div>
                            <div class="my-2 my-md-4 my-xl-5" style="height:210px;"></div>
                            <div class="position-absolute w-100 pr-5 bluebox-helper-3">
                                <div class="my-3 my-sm-2 my-md-5 my-lg-5 py-md-4 py-lg-1">&nbsp;</div>
                                <div class="d-flex align-items-center w-100" style="height:55px;"><div class="w-100 px-2 f-110 letter-narrow border border-white fw-300 pb-lg-1 line-height-low">Product and Service Innovation</div></div>
                                <div class="d-flex justify-content-between align-items-center"> 
                                    <b-img src="/images/153.png" rounded="circle" class="main1-card-img mt-2 mb-3 d-md-none d-lg-block"></b-img> 
                                    <div class="card-plus mt-md-4 mt-lg-0" @click="$router.push('/static_page/Product-and-Service-Innovation')"><div class="bar horizontal"></div> <div class="bar vertical"></div> </div>
                                </div>
                            </div>
                        </b-card>
                    </b-col>
                    <b-col class="col-12 col-md-4 text-white mb-3 mb-md-0">
                        <b-card class="bg-blue6 p-lg-2 h-100 position-relative border-0">
                            <div class="f-85 fw-300 pr-3 line-height-low">
                                While a growing number of people are interested in sanitation of healthy indoor living environment, consumers put nonmaleficence to the human body, sanitation quality, and environmental impacts as priorities for product selection.
                            </div>
                            <div class="my-2 my-md-4 my-xl-5" style="height:210px;"></div>
                            <div class="position-absolute w-100 pr-5 bluebox-helper-1">
                                <div class="my-4 my-sm-2 my-md-5 my-lg-5 py-md-4 py-lg-1">&nbsp;</div>
                                <div class="d-flex align-items-center w-100" style="height:55px;"><div class="w-100 px-2 f-110 letter-narrow border border-white fw-300 pb-lg-1 line-height-low">Product Responsibility</div></div>
                                <div class="d-flex justify-content-between align-items-center"> 
                                    <b-img src="/images/154.png" rounded="circle" class="main1-card-img mt-2 mb-3 d-md-none d-lg-block"></b-img>
                                    <div class="card-plus mt-md-4 mt-lg-0" @click="$router.push('/static_page/Product-Responsibility')"> <div class="bar horizontal"></div> <div class="bar vertical"></div> </div>
                                </div>
                            </div>
                        </b-card>
                    </b-col>
                    <b-col class="col-12 col-md-4 text-white mb-3 mb-md-0">
                        <b-card class="bg-blue4 p-lg-2 h-100 position-relative border-0" >
                            <div class="f-85 fw-300 pr-3 line-height-low"> 
                                As much as the applicability of data and information-based Infrastructure is maximized through the rapid development of ICT technology, there are rising concerns for social issues such as information leakage and cyber-attack.
                            </div>
                            <div class="my-2 my-md-4 my-xl-5" style="height:210px;"></div>
                            <div class="position-absolute w-100 pr-5 bluebox-helper-2">
                                <div class="my-4 my-sm-2 my-md-5 my-lg-5 py-md-4 py-lg-1">&nbsp;</div>
                                <div class="d-flex align-items-center w-100" style="height:55px;"><div class="w-100 px-2 f-110 letter-narrow border border-white fw-300 pb-lg-1 line-height-low">Information Security and Privacy Protection</div></div>
                                <div class="d-flex justify-content-between align-items-center"> 
                                    <b-img src="/images/155.png" rounded="circle" class="main1-card-img mt-2 mb-3 d-md-none d-lg-block"></b-img>
                                    <div class="card-plus mt-md-4 mt-lg-0"  @click="$router.push('/static_page/Information-Security-and-Personal-Information-Protection')"> <div class="bar horizontal"></div> <div class="bar vertical"></div> </div>
                                </div>
                            </div>
                        </b-card>
                    </b-col>
                </b-row>
            </section>
            <hr class="mb-5 py-5">

            <!-- KEY FIGURES 2019 -->
            <!-- KEY FIGURES 2019 -->
            <!-- KEY FIGURES 2019 -->

            <h1 class="text-center mb-3 fw-300 font-noto"> KEY FIGURES 2019</h1>
            <section>
                <b-row class="mb-4">
                    <b-col class="col-0 col-md-1"></b-col>
                    <b-col class="col-12 col-md-10 text-center letter-narrow mb-4 gray6 px-xl-5 fw-300 font-noto">
                        Since water and air are directly related to life, Coway's sustainability management starts with taking responsibility for what we do. Coway strives to pursue sustainability in the entire business process; from product and service development, production, marketing, and sales. Coway's key economic, environmental, and social performance indicators for 2019 can be seen at a glance.
                    </b-col>
                    <b-col class="col-0 col-md-1"></b-col>
                </b-row>
                <div class="col-12 bg-gray3 f-105 fw-600 py-2 px-3"> Economic Performance </div>
                <b-row class="my-4 py-md-3">
                    <b-col class="col-12 col-md-4 mb-4 mb-md-0" v-view="viewHandlerGraph">
                        <h7 class="mb-md-4 blue7 fw-600 letter-narrow line-height-15 pr-xl-3"> Coway focuses on the essence of purifying water and air and continues to grow with constant innovation to improve the value of customer experiences and services.
                        </h7>
                        <p class="blue7 fw-600 f-105 mb-1"> Revenue <span class="gray6 fw-300 f-75">(Unit: billion KRW)</span></p>
                        <div class="overflow-hidden">
                            <div class="d-flex d-md-inline d-lg-flex align-items-center f-80">
                                <transition name="graph-1"> <div v-if="raising" class="bg-gray4 tans-bar-x gray5 pl-2" style="height:18px; width:50%; line-height:1.5;">2017</div> </transition>
                                <div class="ml-3 letter-narrow"> <span class="f-110"> 2,320.5</span></div>
                            </div>
                            <div class="d-flex d-md-inline d-lg-flex align-items-center f-80">
                                <transition name="graph-2"> <div v-if="raising" class="bg-gray4 tans-bar-x gray5 pl-2" style="height:18px; width:60%; line-height:1.5;">2018</div> </transition>
                                <div class="ml-3 letter-narrow"> <span class="f-110"> 2,707.3</span></div>
                            </div>
                            <div class="d-flex d-md-inline d-lg-flex align-items-center f-80">
                                <transition name="graph-2"> <div v-if="raising" class="tans-bar-x text-white pl-2" style="height:18px; width:70%; background-color:#1494d4; line-height:1.5;">2019</div> </transition>
                                <div class="ml-3 letter-narrow"> <span class="f-140"> 3,018.9</span></div>
                            </div>
                        </div>
                    </b-col>
                    <b-col class="col-12 col-md-4 position-relative py-4 py-md-0">                    
                        <div class="position-absolute d-none d-md-block bg-gray3" style="height: 100%; width:2px; left:0; top:0;"></div>
                        <div class="position-absolute d-block d-md-none bg-gray3" style="height: 2px; width:94%; left:3%; top:0;"></div>
                        <div class="px-lg-2 mb-md-5 mb-xl-4 text-center pb-3 pt-1 py-md-0"><b-img src="/images/144_1.svg" fluid></b-img> </div>
                        <div class="blue7 fw-600 pt-md-4 pt-lg-3 mb-2"> Product and Service Innovation </div>
                        <div class="blue7 fw-400 f-95 pr-xl-4 font-noto"> With product and service innovation that enhances the essential value, we received "CES Innovation Award" for 5 consecutive years.
                        </div>
                    </b-col>
                    <b-col class="col-12 col-md-4 position-relative py-4 py-md-0">
                        <div class="position-absolute d-none d-md-block bg-gray3" style="height: 100%; width:2px; left:0; top:0;"></div>
                        <div class="position-absolute d-block d-md-none bg-gray3" style="height: 2px; width:94%; left:3%; top:0;"></div>
                        <div class="d-flex justify-content-between align-items-start mb-md-5 mb-lg-4">
                            <div class="blue7 f-105 fw-300 letter-narrow mt-m-3"><span class="main2-card-num"><animated-number :value="7.79" :fixed="2"></animated-number></span><br class="d-none d-md-inline d-xl-none">million Accounts</div>
                            <div class="text-right pl-2 pb-2 pb-md-0"><b-img src="/images/108_1.svg" fluid></b-img></div>
                        </div>
                        <div class="gray6 f-95 fw-400 word-break pt-md-4 pt-lg-0 pr-xl-3 font-noto"> As of the end of 2019, with account of 7.79 million customers, we combine long-researched data with future technology to provide customers with a more accurate and convenient new service experience.
                        </div>
                    </b-col>
                </b-row>
                <div class="col-12 bg-gray3 f-105 fw-600 py-2 px-3"> Social Performance </div>
                <b-row class="my-4 py-md-3">
                    <b-col class="col-12 col-md-4 position-relative mb-4 mb-md-0">
                        <div class="blue7 main1-card-num mb-3 fw-300"><span style="letter-spacing:-0.1rem;"><animated-number :value="1000" :comma="true" :fixed="0"></animated-number></span><span class="f-105">million KRW</span></div>
                        <div class="d-flex justify-content-between align-items-end">
                            <div class="gray6 f-95 pr-4 fw-400 letter-narrow"> We donated 1 billion KRW to the communities in need due to COVID-19. The donation was used to provide medical aid to national medical staffs with scarce medical supplies, such as protective items and diagnostic kits and medical welfare facilities with preventive measures against COVID-19.
                            </div>
                            <div class="temp-icon5 d-block d-md-none d-lg-block"> <b-img src="/images/103_1.svg" fluid ></b-img></div>
                        </div>
                    </b-col>
                    <b-col class="col-12 col-md-4 blue7 py-4 py-md-0">
                        <div class="position-absolute d-none d-md-block bg-gray3" style="height: 100%; width:2px; left:0; top:0;"></div>
                        <div class="position-absolute d-block d-md-none bg-gray3" style="height: 2px; width:94%; left:3%; top:0;"></div>
                        <h7 class="mb-4 mb-md-4 fw-600 font-noto line-height-low"> Sharing Water and Air <span class="f-80 fw-300">(Accumulated support for water purifiers and air purifiers from 2015 to 2019)</span></h7>
                        <b-row>
                            <b-col class="col-6 text-center px-md-1 px-lg-3 d-flex flex-row flex-md-column">
                                <div class="temp-icon5 mb-2 mb-lg-3 pr-3 pr-sm-0 d-none d-sm-block"><b-img src="/images/104_1.svg" fluid class="h-100"></b-img></div>
                                <div><h7 class="fw-600 line-height-low px-xl-3">Sharing the Water of Life</h7> <div class="mt-m-3" style="margin-bottom: -1rem;"><span class="main2-card-num fw-300 f-105"><animated-number :value="825" :comma="true" :fixed="0"></animated-number></span>units</div></div>
                            </b-col>
                            <b-col class="col-6 text-center px-md-1 px-lg-3 d-flex flex-row flex-md-column">
                                <div class="temp-icon5 mb-2 mb-lg-3 pr-3 pr-sm-0 d-none d-sm-block"><b-img src="/images/105_1.svg" fluid class="h-100"></b-img></div>
                                <div><h7 class="fw-600 line-height-low px-xl-3">Sharing the Clean Air</h7> <div class="mt-m-3" style="margin-bottom: -1rem;"> <span class="main2-card-num fw-300 f-105"><animated-number :value="450" :comma="true" :fixed="0"></animated-number></span>units</div></div>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="col-12 col-md-4 position-relative py-4 py-md-0">
                        <div class="position-absolute d-none d-md-block bg-gray3" style="height: 100%; width:2px; left:0; top:0;"></div>
                        <div class="position-absolute d-block d-md-none bg-gray3" style="height: 2px; width:94%; left:3%; top:0;"></div>
                        <h7 class="blue7 mb-4 mb-md-5 fw-600"> Mutual Growth Activities with Suppliers</h7>
                        <div class="gray6 f-95 pr-xl-4"> Coway intends to lead a healthy trading culture in the industry by promoting close cooperation and win-win activities with suppliers. Through open communication with suppliers, we promote diverse win-win growth activities such as strengthening the foundation for management stability and supporting growth infrastructure.
                        </div>
                    </b-col>
                </b-row>
                <div class="col-12 bg-gray3 f-105 fw-600 py-2 px-3"> Environmental Performance </div>
                <b-row class="my-4 py-md-3">
                    <b-col class="col-12 col-md-4 position-relative mb-4 mb-md-0">
                        <h7 class="blue7 fw-600 mb-2"> Developing Eco-friendly Products </h7>
                        <div class="gray6 f-95 mb-3 mb-md-5 pb-xl-2 letter-narrow pr-xl-2"> Coway designs eco-friendly businesses that reduce negative environmental impacts throughout the product development process, clean production, rental services, recovery, and recycling.
                        </div>
                        <div class="d-flex justify-content-between align-items-center">            
                            <div class="blue7 d-flex flex-row flex-md-column"><h7 class="fw-600 font-noto letter-narrow-lg"> Eco-Friendly Product Sales </h7>
                                <div class="f-105 ml-3 ml-md-0 fw-300" style="line-height:1;"><span class="main1-card-num font-open"><animated-number :value="552.9"></animated-number></span><br class="d-none d-md-inline d-xl-none">billion KRW</div>
                            </div>
                            <div class="text-right d-none d-sm-block" style="max-width: 92px"><b-img src="/images/106_1.svg" fluid></b-img></div>
                        </div>
                    </b-col>
                    <b-col class="col-12 col-md-4 position-relative py-4 py-md-0">
                        <div class="position-absolute d-none d-md-block bg-gray3" style="height: 100%; width:2px; left:0; top:0;"></div>
                        <div class="position-absolute d-block d-md-none bg-gray3" style="height: 2px; width:94%; left:3%; top:0;"></div>
                        <div class="gray6 f-95 letter-narrow font-noto mb-45"> GHG emissions in 2019 is 0.234 tCO2e/100 million KRW compared to 0.357 tCO2e/100 million KRW in 2010. We have undertaken our best efforts to reduce GHG emissions that it is reduced by about 70% compared to the base year. In 2020, we set medium and long-term goals of 2030 based on SBTi(Science Based Targets Initiative).
                        </div>
                        <div class="d-flex justify-content-around align-items-end"> 
                            <div class="px-1"><b-img src="/images/316_1.svg" fluid></b-img></div>      
                            <div class="px-1"><b-img src="/images/316_2.svg" fluid></b-img></div>  
                            <div class="px-1"><b-img src="/images/316_3.svg" fluid></b-img></div>  
                        </div>
                    </b-col>    
                    <b-col class="col-12 col-md-4 position-relative py-4 py-md-0">
                        <div class="position-absolute d-none d-md-block bg-gray3" style="height: 100%; width:2px; left:0; top:0;"></div>
                        <div class="position-absolute d-block d-md-none bg-gray3" style="height: 2px; width:94%; left:3%; top:0;"></div>
                        <div class="d-flex justify-content-between align-items-start mb-md-4">
                            <div class="blue7 main1-card-num letter-narrow-lg fw-300"><animated-number :value="99.1"></animated-number>%</div>
                            <div class="text-right pl-3 pb-2 pb-md-0" style="max-width: 109px"><b-img src="/images/107_1.svg" fluid ></b-img></div>
                        </div>
                        <h7 class="blue7 fw-600 mb-2 pt-md-4 pt-lg-0"> Waste recycling rate </h7>
                        <div class="gray6 f-95 letter-narrow pr-xl-3"> Coway contributes to the establishment of a circular economy by recycling industry waste and waste products generated during product manufacturing and disposal after use.
                        </div>
                        <p class="f-80 gray5 mb-0">* 99.1%: Ratio of recycled waste among product, service, and business waste (total amount of recycled waste/total amount of waste x 100)
                        </p>
                    </b-col>                
                </b-row>
            </section>
            <hr class="mb-5 py-5">
            <h1 class="text-center mb-3 fw-300"> SUSTAINABILITY NEWS</h1>
            <b-row class="mb-3">
                <b-col class="col-0 col-md-1"></b-col>
                <b-col class="col-12 col-md-10 text-center gray6 letter-narrow f-105 mb-4 fw-300">News related to Coway's efforts to add new value with major stakeholders and sustainability can be found here.
                </b-col>
                <b-col class="col-0 col-md-1"></b-col>
            </b-row>
            <b-row class="mb-5">
                <b-col v-for="item in main_articles" :key="item.id" class="col-12 col-md-4 mb-3 mb-md-0">
                    <b-card no-body class="shadow border-0 cursor " @click="$router.push('/news/view_article?id='+item.id)">

                        <div class="overflow-hidden"><b-card-img v-if="item.picture_file_url" :src="item.picture_file_url" alt="Image" class="main-news-card-img" img-top ></b-card-img>   </div>
                        <b-card-body class="p-4">
                            <p class="px-2 mb-1 fw-400 f-110 gray6 overflow-hidden" style="max-height:52px; min-height:52px;"> {{ item.title }} </p>
                            <p class="px-2 f-90 gray5 mb-0 overflow-hidden" style="max-height:65px; min-height:65px;">{{ item.description }} </p>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
            <div class="w-100 text-center d-flex justify-content-center align-items-center pt-3" style="height: 100px;">
                <div class="card-plus-news" @click="$router.push('/news')"> <div class="bar-news horizontal"></div> <div class="bar-news vertical"></div> </div>
            </div>
            <hr class="mb-5 space-p75">
        </b-container>   
    </template> 
</div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import * as ih from '@/components/util'
import LocaleMixin from '@/components/locale'
import AnimatedNumber from '@/components/main/AnimatedNumber'

export default {
    components:{
        AnimatedNumber
    },
    mixins: [LocaleMixin],
    data() {
        return {
            news_img_overlay: false,       
            slide: 0,
            sliding: null,
            visible: false,
            raising: false,
            main_articles: []
        }
    },
    transition(to, from) {
        if (!from) {
        return "slide-left";
        }
        return "slide-right";
    },
    async asyncData({ store, query }) {
        if(query.l && query.l=='ENG'){
            store.commit('setLang', 'ENG')
        }
        //let articles = await store.dispatch('articles/readArticles')
        //return { main_articles: ih.deepCopy(articles.slice(0,3)) }
    },
    computed: {
        ...mapState('articles', {
            articles: state => state.articles,
            is_articles_loaded: state => state.is_articles_loaded
        }),
        animatedNumber: function() {
            return this.tweenedNumber.toFixed(0);
        }
    },
    methods: {
        ...mapActions('articles', ['loadPicture', 'readArticles']),
        showImgOverlay(){
            this.news_img_overlay =true
        },
        hideImgOverlay(){
            this.news_img_overlay =false
        },
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        },
        viewHandlerIntro(event){
            if(event.type == 'progress' ){
                if( event.percentCenter >= 0 && event.percentCenter <= 0.6 ) { 
                    this.visible = true
                }
            }
        },
        viewHandlerGraph(event){
            if(event.type == 'progress' ){
                if( (event.percentCenter > 0.7 && event.percentCenter < 0.9) || (event.percentCenter > 0.1 && event.percentCenter < 0.3) ) { 
                    this.raising = true
                }
            }
            if(event.type == 'exit'){
                this.raising = false
            }
        },
    },
    created(){
        if (!this.$isServer) {
            this._scrollListener = () => {
                // window.pageX/YOffset is equivalent to window.scrollX/Y, but works in IE
                // We round values because high-DPI devies can provide some really nasty subpixel values
                this.position = {
                    x: Math.round(window.pageXOffset),
                    y: Math.round(window.pageYOffset)
                }
            }
            // Call listener once to detect initial position
            this._scrollListener()

            // When scrolling, update the position
            window.addEventListener('scroll', this._scrollListener)
        }

    },
    async mounted() {
        await this.readArticles()
        this.main_articles = ih.deepCopy(this.articles).slice(0, 3)
        
        this.main_articles.forEach(item => {
            if(!item.picture_file){
                this.loadPicture({ id: item.id, thumb: true })
                .then( picture_file => {
                    this.$set(item, 'picture_file', picture_file)
                    this.$set(item, 'picture_file_url', URL.createObjectURL(picture_file))
                })
                .catch( error=>{
                    console.log(error)
                })
            }
        })
        this.visible = true
    },

};
</script>

<style lang="scss">
.main-top-img{
    position: absolute;
    z-index: -1;
    top: -20vw;
}

.main1-card-num{
    font-size: 4rem; 
    margin-top: -0.3em;
}
.main2-card-num{
    font-size: 3.6rem; 
    margin-top: -0.3em;
}
@media (min-width: 576px) {
    .main1-card-num{
        font-size: 2.4rem; 
        margin-top: -0.3em;
    }
    .main2-card-num{
        font-size: 2.1rem; 
        margin-top: -0.3em;
    }
}
@media (min-width: 768px) {
    .main1-card-num{
        font-size: 3rem; 
        margin-top: -0.3em;
    }
    .main2-card-num{
        font-size: 2.6rem; 
        margin-top: -0.3em;
    }
}
@media (min-width: 992px) {
    .main1-card-num{
        font-size: 3.4rem; 
        margin-top: -0.3em;
    }
    .main2-card-num{
        font-size: 3.0rem; 
        margin-top: -0.3em;
    }
}
@media (min-width: 1200px) {
    .main1-card-num{
        font-size: 4rem; 
        margin-top: -0.3em;
    }
    .main2-card-num{
        font-size: 3.6rem; 
        margin-top: -0.3em;
    }
}


.num-extra-margin{
    margin-top: -1.5em;
}
.main1-card-img{
    height: 160px;
}
@media (max-width: 768px) {
    .main1-card-img{
        height: 140px;
    }
}

.hover-shadow{
    transition: all 0.4s ease;
}
.hover-shadow:hover{
    margin-top: -1em;
    margin-bottom: 1em;
    box-shadow: 0 0.5rem 0.8rem rgba(0, 0, 0, 0.15);
}

.card-plus {
    width: 3em; height: 3em; position: relative; 
    transition: all 0.3s ease;
    cursor: pointer;
}
.card-plus:hover {
    width: 3.3em; height: 3.3em; position: relative; 
    // transform: rotate( 45deg );
}
.card-plus-news {
    width: 4em; height: 4em; position: relative; 
    transition: all 0.2s ease;
    cursor: pointer;
}
.card-plus-news:hover {
    width: 6em; height: 6em; position: relative; 
    // transform: rotate( 45deg );
}
.bar { margin: 0 auto; position: absolute; background-color: $gray2;
}
.bar-news { margin: 0 auto; position: absolute; background-color: $gray4;
}
.horizontal { width: 100%; height: 2px; left: 0; top: 49%; }
.vertical { width: 2px; height: 100%; left: 49%; top: 0; }

.local-temp-circle{
    width: 100px; 
    height: 100px;
}
.bluebox-helper-1,
.bluebox-helper-3 {
    top:10%;
}
.bluebox-helper-2 {
    top:12.7%;
}
@media (min-width: 576px) {
    .local-temp-circle{
        width: 64px; 
        height: 64px;
    }
}
@media (max-width: 640px) {
    .bluebox-helper-1,
    .bluebox-helper-2,
    .bluebox-helper-3 {
        top:15%;
    }
}
@media (min-width: 640px) {
    .bluebox-helper-1 {
        top:15%;
    }
    .bluebox-helper-2,
    .bluebox-helper-3 {
        top:17.6%;
    }
}
@media (min-width: 677px) {
    .bluebox-helper-1,
    .bluebox-helper-3 {
        top:15%;
    }
    .bluebox-helper-2 {
        top:17.6%;
    }
}
@media (min-width: 768px) {
    .local-temp-circle{
        width: 70px; 
        height: 70px;
    }
    .bluebox-helper-1,
    .bluebox-helper-3 {
        top:15%;
    }
    .bluebox-helper-2 {
        top:17.6%;
    }
}
@media (min-width: 992px) {
    .local-temp-circle{
        width: 80px; 
        height: 80px;
    }
    .bluebox-helper-1,
    .bluebox-helper-3 {
        top:10%;
    }
    .bluebox-helper-2 {
        top:12.7%;
    }
}
@media (min-width: 1200px) {
    .local-temp-circle{
        width: 100px; 
        height: 100px;
    }
    .bluebox-helper-1,
    .bluebox-helper-3 {
        top:10%;
    }
    .bluebox-helper-2 {
        top:12.7%;
    }
}

.main-news-card-img {
    width:100%;
    transition: all ease-out 0.5s;
}
.main-news-card-img:hover {
    transform: scale(1.05)
    // height: 110%;
}
#intro-carousel___BV_indicator_1_:focus,
#intro-carousel___BV_indicator_2_:focus,
#intro-carousel___BV_indicator_3_:focus{
   outline: none !important;
   box-shadow: none;
}

</style>

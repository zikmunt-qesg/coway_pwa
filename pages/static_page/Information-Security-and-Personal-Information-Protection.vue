<template>
<div class="position-relative page-top-bg-m3 min-vh-100">  
    <logger title="정보보안 및 개인정보보호"></logger>
    <div class="w-100 bg-white bg-white-cover-m3 position-absolute"></div>

    <b-container  v-if="this.$store.state.is_ENG==false" class="">
        <b-row class="pt-md-5 px-3">
            <h1 class="mt-5 mb-3 text-center text-white w-100 fw-400">MATERIAL TOPICS</h1>
            <h7 class="mb-5 text-center w-100 f-95 text-white fw-300 font-noto"> 사람들이 언제 어디서나 깨끗한 물과 공기로 안심하고 건강한 삶을 살 수 있도록 하는 일, 코웨이가 걸어 온 한결 같은 길입니다. </h7>
        </b-row>
        <b-row class="px-lg-3">
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="title"
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
                            <h4-ancor hash="T" :activated="activated" class="f-190 fw-300 mb-4 mb-sm-5 mt-m-2 line-height-low">정보보안 및 개인정보보호</h4-ancor>
                        </b-col>
                    </b-row>
                    <b-row no-gutters class="px-3 pb-4">
                        <b-col class="col-12 col-md-4 fw-500">
                            <b-row no-gutters class="pr-md-4">
                                <b-col class="col-12 pb-4 border-bottom-dark blue7">
                                    <h7 class="mb-3 f-120 w-100">Activity</h7>
                                    <ul class="material-ul fw-500">
                                        <li>정보보호 및 개인정보보호 원칙 기반의 철저한 관리</li>
                                        <li>글로벌 정보보호 규제 대응</li>
                                        <li>시스템 기반 모니터링 및 실사</li>
                                    </ul>
                                </b-col>
                                <b-col class="col-12 pt-3">
                                    <h7 class="mb-45 f-120 w-100 blue7">Performance</h7>
                                    <b-row>
                                        <b-col class="col-12 col-sm-6 col-md-12 mb-45 text-center">
                                            <div class="mx-auto mb-3" style="height:63px"><b-img src="/images/114_1.svg" fluid class="h-100"></b-img> </div>
                                            <p class="mb-0 fw-500 font-noto word-break px-lg-4 px-xl-5 mt-m-2">3년 연속 정보보호 및 사이버보안 관련 위반</p>
                                            <p class="mb-0 fw-400 blue7 mt-m-2"><span class="f-230">0</span>건</p>
                                        </b-col>
                                        <b-col class="col-12 col-sm-6 col-md-12 mb-4 mb-sm-0 text-center">
                                            <div class="mx-auto mb-3" style="height:52px"><b-img src="/images/101_1.svg" fluid class="h-100"></b-img> </div>
                                            <p class="mb-0 fw-500 word-break font-noto px-lg-4 px-xl-5">2019년 임직원 정보보호 교육 참여율</p>
                                            <p class="mb-0 fw-400 blue7 mt-m-2"><span class="f-230">100</span>%</p>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>                            
                        </b-col>                        
                        <b-col class="col-12 col-md-8 px-2 position-relative pl-md-4">
                            <div class="position-absolute vertical-line-1 d-none d-md-block"></div>
                            <h7 class="blue7 f-120 mb-3 ">Business relevance & Approach</h7>
                            <p>ICT 기술의 급격한 발달을 기반으로 데이터 및 정보 기반 인프라의 활용성이 극대화되는 한편, 정보 유출 및 사이버 공격 등 사회적 문제에 대한 우려가 커지면서 국내외 모두 정보보안 및 개인정보보호 관련 법규제가 강화되고 있습니다. 
                            </p>
                            <p>코웨이는 렌탈 비즈니스의 특성상 많은 고객의 개인정보를 수집합니다. 따라서 고객정보를 안전하게 처리하는 것은 고객과의 신뢰 형성에 핵심적인 문제이며, 사업의 지속가능성 측면에서 중요한 이슈입니다. 또한 IT 기술을 활용한 서비스의 확장, 온라인 유통채널 확대에 따라 고객정보의 유입 경로가 분산되어 이에 적합한 정보보호 체계 강화의 필요성이 증가하였습니다.
                            </p>
                            <p class="mb-5">코웨이는 정보보호위원회와 정보보호위원장 겸 개인정보보호 책임자를 중심으로 정보보호 조직을 운영하고있습니다. 정보의 수집-보관-파기 전 과정에서의 정보보호 체계를 기반으로 정보보호에 최선의 노력을 기울이고 있습니다. 24시간 외부 공격 탐지 및 모니터링 체계를 운영하고 있으며, 임직원을 비롯한 수탁사의 개인정보 관리 및 교육을 강화하고 있습니다. 또한 글로벌 시장 진출 확대에 따라 유럽연합 데이터 보호 규칙(GDPR, General Data Protection Regulation) 등 글로벌 정보보호 규제에 대해 선제적으로 대응하고 있습니다. 
                            </p>
                            <h7 class="blue7 f-120 mb-2">Business Cases</h7>
                            <div class="d-flex align-items-center">
                                <div class="py-2 d-flex align-items-center">
                                    <div class="mr-4" style="height:54px"><b-img src="/images/102_1.svg" fluid class="h-100"></b-img> </div>
                                    <p class="fw-500 mb-0 word-break">정보보호 인증 현황</p>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </section>
                <!-- End of DMA -->
                <hr class="mb-4">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="c1" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">정보보호 및 개인정보보호 원칙과 조직</h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                    <p class="pb-3 mb-45">코웨이는 많은 고객의 개인정보를 수집하는 렌탈 비즈니스의 특성을 고려하여 전 사업 영역에서의 정보보호를 위해 정보보호 원칙과 개인정보보호 원칙을 수립 및 공유하고 있습니다. 코웨이는 정보보호 정책을 실무에 적용하기 쉽도록 정보보호 원칙과 지침으로 구성하였습니다. 2019년에는 정보통신망법, 개인정보보호법 등 법규 및 규제 변화에 따라 관련 내용을 추가하였으며, 중복 규정은 간소화하고 실행 가이드를 구체화하여 정보보호 규정을 개정하였습니다. 
                    </p>
                
                    <h6-ancor hash="c1-1" :activated="activated" class="blue5 mb-3">정보보호 및 개인정보보호 원칙</h6-ancor>
                    <p>정보보호 원칙은 전 임직원에 적용되며 내부 데이터 관리 및 사이버 보안 준수 원칙, 정보위반 관련 사건 발생 시 대처 방안 및 보고 체계, 원칙 위반 시 발생사항 등을 포함하고 있습니다.  
                    </p>

                    <p class="mb-3">개인정보보호 원칙은 최소한의 개인정보 수집 및 활용, 안전한 관리 및 법규 준수에 대한 가이드로 구성되어 있습니다. 2019년 개인정보보호법의 제·개정에 따라 개인정보보호지침 및 개인정보처리방침을 개정하여 공지, 교육을 진행하였습니다. 코웨이는 직접 사업 영역뿐만 아니라 영업조직을 비롯한 수탁자 및 협력사에 개인정보 관련 지침 및 방침을 모두 적용하며 철저한 정보 관리를 추진하고 있습니다. 
                    </p>
                    <a href="https://help.coway.co.kr/member/coway_new/member/policy.aspx" target="_blank"><b-button variant="blue" size="sm" class="mb-5 px-3"> 코웨이 개인정보처리방침<i class="fas fa-external-link-alt ml-2"></i></b-button></a>

                    <h6-ancor hash="c1-2" :activated="activated" class="blue5 mb-3">정보보호 조직</h6-ancor>
                    <p class="mb-45">코웨이는 정보보호위원회를 중심으로 정보보호 조직을 운영하고 있습니다. 정보보호위원회는 IT 센터장을 중심으로 운영되는 임원급 위원회로, 각 사업부문별 부문장이 정보보호 위원으로 참여합니다. 정보보호위원회는 정보보안 및 개인정보 보호 영역의 통합관리체계를 구축하여 관리의 효율성을 높이고 있습니다. 정보보호 실무는 인프라보안팀을 중심으로 추진하고 있으며, 조직 내 개인정보보호 관리자를 두어 명확한 업무 분담 하에 전 임직원이 자율적이고 능동적으로 정보보호체계에 참여할 수 있도록 노력하고 있습니다.  
                    </p>

                    <hj-img src="/images/85_1.svg" fluid></hj-img>
                    <hr class="mb-45">

                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="c2" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">정보보호 관리체계</h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                    <p class="pb-3 mb-5">철저한 데이터 보안 유지 및 고객 개인정보보호를 위해 코웨이는 다각적인 정보보호 활동을 추진하고 있습니다. 개인정보보호를 위해 정보 수집, 보관 및 활용, 파기에 이르는 라이프사이클 관리 체계를 도입하였으며, ISMS, ISO27001 등의 정보보호 관련 국제 인증을 기반으로 체계적 관리를 지속하고 있습니다. 또한, 글로벌 정보보호 규제에 대응하기 위해 유럽연합 데이터 보호 규칙(GDPR, General Data Protection Regulation)의 보호조치 준수를 위한 가이드를 마련하였습니다. 
                    </p>
                    
                    <h6-ancor hash="c2-1" :activated="activated" class="blue5 mb-3">개인정보보호 라이프사이클 관리</h6-ancor>
                    <p class="mb-5">코웨이는 개인정보 수집, 보관 및 활용, 파기의 전 과정에서 정보를 안전하게 관리하기 위해 개인정보보호 라이프사이클 관리를 추진합니다. 또한, 라이프사이클 전반에서 더욱 강화된 정보보호를 위해 관리영역, 물리영역 및 기술영역에서 정보보호대책을 실행합니다. 관리 영역에서 정보 자산 분류에 따른 정보 핸들링과 함께 정보보호 교육을 통한 인적 보안을 추진하며, 물리적인 관리 한계를 넘어 전체 시스템 통제 및 회복력 확보를 위해 기술영역에서 IT 시스템 기반의 진단, 통제 및 사고 복구를 진행하고 있습니다.
                    </p>
                    <div class="d-md-flex mb-5 w-100">
                        <div class="mb-4 mb-md-0"><h7 class="gray63 mb-3">개인정보보호 라이프사이클 관리 체계</h7><hj-img src="/images/86_1.svg" fluid class="pr-md-3"></hj-img></div>
                        <div class="pl-md-3"><h7 class="gray63 mb-3">정보보호대책 상세 항목</h7><hj-img src="/images/87_1.svg" fluid ></hj-img></div>
                    </div>
                    <hr class="py-2">
                     
                    <h7 class="mb-2 gray63">개인정보 수집 및 동의</h7>
                    <p  class="mb-5">고객의 개인정보 수집하고 정보 수집 동의를 구하는 과정에서 법규를 준수하고, 내용에 대한 명확한 설명을 제공함으로써 오해를 방지하기 위해 최선의 노력을 기울이고 있습니다. 특히 지난 2018년부터는 기존 개인정보 수집 및 동의 프로세스에서 고객이 이해한 내용과 동의 내용의 정확한 일치 여부를 확인하는 절차를 보강하는 등 더욱 엄격한 수집 절차를 적용하였습니다. 또한, 개인정보 수집 동의 전 별도의 문자를 발송하여 고객이 동의할 정보 수집에 대한 내용을 사전 인지할 수 있도록 절차를 추가하였습니다. 향후 개인정보가 포함된 개인정보처리시스템 내 개발 또는 수정이 발생하는 경우 테스트 단계에서 개인정보에 관한 보안성을 체크리스트 기반으로 점검하도록 프로세스화 하여 진행할 계획입니다. 
                    </p>

                    <h7 class="mb-2 gray63">개인정보 침해사고 발생시 대응 체계</h7>
                    <p class="mb-5">개인정보 침해사고 발생 시 신속한 초기 대응을 통해 피해를 최소화하고 추가적 피해가 없도록 사고 대응 체계를 구축하여 관련 부서에 정기적으로 배포 및 교육하고 있습니다. 우선 사고인지 즉시 정보보호전담부서(인프라보안팀) 및 정보보호책임자에 보안사고 의심 내역을 신고하고, 사고대응팀을 구성합니다. 다음으로 1차 초동조치, 2차 원인분석, 3차 문제해결, 4차 사후조치의 4단계 사고대응 프로세스를 추진하며, 관련 신고 기관에 현황을 보고합니다. 마지막으로 재발방지대책을 수립 및 적용 후 모니터링하며 사후 관리를 진행합니다. 
                    </p>
                    <b-table-simple responsive class="txt-table f-95 fw-300 mb-5">
                        <b-thead><b-tr>
                            <b-td>단계</b-td><b-td style="width:20%">프로세스</b-td><b-td>Action Plan</b-td>
                        </b-tr></b-thead>
                        <b-tbody>
                            <b-tr>
                                <b-td rowspan="2">사고인지</b-td><b-td>보안사고 발생통지</b-td><b-td><p class="indent mb-0">&#9312; 사고발생 인지부서 : 정보보호관리자에게 보안사고 의심내용 신고</p><p class="indent mb-0">&#9313; 정보보호부서(인프라보안팀) : 보안사고 원인 파악</p></b-td>
                            </b-tr>
                            <b-tr>
                                   <b-td>사고대응팀 구성</b-td><b-td><p class="indent mb-0">&#9312; 정보보호관리자 : CISO에게 최초 보고</p><p class="indent mb-0">&#9313; 관련부서 : 사고대응팀 인원 비상 배치</p><p class="indent mb-0">&#9314; 사고대응팀 : 사고대응 준비</p></b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>사고대응팀 대응<br><span class="f-90">(정보보호부서 각 담당자 수행)</span></b-td><b-td colspan="2" class="text-right align-middle"> <b-img src="/images/116_1.svg" fluid ></b-img></b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>사고신고</b-td><b-td> 침해사고 대응기관 신고</b-td><b-td><p class="indent mb-0"> &#9312; 정보보호 부서: 보안사고 경중을 파악하여 '한국정보보호진흥원 인터넷 침해사고 대응지원센터' 118 또는 '국가 사이버안전센터' 111로 연락하여 신고 </p></b-td>
                            </b-tr>
                            <b-tr>
                                <b-td rowspan="2">사후관리</b-td><b-td>재발방지 대책수립</b-td><b-td><p class="indent mb-0"> &#9312; 사고대응팀 : 사고 원인별로 재발방지 대책과 대책에 따른 적용계획을 수립</p></b-td>
                            </b-tr>
                            <b-tr>
                                   <b-td>대책적용 모니터링</b-td><b-td><p class="indent mb-0"> &#9312; 사고대응팀 : 재발방지 대책 이행여부 집중 모니터링 및 주기적으로 보고</p></b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>

                    <hr class="py-2">
                    
                    <h6-ancor hash="c2-2" :activated="activated" class="blue5 mb-3">글로벌 정보보호 규제 대응</h6-ancor>
                    <p class="font-noto">빅데이터, IoT 기술 등을 활용한 새로운 제품 및 서비스의 도입이 확대되고 있는 반면, 유럽연합을 필두로 글로벌 시장에서의 개인정보 보호 규제가 강화되고 있습니다. 이에 코웨이는 GDPR<sup>*</sup> 등 글로벌 개인정보 보호 규제에 대응하기 위해 대응방안을 수립하였습니다. 코웨이는 2019년 유럽지역에 아이오케어(IoCare) 서비스를 출시를 앞두고 GDPR 요구사항 이행을 위해 개인정보 보호 관련 규정, 약관, 프로세스 등을 점검하였습니다. 개인정보 처리 현황 분석결과에 대해 IoCare 앱을 통해 고지하였으며, 협력사 계약 시 유럽 개인정보 처리에 대한 표준 프로세스 계약 항목을 반영하였습니다. 또한 향후 수집된 데이터를 기초로 분석서비스를 제공할 경우를 대비하여 GDPR 보호조치 준수를 위한 가이드를 마련했습니다.
                    </p>
                    <p class="mb-3">글로벌 데이터 보호 관련 법 규제 강화에 대비하여 해외 개인정보보호 규제 대응을 위한 체계를 수립하였습니다. 진출 국가별 개인정보 보호 요구사항을 검토하여 통합 체크리스트를 마련, 글로벌 확장 가능성에 대비하였습니다. 
                    </p>
                    <p class="f-80 ml-1 mb-5"> * GDPR (General Data Protection Regulation): 유럽연합 회원국 시민의 개인정보 보호 규정. 2018년 5월부터 시행</p>
                    <hr class="py-2">
                    <section class="border-blue px-4 py-3 mb-5">
                        <p class="blue5 fw-500 mt-2 mb-3 f-105"><b-badge class="rounded fw-400 bg-blue5 f-90 p-1 mr-2"> Case.</b-badge>정보호호 인증 획득</p>
                        <p class="mb-4 font-noto">코웨이는 고객의 정보자산을 안전하게 보호하기 위해 국내 인증제도인 정보보호 관리체계(ISMS) 인증을 갱신하고 국제 정보보호 관리체계 인증 표준인 ISO 27001 인증을 획득하였습니다. 
                        </p>
                        <p class="mb-2 fw-500"> ISMS 정보보호 관리체계 인증 
                        </p>
                        <p class="mb-4 font-noto"> ISMS한국정보통신진흥협회 및 한국인터넷진흥원에서 제공하는 정보보호 관리체계 인증입니다. 온라인 고객 서비스 운영 범위 중 환경가전, 코스메틱에 대해 인증을 보유하고 있으며, 2020년까지 ‘클라우드’ 영역까지 범위를 확대할 계획입니다. 2017년 갱신 획득 후 2019년 사후 심사를 진행하였습니다. 현재 갱신 후 3년이 지나 2020년에 갱신심사가 진행될 예정입니다. 
                        </p>
                        <p class="mb-2 fw-500 font-noto"> ISO27001 (정보보호 관리체계 국제 표준) 인증 
                        </p>
                        <p class="mb-3 font-noto"> ISO27001은 국제표준화기구(ISO)에서 제정한 정보보호 관리체계에 대한 국제 표준 인증입니다. 현재 라이프케어 및 판매 시스템 관련 IT 기획, 운영, 개발 및 유지보수를 포함한 IT활동에 인증을 보유하고 있습니다. 2017년 최초 취득 후 현재 3년이 지나 2020년에 최초 심사가 진행될 예정입니다. 
                        </p>
                    </section>
                    <hr class="py-2">
                    <h6-ancor hash="c2-3" :activated="activated" class="blue5 mb-3">교육을 통한 정보보호 내재화</h6-ancor>
                    <p class="mb-5 font-noto">코웨이는 임직원 및 수탁사를 대상으로 정보보호 교육을 실시하여 정보보호 의식을 고취하며 역량을 강화하고 있습니다. 2013년부터 매년 전 임직원을 대상으로 필수 과정인 정보보안 이러닝 과정을 진행하고 있으며, 2018년부터 현장에서 고객의 정보를 처리하는 파트너 약 15,000명을 대상으로 개인정보보호의 중요성에 대한 교육을 진행하고 있습니다. 2019년에는 전체 임직원을 대상으로 온라인 정보보호 교육은 물론 신규 입사자를 대상으로 오프라인 교육도 실시했습니다. 코웨이는 임직원뿐만 아니라 수탁자의 정보보호 인식을 제고하는 교육 방법 및 콘텐츠 개발을 위하여 노력하고 있습니다.
                    </p>

                        <h7 class="mb-2 gray63">정보보호 교육 참여 현황<sup>1)</sup></h7>
                        <b-table-simple responsive class="num-table f-95">
                             <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td><b-td>단위</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">임직원 참여 직원 수</b-td><b-td>명</b-td><b-td>4,684</b-td><b-td>4,038</b-td><b-td>4,888</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">임직원 참여율</b-td><b-td>%</b-td><b-td>100%</b-td><b-td>90%</b-td><b-td>100%</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">위/수탁사 참여율<sup>2)</sup></b-td><b-td>%</b-td><b-td>100%</b-td><b-td>90%</b-td><b-td>100%</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5">
                            <li> 온‧오프라인 고객 정보보호 교육 포괄</li>
                            <li> 위/수탁사 교육 대상자 중 참여자 수의 비율. 위/수탁사 교육 대상의 범위는 내부에 상주하고 있으며 개인정보와 관련된 시스템에 접근이 가능한 위, 수탁사에 소속된 모든 인원을 정보보호 교육 대상자로 선정 </li>
                        </ol>
                    <hr class="py-3">              
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="c3" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">모니터링 및 실사 프로세스</h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-5">정보보호 체계 실행을 위해 정기적인 데이터 보안 및 개인정보보호 모니터링을 진행합니다. 외부로부터의 사이버 공격 및 데이터 침해에 대응하기 위해 정보 암호화 및 보안 시스템을 운영할 뿐만 아니라 정기적인 연례 모의해킹 훈련을 수행합니다. 또한, 내부 데이터 관리의 안전 보장을 위해 개인정보 이상징후 탐지 시스템을 통해 리스크를 탐지하고, 고위험 영역에 대해서는 실사를 진행하여 리스크를 완화하고 있습니다.
                    </p>

                    <h6-ancor hash="c3-1" :activated="activated" class="blue5 mb-3">시스템 기반 위험점검 및 실사</h6-ancor>
                    <hj-img src="/images/88_1.svg" fluid></hj-img>
                    <hr class="py-4">              
                    
                    <p class="mb-5">코웨이는 2019년 개인정보 이상징후 탐지 시스템을 통하여 개인정보 과다 보유, 근무시간 외 개인정보 조회, 개인정보 반출 등의 기준으로 고위험군 15개 영업소를 선별하여 현장 점검을 시행하였고, 정보보안에 위배되는 오남용 사례를 확인하여 개선할 수 있었습니다. 점검 시에는 24개 항목의 체크리스트 기반의 점검을 실시하였습니다. 내부 직원의 보안 인식 제고를 위해 온오프라인 교육을 강화하였으며, 개인정보 사이클에 대한 내부 공지를 강화하여 개인정보 취급에 대한 표준 정책을 공유하였습니다. 주기적으로 ‘개인정보검출솔루션’을 통한 개인정보 취급 및 관리에 대한 인식을 높이고, 연1회 선별 지국에 방문하여 정기 실사를 통해 개인정보 취급에 대한 기준을 공유하고 처리 방침에 관하여 계도하여 개인정보 취급에 대한 위험성을 낮추고 있습니다.
                    </p>
                    
                        <h7 class="mb-2 gray63">개인정보검출솔루션(PII)</h7>
                        <p class="mb-5">코웨이는 주요 영업 지점 및 영업 현장 PC내 개인정보검출 솔루션의 운영을 하고 있습니다. 개인정보가 포함된 파일을 PC에 기준치 이상 보관하는 경우 개인정보검출솔루션(PII)이 정기적인 검사를 통해 개인정보 보유 내역을 검출하여 PC알림창으로 사용자에게 알리고 격리, 삭제, 암호화 등 적절한 조치를 권고하고 있습니다. 
                        </p>

                    <h6-ancor hash="c3-2" :activated="activated" class="blue5 mb-3 font-noto">2019년 정보보호 모니터링 주요활동 및 성과</h6-ancor>
                        <b-table-simple responsive class="sep-table f-95 fw-300 font-noto">
                            <b-tbody>
                                <b-tr class="bg-blue5 fw-300 text-white">
                                    <b-td class="py-0">구분</b-td><b-td class="py-0">내용</b-td><b-td class="py-0">2019년 주요 활동 및 성과</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>정보보호 관리체계 운영</b-td>
                                    <b-td class="custom-ul-li table-li"><ul><li>정보보호 관리체계 운영</li></ul></b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>정보보호 체계 강화</li>
                                        <li>정부 규제에 대응하기 위한 ISMS, ISO27001 인증 유지·관리 강화</li>
                                        <li>자산목록 중요 평가 최신화</li></ul>
                                    </b-td>
                                </b-tr>
                                    <b-tr>
                                    <b-td>인터넷 데이터 센터(IDC)<sup>1)</sup></b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>모의해킹(연 2회)</li>
                                        <li>취약점 진단(연 1회)</li></ul>
                                    </b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>모의해킹을 통해 악의적인 공격자에게 노출될 수 있는 위험을 파악하고, 위험요소 제거</li>
                                        <li>전체 시스템의 취약점 진단 및 보완조치 이행</li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>개인정보 DB모니터링</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>개인정보 암호화</li>
                                        <li>DB내 데이터 통제 관리</li></ul>
                                    </b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>개인정보 이상징후 모니터링 시스템 운영</li>
                                        <li>개인정보 가이드 제정 및 배포</li>
                                        <li>개인정보 수집 및 동의 프로세스 개선</li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>PC 및 문서보안</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>PC보안 시스템 운영</li></ul>
                                    </b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>Active Directory 통합인증 시스템 구축</li>
                                        <li>인터넷 망집중화 시스템 및 인터넷 보안 중앙관리 시스템 구축</li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>임직원 교육</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>정보보호 교육 및 훈련 수행</li></ul>
                                    </b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>임직원 대상 온라인 교육 이행</li>
                                        <li>임원 및 신규 입사자, 생산직 오프라인 교육 이행</li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>재해복구 대응 훈련</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>재해복구 시스템 및 절차 정확성 검증<sup>2)</sup></li></ul>
                                    </b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>재해로부터 정보시스템 운영중단에 따른 훈련방지 및 피해 최소화를 위한 대응 훈련</li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>침해사고 대응 훈련</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>웹서버에 침해사고를 가정하여 대응 절차 검증<sup>3)</sup></li></ul>
                                    </b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>침해사고 발생시 신속하게 대응될 수 있도록 체계 수립 및 훈련</li></ul>
                                    </b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5">
                            <li>IDC(Internet Data Center, 인터넷 데이터 센터): 전체 시스템의 로그를 집산하여 관리하는 통합보안관제 체계를 구축해 분산된 고객 개인정보를 더욱 안전하게 처리하고, 효율적으로 모니터링하고 있습니다. 
                            </li>
                            <li> 훼손된 서버의 기동 체크, 서버의 파일 시스템 및 무결성 체크 등 재해복구 절차에 따라 판단에서 복구 완료까지 검증
                            </li>
                            <li> 침해사고 인지부터 대응, 복구까지 절차대로 훈련을 진행하며 시스템의 취약점을 점검하고 방지 대책을 수립
                            </li>
                        </ol>

                        <h7 class="mb-3 gray63 font-noto">2019년 개인정보 보호 원칙 준수 여부 조사</h7>
                        <b-table-simple responsive class="txt-table f-95 font-noto fw-300">
                            <b-thead><b-tr>
                                <b-td style="width:22%">구분</b-td><b-td>진단 범위</b-td><b-td style="width:20%">이상도출 건 수</b-td><b-td style="width:20%">조치 건수<sup>1)</sup></b-td><b-td>실사 시행 건수<sup>2)</sup></b-td><b-td>실사 후 조치 진행률(%)</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td>개인정보 이상징후 탐지시스템 기반 위험 점검</b-td>
                                    <b-td>100% <br>(전사)</b-td>
                                    <b-td>
                                        60건 <br>(기본정보 20건, 민감정보 20건, 정보출력 20건)
                                    </b-td> 
                                    <b-td>
                                        14건 <br>(기본정보 5건, 민감정보 5건, 정보출력 4건)
                                    </b-td>
                                    <b-td>
                                        28건 실사<br>(10개 지국)
                                    </b-td>
                                    <b-td>
                                        14건/28건 <br>(50% 조치완료)
                                    </b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5">
                            <li> 이상 도출 건수 중 조치만 시행한 건 수</li>
                            <li> 이상 도출 건수 중 실사 진행 후 조치한 건 수</li>
                        </ol>

                        <h7 class="mb-3 gray63">정보보호 관련 법/규제 위반 사례</h7>
                        <b-table-simple responsive class="num-table f-95 mb-5">
                            <b-thead><b-tr>
                                <b-td class="text-left">구분</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">정보보호 및 사이버보안 관련 위반 사건 발생 건 수</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">고객 개인 정보 관련 위반 사건 발생 건수</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">데이터 위반으로 인해 피해를 입은 고객의 수(단위: 명)</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">정보보호 및 사이버보안 관련 위반 사건으로 인해 발행한 총 벌금/과징금/범칙금 등의 액수 (단위: 원)</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                        <h7 class="mb-3 gray63 font-noto">2019 개인정보 관련 고충 접수 및 처리</h7>
                        <b-table-simple responsive class="num-table f-95">
                            <b-thead><b-tr>
                                <b-td class="text-left">고충(Complaints) 제기 주제</b-td><b-td>접수 건 수</b-td><b-td>고충 확인 건 수</b-td><b-td>고충 처리 건 수</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">외부 이해관계자</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">규제기관</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
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
            <h1 class="mt-5 mb-3 text-center text-white w-100 fw-400">MATERIAL TOPICS</h1>
            <h7 class="mb-5 text-center w-100 f-95 text-white fw-300 font-noto"> To Help People Live A Healthy and Peaceful Life With Clean Water And Air Anytime, Anywhere Is The Consistent Path That Coway Has Walked.</h7>
        </b-row>
        <b-row class="px-lg-3">
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="title"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#1394d1'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pr-lg-0">
            <b-container class="px-0 eng-font-scale">
                <section class="bg-blue1 px-4 py-4 mb-5">                    
                    <b-row no-gutters class="px-3 pt-4">                            
                        <b-col class="col-12 col-sm-9 mb-2 mb-sm-0 blue7">
                            <h4-ancor hash="T" :activated="activated" class="f-190 fw-300 mb-4 mb-sm-5 mt-m-2 pr-lg-4 line-height-low">Information Security and Privacy Protection</h4-ancor>
                        </b-col>
                    </b-row>
                    <b-row no-gutters class="px-3 pb-4">
                        <b-col class="col-12 col-md-4 fw-500">
                            <b-row no-gutters class="pr-md-4">
                                <b-col class="col-12 pb-4 border-bottom-dark blue7">
                                    <h7 class="mb-3 f-120 w-100">Activity</h7>
                                    <ul class="material-ul fw-500">
                                        <li class="mb-2 line-height-low">Thorough Management Based on Information Security and Privacy Protection Principles</li>
                                        <li class="mb-2 line-height-low">Response to Global Information Protection Regulations </li>
                                        <li class="mb-2 line-height-low">System-Based Monitoring and Due Diligence</li>
                                    </ul>
                                </b-col>
                                <b-col class="col-12 pt-3">
                                    <h7 class="mb-45 f-120 w-100 blue7">Performance</h7>
                                    <b-row>
                                        <b-col class="col-12 col-sm-6 col-md-12 mb-45 text-center">
                                            <div class="mx-auto mb-3" style="height:63px"><b-img src="/images/114_1.svg" fluid class="h-100"></b-img> </div>
                                            <p class="fw-400 blue7 mt-m-2 line-height-min"><span class="f-230">0</span> Violations for <br>3 Consecutive Years</p>
                                            <p class="mb-0 fw-400 font-noto word-break line-height-low">Related to Information Protection and Cybersecurity </p>
                                        </b-col>
                                        <b-col class="col-12 col-sm-6 col-md-12 mb-4 mb-sm-0 text-center">
                                            <div class="mx-auto mb-3" style="height:52px"><b-img src="/images/101_1.svg" fluid class="h-100"></b-img> </div>
                                            <p class="mb-0 fw-400 blue7 mt-m-2"><span class="f-230">100</span>%</p>
                                            <p class="mb-0 fw-400 word-break font-noto mt-m-2"> Participated in Employee Information Security Training in 2019</p>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>                            
                        </b-col>                        
                        <b-col class="col-12 col-md-8 px-2 position-relative pl-md-4">
                            <div class="position-absolute vertical-line-1 d-none d-md-block"></div>
                            <h7 class="blue7 f-120 mb-3 font-noto">Business relevance & Approach</h7>
                            <p> As much as the applicability of data and information-based Infrastructures is maximized through the rapid development of ICT technology, there are rising concerns for social issues such as information leakage and cyber-attack that both domestic and international information security and privacy protection laws are being reinforced.
                            </p>
                            <p>Coway collects personal information from many customers due to its characteristics as a rental business. Therefore, safely managing customer information is the essential for building trust with customers and for sustainable business. Furthermore, customer information inflows through various methods due to the expansion of service and online distribution channels through IT technology, stimulating the necessity for appropriate reinforcement for the information protection system.
                            </p>
                            <p class="mb-5">Coway operates an information security department centered on the information protection committee, information protection chairperson, and privacy protection manager. We are undertaking every effort to protect information based on the information protection system in the entire process of information; collection, storage, and disposal. We operate a 24-hour external attack detection and monitoring system and reinforce privacy management and security training for trustees and employees. In addition, we are proactively responding to global information protection regulations, such as the EU GDPR(The General Data Protection Regulation), as we expand into the global market.  
                            </p>
                            <h7 class="blue7 f-120 mb-2">Business Cases</h7>
                            <div class="d-flex align-items-center">
                                <div class="py-2 d-flex align-items-center">
                                    <div class="mr-4" style="height:54px"><b-img src="/images/102_1.svg" fluid class="h-100"></b-img> </div>
                                    <p class="fw-500 mb-0 word-break"> Information Security Certification Status</p>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </section>
                <!-- End of DMA -->
                <hr class="mb-4">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="c1" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">Principles and Organizations</h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                    <p class="pb-3 mb-45">Considering that the rental business collects many customer’s personal information, Coway establish and share information security principle and personal information protection principle for information security in overall business sectors. Coway has established information security principles and guidelines to make it easy to apply information security policies to practice. In 2019, related information was added in line with changes in laws and regulations such as the Information and Communication Network Act and the Personal Information Protection Act. The duplication regulations were simplified and the information protection regulations were revised by specifying the implementation guide.
                    </p>
                
                    <h6-ancor hash="c1-1" :activated="activated" class="blue5 mb-3">Information Security and Privacy Protection Principles</h6-ancor>
                    <p>The information protection principle applies to all employees and includes internal data management and cybersecurity compliance principles, countermeasures and reporting systems in the event of an information breach, and violations of the principles.
                    </p>

                    <p class="mb-3">The principle of privacy protection consists of a guide to the collection and use of minimal personal information, safe management, and compliance with laws and regulations. According to the legislation and revision of the Privacy Protection Act in 2019, the privacy protection guidelines and privacy processing policies were revised to provide announcement and education. Coway leads thorough information management by applying all guidelines and policies related to privacy to trustees and suppliers including sales organizations as well as direct business areas.
                    </p>
                    <a href="https://help.coway.co.kr/member/coway_new/member/policy.aspx" target="_blank"><b-button variant="blue" size="sm" class="mb-5 px-3">Coway Privacy Policy<i class="fas fa-external-link-alt ml-2"></i></b-button></a>

                    <h6-ancor hash="c1-2" :activated="activated" class="blue5 mb-3">Information Protection Organization </h6-ancor>
                    <p class="mb-45"> Coway operates an information protection organization centered on the Information Protection Committee. The Information Protection Committee is an executive-level committee operated with the head of the IT Center in the center and the head of each business sector as members of Information Protection Committee. The Information Protection Committee has established an integrated management system in the areas of information security and privacy protection to increase management efficiency. Information security practices are centered on the security team, and we have privacy protection managers within the organization to ensure that all employees participate autonomously and actively in the information protection system under a clear division of duties.
                    </p>

                    <b-img src="/images/307_1.svg" fluid></b-img>
                    <hr class="mb-45">

                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="c2" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">Information Security Management System</h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                    <p class="pb-3 mb-5">To maintain thorough data security and protect customer's privacy, Coway is pursuing various information protection activities. To protect personal information, we introduced a lifecycle management system from information collection, storage, and utilization to disposal, and continue to systematically manage the system based on international information protection certifications such as ISMS and ISO27001. Additionally, to respond to global information protection regulations, we prepared a guideline to comply with the profiling protection measures of the EU GDPR(General Data Protection Regulation).
                    </p>
                    
                    <h6-ancor hash="c2-1" :activated="activated" class="blue5 mb-3">Privacy Life Cycle Management</h6-ancor>
                    <p class="mb-5">Coway promotes privacy protection lifecycle management to safely manage information in the entire process of collection, storage, utilization, and disposal of personal information. In addition, information security measures are implemented in the management area, physical area, and technology area for further information protection throughout the lifecycle. the management area promotes human security through information protection education along with information handling according to information asset classification, and diagnoses, controls, and recovers IT systems-based technology in the technology area to secure overall system control and resilience beyond physical management limits.
                    </p>
                    <div class="d-md-flex mb-5 w-100">
                        <div class="mb-4 mb-md-0"><h7 class="gray63 mb-3">Privacy Protection Lifecycle Management System</h7><hj-img src="/images/307_2.svg" fluid class="pr-md-3"></hj-img></div>
                        <div class="pl-md-3"><h7 class="gray63 mb-3">Details of Information Protection Measures</h7><hj-img src="/images/307_3.svg" fluid ></hj-img></div>
                    </div>
                    <hr class="py-2">
                     
                    <h7 class="mb-2 gray63">Collection and Consent of Privacy</h7>
                    <p class="mb-5">In the process of collecting customer's personal information and seeking consent to collect the information, we take the best effort to prevent misunderstandings by complying with laws and regulations and by providing a clear explanation of the contents. In particular, from 2018, a more rigorous collection process was applied, including augmenting the process of confirmation if the customers understand the consent in the existing personal information collection and consent process. Also, a procedure has been added to send a separate text before consent to collect personal information so that customers can be informed of the information to be agreed upon. In the future, if development or modification occurs in the privacy processing system with personal information, we plan to process and proceed to check the security of privacy based on a checklist in the testing stage.
                    </p>

                    <h7 class="mb-2 gray63">Response system in case of personal information infringement</h7>
                    <p class="mb-5">In the case of a personal information infringement, we have established an accident response system to minimize damage through prompt initial response and to prevent further damage and regularly distributed and trained in relevant departments. First of all, we report the suspected security incident to the information protection department (information operation team) and information protection manager (CISO) immediately after the accident and form an accident response team. Next, we initiate a four-step incident response process: first initial action, second cause analysis, third problem resolution, and fourth follow-up, and report the status to the appropriate authorities. Finally, after establishing and applying preventive measures against recurrence, follow-up management is conducted.
                    </p>
                    <b-table-simple responsive class="txt-table f-85 fw-300 mb-5">
                        <b-thead><b-tr>
                            <b-td style="width:22%">Steps</b-td><b-td style="width:20%">Process</b-td><b-td>Action Plan</b-td>
                        </b-tr></b-thead>
                        <b-tbody>
                            <b-tr>
                                <b-td rowspan="2">Aware of the accident</b-td><b-td>Notify the security issue</b-td><b-td><p class="indent mb-0">&#9312; The department awares of the security issue: Report possible security issues to Information Protection Manager</p><p class="indent mb-0">&#9313; Information Protection Department (Information Management Team): Figure out the cause of security issue</p></b-td>
                            </b-tr>
                            <b-tr>
                                   <b-td>Organize Accident Response Team</b-td><b-td><p class="indent mb-0">&#9312; Information Protection Manager: Primary report to CISO</p><p class="indent mb-0">&#9313; Related Department: Emergency placement of Accident Response Team members</p><p class="indent mb-0">&#9314; Accident Response Team: Prepare to response to security issue </p></b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>Accident Response Team Response Process<br><span class="f-90">(Performed by members of Information Protection Department)</span></b-td><b-td colspan="2" class="text-right align-middle"> <b-img src="/images/307_4.svg" fluid ></b-img></b-td>
                            </b-tr>
                            <b-tr>
                                <b-td>Report the accident</b-td><b-td> Report to the Infringement Response Agency</b-td><b-td><p class="indent mb-0"> &#9312; Information Protection Department: Identify the severity of the security incident and report it to the Korea Information Security Agency's Internet Infringement Response Support Center at 118 or the National Cyber Safety Center at 111. </p></b-td>
                            </b-tr>
                            <b-tr>
                                <b-td rowspan="2">Follow-up</b-td><b-td>Recurrence Prevention Measures</b-td><b-td><p class="indent mb-0"> &#9312; Accident Response Team: Establish prevention plans for each cause of accident and apply plans according to the measures</p></b-td>
                            </b-tr>
                            <b-tr>
                                   <b-td>Measure Application Monitoring</b-td><b-td><p class="indent mb-0"> &#9312; Accident Response Team: Intensive monitoring and regular reporting of recurrence prevention measures</p></b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>

                    <hr class="py-2">
                    
                    <h6-ancor hash="c2-2" :activated="activated" class="blue5 mb-3">Response to Global Data Protection Regulations</h6-ancor>
                    <p class="font-noto"> While the adaptations of new products and services utilizing big data and IoT technologies are expanding, the regulation on personal information protection in the global market, led by the European Union, is strengthening. Accordingly, Coway has established a countermeasure to respond to global privacy regulations such as GDPR. Before launching the IoCare service in Europe in 2019, Coway has reviewed regulations, terms, and processes related to privacy protection to fulfill GDPR requirements. The result of analyzing the status of personal information processing was notified through the IoCare app, and the standard process contract item for the processing of personal information in Europe was reflected in the supplier contract. In addition, we prepared a guideline to comply with GDPR profiling protection measures in case of providing analysis services based on the collected data in the future.
                    </p>
                    <p class="mb-3">In preparation for the strengthened global data protection regulations, we established a response system for regulations on overseas privacy protection and prepared an integrated checklist by reviewing the personal information protection requirements by country of entry for the global expansion possibility.
                    </p>
                    <p class="f-80 ml-1 mb-5"> *GDPR(General Data Protection Regulation): Regulation of the protection of personal information of citizens of the European Union member states. Effective from May 2018.</p>
                    <hr class="py-2">
                    <section class="border-blue px-4 py-3 mb-5">
                        <p class="blue5 fw-500 mt-2 mb-3 f-105"><b-badge class="rounded fw-400 bg-blue5 f-90 p-1 mr-2"> Case.</b-badge>Information Protection Certification Acquirement</p>
                        <p class="mb-4 font-noto">Coway renewed its domestic certification system, Information Security Management System (ISMS) certification, and acquired ISO27001, the international information security management system certification standard to safely protect customers' information assets. 
                        </p>
                        <p class="mb-2 fw-500"> ISMS Information Protection Management System Certification  
                        </p>
                        <p class="mb-4 font-noto"> ISMS is an information security management system certification provided by the Korea Information and Communication Promotion Association and Korea Internet & Security Agency. Among the range of online customer service operations, we have certifications for home appliances and cosmetics and plan to expand the scope to the "cloud" sector by 2020. After obtaining the renewal in 2017, we conducted a post-examination in 2019. 3 years after the current renewal, the renewal screening will be conducted in 2020.
                        </p>
                        <p class="mb-2 fw-500 font-noto"> ISO27001 (International Standard for Information Security Management System) certification
                        </p>
                        <p class="mb-3 font-noto"> ISO27001 is an international standard certification for the information security management system established by the International Organization for Standardization (ISO). Currently, it holds certifications in IT areas including IT planning, operation, development, and maintenance related to life care and sales systems. After the first acquirement in 2017, 3 years have passed and the first screening will be conducted in 2020.
                        </p>
                    </section>
                    <hr class="py-2">
                    <h6-ancor hash="c2-3" :activated="activated" class="blue5 mb-3">Internalization Through Training</h6-ancor>
                    <p class="mb-5 font-noto">Coway conducts information security training for its employees and trustees to raise information security awareness and strengthen its capabilities. Since 2013, we have been conducting an information security e-learning course, an essential course for all employees every year, and in 2018, we provided training on the importance of personal information protection to approximately 15,000 partners who process customer information in the workplace. In 2019, online information protection training was provided to all employees as well as offline training for new employees. Coway is striving to develop training methods and contents to raise the information security awareness of trustees as well as employees.
                    </p>

                        <h7 class="mb-2 gray63">Information Security Training Participation Status<sup>1)</sup></h7>
                        <b-table-simple responsive class="num-table f-85">
                             <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td>Unit</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Number of participating employees</b-td><b-td>person</b-td><b-td>4,684</b-td><b-td>4,038</b-td><b-td>4,888</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Participation Rate</b-td><b-td>%</b-td><b-td>100%</b-td><b-td>90%</b-td><b-td>100%</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Contractor Participation Rate<sup>2)</sup></b-td><b-td>%</b-td><b-td>100%</b-td><b-td>90%</b-td><b-td>100%</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5">
                            <li> Including online and offline customer information protection training</li>
                            <li> 2)	The ratio of the number of participants among contractor training subjects. The information security training target scope of the contractor training subjects are people who resides inside and works in the contractor company and has access the system related to personal information.
                            </li>
                        </ol>
                    <hr class="py-3">              
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="c3" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">Monitoring and Due Diligence Process</h6-ancor><div class="horizontal-line-2 blue-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-5">To implement the information protection system, we regularly monitor data security and privacy protection. In addition to operating information encryption and security systems to respond to external cyber-attacks and data breaches, we also conduct regular annual mock hacking training. Also, to ensure the safety of internal data management, an anomaly detection system for personal information detects risks and due diligence is conducted in high-risk areas to mitigate risks.
                    </p>

                    <h6-ancor hash="c3-1" :activated="activated" class="blue5 mb-3">System-Based Risk Inspection and Due Diligence</h6-ancor>
                    <hj-img src="/images/307_5.svg" fluid></hj-img>
                    <hr class="py-4">              
                    
                    <p class="mb-5">Coway selected 15 high-risk offices and conducted on-site inspections based on excessive possession of personal information, personal information inquiry outside office hours, and personal information export through the personal information anomaly detection system in 2019. We have been able to identify and improve cases of abuse that violate information security. During the inspection, 24 items were examined based on the checklist. To increase the security awareness of employees, we strengthened online and offline training, and internal announcement of the personal information cycle to share standard policies for handling personal information. Periodically, we raise awareness of personal information handling and management through "Personal Information Detection Solution" and visit selected branch offices once a year to share standards for handling personal information through regular due diligence and to provide information on processing policy, reducing the risk of handling personal information.
                    </p>
                    
                        <h7 class="mb-2 gray63">PII (Personal Identifiable Information)</h7>
                        <p class="mb-5">Coway operated PII (Personal Identifiable Information) in PCs at main sales branches and sales offices. When a file containing personal information is stored above the standard value in PC, we detect personal information storage history with periodic inspection of PII and notify the user through the PC notification pop-ups and request to take appropriate measures such as seclusion, deletion, and encryption.
                        </p>

                    <h6-ancor hash="c3-2" :activated="activated" class="blue5 mb-3 font-noto">Major Activities and Performances in 2019</h6-ancor>
                        <b-table-simple responsive class="sep-table f-85 fw-300 font-noto line-height-low">
                            <b-tbody>
                                <b-tr class="bg-blue5 fw-300 text-white">
                                    <b-td class="py-0">Category</b-td><b-td class="py-0">Content</b-td><b-td class="py-0">Major Activities and Performances in 2019</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>Operation of information protection management system</b-td>
                                    <b-td class="custom-ul-li table-li"><ul><li>Operation of information protection management system</li></ul></b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>Strengthen information protection system</li>
                                        <li>Reinforce the maintenance and management of ISMS, ISO27001 certification to respond government regulations</li>
                                        <li>Update the important evaluation of the asset list </li></ul>
                                    </b-td>
                                </b-tr>
                                    <b-tr>
                                    <b-td>Internet Data Center (IDC)<sup>1)</sup></b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>Mock hacking (twice a year)</li>
                                        <li>Vulnerability diagnosis (once a year)</li></ul>
                                    </b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>Identify risks that can be exposed to malicious attackers through mock hacking and eliminate risks</li>
                                        <li>Vulnerability diagnosis and complementary measures of the entire system</li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>Customer Information DB Monitoring</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>Personal information encryption</li>
                                        <li>Data control management in DB</li></ul>
                                    </b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>Personal information anomaly monitoring system</li>
                                        <li>Establish and distribute personal information guide</li>
                                        <li>Improvement of personal information collection and consent process</li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>PC and document Security</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>PC security system operation</li></ul>
                                    </b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>Integrated Active Directory authentication system</li>
                                        <li>Internet centralization system and Internet security</li>
                                        <li> Construction of central management system</li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>Employee training</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>Information security training</li></ul>
                                    </b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>Implementation of online training for employees</li>
                                        <li>Implementation of offline training for executives, new employees and production workers</li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>Disaster recovery response training</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>Verification of disaster recovery system and procedure accuracy <sup>2)</sup></li></ul>
                                    </b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>Corresponsive training to prevent confusion and minimize damage caused by the suspension of information system operation from disasters</li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>Infringement incident response training</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>Verification of response procedures by assuming an infringement incident on the web server <sup>3)</sup></li></ul>
                                    </b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>System establishment and training to respond quickly in case of infringement</li></ul>
                                    </b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5">
                            <li> IDC (Internet Data Center): Integrated security control system that collects and manages the logs of the entire system to process distributed customer personal information more securely and efficiently monitor it.
                            </li>
                            <li> Verification from judgment to completion of recovery according to disaster recovery procedures such as start-up check of damaged server and check of file system and integrity of server
                            </li>
                            <li> Training is conducted in procedures from recognition of infringement to response and recovery, checking of system vulnerabilities and establishing preventive measures
                            </li>
                        </ol>

                        <h7 class="mb-3 gray63 font-noto">2019 Personal Information Protection Principle Investigation</h7>
                        <b-table-simple responsive class="txt-table f-85 font-noto fw-300">
                            <b-thead><b-tr>
                                <b-td style="">Category</b-td><b-td>Diagnosis Range</b-td><b-td style="">Number of anomalies</b-td><b-td style="">Number of cases with action taken<sup>1)</sup></b-td><b-td>Number of cases with due diligences<sup>2)</sup> conducted</b-td><b-td>Response rate for taking actions after conducting due diligence(%)</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td>Risk examination based on personal information anomaly detection system</b-td>
                                    <b-td>100% <br>(Corporate-wide)</b-td>
                                    <b-td>
                                        60 <br>(Basic Information:20, Sensitive Information:20, Information Output:20)
                                    </b-td> 
                                    <b-td>
                                        14 <br>(Basic Information:5, Sensitive Information:5,  Information Output:4)
                                    </b-td>
                                    <b-td>
                                        28<br>(10 stations)
                                    </b-td>
                                    <b-td>
                                        14/28 <br>(50% response complete)
                                    </b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-5">
                            <li> Out of the number of anomalies, the number of cases with actions taken only </li>
                            <li> Out of the number of anomalies, the number of cases with actions taken after conducting due diligences</li>
                        </ol>

                        <h7 class="mb-3 gray63">Violation of Information Protection Related Laws/Regulations</h7>
                        <b-table-simple responsive class="num-table f-85 mb-5">
                            <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Number of violations related to information protection and cybersecurity</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Number of incidents involving customer personal information violations</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Number of customers affected by data breach (Unit: persons)</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Total fines/penalties/penalties issued due to violations related to information protection and cybersecurity (Unit: KRW)</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                        <h7 class="mb-3 gray63 font-noto">2019 personal information related complaints</h7>
                        <b-table-simple responsive class="num-table f-85">
                            <b-thead><b-tr>
                                <b-td class="text-left">Subjects of Complaints</b-td><b-td>Number of complaints</b-td><b-td>Number of confirmed complaints</b-td><b-td>Number of handled complaints</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">External stakeholders</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Regulatory agencies</b-td><b-td>0</b-td><b-td>0</b-td><b-td>0</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
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
            return this.is_ENG? 'Information Security and Personal Information Protection' : '정보보안 및 개인정보보호'
        },
        sub_titles(){
            let temp = [
                { 
                    title: this.is_ENG? 'Principles and Organizations':'정보보안 및 개인정보보호 원칙과 조직', hash: 'c1',
                    child: [
                        { title: this.is_ENG? 'Information Security and Personal Information Protection Principles': '정보보안 및 개인정보보호 원칙', hash: 'c1-1' }, 
                        { title: this.is_ENG? 'Information Protection Organization': '정보보호 조직', hash: 'c1-2' }, 
                    ]
                },
                { 
                    title: this.is_ENG? 'Information Security Mgt. System': '정보보호 관리체계', hash: 'c2',
                    child: [
                        { title: this.is_ENG? 'Personal Information Life Cycle Mgt.':'개인정보보호 라이프사이클 관리', hash: 'c2-1'  }, 
                        { title: this.is_ENG? 'Response to Global Data Protection Regulations':'글로벌 정보보호 규제 대응', hash: 'c2-2' }, 
                        { title: this.is_ENG? 'Internalization through Training': '교육을 통한 정보보호 내재화', hash: 'c2-3'}
                    ]
                },
                {
                    title: this.is_ENG? 'Monitoring and Due Diligence Process': '모니터링 및 실사 프로세스', hash: 'c3',
                    child: [
                        { title: this.is_ENG? 'System-based Risk Inspection and Due Diligence': '시스템 기반 위험 점검 및 실사', hash: 'c3-1'},
                        { title: this.is_ENG? 'Major Activities and Performances in 2019': '2019년 정보보호 모니터링 주요활동 및 성과', hash: 'c3-2'}
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

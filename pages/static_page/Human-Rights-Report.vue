<template>
<div class="position-relative page-top-bg-so min-vh-100">   
    <logger title="인권 리포트"></logger>
    <div class="w-100 bg-white bg-white-cover position-absolute"></div>

    <b-container v-if="this.$store.state.is_ENG==false" class="">
        <b-row class="pt-md-5 px-3">
            <h1 class="mt-5 mb-3 pt-3 text-center w-100 fw-400">CARE FOR SOCIETY</h1>
            <div class="d-flex justify-content-center mb-5 text-center w-100">
                <div class="border-bottom-dark mr-3" style="width: 50px; margin-bottom: 1.25rem"></div>
                <h7 class="fw-400"> Human Right Report</h7>
                <div class="border-bottom-dark ml-3" style="width: 50px; margin-bottom: 1.25rem"></div>
            </div>
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
                <section class="bg-white px-4 py-4">
                    <div class="border-top-dark pb-2 mb-5"></div>
                    <h4-ancor hash="T" :activated="activated" class="gold8 mb-4 mb-sm-5 mt-m-2">인권 리포트</h4-ancor>

                    <div class="d-flex mb-2 position-relative overflow-hidden"> <h6-ancor hash="w1" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">인권 경영 원칙 및 가이드</h6-ancor></div>
                    <p>전 세계적으로 차별 방지, 다양성 존중 등 인권에 대한 관심이 증대되고 인권 관련 규제 및 가이드라인도 점차 강화되고 있습니다. 많은 기업이 인권 경영을 지속가능성을 담보할 수 있는 기본 원칙으로 삼고 있으며, 코웨이 또한 우리가 하는 일이 더 나은 세상을 만드는 데 기여한다는 '착한믿음'의 경영정신을 바탕으로 인권경영 활동을 충실히 이행하고 있습니다. 나아가 코웨이는 사업을 영위하는 모든 국가와 지역의 노동, 인권 및 근로조건 기준을 준수합니다. 코웨이의 인권 정책은 임직원뿐만 아니라 고객, 협력사, 영업·서비스 파트너 및 지역사회 등 모든 이해관계자들에게도 적용됩니다. 
                    </p>
                    <p class="font-noto">유엔 기업과 인권 이행원칙(UN Guiding Principles on Business and Human Rights)은 기업과 이해관계자에게 사업 과정에서 인권 진작을 위한 명확한 프레임워크를 제시하고 있습니다. 그 원칙은 ‘보호(Protect)’, ‘존중(Respect)’, ‘구제(Remedy)’로, 기업이 인권을 존중하고 권리 침해를 예방하기 위해 노력을 기울이며, 부정적 인권 이슈를 제거할 것을 기대합니다. 코웨이의 트러스트 가이드라인은 1) 차별금지, 2) 아동노동 금지, 3) 강제노동 금지, 4) 근로시간 준수, 5) 인도적 대우, 6) 안전과 건강, 7) 소비자 안전 보건, 8) 책임 있는 마케팅, 9) 개인정보 보호, 10) 반부패, 11) 공정 경쟁, 12) 환경에 대한 책임, 13) 현지주민 인권 보호, 14) 공유가치 창출의 14개 항목으로 구성되어 있습니다. 
                    </p>
                    <p class="mb-4 font-noto">코웨이의 인권 경영은 1) 유엔 기업과 인권 이행원칙(UN Guiding Principles on Business and Human Rights)와 비교하는 진단 분석(Gap Analysis), 2) 글로벌 인권 행동플랫폼 및 NGO 등 3rd-Party의 인권 관련 이슈 트래킹(Tracking), 3) 연례 이해관계자 조사를 통한 이슈 식별, 4) CSR 이슈제기 채널을 통한 통합 고충처리(Grievance Resolution) 내용을 종합적으로 검토하여 이뤄집니다. 
                    </p>

                    <a href="http://sustainability18.coway.co.kr/download/cowaytrustguide.pdf"><b-button variant="gold" size="sm" class="px-3 mb-5">코웨이 인권 정책<i class="fas fa-external-link-alt ml-2"></i></b-button></a>
                    <hr class="py-3">

                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="w2" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">인권 리스크 식별 및 완화 프로세스</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                    <h6-ancor hash="w2-1" :activated="activated" class="gold6 fw-500 mb-2">리스크 식별 </h6-ancor>
                    <p> 코웨이는 인권 리스크 식별 및 완화 프로세스를 기반으로 인권 현황을 정기적으로 점검하여 인권 침해적 요소를 사전에 제거하고 인권 관련 리스크를 최소화하고 있습니다. 코웨이의 인권 리스크 식별 및 완화 프로세스는 1) 리스크 식별 및 평가, 2) 완화 조치 수립, 3) 조치 실행 및 결과 확인, 4) 커뮤니케이션의 4단계 과정을 통해 진행됩니다.
                    </p>
                    <p class="mb-5"> 리스크 식별 단계에서는 인권위험과 영향 확인을 위한 자료를 조사하고, 협력회사, 고객, 지역단체를 포함한 이해관계자 조사를 실시하여 인권 위험을 식별합니다. 특히 2019년에는 코웨이 주요 협력사를 대상으로 온라인 기반 인권 조사를 진행하고, 주요 위험을 식별하였습니다. 인권 영향평가 결과 주요한 위험이 있을 경우 사업장 및 협력사를 대상으로 완화 행동계획 수립을 권고합니다. 완화 행동 실행과 조치 결과는 본 보고서에 포함되어 공개됩니다.
                    </p>
                    <div class="position-relative"><hj-img src="/images/96_1.svg" fluid></hj-img> <h7 class="gray63 position-absolute" style="top:1.25rem; left:1.25rem">코웨이 인권 리스크 식별 및 완화 프로세스</h7>
                    </div>
                    <hr class="mb-4">

                    <h6-ancor hash="w2-2" :activated="activated" class="gold6 fw-500 mb-2">핵심적 인권 요소에 대한 조치 결과</h6-ancor>
                    <p class="font-noto mb-45">2019년 시행된 가치사슬상에서의 주요 인권이슈 및 실사 결과는 아래와 같습니다. 
                    </p>
                    <b-img src="/images/60_1.svg" fluid></b-img>
                    <hr class="mb-4">

                        <h7 class="mb-3 gray63">주요 인권 이슈 및 개선조치</h7>
                        <b-table-simple responsive class="txt-table social-table f-95 font-noto">
                             <b-thead>
                                 <b-tr>
                                    <b-td class="text-left" style="width:7%">구분</b-td><b-td style="width:17%">주요 인권 이슈</b-td><b-td style="width:28%">취약 계층</b-td><b-td>2019 개선 조치</b-td>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td><div class="bg-gold8 rounded-circle" style="width:16px;height:16px;"><div class="f-70 text-white" style="margin-left:5px;">A</div></div> </b-td>
                                    <b-td>성희롱 예방활동</b-td><b-td>전체 임직원, 영업·서비스 파트너</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>전체 임직원, 영업·서비스 파트너 대상의 성희롱 예방 및 장애인인식개선 교육 진행</li>
                                        <li>신고 채널 운영</li>
                                        <br>
                                        <li class="fw-400 gold7">2019 성희롱 예방 및 장애인식 교육 수료율: 100% </li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td><div class="bg-gold8 rounded-circle" style="width:16px;height:16px;"><div class="f-70 text-white" style="margin-left:5px;">B</div></div></b-td>
                                    <b-td>법정 노동시간 관리</b-td><b-td>부품제조 협력사, 전체 임직원</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>주 52시간 시행에 따른 조직 문화 및 시스템 개선</li>
                                        <li>일과 삶의 균형 추구</li>
                                        <br>
                                        <li class="fw-400 gold7"> 2019 협력사 조사 근로시간 위험 발견: 3% <br><span class="f-80 fw-300 gray6">(34개사 조사 결과 2개사에 대한 근로시간 및 노동관행 리스크 노출을 발견하였으며 기준 강화를 위한 조치 시행 중)</span></li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td><div class="bg-gold8 rounded-circle" style="width:16px;height:16px;"><div class="f-70 text-white" style="margin-left:5px;">C</div></div></b-td>
                                    <b-td>폭력 및 폭언</b-td><b-td>콜센터 임직원, 영업·서비스 파트너</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>리더십 교육, 인성교육 과정에서 비즈니스 에티켓 교육 진행</li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td><div class="bg-gold8 rounded-circle" style="width:16px;height:16px;"><div class="f-70 text-white" style="margin-left:5px;">D</div></div></b-td>
                                    <b-td>직장내 괴롭힘</b-td><b-td>전체 임직원</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>직장내 괴롭힘 금지 및 예방에 대한 공지 및 교육 진행. 신고 채널 운영 </li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td><div class="bg-gold8 rounded-circle" style="width:16px;height:16px;"><div class="f-70 text-white" style="margin-left:5px;">E</div></div></b-td>
                                    <b-td>안전보건</b-td><b-td>임직원, 영업/서비스 파트너</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>코로나-19 등 전염병 발생시 고객 및 파트너의 안전을 위한 서비스 대응 매뉴얼</li>
                                        <li>안전보건(마스크, 장갑, 소독제 등) 장비 제공</li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td><div class="bg-gold8 rounded-circle" style="width:16px;height:16px;"><div class="f-70 text-white" style="margin-left:5px;">F</div></div></b-td>
                                    <b-td>산업안전보건</b-td><b-td>생산직 임직원</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>예방점검, 실행, 사후관리 등 자율 안전보건활동 이행 및 개선 과제 도출</li>
                                        <li>유소견자, 고위험 소견자 등을 대상으로 건강증진 프로그램 운영</li>
                                        <br>
                                        <li class="fw-400 gold7">협력사 산업안전보건 관리 조사 위험 발견: 5%  <br><span class="f-80 fw-300 gray6">(32개사 조사 결과 5개사에 대한 안전 보건 관리상 기준 강화 필요를 발견하였으며 기준 강화를 위한 조치 시행 중)</span></li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td><div class="bg-gold8 rounded-circle" style="width:16px;height:16px;"><div class="f-70 text-white" style="margin-left:5px;">G</div></div></b-td>
                                    <b-td>개인정보 유출</b-td><b-td>고객, 임직원</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>정보보안 및 개인정보보호 교육</li>
                                        <li>개인정보보호 관리 실태 점검</li>
                                        <li>이상징후탐지시스템 운영</li>
                                        <li>고객 본인인증시스템 운영</li></ul>
                                    </b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                </section> 
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
            <h1 class="mt-5 mb-3 pt-3 text-center w-100 fw-400">CARE FOR SOCIETY</h1>
            <div class="d-flex justify-content-center mb-5 text-center w-100">
                <div class="border-bottom-dark mr-3" style="width: 50px; margin-bottom: 1.25rem"></div>
                <h7 class="fw-400"> Human Rights Report</h7>
                <div class="border-bottom-dark ml-3" style="width: 50px; margin-bottom: 1.25rem"></div>
            </div>
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
                <section class="bg-white px-4 py-4">
                    <div class="border-top-dark pb-2 mb-5"></div>
                    <h4-ancor hash="T" :activated="activated" class="gold8 mb-4 mb-sm-5 mt-m-2">Human Rights Report</h4-ancor>

                    <div class="d-flex mb-2 position-relative overflow-hidden"> <h6-ancor hash="w1" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">Human Rights Management Principles and Guide</h6-ancor></div>
                    <p> Globally there are growing concerns in human rights such as preventing discrimination and respecting diversity reinforcing human rights regulations and guidelines gradually. Many corporations take human rights management as a fundamental principle that assures sustainability. On the cornerstone of "Goodness" that our works contribute to creating a better world, Coway faithfully fulfills human rights management activities. Furthermore, Coway abides by every labor, human rights, and work condition standards of every country and region in which we conduct business. Coway human rights policy is applied to not only employees but also every stakeholder such as customers, suppliers, sales/service partners, and the local community.
                    </p>
                    <p class="font-noto"> UN Guiding Principles on Business and Human Rights present corporations and stakeholders a clear framework for promoting human rights in the business process. The principles are "Protect", "Respect", and "Remedy", expecting companies to respect human rights, to exert every effort to prevent any violation of rights, and to eliminate negative human rights issues. Coway trust guideline is comprised of 14 categories: 1)No discrimination, 2) No child labor, 3) No forced labor, 4) Compliance with working hours policy, 5) Humane treatment, 6) Safety and health, 7) Consumer safety and hygiene, 8) Responsible marketing, 9) Personal information protection, 10) Anti-corruption, 11) Fair competition, 12) Environmental responsibility 13) Human rights protection of local residents, 14) Shared value creation.
                    </p>
                    <p class="mb-4 font-noto"> Coway human rights management is comprised of 1) Gap analysis which compares to UN Guiding Principles on Business and Human Rights, 2) Tracking human rights issue on 3rd parties such as Global Human Rights Action Platform and NGOs, 3) Identification of issues through annual stakeholder surveys, 4) Comprehensive review of integrated grievance resolution through CSR issues raising channel. 
                    </p>

                    <a href="http://sustainability18.coway.co.kr/download/cowaytrustguide.pdf"><b-button variant="gold" size="sm" class="mb-5">Coway Human Rights Policy<i class="fas fa-external-link-alt ml-2"></i> </b-button></a>
                    <hr class="py-3">

                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="w2" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">Human Rights Risk Identification and Mitigation Process</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                    <h6-ancor hash="w2-1" :activated="activated" class="gold6 fw-500 mb-2">Risk Identification </h6-ancor>
                    <p> Built on the human rights risk identification and mitigation process, Coway minimizes human rights risk by eliminating any human rights violations with routine examination on human rights status. Coway human rights risk identification and mitigation process proceed in 4 steps: 1) Risk identification and evaluation, 2) Establishment of proper mitigation action, 3) Action implementation and result confirmation, 4) Communication.
                    </p>
                    <p class="mb-5"> In the risk identification stage, we identify human rights risk by analyzing data for human rights risk and impacts and by conducting stakeholders survey, including suppliers, customers, and local organizations. Particularly, in 2019, an online-based human rights survey was conducted with core suppliers, identifying critical risks. If a significant risk is found in human rights impact evaluation results, we advise the workplace and the supplier to establish a mitigation action plan. The mitigation action process and outcome of measure are disclosed in this report.
                    </p>
                    <div class="position-relative"><hj-img src="/images/318_1.svg" fluid></hj-img> <h7 class="gray63 position-absolute" style="top:1.25rem; left:1.25rem">Risk Identification and Mitigation Process</h7>
                    </div>
                    <hr class="mb-4">

                    <h6-ancor hash="w2-2" :activated="activated" class="gold6 fw-500 mb-2">Risk Factors and Corrective Actions</h6-ancor>
                    <p class="font-noto mb-45">Key human rights issue and due diligence of value chain implemented in 2019 are as followed:
                    </p>
                    <b-img src="/images/318_2.svg" fluid></b-img>
                    <hr class="mb-4">

                        <h7 class="mb-3 gray63">Key Human Rights Issues and Corrective Actions</h7>
                        <b-table-simple responsive class="txt-table social-table f-95 font-noto">
                             <b-thead>
                                 <b-tr>
                                    <b-td class="text-left" style="width:7%">Category</b-td><b-td style="width:17%">Key Human Rights Issue</b-td><b-td style="width:28%">Vulnerable Social Group</b-td><b-td>2019 Corrective Actions</b-td>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td><div class="bg-gold8 rounded-circle" style="width:16px;height:16px;"><div class="f-70 text-white" style="margin-left:5px;">A</div></div> </b-td>
                                    <b-td>Sexual Harassment Prevention Activity</b-td><b-td>Entire Employees, Sales/Service Partners</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>Conduct education on sexual harassment prevention and awareness improvement of the disabled for entire employees, sales/service partners</li>
                                            
                                        <li>Operate Reporting Channel </li>
                                        <br>
                                        <li class="fw-400 gold7">Completion Rate of Education on Sexual Harassment Prevention and Disability Awareness: 100% </li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td><div class="bg-gold8 rounded-circle" style="width:16px;height:16px;"><div class="f-70 text-white" style="margin-left:5px;">B</div></div></b-td>
                                    <b-td>Legal Working Hour Management </b-td><b-td>Components Manufacturing Suppliers, Entire Employees </b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>Improve organizational culture and system with 52-hour week policy initiation</li>
                                        <li>Pursue work and life balance </li>
                                        <br>
                                        <li class="fw-400 gold7"> Research on suppliers found working hour risk: 3% <br><span class="f-80 fw-300 gray6">(As a result of the survey on 34 suppliers, exposure to working hours and labor practices was found in 2 suppliers, and measures to strengthen the standards were being implemented.)</span></li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td><div class="bg-gold8 rounded-circle" style="width:16px;height:16px;"><div class="f-70 text-white" style="margin-left:5px;">C</div></div></b-td>
                                    <b-td>Violence and Verbal Abuse</b-td><b-td>Call Center Employees, Sales/Service Partners</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>Conduct business etiquette education in leadership education and personality education</li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td><div class="bg-gold8 rounded-circle" style="width:16px;height:16px;"><div class="f-70 text-white" style="margin-left:5px;">D</div></div></b-td>
                                    <b-td>Workplace Bullying</b-td><b-td>Entire Employees</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>Announce and conduct education on prohibiting and preventing workplace bullying and operate reporting channel </li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td><div class="bg-gold8 rounded-circle" style="width:16px;height:16px;"><div class="f-70 text-white" style="margin-left:5px;">E</div></div></b-td>
                                    <b-td>Safety and Health</b-td><b-td>Entire Employees, Sales/Service Partners</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>Service response manual for the safety of customer and partner in the event of an epidemic such as COVID-19</li>
                                        <li>Provide safety and hygiene equipment (Mask, gloves, sanitizers, etc.)</li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td><div class="bg-gold8 rounded-circle" style="width:16px;height:16px;"><div class="f-70 text-white" style="margin-left:5px;">F</div></div></b-td>
                                    <b-td>Industry Safety and Health</b-td><b-td>Production Workers</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>Autonomous safety and health activities such as preventive inspection, implementation, and draw follow-up improving assignment</li>
                                        <li>Operate health promotion programs for confirmed patients and those with high risks.</li>
                                        <br>
                                        <li class="fw-400 gold7">Research on suppliers’ industry safety and health management found risk: 5% <br><span class="f-80 fw-300 gray6">(As a result of 32 suppliers, it was found that 5 suppliers need to reinforce the safety and health standards and measures being taken to reinforce the standards.)</span></li></ul>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td><div class="bg-gold8 rounded-circle" style="width:16px;height:16px;"><div class="f-70 text-white" style="margin-left:5px;">G</div></div></b-td>
                                    <b-td>Personal information Leakage</b-td><b-td>Customers, Employees</b-td>
                                    <b-td class="custom-ul-li table-li"><ul>
                                        <li>Conduct education on Information security and privacy protection </li>
                                        <li>Inspect current privacy protection management </li>
                                        <li>Operate abnormal symptom detection system </li>
                                        <li>Operate Customer identification system </li></ul>
                                    </b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                </section> 
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
            return this.is_ENG? 'Human Rights Report' : '인권 리포트'
        },
        sub_titles(){
            let temp = [
                { 
                    title: this.is_ENG? 'Human Rights Management Principles and Guide': '인권 경영 원칙 및 가이드', hash: 'w1'
                },
                {
                    title: this.is_ENG? 'Risk Identification and Mitigation Process':'인권 리스크 식별 및 완화 프로세스', hash: 'w2',
                    child: [
                        { title: this.is_ENG? 'Risk Identification':'리스크 식별', hash: 'w2-1' }, 
                        { title: this.is_ENG? 'Risk Factors and Corrective Actions':'핵심적 인권 요소에 대한 조치 결과', hash: 'w2-2' }
                    ]
                },
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
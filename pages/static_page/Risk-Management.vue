<template>
<div class="position-relative page-top-bg-sus min-vh-100">   
    <logger title="리스크 관리"></logger>
    <div class="w-100 bg-white bg-white-cover position-absolute"></div>
    
    <b-container v-if="this.$store.state.is_ENG==false" class="">
        <b-row class="pt-md-5 px-3">
            <h1 class="mt-5 mb-3 pt-3 text-center w-100 fw-400">CARE FOR SUSTAINABILITY</h1>
            <h7 class="mb-5 text-center w-100 fw-400">더 나은 세상을 향한 착한 믿음의 실천, 코웨이 지속가능경영 비전 </h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="title"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#5171b1'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0">
                <section class="bg-white px-4 py-4 mb-5">
                    <div class="border-top-dark pb-2 mb-5"></div>
                    <h4-ancor hash="T" :activated="activated" class="parang8 mb-4 mb-sm-5">리스크 관리</h4-ancor>

                    <h6-ancor hash="h1" :activated="activated" class="parang7 f-130 fw-500 bg-white" style="z-index:10">전사적 리스크 관리 체계</h6-ancor>
                    <p>코웨이는 경영활동 중에 발생할 수 있는 리스크를 선제적으로 관리하기 위해 위기관리위원회를 운영하고 있습니다. 위기관리위원회는 주요 경영 이슈별 의사결정 과정에서 리스크 수준을 진단하고 관련 리스크에 대한 회사의 노출 범위, 대응 전략 등에 대한 의사결정을 수행합니다. 전사 리스크 관리 및 운영은 위기관리위원회를 중심으로 이루어집니다. 위기관리위원회는 리스크 이슈 수집, 영향도 분석, 대응방안 수립, 리스크 인지와 전파, 담당 부서와의 협조를 통한 리스크 대응 실행을 총괄합니다. 위기관리위원회는 긴급 및 중요 리스크 발생 시 이사회 내 위원회인 경영위원회 및 CEO에 보고하고, 전사 리스크 대응 조직으로서 위기평가회의를 소집할 권한을 가집니다.  
                    </p>
                    <p class="mb-5">코웨이의 리스크 관리 범위는 시장, 신용, 유동성 등의 재무 리스크, 준법 및 규제, 정책 등의 비재무 리스크를 포괄합니다. 각 사업본부는 경영활동과 관련된 주요 리스크를 선제적으로 관리하기 위해 리스크 관리 정책을 기반으로 위기상황 발생시 명확한 대응 및 보고를 진행하며, 리스크 완화를 위해 부서간 긴밀한 상호 협력을 추진합니다.  
                    </p>

                    <h7 class="mb-3 gray63">전사 리스크 대응 프로세스</h7>
                    <hj-img src="/images/69_2.svg" fluid></hj-img>
                    <hr class="mb-5">


                    <b-row no-gutters class="bg-blue-gray1 mb-5 py-4 text-center d-flex flex-column flex-md-row border-bottom-gray-bold">
                        <b-col class="position-relative pt-2">
                            <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                            <div class="text-center w-100 position-absolute d-none d-md-block" style=" top:-55px; z-index:10"> <div class="mx-auto px-md-auto mb-3 "><b-img src="/images/120_1.svg" fluid></b-img></div></div>
                            <p class="px-2 parang7 word-break text-underline fw-500 f-100 mb-2">리스크 인지 및 보고</p>
                            <p class="px-1 text-left f-85 letter-narrow word-break line-height-low"><ul class="custom-ul"><li>각 부서에서 실시간 정보 수집, 위기평가 회의 준비</li></ul></p>
                        </b-col> 
                        <b-col class="position-relative pt-2">
                            <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                            <div class="text-center w-100 position-absolute d-none d-md-block" style=" top:-55px; z-index:10"> <div class="mx-auto px-md-auto mb-3"><b-img src="/images/120_2.svg" fluid></b-img></div></div>
                            <p class="px-2 parang7 word-break text-underline fw-500 f-100 mb-2">영향도 분석 및 대응 체계 수립</p>
                            <p class="px-1 text-left f-85 letter-narrow word-break line-height-low">
                                <ul class="custom-ul"><li>리스크 정보 분석 및 영향 수준 평가, 위기경보 발령</li>
                                <li>대응방향 및 주요 지침 결정, 대응방안 수립</li></ul>
                            </p>
                        </b-col> 
                        <b-col class="position-relative pt-2">
                            <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                            <div class="text-center w-100 position-absolute d-none d-md-block" style=" top:-55px; z-index:10"> <div class="mx-auto px-md-auto mb-3"><b-img src="/images/120_3.svg" fluid></b-img></div></div>
                            <p class="px-2 parang7 word-break text-underline fw-500 f-100 mb-2">경영진 보고</p>
                            <p class="px-1 text-left f-85 letter-narrow word-break line-height-low">
                                <ul class="custom-ul"><li>리스크 현안 보고 및 핵심 의사결정</li>
                                <li>진행 상황 및 대응 현황 보고</li></ul></p>
                        </b-col> 
                        <b-col class="position-relative pt-2">
                            <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                            <div class="text-center w-100 position-absolute d-none d-md-block" style=" top:-55px; z-index:10"> <div class="mx-auto px-md-auto mb-3"><b-img src="/images/120_4.svg" fluid></b-img></div></div>
                            <p class="px-2 parang7 word-break text-underline fw-500 f-100 mb-2">대응 활동 추진</p>
                            <p class="px-1 text-left f-85 letter-narrow word-break line-height-low"><ul class="custom-ul"><li>상호 협력 기반 리스크 대응 활동 수행</li></ul></p>
                        </b-col> 
                        <b-col class="position-relative pt-2">
                            <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                            <div class="text-center w-100 position-absolute d-none d-md-block" style=" top:-55px; z-index:10"> <div class="mx-auto px-md-auto mb-3"><b-img src="/images/120_5.svg" fluid></b-img></div></div>
                            <p class="px-2 parang7 word-break text-underline fw-500 f-100 mb-2">리스크 대응 현황 모니터링</p>
                            <p class="px-1 text-left f-85 letter-narrow word-break line-height-low"><ul class="custom-ul"><li>리스크 모니터링 및 감사</li></ul></p>
                        </b-col> 
                    </b-row>

                    <hr class="py-3">

                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="h2" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">잠재 리스크의 관리</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-4">코웨이는 경영환경에서 중장기적으로 상당한 영향 요소가 있는 리스크를 분석하고 새롭게 부각되는 리스크를 인지하여 전략적 대응을 추진합니다. 정기적 리스크 모니터링을 기반으로 잠재 리스크를 선제적으로 파악하고 지속가능한 경영환경을 조성하여 새로운 기회를 창출해 나가고 있습니다. 2019년 코웨이의 핵심 잠재 리스크는 1) 정보보호 위협의 증가와 2) 온라인 가전 서비스 시장의 성장으로 도출됩니다. 
                    </p>
                    <b-table-simple responsive class="sep-table f-90 mb-1">
                        <b-tbody>
                            <b-tr class="bg-parang7 fw-300 text-white">
                                <b-td style="width:20%;" class="py-0">잠재 리스크</b-td><b-td style="width:38%;" class="py-0">리스크 맥락 및 사업적 영향</b-td><b-td class="py-0">리스크 대응 방안</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="parang7 f-95"> <div class="mb-3 fw-500">정보보안 및 개인정보 유출</div>
                                 <b-img src="/images/121_1.svg"></b-img>
                                </b-td>
                                <b-td>
                                    <p>사람과 사람이 연결되는 시대를 넘어 사물과 사람, 사물과 사물이 연결되는 4차산업혁명의 도래에 따라 제품 및 서비스의 생산, 유통 및 사용 전 단계에서 데이터 및 정보는 전 산업의 기반 인프라로 자리하였습니다.
                                    </p>
                                    <p>코웨이의 렌탈 비즈니스의 주요 제품인 가전제품은 사물인터넷(IoT)을 기반으로 고객에게 새로운 경험을 제공하고 있으며, 제품 생산 과정에서도 첨단 자동화 기술 기반 스마트 팩토리(Smart Factory) 도입에 따라 데이터 및 정보 보안이 기업 경쟁력의 중요한 요소로 자리하였습니다. 
                                    </p>
                                    <p>더불어, 렌탈 비즈니스의 특성상 고객 접점에서 직접 고객 개인정보를 수집 및 활용하는 과정은 점점 더 리스크 민감도가 증가하고 있습니다. 정보보안 및 개인정보 보호는 고객 신뢰의 기반일 뿐만 아니라 서비스 제공자의 기본 의무로서 코웨이는 리스크의 위험성을 완화하고 관리해야 할 책임이 있습니다.
                                    </p>
                                </b-td>
                                <b-td>
                                    <p>코웨이는 외부 사이버 공격 및 정보보호 침해에 대해 선제적인 대응 체계를 마련하고, 강력한 예방 활동 및 모니터링을 실시하여 리스크 대응력을 강화하고 있습니다. 내부적으로는 영업 및 서비스 제공 임직원 및 파트너에 정기적인 개인정보보호 교육을 실시하며, 정보보호위원회를 운영하여 개인정보의 수집-보관-폐기에 이르기까지 전 과정에서 고객정보를 보호하기 위해 최선의 노력을 다하고 있습니다. 
                                    </p>
                                    <p>또한 글로벌 시장 진출 확대에 따라 유럽연합 개인정보보호 규정(GDPR) 등 개인정보보호 규제에 대한 효과적인 대응체계를 수립 및 추진하고 있습니다.
                                    </p>
                                    <nuxt-link to="/static_page/Information-Security-and-Personal-Information-Protection" class="parang-text">'정보보안 및 개인정보보호' 상세내용 보기 <i class="fas fa-link ml-1 f-80"></i></nuxt-link>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="parang7 f-95"> <div class="mb-3 fw-500">코로나 19 팬데믹</div>
                                <b-img src="/images/121_2.svg"></b-img></b-td>
                                <b-td>
                                    <p>코로나19는 전 세계적으로 빠르게 확산되고 있습니다. 코웨이의 주 사업장이 위치한 한국은 적극적인 초기 방역 및 강력한 사회적 격리를 통해 확산 방지에 성공하고 있지만, 여전히 대인 접촉에 따른 추가 확산을 막기 위한 주의가 필요합니다.
                                    </p>
                                    <p>코로나19로 인하여 코웨이 임직원의 건강및 안전 문제가 사업 계속성 확보를 위한 중요 이슈로 떠올랐습니다. 뿐만 아니라 코웨이의 주요 사업모델인 렌탈, 방문 케어 등은 대인 접촉을 기피하는 사회문화의 확산에 장기적인 영향을 받을 수 있습니다.
                                    </p>
                                </b-td>
                                <b-td>
                                    <p>코웨이는 코로나19로부터 임직원을 보호하기 위하여 불필요한 외부인의 사옥 출입금지, 마스크 및 손소독제 사용, 열감지기 설치 등 물리적 조치와 함께 유연근무, 의심자 재택근무 조치 등 다양한 활동을 추진하였습니다. 2020년 5월까지 코웨이 임직원은 코로나 확진자가 발생하지 않았습니다. 
                                    </p>
                                    <p>대인 접촉 기피 사회 문화 확산에 따른 장기적 사회 변화에 따른 매출 및 이익 감소우려에 근본적으로 대응하기 위하여, 비대면∙디지털화 전략을 강화하고 있습니다. 2020년 1월 코웨이는 방문 관리 없이 사용자가 직접 부품을 교체할 수 있는 자가 관리형 청정기를 출시하였습니다. 특히 넷마블로의 대주주가 변경됨에 따라, 코웨이는 비대면 서비스 확대를 위한 기술 기반 및 노하우를 갖추게 되었습니다. 코웨이는 단순 생활가전 제공에 그치지 않고 IT솔루션을 접목하여 온라인 맞춤형 마케팅, 사물인터넷(IoT)기술을 활용한 비대면 관리 서비스 등으로 확대해 나갈 계획입니다. 
                                    </p>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="parang7 f-95"> <div class="mb-3 fw-500"> 자원순환 관련 규제 증가</div>
                                <b-img src="/images/121_3.svg"></b-img></b-td>
                                <b-td> 
                                    <p>폐기물 처리 및 방치가 심각한 글로벌 사회문제로 확산되며 국내외의 자원순환 관련 규제가 강화되고 있습니다.
                                    </p>
                                    <p>코웨이는 매출의 약 70%가 환경가전 제품에 기반하는 만큼 2006년부터 유럽의 전자 폐기물에 대항 지침(WEEE) 및 유해물질 제한 지침(EU RoHS) 등 환경 규제의 영향을 받고 있으며, 2014년 국내 환경 규제 ‘전기·전자제품 및 자동차의 자원순환에 관한 법률’ 준수 대상으로 포함됨에 따라 폐자원 회수 및 재활용의 중요성이 증가하였습니다.
                                    </p>
                                    <p>규제의 강화와 함께 구매 의사결정 시 제품 및 서비스의 사회 환경적 영향을 고려하는 윤리적 소비 주체가 증가함에 따라 자원순환에 대한 책임이 증가하고 있습니다.
                                    </p>
                                </b-td>
                                <b-td class="">
                                    <p>코웨이는 제품 개발부터 판매, 회수 및 재활용에 이르는 제품 전과정에 걸쳐 자원 선순환구조 확립을 위한 노력을 지속하고 있습니다.
                                    </p>
                                    <p>2014년부터 필터, 정수기, 청정기, 비데, 연수기, 음식물 처리기 등의 제품 회수 및 재활용을 추진하였으며, 2016년에는 회수 폐기물의 고형 연료화를 진행하여 99% 이상의 재활용률을 유지하고 있습니다.
                                    </p>
                                    <p>2019년에는 기존 대비 자재사용량을 줄인 ‘한뼘 시루 직수 정수기’를 개발하는 등 절대적인 자원사용량을 줄이기 위한 노력을 지속하였습니다. 
                                    </p>
                                    <nuxt-link to="/static_page/Environmental-Management-for-Clean-Water-and-Air#s2" class="parang-text">'가치사슬 전체의 환경역량 강화' 상세내용 보기 <i class="fas fa-link ml-1 f-80"></i></nuxt-link>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="parang7 f-95"> <div class="mb-3 fw-500"> 환경가전 소비형태의 변화</div>
                                <b-img src="/images/121_4.svg"></b-img></b-td>
                                <b-td>
                                    <p>이커머스 시장의 성장과 함께 환경가전 제품의 구매 형태 또한 다양해지고 있습니다. 통계청 조사 결과 2019년 9월 가전·전자·통신기기의 온라인 쇼핑 거래액은 전년 동월 대비 40.8%(3,211억원) 증가를 기록하였습니다. 뿐만 아니라 온라인 해외 직구를 통한 구매율 또한 최근 2017년 대비 약76%성장하는 등 온라인 기반의 소비 문화가 빠르게 확산하고 있습니다.
                                    </p>
                                    <p> 이는 렌탈 기반의 대면 서비스를 기반으로 하는 코웨이의 시장 점유율에 상당한 리스크로 작용할 수 있습니다.
                                    </p>
                                </b-td>
                                <b-td>
                                    <p> 코웨이는 전문적이고 안정적인 서비스 네트워크를 기반으로 꾸준한 성장을 기록하고 있습니다. 
                                    </p>
                                    <p>온라인 구매로 충족하기 어려운 고객 경험을 제공하며 고객 접점에서 문제를 해결하고 가치를 높임으로써 기존 고객 유지율을 극대화하고, 신규 고객을 확대해 나가고 있습니다.
                                    </p>
                                    <p> 특히 맞춤형 고객 안심 케어 서비스는 온라인 구매와는 차별화된 고객 경험을 제공합니다.
                                    </p>
                                    <p> 한편, 이커머스의 장점을 활용하여 새로운 기회를 창출하기 위해 2019 온라인 사업을 확대하고 있습니다.
                                    </p>
                                    <p> 코웨이는 앞으로도 렌탈 서비스를 기반으로 고객 가치를 창출하기 위해 혁신을 거듭함과 함께, 전략적 온라인 진출을 통해 새로운 가치를 모색해 나갈 계획입니다.
                                    </p>
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
            <h1 class="mt-5 mb-3 pt-3 text-center w-100 fw-400">CARE FOR SUSTAINABILITY</h1>
            <h7 class="mb-5 text-center w-100 fw-400">Practicing Goodness Toward A Better World, Coway Sustainability Management Vision</h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="title"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#5171b1'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0 eng-font-scale">
                <section class="bg-white px-4 py-4 mb-5">
                    <div class="border-top-dark pb-2 mb-5"></div>
                    <h4-ancor hash="T" :activated="activated" class="parang8 mb-4 mb-sm-5">Risk Management</h4-ancor>

                    <h6-ancor hash="h1" :activated="activated" class="parang7 f-130 fw-500 bg-white" style="z-index:10">Company-wide Risk Management System</h6-ancor>
                    <p>Coway operates the Crisis Management Committee to manage risks that may occur during management activities proactively. The Crisis Management Committee diagnoses risk levels in the decision-making process for each major management issue. It makes decisions on the company's exposure to relevant risks and response strategies. Company-wide risk management and operation are centered around the Crisis Management Committee. The Crisis Management Committee is responsible for collecting risk issues, analyzing the impact, establishing countermeasures, recognizing and disseminating risks, and conducting risk response through cooperation with the department in charge. The Crisis Management Committee has the power to report to the management committee and CEO, which are committees within the board of directors, in the event of emergencies and substantial risks, and to convene a crisis assessment meeting as a company-wide risk response organization.
                    </p>
                    <p class="mb-5">Coway's risk management scope covers financial risks such as market, credit and liquidity, and non-financial risks such as compliance, regulation, and policy. For proactive management of the major risks related to management activities, each business headquarters conducts clear responses and reports in the event of a crisis based on risk management policies. It promotes close cooperation between departments to mitigate risks.
                    </p>

                    <h7 class="mb-3 gray63">Risk Response Process</h7>
                    <hj-img src="/images/304_1.svg" fluid></hj-img>
                    <hr class="mb-5">


                    <b-row no-gutters class="bg-blue-gray1 mb-5 py-4 text-center d-flex flex-column flex-md-row border-bottom-gray-bold">
                        <b-col class="position-relative pt-2">
                            <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                            <div class="text-center w-100 position-absolute d-none d-md-block" style=" top:-55px; z-index:10"> <div class="mx-auto px-md-auto mb-3 "><b-img src="/images/120_1.svg" fluid></b-img></div></div>
                            <p class="px-2 parang7 word-break text-underline fw-500 f-100 mb-2">Risk Awareness and Reporting</p>
                            <p class="px-1 text-left f-85 letter-narrow word-break line-height-low"><ul class="custom-ul"><li class="f-85 line-height-low">Each department collects real-time information and prepares for a crisis evaluation meeting</li></ul></p>
                        </b-col> 
                        <b-col class="position-relative pt-2">
                            <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                            <div class="text-center w-100 position-absolute d-none d-md-block" style=" top:-55px; z-index:10"> <div class="mx-auto px-md-auto mb-3"><b-img src="/images/120_2.svg" fluid></b-img></div></div>
                            <p class="px-2 parang7 word-break text-underline fw-500 f-100 mb-2">Impact Analysis and Establish Response System</p>
                            <p class="px-1 text-left f-85 letter-narrow word-break line-height-low">
                                <ul class="custom-ul"><li class="f-85 line-height-low">Risk Information Analysis, Impact Level Evaluation, and Crisis Warning</li>
                                <li class="f-85 line-height-low">Determine response direction and main guidelines, and establish countermeasures</li></ul>
                            </p>
                        </b-col> 
                        <b-col class="position-relative pt-2">
                            <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                            <div class="text-center w-100 position-absolute d-none d-md-block" style=" top:-55px; z-index:10"> <div class="mx-auto px-md-auto mb-3"><b-img src="/images/120_3.svg" fluid></b-img></div></div>
                            <p class="px-2 parang7 word-break text-underline fw-500 f-100 mb-2">Report to Executive</p>
                            <p class="px-1 text-left f-85 letter-narrow word-break line-height-low">
                                <ul class="custom-ul"><li class="f-85 line-height-low">Report risk issues and make key decisions</li>
                                <li class="f-85 line-height-low">Report on Progress and Response</li></ul></p>
                        </b-col> 
                        <b-col class="position-relative pt-2">
                            <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                            <div class="text-center w-100 position-absolute d-none d-md-block" style=" top:-55px; z-index:10"> <div class="mx-auto px-md-auto mb-3"><b-img src="/images/120_4.svg" fluid></b-img></div></div>
                            <p class="px-2 parang7 word-break text-underline fw-500 f-100 mb-2">Promote Response Actions</p>
                            <p class="px-1 text-left f-85 letter-narrow word-break line-height-low"><ul class="custom-ul"><li class="f-85 line-height-low">Conduct Risk Response Activities Based on Mutual Cooperation</li></ul></p>
                        </b-col> 
                        <b-col class="position-relative pt-2">
                            <div class="horizontal-line-1 position-absolute d-none d-md-block" style="top: -33px;"></div>
                            <div class="text-center w-100 position-absolute d-none d-md-block" style=" top:-55px; z-index:10"> <div class="mx-auto px-md-auto mb-3"><b-img src="/images/120_5.svg" fluid></b-img></div></div>
                            <p class="px-2 parang7 word-break text-underline fw-500 f-100 mb-2">Risk Response Status Monitoring</p>
                            <p class="px-1 text-left f-85 letter-narrow word-break line-height-low"><ul class="custom-ul"><li class="f-85 line-height-low">Risk Monitoring and Auditing</li></ul></p>
                        </b-col> 
                    </b-row>

                    <hr class="py-3">

                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="h2" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">Emerging Risks</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-4">Coway analyzes risks that have a significant impact in the mid- to long-term in the business environment and recognizes emerging risks to promote strategic responses. We are proactively identifying emerging risks   and creating a sustainable management environment to create new opportunities based on regular risk monitoring. Coway's key emerging risks  for 2019 are driven by 1) increased threats to data protection, and 2) the growth of the online consumer services market.
                    </p>
                    <b-table-simple responsive class="sep-table f-90 mb-1">
                        <b-tbody>
                            <b-tr class="bg-parang7 fw-300 text-white">
                                <b-td style="width:20%;" class="py-0">Risk Factors</b-td><b-td style="width:38%;" class="py-0">Risk Context and Business Impact </b-td><b-td class="py-0">Risk Mitigation Action Plan</b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="parang7 f-95"> <div class="mb-3 fw-500">Information Security and Personal Information Leakage</div>
                                 <b-img src="/images/121_1.svg"></b-img>
                                </b-td>
                                <b-td>
                                    <p>The 4th Industrial Revolution, which connects an object-to-object or object-to-people, emerges beyond the age of people-to-people. Therefore, data and information have become a vital infrastructure of the entire process of the industry in the production, distribution, and use of products and services.
                                    </p>
                                    <p>The main product of Coway's rental business is environmental appliances , which is providing new experiences to customers based on the Internet of Things (IoT). Data and information security are also being secured in the production process by introducing a smart factory based on advanced automation technology. It has become an essential element of competitiveness.
                                    </p>
                                    <p>Also, due to the nature of the rental business, the process of collecting and utilizing customer personal information directly from the customer's contact point increases the risk sensitivity. Information security and privacy are not only the foundation of customer trust but as a service provider's primary obligation, Coway is responsible for mitigating and managing risk.
                                    </p>
                                </b-td>
                                <b-td>
                                    <p>Coway has established a preemptive response system for external cyberattacks and information security infringements and is strengthening its risk response capabilities by conducting substantial preventive activities and monitoring. Internally, sales and service are provided Regular training on personal information protection is provided to employees and partners. The Information Protection Committee is operated to make the best efforts to protect customer information in all processes, from collection to storage and disposal of personal information.
                                    </p>
                                    <p>As we expand into the global market, we are establishing and promoting an effective response system to personal information protection regulations such as the European Union's Personal Information Protection Regulations (GDPR).
                                    </p>
                                    <nuxt-link to="/static_page/Information-Security-and-Personal-Information-Protection" class="parang-text">See details of "Information Security and Personal Information Protection"<i class="fas fa-link ml-1 f-80"></i></nuxt-link>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="parang7 f-95"> <div class="mb-3 fw-500">COVID-19 Pandemic</div>
                                <b-img src="/images/121_2.svg"></b-img></b-td>
                                <b-td>
                                    <p>COVID-19 is spreading rapidly around the world. Although Coway's main office is located, South Korea has successfully prevented the spread through active initial quarantine and secure social isolation. Still, it needs attention to prevent further spread due to interpersonal contact.
                                    </p>
                                    <p>With COVID-19, the health and safety issues of Coway employees have emerged as a vital issue for securing business continuity. Coway's main business models, such as rental and visiting care, can have long-term effects on the spread of social culture that avoids interpersonal contact.
                                    </p>
                                </b-td>
                                <b-td>
                                    <p>To protect employees from COVID-19, Coway promoted various activities such as flexible work and susceptible homework and physical measures such as prohibiting outsiders from entering the office building, using masks and hand sanitizers, and installing thermal detectors. By May 2020, there were no COVID-19 contributors among Coway employees.
                                    </p>
                                    <p>Avoiding interpersonal contact to fundamentally respond to concerns about a decrease in sales and profits due to long-term social changes caused by the spread of social culture, we are strengthening non-face-to-face and digitalization strategies. In January 2020, Coway launched a self-manageable purifier that allows users to replace parts by themselves without visiting service.  In particular, as Netmarble's major shareholder changed, Coway was equipped with a technology base and know-how to expand non-face-to-face services. Coway plans to expand not only to provide a simple home appliance but also to apply IT solutions to online customized marketing and non-face-to-face management services using the Internet of Things (IoT) technology.
                                    </p>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="parang7 f-95"> <div class="mb-3 fw-500">Increased Regulations on Resource Circulation</div>
                                <b-img src="/images/121_3.svg"></b-img></b-td>
                                <b-td> 
                                    <p>Waste disposal and neglect are spreading as a severe global social problem, and regulations on resource circulation at home and abroad are being strengthened.
                                    </p>
                                    <p>Coway has been affected by environmental regulations such as the European E-Waste Prevention Directive (WEEE) and Hazardous Substances Restriction Directive (EU RoHS) since 2006, as about 70% of sales are based on environmental appliances. The importance of the recovery and recycling of waste resources has increased as it is included as a target for compliance with the Regulation on the Recycling of Electricity, Electronics, and Automotive Resources.
                                    </p>
                                    <p>As there is a growing number of ethical consumers who consider the socio-environmental impacts of products and services in purchasing decision-making along with strengthening regulations, the responsibility for resource recycling also rises.
                                    </p>
                                </b-td>
                                <b-td class="">
                                    <p>Coway continues to strive to establish a virtuous cycle of resources throughout the product life cycle, from product development to sales, recovery, and recycling.
                                    </p>
                                    <p>Since 2014, we have been pursuing and recycling products such as filters, water purifiers, blue regulars, bidets, water softeners, and food waste processors. In 2016, we solidified fuel for recovered waste to maintain a recycling rate of over 99%. 
                                    </p>
                                    <p>In 2019, we continued to reduce absolute resource consumption, such as the development of the “HANDSPAN CIROO Tankless Water Purifier,” which reduced material usage by 00% compared to the previous one.
                                    </p>
                                    <nuxt-link to="/static_page/Environmental-Management-for-Clean-Water-and-Air#s2" class="parang-text">See details on "Value Chain Environmental Competencies"  <i class="fas fa-link ml-1 f-80"></i></nuxt-link>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="parang7 f-95"> <div class="mb-3 fw-500"> Changes in Consumption Patterns of Environmental Appliances</div>
                                <b-img src="/images/121_4.svg"></b-img></b-td>
                                <b-td>
                                    <p>With the growth of the e-commerce market, the forms of purchase of environmental home appliances are also diversifying. According to the National Statistical Office's survey, in September 2019, the number of online shopping transactions of home appliances, electronics, and telecommunications devices increased by 40.8% (KRW 321.1 billion) compared to the same month last year. Also, the online-based consumption culture is rapidly spreading, with the purchase rate through online overseas direct purchases also growing by about 76% compared to 2017.
                                    </p>
                                    <p> This can pose a significant risk to Coway's market share based on rental-based face-to-face services.
                                    </p>
                                </b-td>
                                <b-td>
                                    <p>Coway is recording steady growth based on a professional and reliable service network.
                                    </p>
                                    <p>We provide an unsatisfying customer experience through online purchases, solve problems at customer touch points, and increase value to maximize the retention rate of existing customers and expand new customers.
                                    </p>
                                    <p> In particular, customized customer relief care service provides a differentiated customer experience from online purchases.
                                    </p>
                                    <p> Meanwhile, we are expanding our online business in 2019 to take advantage of e-commerce to create new opportunities.
                                    </p>
                                    <p> Coway will continue to innovate to create customer value based on rental services and seek new values through the strategic online entry.
                                    </p>
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
            return this.is_ENG? 'Risk Management' : '리스크 관리'
        },
        sub_titles(){
            let temp = [
                { 
                    title: this.is_ENG? 'Company-wide Risk Management System': '전사적 리스크 관리 체계', hash: 'h1'
                },
                { 
                    title: this.is_ENG? 'Emerging Risks': '잠재 리스크의 관리', hash: 'h2'
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
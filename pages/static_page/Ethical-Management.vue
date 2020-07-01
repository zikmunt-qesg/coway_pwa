<template>
<div class="position-relative page-top-bg-sus min-vh-100">   
    <logger title="윤리경영"></logger>
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
                    <h4-ancor hash="T" :activated="activated" class="parang8 mb-4 mb-sm-5 mt-m-2">윤리경영</h4-ancor>

                    <p class="mb-5">코웨이는 윤리경영 방식인 3C(Code of Conduct, Compliance Check Organization, Consensus by Ethic Education)를 바탕으로 ‘클린 코웨이’를 추구 및 구현하고 있습니다. 
                    </p>
                    <hj-img src="/images/33_1.svg" fluid></hj-img>
                    <hr class="mb-4">

                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="g1" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">윤리강령(Code of Conduct)</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-3">코웨이는 책임있는 윤리 실천을 위해 ‘클린 코웨이(Clean Coway)’를 비전으로 윤리경영 문화를 조성하고 있습니다. 코웨이는 윤리헌장, 윤리규정, 윤리실천지침을 제정하여 임직원 및 이해관계자의 윤리적 행동 지침을 명확하게 규정하고 적용하고 있습니다. 윤리헌장은 클린 코웨이의 기본 원칙을 정립하며, 윤리규정을 통해 임직원 및 이해관계자의 윤리적 행동 및 가치판단의 기준을 명시합니다. 또한 윤리실천지침을 통해 구체적인 실천사항을 규정하여 다양한 윤리 이슈에 대응할 수 있는 지침을 마련하였습니다.
                    </p>

                    <a href="/documents/code_of_conduct.pdf" download><b-button variant="parang" size="sm" class="mb-45 px-md-3 mr-2 mr-md-3">윤리헌장</b-button></a>
                    <a href="/documents/code_of_conduct_guideline.pdf" download><b-button variant="parang" size="sm" class="mb-45 px-md-3 mr-2 mr-md-3">윤리규정</b-button></a>
                    <a href="/documents/code_of_conduct_instruction.pdf" download><b-button variant="parang" size="sm" class="mb-45 px-md-3">윤리실천지침</b-button></a>

                    <p class="mb-3">코웨이는 홈페이지에 이해관계자가 제보하는 잘못된 관행이나 정책에 대한 개선사항을 접수 받는 윤리제보센터를 운영하고 있습니다. 코웨이는 우편, 팩스 및 온라인을 통해 제보를 접수받고 있습니다. 제보가 접수되면 윤리경영실에서 사안을 판단하여 조사를 진행하고 있으며, 제보된 사안과 동일 또는 유사한 사안이 재발하지 않도록 필요한 경우 사례공유 및 교육을 진행합니다. 코웨이는 제보자를 보호하기 위해 제보자 보호 및 포상 지침을 수립하여 적용하고 있습니다. 
                    </p>

                    <a href="https://ethics.coway.com:447/Company/Manage/Ethics/Maintenance/PopOnlineReport.aspx" target="_blank"><b-button variant="parang" size="sm" block>윤리 제보센터</b-button></a>
                    <hr class="mb-2">

                    <hj-img src="/images/34_1.svg" fluid></hj-img>

                    <hr class="">
                        <h7 class="mb-3 gray63 font-noto">2019 윤리 제보 및 조치 건수</h7>
                        <b-table-simple responsive class="num-table sustainability-table f-95">
                             <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td>기타 윤리실천지침 위배<sup>1)</sup></b-td><b-td>변칙영업</b-td><b-td>기타(금전거래 등)</b-td><b-td>Total</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">2019년 윤리 제보 건수</b-td><b-td>77건</b-td><b-td>50건</b-td><b-td>3건</b-td><b-td>130건</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-45">
                            <li>기타 윤리실천지침 위배: 제보자가 제품/서비스 등 민원을 해당 유형으로 접수</li>
                        </ol>
                    <hr class="mb-3">
                    
                    <div class="d-flex mb-3 position-relative overflow-hidden"><h6-ancor hash="g2" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">윤리진단(Compliance Check Organization)</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-45">코웨이는 윤리강령에 기반하여 윤리 리스크 예방을 위해 정기 및 수시 진단(업무 프로세스 및 제도 개선 등)을 실시하고 있습니다.  2019년 총 12회의 진단을 시행하였습니다. 
                    </p>

                    <h7 class="mb-3 gray63">반부패 진단 및 조치 현황</h7>
                        <b-table-simple responsive class="num-table sustainability-table f-95">
                             <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td class="text-left">단위</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">부패 진단이 실시된 사업장 비율</b-td><b-td class="text-left">%</b-td><b-td>100%</b-td><b-td>100%</b-td><b-td>100%</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">윤리강령 위반에 대한 조치<sup> 1)</sup></b-td><b-td class="text-left">건</b-td><b-td>46<sup> 2)</sup></b-td><b-td>4</b-td><b-td>5</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-45">
                            <li>인사위원회 실제 징계조치 건 수</li>
                            <li>2017년은 변칙 영업으로 인한 제재 건을 포함한 수치임. 2018년부터 제외함</li>
                        </ol>                       
                    <hr class="mb-3">

                    <div class="d-flex mb-3 position-relative overflow-hidden"><h6-ancor hash="g3" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">윤리교육(Consensus by Ethic Education)</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-45">코웨이는 내재화된 윤리 문화로서 ‘클린 코웨이’를 조성하기 위해 정기적으로 윤리교육을 실시하여 윤리경영에 대한 인식과 실천 의지를 제고하고 있습니다. 전사 임직원을 대상으로 격년제로 의무 교육을 시행함에 따라 2019년에는 내부통제 수행자 및 관리자, 임원, 감사위원회를 대상으로 내부회계관리제도 오프라인 교육을 실시하였습니다.  
                    </p>

                        <h7 class="mb-3 gray63">임직원 윤리경영 교육</h7>
                        <b-table-simple responsive class="num-table sustainability-table f-95">
                             <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td class="text-left">단위</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">윤리경영 교육 참여 인원</b-td><b-td class="text-left">명</b-td><b-td>4,290</b-td><b-td>4,245</b-td><b-td>196</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">윤리경영 교육 참여율<sup> 1)</sup></b-td><b-td class="text-left">%</b-td><b-td>94</b-td><b-td>89</b-td><b-td>4<sup> 2)</sup></b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-45">
                            <li>전체 직원(4,988명) 대비 참여율</li>
                            <li>2019년부터 윤리교육을 격년제로 전환하여 교육 참여율이 감소함</li>
                        </ol>
                </section> 
                <!-- End of DMA-->
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
            <h1 class="mt-5 mb-3 pt-3 text-center w-100 fw-400">CARE FOR SUSTAINABILITY</h1>
            <h7 class="mb-5 text-center w-100 fw-400">Practicing "Good faith" toward a better world, Coway Sustainability Management Vision </h7>
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
                    <h4-ancor hash="T" :activated="activated" class="parang8 mb-4 mb-sm-5 mt-m-2">Ethical Management</h4-ancor>

                    <p class="mb-5">Coway  pursues and achieves the Clean Coway  as a transparent corporate culture based on our ethical management way, 3C(Code of Conduct, Compliance Check Organization, and Consensus by Ethic Education). 
                    </p>
                    <hj-img src="/images/33_1.svg" fluid></hj-img>
                    <hr class="mb-4">

                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="g1" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">Code of Conduct</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-3">Coway is creating an ethical management culture with a vision of 'Clean Coway' to practice responsible ethics. Coway has established the Charter of Ethics, Regulations on Ethics, and Code of Ethics to clearly define and apply ethical behavior guidelines for employees and stakeholders. The Charter of Ethics establishes the basic principles of Clean Coway and sets standards for ethical behavior and value judgment of employees and stakeholders through Regulations on Ethics. Also, according to the Code of Ethics, specific practice matters are prescribed to prepare guidelines to address various ethical issues. 
                    </p>

                    <a href="/documents/code_of_conduct.pdf" download><b-button variant="parang" size="sm" class="mb-45 px-md-3 mr-2 mr-md-3">The Charter of Ethics</b-button></a>
                    <a href="/documents/code_of_conduct_guideline.pdf" download><b-button variant="parang" size="sm" class="mb-45 px-md-3 mr-2 mr-md-3">The Regulations on Ethics</b-button></a>
                    <a href="/documents/code_of_conduct_instruction.pdf" download><b-button variant="parang" size="sm" class="mb-45 px-md-3">The Code of Ethics</b-button></a>

                    <p class="mb-3">Coway operates an ethics reporting center that receives improvement suggestions to the wrong practices or policies reported by stakeholders on its website. Coway receives reports via mail, fax, and online. When a report is received, the Ethical Management Office determines the matter and conducts an investigation. If necessary, we share the case and conduct training to prevent the recurrence of the same or similar matter. 
                    </p>

                    <a href="https://ethics.coway.com:447/Company/Manage/Ethics/Maintenance/PopOnlineReport.aspx" target="_blank"><b-button variant="parang" size="sm" block>Ethics Reporting Center</b-button></a>
                    <hr class="mb-2">

                    <hj-img src="/images/34_1.svg" fluid></hj-img>

                    <hr class="">
                        <h7 class="mb-3 gray63 font-noto">2019 Ethics Reports and Measures</h7>
                        <b-table-simple responsive class="num-table sustainability-table f-95">
                             <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td>Other violation of The Code of Ethics<sup>1)</sup></b-td><b-td>Anomalous operations</b-td><b-td>Others (such as money transactions)</b-td><b-td>Total</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Ethics Reports in 2019</b-td><b-td>77 Cases</b-td><b-td>50 Cases</b-td><b-td>3 Cases</b-td><b-td>130 Cases</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-45">
                            <li>Other violation of The Code of Ethics: Informants report complaints on products and services in the appropriate ways</li>
                        </ol>
                    <hr class="mb-3">
                    
                    <div class="d-flex mb-3 position-relative overflow-hidden"><h6-ancor hash="g2" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">Compliance Check Organization</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-45">Coway conducts regular ethics assessments to prevent ethical risks based on the Code of Ethics. A total of 12 diagnoses were conducted in 2019, and related information is regularly notified to workplaces to prevent unethical behavior.
                    </p>

                    <h7 class="mb-3 gray63">Anti-corruption Diagnosis and Action Status</h7>
                        <b-table-simple responsive class="num-table sustainability-table f-95">
                             <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td class="text-left">Unit</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Percentage of workplaces that finished corruption diagnosis</b-td><b-td class="text-left">%</b-td><b-td>100%</b-td><b-td>100%</b-td><b-td>100%</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Actions for Violation of the Code of Ethics<sup> 1)</sup></b-td><b-td class="text-left">건</b-td><b-td>46<sup> 2)</sup></b-td><b-td>4</b-td><b-td>5</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-45">
                            <li>Number of cases of Personnel Committee Actual Disciplinary Actions</li>
                            <li>2017 category is a figure that includes sanctions due to anomalous operations. Excluded since 2018</li>
                        </ol>                       
                    <hr class="mb-3">

                    <div class="d-flex mb-3 position-relative overflow-hidden"><h6-ancor hash="g3" :activated="activated" class="parang7 f-130 fw-500 bg-white pr-5" style="z-index:10">Consensus by Ethic Education</h6-ancor><div class="horizontal-line-2 parang-line position-absolute" style="z-index:8"></div></div>
                    <p class="mb-45">As an internalized ethical culture, Coway regularly conducts ethics education to create a "Clean Coway," raising awareness and commitment to ethical management. As biennial basis compulsory training was conducted for all company employees, in 2019, the internal accounting management system offline training was provided for internal control directors, managers, executives, and audit committees.
                    </p>

                        <h7 class="mb-3 gray63">Ethical management training for employees</h7>
                        <b-table-simple responsive class="num-table sustainability-table f-95">
                             <b-thead><b-tr>
                                <b-td class="text-left">Category</b-td><b-td class="text-left">Unit</b-td><b-td>2017</b-td><b-td>2018</b-td><b-td>2019</b-td>
                            </b-tr></b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td class="text-left">Ethical management training participants</b-td><b-td class="text-left">명</b-td><b-td>4,290</b-td><b-td>4,245</b-td><b-td>196</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td class="text-left">Ethical management training participation rate<sup> 1)</sup></b-td><b-td class="text-left">%</b-td><b-td>94</b-td><b-td>89</b-td><b-td>4<sup> 2)</sup></b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        <ol type="1" class="f-80 fw-300 footnote-ol line-height-low mb-45">
                            <li>participation rate compared to the total number of employees(4,988)</li>
                            <li>The participation rate of Consensus by Ethic Education decreased due to the transition to biennial in 2019.</li>
                        </ol>
                </section> 
                <!-- End of DMA-->
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
            return this.is_ENG? 'Ethical Management' : '윤리경영'
        },
        sub_titles(){
            let temp = [
                { 
                    title: this.is_ENG? 'Code of Conduct':'윤리강령(Code of Conduct)', hash: 'g1'
                },
                { 
                    title: this.is_ENG? 'Code of Conduct':'윤리진단(Compliance Check Organization)', hash: 'g2'
                },
                { 
                    title: this.is_ENG? 'Code of Conduct':'윤리교육(Consensus by Ethic Education)', hash: 'g3'
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
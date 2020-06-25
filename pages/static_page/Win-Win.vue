<template>
<div class="position-relative page-top-bg-so min-vh-100">   
    <logger title="동반성장"></logger>
    <div class="w-100 bg-white bg-white-cover position-absolute"></div>

    <b-container class="">
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
                                <h1 class="mt-m-2 mb-0">03</h1>
                                <h4-ancor hash="T" :activated="activated" class="mb-4 mb-sm-5 mt-m-2">동반성장</h4-ancor>
                            </b-col>
                        </b-row>
                         <b-row no-gutters class="px-3 py-4">
                            <b-col class="col-12 col-sm-4 mb-5 mb-sm-0 fw-500 gold7">
                                <div class="mr-5 pr-lg-2 pr-xl-4" style="max-width: 180px;"> <b-img src="/images/140_1.svg" fluid ></b-img> </div>
                            </b-col>
                            <b-col class="col-12 col-sm-8 pr-2">
                                <h7 class="gold7 mb-3">Business relevance &amp; Approach</h7>
                                <p>산업 내 상생을 도모하고 건전하고 공정한 거래 문화를 조성하는 것은 경쟁력 확보 및 지속가능한 시장 성장의 기반이 됩니다. 코웨이는 밸류체인 전 과정에서 협력사와의 긴밀한 협력과 상생활동을 추진하여 산업 내 건강한 거래문화를 견인합니다. 이를 위해 협력사와 열린 소통을 추진하여 경영안정 기반 강화, 성장 인프라 지원, 1차협력사의 2차 협력사 지원 등 다각적인 동반성장 활동을 추진하고 있습니다.   
                                </p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark">
                            <h7 class="gold7 mb-4 w-100">Activity</h7>
                            <b-col class="col-6 col-md-3 text-center fw-500">
                                <div class="mx-auto mb-2"><b-img src="/images/141_1.svg" fluid ></b-img> </div>
                                <p class="fw-500 word-break">착한믿음협의회 및 상생포털을 통한 협력사 소통</p>
                            </b-col>
                            <b-col class="col-6 col-md-3 text-center fw-500">
                                <div class="mx-auto mb-3"><b-img src="/images/141_2.svg" fluid ></b-img> </div>
                                <p class="fw-500 word-break px-sm-2">경영안정 기반 강화 지원</p>
                            </b-col>
                            <b-col class="col-6 col-md-3 text-center fw-500">
                                <div class="mx-auto mb-3"><b-img src="/images/141_3.svg" fluid ></b-img> </div>
                                <p class="fw-500 word-break px-sm-2">성장 인프라 지원</p>
                            </b-col>
                            <b-col class="col-6 col-md-3 text-center fw-500">
                                <div class="mx-auto mb-2"><b-img src="/images/141_4.svg" fluid ></b-img> </div>
                                <p class="fw-500 word-break px-sm-2 font-noto">1차 협력사의 2차 협력사 지원</p>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class="px-3 py-3 border-top-dark">
                            <b-col class="col-12 col-md-5 pr-md-4 mb-4 mb-md-0">
                                <h7 class="gold7 mb-4 w-100">Business Cases</h7>
                                <div class="text-center"><div class="mx-auto mb-3"><b-img src="/images/141_5.svg" fluid ></b-img></div>
                                    <p class="fw-500 word-break px-lg-3">공정거래 4대 가이드라인을 기반으로 투명한 거래 문화 조성</p>
                                </div>
                            </b-col>
                            <b-col class="col-12 col-md-7 position-relative pl-md-4">
                                <div class="vertical-line-1 position-absolute d-none d-md-block"></div>

                                <h7 class="gold7 mb-4 w-100">Performance</h7>
                                <b-row>
                                    <b-col class="col-7">
                                        <p class="fw-500 line-height-low word-break text-center mb-3">동반성장위원회 동반성장지수</p>
                                        <div class="d-flex justify-content-around align-items-center">
                                            <p class="fw-400 gray63 word-break w-50 text-center px-2"> 2018까지 5년연속 최우수 등급 획득</p><p class="fw-400 gray63 word-break w-50 px-3 text-center">2019년 우수 등급 획득</p>
                                        </div>
                                    </b-col>
                                    <b-col class="col-5">
                                        <div class="text-center mt-m-3"><span class="f-330 fw-400 font-italic">64</span> 건</div>
                                        <p class="fw-400 gray63 text-center word-break">1, 2차 간 상생협력을 위한 협약 체결</p>
                                    </b-col>
                                </b-row>
                            </b-col>                            
                        </b-row>
                    </div>
                </section>
                <hr class="py-2">
                <!-- End of DMA-->
                <section class="mb-5">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="t1" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">협력사와의 소통을 통한 성장 지원</h6-ancor><div class="horizontal-line-2 gold-line position-absolute" style="z-index:8"></div></div>
                        <p class="mb-45">코웨이는 협력사와의 열린 소통을 기반으로 건전한 산업 생태계를 조성하기 위해 동반성장을 추진하고 있습니다. 코웨이의 동반성장 추진 전략은 1) 품질/원가/기술/생산성 경쟁력 확보, 2) 지속가능 경영기반 강화, 3) 경영안정성 확보를 기반으로 글로벌 경쟁력을 확보하는 것입니다. 이에 따라 코웨이는 협력사와의 열린 소통을 동반성장 전략 이행의 핵심 전략으로 추진하고 있습니다. 
                        </p>
                        <hj-img src="/images/67_1.svg" fluid class="w-100"></hj-img>
                        <hr class="space-p25">

                        <p class="mb-3">코웨이는 정기적인 협의 채널인 착한믿음협의회를 운영하여 협력사와의 수평적 커뮤니케이션을 통해 산업 환경의 변화를 주도하고, 스마트한 커뮤니케이션을 위한 온라인 소통채널로 상생포털을 운영하고 있습니다. 간담회 위주의 정형화된 소통에서 벗어나 수평적이고 자율적인 협력사 소통을 위해 2011년부터 ‘착한믿음협의회’를 운영하고 있습니다. 착한믿음협의회는 코웨이의 주요 1차 및 2차 협력사가 참여하고 있습니다. 2019년 착한믿음협의회 참여기업은 67개사로, 생산성 혁신 활동 및 해외 우수기업 벤치마킹 등 기업 경쟁력 강화 활동을 진행하였습니다. 2019년 착한믿음협의회 활동 핵심 주제는 스마트팩토리(Smart Factory)와 생산성 향상으로, 교육 프로그램 ‘SMART DAY’를 4회 개최하였으며, 일본의 스마트팩토리 우수 도입 기업에 벤치마킹 연수를 실시하였습니다.
                        </p>
                        <p class="mb-45">온라인 동반성장 커뮤니티 ‘상생포털’은 산업 내 다양한 정보를 공유하고 동반성장 전략 및 혁신활동 등을 추진하는 기반 플랫폼으로 기능합니다. 2019년에는 6,541명의 협력사 임직원이 접속하여 12,636건의 댓글 소통을 진행하는 등 활발한 정보 공유의 장으로 활동을 이어 나가고 있습니다.
                        </p>
                        <hj-img src="/images/16_1.svg" fluid></hj-img>
                        <hr class="space-p25">
                        <a href="http://www.coway-partnership.com/main/index.html"><b-button variant="gold" size="sm" block>상생포털 바로가기</b-button></a>

                        <hr class="mb-4">

                        <p class="mb-45">코웨이는 협력사 동반성장 지원을 위해 경영안정 기반 강화 지원, 성장 인프라 지원, 2차 협력사 지원 등을 제공하고 있습니다. 
                        </p>
                    
                    <h7 class="mb-3 gray63">경영안정 기반 강화</h7>
                            <b-table-simple responsive class="txt-table social-table f-95 mb-5">
                                <b-thead><b-tr>
                                    <b-td>구분</b-td> <b-td>추진내용</b-td><b-td>2019 추진결과</b-td>
                                </b-tr></b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td>금융(자금)지원</b-td>
                                        <b-td>200억 원 규모의 상생펀드와 30억 원 상한의무이자 자금 지원제도 운영</b-td> 
                                        <b-td>자금지원: 84.01억 원 지원</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td>대금지급</b-td>
                                        <b-td>납품거래 시 10일 이내 100% 현금으로 결제</b-td> 
                                        <b-td>대금지급일: 9.8일</b-td>
                                    </b-tr>  
                                    <b-tr>
                                        <b-td>결재수단</b-td>
                                        <b-td>현금(성) 결제 비율 100%</b-td> 
                                        <b-td>결제수단: 현금(성) 100% 지급 이행</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td>분쟁조정절차 마련 및 운영</b-td>
                                        <b-td>분쟁조정절차를 마련하고 운용</b-td> 
                                        <b-td>윤리제보센터 운용<br>사규화 및 홈페이지 고지</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td>매입액 조정</b-td>
                                        <b-td>협력사의 매입액 인상 요청에 대한 실제 매입액 조정(증가) 비율</b-td> 
                                        <b-td>인상비율: 99.9%</b-td>
                                    </b-tr> 
                                    <b-tr>
                                        <b-td>협력사 근로자 근로조건 개선</b-td>
                                        <b-td>소비자물가상승률 대비 협력사 근로자 임금 향상</b-td> 
                                        <b-td>임금상승률: 9.6%</b-td>
                                    </b-tr>       
                                </b-tbody>                                
                            </b-table-simple>

                        <h7 class="mb-3 gray63">성장인프라 지원</h7>
                            <b-table-simple responsive class="txt-table social-table f-95 mb-5">
                                <b-thead><b-tr>
                                    <b-td>구분</b-td> <b-td>추진내용</b-td><b-td>2019 추진결과</b-td>
                                </b-tr></b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td>교육 및 채용</b-td>
                                        <b-td>협력사 현장개선활동 및 채용지원</b-td> 
                                        <b-td>협력사 역량개발교육: 수료 인원 243명 (총12과목)</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td>기술 지원 및 보호</b-td>
                                        <b-td>협력사 기술 경쟁력 확보를 위한 기술 지원 및 보호 프로그램 운영</b-td> 
                                        <b-td>기술지원/공동기술개발: 2건(47백만원)<br>기술보호/기술임치: 6건</b-td>
                                    </b-tr>  
                                    <b-tr>
                                        <b-td>생산성 향상</b-td>
                                        <b-td>현금(성) 결제 비율 100%</b-td> 
                                        <b-td>결제수단: 현금(성) 100% 지급 이행</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td>분쟁조정절차 마련 및 운영</b-td>
                                        <b-td>협력사 현장 혁신지원을 통한 생산성 향상</b-td> 
                                        <b-td>현장 혁신지원(공정혁신): 5개사 5건</b-td>
                                    </b-tr>   
                                </b-tbody>                                
                            </b-table-simple>

                        <h7 class="mb-3 gray63"><span class="fw-600">1</span>차 협력사의 <span class="fw-600">2</span>차 협력사 지원 유도</h7>
                            <b-table-simple responsive class="txt-table social-table f-95 mb-5">
                                <b-thead><b-tr>
                                    <b-td>구분</b-td> <b-td>추진내용</b-td><b-td>2019 추진결과</b-td>
                                </b-tr></b-thead>
                                <b-tbody>
                                    <b-tr>
                                        <b-td>협약 체결</b-td>
                                        <b-td>1, 2차 간 상생협력을 위한 협약 체결</b-td> 
                                        <b-td>64개사 협약 체결</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td>자금 지원</b-td>
                                        <b-td>2차 협력사 금융지원 유도</b-td> 
                                        <b-td>5개사 17억 원 지원</b-td>
                                    </b-tr>  
                                    <b-tr>
                                        <b-td rowspan="2">2차 협력사 지원</b-td>
                                        <b-td>대금지급조건 개선 유도 시스템 도입</b-td> 
                                        <b-td>1,355억 원 모니터링 완료</b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-td>대금지급조건 개선 정도</b-td>
                                        <b-td>평균지급일수: 25.4일<br>현금비율: 77%</b-td> 
                                    </b-tr>   
                                </b-tbody>                                
                            </b-table-simple>
                    <hr class="py-3">
                    <div class="d-flex mb-3 position-relative overflow-hidden"> <h6-ancor hash="t2" :activated="activated" class="gold7 f-130 fw-500 bg-white pr-5" style="z-index:10">공정거래 문화 조성</h6-ancor><div class="horizontal-line-2 position-absolute" style="z-index:8"></div></div>
                        <p class="mb-3">코웨이는 협력사의 권리와 이익을 정당하게 반영하고, 원청회사의 우월한 교섭력 남용을 방지하고자 상생협력을 위한 공정거래 4대 가이드라인을 운용하고 있습니다.  
                        </p>
                        <p class="mb-3">공정거래 4대 가이드라인은 1) 바람직한 계약 체결, 2) 협력사 선정운용의 공정성 및 투명성 보장, 3) 대·중소기업간 바람직한 계약체결 가이드라인의 준수, 4) 거래 심의위원회 설치 및 운용으로 구성되어 있으며, 이를 준수하기 위해 공정거래 담당자를 중심으로 가이드라인 준수 여부를 지속적으로 모니터링 및 문서화하여 관리하고 있습니다. 2019년에는 투명한 협력업체 선정을 위해 신규 입찰 시스템을 도입하고, 협력사에 시스템 이용 교육을 제공하였습니다.
                        </p>
                        <p class="mb-3">코웨이는 공정한 거래를 위해 공정거래위원회가 제시한 가이드라인을 내규화 하고 이를 운용하고자 내부 불공정거래 감시기구를 설치하여 운영하고 있습니다. 불공정거래 감시기구는 상생협력팀, 자재관리팀(유구, 인천), 기구구매팀, 전장구매팀의 각 팀장으로 구성되어 있으며 연 12회 공정거래 자율 심의 위원회를 운영하여 단가 변동 추이 등을 포함한 협력사 거래의 전반적인 사항을 모니터링 합니다. 코웨이는 공급망 내 투명한 거래 문화를 조성하여 함께 성장할 수 있는 산업 생태계를 조성해 나갈 예정입니다.
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
            return this.is_ENG? 'Win Win' : '동반성장'
        },
        sub_titles(){
            let temp = [
                { 
                    title: this.is_ENG? 'Support for Growth through Communication with Suppliers': '협력사와의 소통을 통한 성장지원', hash: 't1' 
                },
                { 
                    title: this.is_ENG? 'Support for Growth through Communication with Suppliers': '공정거래 문화 조성', hash: 't2'
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
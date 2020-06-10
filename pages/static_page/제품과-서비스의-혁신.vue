<template>
<div class="position-relative page-top-bg min-vh-100">  
    <logger title="제품과 서비스의 혁신"></logger>
    <b-img src="@/assets/images/사각형 8@2x.png" fluid class="material-page-top-img"></b-img>

    <b-container class="">
        <b-row class="my-5 pt-md-5">
            <h1 class="mt-2 mt-lg-5 mb-3 text-center text-white w-100 fw-400">MATERIAL TOPICS</h1>
            <h7 class="mb-lg-4 text-center text-white w-100 fw-300"> dummy text 환경을 건강하게 사람을 행복하게, 내일을 디자인하는 그린 글로벌 리더 </h7>
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
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0">
                <section class="bg-blue1 px-4 py-4 mb-5">                    
                    <b-row no-gutters class="px-3 pt-4">                            
                        <b-col class="col-12 col-sm-3 mb-2 mb-sm-0 blue8">
                            <h4-ancor :title="'제품과 서비스의 혁신'" :activated="activated" class="f-190 fw-300 mb-4 mb-sm-5 mt-m-2">제품과 서비스의 혁신</h4-ancor>
                        </b-col>
                    </b-row>
                    <b-row no-gutters class="px-3 pb-4 mb-5 mb-sm-0">  
                        <b-col class="col-12 col-sm-4">
                            <div class="temp-icon1"> <b-img src="@/assets/images/구성 요소8_1@2x.png" fluid class="h-100"></b-img> </div>
                        </b-col>
                        <b-col class="col-12 col-sm-8 pr-2">
                            <h7 class="blue6 mb-3">Business relevance & Approach</h7>
                            <p>임직원이 자유롭게 역량을 발휘할 수 있는 기업문화는 기업 경쟁력을 유지하기 위해 매우 중요한 요소입니다. 코웨이는 투명하고 공정한 채용 과정을 통해 우수 인재를 선발하고, 체계화된 교육 프로그램을 운영하여 임직원이 자발적으로 역량을 개발할 수 있도록 지원합니다. 또한 임직원과의 적극적인 커뮤니케이션을 기반으로 수평적으로 소통하는 기업문화를 조성하여 자율적인 업무역량 발휘는 물론 일과 삶의 균형을 추구하는 인재 경영을 실천하고 있습니다. 
                            </p>
                            <p>또한, 사람 중심의 기업문화에 기반하여 안전한 업무 환경을 조성하고 근로자의 질병 및 재해를 최소화하기 위해 안전보건 경영을 추진합니다. 산업안전보건위원회를 기반으로 안전보건 시스템을 마련하고, 국내 전 공장에 통합적인 안전보건 시스템을 운영하고 있습니다.
                            </p>
                        </b-col>
                    </b-row>
                </section>
            </b-container>
            </b-col>
        </b-row>

        <hr class="space-p75">

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
            title: '제품과 서비스의 혁신',
            activated: [],
            sub_titles: [
                { 
                    title: '본질적 가치를 높이는 제품 혁신', 
                    child: [
                        { title: '혁신 기술의 집약, 한뼘 시루직수 정수기 개발' }, 
                        { title: '고객 맞춤형 혁신 다각화' }, 
                    ]
                },
                { 
                    title: '미래 기술 기반의 서비스 혁신',
                    child: [
                        { title: '빅데이터 기반 제품 추천, 워터맵 서비스' }, 
                        { title: '시뮬레이션 체험, 공기 주치의 서비스' }, 
                        { title: '모바일 서비스 강화, 안심 QR 서비스 시행' }
                    ]
                },
                { 
                    title: '혁신을 위한 연구개발 역량 강화',
                    child: [
                        { title: '깨끗하고 맛있는 물에 대한 연구, 물맛 연구소' }, 
                        { title: '오픈 이노베이션, 아마존과 협력을 통한 IoT 기술 도입' }
                    ]
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
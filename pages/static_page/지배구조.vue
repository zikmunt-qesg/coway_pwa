<template>
<div class="position-relative page-top-bg min-vh-100">   
    <logger title="지배구조"></logger>
    <b-img src="@/assets/images/사각형17.png" fluid class="page-top-img"></b-img>

    <b-container class="">
        <b-row class="my-5 pt-md-5">
            <h1 class="mt-2 mt-lg-5 mb-3 text-center w-100 fw-400">CARE FOR SUSTAINABILITY</h1>
            <h7 class="mb-lg-5 text-center w-100 fw-400"> dummy text 환경을 건강하게 사람을 행복하게, 내일을 디자인하는 그린 글로벌 리더 </h7>
        </b-row>
        <b-row>
            <b-col class="d-none d-lg-inline col-lg-3 position-relative">
                <side-navigation 
                :main_title="'지배구조'"
                :sub_titles="sub_titles"
                :activated="activated"
                :active_color="'#313d72'"
                ></side-navigation>
            </b-col>
            <b-col class="col-auto col-lg-9 pl-lg-4">
            <b-container class="px-0">
                <section class="bg-white px-4 py-4 mb-5">
                    <div class="border-top-dark pb-2 mb-5"></div>
                    <h4-ancor :title="'지배구조'" :activated="activated" class="blue9 mb-4 mb-sm-5 mt-m-2">지배구조</h4-ancor>
                    <p>코웨이는 이사회를 중심으로 견제와 균형에 기반한 효율적 경영활동을 수행하는 독립적인 지배구조를 구축하여 이를 유지∙발전시켜 나가고 있습니다. 이사회는 안정적 경영활동과 이익 창출을 통한 주주환원의 실현 및 전략적 의사결정을 통한 성장전략 구현 등 장기 기업가치 향상을 목표로 투명성, 독립성, 다양성, 전문성, 효율성 제고를 지향합니다. 
                    </p>

                    <div class="d-flex mb-2 position-relative"> <h6-ancor :title="'이사회 중심의 책임경영 수행'" :activated="activated" class="blue7 f-130 fw-500 bg-white pr-5" style="z-index:10">이사회 중심의 책임경영 수행</h6-ancor></div>
                    <p>코웨이 이사회는 법령과 정관에 따라 주주로부터 기업 경영에 관한 최고 의사결정권을 위임받아, 이해관계자와 다양한 이해관계를 조율하고 경영 의사결정을 승인하는 최고 기구로서의 책임과 역할을 지니고 있습니다. 코웨이의 이사회는 투자계획, 내부거래 등 이해관계 상충, 투명한 보상 등에 대한 심의, 승인과 함께 회사의 장기 리스크 관리 전반에 대한 검토 및 책임을 수행합니다. 
                    </p>

                    <h7 class="mb-2">이사회 구성현황</h7>
                        <b-table-simple responsive class="text-table f-95">



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
            title: '지배구조',
            activated: [],
            sub_titles: [
                { 
                    title: '이사회 중심의 책임경영 수행', 
                    child: [
                        { title: '이사회 구성현황' }, 
                    ]
                },
                { 
                    title: '이사회의 독립성 및 전문성' 
                },
                { 
                    title: '이사회 산하 위원회 운영' 
                },
                { 
                    title: '성과평가와 보수 지급' 
                },
                { 
                    title: '소유구조 및 의결권' 
                },
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
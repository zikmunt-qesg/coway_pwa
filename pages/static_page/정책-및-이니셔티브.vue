<template>
<div class="position-relative min-vh-100">
    <b-row no-gutters class="py-5 bg-blue3 mb-5">
        <b-col class="py-5 my-3 my-md-4 text-center text-white"><h1>Policies &amp; Initiatives</h1></b-col>
    </b-row>
    <b-container>
            <b-nav tabs class="mb-5">
                <b-nav-item :active="show_page=='Policies'" @click.stop.prevent="showTab('Policies')" class="f-110 fw-400"> 지속가능성 정책 </b-nav-item>
                <b-nav-item :active="show_page=='Initiatives'" @click.stop.prevent="showTab('Initiatives')" class="f-110 fw-400"> 참여 이니셔티브 </b-nav-item>
            </b-nav>

            <div v-if="show_page=='Policies'">
                <b-card header="지속가능성 정책">
                    <b-card-body class="p-0">
                        <a href="/documents/coway_trust_guideline_kor.pdf" download><li class="py-2">코웨이 트러스트 가이드라인(국문)</li></a>
                        <a href="/documents/coway_trust_guideline_eng.pdf" download><li class="py-2">코웨이 트러스트 가이드라인(영문)</li></a>
                    </b-card-body>
                </b-card>       
                <hr class="mb-2">

                <b-card header="윤리경영">
                    <b-card-body class="p-0">
                        <a href="/documents/code_of_conduct.pdf" download><li class="py-2">윤리헌장(국문)</li></a>
                        <a href="/documents/code_of_conduct_guideline.pdf" download><li class="py-2">윤리규정(국문)</li></a>
                        <a href="/documents/code_of_conduct_instruction.pdf" download><li class="py-2">윤리실천지침(국문)</li></a>
                    </b-card-body>
                </b-card>  
                <hr class="mb-2">

                <b-card header="협력회사 CSR">
                    <b-card-body class="p-0">
                        <a href="/documents/supplier_code_of_conduct_kor.pdf" download><li class="py-2">협력사 행동규범(국문)</li></a>
                        <a href="/documents/supplier_code_of_conduct_eng.pdf" download><li class="py-2">협력사 행동규범(영문)</li></a>
                    </b-card-body>
                </b-card>
                <hr class="mb-2">

                <b-card header="환경">
                    <b-card-body class="p-0">
                        <a href="/documents/carbon_report_2018.pdf" download><li class="py-2">Carbon Report 2018(국문)</li></a>
                    </b-card-body>
                </b-card>  
                <hr class="mb-2">

                <b-card header="지배구조">
                    <b-card-body class="p-0">
                        <a href="/documents/governance_report_2019.pdf" download><li class="py-2">거버넌스 리포트 2019(국문)</li></a>
                    </b-card-body>
                </b-card>
                <hr class="mb-2">
            </div>
            <div v-if="show_page=='Initiatives'">
                <b-card header="글로벌 기후변화 이니셔티브 참여"></b-card>
            </div>
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
    async asyncData({ query }) {
        if (query.p != null) {
            return { show_page: query.p }
        }
        else{
            return { show_page: 'Policies'}
        }
    },
    data(){
        return {
            title: '정책 및 이니셔티브',
            activated: [],
            sub_titles: [],
        }
    },
    methods:{
        safeHash(target){
            return ih.safeHash(target)
        },
        showTab(target){
            this.show_page = target
        }
    },
    components:{
        SideNavigation,
        h6Ancor,
        h4Ancor
    }
}
</script>
<style scoped>

</style>
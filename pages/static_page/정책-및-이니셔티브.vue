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

            <b-card v-if="show_page=='Policies'" class="p-0">
                <b-card-header>지속가능성 정책</b-card-header>
                <b-card-body>
                    <li>코웨이 트러스트 가이드라인(국문)</li>
                    <li>코웨이 트러스트 가이드라인(영문)</li>
                </b-card-body>
            </b-card>       
            <hr class="mb-3">
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
            show_page: 'Policies',
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
<template>
<div class="position-relative page-top-bg-news min-vh-100">
    <div class="w-100 bg-white bg-white-cover-news position-absolute"></div>

     <b-row no-gutters class="py-5">
        <b-col class="py-3 mt-md-4 mt-lg-5 text-center"><h2 class="fw-400">Download Reports</h2></b-col>
    </b-row>
    <b-container>
        <b-row>
            <b-col class="col-0 col-lg-1"></b-col>
            <b-col class="col-12 col-lg-10 px-0">
                <b-nav tabs class="">
                    <b-nav-item class="f-110 fw-400" active disabled> 보고서 다운로드 </b-nav-item>
                </b-nav>
            </b-col>
            <b-col class="col-0 col-lg-1"></b-col>
        </b-row>
        <b-row>
            <b-col class="col-0 col-lg-1"></b-col>
            <b-col class="col-12 col-lg-10 bg-white px-md-4 px-lg-5 py-5">              
                    <b-card img-src="">                        
                            <b-button-group>
                                <b-button href="/documents/2018_coway_sr_kor.pdf" target="_blank">2019 지속가능경영보고서</b-button>
                                <b-button href="/documents/2018_coway_sr_kor.pdf" download> <i class="fas fa-file-download"></i> </b-button>
                            </b-button-group>
                    </b-card>       
                    <hr class="mb-2">

                    <b-card header="2018 지속가능경영보고서">
                        <b-card-body class="p-0">
                            <a href="/documents/code_of_conduct.pdf" download><li class="py-2">윤리헌장(국문)</li></a>
                            <a href="/documents/code_of_conduct_guideline.pdf" download><li class="py-2">윤리규정(국문)</li></a>
                            <a href="/documents/code_of_conduct_instruction.pdf" download><li class="py-2">윤리실천지침(국문)</li></a>
                        </b-card-body>
                    </b-card>  
                    <hr class="mb-2">

                    <b-card header="2017 지속가능경영보고서">
                        <b-card-body class="p-0">
                            <a href="/documents/supplier_code_of_conduct_kor.pdf" download><li class="py-2">협력사 행동규범(국문)</li></a>
                            <a href="/documents/supplier_code_of_conduct_eng.pdf" download><li class="py-2">협력사 행동규범(영문)</li></a>
                        </b-card-body>
                    </b-card>
                    <hr class="mb-2">

                    <b-card header="2016 지속가능경영보고서">
                        <b-card-body class="p-0">
                            <a href="/documents/carbon_report_2018.pdf" download><li class="py-2">Carbon Report 2018(국문)</li></a>
                        </b-card-body>
                    </b-card>  
                    <hr class="mb-2">

                    <b-card header="2015 지속가능경영보고서">
                        <b-card-body class="p-0">
                            <a href="/documents/governance_report_2019.pdf" download><li class="py-2">거버넌스 리포트 2019(국문)</li></a>
                        </b-card-body>
                    </b-card>
                    <hr class="mb-2">
            </b-col>
            <b-col class="col-0 col-lg-1"></b-col>
        </b-row>
    <hr class="space-p75">        
    </b-container>
</div>
</template>

<script>
import * as ih from '@/components/util'
import LocaleMixin from '@/components/locale'

export default {
    layout: 'StaticPage',
    mixins: [LocaleMixin],
    async asyncData({ query, store }) {
        if(query.l && query.l == 'ENG'){
            store.commit('setLang', 'ENG')
        }
    },
    data(){
        return {
            activated: [],
            sub_titles: [],
        }
    },
    computed:{
        is_ENG(){
            return this.$store.state.is_ENG
        },
        title(){
            return this.is_ENG? 'Download Reports' : '보고서 다운로드'
        },
    },
    methods:{
        safeHash(target){
            return ih.safeHash(target)
        },
    
    },
    components:{
    }
}
</script>
<style scoped lang="scss">
.nav-tabs .nav-link.active{
    border:0;
}
</style>
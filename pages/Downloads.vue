<template>
<div class="position-relative page-top-bg-news min-vh-100">
    <div class="w-100 bg-white bg-white-cover-news position-absolute"></div>

     <b-row no-gutters class="py-5">
        <b-col class="py-3 mt-md-4 mt-lg-5 text-center"><h2 class="fw-400">DOWNLOAD REPORTS</h2></b-col>
    </b-row>
    <b-container v-if="this.$store.state.is_ENG==false" >
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
                <div class="d-flex mb-4 position-relative overflow-hidden"> <h4 class="gray5 fw-500 bg-white pr-4 font-noto" style="z-index:10">2019 지속가능경영보고서</h4><div class="horizontal-line-2 position-absolute" style="z-index:8"></div></div>
                
                    <b-card no-body class="overflow-hidden bg-blue-gray1 border-0">
                        <b-row no-gutters >
                            <b-col  md="6" class="main-report p-3">
                                <b-card-img src="/images/2019_thumbnail.jpg" alt="Image" class="rounded-0 shadow-sm" style="max-height:325px;"></b-card-img>
                            </b-col>
                            <b-col  md="6" class="d-flex align-items-center">
                                <b-card-body class="clearfix">
                                    <div class="font-noto mb-3">2019 Sustianability Report</div>
                                    <b-button-group class="mb-3">
                                        <b-button variant="reports-up" href="/documents/2019_coway_sr_kor.pdf" target="_blank">국문 바로보기</b-button>
                                        <b-button variant="reports" href="/documents/2019_coway_sr_kor.pdf" download><i class="fas fa-file-download"></i> </b-button>
                                    </b-button-group> (6/30 수정 예정)<br>
                                    <b-button-group block>
                                        <b-button variant="reports-up" href="/documents/2018_coway_sr_kor.pdf" target="_blank">영문 바로보기</b-button>
                                        <b-button variant="reports" href="/documents/2018_coway_sr_kor.pdf" download><i class="fas fa-file-download"></i> </b-button>
                                    </b-button-group> (7/8 수정 예정)
                                </b-card-body>
                            </b-col>
                        </b-row>   
                    </b-card>        
                    <hr class="mb-2">
                <hr>
                <div class="d-flex mb-4 position-relative overflow-hidden"> <h4 class="gray5 fw-500 bg-white pr-4 font-noto" style="z-index:10">과거 보고서 (2010-2018)</h4><div class="horizontal-line-2 position-absolute" style="z-index:8"></div></div>

                <b-row>
                    <b-col class="col-6 col-md-4 mb-5">
                        <b-card no-body img-src="/images/2018kor.png">
                            <b-button-group class="w-100">
                                <b-button variant="reports-up" href="/documents/2018_coway_sr_kor.pdf" target="_blank" class="f-90 pt-2 line-height-low">2018 지속가능경영보고서</b-button>
                                <b-button variant="reports" href="/documents/2018_coway_sr_kor.pdf" download><i class="fas fa-file-download"></i> </b-button>
                            </b-button-group>
                        </b-card>
                    </b-col>
                    <b-col class="col-6 col-md-4 mb-5">
                        <b-card no-body img-src="/images/2017kor.png">
                            <b-button-group class="w-100">
                                <b-button variant="reports-up" href="/documents/2017_coway_sr_kor.pdf" target="_blank" class="f-90 pt-2 line-height-low">2017 지속가능경영보고서</b-button>
                                <b-button variant="reports" href="/documents/2017_coway_sr_kor.pdf" download><i class="fas fa-file-download"></i> </b-button>
                            </b-button-group>
                        </b-card>
                    </b-col>
                    <b-col class="col-6 col-md-4 mb-5">
                        <b-card no-body img-src="/images/2016kor.png">
                            <b-button-group class="w-100">
                                <b-button variant="reports-up" href="/documents/2016_coway_sr_kor.pdf" target="_blank" class="f-90 pt-2 line-height-low">2016 지속가능경영보고서</b-button>
                                <b-button variant="reports" href="/documents/2016_coway_sr_kor.pdf" download><i class="fas fa-file-download"></i> </b-button>
                            </b-button-group>
                        </b-card>
                    </b-col>
                    <b-col class="col-6 col-md-4 mb-5">
                        <b-card no-body img-src="/images/2015kor.png">
                            <b-button-group class="w-100">
                                <b-button variant="reports-up" href="/documents/2015_coway_sr_kor.pdf" target="_blank" class="f-90 pt-2 line-height-low">2015 지속가능경영보고서</b-button>
                                <b-button variant="reports" href="/documents/2015_coway_sr_kor.pdf" download><i class="fas fa-file-download"></i> </b-button>
                            </b-button-group>
                        </b-card>
                    </b-col>
                    <b-col class="col-6 col-md-4 mb-5">
                        <b-card no-body img-src="/images/2014kor.png">
                            <b-button-group class="w-100">
                                <b-button variant="reports-up" href="/documents/2014_coway_sr_kor.pdf" target="_blank" class="f-90 pt-2 line-height-low">2014 지속가능경영보고서</b-button>
                                <b-button variant="reports" href="/documents/2014_coway_sr_kor.pdf" download><i class="fas fa-file-download"></i> </b-button>
                            </b-button-group>
                        </b-card>
                    </b-col>
                    <b-col class="col-6 col-md-4 mb-5">
                        <b-card no-body img-src="/images/2013kor.png">
                            <b-button-group class="w-100">
                                <b-button variant="reports-up" href="/documents/2013_coway_sr_kor.pdf" target="_blank" class="f-90 pt-2 line-height-low">2013 지속가능경영보고서</b-button>
                                <b-button variant="reports" href="/documents/2013_coway_sr_kor.pdf" download><i class="fas fa-file-download"></i> </b-button>
                            </b-button-group>
                        </b-card>
                    </b-col>
                    <b-col class="col-6 col-md-4 mb-5">
                        <b-card no-body img-src="/images/2012kor.png">
                            <b-button-group class="w-100">
                                <b-button variant="reports-up" href="/documents/2012_coway_sr_kor.pdf" target="_blank" class="f-90 pt-2 line-height-low">2012 지속가능경영보고서</b-button>
                                <b-button variant="reports" href="/documents/2012_coway_sr_kor.pdf" download><i class="fas fa-file-download"></i> </b-button>
                            </b-button-group>
                        </b-card>
                    </b-col>
                    <b-col class="col-6 col-md-4 mb-5">
                        <b-card no-body img-src="/images/2011kor.png">
                            <b-button-group class="w-100">
                                <b-button variant="reports-up" href="/documents/2011_coway_sr_kor.pdf" target="_blank" class="f-90 pt-2 line-height-low">2011 지속가능경영보고서</b-button>
                                <b-button variant="reports" href="/documents/2011_coway_sr_kor.pdf" download><i class="fas fa-file-download"></i> </b-button>
                            </b-button-group>
                        </b-card>
                    </b-col>
                    <b-col class="col-6 col-md-4 mb-5">
                        <b-card no-body img-src="/images/2010kor.png">
                            <b-button-group class="w-100">
                                <b-button variant="reports-up" href="/documents/2010_coway_sr_kor.pdf" target="_blank" class="f-90 pt-2 line-height-low">2010 지속가능경영보고서</b-button>
                                <b-button variant="reports" href="/documents/2010_coway_sr_kor.pdf" download><i class="fas fa-file-download"></i> </b-button>
                            </b-button-group>
                        </b-card>
                    </b-col>
                </b-row>
                    <hr class="mb-2">
            </b-col>
            <b-col class="col-0 col-lg-1"></b-col>
        </b-row>
        <hr class="space-p75">        
    </b-container>

    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->
    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->
    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->    
    <!-- End of KOREAN DOCUMENT CONTAINER --------------------------------------------------------------------------------------------------->

    <b-container v-else >
        <b-row>
            <b-col class="col-0 col-lg-1"></b-col>
            <b-col class="col-12 col-lg-10 px-0">
                <b-nav tabs class="">
                    <b-nav-item class="f-110 fw-400" active disabled> Downloads </b-nav-item>
                </b-nav>
            </b-col>
            <b-col class="col-0 col-lg-1"></b-col>
        </b-row>
        <b-row>
            <b-col class="col-0 col-lg-1"></b-col>
            <b-col class="col-12 col-lg-10 bg-white px-md-4 px-lg-5 py-5">  
                <div class="d-flex mb-4 position-relative overflow-hidden"> <h4 class="gray5 fw-500 bg-white pr-4 font-noto" style="z-index:10">2019 Sustianability Report</h4><div class="horizontal-line-2 position-absolute" style="z-index:8"></div></div>
                
                    <b-card no-body class="overflow-hidden bg-blue-gray1 border-0">
                        <b-row no-gutters >
                            <b-col  md="6" class="main-report p-3">
                                <b-card-img src="/images/2019_thumbnail.jpg" alt="Image" class="rounded-0 shadow-sm" style="max-height:325px;"></b-card-img>
                            </b-col>
                            <b-col  md="6" class="d-flex align-items-center">
                                <b-card-body class="clearfix">
                                    <div class="font-noto mb-3">2019 Sustianability Report</div>
                                    <b-button-group class="mb-3">
                                        <b-button variant="reports-up" href="/documents/2019_coway_sr_kor.pdf" target="_blank">Korean</b-button>
                                        <b-button variant="reports" href="/documents/2019_coway_sr_kor.pdf" download><i class="fas fa-file-download"></i> </b-button>
                                    </b-button-group><br>
                                    <b-button-group block>
                                        <b-button variant="reports-up" href="/documents/2018_coway_sr_kor.pdf" target="_blank">English</b-button>
                                        <b-button variant="reports" href="/documents/2018_coway_sr_kor.pdf" download><i class="fas fa-file-download"></i> </b-button>
                                    </b-button-group> (7/8 수정 예정)
                                </b-card-body>
                            </b-col>
                        </b-row>   
                    </b-card>       
                    <hr class="mb-2">
                <hr>
                <div class="d-flex mb-4 position-relative overflow-hidden"> <h4 class="gray5 fw-500 bg-white pr-4 font-noto" style="z-index:10"> Past Reports (2010-2018)</h4><div class="horizontal-line-2 position-absolute" style="z-index:8"></div></div>

                <b-row>
                    <b-col class="col-6 col-md-4 mb-5">
                        <b-card no-body img-src="/images/2018kor.png">
                            <b-button-group class="w-100">
                                <b-button variant="reports-up" href="/documents/2018_coway_sr_eng.pdf" target="_blank" class="f-90 pt-2 line-height-low font-noto fw-300">2018 Sustianability (ENG)</b-button>
                                <b-button variant="reports" href="/documents/2018_coway_sr_eng.pdf" download><i class="fas fa-file-download"></i> </b-button>
                            </b-button-group>
                        </b-card>
                    </b-col>
                    <b-col class="col-6 col-md-4 mb-5">
                        <b-card no-body img-src="/images/2017kor.png">
                            <b-button-group class="w-100">
                                <b-button variant="reports-up" href="/documents/2017_coway_sr_eng.pdf" target="_blank" class="f-90 pt-2 line-height-low font-noto fw-300">2017 Sustianability (ENG)</b-button>
                                <b-button variant="reports" href="/documents/2017_coway_sr_eng.pdf" download><i class="fas fa-file-download"></i> </b-button>
                            </b-button-group>
                        </b-card>
                    </b-col>
                    <b-col class="col-6 col-md-4 mb-5">
                        <b-card no-body img-src="/images/2016kor.png">
                            <b-button-group class="w-100">
                                <b-button variant="reports-up" href="/documents/2016_coway_sr_eng.pdf" target="_blank" class="f-90 pt-2 line-height-low font-noto fw-300">2016 Sustianability (ENG)</b-button>
                                <b-button variant="reports" href="/documents/2016_coway_sr_eng.pdf" download><i class="fas fa-file-download"></i> </b-button>
                            </b-button-group>
                        </b-card>
                    </b-col>
                    <b-col class="col-6 col-md-4 mb-5">
                        <b-card no-body img-src="/images/2015kor.png">
                            <b-button-group class="w-100">
                                <b-button variant="reports-up" href="/documents/2015_coway_sr_eng.pdf" target="_blank" class="f-90 pt-2 line-height-low font-noto fw-300">2015 Sustianability (ENG)</b-button>
                                <b-button variant="reports" href="/documents/2015_coway_sr_eng.pdf" download><i class="fas fa-file-download"></i> </b-button>
                            </b-button-group>
                        </b-card>
                    </b-col>
                    <b-col class="col-6 col-md-4 mb-5">
                        <b-card no-body img-src="/images/2014kor.png">
                            <b-button-group class="w-100">
                                <b-button variant="reports-up" href="/documents/2014_coway_sr_eng.pdf" target="_blank" class="f-90 pt-2 line-height-low font-noto fw-300">2014 Sustianability (ENG)</b-button>
                                <b-button variant="reports" href="/documents/2014_coway_sr_eng.pdf" download><i class="fas fa-file-download"></i> </b-button>
                            </b-button-group>
                        </b-card>
                    </b-col>
                    <b-col class="col-6 col-md-4 mb-5">
                        <b-card no-body img-src="/images/2013kor.png">
                            <b-button-group class="w-100">
                                <b-button variant="reports-up" href="/documents/2013_coway_sr_eng.pdf" target="_blank" class="f-90 pt-2 line-height-low font-noto fw-300">2013 Sustianability (ENG)</b-button>
                                <b-button variant="reports" href="/documents/2013_coway_sr_eng.pdf" download><i class="fas fa-file-download"></i> </b-button>
                            </b-button-group>
                        </b-card>
                    </b-col>
                    <b-col class="col-6 col-md-4 mb-5">
                        <b-card no-body img-src="/images/2012kor.png">
                            <b-button-group class="w-100">
                                <b-button variant="reports-up" href="/documents/2012_coway_sr_eng.pdf" target="_blank" class="f-90 pt-2 line-height-low font-noto fw-300">2012 Sustianability (ENG)</b-button>
                                <b-button variant="reports" href="/documents/2012_coway_sr_eng.pdf" download><i class="fas fa-file-download"></i> </b-button>
                            </b-button-group>
                        </b-card>
                    </b-col>
                    <b-col class="col-6 col-md-4 mb-5">
                        <b-card no-body img-src="/images/2011kor.png">
                            <b-button-group class="w-100">
                                <b-button variant="reports-up" href="/documents/2011_coway_sr_eng.pdf" target="_blank" class="f-90 pt-2 line-height-low font-noto fw-300">2011 Sustianability (ENG)</b-button>
                                <b-button variant="reports" href="/documents/2011_coway_sr_eng.pdf" download><i class="fas fa-file-download"></i> </b-button>
                            </b-button-group>
                        </b-card>
                    </b-col>
                    <b-col class="col-6 col-md-4 mb-5">
                        <b-card no-body img-src="/images/2010kor.png">
                            <b-button-group class="w-100">
                                <b-button variant="reports-up" href="/documents/2010_coway_sr_eng.pdf" target="_blank" class="f-90 pt-2 line-height-low font-noto fw-300">2010 Sustianability (ENG)</b-button>
                                <b-button variant="reports" href="/documents/2010_coway_sr_eng.pdf" download><i class="fas fa-file-download"></i> </b-button>
                            </b-button-group>
                        </b-card>
                    </b-col>
                </b-row>
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
// .main-report .card-img{
//     width: auto;
//     height:100%;
// }
</style>
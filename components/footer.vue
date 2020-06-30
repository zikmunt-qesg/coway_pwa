<template>
<div class="py-5 bg-gray6 position-relative" style="z-index:1">
    <b-container class="gray4">
        <b-row>
            <b-col class="col-4 col-lg-3">
                <b-img class="header-logo" src="/images/coway-ci.svg" alt="Logo" /> 
            </b-col>
            <b-col class="col-8 col-lg-9 mb-3">
                <div class="row d-flex flex-column flex-md-row f-95">
                    <div class="col-md-6 col-lg-3 mb-3 pb-1 pb-md-0 d-flex justify-content-end justify-content-md-start line-height-low"><nuxt-link to="/static_page/About-This-Report-and-Assurance" class="footer-a">About This Report</nuxt-link></div>
                    <div class="col-md-6 col-lg-3 mb-3 pb-1 pb-md-0 d-flex justify-content-end justify-content-md-start line-height-low"><nuxt-link to="/framework/gri" class="footer-a">GRI Disclosure</nuxt-link></div>
                    <div class="col-md-6 col-lg-3 mb-3 pb-1 pb-md-0 line-height-low text-right text-md-left"> Further Website<br>
                        <p class="ml-3 ml-md-0 mt-2 mb-0 f-80">
                            <a href="http://www.coway.co.kr/" target="_blank" class="footer-a"> <i class="fas fa-external-link-square-alt pr-2"></i>코웨이 홈페이지 </a>
                        </p>
                         <p class="ml-3 ml-md-0 mt-2 mb-0 f-80">
                            <a href="http://www.coway.com/" target="_blank" class="footer-a"> <i class="fas fa-external-link-square-alt pr-2"></i>코웨이 영문 홈페이지 </a>
                        </p>
                        <p class="ml-3 ml-md-0 mt-2 mb-0 f-80">
                            <a href="http://www.cowayir.co.kr/" target="_blank" class="footer-a"> <i class="fas fa-external-link-square-alt pr-2"></i>코웨이 IR 사이트 </a>
                        </p>
                    </div>
                    <div class="col-md-6 col-lg-3 text-right text-md-left"> Contacts<br>
                        <p class="ml-3 ml-md-0 mt-0 mt-md-2 mb-0 f-80"> 
                            <a href="mailto:sustainability@coway.co.kr" target="_blank" class="footer-a"><i class="fas fa-external-link-square-alt pr-2"></i>E-mail </a>
                        </p>
                        <!-- <p class="ml-3 ml-md-0 mt-0 mt-md-2 mb-0 f-80">
                            E-mail : <a href="mailto:sustainability@coway.co.kr" target="_blank" class="footer-a"> sustainability@coway.co.kr </a>
                        </p> -->
                        <p class="ml-3 ml-md-0 mb-0 f-80">Social Media
                            <a href="https://www.facebook.com/cowaystory" target="_blank" class="footer-a f-120 ml-2" style="padding-bottom:2px;"> <i class="fab fa-facebook-square"></i> </a>
                            <a href="https://www.youtube.com/user/Cowaystory" target="_blank" class="footer-a ml-1" style="font-size:1.254rem;"> <i class="fab fa-youtube-square" ></i></a>
                        </p>
                        <!-- <b-img src="/images/203_1.svg" style="width:20px;"></b-img> -->
                    </div>
                </div>
            </b-col>
        </b-row>
        <hr class="space-lined pb-3">
        <div class="text-center px-sm-5 px-md-0">
            <!-- <p class="mb-4 f-80"> 고객센터 1588-5200 (상담시간) 평일 오전 09:00 ~ 오후 06:00, 토요일 오전 09:00 ~ 오후 02:00, 국공휴일 오전 09:00 ~ 오후 04:00
            <br> (본사) 서울특별시 중구 서소문로 88 중앙일보빌딩 11층~17층 (사업소재지) 충남 공주시 유구읍 유구마곡사로 136-23
            <br> 대표이사 이해선 사업자등록번호 307-81-06054 통신판매번호 제 2005-21호
            </p> -->

            <p class="f-80"> COPYRIGHT COWAY CO., LTD. ALL RIGHTS RESERVED.
            </p>
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
    data(){
        return {
            title: '가치창출 스토리',
            activated: [],
            sub_titles: [
                { 
                    title: `비즈니스 모델`, 
                },
                { 
                    title: '비즈니스 밸류체인' ,
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
<style lang="scss">
a.footer-a {
    color: $gray4;
    transition: all 0.2s ease;
}
a.footer-a:hover {
    color: $gray2;
}

</style>

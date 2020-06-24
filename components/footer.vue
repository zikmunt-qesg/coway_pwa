<template>
<div class="py-5 bg-gray6 position-relative" style="z-index:1">
    <b-container class="gray4">
        <b-row>
            <b-col class="col-4 col-md-3">
                <b-img class="header-logo" src="/images/coway-ci.svg" alt="Logo" /> 
            </b-col>
            <b-col class="col-8 col-md-9 mb-3">
                <div class="row d-flex flex-column flex-md-row f-95">
                    <div class="col mb-2 mb-md-0 d-flex justify-content-end justify-content-md-start line-height-low"><nuxt-link to="/static_page/About-This-Report-and-Assurance" class="footer-a">About This Report</nuxt-link></div>
                    <div class="col mb-2 mb-md-0 d-flex justify-content-end justify-content-md-start line-height-low"> Terms & Conditions</div>
                    <div class="col mb-2 mb-md-0 d-flex justify-content-end justify-content-md-start line-height-low"> Further Website</div>
                    <div class="col d-flex d-md-block justify-content-end justify-content-md-start"> Contacts<br>
                        <p class="ml-3 ml-md-0 mt-0 mt-md-2 mb-0 f-80">E-mail</p>
                        <p class="ml-3 ml-md-0 mt-0 mt-md-2 mb-0 f-80">Social Media</p>
                    </div>
                </div>
            </b-col>
        </b-row>
        <hr class="space-lined pb-3">
        <div class="text-center px-sm-5 px-md-0">
            <p class="mb-4 f-80"> 고객센터 1588-5200 (상담시간) 평일 오전 09:00 ~ 오후 06:00, 토요일 오전 09:00 ~ 오후 02:00, 국공휴일 오전 09:00 ~ 오후 04:00
            <br> (본사) 서울특별시 중구 서소문로 88 중앙일보빌딩 11층~17층 (사업소재지) 충남 공주시 유구읍 유구마곡사로 136-23
            <br>대표이사 이해선 사업자등록번호 307-81-06054 통신판매번호 제 2005-21호
            </p>

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
}
a.footer-a:hover {
    color: $gray2;
}

</style>

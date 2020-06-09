<template>
<div class="position-relative page-top-bg min-vh-100">   
    <logger title="인권 리포트"></logger>
    <b-img src="@/assets/images/사각형17.png" fluid class="page-top-img"></b-img>

    <b-container class="">
        <b-row class="my-5 pt-md-5">
            <h1 class="mt-2 mt-lg-5 mb-3 text-center w-100 fw-400">인권 리포트</h1>
            <h7 class="mb-lg-5 text-center w-100 fw-400"> dummy text 환경을 건강하게 사람을 행복하게, 내일을 디자인하는 그린 글로벌 리더 </h7>
        </b-row>
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
            title: '깨끗한 물과 공기를 위한 환경경영',
            activated: [],
            sub_titles: [
                { 
                    title: '환경경영을 통한 깨끗함의 가치 실현', 
                    child: [
                        { title: '코웨이 환경경영 방침' }, 
                        { title: '환경경영 전략' }, 
                        { title: '환경경영 추진 체계' }, 
                    ]
                },
                { 
                    title: '가치사슬 전체의 환경역량 강화' 
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
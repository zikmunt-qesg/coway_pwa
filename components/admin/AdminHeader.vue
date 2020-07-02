<template>
<header>
    <div class="position-relative">
        <b-navbar class="d-flex justify-content-between px-3 bg-gray7">
            <b-navbar-brand>
                <nuxt-link to="/dashboard">
                    <b-img class="header-logo" src="@/assets/images/coway-ci.svg" alt="Logo" /><span class="f-90 gray3 fw-300">Sustainability Website 관리자 페이지</span>
                </nuxt-link>
            </b-navbar-brand>
            <nuxt-link v-if="is_IE!=true" to="/" class="px-2 mr-2">
                메인 페이지 바로가기
            </nuxt-link>
        </b-navbar>
    </div>
</header>
</template>
<script>
export default {
    computed:{
        is_IE(){
            if(process.browser){
                if ( (navigator.appName == 'Netscape' && navigator.userAgent.toLowerCase().indexOf('trident') != -1) || (navigator.userAgent.toLowerCase().indexOf("msie") != -1) )
                { return true }
                else
                { return false }
            }
            else return false
        }
    }
}
</script>

<style scoped>

</style>
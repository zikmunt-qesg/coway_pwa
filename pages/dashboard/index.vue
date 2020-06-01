<template>
<div class="w-100 h-100 d-flex align-items-center">
    <b-container>
        <b-row>
            <b-col class="col-0 col-md-4"></b-col>
            <b-col class="col-12 col-md-4 px-4 px-md-0">
                <div class="text-center fw-400 mb-4"> 관리자 페이지 접속을 위해  패스워드를 입력해주세요</div>
                <b-form-input class=""></b-form-input>
                <div>문의: info@qesg.co.kr / QESG(퀀티파이드이에스지)</div>
            </b-col>
            <b-col class="col-0 col-md-4"></b-col>
        </b-row>
    </b-container>         
</div>
</template>
<script>
export default {
    layout: 'AdminPage',
    data() {
        return {
            show_login: false,
        }
    },
    created(){
        this.show_login = true
    }
}
</script>
<style scoped>
/* .fullbody {
  width: 100%;
  height: 92vh;
  text-align: center;
  line-height: 200px;
} */
</style>
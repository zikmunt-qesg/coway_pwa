<template>
<div class="w-100 h-100 d-flex align-items-center">
    <b-container>
        <b-row>
            <b-col class="col-0 col-sm-2 col-lg-3"></b-col>
            <b-col class="col-12 col-sm-8 col-lg-6 px-4 px-md-0 text-center">
                <div class="fw-400 mb-4"> 관리자 페이지 접속을 위해  패스워드를 입력해주세요</div>
                
                <b-overlay :show="this.login_status=='login_try'" opacity="0.4">
                    <template v-slot:overlay>
                        <div class="d-flex align-items-center">
                            <b-spinner variant="secondary"></b-spinner>
                        </div>
                    </template>
                    <div class="d-flex justify-content-center"> 
                        <b-form-input v-model="password" type="password" placeholder="password" class="password-form" @keyup.enter="login"></b-form-input>
                        <b-button @click="login">로그인</b-button>
                    </div>
                </b-overlay>

                <div :class="[login_status=='login_fail'? 'red':'','mt-2 f-90']"> {{msg}} </div>
                <div v-if="login_status=='login_fail'" class="mt-4 f-90">문의: info@qesg.co.kr / QESG(퀀티파이드이에스지)</div>
            </b-col>
            <b-col class="col-0 col-sm-2 col-lg-3"></b-col>
        </b-row>
    </b-container>         
</div>
</template>
<script>
export default {
    layout: 'AdminPage',
    data() {
        return {
            login_status: '',
            password: '',
            msg:''
        }
    },
    methods:{
        login() {
            this.login_status = 'login_try'
            if (this.password === 'passcoway'){
                this.$store.commit('authSuccess')                  
                this.$router.push('/dashboard/analytics')         
            }
            else {
                this.login_status = 'login_fail'
                console.log('로그인에 실패하였습니다')    
                // this.$router.push('/dashboard')            
            }
        },
    },
    watch:{
        login_status(newVal) {
            if(process.client){
                if(newVal=='login_try'){
                    this.msg = '로그인 중입니다'
                }
                else if(newVal=='login_fail'){
                    this.msg = '로그인에 실패하였습니다. 비밀번호를 다시 확인하여 주십시오.'
                }
            }
        },
        password(newVal){
            if(process.client){
                if(newVal.length==0){
                    this.msg = ''
                    this.login_status = ''
                }
            }
        }
    }
    // created(){
    //     this.login_trying = true
    // }
}
</script>
<style lang="scss">
.password-form{
    width: 100%;
    max-width: 300px;
}
/* .fullbody {
  width: 100%;
  height: 92vh;
  text-align: center;
  line-height: 200px;
} */
</style>
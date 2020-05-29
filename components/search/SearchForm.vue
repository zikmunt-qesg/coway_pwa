<template>
    <div class="d-flex">
        <b-row class="w-100">
            <b-col class="col-4 d-flex align-items-center justify-content-around">
                <div :class="[selected_mode !='indicator'? 'is-active':'','p-2']">
                    <b-form-checkbox @change="selectMode('integrated')" v-model="selected_mode" value="integrated">통합검색</b-form-checkbox>
                </div>
                <b-form-checkbox @change="selectMode('indicator')" v-model="selected_mode" value="indicator">지표검색</b-form-checkbox>
                <b-dropdown split :disabled="selected_mode !='indicator'" :text="selected_framework">
                    <b-dropdown-item href="#" @click="selected_framework='GRI'">GRI</b-dropdown-item>
                    <b-dropdown-item href="#" @click="selected_framework='SASB'">SASB</b-dropdown-item>
                    <b-dropdown-item href="#" @click="selected_framework='DJSI'">DJSI Public</b-dropdown-item>
                </b-dropdown>
            </b-col>
            <b-col class="col-7 d-flex">
                <b-form-input v-model="search_query" type="text" :placeholder="form_placeholder" @keyup.enter="handleOK" claas="w-100"></b-form-input>
                <b-button @click="handleOK">검색</b-button>
            </b-col>
        </b-row>
        <!-- <div class="d-flex align-items-center">
            <div class="px-2">
                <b-form-checkbox
                @change="selectMode('integrated')"
                v-model="selected_mode"
                value="integrated"
                >통합검색</b-form-checkbox>
            </div>
            <div class="px-2">
                <b-form-checkbox
                @change="selectMode('indicator')"
                v-model="selected_mode"
                value="indicator"
                >지표검색</b-form-checkbox>
            </div>
            <div class="px-2">
                <b-dropdown split :disabled="selected_mode !='indicator'" :text="selected_framework">
                <b-dropdown-item href="#" @click="selected_framework='GRI'">GRI</b-dropdown-item>
                <b-dropdown-item href="#" @click="selected_framework='SASB'">SASB</b-dropdown-item>
                <b-dropdown-item href="#" @click="selected_framework='DJSI'">DJSI Public</b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
        <div class="px-2">
        <div class="d-flex justify-content-start">
            <b-form-input v-model="search_query" type="text" :placeholder="form_placeholder" @keyup.enter="handleOK"></b-form-input>
            <b-button @click="handleOK">검색</b-button>
        </div>
        </div> -->

        <!-- <b-button-group>
            <b-button @change="selectMode('integrated')" v-model="selected_mode" value="integrated"
            :class="[selected_mode=='integrated'? 'is-active':'']"
            >
                통합검색
            </b-button>
            <b-button @change="selectMode('indicator')" v-model="selected_mode" value="indicator">
                지표검색
            </b-button>
            <b-dropdown split :disabled="selected_mode !='indicator'" :text="selected_framework">
                <b-dropdown-item href="#" @click="selected_framework='GRI'">GRI</b-dropdown-item>
                <b-dropdown-item href="#" @click="selected_framework='SASB'">SASB</b-dropdown-item>
                <b-dropdown-item href="#" @click="selected_framework='DJSI'">DJSI Public</b-dropdown-item>
            </b-dropdown>
        </b-button-group> -->

    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      selected_framework: '',
      selected_mode: ['integrated'], // 'integrated' or 'indicator',
      form_placeholder: '검색할 내용을 입력해 주세요',
      search_query: ''
    }
  },
  props:{
    prop_framework: { type: String, default: 'GRI' },
    prop_mode: { type: String, default: 'integrated'}
  },
  methods: {
    ...mapActions('search', ['searchPages']),
    selectMode(target) {
      this.$nextTick(() => {
        if (this.selected_mode.length > 0) {
          this.selected_mode.splice(0, this.selected_mode.length)
        }
        this.selected_mode.push(target)
      })
    },
    handleOK() {
      if (this.selected_mode == 'integrated'){
        this.searchPages({ q: this.search_query })
        .then( () => {
          this.$router.push({ path: '/framework/search_result' })
        })
      }
      else{
        if (this.selected_framework == 'GRI') {
          this.$router.push({ path: '/framework/gri', hash: this.safeHash(`gri_${this.search_query}`)})
        }
        else if(this.selected_framework == 'SASB'){
          this.$router.push({ path: '/framework/sasb', hash: this.safeHash(`sasb_${this.search_query}`)})
        }
        else if(this.selected_framework == 'DJSI'){
          this.$router.push({ path: '/framework/djsi', hash: this.safeHash(`djsi_${this.search_query}`)})
        }
      }
    },
    safeHash(target){
      return target.replace(/\./g,'-').replace(/\s/g,'')
    }
  },
  mounted(){
    this.selected_framework = this.prop_framework
    this.selectMode(this.prop_mode)
  },
  watch: {
    selected_framework(new_value) {
      if (this.selected_mode =='indicator' && new_value == 'GRI') {
        this.form_placeholder =
          'GRI 지표코드(ex.203-1) 또는 지표명을 입력해 주세요'
      } else if (this.selected_mode =='indicator' && new_value == 'SASB') {
        this.form_placeholder =
          'SASB 지표코드(ex. SA-101) 또는 지표명을 입력해 주세요'
      } else if (this.selected_mode =='indicator' && new_value == 'DJSI') {
        this.form_placeholder =
          'DJSI 항목번호(ex. 1.2.1) 또는 질문명을 입력해 주세요'
      } else {
        this.form_placeholder = '검색할 내용을 입력해 주세요'
      }
    }
  }
}
</script>
<style scoped lang="scss">
.is-active{
    background-color: $blue5;
}
</style>
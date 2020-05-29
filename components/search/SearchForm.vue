<template>
    <div class="d-flex">
        <b-row class="w-100">
            <b-col class="col-12 col-md-4 d-flex align-items-center justify-content-md-around mb-3 mb-md-0">
                <div :class="[selected_mode !='indicator'? 'is-active':'','p-2 fw-400 selectable']">
                    <b-form-checkbox @change="selectMode('integrated')" v-model="selected_mode" value="integrated">통합검색</b-form-checkbox>
                </div>
                <div :class="[selected_mode =='indicator'? 'is-active':'','p-2 fw-400 selectable ml-3 ml-lg-0']">
                    <b-form-checkbox @change="selectMode('indicator')" v-model="selected_mode" value="indicator">지표검색</b-form-checkbox>
                </div>
            </b-col>
            <b-col class="col-12 col-md-8 d-flex">
                <b-input-group class="d-flex align-items-stretch">
                    <template v-slot:prepend>
                        <b-dropdown split :disabled="selected_mode !='indicator'" :text="selected_framework" variant="blue">
                            <b-dropdown-item href="#" @click="selected_framework='GRI'">GRI</b-dropdown-item>
                            <b-dropdown-item href="#" @click="selected_framework='SASB'">SASB</b-dropdown-item>
                            <b-dropdown-item href="#" @click="selected_framework='DJSI'">DJSI Public</b-dropdown-item>
                        </b-dropdown>
                    </template>              
                    <b-form-input v-model="search_query" type="text" :placeholder="form_placeholder" @keyup.enter="handleOK" claas="w-100"></b-form-input>
                    <b-input-group-append> <b-button @click="handleOK" variant="blue-border"><i class="fas fa-search"></i> </b-button> </b-input-group-append>
                </b-input-group>        
            </b-col>
        </b-row>

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
    border-width: 1px;
    border-style: solid;
    border-color: $blue5;
}
.selectable:hover{
    border-width: 0.5px;
    border-style: dashed;
    border-color: $blue5;
}
// .selectable > .custom-checkbox > .custom-control-label {
//     cursor: pointer!important;
// }

.form-control {
    height: auto
}

</style>
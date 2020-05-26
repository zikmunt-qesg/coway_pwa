<template>
  <div class="d-flex">
    <div class="d-flex">
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
        <b-form-group>
          <b-form-radio
            :disabled="selected_mode != 'indicator'"
            v-model="selected_framework"
            name="framework"
            value="GRI"
          >GRI</b-form-radio>
          <b-form-radio
            :disabled="selected_mode != 'indicator'"
            v-model="selected_framework"
            name="framework"
            value="SASB"
          >SASB</b-form-radio>
          <b-form-radio
            :disabled="selected_mode != 'indicator'"
            v-model="selected_framework"
            name="framework"
            value="DJSI Public"
          >DJSI Public</b-form-radio>
          <b-form-radio
            :disabled="selected_mode != 'indicator'"
            v-model="selected_framework"
            name="framework"
            value="KCGS"
          >기업지배구조원</b-form-radio>
        </b-form-group>
      </div>
    </div>
    <div class="px-2">
      <div class="d-flex justify-content-start">
        <b-form-input v-model="search_query" type="text" :placeholder="form_placeholder"></b-form-input>
        <b-button @click="handleOK">검색</b-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected_framework: '',
      selected_mode: ['integrated'], // 'integrated' or 'indicator',
      form_placeholder: '검색할 내용을 입력해 주세요',
      search_query: ''
    }
  },
  methods: {
    selectMode(target) {
      this.$nextTick(() => {
        if (this.selected_mode.length > 0) {
          this.selected_mode.splice(0, this.selected_mode.length)
        }
        this.selected_mode.push(target)

        if (target != 'indicator') {
          //선택한 검색 모드가 indicator가 아니면 세부 지표 모드 선택을 해제
          this.selected_framework = ''
        } else {
          this.selected_framework = 'GRI'
        }
      })
    },
    handleOK() {
      if (this.selected_framework == 'GRI') {
        this.$router.push({ path: '/framework/gri', hash: this.search_query })
      }
    }
  },
  watch: {
    selected_framework(new_value) {
      if (new_value == 'GRI') {
        this.form_placeholder =
          'GRI 지표코드(ex.203-1) 또는 지표명을 입력해 주세요'
      } else if (new_value == 'SASB') {
        this.form_placeholder =
          'SASB 지표코드(ex. SA-101) 또는 지표명을 입력해 주세요'
      } else if (new_value == 'DJSI Public') {
        this.form_placeholder =
          'DJSI 항목번호(ex. 1.2.1) 또는 질문명을 입력해 주세요'
      } else if (new_value == 'KCGS') {
        this.form_placeholder =
          '지배구조원 항목번호(1.1) 또는 항목명을 입력해 주세요'
      } else {
        this.form_placeholder = '검색할 내용을 입력해 주세요'
      }
    }
  }
}
</script>
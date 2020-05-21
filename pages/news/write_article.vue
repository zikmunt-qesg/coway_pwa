<template>
  <b-container>
    <div>
      Title
      <b-form-input></b-form-input>
    </div>
    <div>
      Date
      <b-form-input></b-form-input>
    </div>
    <div>
      Description
      <b-form-input></b-form-input>
    </div>
    <div>
      Picture
      <b-form-input></b-form-input>
    </div>
    <div>
      Contents
      <b-form-input></b-form-input>
    </div>
    <div>
      <b-button>저장</b-button>
      <b-button>취소</b-button>
    </div>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      id: null,
      title: '',
      description: '',
      date: '',
      contents: '',
      picture: ''
    }
  }
}
</script>
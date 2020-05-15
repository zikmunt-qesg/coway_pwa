<template>
  <b-container>
    <b-row class="p-2">
      <iframe
        class="bigcard"
        ref="iframe"
        src="https://datastudio.google.com/embed/reporting/1Odfo6_A59B-v03jnpi1V_ZgGzc7XV3Qz/page/duPQB"
        frameborder="0"
        style="border:0"
        scrolling="no"
      ></iframe>
    </b-row>
  </b-container>
</template>
<script>
export default {
  layout: 'AdminPage'
}
</script>
<style scoped>
.bigcard {
  width: 100%;
  height: 92vh;
  padding: 0 !important;
  border-radius: 0.3em;
  border-style: solid;
  border-width: 0.75px;
  overflow: hidden;
}
</style>
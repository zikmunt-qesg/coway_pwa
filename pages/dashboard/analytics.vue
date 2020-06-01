<template>
<b-container>
    <hr class="mb-3">
        <h3 class="mb-4 pb-2 border-bottom"> 페이지 뷰 분석 </h3>
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
    <hr class="mb-5">

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
<template>
<div class="position-relative w-100">
    <hr class="mb-3">
    <b-container>
        <h3 class="mb-4 pb-2 border-bottom"> 페이지 뷰 관리 </h3>
        <b-row>
            <b-col class="col-6">
                <div class="bg-gray4 py-5" style='height:300px;'> 차트 1(날짜별 페이지뷰) </div>
            </b-col>
            <b-col class="col-6">
                <div class="bg-gray4 py-5" style='height:300px;'> 차트 2(날짜별 방문자수) </div>
            </b-col>
        </b-row>
        <hr class="mb-4">
        <b-row>
            <b-col>
                <b-table-simple class="txt-table fw-400" responsive>
                    <b-thead>
                        <b-tr>
                            <b-td> 페이지 명 </b-td> <b-td> 페이지 뷰 </b-td> <b-td> 방문자 수 </b-td> 
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr v-for="item in page_views" :key="item.id">
                            <b-td> {{ item.title }} </b-td><b-td>{{ item.count }} </b-td> <b-td> 방문자 수 </b-td>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>     
            </b-col>
        </b-row>
        <!--<iframe class="bigcard" ref="iframe" src="https://datastudio.google.com/embed/reporting/1Odfo6_A59B-v03jnpi1V_ZgGzc7XV3Qz/page/duPQB"
        frameborder="0" style="border:0" scrolling="no"></iframe>-->
  </b-container>
</div>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'AdminPage',
  async asyncData({ store }){
    const path = store.state.backend_host + '/read_page_views'
    const { data } = await axios.get(path)

    return {
      page_views : data
      // url, title, count
    }
  },

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
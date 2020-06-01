<template>
<div class="position-relative w-100">
    <hr class="mb-3">
    <b-container>
        <h3 class="mb-4 pb-2 border-bottom"> 페이지 뷰 관리 </h3>
        <b-row>
            <b-col class="col-6">
                <line-chart :chartData="page_view_chart_data" :options="page_view_chart_option" class="page-view-chart"></line-chart>
            </b-col>
            <b-col class="col-6">
                <line-chart :chartData="visitors_chart_data" :options="visitors_chart_option" class="page-view-chart"></line-chart>
            </b-col>
        </b-row>
        <hr class="mb-4">
        <b-row>
            <b-col>
                <b-button-group class="mb-3">
                    <b-button :pressed="true"> 누적 </b-button>
                    <b-button> 월간 </b-button>
                </b-button-group>
                <b-table-simple class="txt-table fw-400" responsive>
                    <b-thead>
                        <b-tr class="fw-300 gray6">
                            <b-td> 페이지 제목 </b-td> <b-td> 페이지 뷰 </b-td> <b-td> 방문자 수 </b-td> 
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
        <hr class="mb-5">
        <!--<iframe class="bigcard" ref="iframe" src="https://datastudio.google.com/embed/reporting/1Odfo6_A59B-v03jnpi1V_ZgGzc7XV3Qz/page/duPQB"
        frameborder="0" style="border:0" scrolling="no"></iframe>-->
  </b-container>
</div>
</template>

<script>
import LineChart from '@/components/chart/LineChart'
import axios from 'axios'
import { mapState } from 'vuex'

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
    data() {
        return {
            is_chart_loaded: false,
            page_view_chart_data: {
                labels: ['2020-06-01', '2020-06-03', '2020-06-03'],
                datasets: [
                    {
                        label: 'Daily Page Views',
                        data: [10, 26, 50 ],
                        backgroundColor: 'rgba(47, 165, 220, 0.3)',
                        borderColor: 'rgba(47, 165, 220, 1)',
                        borderWidth: 1,    
                    },
                ]
            },
            page_view_chart_option: {
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    xAxes: [{
                        gridLines: {
                            // color:"rgba(0, 0, 0, 0)"
                        },
                    }],
                    yAxes: [{
                        gridLines: {
                            beginAtZero:true,
                            zeroLineWidth: 0
                        }                                          
                    }]
                }
            },
            // 방문자수 차트
            visitors_chart_data: {
                labels: ['2020-06-01', '2020-06-03', '2020-06-03'],
                datasets: [
                    {
                        label: 'Daily Visitors',
                        data: [5, 16, 11 ],
                        backgroundColor: 'rgba(47, 165, 220, 0.3)',
                        borderColor: 'rgba(47, 165, 220, 1)',
                        borderWidth: 1,    
                    },
                ]
            },
            visitors_chart_option: {
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    xAxes: [{
                        gridLines: {
                            // color:"rgba(0, 0, 0, 0)"
                        },
                    }],
                    yAxes: [{
                        gridLines: {
                            beginAtZero:true,
                            zeroLineWidth: 0
                        }                                          
                    }]
                }
            },
        }
    },
    computed:{
        ...mapState({
            is_authenticated: state => state.is_authenticated,
        }),
        // 1. 날짜 기준으로 daily total page view 산출


        // 2. 날짜 기준으로 daily total visitors 산출
    },
    methods:{
        updateChartData(){
            this.is_chart_loaded = false
            // if ()
        }

    },
    created(){
        if (this.is_authenticated != true){
            this.$router.push('/dashboard')
        }
        else {
            this.updateChartData()
            // console.log(this.page_views);
        }
    },
    components:{
        LineChart
    }

}
</script>
<style scoped>
/* .bigcard {
  width: 100%;
  height: 92vh;
  padding: 0 !important;
  border-radius: 0.3em;
  border-style: solid;
  border-width: 0.75px;
  overflow: hidden;
} */

.page-view-chart, .page-view-chart>canvas {
    height: 280px;
}
</style>
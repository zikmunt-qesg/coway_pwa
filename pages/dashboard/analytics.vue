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
                    <b-button :pressed="monthly != true" @click.stop="toggleMonthly(false)"> 누적 </b-button>
                    <b-button :pressed="monthly == true" @click.stop="toggleMonthly(true)"> 월간 </b-button>
                </b-button-group>
                <b-table-simple class="txt-table fw-400" responsive>
                    <b-thead>
                        <b-tr class="fw-300 gray6">
                            <b-td> 페이지 제목 </b-td> <b-td> 페이지 뷰 </b-td> <b-td> 방문자 수 </b-td> 
                        </b-tr>
                    </b-thead>
                    <b-tbody v-if="monthly != true">
                        <b-tr v-for="item in page_views" :key="item.id">
                            <b-td> {{ item.title }} </b-td><b-td>{{ item.page_views_count }} </b-td> <b-td> {{ item.visits_count }} </b-td>
                        </b-tr>
                    </b-tbody>
                    <b-tbody v-else>
                        <b-tr v-for="item in page_views_monthly" :key="item.id">
                            <b-td> {{ item.title }} </b-td><b-td>{{ item.page_views_count }} </b-td> <b-td> {{ item.visits_count }} </b-td>
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
        let path = store.state.backend_host + '/read_page_views'
        let page_views_result = await axios.get(path)

        let date = new Date()
        let start_date = new Date(date.setMonth(date.getMonth()-1)).toISOString().split('T')[0]
        let end_date = new Date().toISOString().split('T')[0]
        let page_views_monthly_result = await axios.get(path, { params: { 
            start_date: start_date, 
            end_date: end_date}})
        
        path = store.state.backend_host + '/read_page_views_history'
        let page_views_history_result = await axios.get(path, { params: {
            start_date: start_date,
            end_date: end_date
        } })

        return {
            page_views : page_views_result.data, //title, page_views_count, visits_count
            page_views_monthly: page_views_monthly_result.data, //title, page_views_count, visit_count
            page_views_history: page_views_history_result.data
        }
    },
    data() {
        return {
            monthly: false, 
            is_chart_loaded: false,
            page_view_chart_data: {
                labels: [],
                datasets: [
                    {
                        label: 'Daily Page Views',
                        data: [],
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
                labels: [],
                datasets: [
                    {
                        label: 'Daily Visitors',
                        data: [],
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
    },
    methods:{
        updateChartData(){
            this.is_chart_loaded = false
            this.page_view_chart_data.labels = this.page_views_history.map(x => x.date)
            this.page_view_chart_data.datasets[0].data = this.page_views_history.map(x => x.page_views_count)
            this.visitors_chart_data.labels = this.page_views_history.map(x=> x.date)
            this.visitors_chart_data.datasets[0].data = this.page_views_history.map(x => x.visits_count)
            this.is_chart_loaded = true
        },
        toggleMonthly(target){
            this.monthly = target
        }

    },
    created(){
        if (this.is_authenticated != true){
            this.$router.push('/dashboard')
        }
        else {
            this.updateChartData()
            console.log(this.page_views_monthly);
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
<template>
<div class="position-relative w-100">
    <hr class="mb-3">
    <b-container>
        <h3 class="mb-4 pb-2 border-bottom"> 페이지 뷰 관리 </h3>
        <b-row>
            <b-card class="d-flex">
                <b-form-input class="d-inline-block" v-model="start_date" type="date"></b-form-input>부터 <b-form-input class="d-inline-block" v-model="end_date" type="date"></b-form-input> 까지 
                    <b-dropdown class="d-inline-block" split :text="selected_unit" variant="blue">
                            <b-dropdown-item href="#" @click="selectUnit('daily')">일(day) 단위</b-dropdown-item>
                            <b-dropdown-item href="#" @click="selectUnit('monthly')">월(month) 단위</b-dropdown-item>
                    </b-dropdown>
                    <b-button @click="changePeriods()">적용(새로고침)</b-button>
            </b-card>
        </b-row>
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
                <b-table-simple class="txt-table fw-400" responsive>
                    <b-thead>
                        <b-tr class="fw-300 gray6">
                            <b-td> 페이지 제목 </b-td> <b-td> 페이지 뷰 </b-td> <b-td> 방문자 수 </b-td> 
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr v-for="item in page_views" :key="item.id">
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
        
        let date = new Date()
        let start_date = new Date(date.setMonth(date.getMonth()-1)).toISOString().split('T')[0]
        let end_date = new Date().toISOString().split('T')[0]
        let page_views_result = await axios.get(path, { params: { 
            start_date: start_date, 
            end_date: end_date}})
        
        path = store.state.backend_host + '/read_page_views_history'
        let page_views_history_result = await axios.get(path, { params: {
            start_date: start_date,
            end_date: end_date
        } })

        return {
            page_views: page_views_result.data, //title, page_views_count, visit_count
            page_views_history: page_views_history_result.data,
            start_date: start_date,
            end_date: end_date
        }
    },
    data() {
        return {
            is_chart_loaded: false,
            selected_unit: '일(day) 단위',  //월(month) 단위
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
                        ticks: {
                            beginAtZero:true,
                            // zeroLineWidth: 0
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
                        ticks: {
                            beginAtZero:true,
                            // zeroLineWidth: 0
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
        page_views_history_monthly(){
            let page_views_monthly_dates = this.page_views_history.map( x => x.date.substring(0, 7) )
            page_views_monthly_dates = [... new Set(page_views_monthly_dates)]
            let page_views_monthly = page_views_monthly_dates.map( x => { 
                return { date: x, page_views_count: 0, visits_count: 0 }
            })

            for(let i=0; i<this.page_views_history.length; i++){
                let idx = page_views_monthly.findIndex(x => x.date == this.page_views_history[i].date.substring(0,7) )
                if(idx > -1){
                    page_views_monthly[idx].page_views_count += this.page_views_history[i].page_views_count
                    page_views_monthly[idx].visits_count += this.page_views_history[i].visits_count
                }
            }
            return page_views_monthly
        },
    },
    methods:{
        updateChartData(unit){
            if(unit=='일(day) 단위'){
                this.is_chart_loaded = false
                this.page_view_chart_data.labels = this.page_views_history.map(x => x.date)
                this.page_view_chart_data.datasets[0].data = this.page_views_history.map(x => x.page_views_count)
                this.page_view_chart_data.datasets[0].label = 'Daily Page Views'
                this.visitors_chart_data.labels = this.page_views_history.map(x=> x.date)
                this.visitors_chart_data.datasets[0].data = this.page_views_history.map(x => x.visits_count)
                this.visitors_chart_data.datasets[0].label = 'Daily Visitors'
                this.page_view_chart_data = { ...this.page_view_chart_data }
                this.visitors_chart_data = { ...this.visitors_chart_data }
                this.is_chart_loaded = true
            }
            else{
                this.is_chart_loaded = false
                this.page_view_chart_data.labels = this.page_views_history_monthly.map(x => x.date)
                this.page_view_chart_data.datasets[0].data = this.page_views_history_monthly.map(x => x.page_views_count)
                this.page_view_chart_data.datasets[0].label = 'Monthly Page Views'
                this.visitors_chart_data.labels = this.page_views_history_monthly.map(x=> x.date)
                this.visitors_chart_data.datasets[0].data = this.page_views_history_monthly.map(x => x.visits_count)
                this.visitors_chart_data.datasets[0].label = 'Monthly Visitors'
                this.page_view_chart_data = { ...this.page_view_chart_data }
                this.visitors_chart_data = { ...this.visitors_chart_data }
                this.is_chart_loaded = true 
            }

        },
        selectUnit(daily){
            if(daily == 'daily'){
                this.selected_unit='일(day) 단위'
                this.updateChartData(this.selected_unit)
            }
            else{
                this.selected_unit='월(month) 단위'
                this.updateChartData(this.selected_unit)
            }
        },
        async changePeriods(){
            let path = this.$store.state.backend_host + '/read_page_views'

            let page_views_result = await axios.get(path, { params: { 
                start_date: this.start_date, 
                end_date: this.end_date }})
            
            path = this.$store.state.backend_host + '/read_page_views_history'
            let page_views_history_result = await axios.get(path, { params: {
                start_date: this.start_date,
                end_date: this.end_date
            } })

            this.page_views = page_views_result.data
            this.page_views_history = page_views_history_result.data
            this.updateChartData(this.selected_unit)
        }

    },
    created(){
        if (this.is_authenticated != true){
            this.$router.push('/dashboard')
        }
        else {
            this.updateChartData(this.selected_unit)
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
<script>
import { Line, mixins } from 'vue-chartjs'

export default {
    extends: Line,
    mixins: [mixins.reactiveProp],
    data() {
        return {

        }
    },
    props: {
        chartData: { 
            type: Object, 
            default: () => ({}) 
        }, 
        options: { 
            type: Object, 
            default: () => ({}) 
        }
    },
    mounted() {
        this.renderChart(this.chartData, this.options)
    }

}
</script>
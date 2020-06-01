<script>
import { Bar, mixins } from 'vue-chartjs'

export default {
    extends: Bar,
    mixins: [mixins.reactiveProp],
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
    data() {
        return {

        }
    },
    mounted() {
        this.renderChart(this.chartData, this.options)      
    }
}
</script>
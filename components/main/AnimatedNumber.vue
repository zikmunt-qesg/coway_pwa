<template>
<span v-view="viewHandler"><script src="https://cdn.jsdelivr.net/npm/tween.js@16.3.4"></script>{{comma? numberWithCommas(tweeningValue):tweeningValue}}</span> 
</template>

<script>
export default {
    data(){
        return {   
            tweeningValue: 0,
            first_view: true
        }
    },
    props: {
        value: { type: Number, required: true },
        comma: { type: Boolean, default: true },
        fixed: { type: Number, default: 1 }
    },
    methods:{
        tween(startValue, endValue) {
            var vm = this
            function animate () {
                if (TWEEN.update()) {
                requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween({ tweeningValue: startValue })
                .to({ tweeningValue: endValue }, 400)
                .onUpdate(function () {    
                    vm.tweeningValue = this.tweeningValue.toFixed(vm.fixed)
                }).start()

            animate()
        },
        viewHandler(event){
            if(event.type == 'progress' && this.first_view==true ){
                if( (event.percentCenter > 0.7 && event.percentCenter < 0.9) || (event.percentCenter > 0.1 && event.percentCenter < 0.3) ) { 
                    this.tween(0, this.value)
                    this.first_view=false
                }
            }
            if(event.type == 'exit'){
                this.first_view = true
            }
        },
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    },
    created(){
        this.tweeningValue = this.value
    }
}
</script>
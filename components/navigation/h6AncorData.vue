<template>
    <h6 :id="safeHash(title)" v-view="viewHandler"> {{ title }} <i class="far fa-chart-bar ml-2"></i></h6>
</template>
<script>
import * as ih from '@/components/util'

export default {
    props:{
        title: { type: String },
        activated: { tyep: Array }
    },
    methods: {
        safeHash(target){
            return ih.safeHash(target)
        },
        viewHandler(event){
            if(event.type == 'enter' ){
                this.activated.splice(0, 1, event.target.element.id)
            }
            //else if(event.type == 'exit'){
            //    let idx = this.activated.findIndex(item => item == event.target.element.id)
            //    if (idx > -1) {
            //        this.activated.splice(idx, 1)
            //    }
            //}
        },
    }
}
</script>
<template>
    <h6 :id="safeHash(hash)" v-view="viewHandler"><slot></slot></h6>
</template>
<script>
import * as ih from '@/components/util'

export default {
    props:{
        hash: { type: String },
        activated: { tyep: Array }
    },
    methods: {
        safeHash(target){
            return ih.safeHash(target)
        },
        viewHandler(event){
            if(event.type == 'progress' ){
                if(event.percentCenter > 0.1 && event.percentCenter < 0.3 ) { this.activated.splice(0, 1, event.target.element.id) }
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
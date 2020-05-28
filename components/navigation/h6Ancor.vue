<template>
    <h6 :id="safeHash(title)" v-view="viewHandler" class="dma-title mb-3">{{ title }}</h6>
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
                this.activated.push(event.target.element.id)
            }
            else if(event.type == 'exit'){
                let idx = this.activated.findIndex(item => item == event.target.element.id)
                if (idx > -1) {
                    this.activated.splice(idx, 1)
                }
            }
            console.log(this.activated)
        },
    }
}
</script>
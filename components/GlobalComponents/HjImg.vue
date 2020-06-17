<template>
<b-img :src="src" v-view="viewHandler" :fluid="fluid" :class="entered==true? 'lazy-loader' : ''" ></b-img>

</template>
<script>
export default {
    data(){
        return { 
            entered: false,
            picture_key: Math.random()
        }
    },
    props: ['src', 'fluid'],
    methods:{
        viewHandler(event){
            //console.log(event)
            //if(event.type == 'progress' ){
            //    if(event.percentCenter==0.5) { this.activated.splice(0, 1, event.target.element.id) }
            // }
            //else if(event.type == 'exit'){
            //    let idx = this.activated.findIndex(item => item == event.target.element.id)
            //    if (idx > -1) {
            //        this.activated.splice(idx, 1)
            //    }
            //}
            if(event.type=='enter'){
                this.entered = true
                this.picture_key += 1
            }
            else if(event.type=='exit'){
                this.entered = false
            }

        }
    }

}
</script>

<template>
<div class="sticky-top side-nav bg-white" style="z-index:5; top:6rem;">
    <h7 class="mb-5">
        <nuxt-link :to="'#' + safeHash(main_title)" :class="[active_color!='' ? new_hover:'', 'side-nav-link-2']" :style="isActive(safeHash(main_title)) ? new_class : '' "> {{ main_title }}</nuxt-link>
    </h7>
    <div v-for="item in sub_titles" :key="item.id" class="mb-3 f-95 fw-400">
        <nuxt-link :to="'#' + safeHash(item.title)" :class="[active_color!='' ? new_hover:'', 'side-nav-link-3']" :style="isActive(safeHash(item.title)) ? new_class : '' ">{{item.title}}</nuxt-link>
        <div v-for="child_item in item.child" :key="child_item.id" class="mt-2 ml-3 f-90 fw-400">
            <nuxt-link :to="'#' + safeHash(child_item.title)" :class="[active_color!='' ? new_hover:'', 'side-nav-link-3']" :style="isActive(safeHash(child_item.title)) ? new_class : '' " >{{child_item.title}}</nuxt-link>
        </div>
    </div>
</div>
</template>
<script>
import * as ih from '@/components/util'

export default {
    data(){
        return{
            
        }
    },
    props:{
        activated: { type: Array },
        main_title: { type: String },
        sub_titles: { type: Array },
        active_color: { type: String }
    },
    computed:{
        new_class() {
            let temp_color = { color: this.active_color }
            return temp_color
        },
        new_hover() {
            let temp_color = { 'nav-link-color:hover': this.new_class }
            return temp_color
        },
        // setActiveColor(){
        //     let active_colors = [
        //         '#2d9155',  //green6
        //         '#419af9'   //blue5
        //     ]
        //     if (this.active_color != ''){
        //         let idx = active_colors.findIndex((item) => item = this.active_color)
        //         return { color: active_colors[idx]}
        //     }            
        // }
    },
    methods:{
        isActive(target){
            let idx = this.activated.findIndex(item => item == target)
            if(idx > -1) {
                return true
            }
            else {
                return false
            }
        },
        safeHash(target){
            return ih.safeHash(target)
        },
    },
    created(){
      console.log(this.new_class);
        
    }
    
}
</script>
<style scoped lang="scss">

.side-nav-link-2{
    color: $gray7;
    margin-top: 0.5em;
    transition: all 0.1s ease;
}
.side-nav-link-2:hover {
    margin-top: 0em;
    text-decoration: underline;
    text-underline-position: under;
}

.side-nav-link-3{
    color: $gray6;
    transition: all 0.1s ease;
}
.side-nav-link-3:hover {
    text-decoration: underline;
    text-underline-position: under;
}

.nav-link-color:hover{
    color: #000;
}
// .active {
//     color: #009bcf;
// }


</style>

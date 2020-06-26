<template>
<div class="sticky-top side-nav bg-white font-noto" style="z-index:5; top:5.5rem;">
    <h7 :class="[this.$store.state.is_ENG==false? 'line-height-low':'line-height-min', 'mb-3']">
        <nuxt-link :to="toLink('T')" :class="[active_color!='' ? new_hover:'', 'side-nav-link-2']" :style="isActive('T') ? new_class : '' "> {{ main_title }}</nuxt-link>
    </h7>
    <div v-for="item in sub_titles" :key="item.id" class="mb-3 f-90 fw-400 line-height-low">
        <nuxt-link :to="toLink(item.hash)" :class="[active_color!='' ? new_hover:'', 'side-nav-link-3']" :style="isActive(safeHash(item.hash)) ? new_class : '' ">{{item.title}}</nuxt-link>
        <div v-for="child_item in item.child" :key="child_item.id" class="mt-2 f-85 fw-400 line-height-low">
           <ul class="custom-ul"><li class="mb-0 mr-0">
               <nuxt-link :to="toLink(child_item.hash)" :class="[active_color!='' ? new_hover:'', 'side-nav-link-3']" :style="isActive(safeHash(child_item.hash)) ? new_class : '' " > 
                   <span class="text-underline-hover">{{child_item.title}}</span>
                </nuxt-link>
            </li></ul>
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
        is_ENG(){
            return this.$store.state.is_ENG
        }
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
        toLink(target){
            let hash = '#' + this.safeHash(target)
            let eng = this.is_ENG? '?l=ENG' : ''
            return eng + hash
        }
    },
    created(){
        
    }
    
}
</script>
<style scoped lang="scss">

.side-nav-link-2{
    color: $gray7;
    margin-top: 0.2em;
    transition: all 0.5s ease;
}
.side-nav-link-3{
    color: $gray6;
    transition: all 0.5s ease;
}
.text-underline-hover{
    transition: all 0.5s ease;
}

.side-nav-link-2:hover {
    margin-top: 0em;
    text-decoration: underline;
    text-underline-position: under;
}
.side-nav-link-3:hover {
    color: $gray7;
    text-decoration: underline;
    text-underline-position: under;
}
.text-underline-hover:hover{
    text-decoration: underline;
    text-underline-position: under;
}


</style>

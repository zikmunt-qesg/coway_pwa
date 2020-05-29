<template>
<div>
    <h6 class="mb-5">{{ main_title }}</h6>
    <div v-for="item in sub_titles" :key="item.id">
        <nuxt-link :to="'#' + safeHash(item.title)" class="side-nav-link f-95" :class="{ active: isActive(safeHash(item.title)) }">{{item.title}}</nuxt-link>
        <div v-for="child_item in item.child" :key="child_item.id">
            <nuxt-link :to="'#' + safeHash(child_item.title)" class="side-nav-link f-90" :class="{ active: isActive(safeHash(child_item.title)) }">&nbsp;&nbsp;{{child_item.title}}</nuxt-link>
        </div>
    </div>
</div>
</template>
<script>
import * as ih from '@/components/util'

export default {
    props:{
        activated: { type: Array },
        main_title: { type: String },
        sub_titles: { type: Array }
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
        }
    }
    
}
</script>
<style scoped>
.active {
    color: blue;
}
</style>

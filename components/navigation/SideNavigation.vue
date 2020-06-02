<template>
<div class="sticky-top" style="z-index:5; top:8rem;">
    <h6 class="mb-5 gray6">{{ main_title }}</h6>
    <div v-for="item in sub_titles" :key="item.id" class="mb-4 f-95 fw-400">
        <nuxt-link :to="'#' + safeHash(item.title)" class="side-nav-link-2" :class="{ active: isActive(safeHash(item.title)) }">{{item.title}}</nuxt-link>
        <div v-for="child_item in item.child" :key="child_item.id" class="mt-2 ml-3 f-90 fw-400">
            <nuxt-link :to="'#' + safeHash(child_item.title)" class="side-nav-link-3" :class="{ active: isActive(safeHash(child_item.title)) }">{{child_item.title}}</nuxt-link>
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
<style scoped lang="scss">

.side-nav-link-2{
    color: var(--gray6);
    margin-top: 0.5em;
    transition: all 0.1s ease;
}
.side-nav-link-2:hover {
    margin-top: 0em;
    color: var(--blue4);
    text-decoration: underline;
    text-underline-position: under;
}

.side-nav-link-3{
    color: var(--gray5);
    transition: all 0.1s ease;
}
.side-nav-link-3:hover {
    color: var(--blue4);
    text-decoration: underline;
    text-underline-position: under;
}

.active {
    color: $blue4;
}


</style>

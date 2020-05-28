<template>
<div class="g-nav-vh overflow-auto shadow">
    <b-container>
        <b-row class="py-4">
            <b-col class="col-2 f-85 gray5"> Coway Sustainability 2020</b-col>
            <b-col class="col-2" v-for="item in menu" :key="item.id">
                <div class="f-85 mb-3" @click.stop="toggleSiteMap">
                    <nuxt-link :to="`${item.link}`">{{ item.title }}</nuxt-link>
                </div>
                <div v-for="level2_item in item.child" :key="level2_item.id" class="mb-4 g-nav">
                    <div class="mb-2" @click.stop="toggleSiteMap"><nuxt-link :to="`${level2_item.link}`" class="f-85 g-nav-lv2"> {{ level2_item.title }}</nuxt-link></div>
                    <div v-for="level3_item in level2_item.child" :key="level3_item.id" class="mb-1" @click.stop="toggleSiteMap">
                        <nuxt-link :to="`${level3_item.link}`" class="f-80 g-nav-lv3"> {{ level3_item.title }}</nuxt-link>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
    <a href="#" @click.stop="toggleSiteMap" class="close-btn py-0 f-230"></a>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState('menu', {
        menu: state => state.menu
        }),
        pages() {
        return this.$store.state.pages
        }
    },
    methods: {
        toggleSiteMap(){
            this.$emit('show_site_map', false)
        }
    }
}
</script>
<style scoped>
.g-nav-vh{
    height: 80vh;
}
.g-nav{
    line-height: 1.3;
}

.g-nav-lv2{
    color: var(--gray8);
}
.g-nav-lv2:hover{
    font-weight: 600;
}

.g-nav-lv3{
    color: var(--gray6);
}
.g-nav-lv3:hover{
    font-weight: 600;
}

.close-btn{
    position: absolute;
    top: 0.3rem;
    right: 2.5rem;
}
.close-btn::before{
    content: "×";
}
</style>
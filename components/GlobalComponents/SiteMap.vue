<template>
<div class="position-relative">
    <b-container>
        <b-row class="py-4 font-noto d-flex flex-column flex-sm-row">
            <!-- <b-col class="col-0 col-lg-1"></b-col> -->
            <!-- <b-col class="col-4 col-lg-1 f-80 gray5 cursor hover-underline px-xl-4 mb-3 mb-sm-0" @click.stop="$router.push('/')" style="height:50px;"> </b-col> -->
            <b-col class="" v-for="item in menu" :key="item.id">
                <div class="f-85 mb-3" @click.stop="toggleSiteMap">
                    <nuxt-link :to="`${item.link}`">{{ item.title }}</nuxt-link>
                </div>
                <div v-for="level2_item in item.child" :key="level2_item.id" class="mb-4 g-nav">
                    <div class="pb-1 mb-2" @click.stop="toggleSiteMap"><nuxt-link :to="`${level2_item.link}`" class="f-85 g-nav-lv2 letter-narrow"> {{ level2_item.title }}</nuxt-link></div>
                    <div v-for="level3_item in level2_item.child" :key="level3_item.id" class="mb-1" @click.stop="toggleSiteMap">
                        <nuxt-link :to="`${level3_item.link}`" class="f-80 g-nav-lv3 letter-narrow"> {{ level3_item.title }}</nuxt-link>
                    </div>
                </div>
            </b-col>
            <div style="margin-top:-1.75rem; margin-right: 1.25rem;"><a href="#" @click.stop="toggleSiteMap" class="close-btn f-280 fw-300"></a></div>
            <!-- <b-col class="col-3 col-lg-1" style="margin-top:-1.6rem;"><a href="#" @click.stop="toggleSiteMap" class="close-btn f-280 fw-300"></a></b-col> -->
        </b-row>
    </b-container>
    <!-- <a href="#" @click.stop="toggleSiteMap" class="close-btn py-0 f-280 fw-300 position-absolute" style="top:0; right:1em"></a> -->

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
<style scoped lang="scss">
/* .g-nav-vh{
    height: 85vh;
} */
.g-nav{
    line-height: 1.1;
}

.g-nav-lv2{
    color: $gray7;
}
.g-nav-lv2:hover{
    font-weight: 500;
}

.g-nav-lv3{
    color: $gray5;
}
.g-nav-lv3:hover{
    font-weight: 500;
}


</style>
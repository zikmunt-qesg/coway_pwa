<template>
<div class="position-relative d-none d-lg-block" style="background-color: rgba(225,225,225,0.9)">
    <b-container>
        <b-row class="pt-3 pb-3 font-noto d-flex flex-column flex-md-row">
            <!-- <b-col class="col-0 col-lg-1"></b-col> -->
            <!-- <b-col class="col-4 col-lg-1 f-80 gray5 cursor hover-underline px-xl-4 mb-3 mb-sm-0" @click.stop="$router.push('/')" style="height:50px;"> </b-col> -->
            <b-col class="" v-for="item in menu" :key="item.id" style="min-width: 192px;">
                <div class="f-90 mb-3" @click.stop="toggleSiteMap">
                    <nuxt-link :to="`${item.link}`"><span class="gray8">{{ item.title }}</span></nuxt-link>
                </div>
                <div v-for="level2_item in item.child" :key="level2_item.id" class="mb-3 g-nav">
                    <div style="margin-bottom:0.45rem;" @click.stop="toggleSiteMap"><nuxt-link :to="`${level2_item.link}`" class="f-85 g-nav-lv2 letter-narrow"> {{ level2_item.title }}</nuxt-link></div>
                    <div v-for="level3_item in level2_item.child" :key="level3_item.id" style="margin-bottom:0.3rem;" @click.stop="toggleSiteMap">
                        <nuxt-link :to="{ path: level3_item.link, query: { l: is_ENG? 'ENG' : 'KOR' } }" class="f-80 g-nav-lv3 letter-narrow"> {{ level3_item.title }}</nuxt-link>
                    </div>
                </div>
            </b-col>
            <!-- <div style="margin-top:-1.75rem; margin-right: 1.25rem;"><a href="#" @click.stop="toggleSiteMap" class="close-btn f-280 fw-300"></a></div> -->
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
        ...mapState({
            is_ENG: state => state.is_ENG
        })
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
    color: black; 
    text-decoration: underline;
    text-underline-position: under;
    //font-weight: 500;
}

.g-nav-lv3{
    color: $gray5;
}
.g-nav-lv3:hover{
    color: $gray63;
    text-decoration: underline;
    text-underline-position: under;
    //font-weight: 500;
}


</style>
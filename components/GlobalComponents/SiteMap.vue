<template>
<div class="position-relative d-none d-lg-block" style="background-color: rgba(245,245,245,0.95); max-height: 90vh; overflow-y:auto;">
    <b-container v-if="this.$store.state.is_ENG==false">
        <b-row class="pt-3 pb-3 font-noto d-flex flex-column flex-md-row">
            <b-col class="" v-for="item in menu" :key="item.id" style="min-width: 192px;">
                <div class="f-90 mb-3" @click.stop="toggleSiteMap">
                    <nuxt-link :to="{ path: item.link }"><span class="gray8">{{ item.title }}</span></nuxt-link>
                </div>
                <div v-for="level2_item in item.child" :key="level2_item.id" class="mb-3 g-nav">
                    <div style="margin-bottom:0.45rem;" @click.stop="toggleSiteMap"><nuxt-link :to="{ path: level2_item.link }" class="f-85 g-nav-lv2 letter-narrow"> {{ level2_item.title }}</nuxt-link></div>
                    <div v-for="level3_item in level2_item.child" :key="level3_item.id" style="margin-bottom:0.3rem;" @click.stop="toggleSiteMap">
                        <nuxt-link :to="{ path: level3_item.link }" class="f-80 g-nav-lv3 letter-narrow"> {{ level3_item.title }}</nuxt-link>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>

    <b-container v-else>
        <b-row class="pt-3 pb-3 font-noto d-flex flex-column flex-md-row">
            <b-col class="" v-for="item in menu" :key="item.id" style="min-width: 192px;">
                <div class="f-90 mb-3" @click.stop="toggleSiteMap">
                    <nuxt-link :to="{ path: item.link, query: {l: 'ENG'} }"><span class="gray8">{{ item.title_en }}</span></nuxt-link>
                </div>
                <div v-for="level2_item in item.child" :key="level2_item.id" class="mb-3 g-nav">
                    <div style="margin-bottom:0.45rem;" @click.stop="toggleSiteMap"><nuxt-link :to="{ path: level2_item.link, query: { l: 'ENG'} }" class="f-85 g-nav-lv2 letter-narrow"> {{ level2_item.title_en }}</nuxt-link></div>
                    <div v-for="level3_item in level2_item.child" :key="level3_item.id" style="margin-bottom:0.3rem;" @click.stop="toggleSiteMap">
                        <nuxt-link :to="{ path: level3_item.link, query: { l: 'ENG'} } " class="f-80 g-nav-lv3 letter-narrow" style="line-height:1!important;"> {{ level3_item.title_en }}</nuxt-link>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>

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
        }),
        lang_query(){
            if (this.is_ENG==true) return { l: 'ENG'}
            else return {}
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
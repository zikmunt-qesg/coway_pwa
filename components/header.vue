<template>
  <header class="sticky-top">
    <div class="position-relative">
        <b-navbar class="px-5 py-0 d-flex justify-content-center bg-white" toggleable="lg" variant="light" style="z-index:10">
            <b-navbar-brand class="my-3">
                <nuxt-link to="/">
                    <b-img class="header-logo" src="@/assets/images/coway-ci.svg" alt="Logo" /> 
                    <span class="f-90 align-self-center"> Sustainability 2020</span>
                </nuxt-link>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-4 h-100">
                    <b-nav-item v-for="item in menu" :key="item.id" @mouseover="showSubMenu(item)" 
                    :class="[item.child[0]==sub_menu_item[0] && show_sub_menu==true ? 'nav-active':'','mx-2 px-auto f-95 global-nav-lv1']">
                        {{ item.title }}
                        <!-- <nuxt-link :to="`${item.link}`" class="px-0 f-85"></nuxt-link> -->
                    </b-nav-item>                    
                </b-navbar-nav>
            </b-collapse>
            <b-nav-item class="ml-4 pt-1 f-90" style="list-style: none"> ENG </b-nav-item>
            <b-nav-item class="ml-2" style="list-style: none"><i class="fas fa-search"></i></b-nav-item>
            <b-nav-item class="d-none d-lg-block ml-2" @click="toggleSiteMap"><i class="fas fa-map-signs"></i></b-nav-item>
        </b-navbar>

        <div @mouseleave="show_sub_menu=false" id="global-nav" :class="[show_sub_menu==true? 'lv2-show':'lv2-hide','d-none d-lg-block w-100 bg-gray6 position-absolute']">
            <b-row no-gutters class="py-4 w-100 d-flex justify-contents-center">
                <b-col class="col-0 col-lg-1"></b-col>
                <b-col class="col-12 col-md-5 col-lg-4 px-3 px-md-5 px-lg-3 f-90 gray3 fw-300">{{ menu_text }}</b-col>
                <b-col class="col-12 col-md-7 col-lg-6 pr-3 pr-md-5 pr-lg-3 d-flex justify-content-end flex-wrap">
                    <div @click="show_sub_menu=false" v-for="level2_item in sub_menu_item" :key="level2_item.id" class="position-relative global-nav-temp">
                        <div class="global-nav-2">
                            <nuxt-link :to="`${level2_item.link}`" @click="show_sub_menu=false" class="global-nav-lv2"> {{ level2_item.title }}
                            </nuxt-link>
                        </div>
                    </div>
                </b-col>
                <b-col class="col-0 col-lg-1"></b-col>
            </b-row>
        </div>
        <b-modal hide-header hide-footer v-model="show_site_map" id="sitemap-modal" class="position-absolute w-100 bg-gray">
            <site-map @show_site_map="toggleSiteMap"></site-map>
        </b-modal>

    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SiteMap from '@/components/GlobalComponents/SiteMap'

export default {
    data() {
        return {
            show_sub_menu: false,
            sub_menu_item: [],
            menu_text: '코웨이의 제품 및 브랜드는 궁극적으로 환경을 건강하게, 사람을 행복하게 만들기 위한 가치를 창출하는 데 목표를 두고 있습니다. 특히, 자재 및 부품 공급부터 제품 판매에 이르기까지 전 공급망에서 지속가능경영 관점으로 경제/환경/사회적 가치를 투입해 행복한 고객, 건강한 환경을 구현하며 사회적 가치를 창출하고 있습니다.',
            show_site_map: false
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
        showSubMenu(menu_item) {
            if (menu_item.child != undefined) {
                this.show_sub_menu = true
                this.sub_menu_item = menu_item.child
                console.log(menu_item.child[0]);
                console.log(this.sub_menu_item[0]);
            }
        },
        toggleSiteMap(){
            this.show_site_map = !this.show_site_map
        }
    },
    components:{
        SiteMap
    }
}
</script>

<style scoped lang="scss">

.navbar-collapse {
    flex-grow: 0;
}
#global-site-map {
    margin-top: -100%;
}
#global-site-map.sitemap-show {
    z-index: 100;
    margin-top: 0;
    transition: all 1s ease-in; 
}

#global-nav {
    overflow: hidden;
}
#global-nav.lv2-show{
    margin-top: 0;
    z-index: 9;
    transition: all 1s ease-out;
}
#global-nav.lv2-hide{
    margin-top: -100%;
    z-index: 9;
    transition: all 1s ease-in;    
}

.global-nav-lv1 > a{
    font-weight: 400;
    color: $gray6;
    letter-spacing: 0.196px;
}
.global-nav-lv1 > a:hover,
.nav-active > .nav-link {
    font-weight: 500;
    color: $gray7;
    text-decoration: none;
    letter-spacing: 0;
}

.global-nav-temp{
    // background-color: $blue4;
    width: 14.4em;
    height: 4.5em;
    margin-right: 0.1em;
}

.global-nav-2{
    width: 12em;
    height: 100%;
    text-align: left;
    margin-right: 2.5em;
    margin-bottom: 1.5em;
    border-top: 0.75px solid $gray3;
    transition: margin-top 0.3s ease;
}
.global-nav-2:hover{
    border-top: 0.75px solid white;
    margin-top: -0.7em;
}
.global-nav-lv2 {
    color: $gray3;
    height: 100%;
}
.global-nav-lv2:hover {
    color: white;
    text-decoration: none;
}

.global-nav-lv3 {
    color: $gray4;
}
.global-nav-lv3:hover {
    color: $gray3;
    text-decoration: none;
}

</style>
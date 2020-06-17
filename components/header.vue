<template>
  <header class="sticky-top" @mouseleave="show_sub_menu=false">
    <div class="position-relative">
        <b-navbar class="px-5 py-0 d-lg-flex justify-content-lg-center bg-white position-relative" toggleable="lg" variant="light" style="z-index:10">
            <b-navbar-brand class="my-3">
                <nuxt-link to="/">
                    <b-img class="header-logo" src="/images/coway-ci.svg" alt="Logo" /> 
                    <span class="f-90 align-self-center d-none d-md-inline"> Sustainability 2020</span>
                </nuxt-link>
            </b-navbar-brand>   

            <div class="d-lg-flex flex-lg-row-reverse justify-content-start jump-width" >
                <div class="d-flex justify-content-end align-items-center jump-up">                
                    <b-nav-item class="mr-1 mr-sm-2 pl-lg-2 pt-1 pb-1 f-90" style="list-style: none"> ENG </b-nav-item>
                    <b-nav-item class="mr-1 mr-sm-2 pl-lg-1" style="list-style: none" @click="toggleSearchForm"><i class="fas fa-search"></i></b-nav-item>
                    <b-nav-item class="d-none d-lg-block pl-lg-1" @click.stop="toggleSiteMap"><i class="fas fa-map-signs"></i></b-nav-item>

                    <b-navbar-toggle target="nav-collapse" class="ml-1 ml-sm-2"></b-navbar-toggle>
                </div>
                <b-collapse id="nav-collapse" is-nav style="max-height:60vh" class="overflow-auto">
                    <b-navbar-nav class="ml-lg-3 align-self-center" v-for="item in menu" :key="item.id" @mouseover="showSubMenu(item)">
                        <div :class="[item.child[0]==sub_menu_item[0] && show_sub_menu==true ? 'nav-active':'','mx-lg-2 py-2 f-90 global-nav-lv1']"  >
                        <span @click.stop="$router.push(item.link)" class="d-none d-lg-block">{{ item.title }}</span> <span @click.stop="routerGo(item.link)" class="d-block d-lg-none">{{ item.title }}</span></div>
                            <div v-for="level2_item in item.child" :key="level2_item.id" class="d-block d-lg-none global-nav-lv2 py-1" >
                               <span @click.stop="routerGo(level2_item.link)"> {{ level2_item.title }}</span>
                            </div> 
                            <!-- <div class="d-block d-lg-none f-60">&nbsp;</div>     -->
                    </b-navbar-nav>
                </b-collapse>
                </div>           
        </b-navbar>

        <div id="global-nav" :class="[show_sub_menu==true? 'lv2-show':'lv2-hide','d-none d-lg-block w-100 bg-gray6 position-absolute']">
            <b-container>
            <b-row no-gutters class="py-4 w-100 d-flex justify-contents-center">
                <b-col class="col-12 col-md-4 col-lg-4 pl-0 pr-md-3 pr-lg-3 f-90 gray3 fw-300">{{ menu_text }}</b-col>
                <b-col class="col-12 col-md-8 col-lg-8 pl-2 pl-md-2 pl-lg-3 d-flex justify-content-end flex-wrap">
                    <div @click="show_sub_menu=false" v-for="level2_item in sub_menu_item" :key="level2_item.id" class="position-relative global-nav-temp">
                        <nuxt-link :to="`${level2_item.link}`" @click="show_sub_menu=false">
                            <div class="global-nav-2 lv2-text">
                                {{ level2_item.title }}
                            </div>
                        </nuxt-link>
                    </div>
                </b-col>
            </b-row>
            </b-container>
        </div>
        <b-modal hide-header modal-fade v-model="show_site_map" id="sitemap-modal" class="">            
                <site-map @show_site_map="toggleSiteMap"></site-map>            
        </b-modal>
        <b-modal hide-header hide-footer v-model="show_finder" id="finder-modal" class="">
            <div class="py-5 px-5">
                <search-form @hide-finder="toggleSearchForm"></search-form>
            </div>
        </b-modal>

    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SiteMap from '@/components/GlobalComponents/SiteMap'
import SearchForm from '@/components/search/SearchForm'

export default {
    data() {
        return {
            open_sub_nav: false,
            show_sub_menu: false,
            sub_menu_item: [],
            menu_text: '코웨이의 제품 및 브랜드는 궁극적으로 환경을 건강하게, 사람을 행복하게 만들기 위한 가치를 창출하는 데 목표를 두고 있습니다.',
            show_site_map: false,
            show_finder: false
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
            }
        },
        toggleSiteMap(){
            this.show_site_map = !this.show_site_map
        },
        toggleSearchForm(target)
        {
            if(!target){
                this.show_finder = false
            }
            else{
                this.show_finder = !this.show_finder
            }
        },
        routerGo(target){
            this.$root.$emit('bv::toggle::collapse', 'nav-collapse')
            this.$router.push(target)
        }
    },
    components:{
        SiteMap,
        SearchForm
    },
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
    transition: all 0.5s ease-in; 
}

#global-nav {
    overflow: hidden;
}
#global-nav.lv2-show{
    margin-top: 0;
    z-index: 9;
    transition: all 0.3s ease-in-out;
}
#global-nav.lv2-hide{
    margin-top: -100%;
    z-index: 9;
    transition: all 0.5s ease-in;    
}

.global-nav-lv1{
    font-weight: 400;
    color: $gray6;
    letter-spacing: 0.196px;
    line-height: 1.4;
    cursor:pointer;
}
.global-nav-lv1:hover,
.global-nav-lv2:hover,
.nav-active{
    font-weight: 500;
    color: $gray7;
    text-decoration: none;
    letter-spacing: 0;    
}
.global-nav-lv2{
    font-weight: 400;
    color: $gray5;
    letter-spacing: 0.196px;
    line-height: 1.4;
    font-size: 0.9rem;
    cursor:pointer;
}

.global-nav-temp{
    // background-color: $blue4;
    width: 10.7em;
    height: 4.5em;
    margin-left: 1.3em;
}

.global-nav-2{
    // width: 10m;
    height: 100%;
    text-align: left;
    // margin-right: 2.2em;
    // margin-bottom: 1.5em;
    border-top: 0.75px solid $gray3;
    transition: margin-top 0.3s ease;
}
.lv2-text {
    color: $gray3;
    height: 100%;
    font-weight: 300;
    line-height: 1.5;
}
.global-nav-2:hover {
    border-top: 0.75px solid white;
    margin-top: -0.7em;
}
.global-nav-2:hover > .lv2-text{
    color: white;
    text-decoration: none;
    font-weight: 400;
}


.global-nav-lv3 {
    color: $gray4;
}
.global-nav-lv3:hover {
    color: $gray3;
    text-decoration: none;
}

@media (max-width: 992px) {
    .jump-width{
        width: 100%;
    }
    .jump-up {
        position: absolute;
        top: 1rem;
        right: 3rem;
    }
    .jump-up li a{
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
    .jump-up button{
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
}



</style>
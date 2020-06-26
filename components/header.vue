<template>
  <header class="sticky-top" @mouseleave="show_sub_menu=false">
    <div class="position-relative">
        <b-navbar class="px-3 px-sm-5 py-0 d-lg-flex justify-content-lg-center bg-white position-relative" :class="sm_opend==true ? 'shadow-sm-lg-none':''" toggleable="lg" variant="light" style="z-index:10">
            <b-navbar-brand class="my-3">
                <nuxt-link to="/">
                    <b-img class="header-logo" src="/images/coway-ci.svg" alt="Logo" /><span class="f-80 font-noto align-self-center d-none d-md-inline color-for-nav">Sustainability 2020</span>
                </nuxt-link>
            </b-navbar-brand>   

            <div class="d-lg-flex flex-lg-row-reverse justify-content-end justify-content-lg-start jump-width" >
                <div class="d-flex justify-content-end align-items-center jump-up">                
                    <b-nav-item class="pl-lg-3 pt-1 pb-1 px-0 handle-px1" style="list-style: none"><b-button-group class="d-flex align-items-center">
                        <b-button @click.stop="toggleLang()" :disabled="is_ENG!=true" :class="[is_ENG==true? 'active' : 'not-active','px-1 f-80']" size="sm" variant="white">KOR</b-button><span class="f-85">|</span>
                        <b-button @click.stop="toggleLang()" :disabled="is_ENG==true" :class="[is_ENG!=true? 'active' : 'not-active','px-1 f-80']" size="sm" variant="white">ENG</b-button>
                    </b-button-group></b-nav-item>
                    <b-nav-item class="pl-lg-1 px-0 color-for-nav handle-px2" style="list-style: none" @click="toggleSearchForm"><i class="fas fa-search"></i></b-nav-item>
                    <b-nav-item class="d-none d-lg-block color-for-nav" @click.stop="toggleSiteMap"><i class="fas fa-map-signs"></i></b-nav-item>

                    <b-navbar-toggle target="nav-collapse" class="ml-1 ml-sm-2" @click="sm_opend = !sm_opend"></b-navbar-toggle>
                </div>
                <b-collapse id="nav-collapse" is-nav style="max-height:60vh" class="overflow-auto" :class="sm_opend==true ? 'pb-if-show':''">
                    <b-navbar-nav class="ml-lg-3 align-self-center" v-for="item in menu" :key="item.id" @mouseover="showSubMenu(item)">
                        <div :class="[item.child[0]==sub_menu_item[0] && show_sub_menu==true ? 'nav-active':'','mx-lg-0 py-2 f-85 global-nav-lv1']"  >
                            <span @click.stop="showSubMenu(item)" class="d-none d-lg-inline-block f-85">{{ item.title }}</span> <span @click.stop="routerGo(item.link)" class="d-block d-lg-none">{{ item.title }}</span>
                        </div>
                            <ul v-for="level2_item in item.child" :key="level2_item.id" class="d-block d-lg-none global-nav-lv2 custom-ul" >
                               <li @click.stop="routerGo(level2_item.link)"> {{ level2_item.title }}</li>
                            </ul> 
                            <!-- <div class="d-block d-lg-none f-60">&nbsp;</div>     -->
                    </b-navbar-nav>
                </b-collapse>
            </div>           
        </b-navbar>

        <div id="global-nav" :class="[show_sub_menu==true? 'lv2-show':'lv2-hide','d-none d-lg-block w-100 bg-gray6 position-absolute shadow-sm']">
            <b-container>
            <b-row no-gutters class="py-4 w-100 d-flex justify-contents-center" >
                <b-col class="col-12 col-md-4 col-lg-4 pl-0 pr-md-3 pr-lg-3 f-90 gray3 fw-300" :class="menu_changed==true? 'lazy-loader':'menu-fadeout'" :key="menu_change_key">{{ menu_text }}</b-col>
                <b-col class="col-12 col-md-8 col-lg-8 pl-2 pl-md-2 pl-lg-3 d-flex justify-content-end flex-wrap">
                    <div @click="show_sub_menu=false" v-for="level2_item in sub_menu_item" :key="level2_item.id" class="position-relative global-nav-temp">
                        <nuxt-link :to="`${level2_item.link}`" @click="show_sub_menu=false">
                            <div class="global-nav-2 lv2-text f-95">
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
            <div class="py-3 px-4 px-xl-5">
                <search-form @hide-finder="toggleSearchForm"></search-form>
                <!-- <a href="#" @click.stop="toggleSearchForm" class="close-btn py-0 f-280 fw-300"></a> -->
            </div>
        </b-modal>

    </div>
  </header>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
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
            show_finder: false,
            menu_changed: false,
            menu_change_key: 1,
            sm_opend : false
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
        ...mapMutations(['setLang']),
        showSubMenu(menu_item) {
            if (menu_item.child != undefined) {
                this.show_sub_menu = true
                this.sub_menu_item = menu_item.child
                this.menu_text = menu_item.text
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
            this.$router.push(this.linkLib(target))
        },
        toggleLang(){
            if(this.is_ENG==true){
                this.setLang('KOR')
                let q = { ...this.$route.query }
                q.l = 'KOR'
                //this.$router.push({ path: this.$route.path, query: q, hash:this.$route.hash })
            }
            else{
                this.setLang('ENG')
                let q = { ...this.$route.query }
                q.l = 'ENG'
                //this.$router.push({ path: this.$route.path, query: q, hash:this.$route.hash })                
            }
        },
        linkLib(address){
            //1) ?가 있는지 체크
            let path = ''
            let query = ''
            let hash = ''
            let tok = address.split('?')
            if(tok.length > 1){ // 쿼리있음
                path = tok[0]
                let tok2 = tok[1].split('#')
                if(tok2.length > 1){ // 쿼리, 해쉬가 또 있음
                    query = tok2[0]
                    hash = '#'+tok2[1]
                }
                else{
                    query = tok[1]
                    hash = ''
                }
            }
            else{ //쿼리없음
                let tok2 = address.split('#')
                if(tok2.length > 1){ // 해쉬 있음
                    path = tok2[0]
                    query = ''
                    hash = '#'+tok2[1]
                }
                else{ //해쉬도 없음
                    path = address
                }
            }
    
            if(this.$store.state.is_ENG==true){
                if(query=='') {
                    query = '?l=ENG'
                }
                else{
                    query += '&l=ENG'
                }
            }
            return path + query + hash
        }
    },
    components:{
        SiteMap,
        SearchForm
    },
    watch:{
        sub_menu_item(newVal, oldVal){
            if (newVal != oldVal){
                this.menu_changed = true
                this.menu_change_key+=1
            }
            else this.menu_changed = false
        },
        '$route'(to, from) {
            if (to != from) {
                this.sm_opend = false
            }
        }
    },
    // beforeRouteUpdate(to, from) {
    // }
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
    transition: all 0.5s ease-out;
}
#global-nav.lv2-hide{
    margin-top: -100%;
    z-index: 9;
    transition: all 0.5s ease-in;    
}

.global-nav-lv1{
    font-weight: 400;
    color: $gray5;
    //letter-spacing: 0.196px;
    line-height: 1.4;
    cursor:pointer;
    transition: color 0.3s ease-in;
}

.color-for-nav,
.color-for-nav > a{
    transition: color 0.3s ease-in;
}
.handle-px1 a {
    padding-left: 0.2rem;
    padding-right: 0.2rem;
}
.handle-px2 a {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
}

.global-nav-lv1:hover,
.global-nav-lv2:hover,
.color-for-nav:hover,
.color-for-nav > a:hover,
.nav-active{
    color: black!important;
}
.global-nav-lv2{
    color: $gray5;
    // letter-spacing: 0.196px;
    line-height: 1.4;
    font-size: 0.9rem;
    cursor:pointer;
    transition: color 0.3s ease-in;
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
    padding-top: 0.2rem;
    // margin-right: 2.2em;
    // margin-bottom: 1.5em;
    border-top: 0.75px solid $gray3;
    transition: margin-top 0.4s ease-out;
}
.lv2-text {
    color: $gray3;
    height: 100%;
    font-weight: 300;
    line-height: 1.5;
}
.global-nav-2:hover {
    border-top: 0.75px solid white;
    margin-top: -0.3em;
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
        top: 0.75rem;
        right: 3rem;
    }
    .jump-up li a{
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
    .jump-up button{
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        border:0;
    }
    .global-nav-lv1{
        font-weight: 500;
    }
    .pb-if-show{
        padding-bottom: 1.5rem;
    }
}
@media (max-width: 540px) {
    .jump-up {
        position: absolute;
        top: 1rem;
        right: 1.5rem;
    }
}


.shadow-sm-lg-none{
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)
}
@media (min-width: 992px) {
    .shadow-sm-lg-none{
        box-shadow: 0 0 0 0 rgba(0,0,0,0);
    }
}

.navbar-toggler {
    border-radius: 0.25rem;
}
.navbar-toggler:hover, .navbar-toggler:focus {
    background-color: rgba(0,0,0,0);
}
button:focus{
    outline: 0px;
}
.btn-group >.active{
    color: #9e9e9e!important;
}
.btn-group >.active:hover{
    transition: color 0.3s ease-in;
    color: black!important;
}
.btn-group >.not-active{
    color: black!important;
    opacity: 1!important;
}

</style>
<style lang="scss">
.navbar-light .navbar-toggler-icon {
    background-image: url('/images/200.svg')!important;
}
.navbar-toggler-icon{
    width:1.2em;
    height:1.2em;
}
</style>
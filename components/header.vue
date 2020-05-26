<template>
  <header class="sticky-top">
    <div class="position-relative">
        <b-navbar class="px-5 d-flex justify-content-center" toggleable="lg" type="light" variant="light">
            <b-navbar-brand>
                <nuxt-link to="/">
                    <b-img class="header-logo" src="@/assets/images/coway-ci.svg" alt="Logo" /> 
                    <span class="f-90 align-self-center"> Sustainability 2020</span>
                </nuxt-link>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-3">
                    <b-nav-item v-for="item in menu" :key="item.id" @mouseover="showSubMenu(item)" right>
                        <nuxt-link :to="`${item.link}`" class="global-nav-lv1 f-85">{{ item.title }}</nuxt-link>
                    </b-nav-item>
                    <b-nav-item>
                        <div class="f-80">KOR | ENG</div>
                        <div class="f-80">KOR | ENG</div>
                    </b-nav-item>
                    <!--<b-nav-item v-for="(page, index) in pages" :key="index" right>
                            <nuxt-link :to="`/page/${page.slug}`">{{ page.title }}</nuxt-link>
                    </b-nav-item>-->                    
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <div v-if="show_sub_menu==true" @mouseleave="show_sub_menu=false" class="d-none d-lg-block w-100 global-nav ">
            <b-row no-gutters class="py-4 w-100 d-flex justify-contents-center">
                <b-col class="col-0 col-lg-1"></b-col>
                <b-col class="col-12 col-md-5 col-lg-4 px-3 px-md-5 px-lg-3 f-90 gray3 fw-300">{{ menu_text }}</b-col>
                <b-col class="col-12 col-md-7 col-lg-6 pr-3 pr-md-5 pr-lg-3 d-flex justify-content-end flex-wrap">
                    <div @click="show_sub_menu=false" v-for="level2_item in sub_menu_item" :key="level2_item.id" class="global-nav-level2">
                        <nuxt-link :to="`${level2_item.link}`" @click="show_sub_menu=false" class="global-nav-lv2">
                            {{ level2_item.title }}
                        </nuxt-link>
                    </div>
                </b-col>
                <b-col class="col-0 col-lg-1"></b-col>
            </b-row>
            <!-- <b-nav align="center" class="mx-5">
                <div class="f-90 gray3 fw-300">{{ menu_text }}</div>
                <b-nav-item v-for="level2_item in sub_menu_item" :key="level2_item.id">
                    <div @click="show_sub_menu=false">
                        <nuxt-link :to="`${level2_item.link}`" @click="show_sub_menu=false" class="global-nav-level2">
                            {{ level2_item.title }}
                        </nuxt-link>
                    </div>
                    <div v-for="level3_item in level2_item.child" :key="level3_item.id" @click="show_sub_menu=false">
                        <nuxt-link :to="`${level3_item.link}`" class="f-85 global-nav-level3">
                            {{ level3_item.title }}
                        </nuxt-link>
                    </div>
                </b-nav-item>
            </b-nav> -->
        </div>

    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      show_sub_menu: false,
      sub_menu_item: [],
      menu_text: '코웨이의 제품 및 브랜드는 궁극적으로 환경을 건강하게, 사람을 행복하게 만들기 위한 가치를 창출하는 데 목표를 두고 있습니다. 특히, 자재 및 부품 공급부터 제품 판매에 이르기까지 전 공급망에서 지속가능경영 관점으로 경제/환경/사회적 가치를 투입해 행복한 고객, 건강한 환경을 구현하며 사회적 가치를 창출하고 있습니다.'
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
    }
  }
}
</script>

<style>
.navbar-collapse {
    flex-grow: 0;
}
.global-nav {
    background-color: var(--gray6);
    position: absolute;
    z-index: 999;
}
.global-nav-lv1 {
    color: var(--gray6);
    padding: 0 0.75em;
}
.global-nav-lv1:hover {
    font-weight: 600;
    color: var(--gray8);
    text-decoration: none;
}

.global-nav-level2{
    width: 10em;
    text-align: left;
    margin-right: 2.5em;
    margin-bottom: 1.5em;
    border-top: 0.75px solid var(--gray3);
}
.global-nav-level2:hover{
    border-top: 0.75px solid var(--gray2);
}
.global-nav-lv2 {
    color: var(--gray3);
}
.global-nav-lv2:hover {
    color: var(--gray2);
    text-decoration: none;
}

/* .global-nav-level3 {
    color: var(--gray4);
}
.global-nav-level3:hover {
    color: var(--gray3);
    text-decoration: none;
} */

</style>
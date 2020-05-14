<template>
  <header>
    <div style="position:relative">
      <b-navbar class="px-4" toggleable="lg" type="light" variant="light">
        <b-navbar-brand>
          <nuxt-link to="/">
            <b-img class="header-logo" src="@/assets/images/coway-ci.svg" alt="Logo" />
          </nuxt-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-3">
            <!--<b-nav-item v-for="(page, index) in pages" :key="index" right>
              <nuxt-link :to="`/page/${page.slug}`">{{ page.title }}</nuxt-link>
            </b-nav-item>-->
            <b-nav-item v-for="item in menu" :key="item.id" @mouseover="showSubMenu(item)" right>
              <nuxt-link :to="`${item.link}`">{{ item.title }}</nuxt-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <div
        v-if="show_sub_menu==true"
        class="d-none d-lg-block"
        style="background-color: white; position:absolute; left: 40px; right: 40px; border:1px; border-style:solid; border-color:black; z-index: 9999"
        @mouseleave="show_sub_menu=false"
      >
        <b-nav>
          <b-nav-item v-for="level2_item in sub_menu_item" :key="level2_item.id">
            <div @click="show_sub_menu=false">
              <nuxt-link
                class="f-90"
                :to="`${level2_item.link}`"
                @click="show_sub_menu=false"
              >{{ level2_item.title }}</nuxt-link>
            </div>
            <div
              v-for="level3_item in level2_item.child"
              :key="level3_item.id"
              @click="show_sub_menu=false"
            >
              <nuxt-link class="f-80" :to="`${level3_item.link}`">{{ level3_item.title }}</nuxt-link>
            </div>
          </b-nav-item>
        </b-nav>
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
      sub_menu_item: []
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

<style scoped>
</style>
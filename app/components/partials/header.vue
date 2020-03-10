<template>
  <header>
    <b-navbar class="px-4" toggleable="lg" type="dark" variant="light">
      <b-navbar-brand>
      <nuxt-link to="/">
        <img :src="logo" alt="Logo" />
      </nuxt-link>
      </b-navbar-brand>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-for="(page, index) in pages" :key="index" right><nuxt-link :to="`/${page.slug}`">{{ page.title }}</nuxt-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    </b-navbar>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import settings from '@/content/settings/general.json';

@Component
export default class Header extends Vue {
  get pages(): Page[] {
    return this.$store.state.pages;
  }

  logo = settings.logo;
}
</script>

<style lang="scss">
.nav {
  ul li > a {
    &.nuxt-link-active {
      color: black;
      @apply font-bold;
    }
  }
}
</style>

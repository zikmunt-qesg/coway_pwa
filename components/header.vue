<template>
  <header>
    <b-navbar class="px-4" toggleable="lg" type="light" variant="light">
      <b-navbar-brand>
        <nuxt-link to="/">
          <b-img class="header-logo" src="@/assets/images/coway-ci.svg" alt="Logo" />
        </nuxt-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-3">
          <b-nav-item v-for="(page, index) in pages" :key="index" right>
            <nuxt-link :to="`/page/${page.slug}`">{{ page.title }}</nuxt-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  computed: {
    pages() {
      return this.$store.state.pages
    }
  }
}
</script>

<style scoped>
</style>
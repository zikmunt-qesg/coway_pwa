<template>
  <header>
    <b-navbar class="px-4" toggleable="lg" type="dark" variant="light">
      <b-navbar-brand>
        <nuxt-link to="/">
          <b-img width="150" src="@/assets/images/coway-ci.svg" alt="Logo" />
        </nuxt-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
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
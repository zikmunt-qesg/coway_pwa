<template>
  <div>
    <site-header />

    <b-container class="stretch">
      <nuxt class="nuxt" />
    </b-container>

    <site-footer />
  </div>
</template>
<script>
import siteHeader from '@/components/header.vue'
import siteFooter from '@/components/footer.vue'

export default {
  components: {
    siteHeader,
    siteFooter
  },
  mounted() {
    if (process.browser) {
      this.$gtag('config', 'UA-XXXX-XXX', {
        page_title: this.$metaInfo.title,
        page_path: this.$route.fullPath,
      })
    }
  }
}
</script>
<style>
.stretch {
  min-height: 92vh;
}
</style>

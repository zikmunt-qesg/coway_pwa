<template>
  <div>
    <site-header />

      <nuxt class="nuxt" />

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
  }
}
</script>
<style>
.stretch {
  min-height: 92vh;
}
</style>

<template>
  <main :class="[$route.name]" class="main px-4 px-md-0">
    <site-header />
    
    <b-container>
      <nuxt class="nuxt" />
    </b-container>

    <site-footer />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SiteHeader from '@/components/partials/header.vue';
import SiteFooter from '@/components/partials/footer.vue';

@Component({
  components: {
    SiteHeader,
    SiteFooter,
  },
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss">
.divider {
  position: relative;
  min-width: 100vw;
  margin-top: auto;
}

.nuxt {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>

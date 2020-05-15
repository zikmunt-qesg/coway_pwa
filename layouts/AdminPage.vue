<template>
  <div>
    <admin-header />

    <div class="d-flex">
      <admin-side class="stretch admin-side" />

      <b-container fluid class="stretch">
        <b-row class="admin_main">
          <nuxt class="nuxt" />
        </b-row>
      </b-container>
    </div>

    <site-footer />
  </div>
</template>
<script>
import AdminHeader from '@/components/admin/AdminHeader.vue'
import AdminSide from '@/components/admin/AdminSide.vue'
import SiteFooter from '@/components/footer.vue'

export default {
  components: {
    AdminHeader,
    AdminSide,
    SiteFooter
  }
}
</script>
<style>
.stretch {
  min-height: 92vh;
}

.admin-side {
  background-color: #333333;
  width: 250px;
}

.admin_main {
  background-color: #efefef;
}
</style>
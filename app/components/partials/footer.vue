<template>
  <footer class="footer mx-0">
    <b-container class="pb-3">
      <span>(C)코웨이</span>
    </b-container>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss">
.footer {
  background-color: black;
  color: white;
}
</style>

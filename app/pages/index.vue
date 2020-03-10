<template>

    <b-row class="my-5 items-center">
      <b-col class="justify-content-center col-12 col-lg-6">
        <div v-html="$md.render(welcomeText)"></div>
      </b-col>
      <b-col>
        <b-img fluid class="rounded shadow-xl" src="https://source.unsplash.com/random/720x400" />
      </b-col>
    </b-row>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import settings from '@/content/settings/general.json';

@Component({
  // Called to know which transition to apply
  transition() {
    return 'slide-left';
  },
})
export default class Home extends Vue {
  welcomeText = settings.welcomeText;

  get posts(): Post[] {
    return this.$store.state.posts;
  }
}
</script>

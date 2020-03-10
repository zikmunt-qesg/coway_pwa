<template>
<div> {{ posts }} </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  // Called to know which transition to apply
  transition(to, from) {
    if (!from) {
      return 'slide-left';
    }

    return 'slide-right';
  },
  created(){
    console.log(this.$store.state.posts)
  }
})
export default class Home extends Vue {
  get posts(): Post[] {
    return this.$store.state.posts;
  }
}
</script>

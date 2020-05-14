<template>
  <article class="my-5 pt-2">
    <h1>{{page.title}}</h1>
    <client-only>
      <div class="my-5" v-html="$md.render(page.content)"></div>
      {{ $md.render(page.content) }}
    </client-only>
    <!--<client-only>
      <component :is="dynamicComponent" />
      <div class="my-5" v-html="page.body"></div>
      <div>{{ page }}</div>
    </client-only>-->
  </article>
</template>
<script>
export default {
  transition(to, from) {
    if (!from) {
      return 'slide-left'
    }
    return 'slide-right'
  },
  async asyncData({ params, payload }) {
    if (payload) return { page: payload }
    else
      return {
        page: await require(`~/assets/content/page/${params.page}.json`)
      }
  },
  data() {
    return {
      //dynamicComponent: null
    }
  },
  created() {
    //this.dynamicComponent = this.page.content
  }
}
</script>
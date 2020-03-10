<template>
  <section :class="page.slug">
    <h1 class="text-center py-8 py-md-16">
      {{ page.title }}
    </h1>

    <div v-html="$md.render(page.content)" class="pt-4 pt-md-6 pb-md-24" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component({
  // Called to know which transition to apply
  transition(to, from) {
    if (!from) {
      return 'slide-left';
    }

    return 'slide-right';
  },

  async asyncData({ params, payload }): Promise<{ page: Page }> {
    if (payload) {
      return { page: payload };
    }

    try {
      const page = require(`@/content/pages/${params.page}.json`);

      return {
        page,
      };
    } catch (e) {
      throw new Error('Not found');
    }
  },

  head(): MetaInfo {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.seoDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.page.seoMetaImage,
        },
      ],
    };
  },
})
export default class PageTemplate extends Vue {
  page!: Page;
}
</script>

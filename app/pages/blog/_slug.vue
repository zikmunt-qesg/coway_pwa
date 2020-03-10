<template>
  <article :class="post.slug">
    <div class="py-8 text-center">
      <h1>
        {{ post.title }}
      </h1>
    </div>

    <div v-html="$md.render(post.content)" class="pt-4" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component({
  async asyncData({ params, payload }): Promise<{ post: Post }> {
    if (payload) {
      return { post: payload };
    }

    try {
      const post = require(`@/content/blog/${params.slug}.json`);

      return {
        post,
      };
    } catch (e) {
      throw new Error('Not found');
    }
  },

  head(): MetaInfo {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.seoDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.post.seoMetaImage,
        },
      ],
    };
  },
})
export default class BlogPost extends Vue {
  post!: Post;
}
</script>

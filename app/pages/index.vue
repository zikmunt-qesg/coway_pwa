<template>
  <section class="home">
    <b-row class="py-24 py-md-36 mx-auto d-flex items-center">
      <b-col class="d-flex justify-content-center">
        <div v-html="$md.render(welcomeText)" class="home__welcome markdown" />

        <div class="mb-12 xl:mb-0">
          <h4 v-if="isSignedUp">Thank you - we'll be in touch shortly.</h4>

          <b-form
            v-else
            @submit.prevent="handleSubmit"
            name="signups"
            netlify
            class="d-flex align-items-center py-2"
          >
            <b-form-input
              ref="emailInput"
              v-model="form.email"
              class="mr-3 py-1 px-2"
              type="text"
              name="email"
              placeholder="your@email.com"
              aria-label="Email address"
            />

            <b-button
              class="border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Sign Up
            </b-button>
          </b-form>
        </div>
      </b-col>
      <div class="flex flex-col w-full xl:w-2/5">
        <img class="rounded shadow-xl" src="https://source.unsplash.com/random/720x400" />
      </div>
    </b-row>
  </section>
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

  isSignedUp = false;

  form = {
    email: '',
  };

  encode(data): string {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  }

  validEmail(email): boolean {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  async handleSubmit(): Promise<void> {
    if (!this.validEmail(this.form.email)) {
      this.$refs.emailInput.focus();
      return;
    }

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({ 'form-name': 'signups', ...this.form }),
      });

      this.isSignedUp = true;
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

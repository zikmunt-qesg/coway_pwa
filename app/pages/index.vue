<template>

    <b-row class="my-5 items-center">
      <b-col class="justify-content-center col-12 col-lg-6">
        <div v-html="$md.render(welcomeText)"></div>

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
              class="py-1 px-2"
              type="submit"
              variant="dark"
            >
              Sign Up
            </b-button>
          </b-form>
        </div>
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

<template>
  <main class="home">
    <Auth :email-prop="email" @submit="submit" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Auth from '@/components/collections/Auth/Auth.vue'

export default Vue.extend({
  components: { Auth },
  layout: 'Main',
  data: () => ({
    email: '' as String,
  }),
  methods: {
    submit(email: String): void {
      this.email = email;
      this.$router.push(this.localePath({ name: 'result' }))
    },
  },
})
</script>

<style lang="scss" scoped>
.home {
  // height: calc(100vh - 56px);
}
</style>

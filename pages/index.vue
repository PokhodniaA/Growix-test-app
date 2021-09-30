<template>
  <main class="home">
    <Auth />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Auth from '@/components/collections/Auth/Auth.vue'

export default Vue.extend({
  components: { Auth },
  layout: 'Main',
})
</script>

<style lang="scss" scoped>
.home {
  // height: calc(100vh - 56px);
}
</style>

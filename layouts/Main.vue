<template>
  <div>
    <Header />
    <b-container fluid="lg">
      <Nuxt class="content"/>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/layouts/main/Header.vue'

export default Vue.extend({
  components: {
    Header,
  },
})
</script>

<style lang="scss" scoped>
.content{
  height: calc(100vh - 56px);
}
</style>
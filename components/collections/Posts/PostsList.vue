<template>
  <b-row>
    <b-col v-for="post in posts" :key="post.id" sm="12" md="4" class="mb-4">
      <Card>
        <template #title>{{ post.title | capitalize }}</template>
        <template #body>{{ post.body }}</template>
      </Card>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { Post } from '@/types/posts.type'
import Card from '@/components/ui/Card.vue'

export default Vue.extend({
  props: {
    posts: {
      type: Array as () => Post[],
      required: true,
    },
  },
  components: { Card },
  filters: {
  capitalize: function (value: String) {
    if (!value) return ''
    return value[0].toUpperCase() + value.slice(1, value.length)
  }
}
})
</script>
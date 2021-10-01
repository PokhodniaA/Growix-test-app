<template>
  <b-button variant="primary" @click="capitalizeTitles"
    >Capitalize Titles</b-button
  >
</template>

<script lang="ts">
import Vue from 'vue'
import { Post } from '@/types/posts.type'

export default Vue.extend({
  props: {
    posts: {
      type: Array as () => Post[],
      required: true,
    },
  },
  methods: {
    capitalizeTitles(): void {
      const changedData: Post[] = this.posts.map((post: Post): Post => {
        const title: String = post.title
          .split(' ')
          .map((word: String): String => {
            return word[0].toUpperCase() + word.slice(1, word.length)
          })
          .join(' ')
        return {
          ...post,
          title,
        }
      })

      this.$emit('change', changedData)
    },
  },
})
</script>
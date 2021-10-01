<template>
  <main>
    <PostsList v-if="!loading" :posts="posts" class="mt-3 my-mt-5" />

    <b-row class="justify-content-center">
      <b-pagination
        v-if="!loading"
        v-model="page"
        :total-rows="rows"
        :per-page="page_number"
        aria-controls="my-table"
        @input="changePage"
      ></b-pagination>
    </b-row>

    <b-row
      v-if="loading"
      class="justify-content-center align-items-center h-100"
    >
      <b-spinner label="Loading..." variant="primary"></b-spinner>
    </b-row>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { PageNumber, QueryParam, Post } from '@/types/posts.type'
import PostsList from '@/components/collections/Posts/PostsList.vue'

export default Vue.extend({
  components: { PostsList },
  layout: 'Main',
  data: () => ({
    page: 1 as Number,
    page_number: null as PageNumber,
    rows: 100 as Number,
    loading: true as Boolean,
    posts: [] as Post[],
  }),
  mounted(): void {
    const queryPage: QueryParam = this.$route.query.page
    if (queryPage && typeof queryPage === 'string') {
      this.page = parseInt(queryPage, 10)
    }

    this.getPosts()
  },
  methods: {
    async getPosts(): Promise<void> {
      this.loading = true

      const response = await this.$axios.get(`posts?_page=${this.page}`)
      this.page_number = Math.round(response.data.length)
      this.posts = response.data

      this.loading = false
    },
    changePage(): void {
      this.$router.push({ query: { page: this.page as any } })

      this.getPosts()
    },
  },
})
</script>
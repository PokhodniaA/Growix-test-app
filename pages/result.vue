<template>
  <main>
    <b-pagination
      v-if="!loading"
      v-model="page"
      :total-rows="rows"
      :per-page="page_number"
      aria-controls="my-table"
      @input="changePage"
    ></b-pagination>

    <b-spinner v-if="loading" label="Loading..." variant="primary"></b-spinner>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { PageNumber, QueryParam } from '@/types/posts.type'

export default Vue.extend({
  layout: 'Main',
  data: () => ({
    page: 1 as Number,
    page_number: null as PageNumber, // Change type
    rows: 100 as Number,
    loading: true as Boolean,
  }),
  mounted(): void {
    const queryPage: QueryParam = this.$route.query.page // Change type
    if (queryPage && typeof queryPage === 'string') {
      this.page = parseInt(queryPage, 10)
      console.log(this.page, 'MOINTRD')
    }

    this.getPosts()
  },
  methods: {
    async getPosts(): Promise<void> {
      this.loading = true
      const response = await this.$axios.get(`posts?_page=${this.page}`)
      this.page_number = Math.round(response.data.length)
      // Write data
      console.log(response)
      this.loading = false
    },
    changePage(): void {
      this.$router.push({ query: { page: this.page as any } })

      this.getPosts()
    },
  },
})
</script>
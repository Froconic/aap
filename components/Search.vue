<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () => queryContent('/blog').find())
</script>

<template>
<!-- TODO Style Searchbar -->
  <div>
    <div class="row justify-content-center mb-3">
    <input class="searchbar mt-1" v-model="searchQuery" type="search" autocomplete="off"
    placeholder="Search"/>
    <ul v-if="posts.length">
      <li class="list-unstyled" v-for="post of posts" :key="post.slug">
        <NuxtLink :to="post._path">
          {{post.title}}
        </NuxtLink>
      </li>
    </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      searchQuery: '',
      articles: []
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles= []
        return
      }
      this.articles = await this.$content('articles').limit(6).search(searchQuery).fetch()
    }
  }
}
</script>

<style>
</style>
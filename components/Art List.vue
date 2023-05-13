<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { data: posts } = await useAsyncData('posts', () => queryContent('/art').find())
</script>
<template>
  <div class="article-list">
    <div class=" row mb-4 scrolling-component" ref="scrollComponent">
      <ArtPost v-for="post in posts" :art="post" :key="post.slug" class="col-sm-6 col-lg-4 mb-4"></ArtPost>
      <!-- <ArtPosts v-for="post in posts" :key="post.slug" class="col-sm-6 col-lg-4 mb-4"></ArtPosts> -->
    </div>
  </div>
</template>

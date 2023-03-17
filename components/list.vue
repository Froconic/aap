<script setup>
import getPosts from '~/scripts/post-loader'
import { ref, onMounted, onUnmounted } from 'vue'

    const posts = ref(getPosts(10))
    const scrollComponent = ref(null)

  const loadMorePosts = () => {
  let newPosts = getPosts(10)
  posts.value.push(...newPosts)
 }

 onMounted(() => {
  window.addEventListener("scroll", handleScroll)
 })
 onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
 })
 const handleScroll = (e) => {
  let element = scrollComponent.value
  if (element.getBoundingClientRect().bottom < window.innerHeight) {
    loadMorePosts()
  }
 }

  //   return {
  //     posts,
  //     scrollComponent
  // }
</script>
<template>
  <div class="container">
    <div class="container scrolling-component" ref="scrollComponent">
      <Post v-for="post in posts" :post="post" :key="index" />
    </div>
  </div>
</template>

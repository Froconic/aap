<script setup>
import getPosts from '~/scripts/post-loader'
import getArtwork from '~/scripts/getArtwork.js'
import { ref, onMounted, onUnmounted } from 'vue'

// Fetch  artworks from content folder
const { data: art } = useFetch(()=> '/api/art')

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
  <div class="article-list">
    <div class=" row mb-4 scrolling-component" ref="scrollComponent">
      <pre>{{ art }}</pre>
    </div>
  </div>
</template>

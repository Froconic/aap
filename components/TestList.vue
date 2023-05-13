<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import getArtworks from '~/server/api/getArtwork'

let initial = 12
let batch = 3
let count = 0
const allPosts = await queryContent('/art').find()
const nextPosts = await queryContent('/art').skip(12).find()
// console.log(allPosts)
console.log(nextPosts)
const posts = []
for(var i = 0; i < initial; i++)
  posts.push(allPosts[i])

count = posts.length

console.log(posts)
console.log(count)

// const list = ref(getArtworks(initial))
// const values = ref(list)
// console.log(list)
// console.log(list.value)
// for(var i = 0; i < initial; i++)
//   values.push(list.value)

// console.log(values)
const scrollComponent = ref(null)
const loadMorePosts = () => {
  // for (var j = 0; j < batch; j++)
  //   posts.push(nextPosts[j])
  if(count < allPosts.length){
    for(var j = 0; j < batch; j++)
      posts.push(allPosts[j+count])
  }
  console.log(posts)
  count = posts.length
  console.log(count)
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
  console.log("Mounted")
})
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
  console.log("unMounted")

})
const handleScroll = (e) => {
  let element = scrollComponent.value
  if (element.getBoundingClientRect().bottom < window.innerHeight) {
    loadMorePosts()
    console.log("loading more posts")

  }
}

</script>
<template>
  <div class="article-list">
    <div class=" row mb-4 scrolling-component" ref="scrollComponent">
      <TestPost v-for="post in posts" :art="post"  class="col-sm-6 col-lg-4 mb-4"></TestPost>
      <!-- <ArtPosts v-for="post in posts" :key="post.slug" class="col-sm-6 col-lg-4 mb-4"></ArtPosts> -->
    </div>
  </div>
</template>

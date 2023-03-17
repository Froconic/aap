<script setup>
 // ...
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
} // ...

</script>
<template>
  <main class="container">
    <List></List>
  </main>
</template>
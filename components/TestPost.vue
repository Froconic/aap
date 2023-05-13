<template>
  <NuxtLink class="card card-body justify-content-between" to='/' >
    <!-- `/art/${art.slug} -->
    <img :src="art.img" :alt="art.alt" class="rounded mb-3 shadow-3d border border-primary">
    <h4 class="mb-1 text-center art-title"> {{ art.title }}</h4>
    <p>{{ art.description }}</p>
  </NuxtLink>
</template>
<script>
export default {
  props: {
    art: Object
  }
}
</script>
<style scoped>
.post {
  background: #fff;
  padding: 1.5em;
}

.post:not(:last-child) {
  border-bottom: 1px solid #ddd;
}

.post h2 {
  font-size: 1.3em;
  padding-bottom: 0.25rem;
}

.post p {
  color: #888;
}</style>
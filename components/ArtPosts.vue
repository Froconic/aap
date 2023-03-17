<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () => queryContent('/art').find())


</script>

<template>
    <div class="post-list">
      <div class="row mb-4">
        <div v-for="post of posts" :key="post.slug" class="col-sm-6 col-lg-4 mb-4">
          <NuxtLink :to="post._path">
            <img :src="post.img" :alt="post.alt" class="rounded mb-3 shadow-3d border border-primary" />
            <h4 class="mb-1 text-center art-title"> {{ post.title }} </h4>
          </NuxtLink>
        </div>
      </div>
      <div class="row mb-4 justify-content-center">
        <!-- <ArtPagination v-if="total > 6" :total="total" /> -->
      </div>
    </div>
</template>

<script lang="ts">
export default {
  name: 'ArtPosts',
}
</script>

<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () => queryContent('/blog').find())
</script>

<template>
  <div class="article-list">
    <div class="row mb-4">
      <div v-for="post in posts" :key="post.slug" class="col-md-6 col-lg-4">
        <NuxtLink class="card card-body justify-content-between" :to="post._path">
          <div class="text-small d-flex">
            <div class="mr-2 mb-2">
              <h6 class="category-link" :to="'/blog/category/${category}'">{{ post.category }}</h6>
              <span class="text-muted">{{ post.date }}</span>
              <span class="badge badge-primary-alt "><Icon class="icon" :name="post.icon"></Icon></span>
              </div>
              </div>
              <nuxt-img class="mb-2" :src="post.cover" alt="" />
              <div>
                <span class="h5">
                  {{ post.title }}
                </span>
                <p class="flex-grow mt-3"> {{ post.description }}</p>
                <slot />
              </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BlogPosts',
}
</script>

<script setup>
import { ref } from 'vue'
import { useVirtualList, useInfiniteScroll } from '@vueuse/core'

const data = ref(Array.from(Array(20).keys(), () => "Lorem ipsum son sun"))

// const { data: posts } = await useAsyncData('posts', () => queryContent('/art').find())

const { list, containerProps, wrapperProps} = useVirtualList(data, {
  itemHeight: 80
})

// useInfiniteScroll(
//   containerProps.ref,
//   () => {
//     data.value.push(...Array.from(Array(10).keys(), () => "More ipsum sun bun"))
//   },
//     {distance: 10}
//     )


</script>
<template>
  <div v-bind="containerProps" class=" virtual-list-container">
  <div v-bind="wrapperProps" class="">
    <div v-for="{index, data} in list" :key="index" class="item">
      <h6 class="text-dark">Item #: {{ index+1 }}</h6>
      <p class="text-dark">{{ data }}</p>
    </div>
  </div>
  </div>
</template>
<style scoped>
 .item {
  height: 80px;
  /* margin-bottom: 16px; */
  padding: 0 10px;
 }

 .virtual-list-container {
  height: 90vh;
 }

</style>
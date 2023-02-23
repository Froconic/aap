<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <Icon :name="icon" />
  <ContentSlot :use="$slots.default" />
</template>
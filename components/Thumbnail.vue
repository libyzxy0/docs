<template>
  <div class="h-32 bg-white w-full">
    <h1>{{ image }}</h1>
  </div>
</template>
<script setup>
  defineProps({
    image: String
  })
</script>
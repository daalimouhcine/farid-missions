<template>
  <div :class="[{ 'opacity-0': !postDetails }, 'w-screen h-screen bg-gray-800/25 fixed top-0']">
  
  </div>
</template>

<script setup>
const props = defineProps(["postDetails"]);
</script>

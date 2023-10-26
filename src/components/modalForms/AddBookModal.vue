<template>
  <div
    :class="[
      [!isOpen ? 'hidden' : 'flex'],
      'w-screen h-screen bg-gray-800/25 fixed top-0 z-20 cursor-pointer',
    ]"
  ></div>
</template>

<script setup>
const props = defineProps(["isOpen"]);
const emits = defineEmits(["closeModal"]);

const closeModal = () => {
  emits("closeModal");
};
</script>

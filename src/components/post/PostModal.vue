<template>
  <div
    :class="[
      [!modalStatus ? 'hidden' : 'flex'],
      'w-screen h-screen bg-gray-800/25 fixed top-0 z-20',
    ]"
    @click="closeModal"
  >
    <div
      class="w-1/2 h-1/2 m-auto bg-white rounded-lg shadow-lg flex flex-col items-center"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps(["modalDetails", "modalStatus"]);
const emits = defineEmits(["closeModal"]);

const closeModal = () => {
  emits("closeModal");
};
</script>

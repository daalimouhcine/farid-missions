<template>
  <div
    :class="[
      [!modalStatus ? 'hidden' : 'flex'],
      'w-screen h-screen bg-gray-800/25 fixed top-0 z-20 cursor-pointer',
    ]"
    @click="closeModal"
  >
    <div
      class="w-4/5 lg:w-3/5 h-1/2 m-auto pointer-events-none bg-white rounded-lg shadow-lg flex flex-col items-center"
    >
      <div class="w-full flex justify-between">
        <div class="flex gap-x-3 items-center">
          <img :src="modalDetails.profile.img" class="w-8 h-8 rounded-sm" />
          <div class="flex flex-col -space-y-2">
            <h3 class="w-fit font-semibold">
              {{ modalDetails.profile.fullName }}
            </h3>
            <h5 class="text-xs">
              {{ modalDetails.profile.userName }}
            </h5>
          </div>
        </div>
        <div class="flex items-center">
          <TimeIcon />
          <p class="text-xs">10h</p>
        </div>
      </div>
      <div class="w-full">
        <p>
          {{ modalDetails.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["modalDetails", "modalStatus"]);
const emits = defineEmits(["closeModal"]);

const closeModal = () => {
  emits("closeModal");
};
</script>

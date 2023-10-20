<template>
  <!-- class="relative flex justify-center items-center max-sm:gap-x-0 gap-x-5 w-full border-y" -->
  <div
    class="sticky top-0 flex justify-center items-center max-sm:gap-x-0 gap-x-5 w-full border-y border-gray-300 bg-gray-100 z-20"
  >
    <div
      :class="{
        '-translate-x-14': isScrolled,
        'max-sm:-translate-x-16 max-md:-translate-x-20 -translate-x-24':
          !isScrolled,
        'w-1/12 transition-all duration-300 ease-linear': true,
      }"
    >
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
        :class="{
          'w-16 h-16 my-5': isScrolled,
          'max-sm:w-20 max-md:w-28 w-36': !isScrolled,
          'max-w-max rounded-md transition-all duration-300 ease-linear': true,
        }"
      />
    </div>
    <div
      :class="{
        'max-md:mt-0 mt-0 ': isScrolled,
        'max-md:mt-7 mt-8 ': !isScrolled,
        'w-full space-y-3 transition-all duration-300 ease-linear': true,
      }"
    >
      <div class="flex gap-x-5 justify-between items-center">
        <div class="flex flex-col -space-y-2">
          <h3 class="w-fit max-sm:text-base text-lg font-serif font-semibold">
            John Tyson Jr.
          </h3>
          <h5 class="text-xs">@johntysonjr</h5>
        </div>
        <button
          type="submit"
          class="h-fit flex gap-x-1 font-serif items-center max-sm:text-xs text-sm bg-amber-800 hover:bg-amber-700 transition-colors text-gray-100 font-semibold py-1.5 px-5 sm:px-7 rounded-lg"
        >
          Follow
        </button>
      </div>
      <div v-if="!isScrolled" class="w-full">
        <p class="max-sm:text-xs max-md:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos
          exercitationem voluptatem quas quibusdam, quia voluptas quod quos
          exercitationem voluptatem quas.
        </p>
      </div>
      <div v-if="!isScrolled" class="w-full flex h-14">
        <button class="flex-1 border-r appearance-none hover:bg-gray-200 transition-colors duration-200 ease-linear">1.5K ********</button>
        <button class="flex-1 border-r appearance-none hover:bg-gray-200 transition-colors duration-200 ease-linear">150 ********</button>
        <button class="flex-1 border-r appearance-none hover:bg-gray-200 transition-colors duration-200 ease-linear">1K ********</button>
        <button class="flex-1 appearance-none hover:bg-gray-200 transition-colors duration-200 ease-linear">15 ********</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isScrolled = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    isScrolled.value = window.scrollY > 0;
  });
});
</script>

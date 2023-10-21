<template>
  <div class="flex gap-x-5">
    <div class="fixed left-0 w-1/12 max-sm:hidden h-screen bg-blue-200">
      <!-- Left content -->
    </div>
    <div
      class="max-sm:w-10/12 max-md:w-9/12 w-6/12 bg-gray-100 max-md:mr-0 max-md:-translate-x-2 mx-auto -translate-x-[5vw] border-x-[4px] px-5 border-gray-300"
    >
      <div class="item-container w-full min-h-screen my-5 space-y-10">
        <Card />
        <!-- the scrollable content goes here -->
        <div
          v-for="(_, idx) in Array(10).fill(0)"
          :key="idx"
          @click="openModal(idx)"
          class="relative w-full space-y-5 px-3 md:px-10 pt-3 md:pt-5 pb-5 md:pb-10 shadow-md cursor-pointer"
        >
          <div
            class="w-1 rounded-full h-full absolute top-0 left-0 -translate-x-6"
            :class="{
              'bg-[#711112]': currentItem == idx,
              'bg-[#CCADAF]': currentItem != idx,
            }"
          >
            <div
              v-if="currentItem == idx"
              class="w-fit h-fit absolute -top-4 -translate-x-1/2 ml-0.5"
            >
              <OpenBookIcon />
            </div>
            <div
              v-else
              class="w-fit h-fit absolute -top-7 -translate-x-1/2 ml-[2px]"
            >
              <CloseBookIcon />
            </div>
          </div>
          <div class="item h-40 w-full bg-zinc-600" :id="idx">
            <!-- <PostComponent :post="post" /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="fixed right-0 w-3/12 max-md:hidden h-screen bg-green-200">
      <!-- Right content -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Card from "../components/scrollTask/Card.vue";
import OpenBookIcon from "../icons/OpenBookIcon.vue";
import CloseBookIcon from "../icons/CloseBookIcon.vue";

const currentItem = ref("");

onMounted(() => {
  const items = document.querySelectorAll(".item");

  const screenHeight = window.innerHeight;
  let itemHeight = items[0].offsetHeight;
  let rootMargin = Math.floor((screenHeight - itemHeight) / 2);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) currentItem.value = entry.target.id;
      });
    },
    {
      // root: null,
      rootMargin: `-${rootMargin}px 0px -${rootMargin}px 0px`,
      threshold: 0.3,
    }
  );
  items.forEach((item) => {
    observer.observe(item);
  });
});
</script>

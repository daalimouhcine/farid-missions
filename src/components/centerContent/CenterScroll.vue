<template>
  <div class="item-container w-full min-h-screen my-5 space-y-10">
    <Card />
    <!-- the scrollable content goes here -->
    <div
      v-for="(item, itemIdx) in items"
      :key="itemIdx"
      class="relative w-full space-y-5 px-3 md:px-10 pt-3 md:pt-5 pb-5 md:pb-10 shadow-md cursor-pointer"
    >
      <div
        class="w-1 rounded-full h-full absolute top-0 left-0 -translate-x-6"
        :class="{
          'bg-[#711112]': currentItem == itemIdx,
          'bg-[#CCADAF]': currentItem != itemIdx,
        }"
      >
        <div
          v-if="currentItem == itemIdx"
          class="w-fit h-fit sticky top-52 -translate-y-full -translate-x-1/2 flex flex-col gap-y-0.5 items-center ml-0.5"
        >
          <button class="w-fit px-2 bg-[#711112] text-white rounded-md">
            {{ item.chapterNumber }}
          </button>
          <OpenBookIcon />
        </div>
        <div v-else class="w-fit h-fit fixed -top-7 -translate-x-1/2 ml-[2px]">
          <CloseBookIcon />
        </div>
      </div>
      <div
        v-for="(element, idx) in item.elements"
        :key="idx"
        class="item h-40 w-full bg-zinc-600"
        :id="itemIdx"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Card from "../scrollTask/Card.vue";
import OpenBookIcon from "../../icons/OpenBookIcon.vue";
import CloseBookIcon from "../../icons/CloseBookIcon.vue";

const currentItem = ref("");

const items = [
  {
    chapterNumber: "I",
    elements: Array(3).fill(0),
  },
  {
    chapterNumber: "II",
    elements: Array(5).fill(0),
  },
  {
    chapterNumber: "III",
    elements: Array(2).fill(0),
  },
  {
    chapterNumber: "IV",
    elements: Array(4).fill(0),
  },
  {
    chapterNumber: "V",
    elements: Array(6).fill(0),
  },
  {
    chapterNumber: "VI",
    elements: Array(3).fill(0),
  },
  {
    chapterNumber: "VII",
    elements: Array(5).fill(0),
  },
  {
    chapterNumber: "VIII",
    elements: Array(2).fill(0),
  },
  {
    chapterNumber: "IX",
    elements: Array(4).fill(0),
  },
  {
    chapterNumber: "X",
    elements: Array(6).fill(0),
  },
];

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
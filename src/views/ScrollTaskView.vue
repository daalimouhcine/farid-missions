<template>
  <div class="flex gap-x-5">
    <div class="fixed left-0 w-1/12 h-screen bg-blue-200 py-5 z-30">
      <div class="relative w-fit flex flex-col gap-y-5 items-center mx-auto">
        <AddBookModal
          :is-open="isOpenAddBookModal"
          @close-modal="closeModal('addBookModal')"
        />
        <LaunchClubModal
          :is-open="isOpenLaunchClubModal"
          @close-modal="closeModal('launchClubModal')"
        />
        <CreatePostModal
          :is-open="isOpenCreatePostModal"
          @close-modal="closeModal('createPostModal')"
        />
      </div>
    </div>
    <div
      class="max-sm:w-10/12 max-md:w-9/12 z-20 w-6/12 bg-gray-100 max-md:mr-0 max-md:-translate-x-2 mx-auto -translate-x-[10vw] border-x-[4px] px-5 border-gray-300"
    >
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
            <div
              v-else
              class="w-fit h-fit fixed -top-7 -translate-x-1/2 ml-[2px]"
            >
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
    </div>
    <div
      class="flex flex-col gap-y-10 fixed right-0 w-4/12 px-3 max-md:hidden h-screen z-20"
    >
      <SearchModal />
      <ActivityMap />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Card from "../components/scrollTask/Card.vue";
import OpenBookIcon from "../icons/OpenBookIcon.vue";
import CloseBookIcon from "../icons/CloseBookIcon.vue";
// form modals
import AddBookModal from "../components/modalForms/AddBookModal.vue";
import CreatePostModal from "../components/modalForms/CreatePostModal.vue";
import LaunchClubModal from "../components/modalForms/LaunchClubModal.vue";
import ActivityMap from "../components/rightContent/ActivityMap.vue";
import SearchModal from "../components/rightContent/search/SearchModal.vue";

const isOpenAddBookModal = ref(false);
const isOpenCreatePostModal = ref(false);
const isOpenLaunchClubModal = ref(false);
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

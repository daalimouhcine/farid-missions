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
      <CenterScroll />
    </div>
    <div
      class="flex flex-col gap-y-10 fixed right-0 w-4/12 px-3 max-md:hidden h-screen z-30"
    >
      <SearchModal />
      <ActivityMap />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CenterScroll from "../components/centerContent/CenterScroll.vue";
import AddBookModal from "../components/modalForms/AddBookModal.vue";
import CreatePostModal from "../components/modalForms/CreatePostModal.vue";
import LaunchClubModal from "../components/modalForms/LaunchClubModal.vue";
import ActivityMap from "../components/rightContent/ActivityMap.vue";
import SearchModal from "../components/rightContent/search/SearchModal.vue";
</script>

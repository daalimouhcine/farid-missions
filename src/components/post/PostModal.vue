<template>
  <div
    :class="[
      [!modalStatus ? 'hidden' : 'flex'],
      'w-screen h-screen bg-gray-800/25 fixed top-0 z-20',
    ]"
  >
    <div
      class="relative font-serif w-[98vw] sm:w-4/5 lg:w-3/5 max-h-[98vh] px-3 md:px-10 py-5 m-auto bg-white rounded-lg shadow-lg flex flex-col items-center"
    >
      <div
        class="absolute top-2 right-2 bg-zinc-500 px-0.5 py-2 rounded-md text-gray-100 hover:bg-zinc-700 cursor-pointer"
        @click="closeModal"
      >
        <svg-icon type="mdi" :path="mdiClose" class="w-10"></svg-icon>
      </div>
      <div
        class="w-fit flex items-center gap-x-2 bg-stone-300 px-5 py-1 pr-7 mr-auto rounded-t-md"
      >
        <svg-icon type="mdi" :path="mdiClockTimeEightOutline"></svg-icon>
        <h6 class="text-xs md:text-sm">
          This post is temporary, and will disappear at te end of the day
        </h6>
      </div>
      <div class="space-y-2">
        <div class="w-full space-y-5 px-5 pt-5 pb-5 shadow-md">
          <div class="w-full flex justify-between">
            <div class="flex gap-x-3 items-center">
              <img
                :src="modalDetails.profile.img"
                alt="user of the post img"
                class="w-8 h-8 rounded-sm"
              />
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
              <svg-icon
                type="mdi"
                :path="mdiClockTimeEightOutline"
                class="w-5"
              ></svg-icon>
              <p class="text-xs">10h</p>
            </div>
          </div>
          <div class="w-full">
            <p class="px-2 text-xs md:text-base">
              {{ modalDetails.content }}
            </p>
          </div>
        </div>
        <div
          class="flex gap-x-4 content-center items-center w-full h-10 px-3 py-4 shadow-md"
        >
          <div
            class="flex hover:scale-110 transition-transform duration-300 ease-linear"
          >
            <svg-icon type="mdi" :path="mdiHeartOutline"></svg-icon>
            <p class="text-xs mt-auto">{{ modalDetails.likeNumber }}</p>
          </div>
          <div
            class="flex hover:scale-110 transition-transform duration-300 ease-linear"
          >
            <svg-icon type="mdi" :path="mdiPencilOutline"></svg-icon>
            <p class="text-xs mt-auto">{{ modalDetails.comments.length }}</p>
          </div>
        </div>
        <CommentForm />
      </div>
      <div class="w-full mt-2 overflow-y-scroll mb-7">
        <h4 class="font-semibold">Comments</h4>
        <CommentComponent
          v-for="comment in modalDetails.comments"
          :key="comment.id"
          :commentDetails="comment"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiHeartOutline,
  mdiPencilOutline,
  mdiClockTimeEightOutline,
  mdiClose,
} from "@mdi/js";

import CommentForm from "./CommentForm.vue";
import CommentComponent from "./CommentComponent.vue";

const props = defineProps(["modalDetails", "modalStatus"]);
const emits = defineEmits(["closeModal"]);

const closeModal = () => {
  emits("closeModal");
};
</script>

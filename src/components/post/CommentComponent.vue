<template>
  <div class="w-full px-5 mt-3">
    <div class="w-full flex justify-between">
      <div class="flex gap-x-3 items-center">
        <img
          :src="commentDetails.profile.img"
          alt="user of the post img"
          class="w-8 h-8 rounded-sm"
        />
        <div class="flex flex-col -space-y-2">
          <h3 class="w-fit font-semibold text-xs">
            {{ commentDetails.profile.fullName }}
          </h3>
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
    <div
      class="w-full flex flex-col gap-y-1 items-center border-l-2 border-gray-300 ml-4 px-3"
    >
      <p class="text-xs md:text-base mt-2 w-full">
        {{ commentDetails.content }}
      </p>
      <form
        v-if="openResponse"
        @submit.prevent="submitResponse"
        class="flex gap-x-1 sm:gap-x-4 content-center items-center w-full h-10 px-4 py-3 shadow-md"
      >
        <input
          type="text"
          name="comment"
          id="comment"
          placeholder="Write a response..."
          class="w-full h-full text-sm bg-transparent outline-none"
          v-model="responseInput"
        />
        <button
          type="submit"
          class="flex gap-x-1 items-center bg-amber-800 hover:bg-amber-700 transition-colors text-gray-100 font-semibold py-1.5 px-1 sm:px-2 rounded-lg"
        >
          <svg-icon
            type="mdi"
            :path="mdiPencilOutline"
            class="w-4 h-4"
          ></svg-icon>
          <p class="text-xs">Response</p>
        </button>
        <button
          type="button"
          class="flex gap-x-1 items-center bg-red-800 hover:bg-red-700 transition-colors text-gray-100 font-semibold py-1.5 px-1 sm:px-2 rounded-lg"
          @click="toggleOpenResponse"
        >
          <svg-icon type="mdi" :path="mdiClose" class="w-4 h-4"></svg-icon>
        </button>
      </form>
      <div
        v-else
        class="flex gap-x-4 content-center items-center w-full h-10 py-4"
      >
        <div
          class="flex hover:scale-110 transition-transform duration-300 ease-linear"
        >
          <svg-icon type="mdi" :path="mdiHeartOutline" class="w-5"></svg-icon>
          <p class="text-xs mt-auto">{{ commentDetails.likeNumber }}</p>
        </div>
        <div
          class="flex hover:scale-110 transition-transform duration-300 ease-linear"
          @click="toggleOpenResponse"
        >
          <svg-icon type="mdi" :path="mdiPencilOutline" class="w-5"></svg-icon>
          <p class="text-xs mt-auto">{{ commentDetails.responses.length }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiHeartOutline,
  mdiPencilOutline,
  mdiClockTimeEightOutline,
  mdiClose,
} from "@mdi/js";

const props = defineProps(["commentDetails"]);

const responseInput = ref("");
const openResponse = ref(false);

const toggleOpenResponse = () => {
  openResponse.value = !openResponse.value;
};

const submitResponse = () => {
  alert(responseInput.value);
  responseInput.value = "";
  toggleOpenResponse();
};
</script>

<template>
  <PostModal :modalStatus="modalStatus" />
  <div
    class="w-3/5 space-y-5 px-10 pt-5 pb-10 shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 ease-linear"
  >
    <div class="w-full flex justify-between">
      <div class="flex gap-x-3 items-center">
        <img :src="post.profile.img" class="w-8 h-8 rounded-sm" />
        <div class="flex flex-col -space-y-2">
          <h3 class="w-fit font-semibold">
            {{ post.profile.fullName }}
          </h3>
          <h5 class="text-xs">
            {{ post.profile.userName }}
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
        {{ post.content }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TimeIcon from "../../icon/TimeIcon.vue";
import PostModal from "./PostModal.vue";

const props = defineProps(["post"]);
const modalStatus = ref(false);
</script>

<template>
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
</template>

<script setup>
import { ref } from "vue";
import TimeIcon from "../../icon/TimeIcon.vue";

const props = defineProps(["post"]);
</script>

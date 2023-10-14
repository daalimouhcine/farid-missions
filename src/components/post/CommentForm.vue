<template>
  <form
    @submit.prevent="submitComment"
    class="flex gap-x-4 content-center items-center w-full h-16 px-4 py-3 shadow-md"
  >
    <img
      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
      alt="current user img"
      class="w-8 h-8 rounded-sm"
    />
    <input
      type="text"
      name="comment"
      id="comment"
      placeholder="Add a comment to this post"
      class="w-full h-full text-sm bg-transparent outline-none"
      v-model="commentInput"
    />
    <button
      type="submit"
      class="flex gap-x-1 items-center bg-amber-800 hover:bg-amber-700 transition-colors text-gray-100 font-semibold py-1.5 px-3 rounded-lg"
    >
      <svg-icon type="mdi" :path="mdiPencilOutline" class="w-5 h-5"></svg-icon>
      <p class="text-sm">comment</p>
    </button>
  </form>
</template>

<script setup>
import {ref} from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiPencilOutline } from "@mdi/js";

const commentInput = ref("");
const submitComment = () => {
  alert(commentInput.value);
  commentInput.value = "";
};
</script>

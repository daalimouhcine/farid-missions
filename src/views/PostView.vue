<template>
  <router-link to="/scroll-task" class="w-fit mx-auto">
    ScrollTask
  </router-link>
  <h1 class="w-fit mx-auto text-3xl font-bold my-5">PostModal</h1>
  <PostModal
    :modalStatus="modalStatus"
    :modalDetails="modalDetails"
    @closeModal="closeModal"
  />

  <div class="w-full flex flex-col gap-y-10 items-center">
    <div
      v-for="(post, idx) in posts"
      :key="post.id"
      @click="openModal(idx)"
      class="w-[97vw] sm:w-4/5 lg:w-3/5 space-y-5 px-3 md:px-10 pt-3 md:pt-5 pb-5 md:pb-10 shadow-md cursor-pointer hover:scale-105 transition-transform z-10 duration-300 ease-linear"
    >
      <PostComponent :post="post" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PostComponent from "../components/post/PostComponent.vue";
import PostModal from "../components/post/PostModal.vue";

import posts from "../../data/posts.json";

const modalStatus = ref(false);
const modalDetails = ref({
  id: "",
  profile: {
    fullName: "",
    userName: "",
    img: "",
  },
  content: "",
  likeNumber: "",
  comments: [],
});

const openModal = (idx) => {
  document.body.classList.add("overflow-hidden");
  modalDetails.value = posts[idx];
  modalStatus.value = true;
};
const closeModal = () => {
  document.body.classList.remove("overflow-hidden");
  modalStatus.value = false;
};
</script>

<template>
  <div class="w-3/5">
    <div class="w-full flex justify-between">
      <div class="flex gap-x-3">
        <img :src="post.profile.img" class="w-8 h-8" />
        <div class="flex flex-col">
          <h3 class="w-fit">
            {{ post.profile.fullName }}
          </h3>
          <h5>
            {{ post.profile.userName }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["post"]);
</script>

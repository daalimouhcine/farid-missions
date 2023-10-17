<template>
  <div class="flex gap-x-5">
    <div class="fixed left-0 w-1/12 max-sm:hidden h-screen bg-blue-200">
      <!-- Left content -->
    </div>
    <div
      class="max-sm:w-10/12 max-md:w-9/12 w-6/12 bg-gray-100 max-md:mr-0 max-md:-translate-x-2 mx-auto -translate-x-[5vw] border-x-[4px] px-5 border-gray-300"
    >
      <div class="w-full h-[200vh] my-5">
        <!-- the scrollable content goes here -->
        <Card />
      </div>
    </div>
    <div class="fixed right-0 w-3/12 max-md:hidden h-screen bg-green-200">
      <!-- Right content -->
    </div>
  </div>
</template>

<script setup>
import Card from "../components/scrollTask/Card.vue";
</script>

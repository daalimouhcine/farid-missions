<template>
  <div class="flex gap-x-5">
    <div class="max-md:w-2/12 w-1/12 max-sm:hidden h-screen bg-blue-200">
      <!-- Left content -->
    </div>
    <div
      class="max-sm:w-10/12 max-md:w-9/12 w-6/12 relative bg-red-200 ml-auto mr-5 border-x-2 border-black overflow-y-scroll"
    >
      <div class="absolute w-full h-[200vh] bg-gray-300 -ml-10">
        <!-- the scrollable content goes here -->
        <!-- <div class="w-full -ml-10 h-[20vh] bg-gray-300"></div> -->
      </div>
    </div>
    <div class="w-3/12 max-md:hidden h-screen bg-green-200">
      <!-- Right content -->
    </div>
  </div>
</template>

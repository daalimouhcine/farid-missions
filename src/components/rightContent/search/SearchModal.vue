<template>
  <div class="z-30">
    <button
      class="w-fit h-fit text-white bg-[#9C5759] hover:bg-[#714042] p-1 rounded-md"
      @click="openSearch"
    >
      <SvgIcon type="mdi" :path="mdiMagnify" class="w-6 h-6 text-white" />
    </button>
    <div
      :class="[
        [!isOpen ? 'hidden' : 'flex'],
        'w-screen h-screen bg-gray-800/25 fixed left-0 top-0',
      ]"
    >
      <div
        class="relative font-serif w-[98vw] sm:w-4/5 lg:w-3/5 max-h-[85vh] transition-all duration-300 py-5 m-auto bg-white rounded-lg shadow-lg flex flex-col items-center"
      >
        <div
          class="w-full border-b-2 px-8 md:px-10 pb-4 flex gap-x-2 items-center justify-center"
        >
          <div class="relative w-full">
            <svg-icon
              type="mdi"
              :path="mdiMagnify"
              class="absolute top-1/2 !-translate-y-1/2 left-2 w-7 h-7 text-gray-800"
            ></svg-icon>
            <input
              type="text"
              class="h-10 w-full px-10 border-2 rounded-sm border-zinc-300 text-zinc-600 placeholder-zinc-500 text-sm focus:outline-none focus:border-zinc-700"
              placeholder="Cherchez"
              id="search"
              v-model="search"
              @input="searchBooks"
              @change="searchBooks"
            />
            <button
              class="absolute top-0 right-0 h-10 w-fit px-2 border-2 rounded-md border-transparent hover:scale-125 transition-transform text-zinc-600 placeholder-zinc-500 text-sm focus:outline-none"
              v-if="search"
              @click="emptySearch"
            >
              <svg-icon
                type="mdi"
                :path="mdiClose"
                class="w-5 text-gray-400"
              ></svg-icon>
            </button>
          </div>
          <button class="w-fit h-fit tex-lg p-1" @click="closeSearch">
            Cancel
          </button>
        </div>
        <div class="w-full space-y-5 h-full overflow-y-scroll">
          <div class="w-full flex flex-col gap-y-2 px-5">
            <div
              class="w-full flex gap-x-3 items-center hover:bg-gray-100 rounded-md p-1 cursor-pointer"
              v-for="(book, index) in searchAutoComplete"
              :key="index"
              @click="setSearch(book)"
            >
              <svg-icon
                class="h-5 text-zinc-500"
                type="mdi"
                :path="mdiMagnify"
              ></svg-icon>
              <p class="grow text-gray-600">
                {{ search
                }}<span class="font-bold text-gray-800">{{
                  book.slice(search.length)
                }}</span>
              </p>
              <svg-icon
                class="h-5 text-zinc-500"
                type="mdi"
                :path="mdiArrowTopLeft"
              ></svg-icon>
            </div>
          </div>
          <div class="flex items-center gap-x-5 px-1">
            <h5 class="text-lg font-bold ml-2">Books</h5>
            <div class="grow h-0.5 bg-gray-200"></div>
          </div>
          <div
            class="w-full flex flex-col gap-x-3 items-center rounded-md px-5 cursor-pointer"
          >
            <div
              class="w-full flex items-center h-full gap-x-5 py-1 hover:bg-gray-50"
              v-for="(book, index) in searchBooksResult"
              :key="index"
            >
              <img
                :src="book.coverImage"
                alt="book cover"
                class="w-10 h-fit object-cover rounded-md"
              />
              <div class="w-full flex flex-col max-sm:gap-y-1 justify-evenly">
                <h3
                  class="max-sm:text-lg text-sm !leading-4 font-semibold text-gray-800"
                >
                  {{ book.title }}
                </h3>
                <p class="text-zinc-600 text-xs">
                  {{ book.persons.join(", ") }}
                </p>
                <div
                  class="w-fit flex gap-x-5 gap-y-1 max-sm:-space-y-1 flex-wrap text-xs text-zinc-600"
                >
                  <p>
                    Publisher:
                    {{ book.publisher }}
                  </p>
                  <p>
                    Year:
                    {{ book.publishedDate }}
                  </p>
                  <p>
                    ISBN:
                    {{ book.isbn }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-x-5 px-1">
            <h5 class="text-lg font-bold ml-2">Persons</h5>
            <div class="grow h-0.5 bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiClose, mdiMagnify, mdiArrowTopLeft } from "@mdi/js";

import booksTitle from "../../../../data/booksTitle.json";
import books from "../../../../data/books.json";

const search = ref("");
const isOpen = ref(false);
const searchAutoComplete = ref([]);
const searchBooksResult = ref([]);

const searchBooks = () => {
  if (search.value) {
    searchAutoComplete.value = booksTitle.filter((book) =>
      book.toLowerCase().startsWith(search.value.toLowerCase())
    );

    searchBooksResult.value = books.filter((book) =>
      book.title.toLowerCase().startsWith(search.value.toLowerCase())
    );
  } else {
    searchAutoComplete.value = [];
    searchBooksResult.value = [];
  }
};

const setSearch = (book) => {
  search.value = book;
  searchAutoComplete.value = [];
  searchBooks();
};

const emptySearch = () => {
  search.value = "";
  searchAutoComplete.value = [];
  searchBooksResult.value = [];
};
const openSearch = () => {
  isOpen.value = true;
  document.body.classList.add("overflow-hidden");
  document.getElementById("right-content").classList.remove("z-30");
};
const closeSearch = () => {
  document.body.classList.remove("overflow-hidden");
  document.getElementById("right-content").classList.add("z-30");
  isOpen.value = false;
  search.value = "";
  searchAutoComplete.value = [];
  searchBooksResult.value = [];
};
</script>

<template>
  <div
    :class="[
      [!isOpen ? 'hidden' : 'flex'],
      'w-screen h-screen bg-gray-800/25 fixed left-0 top-0',
    ]"
  >
    <div
      class="relative font-serif w-[98vw] sm:w-4/5 lg:w-3/5 max-h-[90vh] transition-all duration-300 px-8 md:px-10 py-5 m-auto bg-white rounded-lg shadow-lg flex flex-col items-center"
    >
      <div class="flex w-full items-center">
        <h3 class="text-2xl min-w-max self-end">Launch a club</h3>
        <hr class="w-full h-0.5 mt-4 mx-5 rounded-full bg-zinc-400" />
        <div
          class="w-fit bg-zinc-500 px-0.5 py-2 rounded-md text-gray-100 hover:bg-zinc-700 cursor-pointer"
          @click="closeModal"
        >
          <svg-icon type="mdi" :path="mdiClose" class="w-10"></svg-icon>
        </div>
      </div>
      <div
        v-if="!selectedBook"
        class="w-full min-h-max flex flex-col overflow-auto"
      >
        <div class="w-full h-fit relative mt-10">
          <div class="w-10/12 h-full mx-auto flex items-center gap-x-4">
            <div class="relative w-full h-10">
              <svg-icon
                type="mdi"
                :path="mdiMagnify"
                class="absolute top-1/2 !-translate-y-1/2 left-2 w-7 h-7 text-gray-500"
              ></svg-icon>
              <input
                type="text"
                class="h-10 w-full px-10 border-2 rounded-md border-zinc-300 text-zinc-600 placeholder-zinc-500 text-sm focus:outline-none focus:border-zinc-700"
                placeholder="Cherchez"
                id="search"
                v-model="search"
                @input="searchBooks"
              />
              <button
                class="absolute top-0 right-0 h-10 w-fit px-2 border-2 rounded-md border-transparent hover:border-zinc-300 text-zinc-600 placeholder-zinc-500 text-sm focus:outline-none focus:border-zinc-700"
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
          </div>
        </div>
        <div
          class="w-full h-fit flex gap-5 justify-evenly flex-wrap overflow-y-scroll mt-5"
        >
          <div
            v-for="book in searchResults"
            :key="book.id"
            class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 mt-5 cursor-pointer"
            @click="selectedBook = book"
          >
            <div class="w-full h-full flex flex-col items-center">
              <img
                :src="book.coverImage"
                alt="book cover"
                class="w-32 h-48 object-cover rounded-md"
              />
              <p class="text-sm text-center mt-2">{{ book.title }}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full h-fit flex flex-col max-sm:gap-y-3 gap-y-5 mt-5"
        v-else
      >
        <div
          class="w-full h-fit flex justify-between gap-x-3 border-y-2 max-sm:py-2 py-3"
        >
          <div class="flex gap-x-1 relative">
            <button
              class="absolute top-1/2 -translate-y-1/2 -left-9 md:-left-10"
              @click="removeSelectedBook"
            >
              <svg-icon
                type="mdi"
                :path="mdiClose"
                class="w-10 text-gray-400 hover:text-gray-600"
              ></svg-icon>
            </button>
            <div class="flex items-center h-full gap-x-5">
              <img
                :src="selectedBook.coverImage"
                alt="book cover"
                class="w-20 h-fit object-cover rounded-md"
              />
              <div class="w-full flex flex-col max-sm:gap-y-1 justify-evenly">
                <h3
                  class="max-sm:text-lg text-xl !leading-4 font-semibold text-gray-800"
                >
                  {{ selectedBook.title }}
                </h3>
                <p class="text-zinc-600 max-sm:text-sm">
                  {{ selectedBook.persons.join(", ") }}
                </p>
                <div
                  class="w-fit flex gap-x-5 gap-y-1 max-sm:-space-y-1 flex-wrap max-sm:text-xs max-md:text-sm text-zinc-600"
                >
                  <p>
                    Publisher:
                    {{ selectedBook.publisher }}
                  </p>
                  <p>
                    Year:
                    {{ selectedBook.publishedDate }}
                  </p>
                  <p>
                    ISBN:
                    {{ selectedBook.isbn }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="max-sm:space-y-0 space-y-3">
          <div class="flex flex-col gap-x-5">
            <label for="description" class="px-2">Description</label>
            <textarea
              class="w-full h-32 resize-none text-zinc-600 placeholder-zinc-500 border border-[#DBC1C2] rounded-md text-sm focus:outline-none focus:border-[#9C5759] px-3 py-2"
              placeholder="Décrivez l’objectif!"
              v-model="clubDetails.description"
              id="description"
              maxlength="230"
            ></textarea>
            <p class="text-sm self-end mt-2 text-zinc-500">
              {{ clubDetails.description.length }}/230
            </p>
          </div>
          <div class="flex flex-col gap-x-5">
            <label for="dateFin" class="px-2">Date de Fin</label>
            <input
              type="text"
              @focus="(e) => (e.target.type = 'date')"
              @blur="(e) => (e.target.type = 'text')"
              placeholder="Choisissez une date"
              class="w-full h-10 text-zinc-600 placeholder-zinc-500 border border-[#DBC1C2] rounded-md text-sm focus:outline-none focus:border-[#9C5759] px-3 py-2"
              v-model="clubDetails.dateFin"
              id="dateFin"
            />
          </div>
        </div>
        <button
          type="button"
          class="self-end h-fit flex gap-x-1 font-serif items-center max-sm:text-xs text-sm bg-[#9C5759] hover:bg-[#714042] transition-colors text-gray-100 font-semibold py-2 px-5 sm:px-7 rounded-lg"
        >
          Create
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiClose, mdiMagnify } from "@mdi/js";
import OpenBookIcon from "../../icons/OpenBookIcon.vue";

import books from "../../../data/books.json";

const props = defineProps(["isOpen"]);
const emits = defineEmits(["closeModal"]);

const search = ref("");
const searchResults = ref([]);
const selectedBook = ref(null);
const clubDetails = ref({
  description: "",
  dateFin: "",
});


const removeSelectedBook = () => {
  selectedBook.value = null;
  clubDetails.value = {
    description: "",
    dateFin: "",
  };
};
const searchBooks = () => {
  console.log(search.value);
  if (search.value === "") {
    searchResults.value = [];
    return;
  }

  searchResults.value = books.filter((book) =>
    book.title.toLowerCase().includes(search.value.toLowerCase())
  );
};

const emptySearch = () => {
  search.value = "";
  searchResults.value = [];
};
const closeModal = () => {
  emptySearch();
  removeSelectedBook();
  emits("closeModal");
};
</script>

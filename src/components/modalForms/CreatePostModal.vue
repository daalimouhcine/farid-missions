<template>
  <div
    :class="[
      [!isOpen ? 'hidden' : 'flex'],
      'w-screen h-screen bg-gray-800/25 fixed left-0 top-0',
    ]"
  >
    <div
      class="relative font-serif w-[98vw] sm:w-4/5 lg:w-3/5 max-h-[90vh] min-h-[60vh] transition-all duration-300 md:px-10 py-5 m-auto bg-white rounded-lg shadow-lg flex flex-col items-center"
    >
      <div class="flex w-full items-center">
        <h3 class="text-2xl min-w-max self-end">Create a Post</h3>
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
            @click="selectedBook.value = book"
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
      <div v-else>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiClose, mdiMagnify } from "@mdi/js";
const props = defineProps(["isOpen"]);
const emits = defineEmits(["closeModal"]);

const search = ref("");
const searchResults = ref([]);
const selectedBook = ref(null);

const books = [
  {
    id: 1,
    title: "The Lord of the Rings",
    coverImage:
      "https://m.media-amazon.com/images/I/91DGwmaFdxL._AC_UY327_FMwebp_QL65_.jpg",
    publishedDate: "1954-07-29",
    publisher: "George Allen & Unwin",
    isbn: "0395489318",
  },
  {
    id: 2,
    title: "The Hobbit",
    coverImage: "https://m.media-amazon.com/images/I/815k7sxg6zL._SY466_.jpg",
    publishedDate: "1937-09-21",
    publisher: "George Allen & Unwin",
    isbn: "0345339681",
  },
  {
    id: 3,
    title: "The Fellowship of the Ring",
    coverImage: "https://m.media-amazon.com/images/I/91ydFIymD4L._SY342_.jpg",
    publishedDate: "1954-07-29",
    publisher: "George Allen & Unwin",
    isbn: "0618346252",
  },
  {
    id: 4,
    title: "The Two Towers",
    coverImage:
      "https://m.media-amazon.com/images/I/81hjPZ5axOL._AC_UY327_FMwebp_QL65_.jpg",
    publishedDate: "1954-11-11",
    publisher: "George Allen & Unwin",
    isbn: "0007129718",
  },
  {
    id: 5,
    title: "The Return of the King",
    coverImage:
      "https://m.media-amazon.com/images/I/714ifTQtqwL._AC_UY327_FMwebp_QL65_.jpg",
    publishedDate: "1955-10-20",
    publisher: "George Allen & Unwin",
    isbn: "0618129111",
  },
  {
    id: 6,
    title: "The Silmarillion",
    coverImage:
      "https://m.media-amazon.com/images/I/91d9vnqoupL._AC_UY327_FMwebp_QL65_.jpg",
    publishedDate: "1977-09-15",
    publisher: "George Allen & Unwin",
    isbn: "0618391118",
  },
  {
    id: 7,
    title: "Unfinished Tales of Númenor and Middle-earth",
    coverImage:
      "https://m.media-amazon.com/images/I/810Vqx3DKqL._AC_UY327_FMwebp_QL65_.jpg",
    publishedDate: "1980-10-01",
    publisher: "George Allen & Unwin",
    isbn: "0618083510",
  },
  {
    id: 8,
    title: "The Children of Húrin",
    coverImage:
      "https://m.media-amazon.com/images/I/91vB6Qe2rfL._AC_UY327_FMwebp_QL65_.jpg",
    publishedDate: "2007-04-17",
    publisher: "HarperCollins",
    isbn: "0547928211",
  },
  {
    id: 9,
    title: "Beren and Lúthien",
    coverImage:
      "https://m.media-amazon.com/images/I/81NcTZMOLML._AC_UY327_FMwebp_QL65_.jpg",
    publishedDate: "2017-06-01",
    publisher: "HarperCollins",
    isbn: "1328791823",
  },
  {
    id: 10,
    title: "The Fall of Gondolin",
    coverImage:
      "https://m.media-amazon.com/images/I/91+KAYxBMNL._AC_UY327_FMwebp_QL65_.jpg",
    publishedDate: "2018-08-30",
    publisher: "HarperCollins",
    isbn: "1328613049",
  },
  {
    id: 11,
    title: "The Hobbit, or There and Back Again",
    coverImage:
      "https://m.media-amazon.com/images/I/91ZbGMgpxOL._AC_UY327_FMwebp_QL65_.jpg",
    publishedDate: "1937-09-21",
    publisher: "George Allen & Unwin",
    isbn: "0345339681",
  },
  {
    id: 12,
    title: "The Fellowship of the Ring",
    coverImage:
      "https://m.media-amazon.com/images/I/91ydFIymD4L._AC_UY327_FMwebp_QL65_.jpg",
    publishedDate: "1954-07-29",
    publisher: "George Allen & Unwin",
    isbn: "0618346252",
  },
  {
    id: 13,
    title: "The Two Towers",
    coverImage:
      "https://m.media-amazon.com/images/I/81hjPZ5axOL._AC_UY327_FMwebp_QL65_.jpg",
    publishedDate: "1954-11-11",
    publisher: "George Allen & Unwin",
    isbn: "0007129718",
  },
  {
    id: 14,
    title: "The Return of the King",
    coverImage:
      "https://m.media-amazon.com/images/I/714ifTQtqwL._AC_UY327_FMwebp_QL65_.jpg",
    publishedDate: "1955-10-20",
    publisher: "George Allen & Unwin",
    isbn: "0618129111",
  },
  {
    id: 15,
    title: "Harry Potter and the Philosopher's Stone",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
    publishedDate: "1997-06-26",
    publisher: "Bloomsbury",
    isbn: "0747532699",
  },
];

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
  emits("closeModal");
};
</script>

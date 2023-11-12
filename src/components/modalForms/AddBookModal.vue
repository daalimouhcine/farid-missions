<template>
  <div class="w-full">
    <button
      @click="isOpen = true"
      class="w-full bg-gray-100 hover:bg-gray-300 rounded-md border-2 border-gray-800 px-3 py-1"
    >
      Add
    </button>
    <div
      :class="[
        [!isOpen ? 'hidden' : 'flex'],
        'w-screen h-screen bg-gray-800/25 fixed left-0 top-0',
      ]"
    >
      <div
        class="relative font-serif w-[98vw] sm:w-4/5 lg:w-3/5 max-h-[90vh] px-3 md:px-10 py-5 m-auto bg-white rounded-lg shadow-lg flex flex-col items-center"
      >
        <div class="flex w-full items-center">
          <h3 class="text-2xl min-w-max self-end">Add a Book</h3>
          <hr class="w-full h-0.5 mt-4 mx-5 rounded-full bg-zinc-400" />
          <div
            class="w-fit bg-zinc-500 px-0.5 py-2 rounded-md text-gray-100 hover:bg-zinc-700 cursor-pointer"
            @click="closeModal"
          >
            <svg-icon type="mdi" :path="mdiClose" class="w-10"></svg-icon>
          </div>
        </div>
        <form class="w-full space-y-5 overflow-y-scroll pb-20">
          <label
            for="coverImage"
            class="w-28 h-40 p-2 my-7 flex flex-col mx-auto items-center justify-center text-center gap-y-1 border border-zinc-400 cursor-pointer hover:border-zinc-500 hover:bg-gray-50 transition-colors"
            v-if="!inputRef.coverImage"
          >
            <GalleryAddIcon />
            <p class="text-xs text-zinc-500">
              Upload <br />
              the cover image
            </p>
            <input
              type="file"
              name="coverImage"
              id="coverImage"
              class="hidden"
              v-on:change="uploadCoverImage"
            />
          </label>
          <div
            class="w-fit h-fit flex flex-col items-center gap-y-1 mx-auto my-7"
            v-else
          >
            <div
              class="w-28 h-40 p-0.5 flex flex-col items-center justify-center text-center gap-y-1 border border-zinc-400 cursor-pointer hover:border-zinc-500 hover:bg-gray-50 transition-colors"
            >
              <img
                :src="previewImage"
                alt="cover image"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex items-center gap-x-1">
              <p class="text-xs text-zinc-500">
                {{ inputRef.coverImage.name }}
              </p>
              <button
                type="button"
                class="h-full w-fit flex items-center justify-center text-zinc-600 hover:text-zinc-500 focus:outline-none"
                @click="inputRef.coverImage = null"
              >
                <svg-icon
                  type="mdi"
                  :path="mdiClose"
                  class="w-7 text-red-400 hover:text-red-600"
                ></svg-icon>
              </button>
            </div>
          </div>

          <div class="space-y-7 pr-5">
            <div class="w-full flex items-center gap-x-4">
              <BookIcon />
              <div class="relative w-full">
                <input
                  type="text"
                  class="peer h-10 w-full px-2 border-2 rounded-md border-zinc-300 text-zinc-600 placeholder-transparent text-sm focus:outline-none focus:border-green-500"
                  placeholder=" "
                  id="bookTitle"
                  v-model="inputRef.bookTitle"
                />
                <label
                  for="bookTitle"
                  class="absolute top-0 -translate-y-1/2 left-2 px-2 text-zinc-500 peer-placeholder-shown:top-1/2 bg-white text-xs peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:text-xs peer-focus:top-0 peer-focus:bg-white transition-all"
                >
                  Book Title*
                </label>
              </div>
            </div>
            <div class="w-full flex items-center gap-x-4">
              <UserIcon class="self-start" />
              <div class="w-full flex flex-col gap-y-5">
                <div
                  class="flex flex-col gap-x-1 w-full relative"
                  v-for="(_, idx) in inputRef.people"
                  :key="idx"
                >
                  <input
                    type="text"
                    class="h-10 w-full px-2 border-2 rounded-md border-zinc-300 text-zinc-600 placeholder:text-zinc-500 text-sm focus:outline-none focus:border-green-500"
                    placeholder="Author/Translator/Editor*"
                    id="role"
                    v-model="inputRef.people[idx].name"
                  />
                  <select
                    class="absolute h-full w-fit underline text-zinc-600 px-3 max-md:px-2 max-sm:px-1 text-center right-0 border-2 border-zinc-300 rounded-md focus:outline-none"
                    v-model="inputRef.people[idx].role"
                  >
                    <option value="author">Author</option>
                    <option value="editor">Editor</option>
                    <option value="translator">Translator</option>
                  </select>
                  <button
                    v-if="idx != 0"
                    type="button"
                    class="absolute top-0 -right-10 h-full w-fit flex items-center justify-center text-zinc-600 hover:text-zinc-500 focus:outline-none"
                    @click="deletePerson(idx)"
                  >
                    <svg-icon
                      type="mdi"
                      :path="mdiClose"
                      class="w-10 text-red-400 hover:text-red-600"
                    ></svg-icon>
                  </button>
                </div>
              </div>
              <button
                type="button"
                class="self-start min-w-max h-10 px-3 border-2 hover:bg-zinc-100 transition-colors duration-200 border-zinc-300 text-zinc-600 rounded-md"
                @click="addPerson"
              >
                + Add
              </button>
            </div>
            <div class="w-full flex items-center gap-x-4">
              <BarCodeIcon />
              <div class="relative w-full">
                <input
                  type="text"
                  class="peer h-10 w-full px-2 border-2 rounded-md border-zinc-300 text-zinc-600 placeholder-transparent text-sm focus:outline-none focus:border-green-500"
                  placeholder=" "
                  id="publisher"
                  v-model="inputRef.publisher"
                />
                <label
                  for="publisher"
                  class="absolute top-0 -translate-y-1/2 left-2 px-2 text-zinc-500 peer-placeholder-shown:top-1/2 bg-white text-xs peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:text-xs peer-focus:top-0 peer-focus:bg-white transition-all"
                >
                  Publisher*
                </label>
              </div>
            </div>
            <div class="w-full flex items-center gap-x-4">
              <BookIcon />
              <div class="relative w-full">
                <input
                  type="text"
                  @focus="(e) => (e.target.type = 'date')"
                  @blur="(e) => (e.target.type = 'text')"
                  class="peer h-10 w-full px-2 border-2 rounded-md border-zinc-300 text-zinc-600 placeholder-transparent text-sm focus:outline-none focus:border-green-500"
                  placeholder=" "
                  id="publisherYear"
                  v-model="inputRef.publisherYear"
                />
                <label
                  for="publisherYear"
                  class="absolute top-0 -translate-y-1/2 left-2 px-2 text-zinc-500 peer-placeholder-shown:top-1/2 bg-white text-xs peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:text-xs peer-focus:top-0 peer-focus:bg-white transition-all"
                >
                  Publisher Year*
                </label>
              </div>
            </div>
            <div class="w-full flex items-center gap-x-4">
              <BarCodeIcon />
              <div class="relative w-full">
                <input
                  type="text"
                  class="peer h-10 w-full px-2 border-2 rounded-md border-zinc-300 text-zinc-600 placeholder-transparent text-sm focus:outline-none focus:border-green-500"
                  placeholder=" "
                  id="isbn"
                  v-model="inputRef.isbn"
                />
                <label
                  for="isbn"
                  class="absolute top-0 -translate-y-1/2 left-2 px-2 text-zinc-500 peer-placeholder-shown:top-1/2 bg-white text-xs peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:text-xs peer-focus:top-0 peer-focus:bg-white transition-all"
                >
                  ISBN Code*
                </label>
              </div>
            </div>
            <div class="w-full flex items-center gap-x-4">
              <BookIcon />
              <div class="relative w-full">
                <input
                  type="text"
                  class="peer h-10 w-full px-2 border-2 rounded-md border-zinc-300 text-zinc-600 placeholder-transparent text-sm focus:outline-none focus:border-green-500"
                  placeholder=" "
                  id="pagesNumber"
                  v-model="inputRef.pagesNumber"
                />
                <label
                  for="pagesNumber"
                  class="absolute top-0 -translate-y-1/2 left-2 px-2 text-zinc-500 peer-placeholder-shown:top-1/2 bg-white text-xs peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:text-xs peer-focus:top-0 peer-focus:bg-white transition-all"
                >
                  Number of Pages*
                </label>
              </div>
            </div>
            <div class="w-full flex items-center gap-x-4">
              <BookIcon />
              <div class="relative w-full">
                <Multiselect
                  :mode="'tags'"
                  class="peer h-10 !rounded-md !border-2 !border-zinc-300 placeholder-transparent text-sm"
                  :searchable="true"
                  v-model="inputRef.editionLanguage"
                  :options="languageOptions"
                ></Multiselect>

                <label
                  for="editionLanguage"
                  class="absolute top-0 -translate-y-1/2 left-2 px-2 text-zinc-500 peer-placeholder-shown:top-1/2 bg-white text-xs peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:text-xs peer-focus:top-0 peer-focus:bg-white transition-all"
                >
                  Edition Language*
                </label>
              </div>
            </div>
          </div>
        </form>
        <button
          type="button"
          class="self-end h-fit flex gap-x-1 font-serif items-center max-sm:text-xs text-sm bg-[#9C5759] hover:bg-[#714042] transition-colors text-gray-100 font-semibold py-2 px-5 sm:mt-3 mx-10 sm:px-7 rounded-lg"
        >
          Create
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Multiselect from "@vueform/multiselect";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiClose } from "@mdi/js";
import BookIcon from "../../icons/BookIcon.vue";
import UserIcon from "../../icons/UserIcon.vue";
import BarCodeIcon from "../../icons/BarCodeIcon.vue";
import GalleryAddIcon from "../../icons/GalleryAddIcon.vue";

import languageOptions from "../../../data/languageOptions.json";

const isOpen = ref(false);

const previewImage = ref(null);
const inputRef = ref({
  coverImage: null,
  bookTitle: "",
  people: [
    {
      name: "",
      role: "author",
    },
  ],
  publisher: "",
  publisherYear: "",
  isbn: "",
  pagesNumber: "",
  editionLanguage: [],
});

const uploadCoverImage = (e) => {
  inputRef.value.coverImage = e.target.files[0];
  previewImage.value = URL.createObjectURL(e.target.files[0]);
};

const addPerson = () => {
  inputRef.value.people.push({
    name: "",
    role: "author",
  });
};
const deletePerson = (idx) => {
  inputRef.value.people.splice(idx, 1);
};

const closeModal = () => {
  inputRef.value = {
    coverImage: null,
    bookTitle: "",
    people: [
      {
        name: "",
        role: "author",
      },
    ],
    publisher: "",
    publisherYear: "",
    isbn: "",
    pagesNumber: "",
    editionLanguage: [],
  };
  previewImage.value = null;
  isOpen.value = false;
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

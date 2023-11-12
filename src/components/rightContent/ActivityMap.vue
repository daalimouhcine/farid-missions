<template>
  <ClubModal
    :isOpen="modalIsOpen"
    :selectedClub="selectedClub"
    @closeModal="closeModal"
  />
  <div class="w-full h-3/4 mt-auto relative">
    <div class="flex w-full items-center mb-5">
      <h3 class="text-2xl min-w-max self-end">Activity Map</h3>
      <hr class="w-full h-0.5 mt-4 mx-5 rounded-full bg-zinc-400" />
      <p class="min-w-max underline text-zinc-700 cursor-pointer self-end">
        View all
      </p>
    </div>
    <div class="flex flex-col pb-14 h-full overflow-y-scroll hide-scrollbar">
      <div
        class="relative border-4 border-zinc-100 flex gap-x-2 justify-around rounded-md px-5 py-2 hover:bg-zinc-100 transition-colors duration-200 cursor-pointer"
        :class="
          idx !== 0
            ? 'mt-8 after:w-0.5 after:h-8 after:bg-zinc-300 after:absolute after:-top-1 after:left-16 after:-translate-y-full'
            : ''
        "
        v-for="(club, idx) in clubs"
        :key="club.bookDetails.title"
        @click="openModal(club)"
      >
        <img :src="club.bookDetails.coverImage" class="w-20 h-28" />
        <div class="flex grow flex-col justify-evenly gap-y-1">
          <h4
            class="max-sm:text-lg text-xl !leading-4 font-semibold text-gray-800"
          >
            {{ club.bookDetails.title }}
          </h4>
          <p class="text-sm text-gray-700 border-l-2 border-gray-700 pl-1">
            {{ club.bookDetails.publisher }}
          </p>
          <div class="flex items-center gap-x-2">
            <img :src="club.creator.avatar" class="w-7 h-7 rounded-md" />
            <div class="grow h-1 bg-gray-300">
              <div
                class="relative h-1 bg-[#710F11] after:rounded-full after:h-2 after:w-2 after:content-[' '] after:bg-[#710F11] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-1"
                :style="{
                  width:
                    getProgressBarWidth(
                      club.clubDetails.dateStart,
                      club.clubDetails.dateFin
                    ) + '%',
                }"
              ></div>
            </div>
            <p class="text-xs text-gray-700 font-sans font-semibold">
              {{
                getNumberOfDaysRemaining(
                  club.clubDetails.dateStart,
                  club.clubDetails.dateFin
                )
              }}
              jours restants
            </p>
          </div>
          <div class="flex items-center justify-between gap-x-2">
            <p class="flex items-center text-xs gap-x-1">
              <PersonsIcon class="w-5 h-5 text-gray-500" />
              {{ club.participantNumber }}
              participants
            </p>
            <p class="flex items-center text-xs gap-x-1">
              <PostsIcon class="w-5 h-5 text-gray-500" />
              {{ club.postsNumber }}
              posts
            </p>
            <button
              type="submit"
              class="h-fit flex gap-x-1 font-serif items-center text-xs bg-[#9C5759] hover:bg-[#714042] transition-colors text-gray-100 font-semibold py-1.5 px-3 rounded-lg"
              v-if="!club.isParticipant"
            >
              Participer
            </button>
            <div
              class="h-fit flex gap-x-1 font-serif items-center text-xs bg-gray-100 transition-colors text-gray-600 font-semibold py-1.5 px-3 rounded-lg"
              v-else
            >
              Déjà participant
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PostsIcon from "../../icons/PostsIcon.vue";
import PersonsIcon from "../../icons/PersonsIcon.vue";
import { ref } from "vue";
import ClubModal from "./ClubModal.vue";

import clubs from "../../../data/clubs.json";

const getProgressBarWidth = (dateStart, dateFin) => {
  const dateStartInMs = new Date(dateStart).getTime();
  const dateFinInMs = new Date(dateFin).getTime();
  const currentDateInMs = new Date().getTime();
  const totalDays = dateFinInMs - dateStartInMs;
  const remainingDays = dateFinInMs - currentDateInMs;
  const percentage = Math.floor(
    ((totalDays - remainingDays) / totalDays) * 100
  );
  console.log(percentage);
  return percentage > 100 ? 100 : percentage;
};

const getNumberOfDaysRemaining = (dateStart, dateFin) => {
  const dateStartInMs = new Date(dateStart).getTime();
  const dateFinInMs = new Date(dateFin).getTime();
  const currentDateInMs = new Date().getTime();
  const totalDays = dateFinInMs - dateStartInMs;
  const remainingDays = dateFinInMs - currentDateInMs;
  const numberOfDaysRemaining = Math.ceil(
    remainingDays / (1000 * 60 * 60 * 24)
  );
  return numberOfDaysRemaining < 0 ? 0 : numberOfDaysRemaining;
};

const selectedClub = ref({
  bookDetails: {
    title: "",
    persons: [],
    coverImage: "",
    publishedDate: "",
    publisher: "",
    isbn: "",
  },
  creator: {
    name: "",
    avatar: "",
  },
  clubDetails: {
    description: "",
    dateStart: "",
    dateFin: "",
  },
  participantNumber: 0,
  postsNumber: 0,
  isParticipant: false,
});

const modalIsOpen = ref(false);

const openModal = (club) => {
  document.getElementById("right-content").classList.remove("z-30");
  document.body.classList.add("overflow-hidden");
  selectedClub.value = club;
  modalIsOpen.value = true;
};
const closeModal = () => {
  document.getElementById("right-content").classList.add("z-30");
  document.body.classList.remove("overflow-hidden");
  modalIsOpen.value = false;
  selectedClub.value = {
    bookDetails: {
      title: "",
      persons: [],
      coverImage: "",
      publishedDate: "",
      publisher: "",
      isbn: "",
    },
    creator: {
      name: "",
      avatar: "",
    },
    clubDetails: {
      description: "",
      dateStart: "",
      dateFin: "",
    },
    participantNumber: 0,
    postsNumber: 0,
    isParticipant: false,
  };
};
</script>

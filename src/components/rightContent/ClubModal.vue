<template>
  <div
    :class="[
      [!isOpen ? 'hidden' : 'flex'],
      'w-screen h-screen bg-gray-800/25 fixed left-0 top-0 z-30',
    ]"
  >
    <div
      class="font-serif w-[98vw] sm:w-4/5 lg:w-3/5 h-[90vh] transition-all duration-300 px-8 md:px-10 py-5 m-auto bg-white rounded-lg shadow-lg flex flex-col items-center"
    >
      <div
        class="w-fit self-end bg-zinc-500 px-0.5 py-2 rounded-md text-gray-100 hover:bg-zinc-700 cursor-pointer"
        @click="closeModal"
      >
        <svg-icon type="mdi" :path="mdiClose" class="w-10"></svg-icon>
      </div>
      <div class="w-full h-fit flex flex-col gap-y-5 mt-5">
        <div class="w-full h-fit flex justify-between gap-x-3 border-y-2 py-3">
          <div class="flex flex-1 items-center h-full gap-x-5">
            <img
              :src="selectedClub.bookDetails.coverImage"
              alt="book cover"
              class="w-20 h-fit object-cover rounded-md"
            />
            <div class="flex-1 max-sm:gap-y-1 justify-evenly">
              <div
                class="flex gap-x-1 items-center mb-2"
                v-if="selectedClub.isParticipant"
              >
                <span
                  class="text-[8px] px-[4px] py-[1px] bg-green-500 rounded-full font-sans font-bold text-white"
                >
                  &#10003;
                </span>
                <p class="text-xs text-zinc-700">you are in</p>
              </div>
              <div class="flex gap-x-2 grow justify-between">
                <h3
                  class="max-sm:text-lg text-xl !leading-4 font-semibold text-gray-800"
                >
                  {{ selectedClub.bookDetails.title }}
                </h3>
                <button
                  type="submit"
                  class="h-fit flex gap-x-1 font-serif items-center text-xs bg-[#9C5759] hover:bg-[#714042] transition-colors text-gray-100 font-semibold py-1.5 px-3 rounded-lg"
                >
                  Participate
                </button>
              </div>

              <p class="text-zinc-600 max-sm:text-sm">
                {{ selectedClub.bookDetails.persons.join(", ") }}
              </p>
              <div
                class="w-fit flex gap-x-5 gap-y-1 max-sm:-space-y-1 flex-wrap max-sm:text-xs max-md:text-sm text-zinc-600"
              >
                <p>
                  Publisher:
                  {{ selectedClub.bookDetails.publisher }}
                </p>
                <p>
                  Year:
                  {{ selectedClub.bookDetails.publishedDate }}
                </p>
                <p>
                  ISBN:
                  {{ selectedClub.bookDetails.isbn }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-x-2">
          <img :src="selectedClub.creator.avatar" class="w-7 h-7 rounded-md" />
          <div class="relative grow h-2 rounded-full bg-gray-300">
            <div
              class="relative h-2 rounded-full bg-[#710F11]"
              :style="{
                width:
                  getProgressBarWidth(
                    selectedClub.clubDetails.dateStart,
                    selectedClub.clubDetails.dateFin
                  ) + '%',
              }"
            >
              <div
                class="rounded-sm h-3.5 w-3 bg-[#710F11] absolute top-1/2 -translate-y-1/2 -right-2"
              >
              <div
                class="absolute w-fit flex gap-x-2 mt-8 right-[80%] -translate-x-full"
              >
                <img
                  :src="selectedClub.creator.avatar"
                  class="w-10 h-10 rounded-md"
                />
                <img
                  :src="selectedClub.creator.avatar"
                  class="w-10 h-10 rounded-md"
                />
                <div
                  class="relative h-10 w-10 min-w-10 min-w-max px-1 grid place-content-center border-2 border-gray-400 rounded-md"
                >
                  <p class="font-semibold">+ {{ selectedClub.postsNumber }}</p>
                  <div
                    class="absolute -top-[13px] left-1/2 -translate-x-1/2 h-0 w-0 border-x-8 border-x-transparent border-b-[13px] border-b-gray-400"
                  ></div>
                </div>
              </div>
            </div>
            </div>
            <div
              class="w-full flex justify-between absolute text-[10px] mt-1 font-semibold px-2"
            >
              <p>
                {{
                  new Date(selectedClub.clubDetails.dateStart).toDateString()
                }}
              </p>
              <p>
                {{ new Date(selectedClub.clubDetails.dateFin).toDateString() }}
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-y-1">
            <p
              class="flex items-center gap-x-0.5 text-xs text-gray-700 font-sans font-semibold"
            >
              <svg-icon
                type="mdi"
                :path="mdiClockTimeEightOutline"
                class="w-5"
              ></svg-icon>
              {{
                getNumberOfDaysRemaining(
                  selectedClub.clubDetails.dateStart,
                  selectedClub.clubDetails.dateFin
                )
              }}
              jours restants
            </p>
            <p
              class="flex items-center gap-x-0.5 text-xs text-gray-700 font-sans font-semibold"
            >
              <PostsIcon class="w-5" />
              {{ selectedClub.clubDetails.postsNumber }}
              21 posts produced
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiClose, mdiClockTimeEightOutline } from "@mdi/js";
import PostsIcon from "../../icons/PostsIcon.vue";

const getProgressBarWidth = (dateStart, dateFin) => {
  const dateStartInMs = new Date(dateStart).getTime();
  const dateFinInMs = new Date(dateFin).getTime();
  const currentDateInMs = new Date().getTime();
  const totalDays = dateFinInMs - dateStartInMs;
  const remainingDays = dateFinInMs - currentDateInMs;
  const percentage = Math.floor(
    ((totalDays - remainingDays) / totalDays) * 100
  );
  return percentage;
};

const getNumberOfDaysRemaining = (dateStart, dateFin) => {
  const dateFinInMs = new Date(dateFin).getTime();
  const currentDateInMs = new Date().getTime();
  const remainingDays = dateFinInMs - currentDateInMs;
  const numberOfDaysRemaining = Math.floor(
    remainingDays / (1000 * 60 * 60 * 24)
  );
  return numberOfDaysRemaining;
};

const props = defineProps(["isOpen", "selectedClub"]);
const emits = defineEmits(["closeModal"]);

const closeModal = () => {
  emits("closeModal");
};
</script>

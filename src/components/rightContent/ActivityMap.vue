<template>
  <ClubModal
    :isOpen="modalIsOpen"
    :selectedClub="selectedClub"
    @closeModal="closeModal"
  />
  <div class="w-full h-3/4 mt-auto">
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
  const numberOfDaysRemaining = Math.floor(
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
const clubs = ref([
  {
    bookDetails: {
      title: "The Lord of the Rings",
      persons: ["Nir Eyal", "Ryan Hoover"],
      coverImage:
        "https://m.media-amazon.com/images/I/91DGwmaFdxL._AC_UY327_FMwebp_QL65_.jpg",
      publishedDate: "1954-07-29",
      publisher: "George Allen & Unwin",
      isbn: "0395489318",
    },
    creator: {
      name: "Nir Eyal",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    },
    clubDetails: {
      description:
        "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work.",
      dateStart: "2023-10-29",
      dateFin: "2023-11-08",
    },
    participantNumber: 589,
    postsNumber: 25,
    isParticipant: false,
  },
  {
    bookDetails: {
      title: "The Hobbit",
      persons: ["Nir Eyal", "Ryan Hoover"],
      coverImage: "https://m.media-amazon.com/images/I/815k7sxg6zL._SY466_.jpg",
      publishedDate: "1937-09-21",
      publisher: "George Allen & Unwin",
      isbn: "0345339681",
    },
    creator: {
      name: "Nir Eyal",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    },
    clubDetails: {
      description:
        "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.",
      dateStart: "2023-10-25",
      dateFin: "2023-11-13",
    },
    participantNumber: 589,
    postsNumber: 89,
    isParticipant: true,
  },
  {
    bookDetails: {
      title: "The Fellowship of the Ring",
      persons: ["Nir Eyal", "Ryan Hoover"],
      coverImage: "https://m.media-amazon.com/images/I/91ydFIymD4L._SY342_.jpg",
      publishedDate: "1954-07-29",
      publisher: "George Allen & Unwin",
      isbn: "0618346252",
    },
    creator: {
      name: "Nir Eyal",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    },
    clubDetails: {
      description:
        "The Fellowship of the Ring is the first of three volumes of the epic novel The Lord of the Rings by the English author J. R. R. Tolkien. It is followed by The Two Towers and The Return of the King.",
      dateStart: "2023-10-15",
      dateFin: "2023-11-01",
    },
    participantNumber: 422,
    postsNumber: 60,
    isParticipant: false,
  },
  {
    bookDetails: {
      title: "The Two Towers",
      persons: ["Nir Eyal", "Ryan Hoover"],
      coverImage:
        "https://m.media-amazon.com/images/I/81hjPZ5axOL._AC_UY327_FMwebp_QL65_.jpg",
      publishedDate: "1954-11-11",
      publisher: "George Allen & Unwin",
      isbn: "0007129718",
    },
    creator: {
      name: "Nir Eyal",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    },
    clubDetails: {
      description:
        "The Two Towers is the second volume of J. R. R. Tolkien's high fantasy novel The Lord of the Rings. It is preceded by The Fellowship of the Ring and followed by The Return of the King.",
      dateStart: "2023-10-22",
      dateFin: "2023-11-07",
    },
    participantNumber: 589,
    postsNumber: 10,
    isParticipant: false,
  },
  {
    bookDetails: {
      title: "The Return of the King",
      persons: ["Nir Eyal", "Ryan Hoover"],
      coverImage:
        "https://m.media-amazon.com/images/I/714ifTQtqwL._AC_UY327_FMwebp_QL65_.jpg",
      publishedDate: "1955-10-20",
      publisher: "George Allen & Unwin",
      isbn: "0618129111",
    },
    creator: {
      name: "Nir Eyal",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    },
    clubDetails: {
      description:
        "The Return of the King is the third and final volume of J. R. R. Tolkien's The Lord of the Rings, following The Fellowship of the Ring and The Two Towers. The story begins in the kingdom of Gondor, which is soon to be attacked by the Dark Lord Sauron.",
      dateStart: "2023-10-19",
      dateFin: "2023-11-10",
    },
    participantNumber: 589,
    postsNumber: 35,
    isParticipant: true,
  },
  {
    bookDetails: {
      title: "The Silmarillion",
      persons: ["Nir Eyal", "Ryan Hoover"],
      coverImage:
        "https://m.media-amazon.com/images/I/91d9vnqoupL._AC_UY327_FMwebp_QL65_.jpg",
      publishedDate: "1977-09-15",
      publisher: "George Allen & Unwin",
      isbn: "0618391118",
    },
    creator: {
      name: "Nir Eyal",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    },
    clubDetails: {
      description:
        "The Silmarillion is a collection of mythopoeic works by English writer J. R. R. Tolkien, edited and published posthumously by his son, Christopher Tolkien, in 1977, with assistance from Guy Gavriel Kay.",
      dateStart: "2023-10-25",
      dateFin: "2023-11-15",
    },
    participantNumber: 589,
    postsNumber: 28,
    isParticipant: false,
  },
  {
    bookDetails: {
      title: "Unfinished Tales of Númenor and Middle-earth",
      persons: ["Nir Eyal", "Ryan Hoover"],
      coverImage:
        "https://m.media-amazon.com/images/I/810Vqx3DKqL._AC_UY327_FMwebp_QL65_.jpg",
      publishedDate: "1980-10-01",
      publisher: "George Allen & Unwin",
      isbn: "0618083510",
    },
    creator: {
      name: "Nir Eyal",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    },
    clubDetails: {
      description:
        "Unfinished Tales of Númenor and Middle-earth is a collection of stories and essays by J. R. R. Tolkien that were never completed during his lifetime, but were edited by his son Christopher Tolkien and published in 1980.",
      dateStart: "2023-10-01",
      dateFin: "2023-11-01",
    },
    participantNumber: 589,
    postsNumber: 49,
    isParticipant: false,
  },
  {
    bookDetails: {
      title: "The Children of Húrin",
      persons: ["Nir Eyal", "Ryan Hoover"],
      coverImage:
        "https://m.media-amazon.com/images/I/91vB6Qe2rfL._AC_UY327_FMwebp_QL65_.jpg",
      publishedDate: "2007-04-17",
      publisher: "HarperCollins",
      isbn: "0547928211",
    },
    creator: {
      name: "Nir Eyal",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    },
    clubDetails: {
      description:
        "The Children of Húrin is an epic fantasy novel which forms the completion of a tale by J. R. R. Tolkien. He wrote the original version of the story in the late 1910s, revised it several times later, but did not complete it before his death in 1973.",
      dateStart: "2023-10-20",
      dateFin: "2023-11-10",
    },
    participantNumber: 589,
    postsNumber: 52,
    isParticipant: true,
  },
]);

const openModal = (club) => {
  document.body.classList.add("overflow-hidden");
  selectedClub.value = club;
  modalIsOpen.value = true;
};
const closeModal = () => {
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

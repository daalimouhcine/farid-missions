<template>
  <div class="flex gap-x-5">
    <div class="fixed left-0 w-1/12 max-sm:hidden h-screen bg-blue-200">
      <!-- Left content -->
    </div>
    <div
      class="max-sm:w-10/12 max-md:w-9/12 w-6/12 bg-gray-100 max-md:mr-0 max-md:-translate-x-2 mx-auto -translate-x-[5vw] border-x-[4px] px-5 border-gray-300"
    >
      <div class="w-full h-[200vh] my-5 space-y-10">
        <Card />
        <!-- the scrollable content goes here -->
        <div
          v-for="(post, idx) in posts"
          :key="post.id"
          @click="openModal(idx)"
          class="relative w-full space-y-5 px-3 md:px-10 pt-3 md:pt-5 pb-5 md:pb-10 shadow-md cursor-pointer"
        >
          <div
            class="w-1.5 rounded-full h-full bg-red-500 absolute top-0 left-0 -translate-x-6"
          >
            <div class="w-fit h-fit absolute -top-2 -left-full">
              <OpenBookIcon />
            </div>
          </div>
          <PostComponent :post="post" />
        </div>
      </div>
    </div>
    <div class="fixed right-0 w-3/12 max-md:hidden h-screen bg-green-200">
      <!-- Right content -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PostComponent from "../components/post/PostComponent.vue";
import Card from "../components/scrollTask/Card.vue";
import OpenBookIcon from "../icons/OpenBookIcon.vue";

const posts = ref([
  {
    id: "1",
    profile: {
      fullName: "Jon Tyson",
      userName: "@jontyson",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    },
    content:
      "Novo denique perniciosoque exemplo idem Gallus ausus est inire flagitium grave, quod Romae cum ultimo dedecore temptasse aliquando dicitur Gallienus, et adhibitis paucis clam ferro succinctis vesperi per tabernas palabatur et conpita quaeritando Graeco sermone, cuius erat inpendio gnarus, quid de Caesare quisque sentiret. et haec confidenter agebat in urbe ubi pernoctantium luminum claritudo dierum solet imitari fulgorem. postremo agnitus saepe iamque, si prodisset, conspicuum se fore contemplans, non nisi luce palam egrediens ad agenda quae putabat seria cernebatur. et haec quidem medullitus multis gementibus agebantur.",
    likeNumber: "278",
    comments: [
      {
        id: "1",
        profile: {
          fullName: "Hilo Baylouni",
          img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
        },
        content:
          "Novo denique perniciosoque exemplo idem Gallus ausus est inire flagitium grave, quod Romae cum ultimo dedecore temptasse aliquando dicitur Gallienus, et adhibitis paucis clam ferro succinctis vesperi per tabernas palabatur et conpita quaeritando Graeco sermone, cuius erat inpendio gnarus",
        likeNumber: "36",
        responses: [
          {
            id: "1",
            profile: {
              fullName: "Hilo Baylouni",
              img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
            },
            content:
              "Novo denique p inire flagitium grave, quod Romae cum ultimo dedecore temptasse aliquando dicitur Gallienus, et adhibitis paucis clam ferro succinctis vesperi per tabernas palabatur et conpita quaeritando Graeco sermone, cuius erat inpendio gnarus",
            likeNumber: "36",
          },
          {
            id: "2",
            profile: {
              fullName: "Mouhcine Daali",
              img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
            },
            content:
              "se aliquando dicitur Gallienusraeco sermone, cuius erat inpendio gnarus",
            likeNumber: "36",
          },
          {
            id: "3",
            profile: {
              fullName: "Hilo Baylouni",
              img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
            },
            content:
              "Novo denique perniciosoqueur Gallienus, et adhibitis paucis claarus",
            likeNumber: "36",
          },
        ],
      },
      {
        id: "2",
        profile: {
          fullName: "Hilo Baylouni",
          img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
        },
        content:
          "Et adhibitis paucis clam ferro succinctis vesperi per tabernas palabatur et conpita quaeritando Graeco sermone, cuius erat inpendio gnarus",
        likeNumber: "36",
        responses: [],
      },
      {
        id: "3",
        profile: {
          fullName: "Hilo Baylouni",
          img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
        },
        content:
          "Novo denique perniciosoque exemplo idem Galluallienus, et adhibitis",
        likeNumber: "36",
        responses: [
          {
            profile: {
              fullName: "Mouhcine Daali",
              img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
            },
            content:
              "se aliquando dicitur Gallienusraeco sermone, cuius erat inpendio gnarus",
            likeNumber: "36",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    profile: {
      fullName: "test test",
      userName: "@jontyson",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    },
    content:
      "stremo agnitus saepe iamque, si prodisset, conspicuum se fore contemplans, non nisi luce palam egrediens ad agenda quae putabat seria cernebatur. et haec quidem medullitus multis gementibus agebantur.",
    likeNumber: "278",
    comments: [
      {
        id: "1",
        profile: {
          fullName: "Hilo Baylouni",
          img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
        },
        content:
          "Novo denique perniciosoque exemplo, et adhibitis paucis clam fersermone, cuius erat inpendio gnarus",
        likeNumber: "36",
        responses: [
          {
            id: "1",
            profile: {
              fullName: "Mouhcine Daali",
              img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
            },
            content:
              "se aliquando dicitur Gallienusraeco sermone, cuius erat inpendio gnarus",
            likeNumber: "36",
          },
          {
            id: "2",
            profile: {
              fullName: "Hilo Baylouni",
              img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
            },
            content:
              "Novo denique perniciosoqueur Gallienus, et adhibitis paucis claarus",
            likeNumber: "36",
          },
        ],
      },
      {
        id: "2",
        profile: {
          fullName: "Hilo Baylouni",
          img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
        },
        content:
          "Et adhibitis paucis clam ferro succinctis vesperi per tabernas palabatur et conpita quaeritando Graeco sermone, cuius erat inpendio gnarus",
        likeNumber: "36",
        responses: [],
      },
      {
        id: "3",
        profile: {
          fullName: "Hilo Baylouni",
          img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
        },
        content:
          "Novo denique perniciosoque exemplo idem Galluallienus, et adhibitis",
        likeNumber: "36",
        responses: [
          {
            id: "1",
            profile: {
              fullName: "Mouhcine Daali",
              img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
            },
            content:
              "se aliquando dicitur Gallienusraeco sermone, cuius erat inpendio gnarus",
            likeNumber: "36",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    profile: {
      fullName: "Mouhcine Daali",
      userName: "@jontyson",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    },
    content:
      "Novo denique perniciosclam ferro succinctis vesperi per tabernas palabatur et conp non nisi luce palam egrediens ad agenda quae putabat seria cernebatur. et haec quidem medullitus multis gementibus agebantur.",
    likeNumber: "278",
    comments: [],
  },
]);
</script>

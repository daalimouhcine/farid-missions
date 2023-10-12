<template>
  <h1 class="w-fit mx-auto text-3xl font-bold my-5">PostModal</h1>
  <div class="w-full flex flex-col gap-y-10 items-center">
    <PostComponent v-for="post in posts" :key="post.id" :post="post" />
  </div>

</template>

<script setup>
import { ref } from "vue";
import PostComponent from "../components/post/PostComponent.vue";

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
        profile: {
          fullName: "Hilo Baylouni",
          img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
        },
        content:
          "Novo denique perniciosoque exemplo idem Gallus ausus est inire flagitium grave, quod Romae cum ultimo dedecore temptasse aliquando dicitur Gallienus, et adhibitis paucis clam ferro succinctis vesperi per tabernas palabatur et conpita quaeritando Graeco sermone, cuius erat inpendio gnarus",
        likeNumber: "36",
        responses: [
          {
            profile: {
              fullName: "Hilo Baylouni",
              img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
            },
            content:
              "Novo denique p inire flagitium grave, quod Romae cum ultimo dedecore temptasse aliquando dicitur Gallienus, et adhibitis paucis clam ferro succinctis vesperi per tabernas palabatur et conpita quaeritando Graeco sermone, cuius erat inpendio gnarus",
            likeNumber: "36",
          },
          {
            profile: {
              fullName: "Mouhcine Daali",
              img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
            },
            content:
              "se aliquando dicitur Gallienusraeco sermone, cuius erat inpendio gnarus",
            likeNumber: "36",
          },
          {
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
        profile: {
          fullName: "Hilo Baylouni",
          img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
        },
        content:
          "Novo denique perniciosoque exemplo, et adhibitis paucis clam fersermone, cuius erat inpendio gnarus",
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
          {
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

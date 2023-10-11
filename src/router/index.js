import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "PostModal",
      component: () => import("../views/PostModal.vue"),
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: () => import("../views/NotFound.vue"),
    }
  ],
});

export default router;

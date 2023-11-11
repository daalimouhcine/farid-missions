import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "PostView",
      component: () => import("../views/PostView.vue"),
    },
    {
      path: "/scroll-task",
      name: "ScrollTaskView",
      component: () => import("../views/ScrollTaskView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;

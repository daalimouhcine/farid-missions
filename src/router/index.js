import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
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

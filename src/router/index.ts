// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: '/',redirect: '/dashboard' },
  {

    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () =>
          import( "@/pages/dashboard.vue"),
      },
      {
        path: "prostpects",
        name: "prostpects",
        component: () =>
          import( "@/pages/prostpects.vue"),
      },
    ],

  },
  {
    path: "/auth/login",
    name: "Login",
    component: () =>
    import("@/pages/login.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

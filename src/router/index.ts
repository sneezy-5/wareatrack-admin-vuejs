// Composables
import { checkIfLogged } from "@/_helpers/auth-check";
import { authGuard } from "@/_helpers/auth-guard";
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
      {
        path: "subscriptions",
        name: "subscriptions",
        component: () =>
          import( "@/pages/subscriptions.vue"),
      },
    ],

  },
  {
    path: "/auth/login",
    name: "login",
    component: () =>
    import("@/pages/login.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


router.beforeEach((to, from, next) => {



  // Vérification de l'accès au dashboard
  if (to.matched.some(record => record.name === 'dashboard')) {
    authGuard();

  }

  // Vérification de l'accès à la page de connexion
  if (to.matched.some(record => record.name === 'login' )) {
    checkIfLogged();
  }



  next()
})

export default router;

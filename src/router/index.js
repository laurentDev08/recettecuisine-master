import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBase from "/data/db.json";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/entre",
      name: "entre",
      component: () => import("../views/Entre.vue"),
    },
    {
      path: "/entre/:id",
      name: "entreDetails",
      component: () => import("../components/Details/EntreDetails.vue"),
      beforeEnter: (to) => {
        const id = parseInt(to.params.id);
        const localDB = DataBase.recette;
        const exists = localDB.some((recette) => recette.id === id);
        if (!exists) return { name: "NotFound" };
      },
    },
    {
      path: "/plat",
      name: "plat",
      component: () => import("../views/Plat.vue"),
    },
    {
      path: "/plat/:id",
      name: "platDetails",
      component: () => import("../components/Details/PlatDetails.vue"),
      beforeEnter: (to) => {
        const id = parseInt(to.params.id);
        const localDB = DataBase.recette;
        const exists = localDB.some((recette) => recette.id === id);
        if (!exists) return { name: "NotFound" };
      },
    },
    {
      path: "/dessert",
      name: "dessert",
      component: () => import("../views/Dessert.vue"),
    },
    {
      path: "/dessert/:id",
      name: "dessertDetails",
      component: () => import("../components/Details/DessertDetails.vue"),
      beforeEnter: (to) => {
        const id = parseInt(to.params.id);
        const localDB = DataBase.recette;
        const exists = localDB.some((recette) => recette.id === id);
        if (!exists) return { name: "NotFound" };
      },
    },
    {
      path: "/boisson",
      name: "boisson",
      component: () => import("../views/Boisson.vue"),
    },
    {
      path: "/boisson/rhum/:id",
      name: "rhum",
      component: () => import("../components/Details/RhumDetails.vue"),
      beforeEnter: (to) => {
        const id = parseInt(to.params.id);
        const localDB = DataBase.recette;
        const exists = localDB.some((recette) => recette.id === id);
        if (!exists) return { name: "NotFound" };
      },
    },
    {
      path: "/boisson/punch/:id",
      name: "punch",
      component: () => import("../components/Details/PunchDetails.vue"),
      beforeEnter: (to) => {
        const id = parseInt(to.params.id);
        const localDB = DataBase.recette;
        const exists = localDB.some((recette) => recette.id === id);
        if (!exists) return { name: "NotFound" };
      },
    },
    {
      path: "/boisson/jus/:id",
      name: "jus",
      component: () => import("../components/Details/JusDetails.vue"),
      beforeEnter: (to) => {
        const id = parseInt(to.params.id);
        const localDB = DataBase.recette;
        const exists = localDB.some((recette) => recette.id === id);
        if (!exists) return { name: "NotFound" };
      },
    },
    {
      path: "/avis",
      name: "avis",
      component: () => import("../views/Avis.vue"),
    },
    {
      path: "/research",
      name: "research",
      component: () => import("../components/Research.vue"),
    },
    {
      path: "/:NotFound(.*)*",
      name: "NotFound",
      component: () => import("../components/NotFound.vue"),
    },
  ],
});

export default router

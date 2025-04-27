import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home.vue";

const router = createRouter({
  history: createWebHashHistory(), // ✅ Use hash mode
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: () => import("./pages/About.vue") },
    { path: "/projects", name: "Projects", component: () => import("./pages/UnderDev.vue") },
    { path: "/blog", name: "Blog", component: () => import("./pages/UnderDev.vue") },
    { path: "/links", name: "Link", component: () => import("./pages/Links.vue") },
    { path: "/freebies", name: "Freebies", component: () => import("./pages/UnderDev.vue") },
    { path: "/download/:fileName", name: "DownloadFile", component: () => import("./pages/DownloadFile.vue") },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: () => import("./pages/NotFound.vue") }, // 404 Route
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return { top: 0, behavior: "smooth" }; 
  },
});

export default router;

import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";

const routes = createRouter({
  history: createWebHashHistory(), // ✅ Use hash mode
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: Home },
    { path: "/projects", name: "Projects", component: Home },
    { path: "/blog", name: "Blog", component: Home },
    { path: "/link", name: "Link", component: Home },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }, // 404 Route
  ],
});

export default routes;

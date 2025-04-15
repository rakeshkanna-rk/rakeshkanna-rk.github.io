import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Links from "./pages/Links.vue";
import NotFound from "./pages/NotFound.vue";
import UnderDev from "./pages/UnderDev.vue";
import DownloadFile from "./pages/DownloadFile.vue";

const routes = createRouter({
  history: createWebHashHistory(), // ✅ Use hash mode
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/projects", name: "Projects", component: UnderDev },
    { path: "/blog", name: "Blog", component: UnderDev },
    { path: "/links", name: "Link", component: Links },
    {path: "/freebies", name: "Freebies", component: UnderDev},
    {path: "/download/:fileName", name: "DownloadFile", component: DownloadFile,},
    {path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }, // 404 Route
  ],
});

export default routes;

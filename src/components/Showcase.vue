<template>
  <div class="showcase-container" ref="containerRef">
    <!-- Left Scrollable Content -->
    <div class="scroll-left" ref="scrollableRef">
      <div
        v-for="(project, index) in projects"
        :key="index"
        :id="'project-' + index"
        :ref="(el) => (projectRefs[index] = el)"
        class="project-box"
        v-motion
        :initial="{ opacity: 0, y: 50, scale: 0.5 }"
        :visible="{ opacity: 1, y: 0, scale: 1 }"
        :duration="600"
      >
        <img
          @click="openLink(project.link)"
          :src="project.img"
          :alt="project.title"
        />
      </div>
    </div>

    <!-- Right Static Content but scroll triggers left -->
    <div class="sticky-right" ref="rightPanelRef">
      <div
        v-if="activeProject"
        class="project-info"
        v-motion
        :initial="{ opacity: 0, x: 20 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
        :leave="{ opacity: 0, x: -20, transition: { duration: 300 } }"
      >
        <p class="project-type">{{ activeProject.type }}</p>
        <h2><span class="line"></span> {{ activeProject.title }}</h2>

        <div class="desc-list" v-for="(line, i) in activeProject.desc" :key="i">
          {{ line }}
        </div>

        <ul class="tags">
          <li v-for="(tag, i) in activeProject.tags" :key="i">
            {{ tag }}
          </li>
        </ul>

        <div class="visit">
          <RotatingLink
            :link="activeProject.link"
            :ifblock="true"
            :text="'🔗 Visit Project'"
          />

          <RotatingLink
            v-if="activeProject.web"
            :link="activeProject.web"
            :ifblock="activeProject.web"
            :text="'🌐 Live Website'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick, watch } from "vue";
import RotatingLink from "./buttons/RotaingLink.vue";
import { useFetchData } from "@/composables/useFetchData";

const url =
  "https://rakeshkanna-rk.github.io/database/portfolio/homeProjects.json";
const { data: projects, isLoading, error } = useFetchData(url, "homeProjects");

const activeIndex = ref(0);
const projectRefs = {};
const scrollableRef = ref(null);
const rightPanelRef = ref(null);
const containerRef = ref(null);
const isShowcaseVisible = ref(false);

// ✅ FIXED: projects is a ref, so access its value
const activeProject = computed(() => {
  return projects.value?.[activeIndex.value];
});

onMounted(() => {
  // Wait for DOM updates
  nextTick(() => {
    if (projects.value?.length) {
      setupObservers();
    }

    if (rightPanelRef.value && scrollableRef.value) {
      rightPanelRef.value.addEventListener(
        "wheel",
        (e) => {
          if (!isShowcaseVisible.value) return;

          const scrollEl = scrollableRef.value;
          const atTop = scrollEl.scrollTop === 0;
          const atBottom =
            scrollEl.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight;

          const scrollingDown = e.deltaY > 0;
          const scrollingUp = e.deltaY < 0;

          const canScrollDown = !atBottom && scrollingDown;
          const canScrollUp = !atTop && scrollingUp;

          if (canScrollDown || canScrollUp) {
            e.preventDefault();
            scrollEl.scrollTop += e.deltaY;
          }
        },
        { passive: false }
      );
    }
  });
});

// 📦 Run again when data is loaded
watch(
  () => projects.value,
  (val) => {
    if (val?.length) {
      nextTick(() => {
        setupObservers();
      });
    }
  }
);

// 🧠 Observer function
function setupObservers() {
  const projectObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.id.split("-")[1]);
          activeIndex.value = index;
        }
      });
    },
    { threshold: 0.5 }
  );

  Object.values(projectRefs).forEach((el) => {
    if (el) projectObserver.observe(el);
  });

  const containerObserver = new IntersectionObserver(
    ([entry]) => {
      isShowcaseVisible.value = entry.intersectionRatio > 0.9;
    },
    { threshold: [0, 0.9, 1.0] }
  );

  if (containerRef.value) {
    containerObserver.observe(containerRef.value);
  }
}

function openLink(link) {
  window.open(link, "_blank");
}
</script>

<style scoped>
.showcase-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.scroll-left {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.scroll-left::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.scroll-left {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  overflow-y: auto;
  padding: 2rem;
  box-sizing: border-box;
  gap: 20px;
}

.project-box {
  background: linear-gradient(
    60deg,
    rgba(255, 0, 170, 1),
    rgba(255, 77, 64, 1),
    rgba(204, 79, 92, 1),
    rgba(115, 0, 255, 1)
  );
  padding: 5px 5px 0px 5px;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  background-size: 300% 300%;
  animation: moveGradient 6s ease infinite;
}

@keyframes moveGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.project-box img {
  width: 100%;
  border-radius: 0.75rem;
  cursor: pointer;
}

.sticky-right {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 50%;
  height: 100vh;
  overflow: hidden;
  padding: 2rem 2rem 2rem 4rem;
  box-sizing: border-box;
  position: relative;
}

@media screen and (max-width: 1200px) {
  .showcase-container {
    width: 100%;
    height: 70vh;
  }

  .scroll-left,
  .sticky-right {
    height: 70vh;
  }
}

@media screen and (max-width: 900px) {
  .showcase-container {
    display: none;
  }
}

.project-info {
  position: sticky;
  top: 20%;
  color: white;
  font-family: var(--primary-font);
}

.project-info h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.project-info h2 {
  font-size: 2rem;
  margin-bottom: 0.25rem;
  font-weight: normal;
}

.project-type {
  display: inline;
  flex-shrink: 1;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: var(--glass-color-03);
  border: 0.1px solid #ffffff3e;
  color: var(--white-color);
  font-family: var(--primary-font);
}

.desc-list {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: normal;
  opacity: 0.8;
  line-height: 1.7rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
  padding: 1rem 0;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.tags li {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: var(--glass-color-03);
  color: var(--white-color);
  font-family: var(--primary-font);
  font-size: 0.875rem;
  border: 0.1px solid #ffffff3e;
}

.links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.25rem;
}

.visit-link {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: var(--white-color);
  background: #111;
  border-radius: 0.5rem;
}

.link {
  position: relative;
  display: inline-flex;
  padding: 2px;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: start;
  overflow: hidden;
  z-index: 0;
}

.link::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: conic-gradient(
    from 0deg,
    rgba(255, 0, 170, 1),
    rgba(255, 77, 64, 1),
    rgba(204, 79, 92, 1),
    rgba(115, 0, 255, 1),
    rgba(255, 0, 170, 1)
  );
  animation: rotateGradient 4s linear infinite;
  border-radius: inherit;
}

@keyframes rotateGradient {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.line {
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 5px;
  border-radius: 5px;
  background: #9400ae;
}

.visit {
  display: flex;
  gap: 1rem;
}
</style>

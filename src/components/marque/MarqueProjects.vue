<template>
  <div
    class="marquee-container"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
  >
    <div class="marquee-track" :class="{ paused }">
      <div
        class="image-wrapper"
        v-for="(img, index) in doubleImages"
        :key="index"
        @mouseenter="hovered = index"
        @mouseleave="hovered = null"
      >
        <img
          :src="img.img"
          class="marquee-img"
          :class="{ clear: hovered === index }"
          :alt="img.title"
        />
      </div>
    </div>
    <div class="view-cta">
      <h2>View Projects</h2>
      <p>Check out my work</p>

      <img @click="goToProjects" src="@/assets/arrow-right.svg" alt="arrow" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useFetchData } from "@/composables/useFetchData";

const url =
  "https://rakeshkanna-rk.github.io/database/portfolio/homeProjects.json";
const { data: projimgs, isLoading, error } = useFetchData(url, "projimgs");

const paused = ref(false);
const hovered = ref(null);
const router = useRouter();

const goToProjects = () => {
  router.push({ path: "/projects" });
};

// ✅ Safely unwrap the images only if they're loaded
const doubleImages = computed(() => {
  if (Array.isArray(projimgs.value)) {
    return [...projimgs.value, ...projimgs.value];
  }
  return []; // fallback until data is ready
});
</script>

<style scoped>
.marquee-container {
  overflow: hidden;
  width: 100%;
  position: relative;
  background: #111;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: scroll 40s linear infinite;
}

.marquee-track.paused {
  animation-play-state: paused;
}

.image-wrapper {
  flex-shrink: 0;
  height: 100%;
}

.marquee-img {
  width: 400px;
  height: 100%;
  object-fit: cover;
  filter: blur(4px);
  transition: filter 0.3s ease;
}

.marquee-img.clear {
  filter: blur(0px);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.view-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: -100%;
  color: var(--white-color);
  font-family: var(--primary-font);
  line-height: 0%;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: 20px;
  background: #000000c3;
  backdrop-filter: blur(6.5px);
  transition: bottom 0.3s ease;
}

.marquee-container:hover .view-cta {
  bottom: 0;
}

.view-cta img {
  padding: 10px;
  background: var(--white-color);
  backdrop-filter: blur(6.5px);
  border-radius: 100px;
  position: absolute;
  right: 50px;
}

@media screen and (max-width: 601px) {
  .marquee-img {
    filter: blur(0px);
  }
}
</style>

<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import ProjectCard from "@/components/sub/ProjectCard.vue";
import { useFetchData } from "@/composables/useFetchData";
import { ref } from "vue";

const designurl =
  "https://rakeshkanna-rk.github.io/database/portfolio/designProjects.json";
const { data: designprojects } = useFetchData(designurl, "designProjects");

const devurl =
  "https://rakeshkanna-rk.github.io/database/portfolio/codeProjects.json";
const { data: codeprojects } = useFetchData(devurl, "codeProjects");

// Control the active tab
const activeTab = ref("design");
</script>

<template>
  <img
    src="@/assets/bg/stone-bg.avif"
    class="bg-img"
    alt="background image"
    fetchpriority="high"
    loading="lazy"
  />

  <SectionHeader
    :subheading="'PROJECTS'"
    :mainHeading="'Showcase'"
    :shimmerText="'Projects'"
  />

  <div class="projects">
    <div class="tab-buttons">
      <button
        :class="{ active: activeTab === 'design' }"
        @click="activeTab = 'design'"
      >
        🎨 Design
      </button>
      <button
        :class="{ active: activeTab === 'development' }"
        @click="activeTab = 'development'"
      >
        💻 Development
      </button>
    </div>

    <div class="tab-content">
      <div v-show="activeTab === 'design'" class="tab-panel">
        <div class="cards">
          <ProjectCard
            :data="project"
            v-for="(project, index) in designprojects"
            :key="index"
          />
        </div>
      </div>
      <div v-show="activeTab === 'development'" class="tab-panel">
        <div class="cards">
          <ProjectCard
            :data="project"
            v-for="(project, index) in codeprojects"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px 50px 20px;
}
.tab-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;
}

.tab-buttons button {
  all: unset;
  font-family: var(--primary-font);
  color: var(--white-color);
  padding: 17.5px 40px;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 20px;
  font-size: var(--h2);
  background: var(--glass-color-03);
  backdrop-filter: blur(6.5px);
}

.tab-buttons button.active {
  color: white;
  border-color: #149ed4;
}

.tab-content {
  margin-top: 20px;
  color: white;
  font-family: var(--primary-font);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.tab-panel {
  animation: fade 0.5s ease;
  width: 100%;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cards {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

@media screen and (max-width: 601px) {
  .tab-buttons button {
    font-size: var(--h3);
    width: 80%;
    text-align: center;
  }
}
</style>

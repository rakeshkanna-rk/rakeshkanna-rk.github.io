<template>
  <div class="showcase-mobi">
    <div
      class="showcase-mobi-container"
      v-for="(project, index) in projects"
      :key="index"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="600"
    >
      <ProjectCard :data="project" />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "./sub/ProjectCard.vue";
import { useFetchData } from "@/composables/useFetchData";

const url =
  "https://rakeshkanna-rk.github.io/database/portfolio/homeProjects.json";
const { data: projects, isLoading, error } = useFetchData(url, "homeProjects");
</script>

<style scoped>
.showcase-mobi {
  display: none;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1rem;
  padding: 0 1rem;
  margin-bottom: 7rem;
}

@media screen and (max-width: 900px) {
  .showcase-mobi {
    display: flex;
  }
}
</style>

<template>
  <div class="card">
    <div class="img-container">
      <img :src="activeProject.img" alt="data.img" />
    </div>
    <p class="project-type">{{ activeProject.type }}</p>
    <h2><span class="line"></span> {{ activeProject.title }}</h2>

    <div class="desc-list" v-for="(line, i) in activeProject.desc" :key="i">
      {{ line }}
    </div>

    <div class="tags">
      <li v-for="(tag, i) in activeProject.tags" :key="i">{{ tag }}</li>
    </div>

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
</template>

<script setup>
import RotatingLink from "../buttons/RotaingLink.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const activeProject = props.data;
</script>

<style scoped>
.card {
  max-width: 500px;
  width: 100%;
  margin: auto;
  padding: 2rem;
  border-radius: 1.25rem;
  background: var(--glass-color-02, rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--white-color);
  font-family: var(--primary-font);
}

.img-container img {
  width: 100%;
  border-radius: 0.75rem;
  object-fit: cover;
  margin-bottom: 1rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
}

.card .project-type {
  display: inline-block;
  padding: 0.4rem 0.75rem;
  border-radius: 0.5rem;
  background: var(--glass-color-03);
  border: 0.1px solid #ffffff3e;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.card h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card .desc-list {
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 1rem;
}

.card .tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.card .tags li {
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  border-radius: 0.5rem;
  background: var(--glass-color-03);
  border: 0.1px solid #ffffff3e;
  white-space: nowrap;
}

.card .visit {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

@media screen and (max-width: 768px) {
  .card {
    padding: 1.5rem;
  }

  .card h2 {
    font-size: 1.5rem;
  }

  .card .desc-list {
    font-size: 0.9rem;
  }

  .card .tags li {
    font-size: 0.8rem;
  }
}
</style>

<script setup>
import { useFetchData } from "@/composables/useFetchData";

const url =
  "https://rakeshkanna-rk.github.io/database/portfolio/TechStack.json";
const { data: techStack, isLoading, error } = useFetchData(url, "TechStack");
</script>

<template>
  <div class="techstack-wrapper" id="skills">
    <div class="tech-stack">
      <div class="stack" v-for="(stack, index) in techStack" :key="index">
        <img :src="stack.img" :alt="stack.name" />
        <p>{{ stack.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.techstack-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 100px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 90%;
  max-width: 900px;
  padding: 0 20px;
}

.stack {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 5px 15px;
  border-radius: 15px;
  background: var(--glass-color-05);
  backdrop-filter: blur(6.5px);
  color: var(--white-color);
  border: 0.1px solid #ffffff3e;
  font-family: var(--primary-font);
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.2s ease-in-out;
}

.stack img {
  width: 30px;
  height: 30px;
}

.stack p {
  background: linear-gradient(75deg, #ffffff, rgb(255, 255, 255) 53.2394%, rgb(255, 255, 255));
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.stack:hover {
  rotate: 5deg;
}

.stack:hover img{
  scale: 1.2;
}

.stack:hover p {
  background: linear-gradient(90deg, #2d53ff, rgb(0, 234, 255) );
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

@media screen and (max-width: 601px) {
  .stack {
    padding: 5px 10px;
  }

  .stack img {
    width: 25px;
    height: 25px;
  }
}
</style>

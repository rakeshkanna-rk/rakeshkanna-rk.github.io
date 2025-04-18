<template>
  <div class="marquee-container">
    <div class="marquee">
      <div class="marquee-content">
        <div v-for="(stack, index) in techStack" :key="index" class="grid-item">
          <img :src="stack.img"  :alt="stack.name" />
        </div>
        <!-- Duplicate content for smooth infinite scrolling -->
        <div
          v-for="(stack, index) in techStack"
          :key="'dup-' + index"
          class="grid-item"
        >
          <img :src="stack.img" :alt="stack.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useFetchData } from "@/func/useFetchData";

const url = "https://rakeshkanna-rk.github.io/database/portfolio/TechStack.json";
const { data: TechStack, isLoading, error } = useFetchData(url, "TechStack");

const techStack = TechStack;
</script>

<style scoped>
.marquee-container {
  width: 250px;
  height: 300px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.marquee {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  width: 100%;
}

.marquee-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  animation: scrollUp 5s linear infinite;
}

/* Keyframes for infinite scrolling effect */
@keyframes scrollUp {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50%);
  }
}

.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.grid-item img {
  width: 40px;
  height: 40px;
}
</style>

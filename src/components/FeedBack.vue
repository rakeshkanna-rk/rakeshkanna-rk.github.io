<script setup>
import { useFetchData } from "@/composables/useFetchData";

const url = "https://rakeshkanna-rk.github.io/database/portfolio/feedback.json";
const { data: feedback, isLoading, error } = useFetchData(url, "feedBack");
</script>

<template>
  <div class="feedback" id="feedback">
    <div class="feedback-track">
      <div class="feedback-card" v-for="(item, index) in feedback" :key="index">
        <div class="who">
          <img :src="item.img" alt="feedback logo" />
          <div class="who-title">
            <h3>{{ item.name }}</h3>
            <p>{{ item.who }}</p>
          </div>
        </div>
        <p class="feedback-text">{{ item.feedback }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.feedback {
  width: 100%;
  overflow: hidden;
  padding-bottom: 100px;
}

.feedback-track {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 10px 0;
}

@media screen and (min-width: 600px) {
  .feedback-track {
    justify-content: center;
  }
    
}



/* Hide scrollbar */
.feedback-track::-webkit-scrollbar {
  display: none;
}
.feedback-track {
  scrollbar-width: none; /* Firefox */
}

.feedback-card {
  flex: 0 0 auto;
  scroll-snap-align: start;
  max-width: 300px;
  width: 300px;
  padding: 1.5rem;
  border-radius: 1.25rem;
  background: var(--glass-color-02, rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--white-color);
  font-family: var(--primary-font);
  transition: all 0.3s ease;
}

.who {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.who img {
  width: 50px;
  height: 50px;
  border-radius: 25%;
}

.who-title {
  display: flex;
  flex-direction: column;
  align-items: start;
  line-height: 0;
}

.who-title h3 {
  font-size: var(--h3);
  font-weight: 600;
}

.who-title p {
  font-size: var(--p);
  opacity: 0.8;
}

.feedback-text {
  font-size: var(--p);
  font-weight: 400;
  line-height: 150%;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.feedback-card:hover {
  cursor: pointer;
  scale: 1.05;
}

.feedback-text:hover {
  cursor: pointer;
  opacity: 1;
}
</style>

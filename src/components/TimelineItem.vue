<template>
  <div class="timeline-container" ref="container">
    <div class="line" :style="{ height: lineHeight + 'px' }"></div>
    <div
      v-for="(item, index) in timeline"
      :key="index"
      class="timeline-entry"
      :style="{ '--i': index }"
    >
      <div class="marker"></div>
      <div class="content">
        <p class="period">{{ item.period }}</p>
        <h2>{{ item.title }}</h2>
        <p class="company">🧱 {{ item.company }}</p>
        <p class="location">📍 {{ item.location }}</p>
        <ul>
          <li v-for="(desc, i) in item.description" :key="i">{{ desc }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { watch } from "vue";
// import timeline from "../data/timeline.json";
import { useFetchData } from "@/composables/useFetchData";

const url = "https://rakeshkanna-rk.github.io/database/portfolio/timeline.json";
const { data: timeline, isLoading, error } = useFetchData(url, "timeline");

const container = ref(null);
const lineHeight = ref(0);
const markers = ref([]);

const updateProgress = () => {
  const el = container.value;
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const scrollY = window.scrollY;
  const offsetTop = el.offsetTop;
  const height = el.offsetHeight;

  const progress = scrollY + window.innerHeight / 2 - offsetTop;
  const maxHeight = height;

  // Cap line growth to halfway through the last entry
  const cappedHeight = Math.min(progress, maxHeight);
  lineHeight.value = cappedHeight;

  // Marker activation
  markers.value.forEach((m) => {
    const top = m.getBoundingClientRect().top + scrollY;
    const centerY = top + m.offsetHeight / 2;
    if (scrollY + window.innerHeight / 2 >= centerY) {
      m.classList.add("active");
    } else {
      m.classList.remove("active");
    }
  });
};

onMounted(() => {
  window.addEventListener("scroll", updateProgress);
});

watch(timeline, async (val) => {
  if (!val || !val.length) return;

  await nextTick();
  markers.value = Array.from(container.value.querySelectorAll(".marker"));
  updateProgress();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateProgress);
});
</script>

<style scoped>
.timeline-container {
  position: relative;
  padding-left: 60px;
  margin: 4rem 0;
}
.line {
  position: absolute;
  left: 30px;
  top: 0;
  width: 4px;
  background: linear-gradient(to bottom, #00f, #f0f);
  transition: height 0.3s ease;
  z-index: 0;
  height: 0;
}

.marker {
  position: absolute;
  left: -38px;
  top: 10px;
  width: 18px;
  height: 18px;
  background: #111;
  border: 2px solid #fff;
  border-radius: 50%;
  transition: background 0.3s, border-color 0.3s;
}

.marker.active {
  background: #0ff;
  border-color: #0ff;
  box-shadow: 0 0 8px #0ff;
}

@keyframes growLine {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}

.timeline-entry {
  position: relative;
  margin-bottom: 60px;
  animation: fadeUp 0.6s ease forwards;
  animation-delay: calc(var(--i) * 0.2s);
  opacity: 0;
}
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* .marker {
  position: absolute;
  left: -38px;
  top: 10px;
  width: 18px;
  height: 18px;
  background: #111;
  border: 2px solid #fff;
  border-radius: 50%;
} */
.content {
  background: var(--glass-color-05);
  backdrop-filter: blur(6.5px);
  border: 0.1px solid #ffffff3e;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
}

h2 {
  font-family: var(--primary-font);
}

.period {
  font: 1em var(--style-font);
  color: #a5a5a5;
}
.company,
.location {
  font: 1em var(--style-font);
  color: #ccc;
}
ul {
  margin-top: 10px;
  padding-left: 20px;
}
li {
  margin-bottom: 6px;
  line-height: 1.4;
  font-family: var(--primary-font);
}
</style>

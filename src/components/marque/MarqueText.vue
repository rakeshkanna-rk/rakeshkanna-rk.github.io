<template>
  <div class="marquee-wrapper">
    <div class="marquee-track">
      <div class="marquee-text">
        <span v-for="(word, index) in words" :key="index"
          >{{ word }} &nbsp;✦ &nbsp;</span
        >
        <!-- Repeat to create continuous effect -->
        <span v-for="(word, index) in words" :key="'repeat-' + index">
          {{ word }} ✦
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const words = [
  "INNOVATIVE",
  "CREATIVE",
  "FULL-STACK",
  "PROBLEM SOLVER",
  "UI/UX MINDED",
  "AGILE",
  "ACCESSIBLE",
  "MODERN",
  "PERFORMANCE-FIRST",
];
</script>

<style scoped>
.marquee-wrapper {
  overflow: hidden;
  position: relative;
  height: 60px;
  transform: skewY(-3deg);
  background: linear-gradient(to right, #0052d4, #4364f7, #6fb1fc);
  margin: 120px 0;
}

@media screen and (max-width: 601px) {
  .marquee-wrapper {
    margin: 80px 0;
  }
}

.marquee-track {
  white-space: nowrap;
  display: inline-block;
  animation: scroll 25s linear infinite;
}

.marquee-text {
  font-size: 1.4rem;
  color: white;
  display: inline-flex;
  font-family: var(--primary-font);
  padding: 1rem 0;
  text-transform: uppercase;
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.3));
}

/* Smooth infinite scroll */
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>

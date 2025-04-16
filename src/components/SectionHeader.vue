<template>
  <div class="header-wrapper">
    <p class="subheading">{{ subheading }}</p>
    <h1 class="main-heading">
      {{ mainHeading }}<span class="shimmer">{{ shimmerText }}</span>
    </h1>
  </div>
</template>

<script setup>
const props = defineProps({
  subheading: String,
  mainHeading: String,
  shimmerText: String,
});
</script>

<style scoped>
.header-wrapper {
  text-align: center;
  padding: 3rem 1rem;
  font-family: "Inter", sans-serif;
}

.subheading {
  font-size: 0.875rem;
  color: #bcbcbc;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: -1.3rem;
}

.main-heading {
  font-size: 3rem;
  font-family: var(--primary-font);
  font-weight: 600;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.shimmer {
  background: linear-gradient(75deg,#ff8000,#f0c 53.2394%,#04f);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: shimmer 10s linear infinite;
  font-family: var(--playball-font);
  padding-right: 20px;
  font-weight: 400;
}

@keyframes shimmer {
  0% {
    background-position: 0;
  }
  50% {
    background-position: 100%;
  }
  100% {
    background-position: 0;
  }
}
</style>

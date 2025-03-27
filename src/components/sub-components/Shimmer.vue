<template>
  <div class="shimmer-text">{{ text }}</div>
</template>

<style scoped>
.shimmer-text {
  background: linear-gradient(90deg, #ddd 25%, #aaa 50%, #ddd 75%);
  background-size: 200% 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shimmer 1.5s infinite linear;

  text-align: center;
  font-family: var(--playball-font);
  font-size: var(--h1);
  font-weight: 400;
  position: relative;
  margin: 0;
  line-height: 1.9;
  padding: 0 10px;
}

@media screen and (max-width: 601px) {
  .shimmer-text {
    font-size: calc(var(--h1) * 0.75);
  }
}

@keyframes shimmer {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>

<script>
export default {
  name: "Shimmer",
  props: {
    text: String,
  },
};
</script>

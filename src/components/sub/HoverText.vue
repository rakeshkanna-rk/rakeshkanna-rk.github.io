<template>
  <div class="highlight-text">
    <span
      v-for="(char, index) in text"
      :key="index"
      class="char"
      :style="{ opacity: index <= hoverIndex ? 1 : 0.5}"
      @mouseover="hoverIndex = index"
      @mouseleave="hoverIndex = -1"
    >
      {{ char }}
    </span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({ text: String });
const hoverIndex = ref(-1);
</script>

<style scoped>
.highlight-text {
  display: inline-block;
  color: #fff;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
}

.char {
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
}
</style>

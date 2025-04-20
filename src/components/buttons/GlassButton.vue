<template>
  <div>
    <a class="glass-button" @click="$emit('openForm')">
      <p
        v-motion
        :initial="{ opacity: 0, x: 10 }"
        :visible-once="{ opacity: 1, x: 0 }"
        :duration="500"
        :delay="1000"
      >
        Connect
      </p>
      <img
        src="@/assets/arrow-right.svg"
        alt="arrow"
        v-motion
        :initial="{ rotate: -90}"
        :visible-once="{ rotate: 0}"
        :duration="500"
        :delay="1000"
      />
    </a>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showForm = ref(false);
</script>

<style scoped>
.glass-button p {
  font-family: var(--primary-font);
  font-size: 18px;
  padding: 0 0 0 15px;
  line-height: 0;
}
.glass-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 5px;
  gap: 10px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.418);

  font-size: 16px;
  color: white;
  font-family: var(--primary-font);
  cursor: pointer;

  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(6.5px);

  transition: color 0.5s ease-in;
}
.glass-button img {
  padding: 10px;
  background: #fff;
  border-radius: 50px;
}

.glass-button:hover {
  color: #149ed4;
  box-shadow: 0 0 10px #149ed4;
}
.glass-button:hover img {
  background: #149ed4;
}
</style>

<script>
export default {
  name: "GlassButton",
};
</script>

<template>
  <div
    class="logo-wrapper"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <!-- Slide-down Text -->
    <div class="cta-text" :class="{ show: hover }">Let’s work together</div>

    <!-- Logo -->
    <img
      src="@/assets/logo-wings2.svg"
      alt="logo-wing"
      class="logo-img"
      :class="{ shrink: hover }"
    />

    <!-- Slide-up Email Copy -->
    <div class="email-copy" :class="{ show: hover }">
      <EmailCopy />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import EmailCopy from "./EmailCopy.vue";

const hover = ref(false);
</script>

<style scoped>
.logo-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

/* Logo */
.logo-img {
  width: 100%;
  height: auto;
  transition: transform 0.4s ease;
}

.logo-img.shrink {
  transform: scale(0.9);
}

/* Top Text Animation */
.cta-text {
  position: absolute;
  top: -40px;
  align-self: center;
  text-align: center;
  opacity: 0;
  scale: 0.8;
  font-family: var(--primary-font);
  font-size: var(--h3);
  font-weight: 600;

  transition: all 0.5s ease;
  color: var(--white-color); /* Or any custom color */
  pointer-events: none;
}

.cta-text.show {
    top: 8px;
  opacity: 1;
  scale: 1;
}

/* Email Copy (Bottom) */
.email-copy {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  opacity: 0;
  transition: all 0.4s ease;
  pointer-events: none;
}

.email-copy.show {
  transform: translateX(-50%) translateY(-40px);
  opacity: 1;
  pointer-events: auto;
}
</style>

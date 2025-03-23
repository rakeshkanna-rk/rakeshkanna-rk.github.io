<template>
  <div class="menu" :class="{ active: isOpen }">
    <img class="close-icon" src="../../assets/close.svg" @click="closeMenu" />

    <div class="menu-holder">
      <TransitionGroup name="fade">
        <div
          class="menu-items"
          v-for="(page, index) in pages"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: -100 }"
          :visible="{ opacity: 1, y: 0 }"
          :duration="500"
        >
          <a class="item wrap" :href="page.link">
            <div class="img-holder">
              <img class="icon" :src="`./icons/${page.icon}.svg`" />
            </div>
            <div class="wrapper">
              <a class="item" :href="page.link">{{ page.title }}</a>
              <p class="desc">{{ page.desc }}</p>
            </div>
          </a>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import { watchEffect } from "vue";

const props = defineProps({ isOpen: Boolean, pages: Array });
const emit = defineEmits(["close"]);

const closeMenu = () => emit("close");

// Prevent scrolling when menu is open
watchEffect(() => {
  document.body.style.overflow = props.isOpen ? "hidden" : "";
});
</script>


<script>
export default {
  name: "MobiMenu",
  props: {
    pages: Array,
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  width: 100%;
  flex-shrink: 0;
  position: relative;
  gap: 15px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  gap: 5px;
}

.desc {
  font-family: var(--primary-font);
  font-size: var(--p);
  color: #fefefe;
  opacity: 0.7;
  margin: 0;
}

.icon {
  filter: brightness(0) invert(1);
  padding: 15px;
}

.close-icon {
  position: absolute;
  top: 20px;
  right: 15px;
  z-index: 2;
}

.img-holder {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  background: radial-gradient(
    closest-side,
    rgba(51, 51, 51, 1) 0%,
    rgba(35, 35, 35, 1) 100%
  );
  border-radius: 10px;
  border: 2px solid #464646;
}

.menu-holder {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  gap: 20px;
  padding:100px 0 0 0;
}

.menu {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100vh;
  z-index: 2;
  left: 0;
  background-color: #000000;
  gap: 20px;
  overflow: hidden;
  top: -100vh;
  transition: transform 0.5s ease-in-out;
}

.menu-items {
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  align-self: stretch;
  position: relative;
  gap: 20px;
}

.item {
  color: #fefefe;
  text-align: center;
  font-family: var(--primary-font);
  font-size: var(--h3);
  font-weight: 400;
  position: relative;
  margin: 0;
  text-decoration: none;
}

@media screen and (max-width: 601px) {
  .menu {
    display: flex;
    flex-direction: column;
  }
}

/* 🔹 Add Transition Effect for .menu-items */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.menu.active {
  top: 0;
}

/* 🔹 Animate Child Elements */
.menu-holder {
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.menu.active .menu-holder {
  opacity: 1;
  transform: translateY(0);
}
</style>

<template>
  <div class="menu" :class="{ active: isOpen }">
    <img
      class="close-icon"
      src="../../assets/close.svg"
      @click="closeMenu"
      v-motion
      :initial="{ rotate: 180 }"
      :visible="{ rotate: 0 }"
      :duration="800"
    />

    <div class="menu-holder">
      <TransitionGroup name="fade">
        <div
          class="menu-items"
          v-for="(page, index) in pages"
          :key="index"
          v-motion
          :initial="{ opacity: 0, x: 100 }"
          :visible="{ opacity: 1, x: 0 }"
          :duration="500"
          :delay="index * 200"
          :class="{ 'active-page': route.path === page.link }"
        >
          <router-link
            class="item wrap"
            :to="page.link"
            @click="closeMenu"
          >
            <div class="img-holder">
              <img class="icon" :src="`./icons/${page.icon}.svg`" />
            </div>
            <div class="wrapper">
              <a class="item" :href="page.link">{{ page.title }}</a>
              <p class="desc">{{ page.desc }}</p>
            </div>
          </router-link>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import { watchEffect } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({ isOpen: Boolean, pages: Array });
const emit = defineEmits(["close"]);
const route = useRoute(); // Fix: Use Vue Router's `useRoute()`

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
  }
};
</script>

<style scoped>
.active-page {
  background: var(--glass-color-05);
  border-radius: 20px;
}

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
  color: var(--white-color);
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
  background: var(--radial-black);
  border-radius: 10px;
  border: var(--black-boarder);
}

.menu-holder {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  gap: 20px;
  padding: 80px 0 0 0;
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
  color: var(--white-color);
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

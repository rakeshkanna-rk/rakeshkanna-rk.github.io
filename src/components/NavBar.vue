<template>
  <div class="navbar">
    <MobiMenu :pages="pages" :isOpen="isMenuOpen" @close="isMenuOpen = false" />
    <img
      class="logo"
      src="../assets/logo.svg"
      title="logo"
      alt="logo"
      v-motion
      v-once
      :initial="{ opacity: 0, y: -50 }"
      :visible-once="{ opacity: 1, y: 0 }"
      :duration="500"
    />
    <img
      class="handburger-menu"
      src="../assets/handburger-menu.svg"
      @click="isMenuOpen = !isMenuOpen"
      v-motion
      v-once
      title="menu"
      alt="menu"
      :initial="{ opacity: 0, y: -50 }"
      :visible-once="{ opacity: 1, y: 0 }"
      :duration="500"
    />

    <LargeMenu :pages="pages" />
    <div
      class="social-link-container"
      v-motion
      v-once
      :initial="{ opacity: 0, y: -50 }"
      :visible-once="{ opacity: 1, y: 0 }"
      :duration="500"
    >
      <SocialLink
        v-once
        v-for="(social, index) in socialLinks"
        :key="index"
        :link="social.link"
        :img="social.img"
        :title="social.title"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isMenuOpen = ref(false);
</script>

<script>
import socialLinks from "@/data/socialLinks.json";
import pages from "@/data/pages.json";
import SocialLink from "./sub/SocialLink.vue";
import MobiMenu from "./sub/MobiMenu.vue";
import LargeMenu from "./sub/LargeMenu.vue";

export default {
  name: "NavBar",

  components: {
    SocialLink,
    MobiMenu,
    LargeMenu,
  },

  data() {
    return {
      socialLinks,
      pages,
    };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  position: relative;
  flex-shrink: 0;
  padding: var(--padding);
  z-index: 2;
}

.social-link-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  gap: 18px;
}

.handburger-menu {
  display: none;
}

@media screen and (max-width: 601px) {
  .social-link-container {
    display: none;
  }
  .handburger-menu {
    display: block;
  }
  .navbar {
    padding: var(--mobi-padding);
  }
  .logo {
    height: 45px;
    width: auto;
  }
}
</style>

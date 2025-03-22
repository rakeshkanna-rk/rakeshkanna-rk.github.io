<template>
  <div class="navbar">
    <MobiMenu :pages="pages" :isOpen="isMenuOpen" @close="isMenuOpen = false" />
    <img
      class="logo"
      src="../assets/logo.svg"
      v-motion
      :initial="{ opacity: 0, y: -50 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="500"
    />
    <img
      class="handburger-menu"
      src="../assets/handburger-menu.svg"
      @click="isMenuOpen = !isMenuOpen"
      v-motion
      :initial="{ opacity: 0, y: -50 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="500"
    />

    <div
      class="social-link-container"
      v-motion
      :initial="{ opacity: 0, y: -50 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="500"
    >
      <SocialLink
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
import socialLinks from "../data/socialLinks.json";
import pages from "../data/pages.json";
import SocialLink from "./sub-components/SocialLink.vue";
import MobiMenu from "./sub-components/MobiMenu.vue";

export default {
  name: "NavBar",

  components: {
    SocialLink,
    MobiMenu,
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
  z-index: 3;
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

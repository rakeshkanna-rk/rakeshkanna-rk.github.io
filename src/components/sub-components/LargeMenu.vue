<template>
  <div class="menu">
    <div
      class="menu-item"
      v-for="(page, index) in pages"
      :key="index"
      :class="{ 'menu-item-active': route.path === page.link }"
    >
      <router-link class="item" :to="page.link">{{ page.title }}</router-link>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "LargeMenu",
  props: {
    pages: Array,
  },
  setup() {
    const route = useRoute(); // Get current route
    return { route };
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  gap: 10px;
  padding: 5px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(6.5px);
  border-radius: 50px;
}

.menu-item {
  color: var(--white-color);
  text-align: center;
  font-family: var(--primary-font);
  position: relative;
  padding: 7px 15px;
  border-radius: 50px;
}

.menu-item-active {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(6.5px);
}

.item {
  color: var(--white-color);
  text-align: center;
  font-family: var(--primary-font);
  font-size: var(--p);
  font-weight: 400;
  position: relative;
  line-height: 0;
  text-decoration: none;
}

@media screen and (max-width: 601px) {
  .menu {
    display: none;
  }
}
</style>

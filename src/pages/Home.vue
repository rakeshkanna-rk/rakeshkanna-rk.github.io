<template>
  <div id="home">
    <!-- Background Image -->
    <img
      src="@/assets/bg/stone-bg.svg"
      class="bg-img"
      id="desktop-bg"
      alt="background image"
    />
    <img
      src="@/assets/bg/mobi-stone-bg.svg"
      class="bg-img"
      id="mobile-bg"
      alt="background image"
    />

    <DraggableBox />
    <div class="hero">
      <HeadLine />
    </div>
    <BentoGrid />
  </div>
</template>

<script>
import HeadLine from "../components/HeadLine.vue";
import BentoGrid from "@/components/BentoGrid.vue";
import DraggableBox from "../components/sub-components/DraggableBox.vue";

export default {
  name: "Home",
  components: {
    HeadLine,
    BentoGrid,
    DraggableBox,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>

.page-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 0 0 60px 0;
}

.bg-img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  pointer-events: none; /* Makes sure it doesn’t block clicks */
}

#desktop-bg {
  display: block;
}

#mobile-bg {
  display: none;
}

@media screen and (max-width: 601px) {
  #desktop-bg {
    display: none;
  }

  #mobile-bg {
    display: block;
  }
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  align-self: stretch;
  width: 100%;
  height: 80vh;
}

@media screen and (max-width: 601px) {
  .hero {
    height: 70vh;
  }
}
</style>

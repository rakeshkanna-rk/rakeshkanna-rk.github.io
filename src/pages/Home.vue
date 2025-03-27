<template>
  <div>
    <!-- <Particles /> -->
    <div class="hero">
      <HeadLine />
    </div>
    <BentoGrid />
  </div>
</template>

<script>
import HeadLine from "../components/HeadLine.vue";
import Particles from "../components/Particles.vue";
import BentoGrid from "@/components/BentoGrid.vue";

export default {
  name: "Home",
  components: {
    Particles,
    HeadLine,
    BentoGrid,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
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

<template>
  <div>
    <!-- <Particles /> -->
    <div class="hero">
      <HeadLine />
    </div>
  </div>
</template>

<script>
import HeadLine from "../components/HeadLine.vue";
import Particles from "../components/Particles.vue";

export default {
  name: "Home",
  components: {
    Particles,
    HeadLine,
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
  justify-content: center;
  align-items: center;
  align-self: stretch;
  width: 100%;
}
</style>

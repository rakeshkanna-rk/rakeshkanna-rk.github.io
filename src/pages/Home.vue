<template>
  <div>
    <!-- <Particles /> -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="500"
    >
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

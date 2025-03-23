<template>
  <div>
    <!-- <Particles /> -->
    <div>
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
